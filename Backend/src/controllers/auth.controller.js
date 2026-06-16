const {registerService,loginService, getAccessTokenService}=require('../services/auth.service')


 const registerUser=async(req,res)=>{
    const {accessToken,refreshToken,user}=await registerService(req.body)

    res.cookie("accessToken", accessToken,{
        httpOnly:true,
        sameSite:'lax',
        secure:false,
        maxAge:10 * 60 * 1000
    })
    res.cookie("refreshToken", refreshToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        maxAge:24 * 60 * 60 * 1000
    })
    
    res.status(201).json({
        message:"User Registered Successfully",
        user:user,
    })



}

 const loginUser=async(req,res)=>{
   
    const {isuserExist,accessToken,refreshToken}=await loginService(req.body)

    res.cookie("accessToken",accessToken,{
        httpOnly:true,
        secure:false,
        sameSite:'lax',
        maxAge:10*60*1000
    })
    res.cookie('refreshToken',refreshToken,{
        httpOnly:true,
        sameSite:'lax',
        secure:true,
        maxAge:24*60*60*1000
    })


    res.status(200).json({
        message:"User Logged in Successfully",
        user:isuserExist
    })

}

const generateAccessTokenController=async (req,res)=>{
    const refreshToken=req.cookies.refreshToken

    if(!refreshToken){
        return res.status(401).json({
            message:"Unauthorized request"
        })
    }

    const accessToken=await getAccessTokenService(refreshToken)

    res.cookie("accessToken",accessToken,{
        httpOnly:true,
        secure:false,
        sameSite:'lax',
        maxAge:10*60*1000
    })

    res.status(200).json({
        message:"Access Token Generated"
    })
   


}

module.exports={
    registerUser,
    loginUser,
    generateAccessTokenController
}