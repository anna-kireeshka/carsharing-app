<template>
  <div id="app" class="container">
    <MainPage />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import MainPage from "@/pages/MainPage.vue";

export default Vue.extend({
  components: { MainPage },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
}
</style>
