import { menu_list } from '@/assets/setting';
import { defineComponent, onMounted, reactive, ref } from 'vue';
// import moduleCss from './index.module.scss';
import './index.module.scss';

// 菜单类型
const MenuType = defineComponent({
  name: 'menu-type',
  setup() {
    // 菜单类型 -- el-sub-menu
    const elSubMenu = (val: any) => {
      // 自定义title
      const slots = (val: any) => {
        return {
          title: () => {
            return (
              <div>
                <el-icon>
                  <val.icon />
                </el-icon>
                <span>{val.name}</span>
              </div>
            );
          }
        };
      };
      return (
        <el-sub-menu key={val.id} index={val.id.toString()} v-slots={slots(val)}>
          {val.children.map((item: any) => {
            return (
              <el-menu-item key={item.id} index={item.id.toString()}>
                <el-icon />
                <span>{item.name}</span>
              </el-menu-item>
            );
          })}
        </el-sub-menu>
      );
    };

    // 菜单类型 -- el-menu-item
    const elMenuItem = (val: any) => {
      const slots = (val: any) => {
        return {
          title: () => {
            return <span>{val.name}</span>;
          }
        };
      };
      return (
        <el-menu-item key={val.id.toString()} index={val.id.toString()} v-slots={slots(val)}>
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
    const state = reactive({
      active_text_color: '#ffd04b',
      background_color: '#545c64',
      text_color: '#fff',
      isCollapse: true
    });

    const menuOpen = () => {
      console.log(123);
    };
    const menuClose = () => {
      console.log(456);
    };
    const onMouseover = () => {
      state.isCollapse = false;
    };
    const onMouseout = () => {
      state.isCollapse = true;
    };
    onMounted(() => {
      //   console.log(moduleCss);
    });

    return () => (
      <div class={`w100 h100 aside`} onMouseover={onMouseover} onMouseout={onMouseout}>
        <el-menu
          active-text-color={state.active_text_color}
          background-color={state.background_color}
          //   class={`${moduleCss['el-menu-vertical-demo']} h100`}
          class={`el-menu-vertical-demo h100`}
          text-color={state.text_color}
          open={menuOpen}
          close={menuClose}
          collapse={state.isCollapse}>
          <MenuType />
        </el-menu>
      </div>
    );
  }
});
