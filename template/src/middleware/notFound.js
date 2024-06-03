import {NOT_FOUND} from "../type/HttpCode";
import {NOT_FOUND_MESSAGE} from "../message/http.js";

export default function (req, res, next) {
    res.status(NOT_FOUND).json({
        message:NOT_FOUND_MESSAGE
    })
}