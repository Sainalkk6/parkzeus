"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSchema = void 0;
const zod_1 = require("zod");
const dataSchema = zod_1.z.object({
    label: zod_1.z.string({ required_error: "Label is required" }),
    ip: zod_1.z.string().ip(),
    port: zod_1.z.number(),
    dashboardPort: zod_1.z.number(),
});
exports.dataSchema = dataSchema;
