export const tryCatch = function (func) {
    return async ( req, res, next) => {
        try {
            return await func(req, res, next)
        } catch (e) {
            next(e)
        }
    }
}