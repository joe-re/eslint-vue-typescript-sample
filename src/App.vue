<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <todo-form :on-create="handleCreate"/>
    <todo-list :todos="todos"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
export type Todo = { id: number, text: string, done: boolean }
type Data = { msg: string, todos: Todo[] }
let id = 0
export default Vue.extend({
  name: 'app',
  components: { TodoForm, TodoList },
  data (): Data {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos: []
    }
  },
  methods: {
    handleCreate(text: string) {
      this.todos = this.todos.concat([{ id: ++id, text, done: false}])
    }
  }
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
