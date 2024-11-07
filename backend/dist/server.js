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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
const devices_route_1 = __importDefault(require("./routes/devices.route"));
const sequelise_1 = __importDefault(require("./sequelize/models/sequelise"));
const camera_route_1 = __importDefault(require("./routes/camera.route"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({ origin: "http://localhost:3000" }));
app.use(devices_route_1.default);
app.use(camera_route_1.default);
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    sequelise_1.default.authenticate();
    sequelise_1.default.sync();
    app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));
});
connect();
