import * as yup from "yup"

export const deviceSchema = yup.object().shape({
    label: yup.string().min(3).required("Required"),
    ip: yup.array().test({
        name: "ip",
        test: (value) => {
            if (!Array.isArray(value)) return false
            if (value.length === 0) return false
            return value.every(ip=>/^((25[0-5]|(2[0-4]|1\d|[1-9])\d)\.?\b){4}$/.test(ip))
        },
    }).required("Required"),
    port:yup.number().min(4).required("Required").positive("Should be positive"),
    dashboardPort:yup.number().min(4).required("Required").positive("Should be positive")
})