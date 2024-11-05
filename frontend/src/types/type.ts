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
    port: string;
    dashboardPort: string;
}

export type InputContainerPropType = {
    label: string;
    value: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    id:string;
}

export type CustomButtonPropType = {
    label:string
    handleClick:any
}

export type CustomFormButtonType = {
    label:string
    handleClick?:any
    type:"submit" | "button"
}

export type DeviceRegisterFormType = {
    deleteForm :()=>void
}