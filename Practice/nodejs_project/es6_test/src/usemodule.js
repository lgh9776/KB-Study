
//const module1 = require("./mymodule");
//const readline = require('readline'); 
//node_modules 폴더에 있는 파일의 경우 > 경로 지정 x

import {add, sigma} from './mymodule.js';

console.log(add(4, 5));
console.log(sigma(10));

//npx babel src -d build
//node build/usemodule.js