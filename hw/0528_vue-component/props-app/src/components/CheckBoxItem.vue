<template>
    <li>
        <input type="checkbox" :checked="checked" /> {{ name }}
    </li>
</template>

<script>
export default {
    name : "CheckboxItem",
    props:{ //유효성 검사는 받는 쪽에서
        id: [Number, String],
        name: {
            validator(v){
                return typeof(v) !== "string"?
                false :
                v.trim().length >= 4 ? true : false
            }
        },
        checked: {
            type: Boolean,
            requires: false,
            default: false
        }
    }
}
</script>
<style lang="">
    
</style>