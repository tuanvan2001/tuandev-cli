const verifyToken = async (req,res,next) => {
    try {
        const token = req.cookie?.token ? req.cookie?.token : req.headers?.token
    }catch (e) {

    }
}