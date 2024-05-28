<template>
  <div>
    <h2>관심있는 K-POP 가수?</h2> <hr/>
    <ul>
      <CheckboxItem v-for="idol in idols" :key="idol.id" v-bind="idol"/>
    </ul>
  </div>
</template>

<script>
  import CheckboxItem from './components/CheckBoxItem.vue'
  export default{
    name: "App",
    components: { CheckboxItem },
    data(){
      return{
        idols : [
          {id:1, name:"BTS", checkes:true},
          {id:2, name:"Black Pink", checkes:false},
          {id:3, name:"EXO", checkes:false},
          {id:4, name:"ITZY", checkes:false},
        ]
      }
    }
  }
</script>

<style scoped>

</style>
