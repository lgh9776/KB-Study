<template lang="">
    <div>
        x : <input type="text" v-model="store.x"/> <br/>
        y : <input type="text" v-model="store.y"/> <br/>
    </div>
</template>

<script setup>
    import {useCalculatorStore} from '@/store/calculator.js'
    const store = useCalculatorStore();
</script>

<style lang="">
    
</style>