<template>
<div class="history-box" ref="historyBox" :style="{height:windowHeight+ 'px'}">
    <el-scrollbar :max-height="windowHeight + 'px'" ref="scrollbar" >
        <div v-show="loading" v-loading="loading" element-loading-text="加载历史记录..." class="loading"></div>
        <div v-show="nomore" class="nomore">没有更多</div>
         <div v-for="(item, index) in messages" :key="index" class="message-card">
                <div :class="item.from == userConfig.username?'message-row-right':'message-row-left'">
                <el-avatar> {{item.from}}</el-avatar>
                <div class="message-content">
                        <span class="message-time">
                            {{item.createTime}}
                        </span>
                    <div class="message-body">
                        {{item.content}}
                    </div>
                </div>
                </div>
            </div>
    </el-scrollbar>
</div>
</template>
<script>
import {getCurrentInstance, onMounted, onUnmounted, computed, reactive, ref, toRefs} from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import {getHistory} from '@/services/chatRoom'

export default {
    name: 'History',
    props:{
        items:Array
    },
    setup(props, {emit}){
        //data
        const {items} = toRefs(props);
        const store = useStore(),
            state = store.state;
        const userConfig =  state.userConfig;
        let windowHeight = document.documentElement.clientHeight-178;
        let messages = reactive(new Array(40))
        messages = items;
        let scrollbar = ref('');
        let loading = ref(false);
        let historys = reactive(new Array(40).fill(0).map((i, index) => index +1))
        const add = () =>{
            let lists = new Array(10).fill(0)
            for (var i=0; i<10; i++){
                historys.splice(0,0,i)
            }
            setTimeout(() => {
                loading.value = false
                scrollbar.value.wrap$.scrollTop = scrollbar.value.wrap$.scrollHeight - oldScrollHeight - 88;
            }, 2000)
        }
        let oldScrollHeight = 0;
        const historyBox = ref('');
        const scrollHandler = () => {
            const oHistoryBox = document.querySelector('.loading');
            // console.log("scroll triigered", scrollbar.value.wrap$.scrollTop);
            if (scrollbar.value.wrap$.scrollTop == 0) {
                loading.value = true
                add()
                oldScrollHeight = JSON.parse(JSON.stringify(scrollbar.value.wrap$.scrollHeight));
            } else {
                loading.value = false
            }
        };
        const history = () => {
            getHistory(chat_max_id, room_id).then(res => {
                console.log("获取历史消息：", res)
            })
        }
        onMounted(() => {
            // console.log("historyBox:", historyBox);
            const oHistoryBox = document.querySelector('.history-box');
            oHistoryBox.addEventListener('scroll', scrollHandler, true)
            scrollbar.value.wrap$.scrollTop = scrollbar.value.wrap$.scrollHeight
            history()
        });
        return {
            windowHeight,
            historyBox,
            scrollbar,
            loading,
            add,
            historys,
            messages,
            userConfig
        };
    },
    directives:  {
        // scroll: {
        //     mounted(el) {
        //         console.log("el:", el);
        //         el.addEventListener("scroll", (e) => {
        //             ElMessage.success("scrolled", e.target.scrollHeight);
        //         })
        //     }
        // }
    }
}
</script>
<style lang="less" scoped>
.history-box{
    width:100%;
    .content{
        width:calc(100% - 10px);
        border: 1px solid blue;
        min-height: 22px;
    }
    .loading{
        width:calc(100% - 10px);
        min-height: 88px;
    }
    .nomore{
        width:calc(100% - 10px);
        min-height: 22px;
    }
}

   .message {
        height: 350px;
    }
  .ivu-card-body {
    padding:5px;
  }
  .ivu-modal-body{
    padding: 0px 16px 16px  16px;
  }

  
  
  .message-card {
   margin:5px;
  }
  .message-row-left {
   display: flex;
   flex-direction:row;
   align-items: center;
//    justify-content: center;
/deep/ .el-avatar {
    --el-avatar-text-color: var(--el-color-warning);
    --el-avatar-bg-color: var(--el-color-white);
}
  }
  .message-row-right {
   display: flex;
   align-items: center;
   flex-direction:row-reverse;
   /deep/ .el-avatar {
    --el-avatar-text-color: var(--el-color-success);
    --el-avatar-bg-color: var(--el-color-white);
    }
  }
  .message-content {
    margin:-5px 5px 5px 5px;
    display: flex;
    flex-direction:column;
  }
  .message-body {
    border:1px solid #b1bab1;
    padding:5px;
    border-radius:3px;
    background-color:rgba(255, 255, 255, 0.471);
  }
  .message-time {
    margin:0 5px;
    font-size:5px;
    color:#D9DAD9;
  }
//   .footer-btn {
//     float:right;
//     margin-bottom: 5px;
//   }
  .spin-icon-load {
    animation:ani-spin 1s linear infinite;
  }
  
//   @keyframes ani-spin{
//     form{transform: rotate(0deg);}
//     50% {transform: rotate(180deg);}
//     to  {transform: rotate(360deg);}
//   }

  
</style>