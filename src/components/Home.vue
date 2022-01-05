<template>
  <Nav />
  <UrlLista class="mt20" />
</template>

<script>
import Nav from "./Nav.vue";
import UrlLista from "./url/Lista.vue";
export default {
  components: { Nav, UrlLista },
  name: "Home",
};
</script>