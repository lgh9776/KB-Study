<template lang="">
    <div>
        아이디 : {{todo.id}} <br/>
        할일 : {{todo.todo}} <br/>
        설명 : {{todo.desc}} <br/>
    </div>
</template>
<script>
import useTodoStore from '@/store/todo.js';
import {useRoute} from 'vue-router';

export default {
    setup(){
        const route = useRoute();
        const todoStore = useTodoStore();

        let id = route.params.id; //route에서 전송한 정보는 useRoute가 갖고 있다.
                                  //페이지 이동은 useRouter 객체
        todoStore.fetchItem(id);
        return {todoStore}
    }
}
</script>
<style lang="">
    
</style>