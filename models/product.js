const mongoose= require('mongoose');

const productScheme=new mongoose.Schema({
    id:{
      type:String
    },
     name:{
        type:String,
        required:true,
     },
     description:{
        type:String,
     },
     colors:[{

        type:String,
        required:true

     }],
     shipping:{
        type:Boolean
     },
     price:{
        type:Number,
        required:[true,"Price must be provided"]
     },
     featured:{
        type:Boolean,
        default:true,
     },
     rating:{
        type:Number,
        default:4.9
     },
     createdAt:{
        type:Date,
        default: Date.now(),
     },
     company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi","nokia","asus","rolex","lenova"],
            message:`{VALUE} is not supported`
        },

     },
     nbHits:{
      type: Number
     }
})
module.exports= new mongoose.model("Product", productScheme)