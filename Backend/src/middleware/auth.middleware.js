const jwt=require("jsonwebtoken")
const userModel = require("../models/auth.model")


const authMiddleware=async(req,res,next)=>{
        try{

            const accessToken=req.cookies.accessToken

            if(!accessToken){
                return res.status(401).json({
                    message:"Unauthorized Request"
                })
            }

            const decoded=jwt.verify(accessToken,process.env.JWT_ACCESS_KEY)

                if(!decoded){
                return res.status(401).json({
                    message:"Unauthorized Request"
                })
            }

            const user=await userModel.findById(decoded.id)

            req.user=user

            next()



        }catch(err){
            throw Error(err)
        }
}


module.exports=authMiddleware