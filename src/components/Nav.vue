<template>
  <ul class="nav nav-pills nav-fill">
    <li class="nav-item">
      <a class="nav-link active" href="#">URLs</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#">Minhas URLs</a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#">Top 100</a>
    </li>
  </ul>
  <!-- <div class="card col-sm-4">
    <div class="card-body">
      <h4 style="font-weight: bold" class="card-title">{{ title }}</h4>
      <p class="card-text">
        {{ text }}
      </p>
      <a :href="this.btn_link" class="btn btn-primary">{{ btn_text }}</a>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "Nav",
  // props: ["title", "text", "btn_text", "btn_link"],
};
</script>