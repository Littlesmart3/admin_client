<template>
  <div class="">map</div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
export default defineComponent({
  name: '',
  components: {},
  setup() {
    const state = reactive({});
    onBeforeMount(() => {});
    return { ...toRefs(state) };
  }
});
</script>
<style lang="scss"></style>
