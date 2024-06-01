<template lang="">
    <div>
        <h1>객체</h1>
        <p>{{person.name}} {{person.age}}</p>
        <p>{{person2.name}} {{person2.age}}</p>
    </div>
</template>
<script>
//vue 라이브러리에서 2개의 모듈을 import
import {ref, reactive} from "vue";
export default {
    //<script setup> 하거나 setup함수 안에서 작업
    /* 주의사항 : 함수든 변수든 반드시 return을 해야 렌더링해줌 */
    setup(){
        //변수 선언을 직접한다 -> 시스템 감시 불가
        //ref, reactive 모듈을 사용해서 변수나 객체 생성 시 이 공간은 시스템이 관리
        //=> 값이 바뀌면 렌더링도 해주고 관리
        //함수 안에 변수, 함수 둘 다 만들 수 있음
        const person = ref({name:"홍길동", age:32});
        //시스템의 어딘가에 object 객체 만들고 그 객체에 대한 주소값만 던짐
        //reactive는 객체만 가능! 원시형 변수 안됨
        const person2 = reactive({name:"임꺽정", age:42});

        const changeValue=()=>{
            person.value.name="장길산"; //ref는 무조건 value
            person.value.age=12;

            person2.name="이징옥";
            person2.age=33;
        }

        //변수뿐만 아니라 함수도 반환해야 외부에서 인식!!
        return {person, person2, changeValue};
    }
}
</script>
<style lang="">
    
</style>