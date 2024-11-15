"use client";
import { IdentifierELementType } from "@/types/type";
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



  return (
    <>
      <div className="border-b grid-cols-11 py-[10px] bg-white grid w-full" key={props.identifierId}>
        <TabelItems label={props.index!} width="w-2" />
        <TabelItems label={props.identifierId!} width="w-32" />
        <TabelItems label={props.parkingId} width="w-32" />
        <TabelItems label={props.organizationName} width="w-32" />
        <TabelItems label={props.vehicleType} width="w-20" />
        <TabelItems label={props.owner} />
        <TabelItems label={props.email} />
        <TabelItems label={props.validFrom} width="w-32" />
        <TabelItems label={props.validTo} width="w-32" />
        <TabelItems label={props.identifierType} width="w-32" />
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
