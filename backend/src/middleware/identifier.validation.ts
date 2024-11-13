import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validate = (schema: AnyZodObject) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body)
            next()
        } catch (error) {
            next(error)
            res.status(400)
            throw new Error("Something went wrong while validating please recheck what you have entered and try again")
        }
    }
}