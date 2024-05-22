import fs from 'fs';
import readline from 'readline';

export async function inputTour() {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('가고 싶은 여행지 입력>> ', (tour) => {
            fs.appendFile("tour.txt", tour, (err) => {
                if (err) {
                    console.error('파일 저장 중 오류 발생:', err);
                    reject(err);
                } else {
                    //console.log('여행지 저장');
                    resolve();
                }
                rl.close();
            });
        });
    });
}