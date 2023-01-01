<template>
  <div class="filter-date">
    <div class="date-wrap">
      <label class="filter-date__label">
        C

        <vc-date-picker
          class="inline-block"
          mode="dateTime"
          is24hr
          color="green"
          v-model="startDate"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <div class="wrap">
              <input
                class="filter-date__date"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="xx/xx/xxxx"
                id="start"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="w-4 h-4 fill-current"
              >
                <path
                  d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                ></path>
              </svg>
            </div>
          </template>
        </vc-date-picker>
      </label>
      <label class="filter-date__label">
        По
        <vc-date-picker
          class="inline-block h-full filter-date__form"
          v-model="endDate"
          mode="dateTime"
          is24hr
          color="green"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <div class="wrap">
              <input
                class="filter-date__date"
                id="end"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="xx/xx/xxxx"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                class="w-4 h-4 fill-current"
              >
                <path
                  d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
                ></path>
              </svg>
            </div>
          </template>
        </vc-date-picker>
      </label>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUpdated } from "vue";
import { useStore } from "vuex";

const store = useStore();

const startDate = ref("");

const endDate = ref("");

onUpdated(() => {
  store.commit("OrderForm/getDateTimeFrom", startDate.value);
  store.commit("OrderForm/getDateTimeTo", endDate.value);
});
</script>

<style scoped lang="scss">
.filter-date {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-bottom: 32px;

  &__label {
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;

    color: #121212;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__date {
    width: 224px;

    border: none;
    padding: 10px;
    outline: none;
    fill: #999;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;

    margin-left: 8px;
  }
}
.date-wrap {
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
}
.error {
  color: #d73b3b;
}
.fill-current {
  fill: #999;
}
.w-4 {
  width: 1rem;
}
.h-4 {
  height: 1rem;
}
.wrap {
  border-bottom: 1px solid #999999;
}
</style>
