"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const identifierSchema = zod_1.z.object({
    licensePlate: zod_1.z.string(),
    vehicleType: zod_1.z.string(),
    identifierType: zod_1.z.string(),
    parkingId: zod_1.z.number().max(9999999).nullish()
});
exports.default = identifierSchema;
