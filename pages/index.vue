<template>
  <div>
    <nuxt-link to="/page"><h1>Следующее задание</h1></nuxt-link>
    <div v-for="num of numStore.nums" :key="num.id">
      <h3><button @click="num.count ++">Добавить</button> {{ num.count }}</h3>
    </div>
  </div>
</template>

<script setup>
import { defineStore } from "pinia";
const useNumStore = defineStore('NumStore', {
  state(){
    return {
      nums: [
        {
          id: 1,
          count: 0
        },
        {
          id: 2,
          count: 0
        },
        {
          id: 3,
          count: 0
        },
      ]
    }
  }
})
const numStore = useNumStore()
</script>

<style>

</style>