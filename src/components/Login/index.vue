<template>
    <el-container>
      <el-header>Header</el-header>
      <div class="container">
        <div class="aside">Aside</div>
        <div class="right">
            <div class="login-frame">
            <div class="tab" style="width:100%; margin-bottom: 10px; display:flex; justify-content: center; align-items: center;">
            <el-radio-group v-model="tabName" size="large">
                <el-radio-button label="登录" />
                <el-radio-button label="注册" />
            </el-radio-group>
            </div>

            <!-- 登录框 -->
            <div v-show="tabName=='登录'">
            <el-form ref="loginFormRef"
                :model="userInfo"
                :rules="rules">
                <el-form-item prop="username">
                    <el-input
                    placeholder="用户名"
                    v-model="userInfo.username">
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <i class="icofont-user-alt-7"></i>
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                    v-model="userInfo.password"
                        type="password"
                        placeholder="密码">
                            <template #prefix>
                            <el-icon class="el-input__icon">
                                <i class="icofont-lock"></i>
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="verifyCode">
                    <el-input
                    placeholder="验证码"
                    v-model="tmpVerify.verifyCode">
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <i class="icofont-user-alt-7"></i>
                            </el-icon>
                        </template>
                    </el-input> 
                </el-form-item>
                <el-form-item>
                <img id="captcha" :src="captchaUrl"/>
                <el-button @click="initCaptcha">换一张</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button color="#626aef" class="login_btn" id="login" @click="submit(loginFormRef)">登录</el-button>
                </el-form-item>
                <!-- </el-row> -->
                <!-- <el-row>
                <el-button>注册</el-button>
                </el-row> -->
                </el-form>
                </div>

                <!-- 注册框 -->
                <div v-show="tabName=='注册'">
                <el-form ref="registerFormRef"
                :model="userInfo"
                :rules="rules">
                <el-form-item prop="username">
                    <el-input
                    placeholder="用户名"
                    v-model="userInfo.username">
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <i class="icofont-user-alt-7"></i>
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                    v-model="userInfo.password"
                        type="password"
                        placeholder="密码">
                            <template #prefix>
                            <el-icon class="el-input__icon">
                                <i class="icofont-lock"></i>
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input
                    placeholder="邮箱"
                    v-model="userInfo.email">
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <i class="icofont-user-alt-7"></i>
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button color="#626aef" class="login_btn" id="login" @click="registerSubmit(registerFormRef)">注册</el-button>
                </el-form-item>
                <!-- </el-row> -->
                <!-- <el-row>
                <el-button>注册</el-button>
                </el-row> -->
                </el-form>
            </div>
            </div>
        </div>
      </div>
      <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import request from '@/services'
import { GetCaptcha } from "@/services/safety"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import router from '@/router'
export default {
    name: "Login",
    setup(){
        const store = useStore();
        const userInfo = reactive({
            username: '',
            password: '',
            email: '',
            user_id: 0
        })
        const tmpVerify = reactive({
            verifyCode:  '',
            verifyId:  ''
        })
        
        let tabName = ref('登录');
        // tabName='first';
        const loginFormRef = ref('');
        const registerFormRef = ref('');
        const rules = reactive({
            username: [
                { required: true, message: '用户名需1到30个字母或者数字', trigger: 'blur' },
                { min: 1, max: 30, message: 'Length should be 1 to 30', trigger: 'blur' },
            ],
            password: [
                { required: true, message: '请输入6到30位的数字或字母', trigger: 'blur' },
                { min: 2, max: 30, message: 'Length should be 1 to 30', trigger: 'blur' },
            ], 
            email: [
                { required: true, message: '请输入正确的邮箱格式', trigger: 'blur' },
                { min: 2, max: 30, message: 'Length should be 6 to 30', trigger: 'blur' },
            ]
        });
        const captchaUrl = ref("")
        const initCaptcha = async()=>{
            let data = await GetCaptcha();
            console.log("验证码：", )
            captchaUrl.value = data.captcha_result.base_64_blog
            tmpVerify.verifyId = data.captcha_result.id
        }
        
        onMounted(()=>{
          initCaptcha();
          // console.log("articleList", articleList);
        });
        const submit = async (formEl) => {
            console.log("ruleFormRef", formEl);
            if (!formEl) return
            await formEl.validate((valid, fields) => {
                console.log(valid);
                if (valid) {
                    const data = request("login", {...userInfo, ...tmpVerify});
                    data.then(function (response) {
                        console.log("返回值： ", response);
                        if (response.code == "200") {
                        ElMessage({
                            message: '欢迎登录',
                            type: 'success',
                        });
                        localStorage.setItem("token", response.data.token);
                        userInfo.user_id = response.data.user_id;
                        console.log("store:", userInfo);  
                        store.commit("updateUserConfig", userInfo, true);
                        router.push('/main')
                        // updateLoginInfo(state, true);
                    } else{
                        initCaptcha();
                        return ElMessage({
                            message: response.msg,
                            type: 'error',
                    })
                    }
                    }); 
                    // console.log("返回值： ", data.token);
                } else {
                    console.log('error submit!', fields)
                }
            })
        }
        
        const registerSubmit = async (formEl) => {
            console.log("ruleFormRef", formEl);
            if (!formEl) {
                return
            } 
            await formEl.validate((valid, fields) => {
                console.log(valid);
                if (valid) {
                    const data = request("register", {...userInfo, ...tmpVerify});
                    data.then(function (response) {
                        console.log("返回值： ", response, data, tabName);
                        if (response.code == "200") {
                            tabName.value = '登录';
                            ElMessage({
                                message: '注册成功，请登录',
                                type: 'success',
                            });
                        // localStorage.setItem("token", response.data.token); 
                        console.log("store:", store);  
                        // store.commit("updateUserConfig", true);
                        router.push('/login')
                        // updateLoginInfo(state, true);
                    }
                    }); 
                    // console.log("返回值： ", data.token);
                } else {
                    console.log('error submit!', fields)
                }
            })
        }


        return {
            userInfo,
            rules,
            registerFormRef,
            loginFormRef,
            submit,
            registerSubmit,
            tabName,
            captchaUrl,
           tmpVerify,
           initCaptcha
        }
    }
}
</script>

<style lang="less" scoped>
.container{
    width:100%;
    display:flex;

}
.aside{
    display: flex;
    justify-content: center;
    align-items: center;
    width:70%;
    min-height:400px;
    background-color: #6480f4;
    border: 1px solid black;
    // padding-top: 400px;
}
.el-header{
    display: flex;
    align-items: center;
    justify-content: center;
    >span{
        font-size: 20px;
        color: #222;
    }
}
.right{
    display:flex;
    justify-content: center;
    width:30%;
    min-width:350px;
    align-items: center;
    background-color: #6480f4;
}
.login_btn {
    font-size: 15px;
    width: 100%;
    border-radius: 3px;
    border: none;
}
.el-row{
    margin-bottom:15px;    
}

.login-frame{
    width: 300px;
    background-color: white;
    padding: 20px;
    padding-top: 40px;
    border-radius: 2px;
    box-shadow: 1px 1px 1px 1px #5c6ba7;
}

.tab{
    /deep/ .el-radio-button{
        // border: solid white 1px;
        // box-shadow: none;
        // border-right:solid 1px var(--el-color-info-dark-2);
         --el-radio-button-checked-text-color: var(--el-color-primary);
         --el-radio-button-checked-bg-color: var(--el-color-white);
        --el-radio-button-checked-border-color: var(--el-color-primary);
    }
}
</style>