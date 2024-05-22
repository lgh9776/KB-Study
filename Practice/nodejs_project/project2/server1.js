const http = require("http");

//createServer - 서버소켓(통신을 할 대상)을 생성한다.
//클라이언트로 부터 접속 요청이 오면 매개변수로 전달한 함수를 호출한다

let server = http.createServer((request, response)=>{
    //접속 요청이 오면 이 함수가 호출된다.
    console.log("connect");

    //브라우저에서 응답을 한다.
    response.writeHead(200, {'Content-Type':"text/html"});
    response.end("<h1>Hello nodejs</h1>");
});

//서버가 listen 함수를 호출해야 한다. 어떤 포트에서 기다릴지를 알려준다
server.listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000");
}); //콜백함수라 매개변수에 항상 함수가 있음