<template lang="">
    <div>
        꽃이름 입력: <input type="text" v-model="flower.name"> <br/>
        꽃 가격: <input type="text" v-model="flower.price">
        꽃 수량: <input type="text" v-model="flower.cnt">

        <img> <br/>

        <button type="button" @click="result">주문</button>
        <div>   {{flower.name}}의 가격은 {{flower.totalPrice}}원입니다. </div>
    </div>
</template>
<script>
import {reactive, computed} from 'vue';

export default {
    name:"Flower1",
    setup(){
        const flower = reactive({name:"꽃", price:0, cnt:0});
        const result = computed(()=>{
            flower.totalPrice = parseInt(flower.price) * parseInt(flower.cnt);
        });

        return {flower, result};
    }
}
</script>
<style lang="">
    
</style>