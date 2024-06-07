<template lang="">
    <div>
        <h1 style="background-color:green"> 헬스장 이용 회원정보 </h1>
        회원 ID : {{store.id}} <br/>
        회원 PW : {{store.pw}} <br/>
        회원 이름 : {{store.name}} <br/>
        회원 주소 : <input type="text" v-model="store.address"> <br/> 
        회원 전화 : <input type="text" v-model="store.tel"> <br/> 
    </div>
</template>

<script setup>
    import { useMemberStore } from '@/store/member';
    const store = useMemberStore();
</script>

<style lang="">
    
</style>