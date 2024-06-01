<template lang="">
    <div class="modal">
        <div class="box">
            <div class="heading">
                <span class="title">:: {{videoInfo.video.title}} </span>
                <span class="category"> ( {{videoInfo.video.category}} ) </span>
                <span class="float-end badge bg-secondary pointer" @click="stopVideo"> X </span>
            </div>
            <div class="player">
                <YoutubeVue3 ref="playerRef" :videoid="videoInfo.video.id"
                    :autoplay="1" :controls="1" @ended="playNext" />
            </div>
            <div>
                <div>
                    <i 
</template>

<script>
import {useRoute} from 'vue-router'
export default {
    name : "VideoPlayer",
    setup(){
        const currentRoute = useRoute()
        return {currentRoute}
    }
}
</script>

<style lang="">
    
</style>