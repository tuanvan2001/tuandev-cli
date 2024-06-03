import {INTERNAL_SERVER_ERROR_MESSAGE} from "../message/http.js";

export default function (err, req, res, next) {
    let status = 500
    let message = INTERNAL_SERVER_ERROR_MESSAGE
    if (err.status) status = err.status
    if (err.message) message = err.message
    res.status(status).json({
        status,
        message,
        data: err.data || null
    })
}