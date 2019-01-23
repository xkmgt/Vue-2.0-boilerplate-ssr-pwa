<template>
  <div id="app">
    <the-header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <the-footer />
    <div class="overlay"></div>
    <div class="mainmenu-overlay" @click="toggleMainMenuMobile"></div>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'
  import TheFooter from './components/TheFooter.vue'

  export default {
    name: 'App',
    components: {
      'the-header': TheHeader,
      'the-footer': TheFooter
    },
    methods: {
      toggleMainMenuMobile () {
        this.$store.commit('TOGGLE_MAIN_MENU_MOBILE')
      }
    }
  }
</script>
