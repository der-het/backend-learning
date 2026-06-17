const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello dev!!!");
});

app.get("/home", (req, res) => {
  res.send("hellow hero");
});

app.listen(3000);
