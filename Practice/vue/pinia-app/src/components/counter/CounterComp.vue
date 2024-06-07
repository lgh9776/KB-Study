<template lang="">
    <div>
        <h1>CounterComp.vue</h1>
        <h3>현재 카운트 : {{ store.counter }}</h3>
        <button @click="store.increment">++</button>
        <button @click="store.decrement">--</button>
    </div>
</template>

<script setup>
import {useCounterStore} from "@/store/counter"
const store = useCounterStore(); //객체를 가져옴
</script>

<style lang="">
</style>