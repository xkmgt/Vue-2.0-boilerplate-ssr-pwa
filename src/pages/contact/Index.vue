<template>
  <div id="main" class="contact">
    
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
      <form>
        <div class="row">
          <div class="six columns">
            <label for="exampleEmailInput">Your email</label>
            <input class="u-full-width" type="email" placeholder="your@mail.address" id="exampleEmailInput">
          </div>
          <div class="six columns">
            <label for="exampleRecipientInput">Reason for contacting</label>
            <select class="u-full-width" id="exampleRecipientInput">
              <option value="Option 1">Questions</option>
              <option value="Option 2">Admiration</option>
              <option value="Option 3">Can I get your number?</option>
            </select>
          </div>
        </div>
        <label for="exampleMessage">Message</label>
        <textarea class="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></textarea>
        <label class="example-send-yourself-copy">
          <input type="checkbox">
          <span class="label-body">Send a copy to yourself</span>
        </label>
        <input class="button-primary" type="submit" value="Submit">
      </form>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'Contact',

    data () {
      return {
        title: 'Contact Title',
      }
    },
    
  }
</script>