<template>
  <div class="menu h100">
    <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" class="el-menu-vertical-demo h100" :collapse="is_collapse">
      <div class="row-center col-center"><el-image class="logo" :src="logo_url" /></div>
      <template v-for="item in menu_tree_lists" :key="item.id">
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
                  <el-menu-item v-for="val in element.children" :key="val.id" :index="val.id.toString()" @click="menuClick(val.id)">
                    <template #title>
                      <span class="ml10"> {{ val.name }}</span>
                    </template>
                  </el-menu-item>
                </el-sub-menu>
              </template>
              <template v-else>
                <el-menu-item :index="element.id.toString()" @click="menuClick(element.id)">
                  <template #title>
                    <span class="ml10"> {{ element.name }} </span>
                  </template>
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.id.toString()" @click="menuClick(item.id)">
            <el-icon> <component :is="item.icon" /> </el-icon>
            <template #title>
              <span>{{ item.name }}</span>
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
import { menu_list, menuType } from '@/assets/setting';
import logo from '@/assets/img/logo.png';
import { getTreeList } from '@/utils/tools';

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
    const menu_tree_lists = getTreeList(menu_list, 'parent_id');
    const state = reactive({
      is_collapse: false, // menu是否折叠
      logo_url: logo // logo链接
    });

    // 导航栏点击
    const menuClick = (id: number) => {
      const url: string | null | undefined = menu_list.find((item: any) => item.id === id)?.path;
      if (!url) return;
      router.push(url);
    };
    onBeforeMount(() => {
      if (document.documentElement.clientWidth < 1000) state.is_collapse = true;
    });
    return { ...toRefs(state), menu_tree_lists, menuClick };
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
      background-color: #505050 !important;
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
        background-color: #3c3c3c !important;
      }
      background-color: #3c3c3c !important;
    }
  }
}
</style>
