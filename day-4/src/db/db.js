require("dotenv").config();
const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

async function connectDB() {
  await mongoose.connect(process.env.mongo_connection);

  console.log("database is connected 🎉🎉🎉");
}

module.exports = connectDB;
