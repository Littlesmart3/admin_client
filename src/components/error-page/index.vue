<template>
  <div class="row-center col-center h100">
    <div class="main-container">
      <div class="img-container container-item">
        <img src="@/assets/img/404.svg" />
      </div>
      <div class="text-container container-item">
        <div class="code">404</div>
        <div class="msg">你查看的页面貌似丢失了呢...</div>
        <div class="action" @click="back">返回首页,查看更多内容.</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {},
  setup() {
    const router = useRouter();
    const back = () => router.push('/');

    return { back };
  }
});
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
