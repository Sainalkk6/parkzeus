"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const camera_controller_1 = require("../controllers/camera.controller");
const express_1 = require("express");
const cameraRouter = (0, express_1.Router)();
cameraRouter.get("/uncannycams/cameras/:id", camera_controller_1.getCameras);
cameraRouter.patch("/cameras/:id", camera_controller_1.editCamera);
cameraRouter.delete("/cameras/:id", camera_controller_1.deleteCamera);
cameraRouter.post("/uncannycams/cameras", camera_controller_1.addCamera);
exports.default = cameraRouter;
