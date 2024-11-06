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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCam = exports.deleteCam = exports.edit = exports.getDeviceCameras = void 0;
const Camera_1 = require("../sequelize/models/Camera");
const data_json_1 = __importDefault(require("../../dummyData/data.json"));
const getDeviceCameras = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cams = data_json_1.default.cameras;
    const savedCamera = yield Camera_1.Camera.findAll({ where: { deviceId: Number(id), saved: true } });
    let cameras = [...savedCamera];
    cams.forEach(camera => {
        const found = savedCamera.find(scam => scam.name === camera.name);
        if (!found) {
            cameras.push({
                cameraId: camera.camera_id,
                name: camera.name,
                activated: camera.activated,
                external_id: camera.external_id, saved: false
            });
        }
    });
    return cameras;
});
exports.getDeviceCameras = getDeviceCameras;
const edit = (camera, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield Camera_1.Camera.update(camera, { where: { cameraId: id } });
});
exports.edit = edit;
const deleteCam = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield Camera_1.Camera.destroy({ where: { cameraId: id } });
});
exports.deleteCam = deleteCam;
const addCam = (camera) => __awaiter(void 0, void 0, void 0, function* () {
    yield Camera_1.Camera.create(camera);
});
exports.addCam = addCam;
