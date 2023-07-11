<template>
  <div v-if="showUserList" class="user__list">
    <div class="user" v-for="users of userStore.users">
      <div @click="showUserList = false, currentUser = users.id">{{ users.name }}</div>
    </div>
  </div>
  <div v-else>
    <br>
    <div v-for="todo of todoList">
      <div v-if="todo.userId == currentUser">
        <br>
        <div> <input type="checkbox" :checked="todo.completed">{{ todo.title }} </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useUserStore} from '/stores/userStore.js'
  export default {
    async setup(){
      const userStore = useUserStore()
      const {data: userList} = useFetch('https://jsonplaceholder.typicode.com/users')
      const {data: todoList} = useFetch('https://jsonplaceholder.typicode.com/todos')
      userStore.setUsers(userList.value)

      return {
        userStore: userStore,
        todoList: todoList
      }
    },
    data(){
      return {
        showUserList: true,
        currentUser: ''
      }
    }
  }
</script>
<style>
.user__list {
  display: grid;
  justify-content: center;
  row-gap: 2px;
}
.user {
  box-shadow: 0px 0px 2px 0px black;
  padding: 6px;
  font-size: 28px;
  font-family: sans-serif;
  cursor: pointer;
}
.user:hover {
  box-shadow: 0px 0px 5px 0px black;
}
</style>