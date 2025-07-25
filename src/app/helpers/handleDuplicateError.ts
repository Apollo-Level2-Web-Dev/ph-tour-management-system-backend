import { TGenericErrorResponse } from "../interfaces/error.types"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const handlerDuplicateError = (err: any): TGenericErrorResponse => {
    const matchedArray = err.message.match(/"([^"]*)"/)

    return {
        statusCode: 400,
        message: `${matchedArray[1]} already exists!!`
    }
}