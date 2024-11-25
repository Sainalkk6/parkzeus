import React from "react";
import TableItem from "./TableItem";
import { AccessReportType } from "@/types/type";

const TableContent = (props: AccessReportType) => {
  const items = [props.vehicleCategory,props.vehicleNumber,props.tagNo,props.entryGate,props.exitGate,props.entryTime,props.exitTime,props.duration]
  return (
    <div className="border-b grid grid-cols-9 py-[10px] bg-white w-full">
      {items.map((item,index)=><TableItem label={item} key={index}/>)}
    </div>
  );
};

export default TableContent;
