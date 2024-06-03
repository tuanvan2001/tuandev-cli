import express from "express";
import {config} from "dotenv";
import cors from "./src/middleware/cors.js";
import notFound from "./src/middleware/notFound.js";
import errorHandle from "./src/middleware/errorHandle.js";
import responseEnhancer from "./src/middleware/responseEnhancer.js";
import logRequest from "./src/middleware/logRequest.js";
import {MySQL} from "./src/db/mysql.js";
import router from "./src/router/index.js";
import limiter from "./src/middleware/rateLimit.js";
import rateLimit from "express-rate-limit"

const {PORT, HOST} = process.env
config()

const main = async () => {
    await MySQL.initialize()

    const app = express()

    app.use(cors())
        .use(limiter(rateLimit))
        .use(express.json())
        .use(logRequest)
        .use(responseEnhancer)
        .use(router)
        .use(errorHandle)
        .use(notFound)
        .listen(Number(PORT), HOST)
}

main()