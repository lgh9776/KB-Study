<template lang="">
    <div>
        <h3>{{store.result}}</h3>
        <button type="button" @click="store.add"> 더하기 </button>
        <button type="button" @click="store.sub"> 빼기 </button>
        <button type="button" @click="store.mul"> 곱하기 </button>
        <button type="button" @click="store.div"> 나누기 </button>
    </div>
</template>

<script setup>
    import {useCalculatorStore} from '@/store/calculator.js';
    const store = useCalculatorStore();
</script>

<style lang="">
    
</style>