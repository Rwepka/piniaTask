<template>
  <div>
    <nuxt-link to="/page/1"><h1>Следующее задание</h1></nuxt-link>
    <div v-for="num of numStore.nums" :key="num.id">
      <h3><button @click="numStore.numPlus(num.id)">Добавить</button> {{ num.count }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useNumStore } from '~/stores/numstore.ts'
const numStore = useNumStore()
</script>

<style>

</style>