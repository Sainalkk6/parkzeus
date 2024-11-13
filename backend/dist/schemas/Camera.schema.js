"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const cameraSchema = zod_1.z.object({
    port: zod_1.z.number(),
    ip: zod_1.z.string().ip(),
    name: zod_1.z.string()
});
exports.default = cameraSchema;
