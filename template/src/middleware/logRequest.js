export default (req, res, next) => {
    const fullPath = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

    const logData = {
        fullPath,
        originalUrl: req.originalUrl,
        ip: req.ip,
        headers: req.headers,
        body: req.body,
        query: req.query,
        params: req.params,
        created_at: new Date()
    }
    console.log(JSON.stringify(logData))
    next()
}