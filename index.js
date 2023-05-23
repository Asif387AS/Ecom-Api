 const express = require('express')
 require('dotenv').config();
const app = express()
const port = process.env.PORT || 6000
const products_route=require("./routes/products")
const connectDB=require("./db/connect")

app.get('/', (req, res) => res.send('Hello World!'))

// http://localhost:5000/api/products

// middleware to  set router 
app.use('/api/products',products_route)

const startApp =()=>{
    try {
         connectDB();
        app.listen(port, () => console.log(`Express app listening on port ${port}!`))
    } catch (error) {
        console.log(`Exception: ${error} occurred`)
    }
}

startApp();
