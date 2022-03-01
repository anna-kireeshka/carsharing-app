<template>
  <div id="app" class="container">
    <!-- <MainPage /> -->
    <Icon />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

//import MainPage from "@/pages/MainPage.vue";
import Icon from "@/components/Icon.vue";

export default Vue.extend({
  components: { Icon },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*:before,
*:after {
  box-sizing: inherit;
}
body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  overflow: auto;
  font-family: "Roboto", sans-serif;
}
html {
  box-sizing: border-box;
  height: -webkit-fill-available;
}
</style>
