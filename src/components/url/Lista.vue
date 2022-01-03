<template>
  <div class="list-group">
    <a
      href="#"
      class="
        list-group-item list-group-item-action
        flex-column
        align-items-start
      "
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ small }}</h5>
        <small>Visitas: 100</small>
      </div>
      <small>{{ big }}<br /></small>
      <button
        class="btn btn-danger form-control"
        type="submit"
        :class="true ? '' : 'disabled'"
      >
        Excluir
      </button>
    </a>
  </div>
</template>

<script>
export default {
  name: "Lista",
  computed: {},
  data() {
    return {
      small: "Encurtado",
      big: "https://getbootstrap.com.br/docs/4.1/components/list-group/",
    };
  },
  methods: {},
};
</script>