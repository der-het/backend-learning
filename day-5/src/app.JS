const express = require("express");
const db = require("./DB/db.js");
const authRoutes = require("./routes/auth.routes.js"); //ayaa ane requrie kari lidhi
const app = express();
app.use(express.json());

db();
app.use("/api/auth", authRoutes);
console.log("app is running");

module.exports = app;
