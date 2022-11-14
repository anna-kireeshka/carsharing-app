<template>
  <div class="wrapper-error">
    <Navigation />
    <div class="main">
      <AppHeader />
      <div class="error">
        <p class="error__code">404</p>
        <p class="error__status">Упс! Такая страница не найдена</p>
        <router-link class="main-nav__company" :to="{ name: 'MainPage' }"
          >На главную</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import AppHeader from "@/components/AppHeader";
export default {
  name: "NotFoundPage",
  components: { AppHeader, Navigation },
};
</script>

<style scoped lang="scss">
.wrapper-error {
  @include flex-row;

  .main {
    width: 100%;
    height: 100vh;
  }

  .error {
    @media screen and (max-width: 900px) {
      min-width: 90%;
    }
    width: 30%;
    border: 1px solid $color-green;
    border-radius: $radius-btn;
    margin: 5% auto;
    padding: 2rem 3rem;

    &__code {
      font-size: 2rem;
      color: $main-black;
      font-width: $semi-bold;
    }

    &__status {
      font-size: 1.3rem;
      color: $main-black;
      font-weight: $normal;
    }

    &__error {
      @include city;
      @include base-btn;
    }
  }
}
</style>
