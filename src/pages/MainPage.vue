<template>
  <div class="page">
    <MainInfo class="info" />
    <Slider class="slider-block" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import Slider from "@/components/Slider.vue";
import MainInfo from "@/components/MainInfo.vue";
@Component({
  components: {
    Slider,
    MainInfo,
  },
})
export default class MainPage extends Vue {}
</script>
<style lang="scss" scoped>
.page {
  display: flex;
}
.info {
  min-height: 100vh;
  width: 50%;
  @media screen and(max-width:900px) {
    min-width: 100%;
  }
}
</style>
