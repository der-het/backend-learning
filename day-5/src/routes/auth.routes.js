const express = require("express");
const authController = require("./auth.routes");
const router = express.Router();

//post  api created here ee pna register name ni
router.post("/register", authController.registerUser);

//router ni help thi export kari didhi //5:12:
module.exports = router;
