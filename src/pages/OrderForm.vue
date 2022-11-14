<template>
  <div class="order-card">
    <CarModel />
    <CardLocation />
    <FormAdditionally />
    <FinalOrder />
    <OrderAdditionally />
  </div>
</template>

<script lang="ts" setup>
import CarModel from "@/components/CarModel.vue";
import CardLocation from "@/components/CardLocation.vue";
import FormAdditionally from "@/components/FormAdditionally.vue";
import FinalOrder from "@/components/FinalOrder.vue";
import OrderAdditionally from "@/components/OrderAdditionally.vue";
</script>

<style lang="scss" scoped></style>
