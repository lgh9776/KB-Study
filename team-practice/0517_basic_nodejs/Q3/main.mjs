import path from 'path';
import fs from 'fs/promises';
import { inputMovie } from './king.mjs';
import { inputTour } from './tour.mjs';

async function main() {
    await inputMovie();
    //console.log("inputMovie 실행 완료");

    await inputTour();
    //console.log("inputTour 실행 완료");

    await readFiles();
}

async function readFiles() {
    const data = await fs.readFile("movie.txt", "utf8");
    const data1 = await fs.readFile("tour.txt", "utf8");

    let content = `
    ==============================
    보고 싶은 영화는 ${data}이고,
    가고 싶은 여행지는 ${data1}
    ==============================
    `;

    console.log(content);
}

main();