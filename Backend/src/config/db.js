const mongoose=require('mongoose')


 const connectToDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DataBase Connected Successfully")
    }catch(err){
        throw Error("Error in Db",err)
    }
}

module.exports=connectToDb