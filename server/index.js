const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "Example Response test again Lol" });
});

app.listen(port, () => {
  console.log(
    `${new Date().toLocaleTimeString()} | [INFO] Listening to requests on port ${port}.`
  );
});
