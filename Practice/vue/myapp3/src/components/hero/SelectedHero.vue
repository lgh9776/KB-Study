<template>
    <span>선택항목: {{ hero.name }}</span>
</template>

<script>
export default {
    props: {
        hero: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
</style>
