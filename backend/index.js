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

  if (!caption) {
    return res.status(400).json({ error: "caption is required" });
  }

  const newTask = {
    id: defId++,
    caption,
    completed: false,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(400).json({ error: "Task doesnt exist" });
  }
  task.completed = true;
  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const taskToBeDeleted = tasks.find((task) => task.id === id);

  if (!taskToBeDeleted) {
    return res.status(404).json({ error: "Task doesnt exist" });
  }
  const newTasks = tasks.filter((task) => task.id !== id);
  tasks = newTasks;
  res.json(tasks);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
