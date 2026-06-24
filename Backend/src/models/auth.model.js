const mongoose=require('mongoose')



const userSchema=new mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        required:[true, "Email is Required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password Is Required"]
    },
    refreshToken:{
        type:String
    }
})


const userModel=mongoose.model('user',userSchema)

module.exports=userModel