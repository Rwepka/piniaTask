<template>
  <div>
    <NuxtPage />
    <div class="paging">
      <nuxt-link to="/"><h3>home</h3></nuxt-link>
      <nuxt-link to="/page/1"><h3>1</h3></nuxt-link>
      <nuxt-link to="/page/2"><h3>2</h3></nuxt-link>
    </div>
  </div>
</template>

<script>
</script>

<style>
.paging {
  display: flex;
  justify-content: space-around;
  margin: 60px 0px;
}
</style>