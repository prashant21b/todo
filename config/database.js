const mongoose=require('mongoose')

const url=process.env.MONGO_URI
exports.dbConnection=async(req,res)=>{
    try{
       const connection= await mongoose.connect(url)
         console.log("Mongodb connected")
        //console.log(connection.Connection)

    }
    catch(error){
        console.log("MonoDB connection error:",error)
    }
}