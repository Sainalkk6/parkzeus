"use client";

import React, { useRef, useState } from "react";
import CustomButton from "./CustomButton";
import UncannyDeviceform from "./UncannyDeviceform";
import CarridaDeviceForm from "./CarridaDeviceForm";
import { useGetDevicesQuery } from "@/customhooks/devices/useGetDevices";
import { DeviceType } from "@/types/type";
import { useDeleteDevice } from "@/customhooks/devices/useDeleteDevice";

const DevicesRegister = () => {
  const [showDevice, setShowDevice] = useState(false);
  const [uncanny, setUncanny] = useState([] as number[]);
  const [carrida,setCarrida] = useState([]as number[])
  const {data} = useGetDevicesQuery()
  const {mutate} = useDeleteDevice()

  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = () => setShowDevice(!showDevice);
  const showUncanny = () => {
    const newId = Date.now();
    setShowDevice(false);
    setUncanny((prevIds) => [...prevIds, newId]);
  };

  const showCarrida = ()=>{
    const newId = Date.now()
    setShowDevice(false)
    setCarrida(prev=>[...prev,newId])
  }


  const deleteUncanny = (id: number) => setUncanny((prevIds) => prevIds.filter((uncanny) => uncanny !== id));
  const deleteCarrida = (id: number) => setCarrida((prevIds) => prevIds.filter((uncanny) => uncanny !== id));

  return (
    <section className="bg-white p-5 rounded-md shadow-sm border">
      <h1 className="text-lg text-black mb-4">Access Control ANPR Devices</h1>
      {data && data.map((device:DeviceType)=>(
        <UncannyDeviceform device={device} key={device.id} deleteForm={()=>mutate(device.id)}  />
      ))}
      {uncanny.map((id) => (
        <UncannyDeviceform key={id} deleteForm={() => deleteUncanny(id)} />
      ))}
      {carrida.map(id=>(
        <CarridaDeviceForm key={id} deleteForm={()=>deleteCarrida(id)} />
      ))}
      <div className="my-2" />
      <div className="relative">
        <button ref={buttonRef} onClick={handleClick} className="inline-flex items-center justify-center rounded-md border shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 ">
          Add new device <img src="/arrow.svg" className="-mr-1 ml-2 h-5 w-5" alt="" />
        </button>
        {showDevice && (
          <div className="absolute  mt-2 w-fit  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1">
            <CustomButton handleClick={showUncanny} label="uncanny" />
            <CustomButton handleClick={showCarrida} label="carrida" />
          </div>
        )}
      </div>
    </section>
  );
};

export default DevicesRegister;
