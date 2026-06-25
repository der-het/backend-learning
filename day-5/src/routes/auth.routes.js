const express = require("express");
const authController = require("../../controllers/auth.controllers.js");
const router = express.Router();

//post  api created here ee pna register name ni
router.post("/register", authController.registerUser);
//app mathi api ni req aya avshe atle apde ane redirect kari didhi
//haji ek controll naam na folder ma redirect kari didhi
// je api ni need hoy te aya create thay
//pachi tena logic ne controllers ma send kari dey

//-----------------------------------------------------------------------------------
//router ni help thi export kari didhi
module.exports = router;
