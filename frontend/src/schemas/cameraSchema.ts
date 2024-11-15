import * as yup from "yup"

export const cameraSchema = yup.object().shape({
    ip: yup
        .string()
        .matches(
            /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
            "Invalid IP address"
        )
        .required("Required"),
    port: yup.number().positive("Should be positive").min(4),
    name: yup.string().required("Required")
})
