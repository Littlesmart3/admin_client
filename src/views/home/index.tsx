import { defineComponent } from 'vue';
import Layout from '@/components/layout';
export default defineComponent({
  components: { Layout },
  setup() {
    return () => (
      <div class="home h100">
        <Layout></Layout>
      </div>
    );
  }
});
