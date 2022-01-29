import { createRouter,createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "../components/Layout/index.vue"
const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        component:Layout,
        redirect:'/home',
        hidden: false,
        children:[
            {
                path:'/home',
                name: 'home',
                hidden: false,
                component: () =>import('../pages/home/index.vue'),
                meta:{
                    title:'首页',
                    icon:'',
                    index:'1'
                }
            },
            {
                path:'/program',
                name: 'program',
                hidden: false,
                component: () =>import('../pages/program/index.vue'),
                meta:{
                    title:'编程知识',
                    icon:'',
                    index:'2'
                },
                children:[
                    {
                        path:'/program/front',
                        name: 'program-front',
                        hidden: false,
                        component: () =>import('../pages/program/front/index.vue'),
                        meta:{
                            title:'前端',
                            icon:'',
                            index:'2-1'
                        }
                    },
                    {
                        path:'/program/behind',
                        name: 'program-behind',
                        hidden: false,
                        component: () =>import('../pages/program/behind/index.vue'),
                        meta:{
                            title:'后端',
                            icon:'',
                            index:'2-2'
                        }
                    },
                ]
            },
            {
                path:'/about',
                name: 'about',
                hidden: false,
                component: () =>import('../pages/about/index.vue'),
                meta:{
                    title:'关于',
                    icon:'',
                    index:'3'
                }
            },
        ]
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router