const express = require("express");
const app = express();
const port = 3000;

app.get("/set-cookie", (req, res) => {
  res.setHeader(
    "Set-Cookie",
    "test.cookie=123; Max-Age=60; secure; SameSite=Lax; HttpOnly;"
  );
  res.send("Set cookie");
});

app.get("/get-cookie", (req, res) => {
  const cookie = req.headers.cookie;
  res.send(cookie);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
