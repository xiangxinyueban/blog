<template>
    <div class="container" v-focus>
        <my-input :placeholder="placeholder"></my-input>
        <detail></detail>
    </div>

</template>

<script>
import MyInput from './MyInput.vue';
import focus from '../../directives/focus.js';
import Detail from './Detail.vue'
export default {
    directives:{
        focus
    },
  components: {
      MyInput,
      Detail
    },
    name: 'SearchInput',
    props:{
        placeholder:{
            type:String,
            default: "热门开发博客"
        }
    },
    setup() {

    },
}
</script>

<style lang="less" scoped>
</style>