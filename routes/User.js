const express = require("express")
const { signup, login, sendotp} = require("../controller/Auth")
const { resetPasswordToken, resetPassword } = require("../controller/ResetPassword")
const { createContactUs } = require("../controller/ContactUs")
const { addBenefitier, getAllSoldiersDetail } = require("../controller/AddBenefitier")

const {capturePayment, verifyPayment}=require("../controller/Payment")
const { getDonateHistory } = require("../controller/DonateHistory")
const { addVolenteer } = require("../controller/Volenteer")


const router = express.Router()

router.post("/signup", signup)

// Route for user Register
router.post("/login", login)
router.post("/sendotp",sendotp)

router.post("/contactUs",createContactUs)
router.post("/addBenefitier",addBenefitier);

router.post("/verifySignature",verifyPayment)
router.post("/capturePayment",capturePayment)

router.post("/getAllSoldiersDetail",getAllSoldiersDetail)
router.post("/getDonateHistory",getDonateHistory)


router.post("/reset-password-token",resetPasswordToken)
router.post("/reset-password",resetPassword)

router.post("/addVolenteer",addVolenteer)



module.exports = router

