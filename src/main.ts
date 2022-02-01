import { store,key } from './store/index';
import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";
import ElementPlus,{ElNotification} from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from "@element-plus/icons-vue";
import { start,close } from "@/script/utils/nprogress";
const app = createApp(App)
Object.keys(ElIcons).forEach(key =>{
    app.component(key,ElIcons[key])    
})

app.use(store,key)
app.use(router)
app.use(ElementPlus)
const vm = app.mount('#app')

router.beforeEach((to,from,next)=>{
    start()
    console.log(to,from,next);
    if (to.meta.title) {
        document.title = String(to.meta.title)
    }else{
        document.title = 'Suemor Blog' 
    }
    if (to.matched.length === 0 && !to.name) {
        ElNotification({
            title:'错误提示',
            type: 'error',
            message: `${to.fullPath} 路径找不到对应页面，已为您切换到首页...`,
            duration: 3000,
          })
          setTimeout(()=>{
            router.push('/home')
          },1)
    }
    next()
})

router.afterEach(()=>{
    close()
})
