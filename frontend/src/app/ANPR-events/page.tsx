"use client";
import Navbar from "@/components/main/Navbar";
import { useGetEvents } from "@/customhooks/Events/useGetEvents";
import React from "react";
import Card from "./_components/Card";
import { EventDataType } from "@/types/type";

const page = () => {
  const { data } = useGetEvents();
  console.log(data);
  return (
    <div className="flex flex-col w-full md:w-3/4 lg:w-4/5 xl:w-5/6">
      <Navbar />
      <div className="overflow-y-auto overflow-x-hidden p-10 h-full">
        <div className="bg-white p-5 rounded-md shadow-sm border mx-auto">
          <h2 className="font-medium leading-tight text-2xl mt-0 mb-5 text-gray-700 capitalize">Access control events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">{data && data.map((items: EventDataType, index: number) => <Card {...items} key={index} />)}</div>
        </div>
      </div>
    </div>
  );
};

export default page;
