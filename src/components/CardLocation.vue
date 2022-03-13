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
            <div class="city__wrap">
              <label for="city" class="city__label">Город</label>
              <input
                id="city"
                type="text"
                class="city__form"
                @input="searchCity"
                @keydown.down="onArrowDown"
                @keydown.up="onArrowUp"
                @keydown.enter="onEnter"
                :value="valueCity"
                :chose-city="valueCity"
              />
              <button class="city__cross-icon"></button>

              <ul class="city__autocomplete-list city-wrap" v-show="openCity">
                <li
                  class="city__autocomplete-item"
                  v-for="(city, index) in cityList"
                  :key="index"
                  @click="setResult(city.name)"
                  :class="{
                    'city__autocomplete-item': index === arrowCounterCity,
                  }"
                  ref="optionsCity"
                >
                  {{ city.name }}
                </li>
              </ul>
            </div>

            <div class="city__wrap">
              <label for="pvz" class="city__label">Пункт выдачи</label>
              <input
                id="pvz"
                type="text"
                class="city__form"
                @input="searchPvz"
                @keydown.down="onArrowDown"
                @keydown.up="onArrowUp"
                @keydown.enter="onEnter"
                :value="valuePvz"
                :chose-pvz="valuePvz"
              />
              <button class="city__cross-icon"></button>

              <ul class="city__autocomplete-list pvz-wrap" v-show="openPvz">
                <li
                  class="city__autocomplete-item"
                  v-for="(pvz, cityId) in pvzList"
                  :key="cityId"
                  @click="setResult(pvz.name)"
                  :class="{
                    'city__autocomplete-item': index === arrowCounterPvz,
                  }"
                  ref="optionsPvz"
                >
                  {{ pvz.name }} - {{ pvz.address }}
                </li>
              </ul>
            </div>
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
const namespace: string = "location";
@Component({
  components: { BreadcrumbsRoute, PreOrderInfo, Navigation },
})
export default class CardLocation extends Vue {
  openCity: boolean = false;
  openPvz: boolean = false;
  arrowCounterCity: number = -1;
  arrowCounterPvz: number = -1;

  mounted() {
    let page = document.querySelector(".main-wrapper") as HTMLElement;
    page.addEventListener("click", () => {
      this.openCity = false;
      this.openPvz = false;
    });
  }

  searchCity(e: { target: HTMLInputElement }) {
    this.$store.commit("location/searchCity", e.target.value);
    this.fetchData();
  }

  searchPvz(e: { target: HTMLInputElement }) {
    this.$store.commit("location/searchPvz", e.target.value);
    this.fetchDataPvz();
  }

  fetchDataPvz() {
    return this.$store.dispatch("location/fetchDataPvz");
  }

  fetchData() {
    return this.$store.dispatch("location/fetchData");
  }

  fixScrollingPvzKeyUp() {
    //@ts-ignore
    const scroll = this.$refs.optionsPvz[this.arrowCounterPvz].clientHeight;
    (document.querySelector(".pvz-wrap") as HTMLElement).scrollTop =
      scroll * this.arrowCounterPvz;
  }

  fixScrollingCityKeyUp() {
    //@ts-ignore
    const scroll = this.$refs.optionsCity[this.arrowCounterCity].clientHeight;
    (document.querySelector(".city-wrap") as HTMLElement).scrollTop =
      scroll * this.arrowCounterCity;
  }

  onArrowDown() {
    if (this.arrowCounterCity < this.valueCity.length) {
      this.arrowCounterCity += 1;
      this.fixScrollingCityKeyUp();
    }
    if (this.arrowCounterPvz < this.valuePvz.length) {
      this.arrowCounterPvz += 1;
      this.fixScrollingPvzKeyUp();
    }
  }

  onArrowUp() {
    if (this.arrowCounterCity > 0) {
      this.arrowCounterCity -= 1;
      this.fixScrollingCityKeyUp();
    }

    if (this.arrowCounterPvz > 0) {
      this.arrowCounterPvz -= 1;
      this.fixScrollingPvzKeyUp();
    }
  }

  onEnter() {
    if (this.valueCity) {
      this.$store.commit(
        "location/searchPvz",
        this.cityList[this.arrowCounterCity].name
      );
      this.openCity = false;
    }
    if (this.valuePvz) {
      this.$store.commit(
        "location/searchPvz",
        this.pvzList[this.arrowCounterPvz].name
      );
      this.openPvz = false;
    }
  }
  setResult(name: string) {
    if (this.valueCity) {
      this.$store.commit("location/searchPvz", name);
      this.openCity = false;
    }
    if (this.valuePvz) {
      this.$store.commit("location/searchPvz", name);
      this.openPvz = false;
    }
  }

  get valueCity(): string {
    return this.$store.state.location.valueCity;
  }

  get valuePvz(): string {
    return this.$store.state.location.valuePvz;
  }

  get cityList() {
    return this.$store.state.location.city;
  }

  get pvzList() {
    return this.$store.state.location.pvz;
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
    position: relative;
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
  &__autocomplete-list {
    padding: 0;
    margin: 0;
    border: 1px solid $main-light-gray;
    height: 120px;
    min-height: 1em;
    max-height: 224px;
    overflow: auto;
  }
  &__autocomplete-item {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }
  &__autocomplete-item:hover {
    border-bottom: 1px solid $color-green;
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
