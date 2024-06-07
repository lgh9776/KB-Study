//calculator.js
import {defineStore} from 'pinia';

export const useCalculatorStore = defineStore('calulaotr', {
    state: () => ({
        x:0,
        y:0,
        result: 0
    }), //화살표 함수 ({}) -> 공유메모리임, 값 반환의 의미

    actions: {
        add(){
            this.result = parseInt(this.x) + parseInt(this.y);
        },
        sub(){
            this.result = parseInt(this.x) - parseInt(this.y);
        },
        mul(){
            this.result = parseInt(this.x) * parseInt(this.y);
        },
        div(){
            this.result = parseInt(this.x) / parseInt(this.y);
        },
    }
});
