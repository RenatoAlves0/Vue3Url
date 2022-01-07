<template>
  <form class="form-group">
    <h5>Adicionar URL</h5>
    <Input
      nome="url"
      placeholder="URL"
      :regras="validarUrl"
      :modelo="x.big"
      @changeModelo="x.big = $event"
    />
    <Botao
      nome="Adicionar"
      :loading="loading"
      :funcao="adicionar"
      :validar="validar"
    />
    <small v-if="!x.user" class="form-text text-muted"
      >Você está no modo Anônimo! Caso adicione uma nova URL você não poderá
      excluí-la posteriormente.</small
    >
    <div v-if="!x.user" class="row mt20">
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
  data() {
    return {
      loading: false,
      vUrl: false,
      x: {
        big: "",
        user: this.$store.state.auth.user,
      },
    };
  },
  methods: {
    adicionar() {
      this.loading = true;
      this.$store
        .dispatch("url/salvar", {
          big: this.x.big,
          user: this.x.user ? this.x.user._id : "",
        })
        .then(
          (data) => {
            this.loading = false;
            this.alerta(data.message, true);
            this.$router.push({
              name: "home",
            });
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
    validar() {
      return this.vUrl;
    },
    validarUrl(big) {
      this.vUrl = false;
      const regex =
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
      if (!big) return "Obrigatório!";
      if (!regex.test(big)) return "Url com formato inválido!";
      this.vUrl = true;
      return true;
    },
  },
};
</script>