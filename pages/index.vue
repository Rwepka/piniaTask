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
  setup(){
    const postStore = usePostStore()
    const { data: jposts } = useFetch('https://jsonplaceholder.typicode.com/posts')
    postStore.setPost(jposts)

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