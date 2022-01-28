import { store,key } from './store/index';
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { Edit, Delete} from "@element-plus/icons-vue";
const app = createApp(App)
app.component('edit',Edit)
app.component('delete',Delete)
app.use(store,key)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
 