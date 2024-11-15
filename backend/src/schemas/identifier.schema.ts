import { z } from "zod";

const identifierSchema = z.object({
    licensePlate: z.string(),
    vehicleType: z.string(),
    identifierType: z.string(),
    parkingId: z.number().max(9999999).nullish()
})

export default identifierSchema