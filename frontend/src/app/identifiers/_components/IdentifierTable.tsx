import React from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import { IdentifierDataType, IdentifierTablePropType, TableArraItemsType } from "@/types/type";

const IdentifierTable = ({data,showModal,setShowModal}:IdentifierTablePropType) => {
  const headings:TableArraItemsType[] = [{label:"#",width:"w-2"},{label:"Identifier ID",width:"w-80"},{label:"Parking ID",width:"w-80"},{label:"Organization",width:"w-80"},{label:"Vehicle Type",width:"w-80"},{label:"Owner Name"},{label:"Owner Email"},{label:"Valid From",width:"w-80"},{label:"Valid To",width:"w-80"},{label:"Type",width:"w-80"},{label:"Actions",width:"w-8"}]
  
  return (
    <div className="shadow-md bg-slate-200   w-full flex flex-col border-b ">
      <div className="w-full grid-cols-11 grid  justify-between">
        {headings.map((heading,index)=>(
          <TableHeading label={heading.label} width={heading.width} key={index}/>
        ))}
      </div>
      <div className="pb-2 bg-white">
        <TableBody showModal={showModal} setShowModal = {setShowModal} data={data} />
      </div>
    </div>
  );
};

export default IdentifierTable;
