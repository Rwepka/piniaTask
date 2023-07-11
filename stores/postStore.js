import { defineStore } from "pinia";
export const usePostStore = defineStore('postStore', {
  state(){
    return {
      posts: [],
    }
  },
  actions: {
    setPost(arr) {
      this.posts = arr
    },
  }
})