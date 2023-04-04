const connectDB=require("./db/connect");
const Product=require("./models/product");
require('dotenv').config();
const productJson=require('./products.json')
const start=async()=>{
try {
     connectDB();
    await Product.deleteMany();
    await Product.create(productJson)
    console.log("success")
} catch (error) {
    console.log(error);
}
}
start();