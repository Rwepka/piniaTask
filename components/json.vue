<template>
  <div v-if="can()" class="users">
    <li>id: {{ user.id }}</li>
    <li>name: {{ user.name }}</li>
    <li>username: {{ user.username }}</li>
    <li>email: {{ user.email }}</li>
    <ul>adress: 
      <li>street: {{ user.address.street }}</li>
      <li>suite: {{ user.address.suite }}</li>
      <li>city: {{ user.address.city }}</li>
      <li>zipcode: {{ user.address.zipcode }}</li>
      <ul>geo: 
        <li>lat: {{ user.address.geo.lat }}</li>
        <li>lng: {{ user.address.geo.lng }}</li>
      </ul>
    </ul>
    <li>phone: {{ user.phone }}</li>
    <li>website: {{ user.website }}</li>
    <ul>company: 
      <li>name: {{ user.company.name }}</li>
      <li>catchPhrase: {{ user.company.catchPhrase }}</li>
      <li>bs: {{ user.company.bs }}</li>
    </ul>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    methods: {
      can(){
        let can = false
        if (this.user.id <= this.max && this.user.id >= this.min){
          can = true
        }
        return can
      }
    },
    props: {
      user: {
        type: Object
      },
      max: {
        type: Number
      },
      min: {
        type: Number
      }
    }
  })
  </script>
  <style>
  .users {
    border: solid 1px;
    border-radius: 5px;
    padding: 5px;
    line-height: 150%;
    font-weight: 600;
    font-family: sans-serif;
  }
</style>