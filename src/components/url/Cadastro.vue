<template>
  <Form @submit="entrar" class="form-group">
    <h5>Adicionar URL</h5>
    <Field
      class="form-control"
      name="url"
      type="url"
      placeholder="Url"
      :rules="validarUrl"
      v-model="x.url"
    />
    <ErrorMessage class="erro" name="url" />

    <button
      type="submit"
      :class="validar() ? '' : 'disabled'"
      class="btn btn-primary form-control"
    >
      Salvar
    </button>

    <h5>{{ usuario }}</h5>
  </Form>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import UserService from "../../services/user";
export default {
  name: "Entrar",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      usuario: "",
      vUrl: false,
      x: {
        url: "",
      },
    };
  },
  mounted() {
    UserService.getUser().then(
      (response) => {
        this.usuario = response.data;
      },
      (error) => {
        this.usuario =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
  methods: {
    entrar() {
      console.log({ ...this.x });
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