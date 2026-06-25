const express = require("express");
const noteModel = require("./model/note.model.js");
const app = express();
app.use(express.json());

console.log("app is running");

app.post("/notes", (req, res) => {
  const data = req.body;
  noteModel.create({
    title: data.title,
    description: data.description,
  });
  res.status(200).json({
    message: "data has sent or note has created",
  });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "data has fatched",
    notes: notes,
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id: id,
  });
  res.status(201).json({
    message: "data has been deleted",
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  await noteModel.findOneAndUpdate({ _id: id }, { description: description });
  res.status(200).json({
    message: "data has beend updated",
  });
});

module.exports = app;
