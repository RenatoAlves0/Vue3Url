<template>
  <form class="form-group">
    <h5>Entre no App</h5>
    <Input
      nome="email"
      tipo="email"
      placeholder="Email"
      :regras="validarEmail"
      :modelo="x.email"
      @changeModelo="x.email = $event"
    />
    <Input
      nome="senha"
      tipo="password"
      placeholder="Senha"
      :regras="validarSenha"
      :modelo="x.senha"
      @changeModelo="x.senha = $event"
    />
    <Botao
      nome="Entrar"
      :loading="loading"
      :funcao="entrar"
      :validar="validar"
    />
  </form>
</template>

<script>
import Botao from "./basics/Botao.vue";
import Input from "./basics/Input.vue";
export default {
  name: "Entrar",
  components: {
    Botao,
    Input,
  },
  data() {
    return {
      loading: false,
      vEmail: false,
      vSenha: false,
      x: {
        email: this.$route.params.email || "",
        senha: this.$route.params.senha || "",
      },
    };
  },
  methods: {
    entrar() {
      this.loading = true;
      this.$store.dispatch("auth/login", this.x).then(
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
      return this.vEmail && this.vSenha;
    },
    validarEmail(email) {
      this.vEmail = false;
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!email) return "Obrigatório!";
      if (!regex.test(email)) return "Email com formato inválido!";
      this.vEmail = true;
      return true;
    },
    validarSenha(senha) {
      this.vSenha = false;
      if (!senha) return "Obrigatório!";
      if (String(senha).length < 8) return "Senha com pelo menos 8 caracteres!";
      this.vSenha = true;
      return true;
    },
  },
};
</script>