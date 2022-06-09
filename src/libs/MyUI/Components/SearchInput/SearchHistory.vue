<template>
     <div class="history-container">
        <!-- <div class="header"> -->
            <h4>搜索历史</h4>
        <!-- </div> -->
        <div class="history-content">
            <el-tag
            size="large"
            type=""
            :closable="true"
            v-for="(item, index) in history"
            :key="index"
            @click="handleClick(item)"
            @close="handleClose(item)">
                {{ item.value }}
            </el-tag>
        </div>
    </div>

</template>

<script>
export default {
    name:"SearchHistory",
    setup() {
        let history = [
            {
                id:1,
                value:"历史1"
            },{
                id:2,
                value:"历史2"
            },{
                id:3,
                value:"历史3历史3历史3历史3"
            },{
                id:4,
                value:"历史4历史3历史3"
            },
            {
                id:5,
                value:"历史5历史3"
            },
            {
                id:6,
                value:"历史6"
            },
        ];
        return {
            history
        }

    },
}
</script>

<style lang="less" scoped>
.history-container{
    text-align:left;
}

h4{
    margin-left:10px;
    margin-top: 6px;
    margin-bottom: 6px;
}

.history-content{
    margin:0 10px;
    .el-tag{
        margin: 4px;
    }
}


</style>