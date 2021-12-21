<template>
  <div class="header h100 row-between" :class="[theme ? 'theme-dark' : 'theme-light']">
    <div class="pl10 pr10 h100 col-center header-hover" @click="changeCollapse">
      <el-icon class="icon" color="#000">
        <expand v-if="is_collapse" />
        <fold v-else />
      </el-icon>
    </div>
    <div class="h100 w100 col-center ml20">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="setting h100 row-end">
      <div class="pl10 pr10 h100 col-center header-hover">
        <el-icon class="icon"><search /> </el-icon>
      </div>
      <div class="pl10 pr10 h100 col-center header-hover" @click="settingClick(2)">
        <el-icon class="icon"><full-screen /></el-icon>
      </div>
      <div class="pl10 pr10 h100 col-center header-hover" @click="settingClick(3)">
        <el-icon class="icon">
          <moon v-if="theme" />
          <sunny v-else />
        </el-icon>
      </div>
      <div class="pl10 pr10 h100 col-center header-hover">
        <el-icon class="icon" @click="settingClick(4)"><refresh /></el-icon>
      </div>
      <div class="pl10 pr10 h100 col-center header-hover"><el-image class="user-avatar" :src="user_avatar_url" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { Expand, Fold, Search, FullScreen, Sunny, Moon, Refresh } from '@element-plus/icons-vue';

export default defineComponent({
  name: 'home',
  components: { Expand, Fold, Search, FullScreen, Sunny, Moon, Refresh },
  props: {
    is_collapse: { type: Boolean, default: false },
    theme: { type: Number, default: 0 }
  },
  setup(props, context) {
    const router = useRouter();

    const state = reactive({ user_avatar_url: '' });
    // 折叠导航栏
    const changeCollapse = () => {
      context.emit('changeCollapse');
    };
    const settingClick = (val: number) => {
      switch (val) {
        case 1:
          break;
        case 2:
          if (document.fullscreenElement) document.exitFullscreen();
          else document.documentElement.requestFullscreen();
          break;
        case 3:
          context.emit('themeClick');
          break;
        case 4:
          location.reload();
          break;
        case 5:
          break;

        default:
          break;
      }
    };

    onBeforeMount(() => {
      console.log(123);

      //
    });
    return { ...toRefs(state), changeCollapse, settingClick };
  }
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/dark-style.scss';
@import '@/assets/scss/light-style.scss';

.header {
  display: flex;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .header-hover {
    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .icon {
    width: 20px;
    height: 20px;
    color: if(true, $light-color, $dark-color);
  }
  .setting {
    width: 250px;
  }
  .user-avatar {
    width: 35px;
    height: 35px;
  }
}
.theme-light {
  background-color: $light-background;
  color: $light-color;
}
.theme-dark {
  background-color: $dark-background;
  color: $dark-color;
}
</style>
