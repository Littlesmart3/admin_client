<template>
  <div class="home h100">
    <el-container class="h100">
      <el-aside><Menu ref="menuRef" :is_collapse="is_collapse" /> </el-aside>
      <el-container>
        <el-header><Header :is_collapse="is_collapse" :theme="theme" @changeCollapse="changeCollapse" @themeClick="themeClick" /> </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, ref, toRefs } from 'vue';
import Menu from '../menu/index.vue';
import Header from '../header/index.vue';
import { AnyObject } from '@/assets/interface/index';

export default defineComponent({
  name: 'home',
  components: { Menu, Header },
  setup() {
    const menuRef = ref<AnyObject | null>(null);

    const state = reactive({
      is_collapse: menuRef.value?.is_collapse || false,
      theme: 0, // 主题 0 = 亮， 1 = 暗
      flag: 0
    });

    // 折叠导航栏
    const changeCollapse = () => {
      state.is_collapse = !state.is_collapse;
      state.flag++;
    };
    // 主题切换
    const themeClick = () => {
      state.theme = state.theme ? 0 : 1;
    };
    // 显示器宽度监听
    const monitorWidth = () => {
      window.onresize = () => {
        const client_width = document.documentElement.clientWidth;
        if (state.flag) {
          if (state.is_collapse && client_width < 800) state.flag = 0;
          if (!state.is_collapse && client_width > 1000) state.flag = 0;
        } else {
          state.is_collapse = client_width < 1000 ? true : false;
        }
      };
    };

    onBeforeMount(() => {
      state.is_collapse = document.documentElement.clientWidth < 1000 ? true : false;
      state.theme = new Date().getHours() > 6 && new Date().getHours() < 18 ? 0 : 1;
      // if (new Date().getHours() > 6 && new Date().getHours() < 18) {
      //   console.log(123);
      // } else console.log(456);

      monitorWidth();
    });
    const methods = {
      changeCollapse,
      themeClick
    };
    return { ...toRefs(state), menuRef, ...methods };
  }
});
</script>

<style lang="scss" scoped>
.home {
  .el-header {
    height: 50px;
    padding: 0;
  }
  .el-aside {
    --el-aside-width: null;
  }
}
</style>
