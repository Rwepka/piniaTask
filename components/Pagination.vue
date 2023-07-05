<template>
  <div>
    <div class="buttons">
      <button @click="prevPage" :disabled="pageNumber == 1">prev</button>
      <div class="num__buttons">
        <div v-for="but of totalPages" :key="but">
          <button class="num__button" @click="changePage(but)" v-if="but == 1" :disabled="pageNumber == 1">{{ 1 }}</button>
          <button class="num__button" @click="changePage(but)" v-if="mayBe(but)">{{ but }}</button>
          <button class="num__button" @click="changePage(but)" v-if="but == totalPages" :disabled="pageNumber == totalPages">{{ totalPages }}</button>
        </div>
      </div>
      <button @click="nextPage" :disabled="pageNumber - 1 >= pageCount">next</button>
    </div>
    <ul>
      <li v-for="post in paginatedData" :key="post.id">
        <div class="border">userId: {{ post.userId }} </div>
        <div class="border">title: {{ post.title }} </div>
        <div class="border">body: {{ post.body }} </div>
        <div>
          <button @click="showComments(post.id)">Коментарии</button>
          <div v-if="canShowComment(post.id)">
            <div class="border">author: {{ commentAuthor() }}</div>
            <div class="border">mail: {{ commentMail() }}</div>
            <div class="border">body: {{ commentBody() }}</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="buttons">
      <button @click="prevPage" :disabled="pageNumber == 1">prev</button>
      <div class="num__buttons">
        <div v-for="but of totalPages" :key="but">
          <button class="num__button" @click="changePage(but)" v-if="but == 1" :disabled="pageNumber == 1">{{ 1 }}</button>
          <button class="num__button" @click="changePage(but)" v-if="mayBe(but)">{{ but }}</button>
          <button class="num__button" @click="changePage(but)" v-if="but == totalPages" :disabled="pageNumber == totalPages">{{ totalPages }}</button>
        </div>
      </div>
      <button @click="nextPage" :disabled="pageNumber - 1 >= pageCount">next</button>
    </div>
  </div>
</template>

<script>
import {useCommentStore} from '/stores/commentStore.js'
export default defineComponent({
  setup(){
    const commentStore = useCommentStore()
    return {
      setComment: commentStore.setComment,
      comments: commentStore.comments,
      commentStore: commentStore
    }
  },
  data(){
    return {
      pageNumber: 1,
      totalPages: Number,
    }
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 7
    },
    posts: {
      type: Array,
      required: true
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    },
    changePage(destination){
      this.pageNumber = destination
    },
    mayBe(but){
      if (but < this.pageNumber + 4 && but > 1 && but > this.pageNumber - 4 && but < this.totalPages){
        return true
      }
      else {
        return false
      }
    },
    async showComments(postId){
      const { data: comments } = await useFetch('https://jsonplaceholder.typicode.com/posts/'+ Number(postId) +'/comments')
      this.commentStore.setComment(comments.value)
    },
    commentPostId(){
      for (let comments of this.commentStore.comments) {
        return comments.postId
      }
    },
    canShowComment(postId){
      if (this.commentPostId() == postId) {
        return true
      }
      else {
        return false
      }
    },
    commentAuthor(){
      for (let comments of this.commentStore.comments) {
        return comments.name
      }
    },
    commentMail(){
      for (let comments of this.commentStore.comments) {
        return comments.mail
      }
    },
    commentBody(){
      for (let comments of this.commentStore.comments) {
        return comments.body
      }
    }
  },
  computed: {
    pageCount() {
      if (this.posts != null) {
        let l = this.posts.length,
            s = this.size
        let limit = (l/s).toFixed(0)
        this.totalPages = Number(limit) + 1
        return limit
      }
    },
    paginatedData() {
      if (this.posts != null) {
        const start = (this.pageNumber - 1) * this.size,
              end = start + this.size
        return this.posts.slice(start, end)
      }
    },
  }
})
</script>

<style>
ul {
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: center;
  gap: 20px 30px;
}
.buttons {
  display: flex;
  gap: 30px;
  margin: 60px 20%;
  justify-content: space-between;
  user-select: none;
}
.border {
  border: solid 1px;
  padding: 5px;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px;
  padding: 5px;
}
.num__buttons {
  display: flex;
}
.num__button {
  margin: 0px 5px;
  width: 40px;
  height: 40px;
  font-size: 18px;
  text-align: center;
}
</style> 