<template>
  <div>
  </div>
</template>

<script setup>
  const {data: posts} = await useFetch('https://jsonplaceholder.typicode.com/posts')
</script>

<style>

</style>