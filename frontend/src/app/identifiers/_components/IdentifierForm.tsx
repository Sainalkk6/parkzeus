"use client";
import MiniFormContainer from "./MiniFormContainer";
import { useFormik } from "formik";
import CustomFormButton from "@/components/main/CustomFormButton";
import { identifierSchema } from "@/schemas/identifierSchema";
import FormDateInput from "./FormDateInput";
import { usePostIdentifier } from "@/customhooks/identifiers/usePostIdentifiers";
import { FetchedIdentifier, IdentifierFormType } from "@/types/type";
import { useUpdateIdentifier } from "@/customhooks/identifiers/useUpdateIdentifier";
import { useGetSpecificIdentifier } from "@/customhooks/identifiers/useGetSpecificIdentifier";

const IdentifierForm = (props: IdentifierFormType) => {
  const { data } = useGetSpecificIdentifier(props.id);
  const identifier: FetchedIdentifier = data?.data;
  const { mutate } = usePostIdentifier();
  const { mutate: editPost } = useUpdateIdentifier(props.id);

  const { handleChange, handleSubmit, values, errors, touched, handleBlur } = useFormik({
    enableReinitialize: true,
    initialValues: {
      parkingId: identifier?.parkingId || "",
      identifierId: identifier?.identifierId || "",
      identifierType: identifier?.identifierType || "LP",
      plate: identifier?.licensePlate || "",
      organization: identifier?.organizationName || "",
      vehicleType: identifier?.vehicleType || "2w",
      owner: identifier?.owner || "",
      email: identifier?.email || "",
      rfid: identifier?.rfid || "",
      validFrom: identifier?.validFrom || "",
      validTo: identifier?.validTo || "",
    },
    onSubmit: (values) => {
      if (identifier && identifier.identifierId) {
        editPost({
          ...values,
          id: identifier.id,
          identifierId: values.rfid !== "" ? values.rfid : values.plate,
          licensePlate: values.plate,
          parkingId: Number(values.parkingId),
          organizationName: values.organization,
        });
      } else {
        mutate({
          ...values,
          identifierId: values.rfid !== "" ? values.rfid : values.plate,
          licensePlate: values.plate,
          parkingId: values.identifierId ? Number(values.parkingId) : null,
          organizationName: values.organization || null,
        });
      }
      props.setShowModal(false);
    },
    validationSchema: identifierSchema,
  });
  console.log(errors)

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <MiniFormContainer
          label="Identifier Type"
          type="select"
          name="identifierType"
          options={[
            { label: "License Plate", value: "LP" },
            { label: "RFID", value: "RFID" },
          ]}
          value={values.identifierType}
          handleChange={handleChange}
        />
        {values.identifierType === "RFID" ? (
          <>
            <MiniFormContainer handleBlur={handleBlur} handleChange={handleChange} label="RFID Tag *" type="input" name="rfid" placeholder="RFID Tag" value={values.rfid} /> {touched.rfid && errors.rfid ? <span className="text-red-500 relative -top-3 text-sm left-1">Required</span> : ""}
          </>
        ) : (
          ""
        )}

        <MiniFormContainer handleBlur={handleBlur} handleChange={handleChange} label="License Plate *" type="input" name="plate" placeholder="License Plate" value={values.plate} />
        {touched.plate && errors.plate ? <span className="text-red-500 relative -top-3 text-sm left-1">Required</span> : ""}
        <MiniFormContainer handleChange={handleChange} label="Parking ID" type="input" name="parkingId" placeholder="Parking ID" value={values.parkingId} />
        <MiniFormContainer handleChange={handleChange} label="Organization Name" type="input" name="organization" placeholder="Organization Name" value={values.organization} />
        <MiniFormContainer
          handleChange={handleChange}
          label="Vehicle Type *"
          type="select"
          options={[
            { label: "2w", value: "2w" },
            { label: "4w", value: "4w" },
          ]}
          name="vehicleType"
        />
        <MiniFormContainer handleChange={handleChange} label="Owner name (optional)" type="input" name="owner" placeholder=" Owner name (optional)" value={values.owner} />
        <MiniFormContainer handleChange={handleChange} label="Owner email (optional)" type="input" name="email" placeholder=" Owner email (optional)" value={values.email} />
        <FormDateInput handleChange={handleChange} label="Valid from (optional)" name="validFrom" value={values.validFrom} />
        <FormDateInput handleChange={handleChange} label="Valid up to (optional)" name="validTo" value={values.validTo} />
        <CustomFormButton label="Add" type="submit" />
      </form>
    </div>
  );
};

export default IdentifierForm;
