<template>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
        <template v-for="item in menuList" :key="item.path">
            <template v-if="!item.children">
                <el-menu-item :index="item.meta?.index" @click="handleRoute(item)">{{ item.meta?.title }}</el-menu-item>
            </template>
            <template v-else>
                <el-sub-menu :index="item.meta?.index">
                    <template #title>{{item.meta?.title}}</template>
                    <el-menu-item :index="subItem.meta?.index" v-for="subItem in item.children" :key="subItem.path" @click="handleRoute(subItem)">
                       {{subItem.meta?.title }}
                    </el-menu-item>
                </el-sub-menu>
            </template>
        </template>
    </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const activeIndex2 = ref<string>('1')
const menuList = router.options.routes[0].children


const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleRoute = (item:any) =>{
    router.push(item.path)
}
</script>

<style lang="scss">
@import "./style.scss";
</style>