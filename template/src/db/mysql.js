import {DataSource} from "typeorm";
import "dotenv"
import {config} from "dotenv";

config()
export const MySQL = new DataSource({
    "type": "mysql",
    "host": process.env.MYSQL_HOST,
    "port": Number(process.env.MYSQL_PORT),
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DB,
    "logging": process.env.NODE_ENV !== "production",
    "entities": [
        "src/entity/*.js"
    ],
    "cache": {
        "type": "ioredis",
        "options": {
            "keyPrefix": process.env.REDIS_KEY_PREFIX,
            "host": process.env.REDIS_HOST,
            "port": Number(process.env.REDIS_PORT),
            "password": process.env.REDIS_PASSWORD,
            "db": process.env.REDIS_DB
        },
        "duration": 5000
    }
})
