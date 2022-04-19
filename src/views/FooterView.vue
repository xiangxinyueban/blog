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
        <p>贡献者信息</p>
        <el-form label-width="80px">
            <el-form-item label="!!! :">
                <div class="content">
                    <el-popover placement="top" :width="180" trigger="hover">
                    <template #reference>
                    <i class="icofont-email icon"></i>
                    </template>
                    <span style="font-size:20px">wangshoujunnew@163.com</span>
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
            </el-form-item>
            <el-form-item label="相心月半 :">
                <div class="content">
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

            </el-form-item>
        </el-form>

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
        .content{
            // width:100%;
            min-width: 120px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // background-color: #E19F23;
        }

        /deep/ .el-form-item {
            margin-bottom: 2px;
        }
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