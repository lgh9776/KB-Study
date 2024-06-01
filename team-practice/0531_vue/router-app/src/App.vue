<template>
  <div class="container">
    <Header></Header>

    <div>
    <RouterView></RouterView>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { provide } from 'vue';

export default{
  name: "App",
  components: {Header},
  setup() {
    provide('videos', [
      {"id":"U1qI0jYqxYDs2elS", "title":"범 내려온다", "category":"official"},
      {"id":"E1U76ebqrD9y2aN_", "title":"좌우나졸", "category":"official"},
      {"id":"6NGv3Qg7ikVmZsfx", "title":"별주부가 울며 여짜오되", "category":"official"},
      {"id":"quBWlQ9PFtgHpAqv", "title":"어류도감", "category":"official"},
      {"id":"ANM0gxSWqrH6pqDm", "title":"범 내려온다", "category":"온스테이지2.0"},
      {"id":"69K5DwRmltkO37pJ", "title":"범 내려온다(서울)", "category":"관광공사"},
      {"id":"3hM5g2zUuyObq3sH", "title":"어류도감(부산)", "category":"관광공사"},
      {"id":"1ldOX_eB09oyB6uv", "title":"좌우나졸(전주)", "category":"관광공사"}
    ])
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.container { text-align: center; margin-top: 10px;}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
