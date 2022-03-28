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
      <div class="form">
        <div class="car-model">
          <div class="filter">
            <div class="filter__list" v-for="item in carFilter" :key="item.id">
              <label class="filter__label">
                <input
                  type="radio"
                  class="filter__radio-item"
                  name="radioModel"
                  :value="item.name"
                  @change="choseCarFilter(item.id, item.name)"
                />
                <span class="filter__castom"></span>
                {{ item.name }}</label
              >
            </div>
          </div>

          <template v-if="loader === false">
            <div class="car-order">
              <button
                class="car-order__card car-order--preload"
                v-for="item in 10"
                :key="item"
              ></button>
            </div>
          </template>
          <div class="car-order" v-else>
            <button
              class="car-order__card"
              v-for="car in carList"
              :key="car.id"
              @click="
                choseCar(car.name, car.number, car.priceMax, car.priceMin)
              "
            >
              <div
                class="car-content"
                @click="
                  choseCar(
                    car.name,
                    car.number,
                    car.priceMin,
                    car.priceMax,
                    car.id
                  )
                "
              >
                <p class="car-content__model">{{ car.name }}</p>
                <p class="car-content__price">
                  {{ car.priceMin }} - {{ car.priceMax }}
                </p>
              </div>
              <div class="car-order__image">
                <img
                  alt="Машина"
                  width="256"
                  height="116"
                  @error="defaultImage($event)"
                  :src="car.thumbnail.path"
                />
              </div>
            </button>
          </div>
        </div>
        <PreOrderInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BreadcrumbsRoute from "./BreadcrumbsRoute.vue";
import PreOrderInfo from "./PreOrderInfo.vue";
import Navigation from "./Navigation.vue";

@Component({
  components: {
    Navigation,
    BreadcrumbsRoute,
    PreOrderInfo,
  },
})
export default class CarModel extends Vue {
  image = require("@/assets/car.png");

  mounted() {
    this.carListFetch();
    this.carFilterFetch();
  }

  carListFetch() {
    this.$store.dispatch("OrderForm/fetchDataCar");
    this.carList;
  }

  carFilterFetch() {
    this.$store.dispatch("OrderForm/fetchDataCarFilter");
    this.carFilter;
  }

  choseCar(model: string, num: string, priceMin: number, priceMax: number) {
    this.$store.commit("OrderForm/getCarModel", model);
    this.$store.commit("OrderForm/getCarNumber", num);
    this.$store.commit("OrderForm/getCarPrice", priceMin);
    this.$store.commit("OrderForm/getCarPriceMax", priceMax);
  }

  choseCarFilter(carId: number, name: string) {
    this.$store.commit("OrderForm/getCategoryId", carId);
    this.carListFetch();
    this.carList;
  }

  defaultImage(event: { target: HTMLImageElement }) {
    event.target.src = this.image;
  }

  get carList() {
    return this.$store.state.OrderForm.car.data;
  }

  get carFilter() {
    return this.$store.getters["OrderForm/getSortFilter"];
  }

  get loader() {
    return this.$store.state.OrderForm.loadingCarList;
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  @include flex-row;
}
.main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
.form {
  @include flex-row;
  @include content-very-large-main;
  @include content-large-main;
  @include content-desctop-standart;
  @include content-desctop--mini;
  @include wrapper-mobile;
}
.car-model {
  @include order-card;
  @include order-card-mobile;
  @include flex-column;
  min-width: calc(100% - 384px - 128px);
  padding: 32px 192px 0 64px;
  align-items: flex-start;
  min-height: 100vh;
  border-right: 1px solid $main-light-gray;
}
.filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 48px;
  &__list {
    position: relative;
    margin: 0 18px;
  }
  &__radio-item {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  &__castom {
    position: absolute;
    top: 4px;
    left: -20px;
    height: 12px;
    width: 12px;
    border: 1px solid $main-dark-gray;
    border-radius: 50%;
  }
  input:checked ~ &__castom {
    border: 3px solid $color-green;
  }

  &__label {
    font-weight: $light;
    font-size: 14px;
    line-height: 16px;
    color: $main-black;
  }
}

.car-order {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  &__card {
    background-color: transparent;
    outline: none;

    width: 368px;
    height: 224px;
    border: 1px solid $main-light-gray;

    padding: 16px;
  }
  &--preload {
    width: 100%;
    margin: 10px;
    background-color: #b8c6db;
    background: linear-gradient(315deg, #c6cdd9 0%, #f5f7fa 74%);

    animation: colored 2s infinite alternate;
  }
  @keyframes colored {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes colored {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  &__card:hover {
    border: 1px solid $main-dark-gray;
  }
  &__card:active,
  &__card:focus {
    border: 1px solid $color-green;
  }
  .car-content {
    @include flex-column;
    align-items: flex-start;

    padding-bottom: 36px;

    &__model {
      font-weight: $normal;
      font-size: 18px;
      line-height: 21px;

      color: #121212;
      text-transform: uppercase;
    }
    &__price {
      font-weight: $light;
      font-size: 14px;
      line-height: 16px;

      color: $main-dark-gray;
    }
  }
  &__image {
    @include flex-column;
    align-items: flex-end;
    &__image img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
