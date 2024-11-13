import { TableHeadingPropType } from "@/types/type";
import React from "react";

const TableHeading = ({ label, width }: TableHeadingPropType) => <label className={`text-sm font-medium text-gray-900 px-6 py-3 text-left ${width ? width : ""}`}>{label}</label>;

export default TableHeading;
