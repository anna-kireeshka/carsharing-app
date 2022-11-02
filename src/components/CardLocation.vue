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

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import BreadcrumbsRoute from "./BreadcrumbsRoute.vue";
import PreOrderInfo from "./PreOrderInfo.vue";
import Navigation from "./Navigation.vue";

const store = useStore();

const router = useRouter();

const openCity = ref<boolean>(false);

const openPvz = ref<boolean>(false);

const arrowCounterCity = ref<number>(-1);

const arrowCounterPvz = ref<number>(-1);

const mapIcon = ref(("@/assets/mark.png"));

const newCoords = ref(null);

store.dispatch("OrderForm/fetchDataPvz");

store.dispatch("OrderForm/fetchData");

onMounted(() => {
  let page = document.querySelector(".main-wrapper") as HTMLElement;
  page.addEventListener("click", () => {
    openCity.value = false;
    openPvz.value = false;
  });
});

// eslint-disable-next-line no-undef
ymaps.ready().then(() => {
  myMap;
});

const myMap = computed(() => {
  // eslint-disable-next-line no-undef
  return new ymaps.Map("map", {
    center: [54.30327383672103, 48.600127895911314],
    zoom: 10,
    controls: [],
  });
});

const myMapIcon = computed(() => {
  // eslint-disable-next-line no-undef
  return new ymaps.Placemark(
    newCoords.value,
    {
      hintContent: valuePvz,
    },
    {
      iconLayout: "default#image",
      iconImageHref: mapIcon.value,
      iconImageSize: [18, 18],
    }
  );
});

const geoObject = () => {
  let fullValue = `${valueCity}, ${valuePvz}`;

  if (valuePvz && valueCity) {
    // eslint-disable-next-line no-undef
    ymaps
      .geocode(fullValue, {
        results: 1,
      })
      .then((res: any) => {
        let firstGeoObject = res.geoObjects.get(0);
        newCoords.value = firstGeoObject.geometry.getCoordinates();
        let bounds = firstGeoObject.properties.get("boundedBy");

        myMap.value.setBounds(bounds, {
          checkZoomRange: true,
        });

        myMap.value.geoObjects.add(myMapIcon.value);
      });
  }
  return fullValue;
};

const searchCity = (e: { target: HTMLInputElement }) => {
  store.commit("OrderForm/searchCity", e.target.value);
  openCity.value = true;
  store.dispatch("OrderForm/fetchData");
};

const searchPvz = (e: { target: HTMLInputElement }) => {
  store.commit("OrderForm/searchPvz", e.target.value);

  openPvz.value = true;
  store.dispatch("OrderForm/fetchDataPvz");
};

const setResultPvz = (name: string, address: string, id: number) => {
  store.commit("OrderForm/searchPvz", name + address);
  store.commit("OrderForm/getPvzId", id);
  openPvz.value = false;
  geoObject();
};

const setResultCity = (name: string, id: number) => {
  store.commit("OrderForm/searchCity", name);
  store.commit("OrderForm/getCityId", id);

  openCity.value = false;
};

const resetCity = () => {
  store.commit("OrderForm/searchCity", "");
  router.push(this.$route.path);
};

const resetPvz = () => {
  store.commit("OrderForm/searchPvz", "");
  router.push(this.$route.path);
};

const valueCity = computed(() => store.state.OrderForm.valueCity);

const valuePvz = computed(() => store.state.OrderForm.valuePvz);

const cityList = computed(() => {
  if (valueCity.value !== "")
    return store.getters["OrderForm/getCityValue"](valueCity.value);
});

const pvzList = computed(() => store.state.OrderForm.pvz.data);

const emptyCityList = computed(() => {
  let empty = false;
  if (cityList.value.length === 0 && valueCity.value !== "") {
    empty = true;
  }
  return empty;
});

const emptyPvzList = computed(() => {
  let empty = false;
  if (pvzList.value.length === 0 && valuePvz.value !== "") {
    empty = true;
  }
  return empty;
});
</script>

<style scoped lang="scss">
@media screen and (max-width: 1008px) {
  .card-form {
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
  max-height: 100vh;
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
