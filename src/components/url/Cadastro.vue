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
  </Form>
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
      vUrl: false,
      x: {
        url: "",
      },
    };
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