<template lang="">
    <div>
        <h1>계산기</h1>
        a : <input v-model="a"> <br/>
        b : <input v-model="b"> <br/>

        <button type="button" v-on:click="add">+</button>
        <button type="button" v-on:click="sub">-</button>
        <button type="button" v-on:click="mul">*</button>
        <button type="button" v-on:click="dev">/</button>
        <br/>
        <span style="color:red;font-size:20px;">{{result}}</span><br/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            a:0,
            b:0,
            result:0
        }
    },
    "methods":{
        "add":function(){
            this.result = parseInt(this.a) + parseInt(this.b);
        },
        "sub":function(){
            this.result = parseInt(this.a) - parseInt(this.b);
        },
        "mul":function(){
            this.result = parseInt(this.a) * parseInt(this.b);
        },
        "dev":function(){
            this.result = parseInt(this.a) / parseInt(this.b);
        }
    }
}
</script>
<style lang="">
    
</style>