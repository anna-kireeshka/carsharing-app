<template>
  <div class="price">
    <PriceField v-if="router.name === 'location'">
      <template #price> от 8 000 до 12 000 </template>
    </PriceField>
    <PriceField v-if="router.name === 'CarModel'">
      <template #price> от {{ minPrice }} до {{ maxPrice }} </template>
    </PriceField>
    <PriceField v-if="router.name === 'OrderAdditionally'">
      <template #price>{{ finalPrice }} </template>
    </PriceField>
    <PriceField
      v-if="router.name === 'FinalOrder' || router.name === 'ConfirmOrder'"
    >
      <template #price>{{ finalPrice }} </template>
    </PriceField>
    <button
      class="price__model-action"
      :class="{
        'price__model-action--active': validation,
      }"
      @click="getOrder"
    >
      {{ label }}
    </button>
    <p
      v-if="!maxValidPrice && router.name === 'OrderAdditionally'"
      class="price__model-action--error"
    >
      Цена аренды автомобиля не может быть больше {{ maxPrice }}
    </p>
    <p
      v-else-if="!minValidPrice && router.name === 'OrderAdditionally'"
      class="price__model-action--error"
    >
      Цена аренды автомобиля не может быть меньше {{ minPrice }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import PriceField from "@/components/UI/PriceField.vue";
import Button from "@/components/UI/Button.vue";
import { computed, defineEmits, defineProps } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const emit = defineEmits(["getOrder"]);

const props = defineProps({
  nameRoute: {
    type: String,
    default: "",
  },
  queryParams: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  validation: {
    type: Boolean,
    default: false,
  },
});

const getOrder = () => {
  emit("getOrder", props.queryParams);
};

const store = useStore();

const router = useRoute();

const minPrice = computed<number>(() => store.state.OrderForm.carPrice);

const maxPrice = computed<number>(() => store.state.OrderForm.maxCarPrice);

const finalPrice = computed<number>(() => store.getters["OrderForm/fullPrice"]);

const maxValidPrice = computed(() => maxPrice.value > finalPrice.value);

const minValidPrice = computed(() => finalPrice.value < minPrice.value);
</script>

<style scoped lang="scss">
.price {
  &__model-action {
    @include base-btn;
    @include base-disabled-green;
    text-decoration: none;
    width: 287px;
    padding: 15px 0;
  }
  &__model-action--active {
    @include base-btn-green;
  }
  &__model-action--active:hover {
    @include base-hover-green;
  }
  &__model-action--active:active {
    @include base-active-green;
  }
  &__model-action--active:active:before {
    @include base-click-green;
  }
  &__model-action--reset {
    background: $btn-slider-red;
  }
  &__model-action--error {
    color: #d73b3b;
    margin-top: 10px;
  }
}
</style>
