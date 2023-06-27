<template>
  <div>
    <NuxtPage />
    <div class="paging">
      <nuxt-link to="/page/1">1</nuxt-link>
      <nuxt-link to="/page/2">2</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.paging {
  display: flex;
  justify-content: space-around;
  margin: 60px 0px;
}
</style>