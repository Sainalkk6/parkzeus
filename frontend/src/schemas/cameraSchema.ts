import * as yup from "yup"

export const cameraSchema = yup.object().shape({
    ip: yup.array().test({
        name: "ip",
        test: (value) => {
            if (!Array.isArray(value)) return false
            if (value.length === 0) return false
            return value.every(ip=>/^((25[0-5]|(2[0-4]|1\d|[1-9])\d)\.?\b){4}$/.test(ip))
        },
        message:"Enter a valid ip address"
    }).required("Required"),
    port:yup.number().positive("Should be positive").min(4),
    name:yup.string().required("Required")
})
