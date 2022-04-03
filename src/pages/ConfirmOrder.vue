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
      <div class="navigation">
        <p class="navigation__item">Заказ номер {{ id }}</p>
      </div>
      <div class="card-form">
        <div class="car-container">
          <div
            class="form"
            v-for="(item, key) in finalOrderList"
            :key="'list-item-' + key"
          >
            <div class="order" v-if="key === 'data'">
              <p class="order__car-model">
                {{ item.carId.name }}
              </p>
              <p class="order__car-number">{{ item.carId.number }}</p>
              <p class="order__fuel">
                Топливо
                <span class="order__fuel order__fuel--precent"
                  >{{ item.carId.tank }}%</span
                >
              </p>
              <p class="order__date">
                Доступна с
                <span class="order__date order__date--time">
                  {{ carDate }}</span
                >
              </p>
            </div>
            <div class="card" v-if="key === 'data'">
              <img
                :src="item.carId.thumbnail.path"
                alt="Выбраная машина"
                class="card__image"
              />
            </div>
          </div>
        </div>
        <PreOrderInfo />
      </div>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

import PreOrderInfo from "@/components/PreOrderInfo.vue";
import Navigation from "@/components/Navigation.vue";

@Component({
  components: { PreOrderInfo, Navigation },
})
export default class ConfirmOrder extends Vue {
  finalOrderList = [];

  mounted() {
    this.$store.dispatch("OrderForm/fetchDataFinalOrderForId");
    this.finalOrderList = this.$store.state.OrderForm.orderCard;
  }

  get carDate() {
    return this.$store.state.OrderForm.dateTo;
  }

  get id() {
    return this.$store.state.OrderForm.id;
  }
}
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

  &__link {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #999999;
    text-decoration: none;
  }
}
</style>
