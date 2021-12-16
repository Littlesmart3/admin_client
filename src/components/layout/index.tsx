import { defineComponent } from 'vue';
import moduleCss from './index.module.scss';
import Aside from '../aside';

export default defineComponent({
  components: { Aside },
  setup() {
    return () => (
      <div class={`w100 h100 layout`}>
        <el-container class={`h100`}>
          <el-aside class={moduleCss.aside}>
            <Aside />
          </el-aside>
          <el-container>
            <el-header class={moduleCss.header}>Header</el-header>
            <el-main class={moduleCss.main}>Main</el-main>
            <el-footer class={moduleCss.footer}>Footer</el-footer>
          </el-container>
        </el-container>
      </div>
    );
  }
});
