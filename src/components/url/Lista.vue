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

  <span
    v-if="!initialLoad"
    class="mt20 spinner-grow spinner-grow-md text-primary"
    role="status"
    aria-hidden="true"
  ></span>

  <h5 v-if="initialLoad && !lista.urls[0]" class="mt20">
    Nenhuma URL cadastrada!
  </h5>

  <div class="lista overflow-auto">
    <div
      class="list-group"
      v-for="(el, index) in opTop ? lista.top100 : lista.urls"
      :key="el._id"
    >
      <div
        class="btn-group"
        :class="[
          opTop
            ? index + 1 != lista.top100.length
              ? 'mb20'
              : ''
            : index + 1 != lista.urls.length
            ? 'mb20'
            : '',
        ]"
      >
        <a
          class="btn btn-outline-secondary col-8"
          :class="loading ? 'disabled' : ''"
          @click="generica('incrementarClick', el._id)"
          :href="el.big"
          target="_blank"
        >
          <h5 class="mb-1">{{ el.small }}</h5>
          <small v-if="opTop">Cliques: {{ el.views }}<br /></small>
          <small v-if="opTop">{{ el.big }}</small>
        </a>
        <button
          v-if="permissaoDeletar(el)"
          class="btn btn-danger"
          :class="loading ? 'disabled' : ''"
          type="button"
          @click="generica('deletar', el._id)"
        >
          <span
            v-if="loading"
            class="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Excluir
        </button>
      </div>
    </div>
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
      initialLoad: false,
      loading: false,
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
      this.initialLoad = false;
      await this.$store.dispatch("url/listar");
      this.lista = this.$store.state.url;
      this.initialLoad = true;
    },
    generica(rota, id) {
      this.loading = true;
      this.$store.dispatch("url/" + rota, id).then(
        (data) => {
          this.loading = false;
          this.alerta(data.message, true), this.load();
        },
        (error) => {
          this.loading = false;
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