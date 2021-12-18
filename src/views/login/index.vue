<template>
  <div class="home h100">123</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import { RECORD } from '@/assets/base_info';

export default defineComponent({
  name: 'home',
  components: {},
  setup() {
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
    onBeforeMount(() => {
      monitorWidth();
    });
    return { ...toRefs(state), record };
  }
});
</script>

<style lang="scss">
.home {
  color: #000;
}
</style>
