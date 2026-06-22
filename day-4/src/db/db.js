// db.js
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("");
    console.log("DB has been connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1); // Stop server if DB fails
  }
}

module.exports = connectDB;
