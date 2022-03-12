<template>
  <div class="main-wrapper">
    <Navigation />
    <div class="main">
      <div class="main-nav">
        <h1>
          <router-link class="main-nav__company" :to="{ name: 'MainPage' }"
            >Need for drive</router-link
          >
        </h1>
        <p class="main-nav__city-name">
          <svg width="18" height="20">
            <use xlink:href="#gps" />
          </svg>
          Ульяновск
        </p>
      </div>
      <BreadcrumbsRoute />
      <div class="card-form">
        <div class="form">
          <div class="city">
            <p class="city__wrap">
              <label for="city" class="city__label">Город</label>
              <input id="city" type="text" class="city__form" />
              <button class="city__cross-icon"></button>
            </p>

            <p class="city__wrap">
              <label for="pvz" class="city__label">Пункт выдачи</label>
              <input id="pvz" type="text" class="city__form" />
              <button class="city__cross-icon"></button>
            </p>
          </div>
          <div class="card">
            <p class="card__desc">Выбрать на карте:</p>
            <img
              src="../assets/location.png"
              alt="Карта"
              width="736"
              height="352"
            />
          </div>
        </div>
        <PreOrderInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Vue, Component, Prop } from "vue-property-decorator";
import BreadcrumbsRoute from "./BreadcrumbsRoute.vue";
import PreOrderInfo from "./PreOrderInfo.vue";
import Navigation from "./Navigation.vue";

import {State, Action, Getter} from 'vuex-class';
import {ProfileState} from '../store/location/types';
const namespace: string = 'location';
@Component({
  components: { BreadcrumbsRoute, PreOrderInfo, Navigation },
})
export default class CardLocation extends Vue {
   @State('profile') location: ProfileState;
   @Action('fetchData', {namespace}) fetchData: any;
   @Getter('fgetCityName', {namespace}) getCityName: string;

    mounted() {
      this.fetchData();
      
console.log(process.env.VUE_APP_CARSHARING_APPLICATION_ID)
      
    }

    get cityName() {
      const city = this.location && this.location.city;
      return (city || []);
    }
}
</script>

<style scoped lang="scss">
.main-wrapper {
  @include flex-row;
}
.main {
  width: 100%;
}
.main-nav {
  @include flex-row;
  @include flex-logo;
  @include order-card-mobile;
  padding: 32px 63px 32px 128px;

  &__company {
    @include logo;
  }
  &__city-name {
    @include city;
  }
  &__city-name svg {
    margin-right: 0.4713rem;
  }
}
.card-form {
  @include flex-row;
  @include content-very-large-main;
  @include content-large-main;
  @include content-desctop-standart;
  @include content-desctop--mini;
  @include wrapper-mobile;
}
.form {
  @include order-card;
  @include order-card-mobile;
  @include flex-column;
  min-width: calc(100% - 384px - 128px);
  padding: 32px 192px 0 128px;
  align-items: flex-start;
  border-right: 1px solid $main-light-gray;
}

.city {
  @include flex-column;
  align-items: flex-end;
  &__wrap {
    margin-bottom: 16px;
  }
  &__label {
    font-weight: $light;
    font-size: 14px;
    line-height: 16px;
    color: $main-black;
    padding-right: 8px;
  }
  &__form {
    border: none;
    border-bottom: 1px solid $main-light-gray;
    outline: none;
    width: 224px;
  }
  &__form[type="text"] {
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
.card {
  @include flex-column;
  align-items: flex-start;
  margin-top: calc(45px - 16px);
  img {
    width: 100%;
    object-fit: cover;
  }
  &__desc {
    font-weight: $light;
    font-size: 14px;
    line-height: 16px;
    color: $main-black;

    margin-bottom: 16px;
  }
}
</style>
