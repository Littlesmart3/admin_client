import { menu_list } from '@/assets/setting';
import { defineComponent, onMounted, reactive, ref } from 'vue';
import './index.scss';
import { useRouter } from 'vue-router';

// 菜单类型
const MenuType = defineComponent({
  name: 'menu-type',
  setup() {
    // 二级菜单
    const elSubMenu = (val: any) => {
      // 自定义title
      const titleSlot = (val: any) => {
        return {
          title: () => (
            <div>
              <el-icon>
                <val.icon />
              </el-icon>
              <span>{val.name}</span>
            </div>
          )
        };
      };
      return (
        <el-sub-menu key={val.id} index={val.id.toString()} v-slots={titleSlot(val)}>
          {val.children.map((item: any) => {
            return (
              <el-menu-item key={item.id} index={item.id.toString()}>
                <div class="ml10"></div>
                <span>{item.name}</span>
              </el-menu-item>
            );
          })}
        </el-sub-menu>
      );
    };

    // 一级菜单
    const elMenuItem = (val: any) => {
      const titleSlot = (val: any) => {
        return {
          title: () => <span>{val.name}</span>
        };
      };
      return (
        <el-menu-item key={val.id} index={val.id.toString()} v-slots={titleSlot(val)}>
          <el-icon>
            <val.icon></val.icon>
          </el-icon>
        </el-menu-item>
      );
    };

    return () => (
      <div>
        {menu_list.map((item: any) => {
          return <div>{item.children.length !== 0 ? elSubMenu(item) : elMenuItem(item)}</div>;
        })}
      </div>
    );
  }
});

export default defineComponent({
  setup() {
    const router = useRouter();

    const mini_logo = '';
    const logo = '';
    const state = reactive({
      active_text_color: '#ffd04b',
      background_color: '#545c64',
      text_color: '#fff',
      isCollapse: false
    });
    // 监听浏览器宽度
    const windowsWidth = () => {
      window.onresize = () => {
        state.isCollapse = document.documentElement.clientWidth < 1000 ? true : false;
      };
    };
    // logo按钮
    const logoBtn = () => router.push('/');
    onMounted(() => {
      windowsWidth();
    });

    return () => (
      <div class={`w100 h100 aside`}>
        <el-menu
          active-text-color={state.active_text_color}
          background-color={state.background_color}
          class={`el-menu-vertical-demo h100`}
          text-color={state.text_color}
          collapse={state.isCollapse}>
          <div class="logo">
            <div class="row-center col-center h100 ">
              <div class="cursor" onClick={logoBtn}>
                <el-image class={!state.isCollapse ? 'isCollapse-t' : 'isCollapse-f'} src={state.isCollapse ? mini_logo : logo}></el-image>
              </div>
            </div>
          </div>
          <MenuType />
        </el-menu>
      </div>
    );
  }
});
