import {
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    CONFLICT,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT
} from "../type/HttpCode.js";
import {
    BAD_GATEWAY_MESSAGE, BAD_REQUEST_MESSAGE, CONFLICT_MESSAGE, FORBIDDEN_MESSAGE,
    GATEWAY_TIMEOUT_MESSAGE, INTERNAL_SERVER_ERROR_MESSAGE, METHOD_NOT_ALLOWED_MESSAGE, NOT_FOUND_MESSAGE,
    NOT_IMPLEMENTED_MESSAGE,
    SERVICE_UNAVAILABLE_MESSAGE, UNAUTHORIZED_MESSAGE
} from "../message/http.js";

class HttpError extends Error {
    constructor(status, message, data = null) {
        super(message);
        this.name = this.constructor.name;
        this.status = status;
        this.data = data;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export class BadRequest extends HttpError {
    constructor(message = BAD_REQUEST_MESSAGE, data = null) {
        super(BAD_REQUEST, message, data);
    }
}

export class Unauthorized extends HttpError {
    constructor(message = UNAUTHORIZED_MESSAGE, data = null) {
        super(UNAUTHORIZED, message, data);
    }
}

export class Forbidden extends HttpError {
    constructor(message =FORBIDDEN_MESSAGE, data = null) {
        super(FORBIDDEN, message, data);
    }
}

export class NotFound extends HttpError {
    constructor(message =NOT_FOUND_MESSAGE, data = null) {
        super(NOT_FOUND, message, data);
    }
}

export class MethodNotAllowed extends HttpError {
    constructor(message = METHOD_NOT_ALLOWED_MESSAGE, data = null) {
        super(METHOD_NOT_ALLOWED, message, data);
    }
}

export class Conflict extends HttpError {
    constructor(message =CONFLICT_MESSAGE, data = null) {
        super(CONFLICT, message, data);
    }
}

export class InternalServerError extends HttpError {
    constructor(message = INTERNAL_SERVER_ERROR_MESSAGE, data = null) {
        super(INTERNAL_SERVER_ERROR, message, data);
    }
}

export class NotImplemented extends HttpError {
    constructor(message = NOT_IMPLEMENTED_MESSAGE, data = null) {
        super(NOT_IMPLEMENTED, message, data);
    }
}

export class BadGateway extends HttpError {
    constructor(message = BAD_GATEWAY_MESSAGE, data = null) {
        super(BAD_GATEWAY, message, data);
    }
}

export class ServiceUnavailable extends HttpError {
    constructor(message = SERVICE_UNAVAILABLE_MESSAGE, data = null) {
        super(SERVICE_UNAVAILABLE, message, data);
    }
}

export class GatewayTimeout extends HttpError {
    constructor(message = GATEWAY_TIMEOUT_MESSAGE, data = null) {
        super(GATEWAY_TIMEOUT, message, data);
    }
}
