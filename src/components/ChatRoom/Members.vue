<template>
<div class="container">
  <!-- {{userList}} -->
<div class="user-item" v-for="(user, index) in userList" :key="index">
    {{user}}
</div>
</div>
</template>
<script>
import { onMounted, onUnmounted, computed, reactive, ref, toRefs} from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
export default {
  name: 'Members',
  props:{
    list:Array
  },
  setup(props, {emit}){
    const {list} = toRefs(props);
    let userList = reactive(new Array(1).fill(0));
    userList = list;
    onMounted(() => {
    });
    return {
      userList
    };
 }
}
</script>
<style lang="less" scoped>
.container{
  box-sizing: border-box;
  width:100%;
  display: flex;
  flex-direction: column;
  .user-item{
    border: 1px solid #999;
    margin-right: 8px;
    padding:2px 2px;
    &:hover{
      background-color:aqua;
    }
  }
}
</style>