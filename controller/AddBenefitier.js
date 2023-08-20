const mongoose = require("mongoose");
const SoldierProfile = require("../models/SoldierProfile");

exports.addBenefitier = async (req, res) => {
  try {
    const { name, position, incident, address, otherInfo, soldierUnit, YearOfDeath, contactOfRelative ,age} = req.body;
    console.log(name, position, incident,YearOfDeath,address,otherInfo,soldierUnit,contactOfRelative,age);

    if (!name || !address || !incident ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const newBenefitier = new SoldierProfile({
      name,
      position,
      incident,
      address,
      otherInfo,
      soldierUnit,
      YearOfDeath,
      age,
      contactOfRelative,
    });

    await newBenefitier.save();

    return res.status(200).json({
      success: true,
      newBenefitier,
      message: "Benefitier Added",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error while adding benefitier",
    });
  }
};

exports.getAllSoldiersDetail=async(req,res)=>{
   try{

       const deatilOfSoldiers=await SoldierProfile.find({})
       return res.status(200).json({
        success:true,
        message:"successfully got all detail",
        deatilOfSoldiers
       })

   }
   catch(err){
    return res.status(500).json({
      success:false,
      message:"error while getting soldier data"
    })
   }
}
