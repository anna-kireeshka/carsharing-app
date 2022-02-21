<template>
  <div class="wrapper">
    <div class="overlay"></div>
    <div class="slider" ref="img">
      <div
        class="slider__img"
        v-for="item in slider"
        :key="item.id"
        :style="{ backgroundImage: 'url(' + item.img + ')' }"
      >
        <div class="content">
          <h2 class="content__title">{{ item.title }}</h2>
          <p class="content__descreption">
            {{ item.description }}
          </p>
          <button
            class="content__btn"
            @mouseover="fHoverButton(item.id, $event)"
            :style="{ background: item.background }"
          >
            Подробнее
          </button>
        </div>
        <div class="dote">
          <button
            v-for="item in slider"
            :key="item.id"
            class="dote__item"
            :class="{ 'dote__item--active': item.id === activeSlider }"
            @click.self="fGetSlideForDote(item.id, $event)"
          ></button>
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
  imageWidth: number = 0; /**Ширина видимого окна*/
  activeSlider: number = 0; //активный/текщий слайдер

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

  /**Отслеживаем изменение экрана */
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
  /**Получаем размер блока для адаптивного слайдера */
  handleResize() {
    let a = (this.$refs.img as HTMLElement).clientWidth;
    return (this.imageWidth = a);
  }
  /**Перейти к предыдущему элементу */
  fGetNextImage() {
    this.activeSlider++;
    if (this.activeSlider >= this.slider.length) {
      this.activeSlider = 0;
    }
    this.sliderStylePosition;
  }
  /**Перейти к следующему слайду */
  fGetPrevImage() {
    this.activeSlider--;
    if (this.activeSlider < 0) {
      this.activeSlider = this.slider.length - 1;
    }
    this.sliderStylePosition;
  }
  /**Полчаем слайд по переключение кнопок навигации */
  fGetSlideForDote(doteId: number, e: MouseEvent) {
    if (this.activeSlider !== doteId) {
      this.activeSlider = doteId;
    }
    this.sliderStylePosition;
  }

  /**Ховер кнопок */
  fHoverButton(id: number, e: MouseEvent) {
    if (id === 0) {
      (e.target as Element).classList.toggle("content__btn--green");
    }
  }

  /**Считаем насколько сдвигать слайдер */
  get sliderStylePosition() {
    let sliderList = document.querySelector(".slider") as HTMLElement;
    return (sliderList.style.marginLeft =
      -this.imageWidth * this.activeSlider + "px");
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
  @include slider-table;
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
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  padding: 0 6rem;
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
    color: $main-light-gray;
    border-radius: 0.25rem;
    width: 10.1875rem;
    height: 3rem;

    font-size: 1.125rem;
    font-weight: $medium;
  }
  &__btn--green {
    background: $btn-slider-violet;
  }
}
.dote {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3%;
  margin: auto;
  z-index: 110;
  width: 3.5rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1020px) and (max-width: 1280px) {
    right: 15%;
  }

  &__item {
    @include base-btn;
    background-color: #fff;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
  }
  &__item--active {
    background-color: $color-green;
  }
}
.action-left {
  position: relative;
  @include slider-arrow-hover;
}
.action-left:hover {
  background-color: rgba(14, 194, 97, 0.2);
}
.action-right {
  @include slider-arrow-hover;
  position: fixed;
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
