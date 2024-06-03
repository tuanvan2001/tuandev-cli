import {body,query} from "express-validator"
import validators from "../../validateBody.js";
import {bodySafe} from "../../bodySafe.js";

export const addUser = [
    body('username')
        .isString().withMessage("Username phải là string.")
        .isLength({min: 3}).withMessage("Username phải có tối thiểu 3 ký tự."),
    body('email')
        .notEmpty().withMessage("email không được trống.")
        .isEmail().withMessage("email không hợp lệ."),
    body('password')
        .notEmpty().withMessage("password không được trống.")
        .isLength({min: 8}).withMessage("password không được ngắn hơn 8 ký tự."),
    bodySafe(['username', 'email', 'password']),
    validators
]