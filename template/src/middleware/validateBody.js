import {validationResult} from "express-validator";
import {BAD_REQUEST} from "../type/HttpCode.js";
import {BAD_REQUEST_MESSAGE} from "../message/http.js";

const validators = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) return next()
    const errorsObject = objectError(errors)
    const response = {
        code: BAD_REQUEST,
        message: BAD_REQUEST_MESSAGE,
        data: errors.array(),
        validate_request: true,
        errors:errorsObject
    }
    return res.status(BAD_REQUEST).json(response)
}

const objectError = errors => {
    const errorsMap = new Map()
    for (let error of errors.array()) {
        if (!errorsMap.has(error.path))
            errorsMap.set(error.path, error.msg)
    }
    return Object.fromEntries(errorsMap)

}
export default validators
