const http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':"text/html"});
    res.end("<h1>Hello nodejs</h1>");
});

server.listen(3000, ()=>{
    console.log("server start http://127.0.0.1:3000");
});