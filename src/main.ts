import { createApp } from 'vue'
import App from './App'
import store from '@/store'
import router from '@/router'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(router).use(store).mount('#app')
