<template>  
  <div class="wrap">
    <div class="container">
      <HomeProfile />
      <div class="main">
        <form name="Contact Form" method="POST" data-netlify="true" action="/success">
          <input type="hidden" name="form-name" value="Contact Form" />
          <TextInput label="Your Name" type="text" name="name" />
          <div>
            <label>Your Email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import HomeProfile from '../components/HomeProfile.vue';
import TextInput from '../components/TextInput.vue';

export default {
  components: {
    HomeProfile: HomeProfile,
    TextInput: TextInput
  },
  props: ['page'],
  head: function head() {
    return {
      title: "".concat(this.page.attributes.title, " - ").concat(this.$siteConfig.title),
      meta: [{
        property: 'og:title',
        content: this.$siteConfig.title
      }, {
        property: 'og:description',
        content: this.$siteConfig.description
      }, {
        property: 'og:image',
        content: this.$themeConfig.profilePicture
      }]
    };
  },
};
</script>