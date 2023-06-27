<template>
  <div>
    <div class="userlist">
      <json
      v-for="user of users"
      :key="user.id"
      :user="user"
      :max="5"
      :min="0"
      />
    </div>
  </div>
</template>

<script setup>
const {data: users} = await useFetch('https://jsonplaceholder.typicode.com/users')
import json from '/components/json'
</script>

<style>
.userlist {
    display: grid;
    gap: 8px;
    grid-template-columns: 40% 40%;
    justify-content: center;
  }
</style>