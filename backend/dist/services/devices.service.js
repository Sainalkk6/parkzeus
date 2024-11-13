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
exports.edit = exports.deleteSpecificDevice = exports.getAllDevices = exports.createDevice = void 0;
const Device_1 = require("../sequelize/models/Device");
const createDevice = (data) => __awaiter(void 0, void 0, void 0, function* () {
    yield Device_1.Device.create(data);
    return ("Data has been added successfully");
});
exports.createDevice = createDevice;
const getAllDevices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Device_1.Device.findAll();
    return result;
});
exports.getAllDevices = getAllDevices;
const deleteSpecificDevice = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield Device_1.Device.destroy({ where: { id: id } });
});
exports.deleteSpecificDevice = deleteSpecificDevice;
const edit = (data, id) => __awaiter(void 0, void 0, void 0, function* () {
    yield Device_1.Device.update(data, { where: { id } });
});
exports.edit = edit;
