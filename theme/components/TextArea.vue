<template>  
  <div class="text-input">
    <label>{{label}}</label>
    <textarea v-bind:type="type" v-bind:name="name" required />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.text-input {
  padding-bottom: 20px;
}
label {
  
}
textarea {
  display: block;
  width: 300px;
}

</style>