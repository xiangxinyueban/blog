<template>
<div class="footer">
    <div class="left">
        <p class="thanks">该博客技术栈:</p>
        <p class="tags">
            <span class="green">nginx</span>
            <span class="red">vue</span>
            <span class="blue">element-plus</span>
            <span class="green">gin</span>
            <span class="blue">gorm</span>
            <!-- <span class="red">docker</span> -->
            <span class="green">mysql</span>
            <!-- <span class="red">redis</span> -->
            <!-- <span class="blue">kafka</span> -->
        </p>
        <p>建站日期：2022/4/17</p>
        <p class="version">
        <span class="vleft">version</span>
        <span class="vright">0.1.1</span>
        </p>


    </div>
    <div class="right">
        <p>联系人信息</p>
        <div>
               <el-popover placement="top" :width="180" trigger="hover">
                <template #reference>
                <i class="icofont-email icon"></i>
                </template>
                <span style="font-size:20px">1315909600@qq.com</span>
            </el-popover>

            <el-popover placement="top" :width="200" trigger="hover">
                <template #reference>
                <i class="icofont-wechat icon"></i>
                </template>
                <img src="../assets/wechat.jpg" style="width:200px;">
            </el-popover>

            <el-popover placement="top" width="300" trigger="hover">
                <template #reference>
                <i class="icofont-github icon"></i>
                </template>
                <span style="font-size:20px">https://github.com/xiangxinyueban</span>
            </el-popover>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'FooterView',
    data() {
        return {
        }
    },
}
</script>

<style lang="less" scoped>
.icon{
    color:#31C754;
    font-size:30px;
}

.icon:hover{
    color:#00C3DA;
}


.footer {
    border-top: 3px solid #00C3DA;
    border-radius: 1%;
    width:100%;
    justify-content: center;
    align-items: center;
    display: flex;
    .left{
        line-height: 0px;
        width: 50%;
        justify-content: center;
        flex-direction: column;
        display: flex;
        align-items: center;
        .tags{
            color:white;
            span{
                margin-left: 4px;
                padding:4px;
                border-radius: 4px;

            }
            .green{
                background-color: #31C754;
            }
            .blue{
                background-color: #E19F23;
            }
            .red{
                background-color: #007EC6;
            }

        }
    }
    .right{
        width: 50%;
        line-height:10px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        div{
            width:20%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        img{
            width:30px;
        }
        // p {
        //     display: flex;
        //     justify-content: space-evenly;
        //     align-items: center;
        // }

    }
}

.thanks{
    font-size: 20px;
    color:#00C3DA;
}

.version{
    color:white;
    .vleft{
        padding:4px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        background-color: #FF9800;
    }
    .vright{
        padding:4px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        background-color: #2DBE60;
    }
}


</style>