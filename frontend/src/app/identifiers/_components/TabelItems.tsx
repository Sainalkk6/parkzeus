import { TableHeadingPropType } from "@/types/type";
import React from "react";

const TabelItems = ({ label,width }: TableHeadingPropType) => <div className={`overflow-hidden text-ellipsis text-sm text-gray-700 px-6 py-2 ${width ? width : ""}`}>{label}</div>;

export default TabelItems;
