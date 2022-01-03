<script setup>
import Home from "./components/Home.vue";
import Topbar from "./components/Topbar.vue";
</script>

<template>
  <div id="app">
    <Topbar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>