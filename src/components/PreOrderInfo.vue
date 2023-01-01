<template>
  <div class="wrapper-form">
    <div class="order">
      <p class="order__title">Ваш заказ:</p>
      <div class="additionally">
        <TextFieldForm :label="'Пункт выдачи'" :text-value="city">
          <template #additionallyTextValue>
            {{ pvz }}
          </template>
        </TextFieldForm>
        <TextFieldForm
          v-if="route.name === 'CarModel'"
          :label="'Модель'"
          :text-value="carModel"
        >
        </TextFieldForm>
        <template
          v-if="
            route.name === 'OrderAdditionally' ||
            route.name === 'FinalOrder' ||
            route.name === 'ConfirmOrder'
          "
        >
          <TextFieldForm :label="'Модель'" :text-value="carModel">
          </TextFieldForm>
          <TextFieldForm :label="'Цвет'" :text-value="carColor">
          </TextFieldForm>
          <TextFieldForm :label="'Длительность'" :text-value="dateDuration">
          </TextFieldForm>
          <TextFieldForm :label="'Тариф'" :text-value="rate"> </TextFieldForm>

          <div class="form" v-for="(item, index) in checkbox" :key="index">
            <p class="additionally__name">{{ item }}</p>
            <p class="additionally__dote additionally__dote--rent"></p>
            <div class="additionally__block">
              <p class="additionally__text">Да</p>
            </div>
          </div>
        </template>
      </div>
    </div>
    <PriceForm
      :validation="isValidForm"
      :name-route="route.name"
      :queryParams="params.name"
      :label="params.label"
      @getOrder="getOrder"
    />
    <ModalFinalOrder
      :open-window="openModalWindow"
      v-if="openModalWindow"
      @close="openModalWindow = $event"
    />
  </div>
</template>
<script lang="ts" setup>
import ModalFinalOrder from "@/components/ModalFinalOrder.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import TextFieldForm from "@/components/UI/TextFieldForm.vue";
import PriceForm from "@/components/UI/PriceForm.vue";
import { getLabel } from "@/services/hooks/formValidation";

const store = useStore();

const router = useRouter();

const route = useRoute();

const openModalWindow = ref<boolean>(false);

const city = computed<string>(() => store.state.OrderForm.valueCity);

const pvz = computed<string>(() => store.state.OrderForm.valuePvz);

const isValidLocation = computed<boolean>(
  () => city.value === "" || pvz.value === ""
);

const isValidCarModel = computed<boolean>(
  () => isValidLocation.value && carModel.value === ""
);

const isValidAdditionally = computed<boolean>(
  () => carColor.value.length && dateDuration.value.length && rate.value.length
);

const isValidForm = computed(() => {
  if (route.name === "location") {
    store.commit("OrderForm/getIsCarLocationValidation", true);
    return !isValidLocation.value;
  } else if (route.name === "CarModel") {
    store.commit("OrderForm/getIsCarModelValidation", true);
    return !isValidCarModel.value;
  } else if (route.name === "OrderAdditionally") {
    store.commit("OrderForm/getIsCarAdditionalyValidation", true);
    return isValidAdditionally.value;
  }
  return true;
});

const carNumber = computed<string>(() => store.state.OrderForm.carNumber);

const carModel = computed<string>(() => store.state.OrderForm.carModel);

const carColor = computed<string>(() => store.state.OrderForm.carColor);

const rate = computed<string>(() => store.state.OrderForm.rateFilter);

const dateDuration = computed(() => store.getters["OrderForm/getRateTime"]);

const checkbox = computed(() => store.state.OrderForm.additionallyFilter);

const orderId = computed(() => store.getters["OrderForm/getFinalOrderId"]);

const params = computed(() => getLabel(route.name));

const getOrder = (value: string) => {
  if (route.name !== "FinalOrder") {
    router.push({ name: value });
  }
  if (route.name === "FinalOrder") {
    openModalWindow.value = true;
  }
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 375px) {
  .wrapper-form {
    padding: 32px 18px;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
}
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
  .additionally {
    width: 100%;
    @include flex-column;
    .form {
      @include flex-row;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      margin-bottom: 16px;
    }
    &__name {
      @media screen and (max-width: 375px) {
        margin-bottom: 5px;
      }
      font-weight: $light;
      font-size: 14px;
      line-height: 16px;
      color: $main-black;
    }
    &__dote {
      @media screen and (max-width: 375px) {
        border: none;
      }
      border-bottom: 1px dotted $main-dark-gray;
      width: 10%;
    }
    &__dote--rent {
      width: 70%;
    }
    &__dote--color {
      width: 60%;
    }
    &__dote--time {
      width: 50%;
    }
    &__dote--model {
      width: 50%;
    }
    &__block {
      @include flex-column;
      align-items: flex-end;
    }
    &__text {
      font-weight: $light;
      font-size: 14px;
      line-height: 16px;
      color: $main-dark-gray;
    }
  }
}
</style>
