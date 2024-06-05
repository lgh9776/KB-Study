<template lang="">
    <div>
        <ButtonComponent>
            <span style="color:red" v-on:click="test" >click me</span>
        </ButtonComponent>
        <br/>

        <ButtonComponent>
            <span style="color:blue" v-on:click="test">click me</span>
        </ButtonComponent>
        <br/>
    </div>
</template>
<script>
import ButtonComponent from '@/components/slot/ButtonComponent.vue';
export default {
    components:[ButtonComponent],
    methods:{
       
        
    }
}
</script>
<style lang="">
    
</style>