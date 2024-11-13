"use client";
import React, { useState } from "react";
import { IdentifierTablePropType } from "@/types/type";
import IdentifierElement from "./IdentifierElement";
import IdentifierFormContainer from "./IdentifierFormContainer";

const TableBody = ({ data, showModal, setShowModal }: IdentifierTablePropType) => {
  const [id, setId] = useState(0);

  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((identifier, index) => (
          <IdentifierElement
            id={identifier.id}
            key={index}
            showModal={showModal}
            setShowModal={setShowModal}
            email={identifier.email}
            identifierId={identifier.identifierId}
            identifierType={identifier.identifierType}
            index={index}
            organizationName={identifier.organizationName}
            owner={identifier.owner}
            parkingId={identifier.parkingId}
            validFrom={identifier.validFrom}
            validTo={identifier.validTo}
            vehicleType={identifier.vehicleType}
            setId={setId}
          />
        ))}
      {showModal && (
        <>
          <div
            className="bg-black opacity-20 fixed inset-0 z-20"
            onClick={() => {
              setShowModal(false);
              setId(0);
            }}
          />
          <IdentifierFormContainer setId={setId} id={id} setShowModal={setShowModal} />
        </>
      )}
    </>
  );
};

export default TableBody;
