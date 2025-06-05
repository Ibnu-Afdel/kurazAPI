const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/tasks", (req, res) => {
  res.json("hello");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
