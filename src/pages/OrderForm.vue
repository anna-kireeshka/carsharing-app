<template>
  <div>
    <CarModel />
    <CardLocation />
    <FormAdditionally />
    <FinalOrder />
  </div>
</template>

<script lang="ts">
import CarModel from "@/components/CarModel.vue";
import CardLocation from "@/components/CardLocation.vue";
import { Vue, Component } from "vue-property-decorator";
import FormAdditionally from "@/components/FormAdditionally.vue";
import FinalOrder from "@/components/FinalOrder.vue";
@Component({
  components: {
    FinalOrder,
    FormAdditionally,
    CarModel,
    CardLocation,
  },
})
export default class OrderForm extends Vue {}
</script>
