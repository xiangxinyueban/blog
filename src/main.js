import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import ElementUI from 'element-plus'
import 'element-plus/theme-chalk/index.css'

createApp(App).use(router).use(store).use(ElementUI).mount('#app')
