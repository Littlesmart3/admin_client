import { defineComponent, reactive } from 'vue';
import './login.scss';

const PasswordCounter = {
  name: 'password-counter',
  props: ['count'],
  methods: {
    //
  },
  render() {
    return <h1>Password</h1>;
  }
};

const QrCodeCounter = {
  name: 'qrcode-counter',
  props: ['count'],
  methods: {
    //
  },
  render() {
    return <h1>QrCode</h1>;
  }
};

export default defineComponent({
  setup() {
    const state = reactive({
      login_info: { user: '', password: '' }
    });

    return () => (
      <div class="login">
        <div class="row-end h80">
          <div class="login-box">
            <div class="title fs40 col-center pb30 pt20">
              <span class="row-center ">登录</span>
            </div>
            <div class="mt20 mlr50">
              <el-form ref="ruleForm" model={state.login_info} status-icon class="demo-ruleForm">
                <el-form-item prop="pass">
                  <el-input v-model={state.login_info.user} autocomplete="off" placeholder="用户名/手机号"></el-input>
                </el-form-item>
                <el-form-item prop="checkPass">
                  <el-input v-model={state.login_info.password} show-password type="password" autocomplete="off" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <div class="row-end">
                    <a class="forget-password" href="javascript:">
                      忘记密码
                    </a>
                  </div>
                </el-form-item>
                <el-form-item>
                  <el-button class="w100 btn-opacity" type="primary" onClick="resetForm('ruleForm')">
                    登陆
                  </el-button>
                </el-form-item>
              </el-form>
              {/* <PasswordCounter></PasswordCounter>
              <QrCodeCounter></QrCodeCounter> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
