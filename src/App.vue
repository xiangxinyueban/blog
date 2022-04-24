<template>
<div :class="[ this.$store.state.isDarkTheme? 'dark' : 'light']">
  <div id="header">
    <header-bar></header-bar>
    <div class="dynamic_shuffl" v-for="(item, i) in bgPictures" :key="i">
      <img src="./assets/bg1.png">
      <!-- <img :src="item"> -->
        Todo: 这里的item需要替换成图片的地址才能实现轮播
    </div>
  </div>

  <div id="content">
     <router-view/>
     <!-- <content-view></content-view> -->
  </div>

  <div id="footer">
    <footer-view></footer-view>
  </div>
</div>

</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import FooterView from './views/FooterView.vue';
import HomeView from './views/HomeView.vue';
export default {
  components: {
    HeaderBar,
    FooterView,
    HomeView
   },
  data(){
    return {
      bgPictures:["./assets/bg1.png","./assets/bg2.png","./assets/bg3.jpg","./assets/bg4.jpg","./assets/bg5.jpg"]
    }
  },
  methods:{
    dynamicPlay(){
      let menuImg = document.querySelectorAll('.dynamic_shuffl')
      console.log("menuImg:", menuImg)
      let index = 0
      setInterval(()=>{
        index++
        index =  index % menuImg.length
        // console.log(index)
        for (let i of menuImg) {
         i.style.opacity = 0
        }
        menuImg[index].style.opacity = 1
      }, 3000)

    }
  },

  beforeCreate() {
    document.querySelector('body').setAttribute('style', 'margin:0;')
  },

  mounted(){
    this.dynamicPlay()
  }

};
</script>

<style lang="less">

@import './less/theme.less';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
}

.dark{
  .theme(rgba(1,1,1,0.3),#232323,#eeeeee)
}

.light{
  .theme()
}

</style>
