<template lang="">
    <div>
        <!-- /person/Tom-->
        <h1>{{curRoute.params.name}}</h1>
        <h1>{{curRoute.path}}</h1>
    </div>
</template>
<script>
import {useRoute} from 'vue-router';
export default {
    setup(){
        const curRoute = useRoute();
        return {curRoute};
    }
}
</script>
<style lang="">
</style>