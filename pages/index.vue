<template>
  <div>
    <Pagination v-if="posts!=null"
    :posts="posts"
    />
    <div v-else>
      Ошибка, posts = null
    </div>
  </div>
</template>
<script>
import {usePostStore} from '/stores/postStore.js'
export default {
  async setup(){
    const postStore = usePostStore()
    const { data: jposts } = await useFetch('https://jsonplaceholder.typicode.com/posts')
    postStore.setPost(jposts.value)
   
    return {
      posts: postStore.posts
    }
  },
}
</script>

<style>

</style>