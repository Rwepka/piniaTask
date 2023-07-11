import { defineStore } from "pinia";
export const useUserStore = defineStore('userStore', {
  state(){
    return {
      users: [],
    }
  },
  actions: {
    setUsers(arr) {
      this.users = arr
    }
  }
})