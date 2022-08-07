<template>
<div class="container">
    <el-input></el-input>    
    <el-button @click="add">add</el-button>
    <div v-for="(item, index) in historys" style="display:flex;width: 100%;" :key="index">
        {{item}}
    </div>
</div>
</template>
<script>
import { onMounted, onUnmounted, computed, reactive, ref} from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
export default {
    name: 'News',
    setup(){
        // data
        let historys = reactive([1,2,3,4,5])
        const increase = [5,6,7,8,9]
        // function
        
        // mounted
        onMounted(() => {

        });
        const add = ()=> {
            for (var i=0; i<increase.length;i++){
                // historys.push(increase[i])
                historys.splice(0,0,increase[i])
            }
            console.log("add",historys)
        }
        // unmounted
        onUnmounted(() => {

        });
        
        // render
        return {
            add,
            historys
        };
   }
}
</script>
<style lang="less" scoped>

.container{
    border: 1px solid goldenrod;
}

</style>