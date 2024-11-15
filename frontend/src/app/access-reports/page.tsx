import Navbar from "@/components/main/Navbar";
import Image from "next/image";
import React from "react";
import Table from "./_components/Table";

const ReportPage = () => {
  return (
    <div className="flex flex-col w-full md:w-3/4 lg:w-4/5 xl:w-5/6 text-black">
      <Navbar />
      <div className="flex items-center justify-between p-4">
        <Image src={"/ParkZeus-logo.png"} alt="Parkzeus logo" height={100} width={100} />
        <div>
          <h1 className="text-2xl font-light">Access Report</h1>
        </div>
        <div />
      </div>
      <div className="px-4"><Table /></div>
    </div>
  );
};

export default ReportPage;
