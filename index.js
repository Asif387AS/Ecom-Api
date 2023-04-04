 const express = require('express')
 require('dotenv').config();
const app = express()
const port = process.env.PORT || 4000
const products_route=require("./routes/products")
const connectDB=require("./db/connect")
// app.get('/', (req, res) => res.send('Hello World!'))


// middleware to  set router 
app.use('/api/products',products_route)

const startApp =async()=>{
    try {
        await connectDB();
        app.listen(port, () => console.log(`Express app listening on port ${port}!`))
    } catch (error) {
        console.log(`Exception: ${error} occurred`)
    }
}

startApp();
