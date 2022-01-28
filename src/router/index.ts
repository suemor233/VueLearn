import { createRouter,createWebHashHistory } from "vue-router";
import Layout from "../components/Layout/index.vue"
const routes = [
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
                path:'/about',
                name: 'about',
                hidden: false,
                component: () =>import('../pages/about/index.vue'),
                meta:{
                    title:'关于',
                    icon:'',
                    index:'2'
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