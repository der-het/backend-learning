const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes.js"); //ayaa ane requrie kari lidhi
const app = express();
app.use(express.json());
app.use(cookieParser());

//we need to give prefix(i don't what is but i need to know)
//            👇
app.use("/api/auth", authRoutes); //authRoutes crate kari karn ke aa nu folder banavu karn ke prodution ma am j kaam thay
console.log("app is running");

module.exports = app; //05:25:00
