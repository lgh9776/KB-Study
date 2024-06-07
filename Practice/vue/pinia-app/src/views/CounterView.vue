<template lang="">
    <div>
        <CounterComp/>
        <hr/>
        <AddComponent/>
    </div>
</template>

<script setup> //복합 컴포넌트일 경우 뷰에 한번에 묶어서 사용
    import CounterComp from '@/components/counter/CounterComp.vue'
    import AddComponent from '@/components/counter/AddComponent.vue'

</script>

<style lang="">
    
</style>