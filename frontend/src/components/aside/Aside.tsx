import Image from "next/image";
import React from "react";
import CustomLabel from "./CustomLabel";
import CustomListItems from "./CustomListItems";
import ListContainer from "./Listcontainer";


const Aside = () => {
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
              <CustomListItems label="ANPR Settings" isActive />
              <CustomListItems label="Gates and Actuators" />
              <CustomListItems label="Identifiers" />
              <CustomListItems label="Reservations" />
              <CustomListItems label="Alerts" />
              <CustomListItems label="ANPR Events" />
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
