<template>
  <div>
    <CarModel />
  </div>
</template>

<script lang="ts">
import CarModel from "@/components/CarModel.vue";
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {
    CarModel,
  },
})
export default class OrderForm extends Vue {}
</script>
