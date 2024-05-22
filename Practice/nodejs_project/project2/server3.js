
const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs"); //파일 라이브러리
//createServer - 서버소켓(통신을 할 대상)을 생성한다.
//클라이언트로 부터 접속 요청이 오면 매개변수로 전달한 함수를 호출한다

/*{
    "key": "/path",         // 경로를 나타내는 문자열
    "func": handlerFunction, // 해당 경로에 대한 요청을 처리하는 함수
    "method": ["HTTP_METHOD"] // 허용되는 HTTP 메서드의 배열 (예: ["GET", "POST"])
}*/

let callmethods=[
    {"key": "/add", "func":add, method:["GET"]},
    {"key": "/sub", "func":sub, method:["GET"]},
    {"key": "/gugu", "func":gugu, method:["GET"]},
    {"key": "/info", "func":getUserInfo, method:["POST"]},
    {"key": "/input", "func":input, method:["GET"]},
]

let server = http.createServer((request, response)=>{
    //접속 요청이 오면 이 함수가 호출된다.
    console.log("connect");

    let pathname = url.parse(request.url, true).pathname;
    console.log(pathname);
    let method = request.method;

    let result = callmethods.filter((call)=>call.key==pathname && method==call.method[0]);
    if(result.length > 0)
        result[0].func(request, response);
    else
    {
        //브라우저에서 응답을 한다.
        response.writeHead(400, {'Content-Type':"text/html"});
        response.end("<h1>Hello nodejs</h1>");
    }
});

//서버가 listen 함수를 호출해야 한다. 어떤 포트에서 기다릴지를 알려준다
server.listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000");
}); //콜백함수라 매개변수에 항상 함수가 있음

//http://127.0.0.1:3000/add?x=5&y=7
function add(request, response)
{
    //json 객체 {"x":"5", "y":"6"}
    let query = url.parse(request.url, true).query;
    let x = parseInt(query.x);
    let y = parseInt(query.y);

    response.writeHead(200, {'Content-Type':"text/html"});
    response.end(`${x} + ${y} = ${x + y}`);
}

//http://127.0.0.1:3000/sub?x=5&y=7
function sub(request, response)
{
    //json 객체 {"x":"5", "y":"6"}
    let query = url.parse(request.url, true).query;
    let x = parseInt(query.x);
    let y = parseInt(query.y);

    response.writeHead(200, {'Content-Type':"text/html"});
    response.end(`${x} - ${y} = ${x - y}`);

}

//http://127.0.0.1:3000/gugu?dan=6
function gugu(request, response)
{
    //json 객체 {"x":"5", "y":"6"}
    let query = url.parse(request.url, true).query;
    let dan = parseInt(query.dan);

    let result = "";
    for(i = 1; i <= 9; i++)
    {
        result += `${dan} * ${i} = ${i * dan}</br>`;
    }

    response.writeHead(200, {'Content-Type':"text/html"});
    response.end(result);
}

//http://127.0.0.1:3000/info
function getUserInfo(request, response)
{
    //request.url = 헤더정보 >>> post방식은 request.url 정보 보내지X
    let body="";
    //클라이언트가 정보를 body에 담아보내는 동안 'data'라는 이벤트 발생 시 계속 콜백함수 호출됨
    request.on('data', (data)=>{
        body += data;
    });

    //데이터가 모두 수신되면
    request.on('end', ()=>{
        let result = new URLSearchParams(body); //파싱끝
        //result -> JSON과 유사한 객체 result.get("x")
        let username = result.get("username");
        let age = result.get("age");
        let address = result.get("address");

        //한글은 깨짐
        let msg = `${username} 의 나이는 ${age} 이고 주소는 ${address} 입니다`;
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(msg);
    });
}

//비동기가 기본
//http://127.0.0.1:3000/input

//npm install ejs
let ejs = require("ejs");
function input(request, response)
{
    //파일을 동기로 읽기
    var fileData = fs.readFileSync("./html/input.html", "utf8");

    //합쳐서 새로운 html 문서를 만든다 >>> 렌더링
    let data = ejs.render(fileData, 
        {
            "title":"EJS engine",
            "writer":["Tom", "Jane", "Brown", "Jenny", "Stepany"],
            "scores":[
                {"name":"A", "kor":90, "eng":70},
                {"name":"B", "kor":80, "eng":100},
                {"name":"C", "kor":70, "eng":60},
                {"name":"D", "kor":100, "eng":80},
                {"name":"E", "kor":90, "eng":90},
            ]
        });

    response.writeHead(200, {'Content-Type':'text/html'});
    response.end(data);
}