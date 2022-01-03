<template>
  <div class="card col-sm-4">
    <div class="card-body">
      <h4 style="font-weight: bold" class="card-title">{{ title }}</h4>
      <p class="card-text">
        {{ text }}
      </p>
      <a :href="this.btn_link" class="btn btn-primary">{{ btn_text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "text", "btn_text", "btn_link"],
};
</script>