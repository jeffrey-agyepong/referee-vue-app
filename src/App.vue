<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <header>
      <h1>Referee App</h1>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
