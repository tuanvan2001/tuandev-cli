export const bodySafe = (fields) => {
    return (req, res, next) => {
        for (let property in req.body) {
            if (!fields.includes(property)) delete req.body[property]
        }
        next()
    }
}