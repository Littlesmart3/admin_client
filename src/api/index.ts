import { reactive as _reactive } from 'vue';
import Axios from '@/plugin/axios';

const VITE_FAAS = __APP_API_URL__;

export const faas: Axios = new Axios({ base_url: VITE_FAAS, device_id: __APP_DEVICE_ID__, init: true, timeout: 6000 });
