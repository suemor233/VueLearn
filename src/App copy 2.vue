<script setup lang="ts">
import { ref, onMounted, reactive ,onUnmounted} from 'vue';
import TestPropsEmit from './components/test-props-emit/index.vue';
const msg = ref('我是父组件')

const handleChange = (params: string) => {
  // console.log(params)
}

const propsEmitRef = ref()

onMounted(() => {
  // console.log(propsEmitRef.value.child, propsEmitRef.value.childNode());
})
</script>

<template>
  <TestPropsEmit ref="propsEmitRef" :msg="msg" @on-change="handleChange" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
