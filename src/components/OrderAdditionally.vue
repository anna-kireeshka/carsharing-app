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
      <div class="additionally-container">
        <div class="filter">
          <p class="filter__desc">Цвет</p>
          <div class="filter__list">
            <div
              class="filter__item"
              v-for="item in colorFilter"
              :key="item.val"
            >
              <label
                class="filter__label"
                :for="item.val"
                :class="{ 'filter__label--disabled': !item.checked }"
              >
                <input
                  type="radio"
                  class="filter__radio-item"
                  :id="item.val"
                  :value="item.val"
                  name="color"
                  @change="checkColor(item.name, $event)"
                />
                <span class="filter__castom"></span>
                {{ item.name }}</label
              >
            </div>
          </div>
          <p class="filter__desc">Дата аренды</p>
          <div class="filter__dates">
            <p>
              <label for="startDate" class="filter__label"
                >С
                <input
                  type="text"
                  onfocus="(this.type='datetime-local')"
                  onblur="(this.type='text')"
                  id="startDate"
                  class="filter__date filter__date--start"
                  placeholder="Введите дату и время"
                  v-model="startDateModel"
                  @input="checkDateFrom(startDateModel)"
                />
              </label>
            </p>
            <p>
              <label for="endDate" class="filter__label"
                >По<input
                  type="text"
                  onfocus="(this.type='datetime-local')"
                  onblur="(this.type='text')"
                  id="endDate"
                  class="filter__date"
                  placeholder="Введите дату и время"
                  v-model="endDateModel"
                  @input="checkDateTo(endDateModel)"
              /></label>
            </p>
          </div>
          <div class="filter__rate">
            <p class="filter__desc">Тариф</p>

            <div class="filter__item" v-for="item in rate" :key="item.id">
              <label class="filter__label" :for="item.rateTypeId.id">
                <input
                  type="radio"
                  class="filter__radio-item"
                  @change="checkRate(item.rateTypeId.name, item.price, item.id)"
                  :id="item.rateTypeId.id"
                  :value="item.rateTypeId.name"
                  name="rate"
                />
                <span class="filter__castom"></span>
                {{ item.rateTypeId.name }}, {{ item.price }} ₽/{{
                  item.rateTypeId.unit
                }}
              </label>
            </div>
          </div>
          <div class="filter__services">
            <p class="filter__desc">Доп услуги</p>
            <div
              class="filter__item"
              v-for="(item, index) in additionally"
              :key="index"
            >
              <label
                class="filter__label flter__lable--check"
                :for="item.name"
                :class="{ 'filter__label--disabled': !item.checked }"
              >
                <input
                  type="checkbox"
                  class="filter__checkbox-item"
                  :id="item.name"
                  v-model="item.checked"
                  @input="checkFilter(item.name, item.price, $event)"
                />
                <span class="filter__castom--checkbox"></span>
                {{ item.name }}</label
              >
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
import PreOrderInfo from "@/components/PreOrderInfo.vue";
import Navigation from "./Navigation.vue";
import BreadcrumbsRoute from "@/components/BreadcrumbsRoute.vue";

@Component({ components: { PreOrderInfo, Navigation, BreadcrumbsRoute } })
export default class OrderAdditionally extends Vue {
  /* eslint-disable */
  startDateModel: string = "";
  endDateModel: string = "";

  mounted() {
    this.fetchRate();
  }

  fetchRate() {
    this.$store.dispatch("OrderForm/fetchDataRate");
    this.rate;
  }

  checkColor(color: string, e: { target: HTMLInputElement }) {
    this.$store.commit("OrderForm/getCarColor", color);
    this.$store.commit("OrderForm/getColorChecked", e.target.checked);
  }

  checkFilter(filter: string, price: number, e: { target: HTMLInputElement }) {
    this.$store.commit("OrderForm/getCarAdditionallyFilter", filter);
    this.$store.commit("OrderForm/getCarPriceAdditionally", price);
    this.$store.commit("OrderForm/getCarAdditionallyChecked", e.target.checked);
  }

  checkRate(duration: string, price: number, rateId: string) {
    this.$store.commit("OrderForm/getCarRate", duration);
    this.$store.commit("OrderForm/getCarPriceRate", price);
    this.$store.commit("OrderForm/getRateId", rateId);
  }

  checkDateFrom(from: string) {
    this.$store.commit("OrderForm/getDateTimeFrom", from);
  }

  checkDateTo(to: string) {
    this.$store.commit("OrderForm/getDateTimeTo", to);
  }

  get rate() {
    return this.$store.getters["OrderForm/getRateFilter"];
  }

  get colorFilter() {
    return this.$store.getters["OrderForm/getColorFilter"];
  }

  get additionally() {
    return this.$store.getters["OrderForm/getCarAdditionally"];
  }

  get startDate(): string {
    return this.$store.state.OrderForm.dateFrom;
  }

  get endDate(): string {
    return this.$store.state.OrderForm.dateTo;
  }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1008px) {
  .additionally-container {
    @include flex-column;
  }
}
.main-wrapper {
  @include flex-row;
  overflow: hidden;
}
.main {
  height: 100vh;
  width: 100%;
  overflow: scroll;
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

.additionally-container {
  display: flex;
  justify-content: space-between;
  width: 100%;

  @include flex-row;
  @include content-very-large-main;
  @include content-large-main;
  @include content-desctop-standart;
  @include content-desctop--mini;
  @include wrapper-mobile;
}
.filter {
  @include order-card;
  @include order-card-mobile;
  @include flex-column;
  min-width: calc(100% - 384px - 128px);
  padding: 32px 192px 0 64px;
  align-items: flex-start;
  border-right: 1px solid $main-light-gray;
  &__desc-wrap {
    display: flex;
    align-items: flex-start;
  }
  &__desc {
    display: block;

    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #121212;

    margin-bottom: 16px;
  }
  &__list {
    display: flex;
    margin-bottom: 32px;
  }
  &__item {
    position: relative;
    margin: 0 18px;
    margin-bottom: 8px;
  }
  &__label {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;

    color: #121212;
  }
  &__label--disabled {
    color: #999999;
  }
  &__radio-item,
  &__checkbox-item {
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
    border: 1px solid #999999;
    border-radius: 50%;
  }
  &__castom--checkbox {
    position: absolute;
    top: 4px;
    left: -20px;
    height: 12px;
    width: 12px;
    border: 1px solid #999999;
  }
  &__checkbox-item:checked + &__castom--checkbox {
    border-color: #0ec261;
    background-image: url("../assets/checked.svg");
  }

  input:checked ~ &__castom {
    border: 3px solid #0ec261;
  }
  &__dates {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-bottom: 32px;
  }
  &__date {
    width: 224px;

    border: none;
    border-bottom: 1px solid #999999;
    outline: none;
    width: 224px;

    margin-left: 8px;
  }
  &__date--start {
    margin-bottom: 13px;
  }
  &__date[type="text"] {
    font-family: inherit;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #121212;
  }
  input[type="datetime"]::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
  &__rate {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 32px;
  }

  &__services {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
