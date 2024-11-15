import { FormDatePropType } from "@/types/type";
import React from "react";

const FormDateInput = ({ handleChange, label, name, value }: FormDatePropType) => {
  return (
    <div className="mb-4">
      <label className="text-gray-600 text-sm w-full mb-2">{label}</label>
      <input value={value} type="date" name={name} placeholder="dd-mm-yyyy" onChange={handleChange} min="1997-01-01" max="2060-12-31" className="w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 outline-none focus:text-gray-700" />
    </div>
  );
};

export default FormDateInput;
