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
exports.editDevice = exports.deleteDevice = exports.getDevices = exports.postDevices = void 0;
const devices_service_1 = require("../services/devices.service");
const postDevices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const device = yield (0, devices_service_1.createDevice)(data);
        res.status(201).json(device);
    }
    catch (error) {
        res.status(400).json({ message: "Something went wrong", error });
    }
});
exports.postDevices = postDevices;
const getDevices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const devices = yield (0, devices_service_1.getAllDevices)();
        return res.status(200).json(devices);
    }
    catch (error) {
        return res.status(400).json({ message: "Something went wrong", error });
    }
});
exports.getDevices = getDevices;
const deleteDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield (0, devices_service_1.deleteSpecificDevice)(id);
        return res.status(200).json({ message: "Successfully removed" });
    }
    catch (error) {
        return res.status(400).json({ message: "Something went wrong", error });
    }
});
exports.deleteDevice = deleteDevice;
const editDevice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield (0, devices_service_1.edit)(data, id);
        return res.status(200).json({ message: "Data has been edited successfully" });
    }
    catch (error) {
        return res.status(400).json({ message: "Something went wrong", error });
    }
});
exports.editDevice = editDevice;
