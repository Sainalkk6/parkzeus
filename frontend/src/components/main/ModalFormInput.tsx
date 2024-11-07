import { ModalFormInputPropType } from "@/types/type";
import React from "react";

const ModalFormInput = ({ handleChange, id, label, name, placeholder, type, value }: ModalFormInputPropType) => {
  return (
    <div className="mb-2">
      <label className="iniline-block mb-2 text-sm text-gray-600">{label}</label>
      <input type={type} id={id} placeholder={placeholder} name={name} className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border placeholder:text-gray-500 border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white outline-none" onChange={handleChange} value={value} />
    </div>
  );
};

export default ModalFormInput;
