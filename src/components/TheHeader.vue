<template>
  <header id="header-page">
    <router-link to="/" exact>
      <img class="logo" src="~public/images/header-logo.png" alt="kmgt logo">
    </router-link>
    <the-main-menu />
  </header>
</template>

<script>
  import TheMainMenu from './TheMainMenu.vue'

  export default {
    name: 'TheHeader',

    components: {
      'the-main-menu': TheMainMenu
    }
  }
</script>
