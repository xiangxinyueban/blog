<template>
      <nav>
        <div class="backgroundimg">
          <img src="@/assets/Brain.png"/>
        </div>
    <div class="left">
      <router-link to="/main/home">首页</router-link>
      <router-link to="/main/news">专题</router-link>
      <router-link to="/main/new">艾宾浩斯</router-link>
    </div>
    <div class="middle">
      <SearchInput ></SearchInput>
    </div>
    <div class="right">
      <!-- <router-link to="/">登录</router-link>
      <router-link to="/about">注册</router-link> -->
      <div class="box" v-show="!isLogin">
      <el-button type="success"
        @click="toLogin()">
        Login
      </el-button>
      <el-button type="primary"
        @click="logoff()">
        Register
      </el-button>
      </div>
      <div v-show="isLogin" style="display: flex; justify-content: center; align-items: center;">
      <div class="box" style="position:relative; display: flex; align-items: center;">
       <el-dropdown trigger="click" @command="handleCommand">
      <el-avatar> {{userConfig.username}} <arow-down/></el-avatar>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="Edit" command="edit">新增博客</el-dropdown-item>
          <el-dropdown-item :icon="Management" command="management">文章管理</el-dropdown-item>
          <el-dropdown-item :icon="User" command="usercenter">个人中心</el-dropdown-item>
          <el-dropdown-item :icon="User" command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
      聊天室
  </el-button>
    <el-drawer v-model="drawer" title="聊天室" :with-header="false" size="50%">
    <span>聊天室</span>
    <chat-room></chat-room>
    </el-drawer>
    </div>  

        <!-- <div class="submenuContainer">
        <div class="submenuInner">
          <div class="menu"><router-link to="/main/editor">博客编辑</router-link></div>
          <div class="menu"><router-link to="/main/manager">文章管理</router-link></div>
          <div class="menu"><router-link to="/main/manager">个人中心</router-link></div>
        </div>
        </div> -->
        <!-- <router-link to="/userCenter" style="margin-left: 8px;">个人中心</router-link> -->
        <!-- <el-button type="info"
          @click="logoff()">
          注销
      </el-button> -->
      
    </div>
  <!-- <el-dialog v-model="dialogFormVisible" title="Shipping address">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          ></el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button>
      </span>
    </template>
  </el-dialog> -->

  <!--深色浅色模式切换按钮-->
      <!-- <el-switch
      class="switchStyle"
        v-model="value"
        active-color="#111111"
        :active-text="activeText"
        inactive-color="#aaaaaa">
  </el-switch> -->
    </div>
  </nav>
</template>

<script>

import { onMounted, onUnmounted, computed, reactive, ref} from 'vue';

import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';

import { logout } from '@/services/userauth';
import router from '@/router';


import ChatRoom from '@/components/ChatRoom';

import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
  Edit,
  User,
  Management,

} from '@element-plus/icons-vue'

export default {
  name: 'HeaderBar',
  components:{
    ChatRoom
  },
  setup(){
    const store = useStore(),
      state = store.state;
    const router = useRouter();
    const isLogin= computed(() => state.isLogin );
    const userConfig = computed(() => state.userConfig);
    let value = reactive(false)
    console.log("state:", state);
    const toLogin = ()=>{
      router.push("/login")
    }
    onMounted(() => {
      let theme = localStorage.getItem("theme")
      console.log("theme:",theme, theme==="true");
      console.log("userConfig", localStorage.getItem("userConfig"));
      console.state
      if (theme==="true") {
        // store.state.isDarkTheme = theme;
        value = true;
      }
    });
    const handleCommand = (command) => {
      switch (command) {
        case "usercenter":
          router.push("/main/usercenter");
          break;
        case "edit":
          router.push("/main/edit");
          break;
        case "management":
          router.push("/main/articlemanagement");
          break;
        case "logout":
          logoff();
          break;
        default:
          break;
      }
    };
    const logoff = async ()=>{
     const response = await logout();
     if (response.status == "success") {
      store.commit("updateUserConfig", {}, false)
      localStorage.setItem("token", "");
      router.push("/main")
     }
        
    };
    const drawer = ref(false);
    return {
      // element-plus icon组件导入
      Edit,
      User,
      Management,
      ArrowDown,
      handleCommand,
      isLogin,
      userConfig,
      logoff,
      value,
      toLogin,
      drawer,
    }
  },
  data() {
    return {
      activeText:"浅色模式",
      value:false
    }
  },
  watch:{
    value(newValue, oldValue){
      console.log("newValue:", newValue, "oldValue:", oldValue);
      this.$store.state.isDarkTheme = newValue;
      localStorage.setItem("theme", newValue)
      if (this.$store.state.isDarkTheme){
        this.activeText = "深色模式"
      } else {
        this.activeText = "浅色模式"
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-switch{
  margin-left: 4px;
}
.right {
  display: flex;
  .box{
    // border:1px solid #aaa;
    border-radius: 4px;
    padding: 4px 8px;
    // width:100%;
    .el-button {
      margin-left: 20px;
    }
  }
}

.backgroundimg{
  width:100%;
  position: fixed;
  top:0;
  left:0;
  height: 60px;
  z-index: -1;
  overflow: hidden;
  > img{
    width:100%;
  }
}

.submenuContainer{
  // display: none;
  width:100px;
  .submenuInner{
    width:100%;
    // display: flex;
    justify-content: center;
    // align-items: center;
    > .menu {
      border: 1px solid rgba(200, 200, 200, 1);
      width:100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  // top:;
  
  position:absolute;
  left:-25px;
  // width:400px;
  
  z-index:102;
}

/deep/ .el-avatar {
    --el-avatar-text-color: var(--el-color-success);
    --el-avatar-bg-color: var(--el-color-white);
}

.el-avator{
  &:hover{
    border: 1px solid blue;
  }
}
</style>