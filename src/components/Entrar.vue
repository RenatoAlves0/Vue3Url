<template>
  <div class="form-center">
    <form class="form-body col-sm-6">
      <Form @submit="entrar" class="form-group">
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
      </Form>

      <button
        type="submit"
        :class="validar() ? '' : 'disabled'"
        class="btn btn-primary"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  name: "Entrar",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
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
      console.log({ ...this.x });
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