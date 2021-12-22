<template>
  <div>setting</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue';

export default defineComponent({
  name: 'home',
  components: {},
  setup() {
    onBeforeMount(() => {
      console.log(99999999999);
    });
  }
});
</script>

<style lang="scss"></style>
