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
                :class="{ 'filter__label--disabled': item.checked === false }"
              >
                <input
                  type="radio"
                  class="filter__radio-item"
                  :id="item.val"
                  :value="item.val"
                  name="color"
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
                  onfocus="(this.type='date')"
                  onblur="(this.type='text')"
                  id="startDate"
                  class="filter__date"
                  placeholder="Введите дату и время"
                />
              </label>
            </p>
            <p>
              <label for="endDate" class="filter__label"
                >По<input
                  type="text"
                  onfocus="(this.type='date')"
                  onblur="(this.type='text')"
                  id="endDate"
                  class="filter__date"
                  placeholder="Введите дату и время"
              /></label>
            </p>
          </div>
          <div class="filter__rate">
            <p class="filter__desc">Тариф</p>

            <div class="filter__item" v-for="item in rate" :key="item.val">
              <label
                class="filter__label"
                :for="item.val"
                :class="{ 'filter__label--disabled': item.checked === false }"
              >
                <input
                  type="radio"
                  class="filter__radio-item"
                  :id="item.val"
                  :value="item.val"
                  name="rate"
                />
                <span class="filter__castom"></span>
                {{ item.name }}</label
              >
            </div>
          </div>
          <div class="filter__services">
            <p class="filter__desc">Доп услуги</p>
            <div
              class="filter__item"
              v-for="item in additionaly"
              :key="item.val"
            >
              <label
                class="filter__label flter__lable--check"
                :for="item.name"
                :class="{ 'filter__label--disabled': item.checked === false }"
              >
                <input
                  type="checkbox"
                  class="filter__checkbox-item"
                  :id="item.name"
                  :checked="item.checked"
                />
                <span class="filter__castom--checkbox"></span>
                {{ item.name }}</label
              >
            </div>
          </div>
        </div>

        <FinalInfo />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FinalInfo from "./FormAdditionally.vue";
import Navigation from "./Navigation.vue";
@Component({ components: { FinalInfo, Navigation } })
export default class OrderAdditionally extends Vue {
  colorFilter: { name: string; checked: boolean; val: string }[] = [
    {
      name: "Любой",
      checked: true,
      val: "allColor",
    },
    {
      name: "Красный",
      checked: false,
      val: "red",
    },
    {
      name: "Голубой",
      checked: false,
      val: "blue",
    },
  ];
  rate: { name: string; checked: boolean; val: string }[] = [
    { name: "Поминутно, 7₽/мин", checked: false, val: "minute" },
    { name: "На сутки, 1999 ₽/сутки", checked: true, val: "allDay" },
  ];
  additionaly: { name: string; checked: boolean; val: string }[] = [
    { name: "Полный бак, 500р", checked: true, val: "fullTank" },
    { name: "Детское кресло, 200р", checked: false, val: "babyChair" },
    { name: "Правый руль, 1600р", checked: false, val: "rightHandDrive" },
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

.additionally-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
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
  //border-right: 1px solid $main-light-gray;
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
  &__date[type="text"] {
    font-family: inherit;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #121212;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
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
