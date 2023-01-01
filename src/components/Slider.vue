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
            :style="{ background: item.background }"
            @mouseover="hoverButton(item.id, $event.target)"
            @mouseleave="getOriginalColor($event.target, item.id)"
          >
            Подробнее
          </button>
        </div>
        <div class="dote">
          <button
            class="dote__item"
            v-for="item in slider"
            :key="item.id"
            :class="{ 'dote__item--active': item.id === activeSlider }"
            @click.self="getSlideForDote(item.id, $event)"
          ></button>
        </div>

        <button class="action-right" @click="getNextImage">
          <svg width="10" height="20" class="svg-left">
            <use xlink:href="#arrow" />
          </svg>
        </button>
        <button class="action-left" @click="getPrevImage">
          <svg width="10" height="20" class="svg-right">
            <use xlink:href="#arrow" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import variables from "@/styles/_style.scss";

type Slider = {
  id: number;
  img: string;
  title: string;
  description: string;
  background?: string;
}[];

const imageWidth = ref(0);
const activeSlider = ref(0);
const img = ref<HTMLElement>(null);

const slider = ref<Slider>([
  {
    id: 0,
    img: require("@/assets/slider-1.png"),
    title: "Бесплатная парковка",
    description:
      "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
    background: variables.green,
  },

  {
    id: 1,
    img: require("@/assets/slider-2.png"),
    title: "Страховка",
    description: "Полная страховка страховка автомобиля",
    background: variables.blue,
  },
  {
    id: 2,
    img: require("@/assets/slider-3.png"),
    title: "Бензин",
    description: "Полный бак на любой заправке города за наш счёт",
    background: variables.red,
  },
  {
    id: 3,
    img: require("@/assets/slider-4.png"),
    title: "Обслуживание",
    description: "Автомобиль проходит еженедельное ТО",
    background: variables.violet,
  },
]);

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const handleResize = () => {
  return (img.value as HTMLElement).clientWidth;
};

const getNextImage = () => {
  activeSlider.value++;
  if (activeSlider.value >= slider.value.length) {
    activeSlider.value = 0;
  }
  sliderStylePosition.value;
};

const getPrevImage = () => {
  activeSlider.value--;
  if (activeSlider.value < 0) {
    activeSlider.value = slider.value.length - 1;
  }
  sliderStylePosition.value;
};

const getSlideForDote = (doteId: number, e: MouseEvent) => {
  if (activeSlider.value !== doteId) {
    activeSlider.value = doteId;
  }
  sliderStylePosition.value;
};

const hoverButton = (id: number, e: HTMLElement) => {
  if (id === 0) {
    e.style.background = variables.hoverGreen;
  } else if (id === 1) {
    e.style.background = variables.hoverBlue;
  } else if (id === 2) {
    e.style.background = variables.hoverRed;
  } else if (id === 3) {
    e.style.background = variables.hoverViolet;
  }
};

const getOriginalColor = (e: HTMLElement, id: number) => {
  if (id === 0) {
    e.style.background = variables.green;
  } else if (id === 1) {
    e.style.background = variables.blue;
  } else if (id === 2) {
    e.style.background = variables.red;
  } else if (id === 3) {
    e.style.background = variables.violet;
  }
};

const sliderStylePosition = computed(() => {
  let sliderList = document.querySelector(".slider") as HTMLElement;
  return (sliderList.style.marginLeft =
    -imageWidth.value * activeSlider.value + "px");
});
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
