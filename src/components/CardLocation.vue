<template>
  <div class="main-wrapper">
    <Navigation />
    <div class="main">
      <AppHeader />
      <BreadcrumbsRoute />
      <div class="card-form">
        <div class="form">
          <div class="city">
            <div class="city__wrap">
              <InputForm
                :placeholder="'Город'"
                :label="'Город'"
                v-model="valueCity"
                @update:modelValue="searchCity"
                @resetLocation="resetCity"
                @loadList="openCity = $event"
              />
              <SelectForm
                v-if="openCity"
                :location-list="cityList"
                :is-open-slect-form="openCity"
                :isEmptyList="isEmptyCityList"
                :location-value="'city'"
                @setResult="setResultCity"
              />
            </div>

            <div class="city__wrap">
              <InputForm
                :placeholder="'Пункт выдачи'"
                :label="'Пункт выдачи'"
                v-model="valuePvz"
                @searchLocation="searchPvz"
                @resetLocation="resetPvz"
                @loadList="openPvz = $event"
              />

              <SelectForm
                v-if="openPvz"
                :location-list="pvzList"
                :is-open-slect-form="openPvz"
                :isEmptyList="isEmptyPvzList"
                :location-value="'pvz'"
                @setResult="setResultPvz"
              />
            </div>
          </div>
          <YandexMap :value-city="valueCity" :value-pvz="valuePvz" />
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
import SelectForm from "@/components/UI/SelectForm.vue";
import InputForm from "@/components/UI/InputForm.vue";
import YandexMap from "@/components/UI/YandexMap.vue";

const store = useStore();

const openCity = ref<boolean>(false);

const openPvz = ref<boolean>(false);

const init = async () => {
  try {
    await store.dispatch("OrderForm/loadСities");
  } catch {
    console.log("error");
  }
};

init();

const valueCity = computed<string>(() => store.state.OrderForm.valueCity);
const valuePvz = computed<string>(() => store.state.OrderForm.valuePvz);

const cityList = computed(() =>
  store.getters["OrderForm/getCityValue"](valueCity.value)
);
const pvzList = computed(() => store.state.OrderForm.pvz);

const searchCity = (value: string) => {
  store.commit("OrderForm/setCityValue", value);
  openCity.value = true;
};
const searchPvz = (value: string) => {
  store.commit("OrderForm/setPvzValue", value);
  openPvz.value = true;
};

const setResultPvz = (name: string, id: number) => {
  store.commit("OrderForm/setPvzValue", name);
  store.commit("OrderForm/getPvzId", id);

  openPvz.value = false;
};

const setResultCity = (name: string, id: number) => {
  store.commit("OrderForm/setCityValue", name);
  store.dispatch("OrderForm/loadPoint", id);

  openCity.value = false;
};

const resetCity = () => {
  store.commit("OrderForm/setCityValue", "");
};

const resetPvz = () => {
  store.commit("OrderForm/setPvzValue", "");
};

const isEmptyCityList = computed<boolean>(
  () => !(cityList.value?.length && valueCity.value)
);

const isEmptyPvzList = computed<boolean>(
  () => !(pvzList.value?.length && valuePvz.value)
);
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
