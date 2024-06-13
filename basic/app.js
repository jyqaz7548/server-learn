const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/friday", (req, res) => {
  res.sendFile(__dirname + "/friday.html");
});

app.listen(port, () => {
  console.log(`{port}에서 서버가 실행됐어요.`);
});
