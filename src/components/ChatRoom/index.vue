<template>
    <div class="chat">
        <div class="chat-members">
            <Members :list="user_list"></Members>
        </div>
        <div class="chat-message-body" id="chatform">
            <History :items="messages"></History>
             <div class="send-area">
            <el-input
                class="input"
                v-model="mymessage"
                :autosize="{ minRows: 2, maxRows: 4 }"
                type="textarea"
                placeholder="输入消息"
            ></el-input>
            <div class="footer-btn">
                <el-button @click="cancel" type="primary">取消</el-button>
                <el-button type="success" @click="sendMsg">发送</el-button>
            </div>
        </div>
    </div>    
</div>

</template>

<script>
import { ElMessage } from 'element-plus';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import History from './History.vue';
import Members from './Members.vue';

export default {
    name: "ChatRoom",
    setup() {
        // let messages = reactive([{
        //         nickName: "harris",
        //         content: "第一条消息",
        //         createTime: "2022/6/11 6:14PM",
        //         isOneOffset: 1,
        //     }]);
        
        // data
        const store = useStore(),
            state = store.state;
        let messages = reactive(new Array(0));
        let mymessage = ref("");
        let ws; //全局变量存储websocket
        let user_list = reactive(new Array(0));
        let chat_max_id = reactive(0)

        // function 
        let registerRoom = function() {
            console.log(""+JSON.stringify(state.userConfig));
            let loginMsg = {
                type:"login",
                room_id: 1,
                content:"",
                username: state.userConfig.username,
                user_id: state.userConfig.user_id
            };
            ws.send(JSON.stringify(loginMsg))
            console.log("聊天室send"+JSON.stringify(loginMsg));
        };
        let deregisterRoom = function() {
            let loginMsg = {
                type:"logout",
                room_id: 1,
                content:"",
                username: state.userConfig.username,
                user_id: state.userConfig.user_id
            };
            ws.send(JSON.stringify(loginMsg))
            ElMessage.success("聊天室send");
        };
        const sendMsg = () => {
            let msg = {
                type:"send",
                room_id: 1,
                content: mymessage.value,
                username:state.userConfig.username,
                user_id:state.userConfig.user_id
            };
            ws.send(JSON.stringify(msg))
        };
        onMounted(() => {
            ws = new WebSocket("ws://121.196.103.30:5002");
            ws.onmessage = function(e) {
                console.log("聊天室注册响应：",e.data)
                var msg = JSON.parse(e.data);
                if (msg.type == "send"){
                    messages.push(msg)
                }
                if (msg.type == "send" || msg.type=="login"){
                    // user_list = Array.from(msg.user_list);
                    msg.user_list.map((username, index) => {
                        if (!user_list.includes(username)){
                            user_list.push(username)
                        }
                    })
                    // user_list.push(msg.user_list);
                    console.log("聊天室成员：", user_list)
                }
                if (msg.type == "login") {
                    chat_max_id = e.data.chat_max_id;
                }
            };
            ws.onopen = function(){
                registerRoom();
                ElMessage.success("聊天室已连接");
            };
        });
        onUnmounted(() => {
            deregisterRoom(ws)
        });
        return {
            messages,
            mymessage,
            sendMsg,
            user_list
        };
    },
    components: { 
        History,
        Members
    }
};

</script>

<style lang="less" scoped>


.chat{
    width: 100%;
    display: flex;
    justify-content: center;
    // align-items: center;
    .chat-members{
        width:20%;
        // background-color: blue;
        // height: 800px;
    }
     .chat-message-body {
        background-color:#F8F8F6;
        width:80%;
        // background-color: greenyellow;
    }

}

.send-area{
    width:100%;
    padding: 4px 8px;
    // border: 1px solid black;
    box-shadow: 0 0 4px #333;
    margin-top: 8px;
    height: 100px;
    // display: flex;
    // flex-direction: right;
    .input {
        width:100%;
    }
    .footer-btn{
    margin-top: 8px;
    display: flex;
    justify-content: right;
    .el-button{
        margin-left: 8px;
    }
    //   float:right;
    //   border:1px solid black;
    }
  } 
</style>