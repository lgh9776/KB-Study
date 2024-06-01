<template lang="">
    <div>
        X : <input type="text" v-model="state.x"> <br/>
        Y : <input type="text" v-model="state.y"> <br/>
        <button type="button" @click="result">계산</button> <br/>
        <div> 결과: {{state.total}} </div>
    </div>
</template>
<script>
import { reactive, computed } from 'vue';

export default {
    name:"Calc4",
    setup(){
        const state = reactive({x:10, y:20});
        const result = computed(()=>{
            state.total = parseInt(state.x) + parseInt(state.y);
        });

        return {state, result};
    }
}

</script>
<style lang="">
    
</style>