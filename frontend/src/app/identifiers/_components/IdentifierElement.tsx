"use client";
import { IdentifierELementType, TableArraItemsType } from "@/types/type";
import React, { useEffect, useState } from "react";
import TabelItems from "./TabelItems";
import { useDeletIdentifier } from "@/customhooks/identifiers/useDeleteIdentifier";
;

const IdentifierElement = (props: IdentifierELementType) => {
  const { mutate: deleteIdentifier } = useDeletIdentifier();
  const handleDelete = (id: number) => deleteIdentifier(id);
  const handleEdit = () => {
    props.setShowModal(true)
    props.setId(props.id)
  };
  const items:TableArraItemsType[] = [{label:props.index!,width:"w-2"},{label:props.identifierId,width:"w-32"},{label:props.parkingId,width:"w-32"},{label:props.organizationName,width:"w-32"},{label:props.vehicleType,width:"w-20"},{label:props.owner},{label:props.email},{label:props.validFrom,width:"w-32"},{label:props.validTo,width:"w-32"},{label:props.identifierType,width:"w-32"}]


  return (
    <>
      <div className="border-b grid-cols-11 py-[10px] bg-white grid w-full" key={props.identifierId}>
        {items.map((item,index)=>(
          <TabelItems label={item.label} key={index} width={item.width} />
        ))}
        <div className="px-6 py-2 flex gap-2 items-start">
          <button onClick={handleEdit}>
            <img src="/edit.svg" alt="" />
          </button>
          <button onClick={() => handleDelete(Number(props.id))}>
            <img src="/trash.svg" alt="" />
          </button>
        </div>
      </div>
      
    </>
  );
};

export default IdentifierElement;
