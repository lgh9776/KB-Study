<template lang="">
    <div className="mt-5">
        <h2>MemberInfo</h2>
        <div>
            경로 패턴 : /members/:id<br>
            요청 경로 : {{currentRoute.path}}<br>
            id값 : {{currentRoute.params.id}}<br>
        </div>
    </div>
</template>
<script>
import {useRoute} from 'vue-router'
export default {
    name : "MemberInfo",
    setup(){
        const currentRoute = useRoute()
        return {currentRoute}
    }
}
</script>
<style lang="">
    
</style>