<template lang="">
    <div class="container mt-3">
        <h2>Flex</h2>
        
        <div class="d-flex" v-for="todo in todoStore.todoList">  
            <span class="p-2 bg-light flex-fill">{{todo.id}}</span>&nbsp;&nbsp;
            <RouterLink :to='{name:"TodoView", params:{id:todo.id}}'>
            <span class="p-2 bg-light flex-fill">{{todo.todo}}</span>&nbsp;&nbsp;
            </RouterLink>
            <span class="p-2 bg-light flex-fill">{{todo.desc}}</span>
        </div>

        <div>
            <RouterLink to="/todo/create">글쓰기</RouterLink>
        </div>
    </div>
</template>

<script setup>
    import {useTodoStore} from '@/store/todo.js';
    import {onMounted} from 'vue';

    const todoStore = useTodoStore();
    //제일 처음에 데이터를 불러와야 한다 => compute나 watch나 watchEffect 또는 mount를 사용할 수 있다
    onMounted(() => {
        console.log("**")
        todoStore.fetchAll("gdhong");
    }),
</script>

<!-- 
<script>
import { reactive } from 'vue';
import axios from 'axios';

export default {
    setup(){
        const loadData=()=>{
            //axios로 데이터를 불러와서 todoList에 전달한다
            axios.get('http://localhost:8000/todolist/gdhong')
            .then(function (response){
                console.log(response.data);
                //compositive 방식
                response.data.forEach(element => {
                    todoList.push(element);
                });
            })
            .catch (function(error){
                //에러 핸들링
                console.log(error)
            })
            .finally(function() {
                //항상 실행되는 영역
            });
        }

        //함수 호출
        loadData(); // http://localhost:5173/todo/list

        return{todoList, loadData}
    }
}
</script> 
-->

<style lang="">
    
</style>