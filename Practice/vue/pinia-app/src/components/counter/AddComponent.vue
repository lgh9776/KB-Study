<template lang="">
    <div>
        <h3>두개의 컴포넌트가 하나의 스토어를 공유한다</h3>
        <button type="button" @click="store.increment">++</button>        
        <button type="button" @click="store.decrement">--</button>        
    </div>
</template>

<script setup>
    import {useCounterStore} from '@/store/counter';
    const store = useCounterStore();
</script>

<style lang="">
    
</style>
