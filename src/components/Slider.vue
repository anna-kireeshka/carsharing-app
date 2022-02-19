<template>
  <div class="wrapper">
    <div class="slider">
      <div class="overlay"></div>
      <div
        v-for="item in slider"
        :key="item.id"
        :style="{ backgroundImage: 'url(' + item.img + ')' }"
        class="slider__img"
      >
        <div class="content">
          <h2 class="content__title">{{ item.title }}</h2>
          <p class="content__descreption">
            {{ item.description }}
          </p>
          <button class="content__btn">Подробнее</button>
        </div>
      </div>
      <div class="dote">
        <div class="dote__item"></div>
        <div class="dote__item"></div>
        <div class="dote__item"></div>
        <div class="dote__item"></div>
      </div>
      <button class="action-right">
        <img
          src="../assets/arrow.svg"
          alt="Предыдущий слайд"
          class="svg-left"
        />
      </button>
      <button class="action-left">
        <img
          src="../assets/arrow.svg"
          alt="Следующий слайд"
          class="svg-right"
        />
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Slider extends Vue {
  slider: { id: number; img: string; title: string; description: string }[] = [
    {
      id: 0,
      img: require("@/assets/slider-1.png"),
      title: "Бесплатная парковка",
      description:
        "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
    },
    {
      id: 1,
      img: require("@/assets/slider-2.png"),
      title: "Страховка",
      description: "Полная страховка страховка автомобиля",
    },
    {
      id: 2,
      img: require("@/assets/slider-3.png"),
      title: "Бензин",
      description: "Полный бак на любой заправке города за наш счёт",
    },
    {
      id: 3,
      img: require("@/assets/slider-4.png"),
      title: "Обслуживание",
      description: "Автомобиль проходит еженедельное ТО",
    },
  ];
}
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  width: 50%;

  overflow: hidden;
}
.slider {
  @include content-very-large-main;
  @include content-desctop--mini;
  @include slider-table;
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  &__img {
    min-width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }
}

.content {
  position: relative;
  padding: 2rem 6rem;
  margin-top: 12.8125rem;
  z-index: 100;
  &__title {
    @include slider-desctop-mini-heading;
    color: $white;
    font-size: 2.5rem;
    font-weight: $medium;
    line-height: 2.9375rem;
    margin-bottom: 0.5rem;
  }
  &__descreption {
    @include slider-desctop-mini-descreption;
    max-width: 30.9375rem;
    color: $main-light-gray;
    font-size: 1.5rem;
    font-weight: $light;
    line-height: 1.35rem;
    margin-bottom: 2rem;
  }
  &__btn {
    @include base-btn;
    background: $btn-green-dark;
    color: $main-light-gray;
    border-radius: 0.25rem;
    width: 10.1875rem;
    height: 3rem;

    font-size: 1.125rem;
    font-weight: $medium;
  }
}
.dote {
  position: absolute;
  top: 95%;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 110;
  width: 3.5rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1020px) and (max-width: 1280px) {
    right: 15%;
  }

  &__item {
    background-color: #fff;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }
}
.action-left {
  @include slider-arrow-hover;
}
.action-left:hover {
  background-color: rgba(14, 194, 97, 0.2);
}
.action-right {
  @include slider-arrow-hover;
  left: 96.5%;
  @media (min-width: 1020px) and (max-width: 1280px) {
    left: 97.5%;
  }
}
.action-right:hover {
  background-color: rgba(14, 194, 97, 0.2);
}

.svg-left {
  position: relative;
  z-index: 150;
}
.svg-right {
  position: relative;
  z-index: 150;
  transform: rotate(180deg);
}
.overlay {
  position: absolute;
  background: $bg-img;
  mix-blend-mode: normal;
  width: 100%;
  height: 100%;
  z-index: 99;
  top: 0;
  z-index: 100;
}
</style>
