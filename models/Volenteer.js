const mongoose=require("mongoose")

const VolenteerSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
         required:true
    },
    contactNo:{
        type:Number,
    }
})

module.exports=mongoose.model("volenteer",VolenteerSchema)