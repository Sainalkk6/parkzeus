import * as yup from "yup"

export const identifierSchema = yup.object().shape({
    identifierType: yup.string().required(),
    plate: yup.string().min(6).required(),
    id: yup.string(),
    organization: yup.string(),
    vehicleType: yup.string().required(),
    owner: yup.string(),
    email: yup.string(),
    rfid: yup.string().when("identifierType",{
        is:"RFID",
        then:(shema)=> shema.required("Required")
    }),
    validFrom:yup.date(),
    validTo:yup.date(),
    parkingId:yup.number().max(9999999999)
})