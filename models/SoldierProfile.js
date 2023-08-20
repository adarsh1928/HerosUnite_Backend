const mongoose=require("mongoose")

const SoldierProfileSchema=new mongoose.Schema(

     {
        name:{
            type:String,
            require:true
        },
        position:{
            type:String,
            require:true
         },
         address:{
             type:String,
             require:true
         },
         receivedDonation:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"donation"
         }],
         soldierUnit:{
            type:String,
         },
         contactOfRelative:{
            type:Number,
         },
         YearOfDeath:{
            type:Number,
         },
         incident:{
            type:String,
            require:true
         },
         otherInfo:{
            type:String,
         },
         age:{
            type:Number
         }

     }
)
module.exports=mongoose.model("soldierProfile",SoldierProfileSchema)