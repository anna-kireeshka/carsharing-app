<template>
  <div class="location">
    <label for="city" class="location__label">{{ label }}</label>
    <input
      id="city"
      type="text"
      :placeholder="placeholder"
      autocomplete="off"
      class="location__input"
      @input="searchLocation"
      @click="emit('loadList', true)"
      :value="modelValue"
    />
    <button class="location__cross-icon" @click="resetLocation">
      <svg width="8" height="8">
        <use xlink:href="#cross" />
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["update:modelValue", "resetLocation", "loadList"]);
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
});

const searchLocation = (event: { target: HTMLInputElement }) => {
  console.log(props.modelValue);
  emit("update:modelValue", event.target.value);
};

const resetLocation = (event: { target: HTMLInputElement }) => {
  emit("resetLocation", (event.target.value = ""));
};
</script>

<style scoped lang="scss">
.location {
  &__label {
    font-weight: $light;
    font-size: 14px;
    line-height: 16px;
    color: $main-black;
    padding-right: 8px;
  }
  &__input {
    border: none;
    border-bottom: 1px solid $main-light-gray;
    outline: none;
    width: 224px;
  }
  &__input[type="text"] {
    padding-right: 20px;
    font-weight: $light;
    font-size: 14px;
    line-height: 16px;
    color: $main-black;
  }
  &__cross-icon {
    border: none;
    outline: none;
    background: transparent;
  }
}
</style>
