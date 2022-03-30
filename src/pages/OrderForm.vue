<template>
  <div class="order-card">
    <CarModel />
    <CardLocation />
    <FormAdditionally />
    <FinalOrder />
    <OrderAdditionally />
  </div>
</template>

<script lang="ts">
import CarModel from "@/components/CarModel.vue";
import CardLocation from "@/components/CardLocation.vue";
import { Vue, Component } from "vue-property-decorator";
import FormAdditionally from "@/components/FormAdditionally.vue";
import FinalOrder from "@/components/FinalOrder.vue";
import OrderAdditionally from "@/components/OrderAdditionally.vue";
@Component({
  components: {
    OrderAdditionally,
    FinalOrder,
    FormAdditionally,
    CarModel,
    CardLocation,
  },
})
export default class OrderForm extends Vue {}
</script>

<style lang="scss" scoped></style>
