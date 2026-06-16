const jwt=require('jsonwebtoken')


const generateAccessToken=(userId)=>{
    const accessToken=jwt.sign({id:userId},process.env.JWT_ACCESS_KEY,{
        expiresIn:"10m"
    })

    return accessToken
}

const generateRefreshToken=(userId)=>{
    const refreshToken=jwt.sign({id:userId},process.env.JWT_REFRESH_KEY,{
        expiresIn:"1d"
    })
    return refreshToken
}


module.exports={
    generateAccessToken,
    generateRefreshToken
}