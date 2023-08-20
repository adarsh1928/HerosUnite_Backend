const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  donatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  donatedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "soldierProfile",
  },
  date: {  
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("donation", DonationSchema);
