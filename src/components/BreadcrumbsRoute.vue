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
          :class="{
            'navigation__link--active': $route.name === item.name,
          }"
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
@media screen and(max-width:375px) {
  .navigation {
    padding-left: 17px;
  }
  .navigation__arrow {
    padding: 0 10px;
  }
}
.navigation {
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
</style>
