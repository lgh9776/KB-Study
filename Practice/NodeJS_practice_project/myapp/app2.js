const express = require("express");

let app = express(); //서버 객체 생성

app.get("/a", function(request, response, next){
    request.a = "추가필드";
    console.log("aaaa");
    next(); //다음 미들웨어를 호출
});

app.get("/a", function(request, response, next){
    request.b = "추가필드b";
    console.log("bbbb");
    next(); //다음 미들웨어를 호출
});

app.get("/a", function(request, response, next){
    request.c = "추가필드c";
    console.log("cccc");
    response.send(`${request.a} ${request.b} ${request.c}`)
})

app.use((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end("<h1>express</h1>");
})

app.listen(3000, () => {
    console.log("server start http://127.0.0.1:3000")
})