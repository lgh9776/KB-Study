const http = require("http");
const url = require("url");
//http://127.0.0.1:3000/test?name=Tom*age=12
//test : pathname
//?name=Tom*age12 : 파라미터
//createServer - 서버소켓(통신을 할 대상)을 생성한다.
//클라이언트로 부터 접속 요청이 오면 매개변수로 전달한 함수를 호출한다

let server = http.createServer((request, response)=>{

    //접속 상대방에 대한 정보가 모두 온다
    //http://127.0.0.1:3000/test?name=Tom&age=12
    //http://127.0.0.1:3000 서버정보
    //uri : /test?name=Tom&age=12
    //method : 정보를 보내는 방식 (GET, POST)

    //console.log(request.headers);
    console.log(request.method); //요청 방법

    var uri = request.url; //http://127.0.0.1:3000/test?name=Tom&age=12
    console.log("uri", uri);
    
    var pathname = url.parse(uri, true).pathname; // ? 앞까지가 path임 

    if(request.method == "GET" && pathname === "/test")
    {
        response.writeHead(200, {'Content-Type':"text/html"});
        var query = url.parse(uri, true).query; // ? 뒤에가 쿼리이다.
        console.log(query);

        //문자열 JSON => string으로 전환
        response.end(JSON.stringify(query));
        return; //함수 종료
    }
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