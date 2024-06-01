<script setup>
 import HookComponent from './components/comosition/HookComponent.vue'
 import HookComponent2 from './components/comosition/HookComponent2.vue'
 import HookScore from './components/comosition/HookScore.vue'
</script>

<template>
  <HookComponent/>
  <HookComponent2/>
  <HookScore/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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
}
</style>
