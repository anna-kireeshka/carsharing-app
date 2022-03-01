<template>
  <div>
    <CardLocation />
  </div>
</template>

<script lang="ts">
import CardLocation from "@/components/CardLocation.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    CardLocation,
  },
})
export default class OrderForm extends Vue {}
</script>
