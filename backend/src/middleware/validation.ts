import { Request, Response, NextFunction } from "express"
import { AnyZodObject } from "zod"

export const validate = (schema: AnyZodObject) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        try {
            schema.parse(req.body)
            next()
        } catch (error) {
            res.status(400).json({ message: "Something went wrong", error })
        }
    }
}

