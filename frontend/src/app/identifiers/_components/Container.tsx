"use client";
import React, { useEffect, useState } from "react";
import IdentifierTable from "./IdentifierTable";
import { useGetIdentifiers } from "@/customhooks/identifiers/useGetIdentifiers";
import { FetchedIdentifier } from "@/types/type";

const Container = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newData,setNewData] = useState([] as FetchedIdentifier[])
  const {data} = useGetIdentifiers()
  useEffect(() => {
    if (data?.data) {
      const filteredData = searchTerm
        ? data.data.filter((item:FetchedIdentifier) =>
            Object.values(item).some(value => 
              value != null && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
          )
        : data.data;
      setNewData(filteredData);
    }
  }, [data, searchTerm]);

  return (
    <div className="overflow-y-auto w-full overflow-x-hidden p-10 h-full">
      <div className="flex items-center justify-between">
        <button className="text-sm text-gray-800 bg-slate-200 px-6 py-2 hover:bg-slate-300 duration-300 my-2 capitalize" onClick={() => setShowModal(true)}>
          add identifier
        </button>
        <div className="flex justify-center xl:w-96">
          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" className="flex-auto min-w-0 w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-gray-300 rounded-l transition m-0 focus:text-gray-700 focus:bg-white focus:border-slate-300 outline-none" placeholder="Search" />
          <button className="px-6 py-1 bg-slate-300 text-gray-600 font-medium text-xs leading-tight uppercase rounded-r hover:bg-slate-400 transition duration-150 flex items-center justify-center">
            <img src="/search.svg" alt="" />
          </button>
        </div>
      </div>
      
      <IdentifierTable showModal={showModal} setShowModal = {setShowModal} data = {newData} />
    </div>
  ); 
};

export default Container;
