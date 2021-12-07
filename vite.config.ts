import { defineConfig } from 'vite';
import { join } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport from 'vite-plugin-style-import';
import { device_id } from './src/plugin/machine-id';
import { URL } from './src/assets/base_info';

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      vueJsx(),
      styleImport({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
              return `element-plus/lib/theme-chalk/${name}.css`;
            },
            resolveComponent: (name) => {
              return `element-plus/lib/${name}`;
            }
          }
        ]
      })
    ],
    base: mode === 'development' ? '/' : './', //此时把环境打包路径也配置好，避免生产环境打包出现白屏
    server: {
      port: 8888
    },
    resolve: {
      // 导入文件夹别名
      alias: {
        '@': join(__dirname, 'src')
      }
    },
    define: {
      __APP_DEVICE_ID__: JSON.stringify(device_id),
      __APP_API_URL__: JSON.stringify(URL)
    }
  });
