<template>
  <div class="container">
    <div class="wrapper">
      <p v-if="navigationWidthMobile" class="link-pos">
        <button
          class="link__btn link__btn--mobile"
          v-if="!showNavigationLink"
          @click="openMenu"
        >
          <svg width="32" height="32">
            <use xlink:href="#menu-mobile" />
          </svg>
        </button>
        <button class="link__btn link__btn--close" v-else @click="openMenu">
          <svg width="32" height="32">
            <use xlink:href="#close" />
          </svg>
        </button>
      </p>
      <div class="navigation">
        <div class="navigation__link link" v-if="witdthMobile > 767">
          <transition name="btn" mode="in-out">
            <p>
              <button
                class="link__btn"
                v-if="!showNavigationLink"
                @click="openMenu"
              >
                <svg width="32" height="32">
                  <use xlink:href="#menu" />
                </svg>
              </button>

              <button
                class="link__btn link__btn--close"
                v-else
                @click="openMenu"
              >
                <svg width="32" height="32">
                  <use xlink:href="#close" />
                </svg>
              </button>
            </p>
          </transition>
        </div>

        <div class="navigation__lang lang">
          <button class="lang__btn" v-if="showEngLang" @click="changeLanguage">
            Eng
          </button>
          <button v-else @click="changeLanguage" class="lang__btn">Рус</button>
        </div>
      </div>
      <transition
        :name="showNavigationLink ? 'slide-fade' : 'slide-fade-reverse'"
      >
        <div class="nav-block" id="slide" v-if="showNavigationLink === true">
          <div class="menu">
            <ul class="menu__list" v-for="item in menuList" :key="item.id">
              <li class="menu__item">
                <a class="menu__item--link" href="#">{{ item.title }}</a>
              </li>
            </ul>
            <div class="social">
              <ul class="social__list">
                <li class="menu__item social__item">
                  <a href="#" class="menu__item--link social__item--link">
                    <svg width="32" height="32" class="social__item--hover">
                      <use xlink:href="#telegram" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="navigation__lang mobile-lang"
            v-if="navigationWidthMobile"
          >
            <button
              v-if="showEngLang"
              @click="changeLanguage"
              class="lang__btn"
            >
              Eng
            </button>
            <button v-else @click="changeLanguage" class="lang__btn">
              Рус
            </button>
          </div>
        </div>
      </transition>
    </div>
    <div class="overlay" v-if="showNavigationLink"></div>
  </div>
</template>

<script lang="ts" setup>
type MenuList = { id: number; title: string }[];
import { ref, computed, onUnmounted } from "vue";

const menuList = ref<MenuList>([
  { id: 0, title: "Парковка" },
  { id: 1, title: "Страховка" },
  { id: 2, title: "Бензин" },
  { id: 3, title: "Обслуживание" },
]);

const showNavigationLink = ref<boolean>(false);

const showEngLang = ref<boolean>(true);

const witdthMobile = ref<number>(0);

const openMenu = () => {
  showNavigationLink.value = !showNavigationLink.value;
};

const changeLanguage = () => {
  showEngLang.value = !showEngLang.value;
};

const updateWidth = (): void => {
  witdthMobile.value = window.innerWidth;
};

window.addEventListener("resize", updateWidth);
updateWidth();

const navigationWidthMobile = computed(
  () => witdthMobile.value >= 320 && witdthMobile.value <= 768
);

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
  updateWidth();
});
</script>

<style lang="scss" scoped>
.navigation {
  position: relative;
  @include flex-column;

  @include nav-bar-mobile;
  justify-content: space-between;
  align-items: center;
  background-color: #151b1f;
  width: 4rem;
  min-height: 100vh;
}
.nav-block {
  @include content-very-large-main;
  @include content-large-main;
  @include content-desctop-standart;

  @include content-desctop--mini;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1002;
  background-color: #111518;
  height: 100%;
  width: 50%;
}
.menu {
  @include transition-mobile;
  padding: 11.25rem 4rem 14.6875rem 8rem;
  &__list {
    list-style: none;
    margin-right: 8rem;
  }
  &__item--link {
    color: $white;
    text-transform: uppercase;
    font-weight: $medium;
    font-size: 2rem;
    line-height: 3.4rem;
    text-decoration: none;
    @include nav-item-mobile;
  }
  &__item--link:hover,
  &__item--link:active {
    color: $color-green;
  }
  .social {
    margin-top: 2.375rem;
    &__list {
      display: flex;
      list-style: none;
    }
    &__item {
      margin-right: 1.5rem;
    }

    &__item--hover path {
      fill: $color-green;
    }
  }
}

.link {
  &__btn {
    @include base-btn;
    margin-top: 2rem;
    transition: all 1s;
  }
  &__btn--mobile {
    margin-top: 3.6rem;
  }

  &__btn--close {
    position: relative;
    z-index: 1010;
    transition: all 1s;
  }
}

.lang {
  margin-bottom: 2rem;

  &__btn {
    @include base-btn;
    color: $color-green;
    font-size: 0.8125rem;
    font-weight: $bold;

    width: 2.3rem;
    height: 2.3rem;
  }
  &__btn:hover {
    color: $white;
    border: 1px solid $white;
    border-radius: 50%;
  }
  &__btn:active {
    color: $color-green;
  }
}

.link-pos {
  position: absolute;
  top: -1.4375rem;
  left: 1rem;
}
.mobile-lang {
  position: absolute;
  left: 1rem;
}

.slide-fade-enter-active {
  transition: all 0.5s;
}
.slide-fade-leave-active {
  transition: all 0.5s ease-out;
}
.slide-fade-enter {
  transform: translateX(-47rem);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(-54rem);
  opacity: 1;
}

.btn-enter-active,
.btn-leave-active {
  transition: opacity 0.5s;
}
.btn-enter,
.btn-leave-to {
  opacity: 0;
}
.overlay {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: $background-overlay;
  z-index: 1000;
  top: 0;
  left: 0;
}
</style>
