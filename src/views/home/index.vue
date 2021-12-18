<template>
  <div class="home h100">
    <el-button @click="Btn">123</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import { RECORD } from '@/assets/base_info';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'home',
  components: {},
  setup() {
    const router = useRouter();
    // 网站备案信息
    const record = RECORD;
    const state = reactive({
      monitor_width: true
    });
    const monitorWidth = () => {
      window.onresize = () => {
        state.monitor_width = document.documentElement.clientWidth < 750 ? false : true;
      };
    };
    const Btn = () => {
      router.push('/login');
    };
    onBeforeMount(() => {
      monitorWidth();
    });
    return { ...toRefs(state), record, Btn };
  }
});
</script>

<style lang="scss">
.home {
  color: #fff;
  .el-container {
    height: 100%;
  }
  .el-header,
  .el-footer {
    text-align: center;
    // line-height: 60px;
  }
  .el-main {
    text-align: center;
    .main-center {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .footer {
    color: #fff;
    .beian {
      text-decoration: none;
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
