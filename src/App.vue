<template>
  <div id="app" class="container">
    <Icon />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

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
  overflow: hidden;
  font-family: "Roboto", sans-serif;
}
html {
  box-sizing: border-box;
  height: -webkit-fill-available;
}
</style>
