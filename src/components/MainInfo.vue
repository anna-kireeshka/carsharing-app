<template>
  <div class="wrapper">
    <Navigation />
    <div class="wrapper__block">
      <div class="main-nav">
        <h1 class="main-nav__company">Need for drive</h1>
        <p class="main-nav__city-name">
          <img
            alt="Ваше местоположение"
            src="../assets/gps.svg"
            width="18"
            height="20"
          />Ульяновск
        </p>
      </div>
      <div class="main-block">
        <h1 class="main-block__title">Каршеринг</h1>
        <h1 class="main-block__title main-block__title--green">
          Need for drive
        </h1>
        <p class="main-block__discreption">
          Поминутная аренда авто твоего города
        </p>
        <button class="main-block__booking">Забронировать</button>
      </div>
      <div class="main-footer">
        <p class="main-footer__info">© 2016-2019 «Need for drive»</p>
        <p class="main-footer__info main-footer__info--number">
          8 (495) 234-22-44
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";

@Component({ components: { Navigation } })
export default class MainInfo extends Vue {}
</script>

<style lang="scss" scoped>
.wrapper {
  @include content-very-large-main;
  @include content-large-main;
  @include content-desctop-standart;
  @include content-desctop--mini;
  @include wrapper-mobile;
  display: flex;

  &__block {
    @include content-desctop--mini;
    @include wrapper-mobile;
    @include flex-column;
    height: 100%;
    width: 100%;
    padding: 2rem 4rem;
    justify-content: space-between;
  }
}
.main-nav {
  @include flex-row;
  @include flex-logo;

  &__company {
    @include logo-mobile;
    color: $color-green;
    font-weight: $bold;
    font-size: 1.875rem;
  }
  &__city-name {
    @include city-mobile;
    color: $main-dark-gray;
    font-size: 0.875rem;
    font-weight: 400;

    display: flex;
    align-items: center;
  }
  &__city-name img {
    margin-right: 0.4713rem;
  }
}
.main-block {
  @include flex-column;
  &__title {
    @include title-mobile;
    color: $main-black;
    font-size: 4.375rem;
    font-weight: $bold;
    line-height: 4.1019rem;
  }
  &__title--green {
    color: $color-green;
    margin-bottom: 2.125rem;
  }
  &__discreption {
    @include desc-mobile;
    font-size: 1.625rem;
    font-weight: $light;
    color: $main-dark-gray;

    margin-bottom: 3.75rem;
  }
  &__booking {
    @include btn-style-mobile;
    @include base-btn;
    @include base-btn-green;
    border-radius: 0.5rem;
    width: 15.625rem;
    height: 3rem;
    text-align: center;

    color: $white;
    font-weight: $medium;
    font-size: 1.125rem;
  }

  &__booking:hover {
    @include base-hover-green;
  }
  &__booking:active {
    @include base-active-green;
  }
  &__booking:active:before {
    @include base-click-green;
  }
}
.main-footer {
  @include flex-row;
  @include flex-footer;

  &__info {
    @include info-number-gray;
    color: $main-dark-gray;
    font-size: 0.8125rem;
    font-weight: 400;
  }
  &__info--number {
    @include info-number;
    color: $main-black;
  }
}
</style>
