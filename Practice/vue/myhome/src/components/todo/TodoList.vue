<template lang="">
    <div class="container mt-3">
        <h2>Flex</h2>
        
        <div class="d-flex" v-for="todo in todoList">  
            <div class="p-2 bg-light flex-fill">{{todo.id}}</div>
            <RouterLink :to='{name:"todoView", params:{"id":todo.id}}'>
                <div class="p-2 bg-light flex-fill">{{todo.todo}}</div>
            </RouterLink>
            <div class="p-2 bg-light flex-fill">{{todo.desc}}</div>
        </div>

        <div>
            <RouterLink to="/todo/create">글쓰기</RouterLink>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
import axios from 'axios';

export default {
    setup(){
        const todoList = reactive([]);
        /* 객체 참조이고, setup 안에서 let 해놓으면 안됨.
        todoList = response.data;
        todoList 상수를 선언했으니까 todoList = response.data; 불가능
        const todoList = ref([]);
        todoList.value = response.data; */

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
<style lang="">
    
</style>