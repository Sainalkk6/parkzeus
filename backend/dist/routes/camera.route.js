"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const camera_validation_1 = require("../middleware/camera.validation");
const camera_controller_1 = require("../controllers/camera.controller");
const express_1 = require("express");
const Camera_schema_1 = __importDefault(require("../schemas/Camera.schema"));
const cameraRouter = (0, express_1.Router)();
cameraRouter.get("/uncannycams/cameras/:id", camera_controller_1.getCameras);
cameraRouter.patch("/cameras/:id", camera_controller_1.editCamera);
cameraRouter.delete("/cameras/:id", camera_controller_1.deleteCamera);
cameraRouter.post("/uncannycams/cameras", (0, camera_validation_1.validate)(Camera_schema_1.default), camera_controller_1.addCamera);
exports.default = cameraRouter;
