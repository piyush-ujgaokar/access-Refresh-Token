const userModel=require('../models/auth.model')
const bcrypt=require('bcryptjs')
const { generateAccessToken, generateRefreshToken } = require('../utils/generateTokens')
const jwt=require('jsonwebtoken')


const registerService=async (data)=>{
    try {

    const {email,name,password}=data

    if(!email || !name || !password){
       throw Error("All Fields Are Required")
    }

    const isuserAlreadyExists=await userModel.findOne({email})

    if(isuserAlreadyExists){
       throw Error("User Already Exists")
    }

    const hashPassword=bcrypt.hashSync(password,10)

    const user=await userModel.create({
        email,
        name,
        password:hashPassword
    })

    console.log(user)

    const accessToken= generateAccessToken(user._id)
    const refreshToken= generateRefreshToken(user._id)

    user.refreshToken=refreshToken
    await user.save()

    return {
        user,accessToken,refreshToken
    }

    } catch (error) {
        throw Error(error)
    }
}

const loginService=async (data)=>{
    try {
        
    const {email,password}=data

    const isuserExist=await userModel.findOne({email})

    if(!isuserExist){
       throw Error("user Not Found")
    }

    const isPasswordValid=bcrypt.compareSync(password,isuserExist.password)

    if(!isPasswordValid){
        throw Error("Password is Invalid")
    }


    const accessToken= generateAccessToken(isuserExist._id)
    const refreshToken= generateRefreshToken(isuserExist._id)

    isuserExist.refreshToken=refreshToken
    await isuserExist.save()

    return {
        isuserExist,accessToken,refreshToken
    }

    } catch (error) {
        throw Error (error)
    }
}   

const getAccessTokenService=async (refreshToken)=>{

     const decoded=await jwt.verify(refreshToken,process.env.JWT_REFRESH_KEY)

    if(!decoded){
        throw new Error("Unauthorized Request")
    }

    const user=await userModel.findById(decoded.id)

    if(user.refreshToken !== refreshToken) throw new Error("authorized")

    const accessToken=generateAccessToken(user._id)

    return accessToken


}




module.exports={
    registerService,
    loginService,
    getAccessTokenService
}