"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            next(error);
            res.status(400);
            throw new Error("Something went wrong while validating please recheck what you have entered and try again");
        }
    };
};
exports.validate = validate;
