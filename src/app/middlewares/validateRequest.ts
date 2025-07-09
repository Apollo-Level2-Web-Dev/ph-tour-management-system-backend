import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"

export const validateRequest = (zodSchema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body = await zodSchema.parseAsync(req.body)
        next()
    } catch (error) {
        next(error)
    }
}