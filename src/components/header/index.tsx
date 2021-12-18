import { defineComponent } from 'vue';
import './index.scss';
import { useRouter } from 'vue-router';

// 面包屑
const BreadCrumbs = defineComponent({
  name: 'menu-type',
  setup() {
    const router = useRouter();
    console.log(router);
    return () => (
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>homepage</el-breadcrumb-item>
      </el-breadcrumb>
    );
  }
});

export default defineComponent({
  setup() {
    return () => (
      <div class={`w100 h100`}>
        <div>
          <el-icon>
            <fold />
            <expand />
          </el-icon>
        </div>
        <BreadCrumbs />
        <div></div>
      </div>
    );
  }
});
