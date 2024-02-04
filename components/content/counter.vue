<script setup lang="ts">
const currentCount = ref(0);

const incrementCount = () => {
  currentCount.value++;
};
</script>

<template>
  <div>
    <p>Current count: {{ currentCount }}</p>
    <button @click="incrementCount">Add 1</button>
  </div>
</template>
