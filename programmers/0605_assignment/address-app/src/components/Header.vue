<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="bg-light p-3">
      <div class="container d-flex flex-column">
        <nav class="navbar navbar-expand-sm bg-dark">
            <div class="container-fluid">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink class="nav-link text-white" to="/">Read List</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link text-white" to="/update">Update</RouterLink>
                </li>
                </ul>
            </div>
        </nav>

        <!-- <nav class="nav nav-pills mt-3">
          <RouterLink class="nav-link" to="/read_one/:id">Read One</RouterLink>
          <RouterLink class="nav-link" to="/:paths(.*)*">Not Found</RouterLink>
        </nav> -->
      </div>
    </header>
</template>
 
 
<style scoped>
</style>