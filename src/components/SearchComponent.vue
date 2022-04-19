<template>

    <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearch"
        popper-class="my-autocomplete"
        placeholder="Please input"
        @select="handleSelect"
    >
   <template #suffix>
      <el-icon class="el-input__icon" @click="handleIconClick">
        <i class="icofont-search"></i>
      </el-icon>
    </template>
  </el-autocomplete>

    <div class="searchInfo">
     <el-input
      v-model="searchMsg"
      class="searchInput"
      placeholder="请输入搜索内容"
      @focus="handleFocus()"
      @input="handleInputChange()"
      @keyup.enter="handleSubmit()"
    >
    <template #suffix>
      <el-icon class="el-input__icon" @click="handleIconClick">
        <i class="icofont-search"></i>
      </el-icon>
    </template>
    </el-input>
    <div class="sublist" style="z-index:1;"><p>sublist</p></div>
</div>

</template>

<script>
// import { Search } from 'element-plus/icons-vue'
export default {
    name:"SearchComponent",
    methods:{
        handleFocus() {
            // alert("focused")
        }
    }
}
</script>

<style lang="less" scoped>
/deep/ .el-input {
    --el-input-text-color: var(--el-text-color-regular);
    --el-input-border-color: #4E6EF2;
    --el-input-border-radius: 6px;
    --el-input-focus-border-color: #4E6EF2;
    position: relative;
    font-size: var(--el-font-size-base);
    display: inline-flex;
    width: 100%;
    line-height: 32px;
    .el-input__inner{
        box-shadow: 0 0 0 2px #4E6EF2;
    }
    .el-input__inner:focus{
        box-shadow: 0 0 0 2px #4E6EF2;
        border-radius: 6px 6px 0 0;
    }
}


</style>