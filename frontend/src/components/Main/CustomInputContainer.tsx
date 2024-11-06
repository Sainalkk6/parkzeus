import { InputContainerPropType } from "@/types/type";
import React from "react";

const CustomInputContainer = ({ label, handleChange, value, id }: InputContainerPropType) => {
  return (
    <div className="mb-2 w-full">
      <label htmlFor={label} className="mb-2 text-gray-600 text-sm">
        {label}
      </label>
      <input type="text" id={id} name={id} className="w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-gray-300 rounded outline-none " onChange={handleChange} value={value} />
    </div>
  );
};

export default CustomInputContainer;
