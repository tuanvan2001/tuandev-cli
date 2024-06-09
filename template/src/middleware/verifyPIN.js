import {BAD_REQUEST} from "../type/HttpCode.js";

const verifyPIN = async (req, res, next) => {
    try {
        const {pin} = req.user
        const {pin: reqPIN} = req.query
        if (!reqPIN)
            throw new Error("PIN is not found.")
        if (reqPIN !== pin)
            throw new Error("PIN is invalid.")
        next()
    } catch (e) {
        return res.status(BAD_REQUEST).json({
            message: e.message
        })
    }
}