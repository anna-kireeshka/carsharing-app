<template>
  <ul class="autocomplete-list" v-show="isOpenSlectForm">
    <li
      class="autocomplete-list__item"
      v-for="(value, index) in locationList"
      :key="index"
      :class="{
        'autocomplete-list__current': index === arrowCounter,
      }"
      ref="optionsCity"
    >
      <p v-if="locationValue === 'city'" @click="setResult(value)">
        {{ value.name }}
      </p>
      <div v-if="locationValue === 'pvz'">
        <div
          v-for="item in value?.address"
          :key="item.id"
          @click="setResult(item)"
        >
          <p>{{ value.name }} - {{ item.name }}</p>
        </div>
      </div>
    </li>
    <li class="autocomplete-list__current" v-show="isEmptyList">
      <p>Ничего не найдено</p>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, PropType, ref, computed } from "vue";
import { City, Pvz } from "@/store/OrderForm/types";

const emit = defineEmits(["setResult"]);
const props = defineProps({
  locationList: {
    type: Array as PropType<Array<City | Pvz>>,
    default: () => [],
  },
  locationValue: {
    type: String as PropType<"city" | "pvz">,
    default: "",
  },
  isEmptyList: {
    type: Boolean,
    default: false,
  },
  emptyPvzList: {
    type: Boolean,
    default: false,
  },
  isOpenSlectForm: {
    type: Boolean,
    default: false,
  },
});

const arrowCounter = ref<number>(-1);

const setResult = (value: City) => {
  emit("setResult", value.name, value.id);
};
</script>

<style scoped lang="scss">
.autocomplete-list {
  padding: 0;
  margin: 0;
  border: 1px solid $main-light-gray;
  height: auto;
  min-height: 1em;
  max-height: 224px;
  overflow: auto;

  &__item {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;

    color: $main-black;
    font-weight: $light;
  }
  &__current:hover {
    border-bottom: 1px solid $color-green;
  }
}
</style>
