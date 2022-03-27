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

  get activeRoutes() {
    let active = document.querySelector(".navigation__link") as Element;
    for (let i = 0; i < this.crumbsList.length; i++) {
      if (this.$route.name === this.crumbsList[i].name) {
        return active.classList?.add("navigation__link--active");
      } else {
        console.log(false);
      }
    }
    return active;
  }
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
  &__link {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #999999;
    text-decoration: none;
  }

  &__link--active {
    color: #0ec261;
  }
  //&__disabled {
  //  color: #999999;
  //}
  &__link--sucsess {
    color: $main-black;
  }
  &__arrow {
    padding: 0px 16px;
  }
}
</style>
