<template>
  <div class="main-wrapper">
    <Navigation />
    <div class="main">
      <AppHeader />
      <BreadcrumbsRoute />
      <div class="card-form">
        <div class="car-container">
          <div class="form">
            <div class="order">
              <p class="order__car-model">{{ carModel }}</p>
              <p class="order__car-number">{{ carNumber }}</p>
              <p class="order__fuel">
                Топливо
                <span class="order__fuel order__fuel--precent"
                  >{{ carFuel }}%</span
                >
              </p>
              <p class="order__date">
                Доступна с
                <span class="order__date order__date--time">
                  {{ carDate }}</span
                >
              </p>
            </div>
            <div class="card">
              <img :src="carImg" alt="Выбраная машина" class="card__image" />
            </div>
          </div>
        </div>
        <PreOrderInfo />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import Navigation from "@/components/Navigation.vue";
import PreOrderInfo from "@/components/PreOrderInfo.vue";
import BreadcrumbsRoute from "@/components/BreadcrumbsRoute.vue";
import AppHeader from "@/components/AppHeader.vue";

const store = useStore();

const carModel = computed(() => store.state.OrderForm.carModel);

const carNumber = computed(() => store.state.OrderForm.carNumber);

const carImg = computed(() => store.state.OrderForm.img);

const carFuel = computed(() => store.state.OrderForm.fuel);

const carDate = computed(() => store.state.OrderForm.dateFrom);
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
  width: 100%;
  height: 100vh;
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
  @include flex-row;
  @include order-card;
  @include order-card-mobile;
  min-width: calc(100% - 384px - 128px);
  padding: 32px 63px 32px 64px;
  flex-wrap: wrap;
}
.car-container {
  min-width: calc(100% - 384px - 128px);
  border-right: 1px solid $main-light-gray;
}
.order {
  @include flex-column;
  padding-right: 30px;

  &__car-model {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;

    margin-bottom: 8px;

    color: #121212;
  }
  &__fuel {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    margin-bottom: 8px;

    color: #121212;
  }
  &__fuel--precent {
    font-weight: 300;
  }
  &__car-number {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #121212;
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 4px 8px;

    width: 98px;
    margin-bottom: 8px;
  }
  &__date {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

    color: #121212;

    margin-bottom: 8px;
  }
  &__date--time {
    font-weight: 300;
  }
}
.card {
  width: 256px;
  &__image {
    width: 100%;
    object-fit: contain;
  }
}
.navigation {
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #eeeeee;
  padding-left: 64px;
}
</style>
