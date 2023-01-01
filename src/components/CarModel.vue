<template>
  <div class="main-wrapper">
    <Navigation />
    <div class="main">
      <AppHeader />
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
                  @change="choseCarFilter(item.id)"
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
            <div
              class="car-order__card"
              v-for="car in carList"
              :key="car.id"
              @click="choseCar(car, car.thumbnail.path)"
            >
              <p class="car-content__model">{{ car.name }}</p>
              <p class="car-content__price">
                {{ car.priceMin }} - {{ car.priceMax }}
              </p>
              <div class="car-order__image">
                <picture>
                  <img
                    :src="`${car.thumbnail.path}`"
                    :alt="car.name"
                    width="256"
                    height="116"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <PreOrderInfo />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import BreadcrumbsRoute from "./BreadcrumbsRoute.vue";
import PreOrderInfo from "./PreOrderInfo.vue";
import Navigation from "./Navigation.vue";
import AppHeader from "@/components/AppHeader.vue";
import { Car } from "@/store/OrderForm/types";

const store = useStore();
const image = ref("@/assets/car.png");

store.dispatch("OrderForm/loadCar");

const carFilter = ref([
  {
    id: "all",
    name: "Все модели",
  },
  { id: "economy", name: "Эконом" },
  {
    id: "comfort",
    name: "Комфорт",
  },
  {
    id: "premium",
    name: "Премиум",
  },
]);

const choseCar = (car: Car, img: string) => {
  const { name, number, priceMin, priceMax, tank, id } = car;

  store.commit("OrderForm/getCarModel", name);
  store.commit("OrderForm/getCarNumber", number);
  store.commit("OrderForm/getCarPrice", priceMin);
  store.commit("OrderForm/getCarPriceMax", priceMax);
  store.commit("OrderForm/getCarFuel", tank);
  store.commit("OrderForm/getCarImg", img);
  store.commit("OrderForm/getCarId", id);
};

const choseCarFilter = (id: string) => {
  id !== "all"
    ? store.dispatch("OrderForm/loadCar", id)
    : store.dispatch("OrderForm/loadCar");
};

const defaultImage = (event: { target: HTMLImageElement }) => {
  event.target.src = image.value;
};

const carList = computed<Car>(() => store.state.OrderForm.car);

const loader = computed<boolean>(() => store.state.OrderForm.loadingCarList);
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1008px) {
  .form {
    @include flex-column;
    .car-model {
      border: 0;
      min-width: 100%;
    }
  }
}
.main-wrapper {
  @include flex-row;
  overflow: hidden;
}
.main {
  width: 100%;
  height: 100vh;
  overflow: scroll;
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
  @include wrapper-mobile;
  @include order-card-mobile;
  @include flex-column;
  flex-wrap: wrap;
  max-width: calc(100% - 384px - 128px);
  padding: 32px 50px 0 64px;
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
    max-width: 100%;
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
