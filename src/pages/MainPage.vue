<template>
  <div class="page">
    <MainInfo class="info" />
    <Slider class="slider-block" />
  </div>
</template>

<script lang="ts" setup>
import Slider from "@/components/Slider.vue";
import MainInfo from "@/components/MainInfo.vue";

</script>
<style lang="scss" scoped>
.page {
  display: flex;
}
.info {
  min-height: 100vh;
  width: 50%;
  @media screen and (max-width:900px) {
    min-width: 100%;
  }
}
</style>
