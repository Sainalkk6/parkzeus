import React from "react";
import SectionContainer from "./SectionContainer";
import CameraCard from "./CameraCard";
import { CameraContainerPropType } from "@/types/type";

const CameraContainer = ({ data, isError, isLoading }: CameraContainerPropType) => {
  if(isLoading) return <div className="text-black text-lg justify-center items-center mt-[150px] w-full px-[50%]">Loading...</div>
  if(isError) return <div className="text-red-400 text-nowrap text-lg justify-center items-center mt-[150px] w-full px-[50%]">Something went wrong on our side</div>
  return (
    <SectionContainer>
      <div className="flex flex-col gap-6 justify-between min-h-24">{data && data.map((device) => <CameraCard deviceId={device.id} deviceIp={device.ip} deviceLabel={device.label} devicePort={device.dashboardPort} key={device.id} />)}</div>
    </SectionContainer>
  );
};

export default CameraContainer;
