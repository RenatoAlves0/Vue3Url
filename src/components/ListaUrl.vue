<template>
  <div class="form-center">
    <div class="list-group col-sm-6">
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
          <small>#top100</small>
        </div>
        <small>{{ big }}<br /></small>
        <button
          class="btn btn-danger btn-list"
          type="submit"
          :class="true ? '' : 'disabled'"
        >
          Excluir
        </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaUrl",
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