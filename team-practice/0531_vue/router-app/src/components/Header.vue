<template>
    <nav class="navbar navbar-expand-md bg-drk navbar-dark mt-2">
        <div class="container-fluid">
            <span class="navbar-brand">이날치(LeeNalChi)</span>
            <button class="navbar-toggler" type="button" @click="toggleNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div :class="['collapse', 'navbar-collapse', { show: isNavShow }]" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{ name: 'home' }">홈</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'about' }">소개</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'members' }">멤버</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'videos' }">영상</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isNavShow: false
        };
    },
    methods: {
        toggleNav() {
            this.isNavShow = !this.isNavShow;
        }
    }
}
</script>

<style scoped>
.bg-drk {
    background-color: #343a40;
}
</style>
