<template lang="">
    <div>
        
    </div>
</template>

<script>
export default {
    name : "OptionAPI",
    data(){
        return {
            name : "",
            x : 0,
            y : 0
        }
    }
    computed : {
        result(){
            return parseInt(this.x, 10) + parseInt(this.y, 10);
        }
    },
    mounted() {
        this.name = "john",
        this.x = 10,
        this.y = 20;
    },
    methods: {
        changeX(strX){
            let x = parseInt(strX,10);
            this.x = isNaN(x) ? 0 : x;
        },
        changeX(strY){
            let y = parseInt(strY,10);
            this.y = isNaN(y) ? 0 : y;
        },
        changeName(name){
            this.name = name.trim().length < 2 ? "" : name.trim()
        }
    },
}
</script>

<style lang="">
    
</style>