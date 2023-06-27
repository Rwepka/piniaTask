<template>
  <div class="userlist">
    <div class="users" v-for="user of users" :key="user.id">
      <div>id: {{ user.id }}</div>
      <div>name: {{ user.name }}</div>
      <div>username: {{ user.username }}</div>
      <div>email: {{ user.email }}</div>
      <div>adress: 
        <div>*street: {{ user.address.street }}</div>
        <div>*suite: {{ user.address.suite }}</div>
        <div>*city: {{ user.address.city }}</div>
        <div>*zipcode: {{ user.address.zipcode }}</div>
        <div>*geo: 
          <div>**lat: {{ user.address.geo.lat }}</div>
          <div>**lng: {{ user.address.geo.lng }}</div>
        </div>
      </div>
      <div>phone: {{ user.phone }}</div>
      <div>website: {{ user.website }}</div>
      <div>company: 
        <div>*name: {{ user.company.name }}</div>
        <div>*catchPhrase: {{ user.company.catchPhrase }}</div>
        <div>*bs: {{ user.company.bs }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const {data: users} = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>

<style>
.userlist {
  display: grid;
  gap: 8px;
  grid-template-columns: 40% 40%;
  justify-content: center;
}
.users {
  border: solid 1px;
  border-radius: 5px;
  padding: 5px;
  line-height: 150%;
  font-weight: 600;
  font-family: sans-serif;
}
</style>