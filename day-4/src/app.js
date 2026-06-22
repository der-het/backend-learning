const express = require("express");

const app = express();
app.use(express.json());

console.log("app is running");

module.exports = app;
