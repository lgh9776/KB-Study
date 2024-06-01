<template lang="">
    <div>
        현재카운트 : {{cnt}}
        <button @click="plus">++</button>
    </div>
</template>

<script setup>
    import {ref, onMounted} from 'vue'; //vue 라이브러리로부터 ref, onMounted를 들고옴
    //기존에는 data() {return(변수)} >>> ref 사용 -> 내부로 완전히 감춤
    const cnt = ref(0); //컴퓨터 내부에 0을 저장할 공간(메모리 공간)을 만들고 그 주소를 반환
                        //0을 저장할 공간이 객체 타입 //cnt는 공간

    const plus =()=>{
        cnt.value++;
    }
    
    //매개변수로 callback 함수를 가짐 -> callback 함수는 보통 쓰고 버릴 함수 >>> 람다 사용
    onMounted(() => {
        cnt.value = 10; //변수에 초기값 들어가기
        console.log("onMounted")
    })
</script>

<style lang="">
    
</style>