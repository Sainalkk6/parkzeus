"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCamera = exports.deleteCamera = exports.editCamera = exports.getCameras = void 0;
const camera_service_1 = require("../services/camera.service");
const getCameras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const camera = yield (0, camera_service_1.getDeviceCameras)(id);
        return res.status(200).json(camera);
    }
    catch (error) {
        res.status(404);
        throw new Error("Cameras not found");
    }
});
exports.getCameras = getCameras;
const editCamera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const camera = req.body;
        yield (0, camera_service_1.edit)(camera, id);
        return res.status(200).json({ message: "Data has been updated successfully" });
    }
    catch (error) {
        res.status(404);
        throw new Error("Camera not found or it doesnt exist");
    }
});
exports.editCamera = editCamera;
const deleteCamera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield (0, camera_service_1.deleteCam)(id);
        return res.status(200).json({ message: "Successfully deleted the camera" });
    }
    catch (error) {
        res.status(404);
        throw new Error("Camera not found or it has been already removed");
    }
});
exports.deleteCamera = deleteCamera;
const addCamera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const camera = yield (0, camera_service_1.addCam)(data);
        return res.status(200).json({ message: "Successfully added a cam to the data", data: camera });
    }
    catch (error) {
        res.status(400);
        throw new Error("The data you have entered is not valid");
    }
});
exports.addCamera = addCamera;
