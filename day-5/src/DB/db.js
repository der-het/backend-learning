const mongoose = require("mongoose");
const env = require("dotenv").config;
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
async function connectdb() {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("DB has connected 🎉🎉🎉");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectdb;
