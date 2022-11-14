<template>
  <p class="price">
    <span class="price__dark">Цена</span>: <slot name="price"></slot> ₽
  </p>
</template>

<style scoped lang="scss">
.price {
  align-items: flex-start;
  padding-bottom: 32px;
  .price__dark {
    font-weight: $medium;
    font-size: 16px;
    line-height: 16px;
    color: $main-black;
  }
}
</style>
