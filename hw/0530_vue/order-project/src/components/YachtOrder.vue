<template lang="">
    <div>
        요트 주문 수량 (대) <input type="text" v-model="yacht.cnt"> <br/> 
        요트 주문 가격 (만원) <input type="text" v-model="yacht.price"> <br/>
        <button type="button" @click="calc">요트 주문 가격 비교</button> <br/>

        <div>
            요트 이전 계산 주문 가격 : {{oldTotalPrice}} <br/>
            요트 현재 계산 주문 가격 : {{yacht.totalPrice}} <br/>
            ----------------------------- <br/>
            가격 차이 : {{subPrice}}
        </div>
    </div>
</template>
<script>
import {ref, reactive, watch} from "vue";

export default {
    name:"WatchYacht",
    setup(){
        const yacht = reactive({cnt:0, price:0, totalPrice:0});
        const oldTotalPrice = ref(0);
        const subPrice = ref(0);

        /*watch가 자동으로 old를 저장하는게 아님 -> 객체를 반환해줘야함*/
        watch(
        ()=>({...yacht}),
        (current, old) => {
            oldTotalPrice.value = old.totalPrice;
            console.log(`${old.totalPrice} -> ${current.totalPrice}`);
        });

        const calc = () => {
            yacht.totalPrice = yacht.cnt * yacht.price;
            subPrice.value = yacht.totalPrice - oldTotalPrice.value;
        };

        return {yacht, oldTotalPrice, subPrice, calc};
    }
    
}
</script>
<style lang="">
    
</style>