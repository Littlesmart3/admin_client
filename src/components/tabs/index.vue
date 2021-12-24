<template>
  <div>
    <el-tag
      v-for="tag in tags_list"
      :key="tag.id"
      class="cursor"
      size="medium"
      :type="tag_type"
      closable
      :disable-transitions="false"
      @click="tagClick(tag)"
      @close="tagClose(tag)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { Expand, Fold, Search, FullScreen, Sunny, Moon, Refresh } from '@element-plus/icons-vue';
import { useStore } from 'vuex';
import { VuexState } from '@/store';

export default defineComponent({
  name: 'home',
  components: { Expand, Fold, Search, FullScreen, Sunny, Moon, Refresh },
  setup(props, context) {
    const router = useRouter();
    // const store = useStore<VuexState>();
    const store = useStore();
    const tags_list = computed(() => store.state.tabs.tags_list);
    const state = reactive({
      tag_type: 'info'
    });
    // 点击标签页
    const tagClick = (val: any) => {
      console.log(val);
    };
    // 关闭标签页
    const tagClose = (val: any) => {
      const tags_list = store.state.tabs.tags_list.filter((item: any) => item.id !== val.id);
      store.commit('setTagsList', tags_list);
    };
    onBeforeMount(() => {
      console.log(store.state);
    });
    return { ...toRefs(state), tags_list, tagClick, tagClose };
  }
});
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 5px;
}
</style>
