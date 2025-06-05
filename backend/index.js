const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});
