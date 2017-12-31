<template>
  <div class="todolist">
    <todo
      v-for="todo in todos"
      :id="todo.id"
      :key="todo.text"
      :todo="todo" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue-prop';
import Todo from './Todo.vue';
import { Todo as TodoType } from './App.vue';
export default Vue.extend({
  components: { Todo },
  props: { todos: { type: Array as Prop<TodoType[]>, required: true }}
});
</script>
<style scoped>
.todolist {
  width: 240px;
  margin: auto;
  text-align: left;
}
</style>
