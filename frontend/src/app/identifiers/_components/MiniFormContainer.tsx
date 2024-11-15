import { MiniFormContainerType } from "@/types/type";
import React from "react";

const MiniFormContainer = ({ handleChange,handleBlur, label, type, options, placeholder, value, name }: MiniFormContainerType) => {
  return (
    <div className="mb-4">
      <label className="text-gray-600 text-sm w-full mb-2">{label}</label>
      {type === "input" ? (
        <input onBlur={handleBlur} type="text" name={name} value={value} className="w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 outline-none" placeholder={placeholder} onChange={handleChange} />
      ) : (
        <select  name={name} value={value} onChange={handleChange} className="w-full px-2 py-1 border-2">
          {options && options?.length > 0 && options.map((option: { label: string; value: string }, index: number) => <option key={index} value={option.value}>{option.label}</option>)}
        </select>
      )}
    </div>
  );
};

export default MiniFormContainer;
