const express=require('express')
const {registerUser,loginUser, generateAccessTokenController}=require('../controllers/auth.controller')
const authMiddleware = require('../middleware/auth.middleware')

const router=express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/me',authMiddleware,(req,res)=>{
    return res.status(200).json({
        message:"User fetched Successfully",
        user:req.user
    })
})
router.get('/get-accessToken',generateAccessTokenController)


module.exports=router