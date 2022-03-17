<template>
  <div class="navigation">
    <ul
      class="navigation__list"
      v-for="(item, index) in crumbsList"
      :key="index"
    >
      <li class="navigation___item">
        <router-link :to="{ name: item.name }" class="navigation__link"
          >{{ item.text }}
        </router-link>
        <svg width="6" height="8" class="navigation__arrow">
          <use xlink:href="#arrow-breadcrumbs" />
        </svg>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class BreadcrumbsRoute extends Vue {
  crumbsList = [
    {
      text: "Местоположение",
      name: "location",
    },
    {
      text: "Модель",
      name: "CarModel",
    },
    {
      text: "Дополнительно",
      name: "OrderAdditionally",
    },
    {
      text: "Итого",
      name: "FinalOrder",
    },
  ];
}
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding-left: 64px;
  &__list {
    list-style: none;
    margin: 0;
  }
  &__item {
  }
  &__link {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #0ec261;
    text-decoration: none;
  }
  &__link--disabled {
    color: #999999;
  }
  &__link--sucsess {
    color: $main-black;
  }
  &__arrow {
    padding: 0px 16px;
  }
}
</style>
