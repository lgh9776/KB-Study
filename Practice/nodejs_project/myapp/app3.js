const express = require("express");

let app = express(); //서버 객체 생성

//예전에는 body-parser 라는 모듈 => express로 기본값으로 들어간다
//x-www-form-urlencoded : form 태그에서 method를 POST로 보낼 때
//form-data : form 태그에서 method를 POST + enctype="multipart/form-data"
//            파일전송시
//json으로 보내는 방식(fetch, axios 사용시)

//설정 => bodyparser미들웨어를 거치게
app.use(express.urlencoded({extended:true})); //x-www-form-urlencoded
//app.use(express.json({extended:true})); //json으로 보내는 방식

app.post("/add", function(request, response, next){
    x = request.body.x;
    y = request.body.y;
    result = parseInt(x) + parseInt(y);
    response.send(`${x} + ${y} = ${result}`)    
});

//http://127.0.0.1:3000/add?x=5&y=7 
app.get("/add", function(request, response, next){
    x = request.query.x;
    y = request.query.y;
    result = parseInt(x) + parseInt(y);
    response.send(`${x} + ${y} = ${result}`)
});

//Get 방식2
//http://127.0.0.1:3000/add2/5/7
app.get("/add2/:x/:y", function(request, response, next){
    x = request.params.x;
    y = request.params.y;
    result = parseInt(x) + parseInt(y);
    response.send(`${x} + ${y} = ${result}`)

});

app.use((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end("<h1>express</h1>");
})

app.listen(3000, () => {
    console.log("server start http://127.0.0.1:3000")
})