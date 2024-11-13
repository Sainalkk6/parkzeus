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
exports.getIdentifiers = exports.postIdentifier = exports.deleteIdentifier = exports.getSpecificIdentifier = exports.editIdentifier = void 0;
const identifier_service_1 = require("../services/identifier.service");
const postIdentifier = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const identifier = yield (0, identifier_service_1.createIdentifier)(data);
        res.status(201).json(identifier);
    }
    catch (error) {
        next(error);
        res.status(400);
    }
});
exports.postIdentifier = postIdentifier;
const getSpecificIdentifier = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = yield (0, identifier_service_1.getSpecific)(id);
        return res.status(201).json(data);
    }
    catch (error) {
        next(error);
        res.status(404);
    }
});
exports.getSpecificIdentifier = getSpecificIdentifier;
const getIdentifiers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const identifier = yield (0, identifier_service_1.getAll)();
        return res.status(201).json(identifier);
    }
    catch (error) {
        next(error);
        res.status(404);
        throw new Error("Something went wrong when fetching the identifiers");
    }
});
exports.getIdentifiers = getIdentifiers;
const deleteIdentifier = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield (0, identifier_service_1.deleteSpecificIdentifier)(Number(id));
        return res.status(200).json({ message: "Identifier deleted successfully" });
    }
    catch (error) {
        next(error);
        res.status(404);
        throw new Error("We couldnt find what you are looking for");
    }
});
exports.deleteIdentifier = deleteIdentifier;
const editIdentifier = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const data = req.body;
        yield (0, identifier_service_1.edit)(data, id);
        return res.status(200).json({ message: "Identifier updated successfully" });
    }
    catch (error) {
        next(error);
        res.status(404);
        throw new Error("We could'nt find what you are looking for");
    }
});
exports.editIdentifier = editIdentifier;
