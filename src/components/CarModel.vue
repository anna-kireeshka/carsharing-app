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
      <!-- <BreadcrumbsRoute /> -->
      <div class="form">
        <div class="car-model">
          <div class="filter">
            <div
              class="filter__list"
              v-for="item in radioFilter"
              :key="item.val"
            >
              <input
                type="radio"
                class="filter__radio-item"
                name="radioModel"
                :checked="item.checked"
              />
              <span class="filter__castom"></span>
              <label class="filter__label" for="radioModel">{{
                item.name
              }}</label>
            </div>
          </div>

          <div class="car-order">
            <div class="car-order__card">
              <div class="car-content">
                <p class="car-content__model">Модель</p>
                <p class="car-content__price">Цена</p>
              </div>
              <div class="car-order__image">
                <img
                  src="../assets/car-1.png"
                  alt="Машина"
                  width="256"
                  height="116"
                />
              </div>
            </div>
            <div class="car-order__card">
              <div class="car-content">
                <p class="car-content__model">Модель</p>
                <p class="car-content__price">Цена</p>
              </div>
              <div class="car-order__image">
                <img src="../assets/car-1.png" alt="Машина" />
              </div>
            </div>
            <div class="car-order__card">
              <div class="car-content">
                <p class="car-content__model">Модель</p>
                <p class="car-content__price">Цена</p>
              </div>
              <div class="car-order__image">
                <img src="../assets/car-1.png" alt="Машина" />
              </div>
            </div>
            <div class="car-order__card">
              <div class="car-content">
                <p class="car-content__model">Модель</p>
                <p class="car-content__price">Цена</p>
              </div>
              <div class="car-order__image">
                <img src="../assets/car-1.png" alt="Машина" />
              </div>
            </div>
            <div class="car-order__card">
              <div class="car-content">
                <p class="car-content__model">Модель</p>
                <p class="car-content__price">Цена</p>
              </div>
              <div class="car-order__image">
                <img src="../assets/car-1.png" alt="Машина" />
              </div>
            </div>
            <div class="car-order__card">
              <div class="car-content">
                <p class="car-content__model">Модель</p>
                <p class="car-content__price">Цена</p>
              </div>
              <div class="car-order__image">
                <img src="../assets/car-1.png" alt="Машина" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <PreOrderInfo /> -->
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import BreadcrumbsRoute from "./BreadcrumbsRoute.vue";
//import PreOrderInfo from "./PreOrderInfo.vue";
import Navigation from "./Navigation.vue";
@Component({
  components: {
    Navigation,
    //  BreadcrumbsRoute,
    // PreOrderInfo
  },
})
export default class CarModel extends Vue {
  radioFilter: { name: string; checked: boolean; val: string }[] = [
    {
      name: "Все модели",
      checked: true,
      val: "allModel",
    },
    {
      name: "Эконом",
      checked: false,
      val: "economy",
    },
    {
      name: "Премиум",
      checked: false,
      val: "premium",
    },
  ];
}
</script>
<style lang="scss" scoped>
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
  min-width: calc(100% - 728px);
  height: 100vh;
  padding: 32px 192px 0 64px;
  align-items: flex-start;
  border-right: 1px solid $main-light-gray;
}
.filter {
  display: flex;
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
  width: 736px;
  &__card {
    width: 368px;
    height: 224px;
    border: 1px solid $main-light-gray;

    padding: 16px;
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
