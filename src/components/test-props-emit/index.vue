<script setup lang="ts">
import { reactive, ref,watch,watchEffect } from "vue"

const increment = () => {
    originData.count++
     originData.user.name = '李四'
     data.value++
}
const props = defineProps({
    msg: {
        type: String,
        default: () => '默认值'
    }
})

const data = ref(0)
const originData = reactive({
    count:0,
    user:{
        name:'张三'
    },
    arr:[1, 2, 3, 4]
})

watch(data,(n,o)=>{
    console.log(n,o);
})

const emit = defineEmits(['on-change'])
const handleClick = () => {
    emit('on-change', '父组件')
}

const childNode = () => {
    // console.log('子组件方法被暴露了');
}

defineExpose({
    child: '我是暴露的子组件',
    childNode
})

</script>

<template>
    <P>{{ originData.count }}</P>
    <p>{{ originData.user.name }}</p>
    <p>{{ props.msg }}</p>
    <p v-for="(item, index) in originData.arr" :key="index">{{ item }}</p>
    <button @click="handleClick()">点击我调用父组件</button>
    <button @click="increment">增加</button>
</template>

<style>
</style>
