"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomLabel from "./CustomLabel";
import CustomListItems from "./CustomListItems";
import ListContainer from "./Listcontainer";

const Aside = () => {
  const [activeLink, setActiveLink] = useState("ANPR Settings");
  console.log(activeLink);
  return (
    <div className="shadow-md bg-white py-4  flex flex-col min-h-screen h-full md:w-1/4 lg:w-1/5 xl:w-1/6">
      <div className="ml-6">
        <Image alt="ParkZeus logo" src={"/ParkZeus-logo.png"} width={116} height={50.29} />
      </div>
      <div className="flex flex-1 flex-col justify-between mt-6">
        <div className="flex flex-col h-full ">
          <ListContainer>
            <CustomLabel label="Access Control" image="/shield.svg" />
            <ul className="p-2 mt02 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-inner bg-gray-50 ">
              <CustomListItems label="Configuration" />
              <CustomListItems setActiveLink={setActiveLink} pointer="/" label="ANPR Settings" isActive={activeLink === "ANPR Settings" ? true : false} />
              <CustomListItems label="Gates and Actuators" />
              <CustomListItems setActiveLink={setActiveLink} isActive={activeLink === "Identifiers" ? true : false} pointer="identifiers" label="Identifiers" />
              <CustomListItems label="Reservations" />
              <CustomListItems label="Alerts" />
              <CustomListItems setActiveLink={setActiveLink} isActive={activeLink === "ANPR Events" ? true : false} pointer="ANPR-events" label="ANPR Events" />
            </ul>
          </ListContainer>
          <ListContainer>
            <CustomLabel label="Global Configurations" image="/config.svg" />
          </ListContainer>
          <ListContainer>
            <CustomLabel label="Settings" image="/settings.svg" />
          </ListContainer>
        </div>
        <span className="px-6 font-semibold text-black">v4.20.0</span>
      </div>
    </div>
  );
};

export default Aside;
