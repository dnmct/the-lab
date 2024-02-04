<template>
  <div>
    <div class="py-24 sm:py-32 md:py-40">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
        <div class="text-center">
          <div class="mb-10">
            <NuxtLink to="/about">
              <UBadge variant="subtle" size="lg" class="rounded-full">
                New Article coming soon
                <UIcon name="i-heroicons-arrow-top-right-on-square-20-solid" class="ml-1 h-4 w-4" />
              </UBadge>
            </NuxtLink>
          </div>
          <h1 class="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Welcome to my lab
          </h1>
          <p class="mt-6 text-lg tracking-tight text-gray-300">
            My name is Dan I like to build, I like to write. Can you find all the goodies?
          </p>
        </div>
      </div>
    </div>
    <UContainer>
      <div class="ring-1 bg-white/5 ring-inset ring-white/10 rounded-xl p-4">
        <div class="aspect-video rounded-lg border border-dashed border-white/10 relative h-96">
          <svg class="absolute inset-0 h-full w-full stroke-gray-900/10 dark:stroke-white/10" fill="none"><defs><pattern
            id="pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          ><path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" /></pattern></defs><rect stroke="none" fill="url(#pattern-5c1e4f0e-62d5-498b-8ff0-cf77bb448c8e)" width="100%" height="100%" /></svg>
        </div>
      </div>
    </UContainer>
  </div>
</template>
<script setup lang="ts">
</script>
