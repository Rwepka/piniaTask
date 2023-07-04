<template>
  <div>
    <div class="buttons">
      <button @click="prevPage" :disabled="pageNumber == 0">prev</button>
      <button @click="nextPage" :disabled="pageNumber >= pageCount">next</button>
    </div>
    <ul>
      <li v-for="post in paginatedData" :key="post.id">
        <div class="border">userId: {{ post.userId }} </div>
        <div class="border">title: {{ post.title }} </div>
        <div class="border">body: {{ post.body }} </div>
      </li>
    </ul>
    <div class="buttons">
      <button @click="prevPage" :disabled="pageNumber == 0">prev</button>
      <button @click="nextPage" :disabled="pageNumber >= pageCount">next</button>
    </div>
  </div>
</template>

<script>
export default defineComponent({
  data(){
    return {
      pageNumber: 0,
    }
  },
  props: {
    // listData: {
    //   type: Array,
    //   required: true
    // },
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
    }
  },
  computed: {
    pageCount() {
      let l = this.posts.length,
          s = this.size
      let limit = (l/s).toFixed(0)
      return limit
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
            end = start + this.size
      return this.posts.slice(start, end)
    }
  }
})
</script>

<style>
ul {
  display: grid;
  grid-template-columns: 40% 40%;
  justify-content: center;
  min-height: 800px;
}
.buttons {
  display: flex;
  gap: 30px;
  margin: 60px 0px;
  justify-content: center;
}
.border {
  border: solid 1px;
  padding: 5px;
}
</style> 