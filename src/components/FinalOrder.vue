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
        <div class="car-container">
          <div class="form">
            <div class="order">
              <p class="order__car-model">{{ carModel }}</p>
              <p class="order__car-number">{{ carNumber }}</p>
              <p class="order__fuel">
                Топливо
                <span class="order__fuel order__fuel--precent"
                  >{{ carFuel }}%</span
                >
              </p>
              <p class="order__date">
                Доступна с
                <span class="order__date order__date--time">
                  {{ carDate }}</span
                >
              </p>
            </div>
            <div class="card">
              <img :src="carImg" alt="Выбраная машина" class="card__image" />
            </div>
          </div>
        </div>
        <PreOrderInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import PreOrderInfo from "@/components/PreOrderInfo.vue";
import BreadcrumbsRoute from "@/components/BreadcrumbsRoute.vue";

@Component({ components: { Navigation, PreOrderInfo, BreadcrumbsRoute } })
export default class FinalOrder extends Vue {
  get carModel() {
    return this.$store.state.OrderForm.carModel;
  }

  get carNumber() {
    return this.$store.state.OrderForm.carNumber;
  }

  get carImg() {
    return this.$store.state.OrderForm.img;
  }

  get carFuel() {
    return this.$store.state.OrderForm.fuel;
  }

  get carDate() {
    return this.$store.state.OrderForm.dateFrom;
  }
}
</script>
<style scoped lang="scss">
.main-wrapper {
  @include flex-row;
}
.main {
  width: 100%;
  height: 100vh;
}
.main-nav {
  @include flex-row;
  @include flex-logo;
  @include order-card-mobile;
  padding: 32px 63px 32px 64px;
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
  @include flex-row;
  @include order-card;
  @include order-card-mobile;
  min-width: calc(100% - 384px - 128px);
  padding: 32px 63px 32px 64px;
  flex-wrap: wrap;
}
.car-container {
  min-width: calc(100% - 384px - 128px);
  border-right: 1px solid $main-light-gray;
}
.order {
  @include flex-column;
  padding-right: 30px;

  &__car-model {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    margin-bottom: 8px;

    color: #121212;
  }
  &__fuel {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    margin-bottom: 8px;

    color: #121212;
  }
  &__fuel--precent {
    font-weight: 300;
  }
  &__car-number {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #121212;
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 4px 8px;

    width: 98px;
    margin-bottom: 8px;
  }
  &__date {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #121212;

    margin-bottom: 8px;
  }
  &__date--time {
    font-weight: 300;
  }
}
.card {
  width: 256px;
  &__image {
    width: 100%;
    object-fit: contain;
  }
}
</style>
