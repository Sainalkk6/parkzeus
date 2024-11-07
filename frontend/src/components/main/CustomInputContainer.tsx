import { InputContainerPropType } from "@/types/type";
import React, { useState } from "react";

const CustomInputContainer = ({ label, handleChange,placeholder, value, id ,type}: InputContainerPropType) => {
  const [touched,setIsTouched] = useState(false)
  console.log(value)
  const handleFocus = ()=>{
    if(value === "" || value === undefined){
      setTimeout(()=>setIsTouched(true),1000)
    } else{
      setIsTouched(false)
    }
  }
  return (
    <div className="mb-2 w-full">
      <label htmlFor={label} className="mb-2 text-gray-600 text-sm">
        {label}
      </label>
      <input type={type}  id={id} name={id} onFocus={handleFocus}  placeholder={placeholder} className="w-full autofill:bg-white px-3 py-1.5 text-base text-gray-700  bg-white bg-clip-padding border border-gray-300 rounded outline-none " onChange={handleChange} value={value} />
      {touched && <span className="text-red-400 text-sm">Required</span>}
    </div>
  );
};

export default CustomInputContainer;
