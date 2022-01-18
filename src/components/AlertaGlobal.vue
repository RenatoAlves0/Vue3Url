<template>
  <div class="alert-box">
    <div
      v-for="alert in alerts"
      :key="alert.id"
      v-delay="() => remover(alert)"
      class="alert alert-dismissible fade show"
      :class="alert.ok ? 'alert-success' : 'alert-danger'"
      role="alert"
    >
      <strong>{{ alert.msg }}</strong>
      <button
        @click="remover(alert)"
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertaGlobal",
  data() {
    return {
      alerts: this.$store.state.alerta.itens,
    };
  },
  directives: {
    delay: {
      mounted(el, binding) {
        setTimeout(binding.value, 3000);
      },
    },
  },
  methods: {
    remover(e) {
      this.$store.dispatch("alerta/remover", e);
    },
  },
};
</script>