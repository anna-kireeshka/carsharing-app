<template>
  <div class="main-wrapper">
    <Navigation />
    <div class="main">
      <AppHeader />
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
                  v-model="item.checked"
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
            <div>
              <div class="date-wrap">
                <label class="filter__label"
                  >С
                  <date-picker
                    type="datetime"
                    class="filter__date filter__date--start"
                    placeholder="Введите дату и время"
                    v-model="startDateModel"
                    @change="checkDateFrom(startDateModel)"
                    @clear="clearDateStart(startDateModel)"
                  ></date-picker>
                </label>
                <small class="error" v-if="startDateModel === ''"
                  >Поле обязательно для заполнения</small
                >
              </div>
            </div>
            <p>
              <label class="filter__label">
                По
                <date-picker
                  type="datetime"
                  class="filter__date filter__date--start"
                  placeholder="Введите дату и время"
                  v-model="endDateModel"
                  @change="checkDateTo(endDateModel)"
                  @clear="clearDateEnd(endDateModel)"
                ></date-picker>
              </label>
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

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import PreOrderInfo from "@/components/PreOrderInfo.vue";
import Navigation from "./Navigation.vue";
import BreadcrumbsRoute from "@/components/BreadcrumbsRoute.vue";
import AppHeader from "@/components/AppHeader.vue";

const store = useStore();
const startDateModel = ref<string>("");
const endDateModel = ref<string>("");

store.dispatch("OrderForm/fetchDataRate");

const checkColor = (color: string, e: { target: HTMLInputElement }) => {
  store.commit("OrderForm/getCarColor", color);
  store.commit("OrderForm/getColorChecked", e.target.checked);
};

const checkFilter = (
  filter: string,
  price: number,
  e: { target: HTMLInputElement }
) => {
  store.commit("OrderForm/getCarAdditionallyFilter", filter);
  store.commit("OrderForm/getCarPriceAdditionally", price);
  store.commit("OrderForm/getCarAdditionallyChecked", e.target.checked);
};

const checkRate = (duration: string, price: number, rateId: string) => {
  store.commit("OrderForm/getCarRate", duration);
  store.commit("OrderForm/getCarPriceRate", price);
  store.commit("OrderForm/getRateId", rateId);
};

const checkDateFrom = (from: string) => {
  store.commit("OrderForm/getDateTimeFrom", from);
};

const checkDateTo = (to: string) => {
  store.commit("OrderForm/getDateTimeTo", to);
};

const clearDateStart = (to: string) => {
  store.commit("OrderForm/deleteDateStart", to);
};

const clearDateEnd = (end: string) => {
  store.commit("OrderForm/deleteDateEnd", end);
};

const rate = computed(() => store.getters["OrderForm/getRateFilter"]);

const colorFilter = computed(() => store.getters["OrderForm/getColorFilter"]);

const additionally = computed(
  () => store.getters["OrderForm/getCarAdditionally"]
);

const startDate = computed(() => store.state.OrderForm.dateFrom);

const endDate = computed(() => store.state.OrderForm.dateTo);

const startDateM = computed(() => store.getters["OrderForm/getDateToMs"]);

const endDateMs = computed(() => store.getters["OrderForm/getDateFromMs"]);
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
  .error {
    color: #d73b3b;
  }
}
.date-wrap {
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
}
::v-deep {
  .mx-input {
    border: 1px solid transparent;
    box-shadow: none;
    padding: 0;
  }
}
</style>
