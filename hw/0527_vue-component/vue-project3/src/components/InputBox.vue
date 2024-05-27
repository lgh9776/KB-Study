<template lang="">
    <div>
        이름 :<input v-model="name" class="custom-input">
        <button type="button" v-on:click="send">이름입력 전송</button>
        <br/>

        <span class="result" align="center">{{result}}</span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"",
            result:""
        }
    },
    "methods":{
        "send":function(){
            this.result = this.name + "님이 인기 짱이야!";
        }
    }
}
</script>
<style lang="css">
.result{
    width: 50px;
    height: 50px;
    background-color: yellow;
}
.custom-input {
    background-color: black;
    color: white;
    border: none; /* 입력 상자 테두리 제거 */
    padding: 5px; /* 입력 상자 내 여백 추가 */
}
</style>