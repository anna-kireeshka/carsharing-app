<template>
  <div>
    <CarModel />
    <CardLocation />
  </div>
</template>

<script lang="ts">
import CarModel from "@/components/CarModel.vue";
import CardLocation from "@/components/CardLocation.vue";
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {
    CarModel,
    CardLocation,
  },
})
export default class OrderForm extends Vue {}
</script>
