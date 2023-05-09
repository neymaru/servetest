const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, "/build"))); // 경로에 /build 를 추가해 static path 로 지정

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html")); // __dirname: 해당 파일이 존재하는 경로를 리턴
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 배포 서버 실행");
});
