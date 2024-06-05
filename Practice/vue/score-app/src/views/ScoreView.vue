<template>
    <div>
        <h1>main</h1>
        <ScoreList v-bind:score-list="scoreList"/>
        <ScoreDetail/>
    </div>
</template>
<script>
import ScoreList from '@/components/score/ScoreList.vue';
import ScoreDetail from '@/components/score/ScoreDetail.vue';
import axios from 'axios';
//setup을 쓸 경우에는 자동으로 등록 -> setup 사용x면 직접 등록

export default {
    name:"ScoreView", //자기 컴포넌트 이름 -> 대소문자 섞어서 써야함
    components:{ScoreList, ScoreDetail},
    data(){
        return{
            scoreList:[],
            scoreItem:{id:-1, name:"", kor:0, eng:0, mat:0}
        }
    },
    created:function() {
        this.fetchData();
    },
    methods: {
        fetchData:function(){
            axios.get("http://localhost:3000/score/list")
            .then((res) => {
                this.SoreList=res.data;
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
}
</script>
<style lang="">
    
</style>