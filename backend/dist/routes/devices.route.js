"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const devices_controller_1 = require("../controllers/devices.controller");
const express_1 = require("express");
const validation_1 = require("../middleware/validation");
const device_schema_1 = require("../schemas/device.schema");
const deviceRouter = (0, express_1.Router)();
deviceRouter.post("/uncannycams", (0, validation_1.validate)(device_schema_1.dataSchema), devices_controller_1.postDevices);
deviceRouter.get("/uncannycams", devices_controller_1.getDevices);
deviceRouter.delete("/uncannycams/:id", devices_controller_1.deleteDevice);
deviceRouter.put("/uncannycams/:id", devices_controller_1.editDevice);
exports.default = deviceRouter;
