const mongoose=require("mongoose");
const Donation = require("../models/Donation");

exports.getDonateHistory=async (req,res)=>{

    try{

        const {userId}=req.body;
        console.log(userId)

        if(!userId){
            return res.status(400).json({
                success:false,
                message:"UserID not found"
            })
        }

        const historyData = await Donation.find({ donatedBy: userId }).populate('donatedTo');
        console.log("history", historyData)

        return res.status(200).json({
            success:true,
            historyData,
            message:"successfully get data"
        })
    }
    catch(err){
        return res.json({
            success:false,
            message:"Did Not find history"
        })
    }
}