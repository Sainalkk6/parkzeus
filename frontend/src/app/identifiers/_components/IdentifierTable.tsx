import React from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import { IdentifierDataType, IdentifierTablePropType } from "@/types/type";

const IdentifierTable = ({data,showModal,setShowModal}:IdentifierTablePropType) => {
  
  return (
    <div className="shadow-md bg-slate-200   w-full flex flex-col border-b ">
      <div className="w-full grid-cols-11 grid  justify-between">
        <TableHeading label="#" width="w-2" />
        <TableHeading label="Identifier ID" width="w-80" />
        <TableHeading label="Parking ID" width="w-80" />
        <TableHeading label="Organization" width="w-80" />
        <TableHeading label="Vehicle Type" width="w-80" />
        <TableHeading label="Owner Name" width="160" />
        <TableHeading label="Owner Email" />
        <TableHeading label="Valid From" />
        <TableHeading label="Valid To" width="w-80" />
        <TableHeading label="Type" width="w-80" />
        <TableHeading label="Actions" width="w-8" />
      </div>
      <div className="pb-2 bg-white">
        <TableBody showModal={showModal} setShowModal = {setShowModal} data={data} />
      </div>
    </div>
  );
};

export default IdentifierTable;
