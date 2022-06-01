const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "running" });
});

app.listen(port, () => {
  console.log(
    `${new Date().toLocaleTimeString()} | [INFO] Listening to requests on port ${port}`
  );
});
