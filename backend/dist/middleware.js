"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => {
    return (req, res, next) => {
        console.log("yeeha");
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            res.status(400).json({ message: "Something went wrong", error });
        }
    };
};
exports.validate = validate;
