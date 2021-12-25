<template>
  <div class="echarts">
    <section class="section-one">
      <el-card class="h100 box-card col-between">
        <div id="order" class="h100 w100"></div>
      </el-card>
    </section>
    <section class="section-two pt10">
      <el-row class="h100 menu-group mt10" :gutter="12">
        <el-col :span="15">
          <el-card class="h100 box-card col-between">
            <div id="user" class="h100 w100"></div>
          </el-card>
        </el-col>
        <el-col :span="9">
          <el-card class="h100 box-card col-between">
            <div id="shop" class="h100 w100"></div>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <section class="section-three pt10"></section>
  </div>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, reactive, ref, toRefs } from 'vue';
// import * as echarts from 'echarts';
import orderEchart from '../lib/order-echarts';
import userEchart from '../lib/user-echarts';
import shopEchart from '../lib/shop-echarts';

export default defineComponent({
  name: '',
  components: {},
  setup() {
    const state = reactive({});

    const getOrderEchart = () => {
      const order: HTMLElement | null = document.getElementById('order');
      if (!order) return;
      orderEchart(order);
    };
    const getUserEchart = () => {
      const user: HTMLElement | null = document.getElementById('user');
      if (!user) return;
      userEchart(user);
    };
    const getShopEchart = () => {
      const shop: HTMLElement | null = document.getElementById('shop');
      if (!shop) return;
      shopEchart(shop);
    };

    onMounted(() => {
      getOrderEchart();
      getUserEchart();
      getShopEchart();
    });
    return { ...toRefs(state) };
  }
});
</script>
<style lang="scss">
.echarts {
  .section-one {
    height: 400px;
  }
  .section-two {
    height: 400px;
  }
  .el-card__body {
    height: 100%;
  }
}
</style>
