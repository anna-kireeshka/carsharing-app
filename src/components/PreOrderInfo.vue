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
        <template v-if="fullRoute === 'OrderAdditionally'">
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
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PreOrderInfo extends Vue {
  /* eslint-disable */
  get city() {
    return this.$store.state.OrderForm.valueCity;
  }

  get pvz() {
    return this.$store.state.OrderForm.valuePvz;
  }

  get fullRoute() {
    return this.$route.name;
  }

  get checkValidForm() {
    let empty: boolean = true;
    if (this.city !== "" && this.pvz !== "") {
      empty = false;
    }
    return empty;
  }

  get checkValidFormCarModel() {
    let empty: boolean = true;
    if (this.city !== "" && this.pvz !== "" && this.carModel !== "") {
      empty = false;
    }
    return empty;
  }

  get checkValidFormAdditionally() {
    let empty: boolean = true;
    if (
      this.city !== "" &&
      this.pvz !== "" &&
      this.carColor !== "" &&
      (this.dateDuration !== null ||
      this.rate !== "") &&
      this.checkbox.length > 0
    ) {
      empty = false;
    }
    return empty;
  }

  get carNumber() {
    return this.$store.state.OrderForm.carNumber;
  }

  get carModel() {
    return this.$store.state.OrderForm.carModel;
  }

  get carColor() {
    return this.$store.state.OrderForm.carColor;
  }

  get rate() {
    return this.$store.state.OrderForm.rateFilter;
  }

  get dateDuration() {
    return this.$store.getters["OrderForm/getRateTime"];
  }

  get checkbox() {
    return this.$store.state.OrderForm.additionallyFilter;
  }

  get minPrice() {
    return this.$store.state.OrderForm.carPrice;
  }

  get maxPrice() {
    return this.$store.state.OrderForm.maxCarPrice;
  }

  get finalPrice() {
    return this.$store.getters["OrderForm/fullPrice"];
  }

  get maxValidPrice() {
    let validMaxPrice: boolean = false;
    if (this.maxPrice > this.finalPrice) {
      validMaxPrice = true;
    }
    return validMaxPrice;
  }

  get minValidPrice() {
    let validMinPrice: boolean = false;
    if (this.finalPrice < this.minPrice) {
      validMinPrice = true
    }
    return validMinPrice
  }
}
</script>

<style scoped lang="scss">
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
      font-weight: $light;
      font-size: 14px;
      line-height: 16px;
      color: $main-black;
    }
    &__dote {
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
  &__model-action--error {
    color: #d73b3b;
    margin-top:10px;
  }
}
</style>
