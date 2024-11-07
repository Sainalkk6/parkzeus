import React from "react";
import SectionContainer from "./SectionContainer";
import CameraCard from "./CameraCard";
import Dummy from "../Dummy";
import { DeviceType } from "@/types/type";

const CameraContainer = ({ data }: { data: DeviceType[] }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-6 justify-between">{data && data.map((device) => <CameraCard deviceId={device.id} deviceIp={device.ip} deviceLabel={device.label} devicePort={device.dashboardPort} key={device.id} />)}</div>
      {/* <div className="flex flex-col gap-6 justify-between">
        <Dummy/>
      </div> */}
    </SectionContainer>
  );
};

export default CameraContainer;
