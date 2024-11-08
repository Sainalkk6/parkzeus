import { FormikErrors, FormikTouched } from "formik";
import { ChangeEventHandler, SetStateAction } from "react";

export type CustomLabelPropType = {
    label: string;
    image: string;
}

export type CustomListItemPropType = {
    label: string;
    isActive?: boolean;
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
    label?: string
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