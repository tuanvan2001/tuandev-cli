import {CREATED, SUCCESS} from "../type/HttpCode.js";

export default function responseEnhancer(req, res, next) {
    res.sendSuccess = function ({data, message = 'Thành công.', status = SUCCESS}) {
        res.status(status).json({
            status,
            message,
            data
        });
    };

    res.sendCreated = function ({data, message = 'Thành công.', status = CREATED}) {
        res.status(status).json({
            status,
            message,
            data
        });
    };

    next();
}
