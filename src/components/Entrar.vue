<template>
  <Form class="form-group">
    <h5>Entre no App</h5>
    <Field
      class="form-control"
      name="email"
      type="email"
      placeholder="Email"
      :rules="validarEmail"
      v-model="x.email"
    />
    <ErrorMessage class="erro" name="email" />

    <Field
      class="form-control"
      name="senha"
      type="password"
      placeholder="Senha"
      :rules="validarSenha"
      v-model="x.senha"
    />
    <ErrorMessage class="erro" name="senha" />

    <Botao
      nome="Entrar"
      :loading="loading"
      :funcao="entrar"
      :validar="validar"
    />
    <Alerta :msg="msg" :ok="ok" />
  </Form>
</template>

<script>
import Alerta from "./basics/Alerta.vue";
import Botao from "./basics/Botao.vue";
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  name: "Entrar",
  components: {
    Alerta,
    Botao,
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      msg: "",
      ok: false,
      loading: false,
      vEmail: false,
      vSenha: false,
      x: {
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    entrar() {
      this.msg = "";
      this.ok = false;
      this.loading = true;
      this.$store.dispatch("auth/login", this.x).then(
        (data) => {
          this.msg = data.message;
          this.ok = true;
          this.loading = false;
          this.$router.push("/");
        },
        (error) => {
          this.msg =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.ok = false;
          this.loading = false;
        }
      );
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