import { defineComponent, onMounted, ref } from 'vue';
import moduleCss from './index.module.scss';
import Aside from '../aside';
import Header from '../header';

export default defineComponent({
  components: { Aside },
  setup() {
    const asideRef = ref(null);
    onMounted(() => {
      // console.log(Aside);
      console.error(asideRef);
    });
    return () => (
      <div class={`w100 h100 layout`}>
        <el-container class={`h100`}>
          <el-aside class={moduleCss.aside}>
            <Aside ref={asideRef} />
          </el-aside>
          <el-container>
            <el-header class={moduleCss.header}>
              <Header />
            </el-header>
            <el-main class={moduleCss.main}>Main</el-main>
          </el-container>
        </el-container>
      </div>
    );
  }
});
