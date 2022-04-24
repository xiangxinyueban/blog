<template>
    <div class="input-container">
        <input
            type = "text"
            class="input"
            :placeholder="placeholder"
        />
    <span class="suffix icofont-search"></span>
    </div>

</template>

<script>
export default {
    name: 'MyInput',
    props:{
        placeholder:{
            type:String,
            default: "请输入"
        }
    },
    setup() {


    },
}
</script>

<style lang="less" scoped>
.input-container{
    position: relative;
    width:500px;
    height:100%;
    // line-height: 40px;
    display: flex;
    justify-content: space-around;
    align-items:center;
    box-sizing:border-box;
    background-color:#ddd;
    padding:2px;
    border-radius:4px;
    .input {
        // position: fixed;
        width:90%;
        height:30px;
        margin: 4px 0;
        padding: 0  20px 0 8px;
        box-sizing: border-box;
        border: 0px;
        border-radius: 6px;
        display: inline-flex;
        &:focus{
            outline:none;
            border:0px solid #395be5;
        }
    }
    .suffix{
        color: #555;
        margin-right:8px;
    }
}
</style>