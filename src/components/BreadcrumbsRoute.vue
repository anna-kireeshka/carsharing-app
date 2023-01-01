<template>
  <div class="navigation">
    <ul
      class="navigation__list"
      v-for="(item, index) in crumbsList"
      :key="index"
    >
      <li class="navigation__item">
        <router-link
          :to="{ name: item.name }"
          class="navigation__link"
          :class="activeRoute(item.idx, item.name)"
          >{{ item.text }}
        </router-link>
        <svg width="6" height="8" class="navigation__arrow">
          <use xlink:href="#arrow-breadcrumbs" />
        </svg>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

type CrumbsList = { idx: number; text: string; name: string };

const route = useRoute();

const router = useRouter();

const store = useStore();

const crumbsList = ref<CrumbsList[]>([
  {
    idx: 0,
    text: "Местоположение",
    name: "location",
  },
  {
    idx: 1,
    text: "Модель",
    name: "CarModel",
  },
  {
    idx: 2,
    text: "Дополнительно",
    name: "OrderAdditionally",
  },
  {
    idx: 3,
    text: "Итого",
    name: "FinalOrder",
  },
]);

const activeRoute = (idx: number, name: string) => {
  if (route.name === name) {
    return "navigation__link--active";
  }
  for (let i = 0; i < crumbsList.value?.length; i++) {
    if (crumbsList.value[i].idx !== idx && crumbsList.value[i].idx < idx + 1) {
      return "disabled";
    }
  }

  if (
    isCarModelValidation ||
    isCarLocationValidation ||
    isCarAdditionallyValidation
  ) {
    return "navigation__link";
  }

  return "navigation__link";
};
const isCarModelValidation = computed(() => store.state.isCarModelValidation);

const isCarLocationValidation = computed(
  () => store.state.isCarLocationValidation
);

const isCarAdditionallyValidation = computed(
  () => store.state.isCarAdditionalyValidation
);
</script>

<style scoped lang="scss">
.navigation {
  @media screen and (max-width: 375px) {
    padding-left: 16px;
  }
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding-left: 64px;
  &__list {
    list-style: none;
    margin: 0;
  }
  &__link {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #999999;
    text-decoration: none;
    cursor: pointer;
  }

  &__link--active {
    color: #0ec261 !important;
  }

  &__link--sucsess {
    color: $main-black;
  }
  &__arrow {
    padding: 0px 16px;
  }
}
.disabled {
  pointer-events: none;
  color: #c5c5c5;
}
</style>
