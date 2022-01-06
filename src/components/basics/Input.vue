<template>
  <Field
    class="form-control"
    :name="nome"
    :type="tipo || 'text'"
    :placeholder="placeholder || ''"
    :rules="regras || {}"
    v-model="modeloLocal"
    @input="$emit('changeModelo', modeloLocal)"
  />
  <small v-if="small" class="form-text text-muted"> {{ small }}</small>
  <br v-if="small" />
  <ErrorMessage class="erro" :name="nome" />
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  name: "Input",
  emits: ["changeModelo"],
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    nome: String,
    tipo: String,
    placeholder: String,
    regras: Function,
    modelo: String,
    small: String,
  },
  data() {
    return {
      modeloLocal: this.modelo,
    };
  },
};
</script>