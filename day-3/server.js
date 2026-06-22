const { log } = require("node:console");
const app = require("./src/app.js");

app.listen(3000, () => {
  console.log("server is running at 3000 port ");
});
