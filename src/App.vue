<script setup>
import Topbar from "./components/Topbar.vue";
</script>

<template>
  <div id="app">
    <Topbar />
    <div class="container">
      <div class="app-center">
        <div class="col-sm-6">
          <form class="form-body">
            <router-view></router-view>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>