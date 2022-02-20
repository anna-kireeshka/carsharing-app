<template>
  <div class="wrapper">
    <div class="overlay"></div>
    <div class="slider" ref="img">
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
          <button class="content__btn" :style="{ background: item.background }">
            Подробнее
          </button>
        </div>
        <div class="dote">
          <div
            class="dote__item"
            :class="{ 'dote__item--active': item.id === 0 }"
          ></div>
          <div
            class="dote__item"
            :class="{ 'dote__item--active': item.id === 1 }"
          ></div>
          <div
            class="dote__item"
            :class="{ 'dote__item--active': item.id === 2 }"
          ></div>
          <div
            class="dote__item"
            :class="{ 'dote__item--active': item.id === 3 }"
          ></div>
        </div>
        <button class="action-right" @click="fGetNextImage">
          <img
            src="../assets/arrow.svg"
            alt="Следующий слайд"
            class="svg-left"
          />
        </button>
        <button class="action-left" @click="fGetPrevImage">
          <img
            src="../assets/arrow.svg"
            alt="Предыдущий слайд"
            class="svg-right"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Slider extends Vue {
  /* eslint-disable */ //Для объявления типов
  position: number = 0; /**Положение ленты прокрутки*/
  frame: number = 1; /**Общее колл-во видимых изображений*/
  imageWidth: number = 0; /**Ширина видимого окна*/
  idBtn: number = 0;

  slider: {
    id: number;
    img: string;
    title: string;
    description: string;
    background?: string;
  }[] = [
    /**Слайдер и его контент */
    {
      id: 0,
      img: require("@/assets/slider-1.png"),
      title: "Бесплатная парковка",
      description:
        "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
      background: "linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)",
    },

    {
      id: 1,
      img: require("@/assets/slider-2.png"),
      title: "Страховка",
      description: "Полная страховка страховка автомобиля",
      background: "linear-gradient(90deg, #132949 0%, #0C7B67 100%)",
    },
    {
      id: 2,
      img: require("@/assets/slider-3.png"),
      title: "Бензин",
      description: "Полный бак на любой заправке города за наш счёт",
      background: "linear-gradient(90deg, #493013 0%, #7B0C3B 100%)",
    },
    {
      id: 3,
      img: require("@/assets/slider-4.png"),
      title: "Обслуживание",
      description: "Автомобиль проходит еженедельное ТО",
      background: "linear-gradient(90deg, #281349 0%, #720C7B 100%)",
    },
  ];
  /**Перейти к предыдущему элементу */
  fGetPrevImage() {
    let sliderList = document.querySelector(".slider") as HTMLElement;
    this.position += this.iImageWidth * this.frame;
    this.position = Math.min(this.position, 0);

    sliderList.style.marginLeft = this.position + "px";
  }
  /**Перейти к следующему слайду */
  fGetNextImage() {
    let sliderList = document.querySelector(".slider") as HTMLElement;
    this.position -= this.imageWidth * this.frame;
    this.position = Math.max(
      this.position,
      -this.iImageWidth * (this.slider.length - this.frame)
    );
    sliderList.style.marginLeft = this.position + "px";
  }
  /**Получить ширину картинки в зависимости от масштаба для переключения слайда*/
  get iImageWidth() {
    let a = (this.$refs.img as HTMLElement).clientWidth;
    return (this.imageWidth = a);
  }
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
  @include content-large-main;
  @include content-desctop-standart;
  @include content-desctop--mini;
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  &__img {
    position: relative;
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
    // background: $btn-green-dark;
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
  left: 0;
  right: 0;
  bottom: -2%;
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
  &__item--active {
    background-color: $color-green;
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
  right: 0%;
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
