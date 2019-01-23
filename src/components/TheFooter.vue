<template>
  <footer id="footer-page">
    <ul class="footermenu">
      <li><router-link exact to="/contact">Contact</router-link></li>
    </ul>
    <ul class="footermenu">
      <li><router-link exact to="/imprint">Imprint</router-link></li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter',
  }
</script>
