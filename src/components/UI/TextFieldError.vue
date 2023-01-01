<template>
  <p
    v-if="!maxValidPrice && router.name === 'OrderAdditionally'"
    class="price__model-action--error"
  >
    Цена аренды автомобиля не может быть больше {{ maxPrice }}
  </p>
</template>

<script>
export default {
  name: "TextFieldError",
};
</script>

<style scoped></style>
