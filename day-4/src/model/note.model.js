const mongoose = require("mongoose");
const dns = require("dns");
const { title } = require("process");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const noteSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const noteModel = new mongoose.model("note", noteSchema);

module.exports = noteModel;
