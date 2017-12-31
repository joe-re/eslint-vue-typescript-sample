<template>
  <div class="todo">
    <input
      type="checkbox"
      v-model="todo.done"
    >
    <span
      class="text"
      :class="{ done: todo.done }"
    > {{ todo.text }} </span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Todo } from './App.vue'
import { Prop } from 'vue-prop'
export default Vue.extend({
  props: { todo: Object as Prop<Todo>, required: true }
})
</script>
<style scoped>
.todo { width: 240px }
.done { text-decoration: line-through }
</style>
