const env = require("dotenv").config();
const app = require("./src/app.JS");
const db = require("./src/DB/db.js");
const express = require("express");

db();

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
