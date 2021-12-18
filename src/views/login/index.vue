<template>
  <div class="home h100">
    <div class="container" :class="{ 'sign-up-mode': type }">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <div class="row-center col-center">
                <el-icon class="row-center col-center"><user /></el-icon>
              </div>
              <el-input type="text" placeholder="Username" v-model="sign_in.username" />
            </div>
            <div class="input-field">
              <div class="row-center col-center">
                <el-icon class="row-center col-center"> <lock /></el-icon>
              </div>
              <el-input type="password" placeholder="Password" v-model="sign_in.password" show-password @keyup.enter="signInConfirm" />
            </div>
            <el-button class="btn solid fs16" @click="signInConfirm">登 录</el-button>
            <div v-if="false">
              <p class="social-text">Or Sign in with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <div class="row-center col-center">
                <el-icon class="row-center col-center"> <user /></el-icon>
              </div>
              <el-input type="text" placeholder="Username" v-model="sign_up.username" />
            </div>
            <div class="input-field">
              <div class="row-center col-center">
                <el-icon class="row-center col-center"> <iphone /></el-icon>
              </div>
              <el-input type="email" placeholder="Phone" v-model="sign_up.phone" />
            </div>
            <div class="input-field">
              <div class="row-center col-center">
                <el-icon class="row-center col-center"> <lock /></el-icon>
              </div>
              <el-input type="password" placeholder="Password" v-model="sign_up.password" show-password />
            </div>
            <el-button class="btn solid fs16" @click="signUpConfirm">注 册</el-button>
            <div v-if="false">
              <p class="social-text">Or Sign up with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!</p>
            <el-button class="btn transparent" @click="signUpBtn">Sign up</el-button>
          </div>
          <img :src="log_svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
            <el-button class="btn transparent" @click="signInBtn">Sign in</el-button>
          </div>
          <img :src="register_svg" class="image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue';
import { RECORD } from '@/assets/base_info';
import Log from '@/assets/img/login/log.svg';
import Register from '@/assets/img/login/register.svg';
import { User, Lock, Iphone } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus/lib';
import moment from 'moment';

export default defineComponent({
  name: 'home',
  components: { User, Lock, Iphone },
  setup() {
    const router = useRouter();

    // 网站备案信息
    const record = RECORD;
    const log_svg = Log;
    const register_svg = Register;
    const state = reactive({
      type: false, // 注册和登录类型
      sign_in: { username: '', password: '' },
      sign_up: { username: '', phone: '', password: '' }
    });

    // 切换注册按钮
    const signUpBtn = () => (state.type = true);

    // 切换登录按钮
    const signInBtn = () => (state.type = false);

    // 确认登录
    const signInConfirm = () => {
      // const send_data = { username: state.sign_in.username, password: state.sign_in.password };
      if (state.sign_in.username == 'admin' && state.sign_in.password == '123456') {
        localStorage.info = JSON.stringify({
          expire_time: moment(new Date()).unix() + 86400,
          data: { name: state.sign_in.username }
        });
        router.push('/');
      } else {
        ElMessage.error('用户名或密码错误！');
      }
    };

    // 确认注册
    const signUpConfirm = () => {
      if (state.sign_up.username != '' && state.sign_up.password == '') {
        router.push('/');
      }
    };

    // 导出方法
    const methods = { signUpBtn, signInBtn, signInConfirm, signUpConfirm };
    return { ...toRefs(state), log_svg, register_svg, record, ...methods };
  }
});
</script>

<style lang="scss">
@import 'style.scss';
</style>
