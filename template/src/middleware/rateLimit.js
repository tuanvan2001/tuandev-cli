import {redis} from "../db/redis.js";
import { RedisStore} from 'rate-limit-redis'
import {TOO_MANY_REQUESTS} from "../type/HttpCode.js";
const sendCommand = (...args) => {
    return redis.call(...args);
};
const limiter = (rateLimit) => {
    return rateLimit({
        store: new RedisStore({
            sendCommand
        }),
        windowMs: 60 * 1000,
        max: 200,
        standardHeaders: true,
        keyGenerator: (request, response) => request.ip,
        handler: (request, response) => {
            response.status(TOO_MANY_REQUESTS).json({
                message: 'Too many requests, please try again later.'
            });
        }
    });
};

export default limiter
