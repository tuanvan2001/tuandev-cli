import {redis} from "../db/redis.js";
import {RedisStore} from 'rate-limit-redis'
import {TOO_MANY_REQUESTS} from "../type/HttpCode.js";
import {TOO_MANY_REQUESTS_MESSAGE} from "../message/http.js";
import {config} from "dotenv";

config()
const sendCommand = (...args) => {
    return redis.call(...args);
};
const limiter = (rateLimit) => {
    return rateLimit({
        store: new RedisStore({
            sendCommand
        }),
        windowMs: 60 * 1000,
        max: Number(process.env.RATE_LIMIT_MAX) || 100,
        standardHeaders: true,
        keyGenerator: (request, response) => {
            if (request.user) return request.user?.id || request.user?.uuid
            else return request.ip
        },
        handler: (request, response) => {
            response.status(TOO_MANY_REQUESTS).json({
                message: TOO_MANY_REQUESTS_MESSAGE
            });
        }
    });
};

export default limiter
