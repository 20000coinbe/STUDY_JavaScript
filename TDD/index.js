const express = require("express");
const morgan = require("morgan");
const app = express();

let users = [
  { id: 1, name: "alice" },
  { id: 2, name: "back" },
  { id: 3, name: "chris" },
];

app.use(morgan("dev"));

app.get("/users", (req, res) => {
  res.json("users list");
});

app.listen(3000, () => {
  console.log("Example");
});
