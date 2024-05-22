const path = require("path");
const fs = require("fs");

const data = fs.readFileSync("me.txt", "utf8");

if(fs.existsSync("me.txt")){
    fs.writeFileSync("you.txt", data)

}

//const data3 = fs.readFileSync("you.txt", "utf8");
//console.log(data3);

let content = `
**************************
나는 별이야
제일 빛나
**************************
`

fs.writeFileSync("you.txt", content, {flag: "a"});

const data2 = fs.readFileSync("you.txt", "utf8");
console.log(data2);