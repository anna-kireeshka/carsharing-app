<template>
  <div class="wrapper-form">
    <div class="order">
      <p class="order__title">Ваш заказ:</p>
      <div class="additionally">
        <div class="form">
          <p class="additionally__name">Пункт выдачи</p>
          <p class="additionally__dote"></p>
          <div class="additionally__block">
            <p class="additionally__location">Ульяновск,</p>
            <p class="additionally__location">Нариманова 42</p>
          </div>
        </div>
        <div class="form">
          <p class="additionally__name">Модель</p>
          <p class="additionally__dote additionally__dote--model"></p>
          <p class="additionally__location">Hyndai, i30 N</p>
        </div>
        <div class="form">
          <p class="additionally__name">Цвет</p>
          <p class="additionally__dote additionally__dote--color"></p>
          <p class="additionally__location">Голубой</p>
        </div>
        <div class="form">
          <p class="additionally__name">Длительность аренды</p>
          <p class="additionally__dote additionally__dote--rent"></p>
          <p class="additionally__location">1д 2ч</p>
        </div>
      </div>
    </div>
    <div class="price">
      <p class="price__first-step">
        <span class="price__first-step--dark">Цена</span>: от 8 000 до 12 000 ₽
      </p>
      <button class="price__model-action">Выбрать модель</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class FormAdditionally extends Vue {}
</script>
<style scoped lang="scss">
.wrapper-form {
  width: 100%;
  padding: 32px 63px 32px 32px;
  border-left: 1px solid $main-light-gray;
  @include content-desctop--mini;
  @include wrapper-mobile;
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
  .additionally {
    width: 100%;
    @include flex-column;
    align-items: flex-end;
    .form {
      width: 100%;
      display: flex;
      align-items: flex-end;

      margin-bottom: 16px;
    }
    &__name {
      font-weight: $light;
      font-size: 14px;
      line-height: 16px;
      color: $main-black;
    }
    &__dote {
      border-bottom: 1px dotted $main-dark-gray;
      width: calc(100% - 91px - 101px);
    }
    &__dote--model {
      width: calc(100% - 51px - 81px);
    }
    &__dote--color {
      width: calc(100% - 32px - 53px);
    }
    &__dote--rent {
      width: calc(100% - 145px - 35px);
    }
    &__block {
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
    width: 100%;
    padding: 15px 0;
  }
}
</style>
