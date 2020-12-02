<template>  
  <div>
    <label>{{label}}</label>
    <input v-bind:type="type" v-bind:name="name" />
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
.skill-cover {
  height: 130px;
  background-size: 60px;
  background-position: center;
  background-repeat: no-repeat;
}

.skill-description {
  color: var(--text-color);
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
}
</style>