"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const identifier_validation_1 = require("../middleware/identifier.validation");
const identifier_controller_1 = require("../controllers/identifier.controller");
const express_1 = require("express");
const identifier_schema_1 = __importDefault(require("../schemas/identifier.schema"));
const identifierRoute = (0, express_1.Router)();
identifierRoute.get("/identifiers", identifier_controller_1.getIdentifiers);
identifierRoute.post("/identifier", (0, identifier_validation_1.validate)(identifier_schema_1.default), identifier_controller_1.postIdentifier);
identifierRoute.delete("/identifier/:id", identifier_controller_1.deleteIdentifier);
identifierRoute.put("/identifier/:id", identifier_controller_1.editIdentifier);
identifierRoute.get("/identifier/:id", identifier_controller_1.getSpecificIdentifier);
exports.default = identifierRoute;
