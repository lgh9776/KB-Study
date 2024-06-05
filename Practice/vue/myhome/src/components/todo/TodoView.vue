<template lang="">
    <div>
        아이디 : {{todo.id}} <br/>
        할일 : {{todo.todo}} <br/>
        설명 : {{todo.desc}} <br/>
    </div>
</template>
<script>
import axios from 'axios';
import {useRoute} from 'vue-router';
import {reactive} from 'vue';

export default {
    setup(){
        const route = useRoute();
        const todo = reactive({id:"", todo:"", desc:""});
        // /todo/view/id => route.params 객체로
        // /todo/view?id=157~ => route.query 객체로
        axios.get("http://localhost:8000/todolist/gdhong/" + route.params.id)
        .then((res) => {
            todo.id = res.data.id;
            todo.todo = res.data.todo;
            todo.desc = res.data.desc;
        })
        .catch((error) => {
            console.log(error);
        })

        console.log(route.params.id);
        // /todo/view/id => axios를 이용해서 백엔드 서버에 데이터 요청
        return {todo}
    }
}
</script>
<style lang="">
    
</style>