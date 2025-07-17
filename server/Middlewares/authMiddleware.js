const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{
    try{
        const { token } = req.cookies
        if(!token){
            return res.status(404).json({ message : "Token not available", success : false })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.id = decode.id
        req.role = decode.role
        next()
    }catch(error){
        res.status(401).json({ message : error.message, success : false })
    }
}

module.exports = authMiddleware;