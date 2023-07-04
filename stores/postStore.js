import { defineStore } from "pinia";
// const { data: posts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
// const {data: posts} = await useAsyncData('id', () => $fetch('https://jsonplaceholder.typicode.com/posts'))
export const usePostStore = defineStore('postStore', {
  state(){
    return {
      posts: []
    }
  },
  actions: {
    setPost(arr) {
      this.posts = arr
    }
  }
})
