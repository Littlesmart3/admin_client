<template>
  <div class="home">
    <Card class="mt10" />
    <Echarts class="mt10" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import { CaretTop } from '@element-plus/icons-vue';
import Card from './components/card.vue';
import Echarts from './components/echarts.vue';

export default defineComponent({
  name: 'home',
  components: { CaretTop, Card, Echarts },
  setup() {
    const panel_group_list = [
      { id: 1, label: '销售额', date: '昨日', number: '9', day_compare: '10', week_compare: '33', total_title: '总销售额', total_number: '288元' },
      { id: 2, label: '用户访问量', date: '昨日', number: '3233', day_compare: '545', week_compare: '889', total_title: '总访问量', total_number: '4583次' },
      { id: 3, label: '订单量', date: '昨日', number: '7282', day_compare: '22', week_compare: '465', total_title: '总订单量', total_number: '5739单' },
      { id: 4, label: '新增用户', date: '昨日', number: '33', day_compare: '8', week_compare: '372', total_title: '总用户', total_number: '3929人' }
    ];
    const state = reactive({
      panel_group_list: panel_group_list
    });

    onBeforeMount(() => {});
    return { ...toRefs(state) };
  }
});
</script>

<style lang="scss">
.home {
  padding: 0 20px;
}
</style>
