const mongoose = require("mongoose");
const Volenteer = require("../models/Volenteer");

exports.addVolenteer = async (req, res) => {
    try {
        const { email, name } = req.body;

        if (!email || !name ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existing=await Volenteer.findOne({email});

        if(existing){
           return res.status(200).json({
                message:"You are already in our request",
                // existing
            })
        }
        
        const volenteerDetail = new Volenteer({
            email,
            name,
        });

        await volenteerDetail.save();

        return res.status(200).json({
            success: true,
            message: "Successfully added the data"
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error while adding volenteer data"
        });
    }
};
