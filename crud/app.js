const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const webtoon = [
  {
    id: 1,
    day: "월요일",
    name: "참교육",
  },
  {
    id: 2,
    day: "목요일",
    name: "정글쥬스",
  },
];

app.get("/webtoon", (req, res) => {
  res.json(webtoon);
});

app.get("/webtoon/mon", (req, res) => {
  let resData = [];
  for (let i = 0; i < webtoon.length; i++) {
    if (webtoon[i].day === "월요일") {
      resData.push(webtoon[i]);
    }
  }
  res.json(resData);
});

app.get("/webtoon/:id", (req, res) => {
  const itemId = parseInt(req.params.id, 10);
  const item = webtoon.find((i) => i.id === itemId);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ mesage: "데이터가 존재하지 않습니다.;" });
  }
});

app.post("/webtoon", (req, res) => {
  const newItem = req.body;
  newItem.id = webtoon.length + 1;
  webtoon.push(newItem);
  res.status(200).json(newItem);
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 서버가 켜졌습니다.`);
});
