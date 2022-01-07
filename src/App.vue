<script setup>
import Topbar from "./components/Topbar.vue";
import AlertaGlobal from "./components/basics/AlertaGlobal.vue";
</script>

<template>
  <div id="app">
    <Topbar />
    <AlertaGlobal />
    <div class="container">
      <div class="app-center">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <form class="form-body">
            <router-view></router-view>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>