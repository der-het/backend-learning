const express = require("express");

const app = express();
app.use(express.json());
const note = [];

app.post("/notes", (req, res) => {
  note.push(req.body);

  res.status("201").json({
    massage: "resoureces are okay",
  });
});

app.get("/notes", (req, res) => {
  res.status("200").json({
    message: "data reatch",
    note: note,
  });
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete note[index];
  console.log(index);
  res.status("200").json({
    message: "node delted sussesfully",
  });
});

module.exports = app;
