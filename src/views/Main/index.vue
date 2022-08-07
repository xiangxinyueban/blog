<template>
<div :class="[ this.$store.state.isDarkTheme? 'dark' : 'light']">

<header-bar></header-bar>
  <div id="header" style="height: 60px;">
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
import HeaderBar from '@/components/HeaderBar';
import FooterView from '@/views/FooterView';
import { onMounted } from 'vue';
// import { mapState } from 'vuex'
export default {
    name:"Main",
  components: {
    HeaderBar,
    FooterView
   },
   setup(){
     document.querySelector('body').setAttribute('style', 'margin:0;')
     
   },
};
</script>

<style lang="less">

@import '@/less/theme.less';

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
