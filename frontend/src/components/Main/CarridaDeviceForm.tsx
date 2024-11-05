import React from "react";
import CustomFormButton from "./CustomFormButton";
import { DeviceRegisterFormType } from "@/types/type";
import CustomInputContainer from "./CustomInputContainer";
import { useFormik } from "formik";

const CarridaDeviceForm = ({ deleteForm }: DeviceRegisterFormType) => {
  const { values, handleChange } = useFormik({
    initialValues: { label: "" },
    onSubmit: () => {},
  });
  return (
    <form>
      <div className="flex gap-2 items-start justify-between">
        <div className="flex gap-2 basis-full">
          <div className="mb-2 w-full">
            <CustomInputContainer id="label" value={values.label} label="Label" handleChange={handleChange} />
          </div>
        </div>
        <div className="flex gap-2 mt-6">
          <CustomFormButton label="Save" type="submit" />
          <CustomFormButton handleClick={deleteForm} label="Delete" type="button" />
        </div>
      </div>
    </form>
  );
};

export default CarridaDeviceForm;
