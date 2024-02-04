<script setup lang="ts">
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<template>
  <div>
    <h1>{{ data?.title }}</h1>
    <ContentDoc />
  </div>
</template>
