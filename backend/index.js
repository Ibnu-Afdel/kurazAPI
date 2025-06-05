const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let defId = 1;

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const { caption } = req.body;

  const newTask = {
    id: defId++,
    caption,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
