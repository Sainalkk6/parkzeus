import { z } from "zod";

const cameraSchema = z.object({
    port: z.number(),
    ip: z.string().ip(),
    name: z.string()
})

export default cameraSchema