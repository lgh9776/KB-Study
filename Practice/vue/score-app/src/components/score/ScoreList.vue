<template lang="">
    <div>
        <div v-for="score in scoreList">
            <span>{{score.id}}</span>&nbsp;&nbsp;
            <span>{{score.name}}</span>&nbsp;&nbsp;
            <span>{{score.kor}}</span>&nbsp;&nbsp;
            <span>{{score.eng}}</span>&nbsp;&nbsp;
            <span>{{score.mat}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:["scoreList"]
}
</script>
<style lang="">
    
</style>