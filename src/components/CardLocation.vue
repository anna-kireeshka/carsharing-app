<template>
  <!--TODO:Перенсти в pages посли слияния v-01-->
  <div class="wrapper">
    <router-view />
    <!---Heeader-->
    <div class="main-nav">
      <h1 class="main-nav__company">Need for drive</h1>
      <p class="main-nav__city-name">
        <!-- <svg width="18" height="20">
            <use xlink:href="#gps" />
          </svg> -->
        Ульяновск
      </p>
    </div>
    <NavigationRoute />
    <div class="card-form">
      <div class="form">
        <div class="city">
          <p class="city__wrap">
            <label for="city" class="city__label">Город</label>
            <input id="city" type="text" class="city__form" />
            <button class="city__cross-icon">
              <!--TODO:Если что-то введено показывать-->
              <img src="../assets/cross.svg" alt="Очистить" />
            </button>
          </p>

          <p class="city__wrap">
            <label for="pvz" class="city__label">Пункт выдачи</label>
            <input id="pvz" type="text" class="city__form" />
            <button class="city__cross-icon">
              <!--TODO:Если что-то введено показывать-->
              <img src="../assets/cross.svg" alt="Очистить" />
            </button>
          </p>
        </div>
        <div class="card">
          <p class="card__desc">Выбрать на карте:</p>
          <img src="../assets/location.png" alt="Карта" />
        </div>
      </div>
      <PreOrderInfo />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavigationRoute from "./NavigationRoute.vue";
import PreOrderInfo from "./PreOrderInfo.vue";
@Component({
  components: { NavigationRoute, PreOrderInfo },
})
export default class CardLocation extends Vue {}
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.main-nav {
  display: flex;
  justify-content: space-between;
  padding: 32px 63px 32px 128px;
  // @include flex-row;
  // @include flex-logo;
  &__company {
    // @include logo-mobile;
    // color: $color-green;
    // font-weight: $bold;
    font-size: 1.875rem;
  }
  &__city-name {
    // @include city-mobile;
    // color: $main-dark-gray;
    font-size: 0.875rem;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
  &__city-name img {
    margin-right: 0.4713rem;
  }
}
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.card-form {
  display: flex;
  justify-content: space-between;
  display: flex;
}
.form {
  min-width: calc(100% - 384px - 128px);
  padding: 32px 0 0 128px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid #eeeeee;
}

.city {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &__wrap {
    margin-bottom: 16px;
  }
  &__label {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #121212;
    padding-right: 8px;
  }
  &__form {
    border: none;
    border-bottom: 1px solid #999999;
    outline: none;
    width: 224px;
  }
  &__form[type="text"] {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #121212;
  }
  &__cross-icon {
    border: none;
    outline: none;
    background: transparent;
  }
}
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: calc(45px - 16px);
  &__desc {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #121212;

    margin-bottom: 16px;
  }
}
</style>
