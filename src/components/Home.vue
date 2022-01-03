<template>
  <div class="row">
    <!-- <Card
      title="URLs"
      text="Visualize todas as URLs encurtadas, cadastradas por você ou por terceiros."
      btn_text="Vamos lá!"
    />

    <Card
      title="Minhas URLs"
      text="Visualize apenas as URLs encurtadas cadastradas por você."
      btn_text="Vamos lá!"
    />

    <Card
      title="Cadastrar URL"
      text="Cadastre uma nova URL e a encurtadamos para você."
      btn_text="Vamos lá!"
    /> -->

    <ListaUrl />
  </div>
</template>

<script>
import Card from "./Card.vue";
import ListaUrl from "./ListaUrl.vue";
export default {
  components: { Card, ListaUrl },
  name: "Home",
};
</script>