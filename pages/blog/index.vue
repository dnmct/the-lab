<script setup lang="ts">
const { data: blogPostList } = await useAsyncData('blogPostList', () => {
  return queryContent('/blog').find()
})
</script>

<template>
  <ul>
    <li v-for="blogPost in blogPostList" :key="blogPost._path">
      <NuxtLink :to="blogPost._path">
        <h2>{{ blogPost.title }}</h2>
        <p>{{ blogPost.author }}</p>
      </NuxtLink>
    </li>
  </ul>
</template>
