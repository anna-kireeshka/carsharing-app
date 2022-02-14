<template>
  <div class="container">
    <div class="wrapper">
      <div class="navigation">
        <div class="navigation__link link">
          <transition name="btn" mode="in-out">
            <button
              v-if="isShowNavigationLink === false"
              class="link__btn"
              @click="isShowNavigationLink = true"
            >
              <img src="../assets/menu.svg" alt="Меню" class="link__icon" />
            </button>

            <button
              class="link__btn link__btn--close"
              @click="isShowNavigationLink = false"
              v-else
            >
              <img src="../assets/close.svg" alt="Закрыть" />
            </button>
          </transition>
        </div>
        <transition
          :name="isShowNavigationLink ? 'slide-fade' : 'slide-fade-reverse'"
        >
          <div
            class="navigation nav-block"
            id="slide"
            v-if="isShowNavigationLink === true"
          >
            <div class="menu">
              <ul class="menu__list" v-for="item in vMenuList" :key="item.id">
                <li class="menu__item">
                  <a class="menu__item--link" href="#">{{ item.title }}</a>
                </li>
              </ul>
              <div class="social">
                <ul
                  class="social__list"
                  v-for="item in vSocialLink"
                  :key="item.id"
                >
                  <li class="social__item">
                    <a href="#" class="menu__item--link">
                      <img :src="item.svg" :alt="item.alt" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </transition>

        <div class="navigation__lang lang">
          <button class="lang__btn">Eng</button>
        </div>
      </div>
      <div class="header"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class StartScreen extends Vue {
  /* eslint-disable */
  /**Меню навигации */
  vMenuList: { id: number; title: string }[] = [
    { id: 0, title: "Парковка" },
    { id: 1, title: "Страховка" },
    { id: 2, title: "Бензин" },
    { id: 3, title: "Обслуживание" },
  ];
  /**Сcылки на социальные сети */
  vSocialLink: { id: number; alt: string; svg: string }[] = [
    { id: 0, alt: " Инстаграмм", svg: require("@/assets/instagram.svg") },
    { id: 1, alt: " Фейсбук", svg: require("@/assets/facebook.svg") },
    { id: 2, alt: "Телеграмм", svg: require("@/assets/telegram.svg") },
  ];

  isShowNavigationLink: boolean = false; /**Открыто ли меню навигации */
}
</script>

<style lang="scss" scoped>
/**
* Миксины
*/
@mixin base-btn {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}

@mixin green-color {
  color: #0ec261;
}

/**
* Основные стили
*/
.wrapper {
  width: calc(752px - 64px);
  height: 100%;
  background-color: #ffffff;
}
.navigation {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #151b1f;
  width: 64px;
  height: 100%;
}
.nav-block {
  position: absolute;
  left: 1%;
  width: 752px;
  background-color: #111518;
}
.menu {
  margin: auto 0;
  &__list {
    list-style: none;
    margin-right: 128px;
  }
  &__item {
    color: #ffffff;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 55px;
  }
  &__item--link {
    text-decoration: none;
    color: #fff;
  }
  &__item--link:hover,
  &__item--link:focus {
    color: #0ec261;
  }
}

.social {
  display: flex;
  margin-top: 38px;
  &__list {
    list-style: none;
  }
  &__item {
    margin-right: 24px;
  }
}

.link {
  &__btn {
    @include base-btn;
    margin-top: 40px;
    transition: all 1s;
  }
  &__btn--close {
    position: relative;
    z-index: 1;
    transition: all 1s;
  }
}

.lang {
  margin-bottom: 32px;

  &__btn {
    @include base-btn;
    @include green-color;
    font-size: 13px;
    font-weight: 700;
  }
}
/**Появление блока анимации */
.slide-fade-enter-active {
  transition: all 0.3s;
}
.slide-fade-leave-active {
  // transition: all .3s ease;
  transition: all 0.3s ease-out;
}
.slide-fade-enter {
  transform: translateX(-752px);
  opacity: 1;
}

.slide-fade-leave-to {
  transform: translateX(-680px);
  opacity: 1;
}

/**счезновение и появление кнопок - закрыть навигацию и открыть */
.btn-enter-active, .btn-leave-active {
  transition: opacity .5s;
}
.btn-enter, .btn-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}



</style>
