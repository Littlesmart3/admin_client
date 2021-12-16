import { createApp } from 'vue';
import App from './App';
import store from '@/store';
import router from '@/router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// 引入全局样式
import '@/assets/scss/index.scss';

createApp(App).use(router).use(store).use(ElementPlus).mount('#app');
