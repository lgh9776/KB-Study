<template>
    <div id="app">
      <Loading :active="true" />
    </div>
  </template>
  
  <script>
  import Loading from 'vue3-loading-overlay';
  import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
  
  export default {
    name: 'App',
    components: {
      Loading
    }
  }
  </script>
  
  <style>
  /* 커스텀 스타일 */
  </style>