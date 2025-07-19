
const adminMiddleware = (req,res,next)=>{
    try{
        if(req.role !== "admin"){
            return res.status(403).json({ message : "Access denied", success : false })
        }
        next()

    }catch(error){
        res.status(400).json({ message : error.message, success : false })
    }
}

module.exports = adminMiddleware;