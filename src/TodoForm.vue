<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="text">
    <button type="submit">Post</button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      text: ''
    }
  },
  props: {
    onCreate: { type: Function, required: true }
  },
  methods: {
    handleSubmit() {
      this.onCreate(this.text)
      this.text = ''
    }
  }
})
</script>
