<template>
  <div class="navigation">
    <ul
      class="navigation__list"
      :key="index"
      v-for="(item, index) in breadCrumbs"
    >
      <li class="navigation___item">
        <router-link
          :to="item.to"
          :class="{
            'navigation__link--disabled': breadCrumbs.length + 1 === index,
          }"
          class="navigation__link"
          >{{ item.text }}</router-link
        >
        <!-- <img
          src="../assets/arrow-route.svg"
          alt="Перейти"
          v-if="item.text !== '/'"
          class="navigation__arrow"
          style="
             {
              navigation__arrow--disabled: isLastPath;
            }
          "
        /> -->
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { RouteMeta } from "vue-router";

@Component({})
export default class BreadcrumbsRoute extends Vue {
  get breadCrumbs(): void {
    if ((this.$route.meta as RouteMeta).breadCrumb) {
      return (this.$route.meta as RouteMeta).breadCrumb.call(this, this.$route);
    }
    return (this.$route.meta as RouteMeta).breadCrumb;
  }
}
</script>

<style scoped lang="scss">
.navigation {
  display: flex;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding: 8px;
  &__list {
    list-style: none;
    margin: 0;
    padding-left: 128px;
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
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #999999;
  }
  &__arrow {
    padding: 0px 16px;
  }
  &__arrow--disabled {
  }
}
</style>
