<template>
  <div v-if="showUserList" class="user__list">
    <div class="user" v-for="users of userStore.users">
      <div @click="showUserList = false, currentUser = users.name">{{ users.name }}</div>
    </div>
  </div>
  <div v-else>
    {{ currentUser }}
  </div>
</template>
<script>
import {useUserStore} from '/stores/userStore.js'
  export default {
    async setup(){
      const userStore = useUserStore()
      const {data: userList} = await useFetch('https://jsonplaceholder.typicode.com/users')
      userStore.setUsers(userList.value)

      return {
        userStore: userStore
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