<template>
    <div class="nav-menu-wrapper">
        <div v-if="showLogo" class="el-menu el-menu--horizontal logo-box">
            <img class="set-img" src="../../../assets/gold-logo.png" alt="图片" title="欢迎来到Suemor博客" />
        </div>

        <el-menu
            :default-active="activeIndex2"
            class="menu-box"
            :mode="directionType"
            background-color="#2c3e50"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
        >
            <template v-for="item in menuList" :key="item.path">
                <template v-if="!item.children">
                    <el-menu-item
                        :index="item.meta?.index"
                        @click="handleRoute(item)"
                    >{{ item.meta?.title }}</el-menu-item>
                </template>
                <template v-else>
                    <el-sub-menu :index="item.meta?.index">
                        <template #title>{{ item.meta?.title }}</template>
                        <el-menu-item
                            :index="subItem.meta?.index"
                            v-for="subItem in item.children"
                            :key="subItem.path"
                            @click="handleRoute(subItem)"
                        >{{ subItem.meta?.title }}</el-menu-item>
                    </el-sub-menu>
                </template>
            </template>
        </el-menu>
        <div class="el-menu el-menu--horizontal combine-btn-box">
            <span class="child-item">登录</span>
            <span class="child-item">注册</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "@/store";

interface Props{
    directionType?:string,
    showLogo?:boolean,
    showSearch?:boolean
}

withDefaults(defineProps<Props>(),{
    directionType:'horizontal',
    showLogo:true,
    showSearch:true
})


const router = useRouter()

const store = useStore()

const activeIndex2 = store.getters.getCurrentMenu || ref<string>('1')
const menuList = router.options.routes[0].children


const handleSelect = (key: string, keyPath: string[]) => {
    store.commit('SET_CURRENT_MENU', key)
}
const handleRoute = (item: any) => {
    router.push(item.path)
}
</script>

<style lang="scss">
@import "./style.scss";


</style>