<template>
  <transition name="fade" v-if="openWindow">
    <div class="modal">
      <div class="modal-inner">
        <p class="modal-inner__title">Подтвердить заказ</p>
        <div class="actions">
          <button class="actions__sucsess" @click="confirmOrder">
            Подтвердить
          </button>
          <button class="actions__discard" @click="closeModal">
            Вернуться
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { computed, defineProps, ref, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();

const router = useRouter();

const emit = defineEmits(["close"]);

const props = defineProps({
  openWindow: {
    type: Boolean,
    default: false,
  },
});

const confirmOrder = async () => {
  await store.dispatch("OrderForm/fetchDataStatusOrder");
  router.push({
    name: "ConfirmOrder",
    params: { id: idOrder.value },
  });
};
const closeModal = () => {
  emit("close", false);
};

const idOrder = computed(() => store.state.OrderForm.orderStatus.id);
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  top: 0;
  left: 0;
  z-index: 999;
}
.modal-inner {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 405px;
  padding: 24px;
  transform: translate(-50%, -50%);
  background-color: transparent;
  z-index: 999;
  &__title {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: #121212;
    margin-bottom: 47px;
  }
}
.actions {
  @include flex-row;
  &__sucsess {
    @include base-btn-green;
    @include base-btn;
    font-size: 1.125rem;
    font-weight: $medium;
    width: 177px;
    padding: 15px 0;
    color: #fff;
    border-radius: 8px;
    margin-right: 17px;
  }
  &__discard {
    @include base-btn;
    font-size: 1.125rem;
    font-weight: $medium;
    background: $btn-slider-red;
    width: 177px;
    padding: 15px 0;
    border-radius: 8px;
    color: #fff;
  }
}
fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
