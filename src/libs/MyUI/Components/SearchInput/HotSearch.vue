<template>
    <div class="hotsearch-container">
        <!-- <div class="header"> -->
            <h4>热搜</h4>
        <!-- </div> -->

        <div class="item-content">
            <div class="left">
                <div v-for="(item, index) in data" v-show="item.id < 6" class="item" :key="index" @click="handleClick(item)">
                <div class="item-header">
                    {{item.id}}
                </div>
                <div class="item-discription">
                    {{item.value}}
                </div>
            </div>
            </div>
            <div class="right">
                <div v-for="(item, index) in data" v-show="item.id>5" class="item" :key="index" @click="handleClick(item)">
                <div v-if="item.id > 5" class="item-header">
                    {{item.id}}
                </div>
                <div v-if="item.id > 5" class="item-discription">
                    {{item.value}}
                </div>
            </div>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name:"HotSearch",
    setup() {
        let data = [
            {
                id:1,
                value:"热搜1"
            },
            {
                id:2,
                value:"热搜2热搜2热搜2"
            },
            {
                id:3,
                value:"热搜3"
            },
            {
                id:4,
                value:"热搜4"
            },
            {
                id:5,
                value:"热搜5"
            },
            {
                id:6,
                value:"热搜6"
            },
            {
                id:7,
                value:"热搜7"
            },
            {
                id:8,
                value:"热搜8"
            },
            {
                id:9,
                value:"热搜9"
            },
        ];
        return {
            data
        }
    },
}
</script>

<style lang="less" scoped>
// .header{
//     width:100%;
// }
.hotsearch-container{
    text-align:left;
    margin-bottom: 10px;
}
h4 {
    font-size: 17px;
    // float:left;
    flex-basis: 100%;
    // text-align:left;
    // line-height: 10px;
    margin-left: 10px;
    margin-top: 6px;
    margin-bottom: 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
.item-content{
    width:100%;
    display:flex;

    .left{
        width:50%;
    }
    .right{
        width:50%;
    }
    .item{
        // width: 50%;
        font-size: 12px;
        flex:1 1 0%;
        margin-left:10px;
        padding:5px 10px;
        // margin-right:0;
        display: flex;
        align-items: center;
        justify-content: center;

        .item-header{
            width:10%;
            // background-color: aqua;
        }
        .item-discription{
            width:90%;
            color: #555;
            font-family: Arial, Helvetica, sans-serif;
            // background-color:blue;
        }
         &:hover{
            background-color: #ddd;
            border-radius: 2px;
            border:0px;
         }
}
}

</style>