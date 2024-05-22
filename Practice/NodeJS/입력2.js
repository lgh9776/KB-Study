const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('정수 ', (num1) => {
    num1 = parseInt(num1);
    r1.question('정수 ', (num2) => {
        num2 = parseInt(num2);
        console.log("합산 : ", num1 + num2);
        r1.close();
    });
});

//정수 2개를 입력받아 +한 결과를 알고 싶다.
