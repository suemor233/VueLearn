import { createRouter,createMemoryHistory } from "vue-router";
import Layout from "../components/Layout/index.vue"
const routes = [
    {
        path:'/',
        component:Layout,
        redirect:'/home',
        children:[
            {
                path:'/home',
                name: 'home',
                component: () =>import('../pages/home/index.vue'),
                meta:{
                    title:'首页',
                    icon:''
                }
            },
            {
                path:'/about',
                name: 'about',
                component: () =>import('../pages/about/index.vue'),
                meta:{
                    title:'关于',
                    icon:''
                }
            },
        ]
    }
]

const router = createRouter({
    history:createMemoryHistory(),
    routes
})


export default router