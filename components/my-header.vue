<script setup lang="ts">
const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' }
]
</script>

<template>
  <header class="bg-background/75 backdrop-blur border-b border-gray-800 sticky top-0 z-50">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-16">
      <div class="lg:flex-1 flex items-center gap-1.5">
        <NuxtLink to="/" class="text-white font-bold text-xl flex items-center gap-1.5">
          <span class="uppercase">dnmct</span>
          <UBadge variant="subtle">
            The Lab
          </UBadge>
        </NuxtLink>
      </div>
      <ul class="lg:flex items-center gap-x-8 hidden">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          active-class="text-primary-400"
          :to="item.path"
          class="font-semibold text-sm/6 hover:text-primary-400"
        >
          {{ item.name }}
        </NuxtLink>
      </ul>
      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <UButton color="gray" size="lg" class="rounded-full">
          Try me!
        </UButton>
      </div>
    </div>
  </header>
</template>
