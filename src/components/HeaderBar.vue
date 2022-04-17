<template>
      <nav>
    <div class="left">
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/algothrom">聊天室</router-link>
    </div>
    <div class="middle"></div>
    <div class="right">
      <router-link to="/">登录</router-link>
      <router-link to="/about">注册</router-link>
      <el-switch
      class="switchStyle"
        v-model="value"
        active-color="#111111"
        :active-text="activeText"
        inactive-color="#aaaaaa">
  </el-switch>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    msg: String
  },
data() {
    return {
      activeText:"浅色模式",
      value:false
    }
  },
  mounted(){
    let theme = localStorage.getItem("theme")
    console.log("theme:",theme, theme==="true");
    if (theme==="true") {
      this.$store.state.isDarkTheme = theme;
      this.value = true
    }
  },
  methods:{

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

<style lang="less">

</style>