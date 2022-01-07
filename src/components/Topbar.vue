<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">Encurtador de URL</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        :class="show ? '' : 'hidden'"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/nova_url"
              >Adicionar URL</router-link
            >
          </li>
        </ul>
        <ul class="d-flex navbar-nav">
          <li v-if="usuario" class="nav-item">
            <a class="nav-link disabled">Olá {{ usuario.nome }} :-)</a>
          </li>
          <li v-else class="nav-item">
            <a class="nav-link disabled">Olá Anônimo :-)</a>
          </li>
          <li v-if="!usuario" class="nav-item">
            <router-link class="nav-link" to="/registrar"
              >Registrar-se</router-link
            >
          </li>
          <li v-if="!usuario" class="nav-item">
            <router-link class="nav-link" to="/entrar">Entrar</router-link>
          </li>
          <li v-if="usuario" class="nav-item" @click="sair">
            <a class="nav-link">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Topbar",
  computed: {
    usuario() {
      return this.$store.state.usuario.user;
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
    sair() {
      this.$store.dispatch("usuario/sair");
      this.$router.push("/");
    },
  },
};
</script>