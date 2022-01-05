<template>
  <div
    v-show="msg"
    class="alert"
    :class="ok ? 'alert-success' : 'alert-danger'"
  >
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Alerta",
  props: {
    msg: String,
    ok: Boolean,
  },
};
</script>