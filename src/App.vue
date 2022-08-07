<template>
<el-scrollbar>
  <div id="app">
    <router-view></router-view>
  </div>
</el-scrollbar>
</template>

<style lang="less">
// ::-webkit-scrollbar {
//   display: none;    
// 	// width: 8px;
// }

* {
    scrollbar-color: var(--el-scrollbar-bg-color) var(--el-fill-color-light);
}
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-thumb {
    background-color: #0003;
    border-radius: 10px;
    transition: all .2s ease-in-out;
}

::-webkit-scrollbar-track {
    border-radius: 10px;
}
// ::-webkit-scrollbar-thumb {
    
// 	background-color: #eaecf1;
// 	border-radius: 3px;
// }
// /*表格*/
// .el-table__body-wrapper::-webkit-scrollbar {
    
// 	width: 10px;
// 	height: 10px;
// }
// .el-table__body-wrapper::-webkit-scrollbar-thumb {
    
// 	background-color: #a1a3a9;
// 	border-radius: 3px;
// }
</style>