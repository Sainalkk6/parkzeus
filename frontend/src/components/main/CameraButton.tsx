"use client";
import { CameraButtonPropType } from "@/types/type";
import React, { useState } from "react";
import BgCoverer from "./BgCoverer";
import AddCameraModal from "./AddCameraModal";

const CameraButton = ({ label, sign, cam, deviceId }: CameraButtonPropType) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(true);;



  return (
    <div>
      <button onClick={handleClick} >
        <div className="px-4 py-2 bg-white text-black border border-[#005691] mb-2 rounded-md flex items-center h-12">
          <span className="text-gray-500 mr-1">{label}</span>
          <span className="bg-blue-500 text-white px-3 py-1 rounded-3xl hover-bg-blue-600 ml-2 transition-colors duration-150">
            {sign}
          </span>
        </div>
      </button>
      {showModal && (
        <>
          <BgCoverer setShowModal={setShowModal} />
          <AddCameraModal cam={cam} deviceId={deviceId} setShowModal={setShowModal} />
        </>
      )}
    </div>
  );
};

export default CameraButton;
