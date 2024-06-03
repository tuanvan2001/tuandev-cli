import jwt from 'jsonwebtoken';
import {config} from "dotenv";
config()
const SECRET_KEY =process.env.JWT_SECRET;

export const generateToken = (data, expiryMinutes = 60) => {
    const expiration = Math.floor(Date.now() / 1000) + (60 * expiryMinutes);
    return jwt.sign({...data, exp: expiration}, SECRET_KEY);
};

export const verifyToken = (token) => {
    try {
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
