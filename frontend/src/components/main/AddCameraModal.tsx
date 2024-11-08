"use client";
import React, { useEffect, useState } from "react";
import ModalFormInput from "./ModalFormInput";
import { useFormik } from "formik";
import { CameraAttributes, ModalPropType } from "@/types/type";
import { usePostCameras } from "@/customhooks/cameras/usePostCameras";
import CustomFormButton from "./CustomFormButton";
import { useUpdateCamera } from "@/customhooks/cameras/useUpdateCamera";
import { useDeleteCamera } from "@/customhooks/cameras/useDeleteCamera";
import { cameraSchema } from "@/schemas/cameraSchema";

const AddCameraModal = ({ setShowModal, cam, deviceId }: ModalPropType) => {
  console.log(cam);

  const { mutate: postCamera } = usePostCameras(deviceId);
  const { mutate: updateCamera } = useUpdateCamera(deviceId);
  const { mutate: deleteCamera } = useDeleteCamera(deviceId);

  const { values, handleChange, handleSubmit , touched } = useFormik({
    initialValues: { activated: cam.activated, cameraId: cam.cameraId < 10 ? Date.now() % 100 : cam.cameraId, deviceId, external_id: cam.external_id, ip: cam.ip || "", label: cam.label || "", name: cam.name, port: cam.port || 0, saved: cam.saved } as CameraAttributes,
    onSubmit: (values) => {
      if (cam.saved) {
        updateCamera(values);
      } else {
        postCamera({ ...values, saved: true });
      }
      setShowModal(false);
    },
    validationSchema:cameraSchema
  });
  return (
    <div className="fixed z-30 max-h-[96%] overflow-y-auto bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-md w-[90%] md:w-1/3 md:min-w-1/3 md:max-w-1/2">
      <section className="bg-white p-5 rounded-md shadow-sm border flex flex-col">
        <header className="flex justify-end mb-2">
          <button onClick={() => setShowModal(false)}>
            <img src="/close.svg" alt="" />
          </button>
        </header>
        <form onSubmit={handleSubmit}>
          <h2 className="mb-2 text-lg">Add Camera</h2>
          <ModalFormInput  handleChange={handleChange} id="port" label="Port" name="port" type="number" value={values.port} />
          <ModalFormInput  handleChange={handleChange} id="ip" label="IP" name="ip" type="text" value={values.ip} placeholder="IP" />
          <ModalFormInput  handleChange={handleChange} id="label" label="Name" name="label" type="text" value={values.label} placeholder="Ex: 2w_Exit_Anpr_North1" />
          <div className="mt-5 flex gap-5">
            <CustomFormButton label="Save" type="submit" />
            {cam.saved && (
              <CustomFormButton
                label="Delete"
                type="button"
                handleClick={() => {
                  deleteCamera(cam.cameraId);
                  setShowModal(false);
                }}
              />
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCameraModal;
