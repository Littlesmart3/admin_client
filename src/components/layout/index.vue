<template>
  <div class="home h100">
    <el-container class="h100">
      <el-aside><Menu ref="menuRef" :is_collapse="is_collapse" /> </el-aside>
      <el-container>
        <el-header><Header :is_collapse="is_collapse" :theme="theme" @changeCollapse="changeCollapse" @themeClick="themeClick" /> </el-header>
        <el-main>
          <template class="tag col-center">
            <div class="pl10">
              <el-tag
                v-for="tag in tags_list"
                :key="tag.id"
                class="cursor"
                size="medium"
                type="info"
                closable
                :disable-transitions="false"
                @click="tagClick(tag)"
                @close="tagClose(tag)"
              >
                {{ tag.title }}
              </el-tag>
            </div>
          </template>
          <div>
            <div v-if="true">
              <el-skeleton :rows="4" /><br />
              <el-skeleton :rows="7" />
            </div>
            <router-view>
              <transition name="fade-transform" mode="out-in">
                <keep-alive v-show="false"> </keep-alive>
              </transition>
            </router-view>
          </div>
        </el-main>
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
      flag: 0,
      theme_color: '#252525',
      tags_list: [
        { title: 'Tab 1', id: 1, path: '/' },
        { title: 'Tab 2', id: 2, path: '/' }
      ]
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

    const tagClose = (val: any) => {
      state.tags_list = state.tags_list.filter((item: any) => item.id !== val.id);
    };
    const tagClick = (val: any) => {
      console.log(val);
    };
    const methods = {
      changeCollapse,
      themeClick,
      tagClose,
      tagClick
    };
    onBeforeMount(() => {
      state.is_collapse = document.documentElement.clientWidth < 1000 ? true : false;
      state.theme = new Date().getHours() > 6 && new Date().getHours() < 18 ? 0 : 1;
      monitorWidth();
    });

    return { ...toRefs(state), menuRef, ...methods };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/dark-style.scss';
@import '@/assets/scss/light-style.scss';
.home {
  .el-header {
    height: 50px;
    padding: 0;
  }
  .el-aside {
    --el-aside-width: null;
  }
  .el-main {
    // background-color: if(false, $light-background, $dark-background);
    background-color: $light-background;
    padding: 0;
    .tag {
      height: 40px;
      width: 100%;
      background-color: #f3f6f8;
      .el-tag + .el-tag {
        margin-left: 5px;
      }
    }
  }
}

/* fade-transform */

.fade-transform-enter-active {
  animation: bounce-in 0.25s;
}
.fade-transform-leave-active {
  animation: bounce-out 0.25s;
}
@keyframes bounce-in {
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes bounce-out {
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(20px);
    opacity: 0;
  }
}
</style>
