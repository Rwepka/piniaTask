<template>
  <div v-if="user.id <= max && user.id >= min" class="users">
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

<script setup>
  defineProps({
    user: {
      type: Object
    },
    max: {
      type: Number
    },
    min: {
      type: Number
    }
  })
    // defineComponent({
    //   data(){
    //     return {
    //       pageNumber: 0
    //     }
    //   },
    //   props:{
    //     listData:{
    //       type:Array,
    //       required:true
    //     },
    //     size:{
    //       type:Number,
    //       required:false,
    //       default: 10
    //     }
    //   },
    //   methods:{
    //     nextPage(){
    //       this.pageNumber++;
    //     },
    //     prevPage(){
    //       this.pageNumber--;
    //     }
    //   },
    //   computed: {
    //     pageCount(){
    //     let l = this.listData.length,
    //         s = this.size;
    //     // редакция переводчика спасибо комментаторам
    //     return Math.ceil(l/s);
    //     // оригинал
    //     // return Math.floor(l/s);
    //     },
    //     paginatedData(){
    //       const start = this.pageNumber * this.size,
    //             end = start + this.size;
    //       return this.listData.slice(start, end);
    //     }
    //   }
    // })
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