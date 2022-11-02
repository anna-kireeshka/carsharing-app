<template>
  <div class="wrapper-form">
    <div class="order">
      <p class="order__title">Ваш заказ:</p>
      <div class="additionally">
        <div class="form">
          <p class="additionally__name">Пункт выдачи</p>
          <div class="additionally__dote"></div>
          <div class="additionally__block">
            <p class="additionally__text">{{ city }}</p>
            <p class="additionally__text">{{ pvz }}</p>
          </div>
        </div>
        <template v-if="fullRoute === 'CarModel'">
          <div class="form">
            <p class="additionally__name">Модель</p>
            <p class="additionally__dote additionally__dote--model"></p>
            <p class="additionally__text">{{ carModel }}</p>
          </div>
        </template>
        <template
          v-if="
            fullRoute === 'OrderAdditionally' ||
            fullRoute === 'FinalOrder' ||
            fullRoute === 'ConfirmOrder'
          "
        >
          <div class="form">
            <p class="additionally__name">Модель</p>
            <p class="additionally__dote additionally__dote--model"></p>
            <p class="additionally__text">{{ carModel }}</p>
          </div>
          <div class="form">
            <p class="additionally__name">Цвет</p>
            <p class="additionally__dote additionally__dote--color"></p>
            <div class="additionally__block">
              <p class="additionally__text">{{ carColor }}</p>
            </div>
          </div>
          <div class="form">
            <p class="additionally__name">Длительность аренды</p>
            <p class="additionally__dote additionally__dote--time"></p>
            <div class="additionally__block">
              <p class="additionally__text">{{ dateDuration }}</p>
            </div>
          </div>
          <div class="form">
            <p class="additionally__name">Тариф</p>
            <p class="additionally__dote additionally__dote--rent"></p>
            <div class="additionally__block">
              <p class="additionally__text">{{ rate }}</p>
            </div>
          </div>
          <div class="form" v-for="(item, index) in checkbox" :key="index">
            <p class="additionally__name">{{ item }}</p>
            <p class="additionally__dote additionally__dote--rent"></p>
            <div class="additionally__block">
              <p class="additionally__text">Да</p>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="price">
      <p class="price__first-step" v-if="fullRoute === 'location'">
        <span class="price__first-step--dark">Цена</span>: от 8 000 до 12 000 ₽
      </p>
      <p class="price__first-step" v-if="fullRoute === 'CarModel'">
        <span class="price__first-step--dark">Цена</span>: от {{ minPrice }} до
        {{ maxPrice }} ₽
      </p>
      <p class="price__first-step" v-if="fullRoute === 'OrderAdditionally'">
        <span class="price__first-step--dark">Цена</span>: {{ finalPrice }} ₽
      </p>
      <p
        class="price__first-step"
        v-if="fullRoute === 'FinalOrder' || fullRoute === 'ConfirmOrder'"
      >
        <span class="price__first-step--dark">Цена</span>: {{ finalPrice }} ₽
      </p>
      <router-link
        v-show="fullRoute === 'location'"
        class="price__model-action"
        :class="{
          'price__model-action--active': !checkValidForm,
        }"
        :to="{ name: 'CarModel' }"
      >
        Выбрать модель
      </router-link>
      <router-link
        v-show="fullRoute === 'CarModel'"
        class="price__model-action"
        :to="{ name: 'OrderAdditionally' }"
        :class="{
          'price__model-action--active': !checkValidFormCarModel,
        }"
      >
        Дополнительно
      </router-link>
      <router-link
        v-show="fullRoute === 'OrderAdditionally'"
        class="price__model-action"
        :to="{ name: 'FinalOrder' }"
        :class="{
          'price__model-action--active':
            !checkValidFormAdditionally && (!minValidPrice || !maxValidPrice),
        }"
      >
        Итого
      </router-link>
      <button
        v-show="fullRoute === 'FinalOrder'"
        class="price__model-action"
        :class="{
          'price__model-action--active': !checkValidFormAdditionally,
        }"
        @click.self="openModalConfirm"
      >
        Заказать
      </button>
      <router-link
        v-show="fullRoute === 'ConfirmOrder'"
        class="price__model-action price__model-action--reset"
        :to="{ name: 'FinalOrder' }"
      >
        Отменить
      </router-link>
      <p
        v-if="!maxValidPrice && fullRoute === 'OrderAdditionally'"
        class="price__model-action--error"
      >
        Цена аренды автомобиля не может быть больше {{ maxPrice }}
      </p>
      <p
        v-else-if="!minValidPrice && fullRoute === 'OrderAdditionally'"
        class="price__model-action--error"
      >
        Цена аренды автомобиля не может быть меньше {{ minPrice }}
      </p>
    </div>
    <ModalFinalOrder :open-window="openModalWindow" />
  </div>
