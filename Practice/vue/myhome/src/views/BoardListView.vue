<template lang="">
    <div>
        <h1>게시판</h1>
    </div>
</template>
<script>
import {useRoute} from 'vue-router';
export default {
    name:"BoardList",
    setup(){
        const route = useRoute();
        console.console.log("현재페이지 : ", route.params.page);
        return{}
    }
}
</script>
<style lang="">
    
</style>