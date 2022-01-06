<template>
  <form class="form-group">
    <h5>Adicionar URL</h5>
    <Input
      nome="url"
      placeholder="Url"
      :regras="validarUrl"
      :modelo="x.url"
      @changeModelo="x.url = $event"
    />
    <Botao
      nome="Adicionar"
      :loading="loading"
      :funcao="adicionar"
      :validar="validar"
    />
    <small v-if="!usuario" class="form-text text-muted"
      >Você está no modo Anônimo! Caso adicione uma nova URL você não poderá
      excluí-la posteriormente.</small
    >
    <div v-if="!usuario" class="row mt20">
      <router-link class="col nav-link" to="/registrar"
        >Registrar-se</router-link
      >
      <router-link class="col nav-link" to="/entrar">Entrar</router-link>
    </div>
  </form>
</template>

<script>
import Input from "../basics/Input.vue";
import Botao from "../basics/Botao.vue";
export default {
  name: "CadastroUrl",
  components: {
    Input,
    Botao,
  },
  computed: {
    usuario() {
      return this.$store.state.auth.user;
    },
  },
  data() {
    return {
      loading: false,
      vUrl: false,
      x: {
        url: "",
      },
    };
  },
  methods: {
    adicionar() {
      // this.loading = true;
      // this.$store.dispatch("auth/login", this.x).then(
      //   (data) => {
      //     this.loading = false;
      //     this.alerta(data.message, true);
      //     this.$router.push("/");
      //   },
      //   (error) => {
      //     this.loading = false;
      //     this.alerta(
      //       (error.response &&
      //         error.response.data &&
      //         error.response.data.message) ||
      //         error.message ||
      //         error.toString(),
      //       false
      //     );
      //   }
      // );
    },
    validar() {
      return this.vUrl;
    },
    validarUrl(url) {
      this.vUrl = false;
      const regex =
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
      if (!url) return "Obrigatório!";
      if (!regex.test(url)) return "Url com formato inválido!";
      this.vUrl = true;
      return true;
    },
  },
};
</script>