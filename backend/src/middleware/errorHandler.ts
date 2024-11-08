import { NextFunction, Request, Response } from "express";
import { constants } from "../constants";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode ?? 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stackTrace
            })
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stackTrace
            })
            break;
        case constants.SERVER_ERROR:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stackTrace
            })
        default:
            break;
    }





}

export default errorHandler;