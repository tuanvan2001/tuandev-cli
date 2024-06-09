import jwt from 'jsonwebtoken';
import {config} from "dotenv";

config()
const SECRET_KEY = process.env.JWT_SECRET;

export const generateToken = (data, expiryMinutes = 60) => {
    const expiration = Math.floor(Date.now() / 1000) + (60 * expiryMinutes);
    const token = jwt.sign({...data, exp: expiration}, SECRET_KEY)
    return Buffer.from(token, "utf8").toString("base64");
};

export const verifyToken = (token) => {
    try {
        token = Buffer.from(token,"base64").toString("utf8")
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return {errorMessage: "Token đã hết hạn.", expired: true};
        } else {
            return {errorMessage: "Token không hợp lệ."};
        }
    }
};

//
// (function () {
//     const data = {
//         fullname: "Nguyen Van Tuan", email: "tuandev2001@gmail.com"
//     }
//     const token = generateToken(data)
//     console.log(token)
//     console.log(verifyToken(token))
// })()