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
export default defineComponent({
  data(){
    return {
      pageNumber: 1,
      totalPages: Number
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
      console.log('but', but)
      console.log('pageNumber', this.pageNumber)
      if (but < this.pageNumber + 4 && but > 1 && but > this.pageNumber - 4 && but < this.totalPages){
        return true
      }
      else {
        return false
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