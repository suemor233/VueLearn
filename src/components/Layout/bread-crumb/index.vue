<template>
    <el-row>
        <el-col :span="18" class="bread-list">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item,index) in breadList" :key="index" :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
        <el-col :span="6" class="bread-list">
            <el-icon>
                <wind-power></wind-power>
            </el-icon>消息通知
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { Ref, ref,watch } from "vue";
import { useRoute,RouteLocationMatched } from "vue-router";

const route = useRoute()
const breadList:Ref<RouteLocationMatched[]> = ref([])
const getRouterList = () =>{ 
    let list = route.matched.filter(e=>e.meta && e.meta.title)
    const first = list[0]
    if (first.path !== '/home') {
        let newArr = [{path:'/home',meta:{title:'首页'}} as any]
        list = [...newArr,...list]
    }
    breadList.value = list
}
getRouterList()
watch(()=>route.path,()=>{
    getRouterList()
})
</script>

<style la lang="scss" scoped>
.bread-list{
    display: flex;
    align-items: center;
    padding: 4px;
}
</style>