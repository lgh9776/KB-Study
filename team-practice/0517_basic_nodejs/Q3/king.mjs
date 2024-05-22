//MJS는 정석대로 ECMAScript 모듈(ESM) 사양을 준수하는 JavaScript 파일에 사용되는 확장자
//ECMAScript 모듈은 JavaScript 언어 표준의 일부고 모듈을 정의하는 보다 현대적이고 표준화된 방법을 제공

import fs from 'fs';
import readline from 'readline';

export async function inputMovie() {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('보고 싶은 영화 입력>> ', (movie) => {
            fs.appendFile("movie.txt", movie, (err) => {
                if (err) {
                    console.error('파일 저장 중 오류 발생:', err);
                    reject(err);
                } else {
                    //console.log('영화 저장');
                    resolve();
                }
                rl.close();
            });
        });
    });
}