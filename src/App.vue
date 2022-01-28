<script setup lang="ts">
import TsSample from './ts-sample/index.vue';
import { useStore } from "./store";


const store = useStore()
const onUpdate = (data: any) => {
  console.log(data)
}

const test = (params: (string | boolean)) => {
  console.log(typeof params);
}
store.commit('SET_USERNAME', '李四')
console.log(store.getters.getName);


</script>

<template>
    <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
  