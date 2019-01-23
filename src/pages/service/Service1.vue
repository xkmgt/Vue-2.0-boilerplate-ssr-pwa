<template>
  <div id="main" class="service">

    <div class="content">
      <article>
        <header>
          <h2>{{ title }}</h2>
        </header>
        <section>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
        </section>
      </article>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'Service-1',

    data () {
      return {
        title: 'Service 1 Title',
      }
    },
    
  }
</script>