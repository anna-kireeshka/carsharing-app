<template>
  <div class="wrapper-form">
    <div class="order">
      <p class="order__title">Ваш заказ:</p>
      <div class="pvz">
        <p class="pvz__name">Пункт выдачи</p>
        <p class="pvz__dote"></p>
        <div class="pvz__block-location">
          <p class="pvz__location">{{ city }}</p>
          <p class="pvz__location">{{ pvz }}</p>
        </div>
      </div>
    </div>
    <div class="price">
      <p class="price__first-step">
        <span class="price__first-step--dark">Цена</span>: от 8 000 до 12 000 ₽
      </p>
      <button
        class="price__model-action"
        :class="{ 'price__model-action--active': !checkValidForm }"
      >
        Выбрать модель
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PreOrderInfo extends Vue {
  /* eslint-disable */
  get city() {
    return this.$route.query.city;
  }

  get pvz() {
    return this.$route.query.pvz;
  }

  get checkValidForm() {
    let empty: boolean = false;
    if (this.city === null && this.pvz === null) {
      empty = true;
    }
    return empty;
  }
}
</script>
<style scoped lang="scss">
.wrapper-form {
  width: 100%;
  padding: 32px 63px 32px 32px;
}
.order {
  @include flex-column;
  align-items: flex-end;
  margin-bottom: 32px;
  &__title {
    font-weight: $medium;
    font-size: 18px;
    line-height: 21px;
    color: $main-black;

    margin-bottom: 26px;
  }
  .pvz {
    width: 100%;
    @include flex-row;
    align-items: flex-end;
    &__name {
      font-weight: $light;
      font-size: 14px;
      line-height: 16px;
      color: $main-black;
    }
    &__dote {
      border-bottom: 1px dotted $main-dark-gray;
      width: calc(100% - 91px - 101px - 80px);
    }
    &__block-location {
      @include flex-column;
      align-items: flex-end;
    }
    &__location {
      font-weight: $light;
      font-size: 14px;
      line-height: 16px;
      color: $main-dark-gray;
    }
  }
}

.price {
  @include flex-column;
  align-items: flex-start;
  &__first-step {
    font-weight: $medium;
    font-size: 16px;
    line-height: 16px;
    color: $main-black;

    padding-bottom: 32px;
  }
  &__first-step--dark {
    font-weight: $semi-bold;
  }
  &__model-action {
    @include base-btn;
    @include base-disabled-green;
    width: 287px;
    padding: 15px 0;
  }
  &__model-action--active {
    @include base-btn-green;
  }
}
</style>
