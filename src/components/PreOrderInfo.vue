<template>
  <div class="wrapper">
    <div class="order">
      <p class="order__title">Ваш заказ:</p>
      <div class="pvz">
        <p class="pvz__name">Пункт выдачи</p>
        <span class="pvz__dote">......................</span>
        <p class="pvz__location">
          Ульяновск,<br />
          Нариманова 42
        </p>
      </div>
    </div>
    <div class="price">
      <p class="price__first-step">
        <span class="price__first-step--dark">Цена</span>: от 8 000 до 12 000 ₽
      </p>
      <button class="price__model-action">Выбрать модель</button>
      <!-- <button class="price__model-action" v-if="router.path === '/car-model'">Дополнительно</button> -->
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class PreOrderInfo extends Vue {}
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.wrapper {
  padding: 32px 63px 0 32px;
}
.order {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 32px;
  &__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #121212;

    margin-bottom: 26px;
  }
  .pvz {
    display: flex;
    align-items: flex-end;
    &__name {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
    }
    &__dote {
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: #999999;
    }
    &__location {
      font-weight: 300;
      font-size: 14px;
      line-height: 16px;
      color: #999999;
    }
  }
}

.price {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &__first-step {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #121212;

    padding-bottom: 32px;
  }
  &__first-step--dark {
    font-weight: 600;
  }
  &__model-action {
    border: none;
    outline: none;
    width: 100%;
    padding: 15px 0;
    text-align: center;
    background: #eeeeee;
    border-radius: 8px;

    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
