const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://het:het123@cluster1.gwlxdbi.mongodb.net/demonote",
  );

  console.log("database is connected 🎉🎉🎉");
}

module.exports = connectDB;
