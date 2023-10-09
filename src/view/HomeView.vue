<template>
  <div class="main">
    <MarkdownReview :content="article"></MarkdownReview>
  </div>
</template>

<script setup>
  import MarkdownReview from "../components/MarkdownReview.vue";
  import {ref} from "vue";

  const article = ref(`# Hello World`)

</script>

<style scoped>

</style>