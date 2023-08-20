const mongoose = require("mongoose")

const ContactUsSchema = new mongoose.Schema({

    email: {
        type: String,
        require: true
    },
    contactNo:{
        type:Number,
    },
    title :{
        type:String,
    },
    message:{
        type:String,
        require:true
    }

})

module.exports=mongoose.model("ContactUs",ContactUsSchema)