//todo.js
import {defineStore} from 'pinia';
import axios from axios;

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos:{id:"", todo:"", desc:""},
        todoList:[]
    }),

    actions: {
        //전부 가져오기
        async fetchAll(userid){
            //axios로 데이터를 불러와서 todoList에 전달한다
            let result = await axios.get(`http://localhost:8000/todolist/${userid}`)
            this.todoList = result.data;
            console.log(this.todoList);
        },
        //하나만 가져오기
        async fetchItem(id){
            let result = await axios.get(`http://localhost:8000/todolist/${id}`)
            this.todo = result.data;
        }
    }
});