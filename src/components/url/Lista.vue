<template>
  <ul class="nav nav-pills nav-fill">
    <li class="nav-item">
      <a
        class="nav-link"
        :class="opUrl ? 'active' : ''"
        @click="tipoLista('url')"
        >URLs</a
      >
    </li>
    <li class="nav-item">
      <a
        class="nav-link"
        :class="opTop ? 'active' : ''"
        @click="tipoLista('top')"
        >Top 100</a
      >
    </li>
  </ul>

  <div
    class="mt20 list-group"
    v-for="el in opTop ? lista.top100 : lista.urls"
    :key="el._id"
  >
    <a
      class="
        list-group-item-action
        align-items-start
        list-group-item
        flex-column
      "
      @click="incrementarClick(el._id)"
      :href="el.big"
      target="_blank"
    >
      <h5 class="mb-1">{{ el.small }}</h5>
      <small v-if="opTop">Cliques: {{ el.views }}<br /></small>
      <small v-if="opTop">{{ el.big }}</small>
    </a>
    <button
      v-if="permissaoDeletar(el)"
      class="btn btn-danger form-control"
      type="button"
      @click="deletar(el._id)"
    >
      Excluir
    </button>
  </div>
</template>

<script>
export default {
  name: "Lista",
  mounted() {
    this.load();
  },
  data() {
    return {
      opUrl: true,
      opTop: false,
      user: {},
      lista: {
        urls: [],
        top100: [],
      },
    };
  },
  methods: {
    async load() {
      await this.$store.dispatch("url/listar");
      this.lista = this.$store.state.url;
    },
    incrementarClick(id) {
      this.$store.dispatch("url/incrementarClick", id).then(
        (data) => {
          this.alerta(data.message, true), this.load();
        },
        (error) => {
          this.alerta(
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString(),
            false
          );
        }
      );
    },
    deletar(id) {
      this.$store.dispatch("url/deletar", id).then(
        (data) => {
          this.alerta(data.message, true), this.load();
        },
        (error) => {
          this.alerta(
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
              error.message ||
              error.toString(),
            false
          );
        }
      );
    },
    alerta(msg, ok) {
      this.$store.dispatch("alerta/criar", {
        msg: msg,
        ok: ok,
      });
    },
    permissaoDeletar(url) {
      let u = this.$store.state.auth.user;
      if (
        u &&
        u._id &&
        url &&
        url.user &&
        url.user._id &&
        url.user._id == u._id
      )
        return true;
      return false;
    },
    async tipoLista(x) {
      if (x == "top") {
        this.opUrl = false;
        this.opTop = true;
      } else {
        this.opUrl = true;
        this.opTop = false;
      }
    },
  },
};
</script>