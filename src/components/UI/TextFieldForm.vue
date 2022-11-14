<template>
  <div class="form">
    <p class="form__label">{{ label }}</p>
    <div class="form__dote"></div>
    <div class="form__block block">
      <p class="block__text">{{ textValue }}</p>
      <p class="block__text">
        <slot name="additionallyTextValue"></slot>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  textValue: {
    type: String,
    default: "",
  },
  additionallyTextValue: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.form {
  @include flex-row;
  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
  }
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 16px;
  &__label {
    @media screen and (max-width: 375px) {
      margin-bottom: 5px;
    }
    font-weight: $light;
    font-size: 14px;
    line-height: 16px;
    color: $main-black;
  }
  &__dote {
    @media screen and (max-width: 375px) {
      border: none;
    }
    border-bottom: 1px dotted $main-dark-gray;
    //width: calc(100%);
  }
}
.block {
  @include flex-column;
  align-items: flex-end;
  &__text {
    font-weight: $light;
    font-size: 14px;
    line-height: 16px;
    color: $main-dark-gray;
    text-transform: uppercase;
  }
}
</style>
