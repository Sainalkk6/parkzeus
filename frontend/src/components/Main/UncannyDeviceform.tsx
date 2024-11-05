"use client";
import { AccessControlDevicesType, DeviceRegisterFormType } from "@/types/type";
import { useFormik } from "formik";
import React from "react";
import CustomInputContainer from "./CustomInputContainer";
import CustomFormButton from "./CustomFormButton";

const UncannyDeviceform = ({deleteForm}:DeviceRegisterFormType) => {
  const { values, handleChange } = useFormik({
    initialValues: {} as AccessControlDevicesType,
    onSubmit: () => {},
  });
  return (
    <form>
      <div className="flex gap-2 items-start justify-between">
        <div className="flex gap-2 basis-full">
          <CustomInputContainer id="label" value={values.label} label="Label" handleChange={handleChange} />
          <CustomInputContainer id="ip" value={values.ip} label="IP" handleChange={handleChange} />
          <CustomInputContainer id="port" value={values.port} label="Port" handleChange={handleChange} />
          <CustomInputContainer id="dashboardPort" value={values.dashboardPort} label="Dashboard Port" handleChange={handleChange} />
        </div>
        <div className="flex gap-2 mt-6">
          <CustomFormButton label="Save" type="submit" />
          <CustomFormButton handleClick={deleteForm} label="Delete" type="button" />
        </div>
      </div>
    </form>
  );
};

export default UncannyDeviceform;
