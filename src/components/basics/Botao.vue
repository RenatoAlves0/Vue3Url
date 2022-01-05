<template>
  <button
    class="btn btn-primary form-control"
    type="button"
    :class="[validar() ? '' : 'disabled', loading ? 'disabled' : '']"
    v-on:click.prevent="funcao()"
  >
    <span
      v-show="loading"
      class="spinner-grow spinner-grow-sm"
      role="status"
      aria-hidden="true"
    ></span>
    <span v-show="!loading">{{ nome }}</span>
  </button>
</template>

<script>
export default {
  name: "Botao",
  props: {
    nome: String,
    loading: Boolean,
    funcao: Function,
    validar: Function,
  },
};
</script>