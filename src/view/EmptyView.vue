<template>

<HeaderBar></HeaderBar>
<MarkdownReview :content="content"></MarkdownReview>
</template>

<script setup>
    import MarkdownReview from "../components/MarkdownReview.vue";
    import HeaderBar from "@/components/HeaderBar.vue";
    import {ref} from "vue";
    const content = ref(`## Hello World18\r# Hello World17\r# Hello World16\r# Hello World15\r# Hello World14\r# Hello World13\r# Hello World12\r# Hello World11\r# Hello World10\r# Hello World9\rHello World8\r# Hello World7\r#Hello World6\r# Hello World5\r# Hello World4\r# Hello World3\r# Hello World2\r# Hello World1\r# Hello World`)
    
</script>

<style scoped> 

</style>