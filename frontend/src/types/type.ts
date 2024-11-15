import { FormikErrors, FormikTouched } from "formik";
import React, { ChangeEventHandler, SetStateAction } from "react";

export type CustomLabelPropType = {
    label: string;
    image: string;
}

export type CustomListItemPropType = {
    label: string;
    isActive?: boolean;
    pointer?: string;
    setActiveLink?: React.Dispatch<React.SetStateAction<string>>
}

export type AccessControlDevicesType = {
    label: string;
    ip: string;
    port: number;
    dashboardPort: number;
}

export type InputContainerPropType = {
    label: string;
    value: string | number;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    id: string;
    type: "text" | "number"
    placeholder: string;
}

export type CustomButtonPropType = {
    label: string
    handleClick: any
}

export type CustomFormButtonType = {
    label: string
    handleClick?: any
    type: "submit" | "button"
}

export type DeviceRegisterFormType = {
    deleteForm: () => void
    device?: DeviceType;
}

export type CameraType = {
    cameraId: number;
    name: string;
    activated: boolean;
    external_id: number | null;
    deviceId?: number;
    createdAt?: Date;
    ip?: string;
    port?: number;
    saved?: boolean;
    label?: string;
    type:string
}

export type DeviceInitialValue = {
    label: string;
    ip: string;
    port: number;
    dashboardPort: number;
}

export type CamerCardType = {
    deviceLabel: string;
    deviceIp: string;
    devicePort: number;
    deviceId: number;
}

export type DeviceType = {
    createdAt: string;
    dashboardPort: number;
    id: number;
    label: string;
    port: number;
    updatedAt: string;
    ip: string;
}

export type CameraButtonPropType = {
    label: string;
    sign: string;
    deviceId: number;
    cam: CameraType;
}

export type ModalFormInputPropType = {
    name: string;
    id: string;
    placeholder?: string;
    value: string | number;
    type: "text" | "number"
    handleChange: (e: React.ChangeEvent<any>) => void
    label: string;
}

export interface CameraAttributes {
    cameraId: number;
    name: string;
    activated: boolean;
    external_id: number | null;
    deviceId: number;
    createdAt: Date;
    ip: string;
    port: number;
    saved: boolean;
    label: string;
    type:string
}

export type ModalPropType = {
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
    deviceId: number;
    cam: CameraType;

}

export type CameraContainerPropType = {
    isLoading: boolean;
    isError: boolean;
    data: DeviceType[];
}

export type TableHeadingPropType = {
    label: string | number;
    width?: string;
}

export type IdentifierFormType = {
    setShowModal: React.Dispatch<SetStateAction<boolean>>;
    id: number;
    setId: React.Dispatch<SetStateAction<number>>
}

export type MiniFormContainerType = {
    handleBlur?: (e: React.FocusEvent<any, Element>) => void;
    type: "select" | "input"
    label: string;
    options?: { label: string, value: string }[];
    placeholder?: string;
    handleChange: (e: React.ChangeEvent<any>) => void;
    value?: string | number;
    name?: string;
}

export type FormDatePropType = {
    label: string;
    handleChange: (e: React.ChangeEvent<any>) => void;
    value?: string | number;
    name?: string;
}

export type IdentifierDataType = {
    identifierId: string
    licensePlate: string;
    parkingId: number;
    organizationName: string;
    vehicleType: string;
    rfid: string;
    identifierType: string;
    owner: string;
    email: string;
    validFrom: string;
    validTo: string
}

export type IdentifierTablePropType = {
    data: FetchedIdentifier[]
    setShowModal: React.Dispatch<SetStateAction<boolean>>
    showModal: boolean;
}

export type IdentifierELementType = {
    id: number
    setId: React.Dispatch<SetStateAction<number>>;
    showModal: boolean;
    index?: number;
    identifierId: string;
    parkingId: number;
    organizationName: string;
    vehicleType: string;
    owner: string;
    email: string;
    validFrom: string;
    validTo: string;
    identifierType: string;
    setShowModal: React.Dispatch<SetStateAction<boolean>>
}

export type FetchedIdentifier = {
    identifierId: string
    licensePlate: string;
    parkingId: number;
    organizationName: string;
    vehicleType: string;
    rfid: string;
    identifierType: string;
    owner: string;
    email: string;
    validFrom: string;
    validTo: string
    id: number
}

export type EventCardMiniContainerPropType = {
    value: string;
    label: string;
}

export type EventDataType = {
    cameraName: string;
    externalId: number;
    identifierId: string;
    images: string[];
    timeStamp: string;
}

