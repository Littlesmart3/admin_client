import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import store from './store';
import router from './router';
import App from './App.vue';
// 引入全局样式
import '@/assets/scss/index.scss';

const app = createApp(App);

app.use(router).use(store).use(ElementPlus, { size: 'small', zIndex: 3000 }).mount('#app');
