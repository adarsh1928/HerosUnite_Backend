const mongoose = require("mongoose");
const ContactUs = require("../models/ContactUs");

exports.createContactUs = async (req, res) => {
    try {
        const { email, title, message, contactNo } = req.body;

        if (!email || !title || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const newContactUs = await ContactUs.create({
            email,
            title,
            message,
            contactNo
        });

        res.status(200).json({
            success: true,
            data: newContactUs,
            message: "ContactUs Created Successfully",
        });
    } catch (error) {
        // Handle any errors that occur during the creation of the ContactUs
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to create ContactUs",
            error: error.message,
        });
    }
};
