import * as yup from "yup"

export const deviceSchema = yup.object().shape({
    label: yup.string().min(3).required("Required"),
    ip: yup
    .string()
    .matches(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      "Invalid IP address"
    )
    .required("Required"),
    port:yup.number().min(4).required("Required").positive("Should be positive"),
    dashboardPort:yup.number().min(4).required("Required").positive("Should be positive")
})