"use client";
import { useGetAccessReports } from "@/customhooks/access-reports/useGetAccessReports";
import React from "react";
import TableContent from "./TableContent";
import { AccessReportType } from "@/types/type";

const TableBody = () => {
  const { data } = useGetAccessReports();

  return <div className="overflow-y-scroll max-h-[60vh]">{data?.data  && data.data.map((item: AccessReportType, index: number) => <TableContent key={index} {...item} />)}</div>;
};

export default TableBody;
