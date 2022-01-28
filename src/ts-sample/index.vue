<template>
  <h1>{{ msg }}</h1>
  <input type="text" v-model="username" @blur="handlerUpdate($event)" />
</template>

<script setup lang="ts">
// defineProps({
//     msg:String

import { ref } from "vue";

// })
const username = ref<string>('')
// const emit = defineEmits(['v-name'] )
const emit = defineEmits<{
  (event: 'v-name', data: string): void,
  (event: 'v-delete', id: string): void

}>()

const handlerUpdate = (event: any) => {
  const { target } = event
  emit('v-delete', target.value)
}

interface Props {
  msg?: (string | number | boolean),
  title?: string[]
}

withDefaults(defineProps<{
  msg?: (string | number | boolean),
  title?: string
}>(), {
  msg: 'hello',
  title: '标题'
})
</script>

<style scoped>
</style>