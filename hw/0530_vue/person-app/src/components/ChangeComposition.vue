<template lang="">
    <div>
        이름 : <input type="text" v-model="name.nameData.name"><br/>
        키 : <input type="text" v-model="info.info.x"><br/>
        몸무게 : <input type="text" v-model="info.info.y"><br/>

        <button type="button" @click="info.changeX(400)">클릭</button>

        <h3>{{name.nameData.name}}</h3>
        <h3>{{info.info.x}}</h3>
        <h3>{{info.info.y}}</h3>
    </div>
</template>

<script>
import {ref, reactive, computed, onMounted} from "vue";
//setup 함수 안에 너무 많은 코드가 있을 경우 불편함
//함수를 쪼개면 파일을 다른 곳으로 보낼 수 있음
//람다함수를 만들고 그 주소를 저장
//(name == "john") 매개변수에 기본값을 부여
const useName =(name="john") => {
    //반드시 return => setup에서 함수를 호출해서 반환값을 받아서 다시 리턴
    const nameData = reactive({name : name});
    const changeName =(name)=>{
        console.log(name);
        nameData.name = name.trim().length < 2 ? "" : name.trim();
        //문자열의 길이가 2보다 작으면 지움 or 공백 제거
    }
    //onMounted(() => nameData = "john");
    return {nameData, changeName}; //return 필수!
}

//x = heigth, y = weight
const useCal =(initx=170, inity=60) => {
    const info = reactive({x:initx, y:inity});
    //const result = computed(() => parseInt(info.x, 10) + parseInt(info.y, 10));

    //onMounted(() => calData.x = 10, calData.y = 20);

    const changeX =(x)=>{ //웬만하면 자동 형전환 but 문자열에 덧셈연산이 가능해서 덧셈연산만 전환x 
        info.x = x;
        console.log("***")
    };

    const changeY =(y)=>{
        info.y = y;
    };
    return {info, changeX, changeY};
}

export default {
    setup() {
        const name = useName("홍길동");
        const info = useCal(180, 70);

        return {name, info};
    }
};

</script>

<style lang="">
    
</style>