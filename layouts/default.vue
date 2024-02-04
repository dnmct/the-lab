<script setup>
import MyHeader from '~/components/my-header.vue'
</script>

<template>
  <div>
    <MyHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
