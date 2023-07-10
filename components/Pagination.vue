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
        <div class="username__container">
          <div class="border">userId: {{ post.userId }} <br> user: 
            <div v-if="canShowUsers">
              <div>name: {{ userStore.users[post.userId].name }}</div>
              <div>username: {{ userStore.users[post.userId].username }}</div>
              <div>email: {{ userStore.users[post.userId].email }}</div>
              <div>adress: {{ userStore.users[post.userId].address.street }}, {{ userStore.users[post.userId].address.suite }},
                           {{ userStore.users[post.userId].address.city }}, {{ userStore.users[post.userId].address.zipcode }}, 
                           {{ userStore.users[post.userId].address.geo.lat }}, {{ userStore.users[post.userId].address.geo.lng }}
              <div>phone: {{ userStore.users[post.userId].phone }}</div>
              <div>website: {{ userStore.users[post.userId].website }}</div>
              <div>company: {{ userStore.users[post.userId].company.name }}, {{ userStore.users[post.userId].company.catchPhrase }}, {{ userStore.users[post.userId].company.bs }}</div>
                </div>
            </div>
          </div>
          <button @click="showUserName(), canShowUsers = !canShowUsers">show username</button>
        </div>
        <div class="border">title: {{ post.title }} </div>
        <div class="border">body: {{ post.body }} </div>
        <div>
          <div v-if="canShowComment(post.id)">
            <div v-for="comment of commentStore.comments" :key="comment.id">
              <br>
              <div class="border">author: {{ comment.name }}</div>
              <div class="border">mail: {{ comment.email }}</div>
              <div class="border">body: {{ comment.body }}</div>
              <br>
            </div>
          </div>
          <div class="button__container">
            <button @click="showComments(post.id)" @dblclick="showComments(-1)" class="comment__button">Коментарии</button>
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
import {useUserStore} from '/stores/userStore.js'
export default defineComponent({
  setup(){
    const commentStore = useCommentStore()
    const userStore = useUserStore()
    return {
      setComment: commentStore.setComment,
      comments: commentStore.comments,
      commentStore: commentStore,

      serUsers: userStore.serUsers,
      users: userStore.users,
      userStore: userStore
    }
  },
  data(){
    return {
      pageNumber: 1,
      totalPages: Number,
      canShowUsers: false
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
    userId(){
      for (let users of this.userStore.users) {
        return users.id
      }
    },
    async showUserName(){
        const { data: userName } = await useFetch('https://jsonplaceholder.typicode.com/users/')
        this.userStore.setUsers(userName.value)
    },
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
.username__container {
  display: flex;
  justify-content: space-between;
}
ul {
  display: grid;
  grid-template-columns: 100%;
  margin: 0 20%;
  gap: 60px 0;
  padding: 0;
}
.buttons {
  display: flex;
  gap: 30px;
  margin: 60px 20%;
  justify-content: space-between;
  user-select: none;
  box-shadow: 0 0 15px 0 black;
  padding: 5px;
  border-radius: 5px;
}
.border {
  border: solid 1px gray;
  padding: 5px;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  box-shadow: 0 0 15px 0 black;
  border-radius: 5px;
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
.comment__button {
  margin-top: 5px;
}
.button__container {
  display: flex;
  justify-content: center;
}
</style> 