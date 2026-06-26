const express = require("express");
const cookieParser = require("cookie-parser");
const postRoutes = require("./routes/post.routes.js");
const authRoutes = require("./routes/auth.routes.js"); //ayaa ane requrie kari lidhi
const app = express();

//we need to give prefix(i don't what is but i need to know)
//            👇
app.use("/api/auth", authRoutes); //authRoutes crate kari karn ke aa nu folder banavu karn ke prodution ma am j kaam thay
app.use("/api/post", postRoutes); //authRoutes crate kari karn ke aa nu folder banavu karn ke prodution ma am j kaam thay
console.log("app is running");

module.exports = app; //05:25:00
