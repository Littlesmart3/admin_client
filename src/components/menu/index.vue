<template>
  <div class="menu h100">
    <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" class="el-menu-vertical-demo h100" :collapse="is_collapse">
      <div class="row-center col-center"><el-image class="logo" :src="logo_url" /></div>
      <template v-for="item in menu_lists" :key="item.id">
        <template v-if="item.children.length">
          <el-sub-menu :index="item.id.toString()">
            <template #title>
              <el-icon> <component :is="item.icon" /> </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="element in item.children" :key="element.id">
              <template v-if="element.children.length">
                <el-sub-menu :index="element.id.toString()">
                  <template #title>
                    <span class="ml10">{{ element.name }} </span>
                  </template>
                  <el-menu-item v-for="val in element.children" :key="val" :index="val.id.toString()">
                    <template #title>
                      <span class="ml10"> {{ val.name }}</span>
                    </template>
                  </el-menu-item>
                </el-sub-menu>
              </template>
              <template v-else>
                <el-menu-item :index="element.id.toString()">
                  <template #title>
                    <span class="ml10"> {{ element.name }} </span>
                  </template>
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id.toString()">
            <el-icon> <component :is="item.icon" /> </el-icon>
            <template #title>
              <span @click="menuClick(item.id)">{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs, watch } from 'vue';
import { useRouter } from 'vue-router';
import { menu_list } from '@/assets/setting';

export default defineComponent({
  name: 'home',
  components: {},
  props: {
    is_collapse: { type: Boolean, default: false }
  },
  setup(props) {
    const router = useRouter();

    watch(
      () => props.is_collapse,
      (val) => (state.is_collapse = val)
    );
    const menu_lists = menu_list;
    const state = reactive({
      is_collapse: false, // menu是否折叠
      logo_url: '' // logo链接
    });

    // 导航栏点击
    const menuClick = (id: number) => {
      console.log(id);
    };
    onBeforeMount(() => {
      if (document.documentElement.clientWidth < 1000) state.is_collapse = true;
    });
    return { ...toRefs(state), menu_lists, menuClick };
  }
});
</script>

<style lang="scss" scoped>
.menu {
  color: #fff;
  .logo {
    width: 60px;
    height: 60px;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-sub-menu .el-menu-item {
    &:hover {
      background-color: #1f2d3d !important;
    }
  }
}
</style>
<style lang="scss">
.menu {
  .el-menu {
    border: 0;
    .el-menu--inline {
      .el-sub-menu__title {
        background-color: rgb(48, 65, 86) !important;
      }
      background-color: rgb(48, 65, 86) !important;
    }
  }
}
</style>
