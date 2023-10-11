<template>

<HeaderBar></HeaderBar>
<MarkdownReview :content="content"></MarkdownReview>
</template>

<script setup>
    import MarkdownReview from "../components/MarkdownReview.vue";
    import HeaderBar from "@/components/HeaderBar.vue";
    import {userRoute} from 'vue-router'
    import {ref} from "vue";
    import service from "@/utils/service"
    
    const router = userRoute()
    const article_id = router.query.article_id
    const content = ref(``)
    service.get(`/articles/${article_id}`).then(res => {
        console.log(res)
        content.value = res.data.content
    }).catch(err => {
        console.log(err)
    })
    
</script>

<style scoped> 

</style>