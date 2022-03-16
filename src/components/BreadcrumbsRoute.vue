<template>
  <div class="navigation">
    <ul
      class="navigation__list"
      v-for="(item, index) in breadCrumbs"
      :key="index"
    >
      <li class="navigation___item">
        <router-link :to="item.to" class="navigation__link">{{
          item.text
        }}</router-link>
        <svg width="6" height="8" class="navigation__arrow">
          <use xlink:href="#arrow-breadcrumbs" />
        </svg>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { RouteMeta } from "vue-router";

@Component({})
export default class BreadcrumbsRoute extends Vue {
  get breadCrumbs(): string[] {
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
  padding-left: 128px;
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
