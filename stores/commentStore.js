import { defineStore } from "pinia";
export const useCommentStore = defineStore('commentStore', {
  state(){
    return {
      comments: []
    }
  },
  actions: {
    setComment(arr) {
      this.comments = arr
    },
  }
})