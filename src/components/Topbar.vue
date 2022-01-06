<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    v-bind:class="{ navbarOpen: show }"
  >
    <a class="navbar-brand" href="#">Encurtador de URL</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Alterna navegação"
      @click="toggleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
      v-bind:class="{ in: show }"
    >
      <ul class="navbar-nav mr-auto col-sm-6">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/nova_url"
            >Adicionar URL</router-link
          >
        </li>
      </ul>
      <ul class="navbar-nav mr-auto col-sm-6 topbar-right">
        <li v-if="usuario" class="nav-item">
          <a class="nav-link disabled">Olá {{ usuario.nome }} :-)</a>
        </li>
        <li v-else class="nav-item">
          <a class="nav-link disabled">Olá Anônimo :-)</a>
        </li>
        <li v-if="!usuario" class="nav-item">
          <router-link class="nav-link" to="/registrar">Registrar-se</router-link>
        </li>
        <li v-if="!usuario" class="nav-item">
          <router-link class="nav-link" to="/entrar">Entrar</router-link>
        </li>
        <li v-if="usuario" class="nav-item" @click="sair">
          <a class="nav-link">Sair</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Topbar",
  computed: {
    usuario() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
    sair() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
    },
  },
};
</script>