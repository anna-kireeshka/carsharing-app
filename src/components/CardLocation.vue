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
                @click.prevent="searchCity"
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
                <li class="city__autocomplete-item" v-show="!emptyCityList">
                  <p>Ничего не надено</p>
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
                <li class="city__autocomplete-item" v-if="!emptyPvzList">
                  <p>В выбраном городе отсутствуют пункты выдачи</p>
                </li>
              </ul>
            </div>
          </div>
          <CardMap />
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
import CardMap from "@/components/CardMap.vue";

@Component({
  components: { CardMap, BreadcrumbsRoute, PreOrderInfo, Navigation },
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
    this.openCity = true;
    this.fetchData();
  }

  searchPvz(e: { target: HTMLInputElement }) {
    this.$store.commit("location/searchPvz", e.target.value);

    this.openPvz = true;
    this.fetchDataPvz();
  }

  fetchDataPvz() {
    return this.$store.dispatch("location/fetchDataPvz");
  }

  fetchData() {
    return this.$store.dispatch("location/fetchData");
  }

  setResultPvz(name: string, address: string, id: number) {
    this.$store.commit("location/searchPvz", name + address);
    this.$store.commit("location/getPvzId", id);
    this.openPvz = false;
  }

  setResultCity(name: string, id: number) {
    this.$store.commit("location/searchCity", name);
    this.$store.commit("location/getCityId", id);
    this.openCity = false;
  }

  resetCity() {
    this.$store.commit("location/searchCity", "");
    this.$router.push(this.$route.path);
  }

  resetPvz() {
    this.$store.commit("location/searchPvz", "");
    this.$router.push(this.$route.path);
  }

  get valueCity(): string {
    return this.$store.state.location.valueCity;
  }

  get valuePvz(): string {
    return this.$store.state.location.valuePvz;
  }

  get cityList() {
    if (this.valueCity !== "")
      return this.$store.getters["location/getCityValue"](this.valueCity);
  }

  get pvzList() {
    return this.$store.state.location.pvz.data;
  }

  get emptyCityList() {
    let empty: boolean = false;
    if (this.cityList === [] && this.valueCity !== "") {
      empty = true;
    }
    return empty;
  }

  get emptyPvzList() {
    let empty = false;
    if (this.valuePvz !== "" && this.pvzList === []) {
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
  height: 100vh;
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
</style>
