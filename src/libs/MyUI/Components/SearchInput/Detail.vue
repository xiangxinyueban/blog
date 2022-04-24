<template>
    <div class="subdetail">
        <search-history></search-history>
        <hot-search></hot-search>
    </div>
</template>

<script>
import SearchHistory from './SearchHistory';
import HotSearch from './HotSearch';
export default {
    name:"Detail",
    components:{
      SearchHistory,
      HotSearch
    },
    setup() {

    },
}
</script>

<style lang="less" scoped>
.subdetail{
    display: none;
    background-color: #f9f9f9;
    position:absolute;
    z-index: 101;
    width: 500px;

}
</style>