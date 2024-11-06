import { z } from "zod";

const dataSchema = z.object({
    label: z.string({ required_error: "Label is required" }),
    ip: z.string().ip(),
    port: z.number(),
    dashboardPort: z.number(),
})

export { dataSchema }