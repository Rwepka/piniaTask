<template>
  <div>
    <Pagination 
    :posts="posts"
    />
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
      posts: postStore.posts,
      setPost: postStore.setPost,
      jposts
    }
  },
}
</script>

<style>

</style>