const env = require("dotenv").config();
const app = require("./src/app.JS");
const express = require("express");

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
