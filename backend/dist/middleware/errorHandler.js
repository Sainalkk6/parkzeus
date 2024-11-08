"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const errorHandler = (err, req, res, next) => {
    var _a;
    const statusCode = (_a = err.statusCode) !== null && _a !== void 0 ? _a : 500;
    switch (statusCode) {
        case constants_1.constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;
        case constants_1.constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stackTrace
            });
            break;
        case constants_1.constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stackTrace
            });
        default:
            break;
    }
};
exports.default = errorHandler;
