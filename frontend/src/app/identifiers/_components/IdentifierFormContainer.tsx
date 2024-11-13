import React from "react";
import FormHeader from "./FormHeader";
import { IdentifierFormType } from "@/types/type";
import IdentifierForm from "./IdentifierForm";

const IdentifierFormContainer = (props:IdentifierFormType) => {

  return (
    <div className="fixed text-black z-30 max-h-[96%] overflow-y-auto bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-md w-[90%] md:w-1/3 md:min-w-1/3 md:max-w-1/2">
      <div className="bg-white p-5 rounded-md shadow-sm border flex flex-col">
        <div className="justify-end flex items-center mb-2">
          <button onClick={() =>{
             props.setShowModal(false)
             props.setId(0)
          }}>
            <img src="/close.svg" alt="" />
          </button>
        </div>
        <h1 className="text-lg mb-3">Add Identifiers</h1>
        <div className="w-full flex flex-col">
          <FormHeader />
          <IdentifierForm  {...props} />
        </div>
      </div>
    </div>
  );
};

export default IdentifierFormContainer;
