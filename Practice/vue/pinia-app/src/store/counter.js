//스토어를 만든다
import {defineStore} from 'pinia';

//export는 모듈이 분리되어 있을때 다른 파일에서 이 모듈에 접근하려면
//반드시 export가 되어있는 요소만 접근 가능
//defineStore("스토어이름", {json}); {}키 값 -> state, action, getter
//시스템 내부에 객체 만들고 주소 반환 -> useCounterStore 상수에 객체 주소가 저장

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0
        //화살표함수 ({}) -> 공유메모리
    }),

    //함수라기보다는 속성 = 약간 변수느낌 (변수와 함수의 중간쯤)
    getter: {
        increaseCounter : state => {return state.counter + 1},
        decreaseCounter : state => state.counter -1,
    },
    actions: {
        //화살표함수 안에서는 this를 사용하지 못한다
        increment(){
            this.counter++;
        },
        decrement(){
            this.counter--;
        }
    }
});
