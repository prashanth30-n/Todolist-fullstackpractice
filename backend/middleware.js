const jwt=require('jsonwebtoken');
const JWT_SECRET='123';
function authMiddleware(req,res,next){
    const authheader=req.headers.authorization
    if(!authheader || authheader){
        return res.status(401).json({
            msg:"you are not authenticated"
        })

}
const token=authheader.split("")[1];
try{
    const decoded=jwt.verify(token,JWT_SECRET);
    req.userId=decoded.userId;
    next(); // Store userId in request object for later use
}
catch(err){
    return res.status(403).json({
        msg:"invalid token or expired one"
    })
}
}
module.exports={
    authMiddleware
}