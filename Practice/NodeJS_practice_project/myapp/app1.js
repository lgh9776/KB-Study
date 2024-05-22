const express = require("express");

let app = express(); //서버 객체 생성

//http://127.0.0.1:3000/test
//"/test"와 같이 특정 url이 있으면 위에 작성
app.get("/test", (request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>Get</h1>');
});

app.get("/test2", (request, response) => {
    //response.writeHead(200, {'Content-Type':'text/html'});
    //response.end('<h1>Get</h1>');
    let data = []
    for(i = 1; i <= 10; i++)
    {
        data.push(`data : ${i}`);
    }
    response.send(data);
});

app.post("/test", (request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>Post</h1>');
});

//클라이언트로부터 요청이 오면 모든 응답을 처리
//app에는 함수가 get, post, use 3개가 있다.
//get = get방식 처리만
//post = post방식 처리만
//use = get, post 둘 다 처리
//특정 url이 없는건 제일 아래에 둬야함
app.use((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<h1>Hello Express</h1>');
})

//서버 시작
app.listen(3000, () => {
    console.log("server start in http://127.0.0.1:3000");

})