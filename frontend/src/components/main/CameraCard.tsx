"use client";
import { useGetCamera } from "@/customhooks/cameras/useGetCamera";
import { CameraType, CamerCardType } from "@/types/type";
import React, { useState } from "react";
import CameraButton from "./CameraButton";

const CameraCard = ({ deviceId, deviceIp, deviceLabel, devicePort }: CamerCardType) => {
  const { data } = useGetCamera(deviceId);
  const savedCameras = data?.data.filter((cam: CameraType) => cam.saved === true);
  const unSavedCameras = data?.data.filter((cam: CameraType) => cam.saved === false);



  return (
    <div className="border-b pb-5 last:border-none min-h-24 text-black">
      <div className="flex justify-between">
        <span className="self-end text-sm text-gray-600">{`${deviceLabel} | ${deviceIp}:${devicePort}`}</span>
        <button className="p-2 bg-[#e46176] rounded-md hover:scale-110 h-fit ml-auto block transition-all duration-200">
          <img src="/refresh.svg" alt="refetch" />
        </button>
      </div>
      <h1 className="text-sm text-gray-600">Uncanny Cameras</h1>
      {/* saved Cameras */}
      <div className="flex flex-wrap gap-2 mt-2 flex-col">
        <h1>Saved Cameras</h1>
        <div className="flex flex-wrap gap-2 mt-2">{savedCameras && savedCameras.length > 0 ? savedCameras.map((cam: CameraType, index: number) => <CameraButton  deviceId={deviceId} cam={cam} label={cam.label ? cam.label : cam.name} sign="Sync" key={index} />) : <span>No Cameras</span>}</div>
      </div>

      {/* Unsaved camera section */}
      <div className="flex flex-wrap gap-2 mt-2 flex-col">
        <h1>Unsaved Cameras</h1>
        <div className="flex flex-wrap gap-2 mt-2">{unSavedCameras && unSavedCameras.length > 0 ? unSavedCameras.map((cam: CameraType, index: number) => <CameraButton  deviceId={deviceId}  cam={cam} sign="+" label={cam.name} key={index} />) : <span>No unsaved cameras</span>}</div>
      </div>
    </div>
  );
};

export default CameraCard;
