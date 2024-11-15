"use client";
import { AccessControlDevicesType, DeviceRegisterFormType } from "@/types/type";
import { useFormik } from "formik";
import React from "react";
import CustomInputContainer from "./CustomInputContainer";
import CustomFormButton from "./CustomFormButton";
import { usePostDevice } from "@/customhooks/devices/usePostDevice";
import { useEditDevice } from "@/customhooks/devices/useEditDevice";
import { deviceSchema } from "@/schemas/deviceSchema";

const UncannyDeviceform = ({ device, deleteForm }: DeviceRegisterFormType) => {
  const { mutate: postDevice } = usePostDevice();
  const { mutate: editDevice } = useEditDevice();
  const getFormattedDateTime = (): string => new Date().toISOString().replace("T", " ").replace("Z", "") + new Date().toString().match(/([+\-]\d{2}:\d{2})$/)?.[0] || "";

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      dashboardPort: device?.dashboardPort || "",
      ip: device?.ip || "",
      label: device?.label || "",
      port: device?.port || "",
    } as AccessControlDevicesType,
    onSubmit: (values) => {
      deleteForm()
      postDevice({ ...values, port: Number(values.port), dashboardPort: Number(values.dashboardPort) });
      console.log(device);
      if (device) {
        editDevice({
          ...values,
          id: device.id,
          createdAt: device.createdAt,
          updatedAt: getFormattedDateTime(),
          port: Number(values.port),
          dashboardPort: Number(values.dashboardPort),
        });
      }       
    },
    validationSchema: deviceSchema,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 items-start justify-between">
        <div className="flex gap-2 basis-full">
          <CustomInputContainer  placeholder="Label" id="label" type="text" value={values.label} label="Label" handleChange={handleChange} />
          <CustomInputContainer  id="ip" placeholder="IP" value={values.ip} type="text" label="IP" handleChange={handleChange} />
          <CustomInputContainer  id="port" placeholder="Port" value={values.port} type="number" label="Port" handleChange={handleChange} />
          <CustomInputContainer  id="dashboardPort" placeholder="Dashboard Port" type="number" value={values.dashboardPort} label="Dashboard Port" handleChange={handleChange} />
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
