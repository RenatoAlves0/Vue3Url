<template>
  <form class="form-group">
    <h5>Registre-se no App</h5>
    <Input
      nome="nome"
      placeholder="Nome"
      :regras="validarNome"
      :modelo="x.nome"
      @changeModelo="x.nome = $event"
    />
    <Input
      nome="email"
      tipo="email"
      placeholder="Email"
      :regras="validarEmail"
      :modelo="x.email"
      @changeModelo="x.email = $event"
      small="Nunca vamos compartilhar seu email, com ninguém."
    />
    <Input
      nome="senha"
      tipo="password"
      placeholder="Senha"
      :regras="validarSenha"
      :modelo="x.senha"
      @changeModelo="x.senha = $event"
      small="Criptografamos sua senha, de ponta a ponta."
    />
    <Input
      nome="confirm-senha"
      tipo="password"
      placeholder="Confirmar Senha"
      :regras="validarConfirmSenha"
      :modelo="x.confirmSenha"
      @changeModelo="x.confirmSenha = $event"
    />
    <Botao
      nome="Registrar"
      :loading="loading"
      :funcao="registrar"
      :validar="validar"
    />
  </form>
</template>

<script>
import Botao from "./basics/Botao.vue";
import Input from "./basics/Input.vue";
export default {
  name: "Registrar",
  components: {
    Botao,
    Input,
  },
  data() {
    return {
      loading: false,
      vNome: false,
      vEmail: false,
      vSenha: false,
      vConfirmSenha: false,
      x: {
        nome: "",
        email: "",
        senha: "",
        confirmSenha: "",
      },
    };
  },
  methods: {
    registrar() {
      this.loading = true;
      this.$store.dispatch("auth/register", this.x).then(
        (data) => {
          this.loading = false;
          this.alerta(data.message, true);
          this.$router.push({
            name: "entrar",
            params: { email: this.x.email, senha: this.x.senha },
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
      return false;
    },
    alerta(msg, ok) {
      this.$store.dispatch("alerta/criar", {
        msg: msg,
        ok: ok,
      });
    },
    validar() {
      return this.vNome && this.vEmail && this.vSenha && this.vConfirmSenha;
    },
    validarNome(nome) {
      this.vNome = false;
      if (!nome) return "Obrigatório!";
      if (String(nome).length < 2) return "Nome com pelo menos 2 caracteres!";
      this.vNome = true;
      return true;
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
    validarConfirmSenha(confirmSenha) {
      this.vConfirmSenha = false;
      if (!confirmSenha) return "Obrigatório!";
      if (confirmSenha != this.x.senha) return "Senhas diferentes!";
      this.vConfirmSenha = true;
      return true;
    },
  },
};
</script>