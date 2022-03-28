<reference path="ymaps.d.ts" />
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
                placeholder="Введите название города"
                autocomplete="off"
                class="city__form"
                @input="searchCity"
                :value="valueCity"
              />
              <button class="city__cross-icon" @click="resetCity">
                <svg width="8" height="8">
                  <use xlink:href="#cross" />
                </svg>
              </button>

              <ul class="city__autocomplete-list city-wrap" v-show="openCity">
                <li
                  class="city__autocomplete-item"
                  v-for="(city, index) in cityList"
                  :key="index"
                  @click="setResultCity(city.name, city.id)"
                  :class="{
                    'city__autocomplete-item': index === arrowCounterCity,
                  }"
                  ref="optionsCity"
                >
                  <p>{{ city.name }}</p>
                </li>
                <li class="city__autocomplete-item" v-show="emptyCityList">
                  <p>Ничего не найдено</p>
                </li>
              </ul>
            </div>

            <div class="city__wrap">
              <label for="pvz" class="city__label">Пункт выдачи</label>
              <input
                id="pvz"
                type="text"
                placeholder="Введите название пункта выдачи"
                autocomplete="off"
                class="city__form"
                @input="searchPvz"
                :value="valuePvz"
              />
              <button class="city__cross-icon" @click="resetPvz">
                <svg width="8" height="8">
                  <use xlink:href="#cross" />
                </svg>
              </button>

              <ul class="city__autocomplete-list pvz-wrap" v-show="openPvz">
                <li
                  class="city__autocomplete-item"
                  v-for="(pvz, index) in pvzList"
                  :key="index"
                  @click="setResultPvz(pvz.name, pvz.address, pvz.id)"
                  :class="{
                    'city__autocomplete-item': index === arrowCounterPvz,
                  }"
                  ref="optionsPvz"
                >
                  <p>{{ pvz.name }} - {{ pvz.address }}</p>
                </li>
                <li class="city__autocomplete-item" v-show="emptyPvzList">
                  <p>В выбранном городе пвз отсутствуют</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="card">
            <p class="card__desc">Выбрать на карте:</p>
            <div id="map" class="card__map"></div>
          </div>
        </div>

        <PreOrderInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import BreadcrumbsRoute from "./BreadcrumbsRoute.vue";
import PreOrderInfo from "./PreOrderInfo.vue";
import Navigation from "./Navigation.vue";

@Component({
  components: { BreadcrumbsRoute, PreOrderInfo, Navigation },
})
export default class CardLocation extends Vue {
  openCity: boolean = false;
  openPvz: boolean = false;
  arrowCounterCity: number = -1;
  arrowCounterPvz: number = -1;
  mapIcon = require("@/assets/mark.png");
  newCoords = null;

  mounted() {
    let page = document.querySelector(".main-wrapper") as HTMLElement;
    page.addEventListener("click", () => {
      this.openCity = false;
      this.openPvz = false;
    });
  }

  created() {
    ymaps.ready().then(() => {
      this.myMap;
    });
  }

  get myMap() {
    return new ymaps.Map("map", {
      center: [54.30327383672103,48.600127895911314],
      zoom: 10,
      controls: [],
    });
  }

  get myMapIcon() {
    return new ymaps.Placemark(this.newCoords, {
      hintContent: this.valuePvz,
    },{
      iconLayout: "default#image",
      iconImageHref: this.mapIcon,
      iconImageSize: [18, 18],
    });
  }

  get geoObject() {
    let fullValue: string = `${this.valueCity}, ${this.valuePvz}`;

    if (this.valuePvz && this.valueCity) {
      ymaps
        .geocode(fullValue, {
          results: 1,
        })
        .then((res: any) => {
          let firstGeoObject = res.geoObjects.get(0);
          this.newCoords = firstGeoObject.geometry.getCoordinates();
          let bounds = firstGeoObject.properties.get("boundedBy");

          this.myMap.setBounds(bounds, {
            checkZoomRange: true,
          });

          this.myMap.geoObjects.add(this.myMapIcon);
        });
    }
    return fullValue;
  }

  searchCity(e: { target: HTMLInputElement }) {
    this.$store.commit("OrderForm/searchCity", e.target.value);
    this.openCity = true;
    this.fetchData();
  }

  searchPvz(e: { target: HTMLInputElement }) {
    this.$store.commit("OrderForm/searchPvz", e.target.value);

    this.openPvz = true;
    this.fetchDataPvz();
  }

  fetchDataPvz() {
    return this.$store.dispatch("OrderForm/fetchDataPvz");
  }

  fetchData() {
    return this.$store.dispatch("OrderForm/fetchData");
  }

  setResultPvz(name: string, address: string, id: number) {
    this.$store.commit("OrderForm/searchPvz", name + address);
    this.$store.commit("OrderForm/getPvzId", id);
    this.openPvz = false;
    this.geoObject;
  }

  setResultCity(name: string, id: number) {
    this.$store.commit("OrderForm/searchCity", name);
    this.$store.commit("OrderForm/getCityId", id);

    this.openCity = false;
  }

  resetCity() {
    this.$store.commit("OrderForm/searchCity", "");
    this.$router.push(this.$route.path);
  }

  resetPvz() {
    this.$store.commit("OrderForm/searchPvz", "");
    this.$router.push(this.$route.path);
  }

  get valueCity(): string {
    return this.$store.state.OrderForm.valueCity;
  }

  get valuePvz(): string {
    return this.$store.state.OrderForm.valuePvz;
  }

  get cityList() {
    if (this.valueCity !== "")
      return this.$store.getters["OrderForm/getCityValue"](this.valueCity);
  }

  get pvzList() {
    return this.$store.state.OrderForm.pvz.data;
  }

  get emptyCityList() {
    let empty: boolean = false;
    if (this.cityList?.length === 0 && this.valueCity !== "") {
      empty = true;
    }
    return empty;
  }

  get emptyPvzList() {
    let empty = false;
    if (this.pvzList?.length === 0 && this.valuePvz !== "") {
      empty = true;
    }
    return empty;
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
  @include order-card;
  @include order-card-mobile;
  @include flex-column;
  min-width: calc(100% - 384px - 128px);
  padding: 32px 192px 0 64px;
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
    padding-right: 20px;
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
    height: auto;
    min-height: 1em;
    max-height: 224px;
    overflow: auto;
  }
  &__autocomplete-item {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;

    color: $main-black;
    font-weight: $light;
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
.card {
  @include flex-column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  margin-top: calc(45px - 16px);

  #map {
    width: 100% !important;
    height: 352px;

    filter: grayscale(0.8);
    -ms-filter: grayscale(0.8);
    -webkit-filter: grayscale(0.8);
    -moz-filter: grayscale(0.8);
    -o-filter: grayscale(0.8);
  }

  &__desc {
    font-weight: $light;
    font-size: 14px;
    line-height: 16px;
    color: $main-black;

    margin-bottom: 16px;
  }

  ymaps {
    width: 100%;
  }
}

</style>
