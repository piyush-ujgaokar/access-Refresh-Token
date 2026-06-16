const express=require('express')
const authMiddleware=require('../middleware/auth.middleware')
const router=express.Router()

router.get('/', authMiddleware, (req,res)=>{
    res.status(201).json({
        message:"Home Fetched Successfully"
    })
})

module.exports=router