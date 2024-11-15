import React from "react";
import MiniContainer from "./MiniContainer";
import { EventDataType } from "@/types/type";

const Card = (props: EventDataType) => {
  const { cameraName, externalId, identifierId, images, timeStamp } = props;
  const date = timeStamp.slice(4, 15);
  const time = timeStamp.slice(15, 24);
  console.log(time);

  return (
    <div className="p-5 space-y-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm">
      <p className="font-bold">1234</p>
      <div className="flex gap-4">
        {images.map((image, index) => (
          <img key={index} className="w-1/2 rounded" src={image} alt="" />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <MiniContainer label="Date" value={date} />
        <MiniContainer label="Time" value={time} />
        <MiniContainer label="Camera" value={cameraName} />
        <MiniContainer label="Vehicle Identifier" value={identifierId} />
      </div>
    </div>
  );
};

export default Card;
