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
        return res.status(400).json({ message: "Something went wrong while fetching the cameras", error });
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
        return res.status(400).json({ message: "Something went wrong when trying to update the information" });
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
        return res.status(400).json({ message: "Something went wrong while trying to delete the camera", error });
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
        return res.status(400).json({ message: "Something went wrong while adding the camera", error });
    }
});
exports.addCamera = addCamera;
