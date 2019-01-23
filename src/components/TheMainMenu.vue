<template>
  <nav id="mainmenu" v-bind:class="{ 'open': getMainMenuMobile }">
    <div class="menuicon" v-on:click="toggleMainMenuMobile" v-bind:class="{ 'on': getMainMenuMobile }">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <router-link to="/" exact>
      <img class="logo" v-on:click="toggleMainMenuMobile" src="/public/images/mainmenu-logo.png" alt="kmgt logo">
    </router-link>
    <ol id="menu">
      <li><router-link v-on:click.native="routerLinkClick" exact to="/">home</router-link></li>
      <li><router-link v-on:click.native="routerLinkClick" exact to="/about">about</router-link></li>
      <li><router-link v-on:click.native="routerLinkClick" to="/service" class="has-subs">service</router-link>
        <ol>
          <li><router-link v-on:click.native="routerLinkClick" exact to="/service/service-1" class="is-sub">service-1</router-link></li>
          <li><router-link v-on:click.native="routerLinkClick" exact to="/service/service-2" class="is-sub">service-2</router-link></li>
          <li><router-link v-on:click.native="routerLinkClick" exact to="/service/service-3" class="is-sub">service-3</router-link></li>
          <li><router-link v-on:click.native="routerLinkClick" exact to="/service/service-4" class="is-sub">service-4</router-link></li>
        </ol>
      </li>
      <li><router-link v-on:click.native="routerLinkClick" exact to="/contact">about</router-link></li>
    </ol>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'TheMainMenu',
    data () {
      return {
        timeOut: 0
      }
    },
    computed: {
      ...mapGetters([
        'getMainMenuMobile'
      ]),
    },
    methods: {
      routerLinkClick (e) {
        let parent = e.target.parentElement
        if (document.body.classList.contains('mainmenu-mobile')) {
          if(parent.classList.contains('has-subs') || parent.classList.contains('is-sub')) {
            clearTimeout(this.timeOut)
            this.timeOut = setTimeout(() => {
              this.toggleMainMenuMobile()
            }, 1000)
          }
          else {
            this.toggleMainMenuMobile()
          }
        }
      },
      toggleMainMenuMobile () {
        this.$store.commit('TOGGLE_MAIN_MENU_MOBILE')
      }
    },
  }
</script>
