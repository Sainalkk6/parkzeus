import { Request, Response, NextFunction } from "express"
import { AnyZodObject } from "zod"

export const validate = (schema: AnyZodObject) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        try {
            schema.parse(req.body)
            next()
        } catch (error) {
            next(error)
            res.status(400)
            throw new Error("Data you have entered have some validation problem please check and try again",)

        }
    }
}