</template>
<script lang="ts" setup>
import ModalFinalOrder from "@/components/ModalFinalOrder.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();

const router = useRoute();

const openModalWindow = ref<boolean>(false);

const openModalConfirm = () => {
  openModalWindow.value = !openModalWindow.value;
};
const city = computed<string>(() => store.state.OrderForm.valueCity);

const pvz = computed<string>(() => store.state.OrderForm.valuePvz);

const fullRoute = router.name;

const checkValidForm = computed<boolean>(() => {
  let empty = true;
  if (city.value !== "" && pvz.value !== "") {
    return false;
  }
  return empty;
});

const checkValidFormCarModel = computed(() => {
  let empty = true;
  if (city.value !== "" && pvz.value !== "" && carModel.value !== "") {
    empty = false;
  }
  return empty;
});

const checkValidFormAdditionally = computed(() => {
  let empty = true;
  if (
    city.value !== "" &&
    pvz.value !== "" &&
    carColor.value !== "" &&
    (dateDuration.value !== null || rate.value !== "") &&
    this.checkbox.length > 0
  ) {
    empty = false;
  }
  return empty;
});

const carNumber = computed<string>(() => store.state.OrderForm.carNumber);

const carModel = computed<string>(() => store.state.OrderForm.carModel);

const carColor = computed<string>(() => store.state.OrderForm.carColor);

const rate = computed<string>(() => store.state.OrderForm.rateFilter);

const dateDuration = computed(() => store.getters["OrderForm/getRateTime"]);

const checkbox = computed(() => store.state.OrderForm.additionallyFilter);

const minPrice = computed<number>(() => store.state.OrderForm.carPrice);

const maxPrice = computed<number>(() => store.state.OrderForm.maxCarPrice);

const finalPrice = computed<number>(() => store.getters["OrderForm/fullPrice"]);

const maxValidPrice = computed(() => {
  let validMaxPrice = false;
  if (maxPrice > finalPrice) {
    validMaxPrice = true;
  }
  return validMaxPrice;
});

const minValidPrice = computed(() => {
  let validMinPrice = false;
  if (finalPrice < this.minPrice) {
    validMinPrice = true;
  }
  return validMinPrice;
});

const orderId = computed(() => store.getters["OrderForm/getFinalOrderId"]);
</script>

<style scoped lang="scss">
@media screen and (max-width: 375px) {
  .wrapper-form {
    padding: 32px 18px;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
}
.wrapper-form {
  width: 100%;
  padding: 32px 63px 32px 32px;
}
.order {
  @include flex-column;
  align-items: flex-end;
  margin-bottom: 32px;
  &__title {
    font-weight: $medium;
    font-size: 18px;
    line-height: 21px;
    color: $main-black;
    margin-bottom: 26px;
  }
  .additionally {
    width: 100%;
    @include flex-column;
    .form {
      @include flex-row;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      margin-bottom: 16px;
    }
    &__name {
      @media screen and (max-width: 375px) {
        margin-bottom: 5px;
      }
      font-weight: $light;
      font-size: 14px;
      line-height: 16px;
      color: $main-black;
    }
    &__dote {
      @media screen and (max-width: 375px) {
        border: none;
      }
      border-bottom: 1px dotted $main-dark-gray;
      width: 10%;
    }
    &__dote--rent {
      width: 70%;
    }
    &__dote--color {
      width: 60%;
    }
    &__dote--time {
      width: 50%;
    }
    &__dote--model {
      width: 50%;
    }
    &__block {
      @include flex-column;
      align-items: flex-end;
    }
    &__text {
      font-weight: $light;
      font-size: 14px;
      line-height: 16px;
      color: $main-dark-gray;
    }
  }
}

.price {
  @include flex-column;
  align-items: flex-start;
  &__first-step {
    font-weight: $medium;
    font-size: 16px;
    line-height: 16px;
    color: $main-black;

    padding-bottom: 32px;
  }
  &__first-step--dark {
    font-weight: $semi-bold;
  }
  &__model-action {
    @include base-btn;
    @include base-disabled-green;
    text-decoration: none;
    width: 287px;
    padding: 15px 0;
  }
  &__model-action--active {
    @include base-btn-green;
  }
  &__model-action--active:hover {
    @include base-hover-green;
  }
  &__model-action--active:active {
    @include base-active-green;
  }
  &__model-action--active:active:before {
    @include base-click-green;
  }
  &__model-action--reset {
    background: $btn-slider-red;
  }
  &__model-action--error {
    color: #d73b3b;
    margin-top: 10px;
  }
}
</style>
