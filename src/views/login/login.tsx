import { defineComponent } from 'vue'
import './login.scss'

export default defineComponent({
  setup() {
    const ruleForm: any = {
      pass: 3,
      age: 2,
      checkPass: 999
    }
    return () => (
      <div class="login">
        <div class="row-end h80">
          <div class="login-box col-center">
            <div class>
              <el-form
                ref="ruleForm"
                model={ruleForm}
                status-icon
                label-width="120px"
                class="demo-ruleForm"
              >
                <el-form-item label="Password" prop="pass">
                  <el-input v-model={ruleForm.pass} type="password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Confirm" prop="checkPass">
                  <el-input
                    v-model={ruleForm.checkPass}
                    type="password"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Age" prop="age">
                  <el-input v-model={ruleForm.age}></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button onClick="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
