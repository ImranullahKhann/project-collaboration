import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token)
        return res.status(401).json({
            message: 'Access Denied!'
        })
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = decoded.user
        next();
    }
    catch (e) {
        return res.status(401).json({
            message: 'Invalid Token.'
        })
    }
}

export default verifyToken