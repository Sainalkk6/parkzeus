"use client"
import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";


const Table = () => {
  const labels = ["Vehicle Category","Vehicle Number", "Tag no","Entry Gate","Exit Gate","Entry Time","Exit Time","Duration","Validity Status"]
 
  return (
    <div className="shadow-md bg-slate-200 w-full px-4 flex flex-col border-b">
      <div className="w-full grid grid-cols-9 justify-between ">
        {labels.map(label=><TableHead label={label} key={label}/>)}
      </div>
      <TableBody />
      <div className="flex items-center w-full justify-center gap-5 py-5">
        <a href="http://localhost:4922/logs/pdf" className="flex items-center justify-center px-3 py-2 bg-blue-900 text-white rounded-sm hover:scale-105 hover:bg-blue-500 transition-all duration-200">Download pdf</a>
        <a href="http://localhost:4922/logs/csv" className="flex items-center justify-center px-3 py-2 bg-blue-900 text-white rounded-sm hover:scale-105 hover:bg-blue-500 transition-all duration-200" >Download csv</a>
      </div>
    </div>
  );
};

export default Table;
