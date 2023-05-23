const mongoose=require("mongoose");

const connectDB=()=>{
    mongoose.connect(process.env.MONGODB_URI)
    console.log("connected")
}

module.exports =connectDB;
