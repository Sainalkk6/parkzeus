"use client";
import React from "react";
import DevicesRegister from "./DevicesRegister";
import CameraContainer from "./CameraContainer";
import { useGetDevicesQuery } from "@/customhooks/devices/useGetDevices";

const Container = () => {
  const { data, isLoading, isError } = useGetDevicesQuery();
  return (
    <main className="overflow-y-auto p-10 h-full">
      <DevicesRegister />
      <CameraContainer isError={isError} isLoading={isLoading} data={data} />
    </main>
  );
};

export default Container;
