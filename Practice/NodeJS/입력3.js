const readline = require('readline');

//동기식으로 - Promise 형태의 객체를 반환
function getInput(question) {
    let promise = new Promise((resolve, reject) => {
        const r1 = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        r1.question('question ', (answer) => {
            resolve(answer); //return이 아니라 resolve로 해야함
            r1.close();
        });
    });
    return promise;
}

async function main() {
    try{
        const num1 = await getInput('입력: ');
        const num2 = await getInput('입력: ');

        console.log(parseInt(num1) + parseInt(num2));
    }
    catch (error){
        console.error('오류 발생:', error);
    }
};

main();