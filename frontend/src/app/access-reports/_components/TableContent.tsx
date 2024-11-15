import React from "react";
import TableItem from "./TableItem";
import { AccessReportType } from "@/types/type";

const TableContent = (props: AccessReportType) => {
  return (
    <div className="border-b grid grid-cols-9 py-[10px] bg-white w-full">
      <TableItem label={props.vehicleCategory} />
      <TableItem label={props.vehicleNumber} />
      <TableItem label={props.tagNo} />
      <TableItem label={props.entryGate} />
      <TableItem label={props.exitGate} />
      <TableItem label={props.entryTime} />
      <TableItem label={props.exitTime} />
      <TableItem label={props.duration} />
      <TableItem label={props.validityStatus} />
    </div>
  );
};

export default TableContent;
