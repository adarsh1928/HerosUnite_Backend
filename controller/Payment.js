const { instance } = require("../config/razorpay");
const SoldierProfile = require("../models/SoldierProfile");
const User = require("../models/User");
const Donate = require("../models/Donation");
const { default: mongoose } = require("mongoose");
const crypto = require("crypto");

// Capture the payment and initiate the Razorpay order
exports.capturePayment = async (req, res) => {
    // Get SoldierProfileId and UserID
    const { soldierId, amount, userId } = req.body;
    // const userId = req.user.id;

    // Validation
    console.log(soldierId, amount, userId)
    if (!soldierId || !amount) {
        return res.json({
            success: false,
            message: 'Please provide valid soldier profile ID and amount',
        });
    }

    // Validate SoldierProfileID
    try {
        const soldierProfile = await SoldierProfile.findById(soldierId);
        if (!soldierProfile) {
            return res.json({
                success: false,
                message: 'Could not find the SoldierProfile',
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }

    // Order create
    const currency = "INR";
    const options = {
        amount: amount * 100,
        currency,
        receipt: Math.random(Date.now()).toString(),
        notes: {
            SoldierProfileId: soldierId,
            userId,
        }
    };

    try {
        // Initiate the payment using Razorpay
        const paymentResponse = await instance.orders.create(options);
        console.log(paymentResponse);

        // Return response
        return res.status(200).json({
            success: true,
            paymentResponse
            // name: SoldierProfile.name,
            // orderId: paymentResponse.id,
            // currency: paymentResponse.currency,
            // amount: paymentResponse.amount,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Could not initiate order",
        });
    }
};


exports.verifyPayment = async (req, res) => {
    console.log("req",req.body);
    const razorpay_order_id = req.body?.razorpay_order_id;
    const razorpay_payment_id = req.body?.razorpay_payment_id; //
    const razorpay_signature = req.body?.razorpay_signature;
    const soldierID = req.body?.soldierId;//
    const amount=req.body.amount
    const userId =req.body.userId

    console.log("signature",  razorpay_signature,userId)

    if (!razorpay_payment_id ||
     !soldierID || !userId) {
        return res.status(200).json({ success: false, message: "Payment Failed" });
    }
    
    let body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex");
        

    if (expectedSignature === razorpay_signature) {
        //enroll karwao student ko
        // await enrollStudents(courses, userId, res);
        //return res
        const receivedSoldierProfile = await Donate.create({
                            donatedBy: userId,
                            donatedTo: soldierID,
                            amount: amount,
                        });
        return res.status(200).json({ receivedSoldierProfile,success: true, message: "Payment Verified" });
    }
    return res.status(200).json({ success: "false", message: "Payment Failed" });

}

