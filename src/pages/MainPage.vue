<template>
  <div class="page">
    <StartScreen />
    <Slider />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import StartScreen from "@/components/StartScreen.vue";
import Slider from "@/components/Slider.vue";

@Component({
  components: {
    StartScreen,
    Slider,
  },
})
export default class MainPage extends Vue {}
</script>
<style lang="scss" scoped>
.page {
  display: flex;
}
</style>
