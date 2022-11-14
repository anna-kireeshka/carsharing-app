<template>
  <div class="main-nav">
    <h1>
      <router-link class="main-nav__company" :to="{ name: 'MainPage' }"
        >Need for drive</router-link
      >
    </h1>
    <p class="main-nav__city-name">
      <svg width="18" height="20">
        <use xlink:href="#gps" />
      </svg>
      Ульяновск
    </p>
  </div>
</template>

<style scoped lang="scss">
.main-nav {
  @include flex-row;
  @include flex-logo;
  @include order-card-mobile;
  //padding: 32px 63px 32px 64px;
  &__company {
    @include logo;
  }
  &__city-name {
    @include city;
  }
  &__city-name svg {
    margin-right: 0.4713rem;
  }
}
</style>
