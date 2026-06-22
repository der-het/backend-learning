const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello dev!!!");
});

app.get("/home", (req, res) => {
  res.send("hellow hero");
});

app.listen(3000);

// const express = require("express");

// const app = express();
// app.use(express.json());
// const NOTE = [];

// //we use post becase we send data to server from fontend

// app.post("/notes", (req, res) => {
//   NOTE.push(req.body);
// });

// module.exports = app;
