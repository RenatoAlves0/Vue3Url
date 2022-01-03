<template>
  <Form @submit="registrar" class="form-group">
    <h5>Registre-se no App</h5>
    <Field
      class="form-control"
      name="nome"
      type="text"
      placeholder="Nome"
      :rules="validarNome"
      v-model="x.nome"
    />
    <ErrorMessage class="erro" name="nome" />

    <Field
      class="form-control"
      name="email"
      type="email"
      placeholder="Email"
      :rules="validarEmail"
      v-model="x.email"
    />
    <small class="form-text text-muted">
      Nunca vamos compartilhar seu email, com ninguém.</small
    >
    <br />
    <ErrorMessage class="erro" name="email" />

    <Field
      class="form-control"
      name="senha"
      type="password"
      placeholder="Senha"
      :rules="validarSenha"
      v-model="x.senha"
    />
    <small class="form-text text-muted">
      Criptografamos sua senha, de ponta a ponta.</small
    >
    <br />
    <ErrorMessage class="erro" name="senha" />

    <Field
      class="form-control"
      name="confirm-senha"
      type="password"
      placeholder="Confirmar Senha"
      :rules="validarConfirmSenha"
    />
    <ErrorMessage class="erro" name="confirm-senha" />

    <button
      type="submit"
      :class="validar() ? '' : 'disabled'"
      class="btn btn-primary form-control"
    >
      Registrar
    </button>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
export default {
  name: "Registrar",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      vNome: false,
      vEmail: false,
      vSenha: false,
      vConfirmSenha: false,
      x: {
        nome: "",
        email: "",
        senha: "",
      },
    };
  },
  methods: {
    registrar() {
      console.log({ ...this.x });
    },
    validar() {
      return this.vNome && this.vEmail && this.vSenha && this.vConfirmSenha;
    },
    validarNome(nome) {
      this.registrar();
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
      if (confirmSenha != this.x.senha) return "Senha diferente!";
      this.vConfirmSenha = true;
      return true;
    },
  },
};
</script>