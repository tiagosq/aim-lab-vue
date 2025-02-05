<script setup lang="ts">
import { computed } from 'vue'
import { useScoreStore } from '@/stores/score'
const scoreStore = useScoreStore()

const percentage = computed(() => (scoreStore.timer * 100) / scoreStore.MAX_TIMER)
</script>
<template>
  <div class="w-full bg-gray-300">
    <div
      :class="percentage > 25 ? 'bg-green-500' : 'bg-red-500'"
      class="h-2 bg-green-500 transition-all duration-[1s] linear"
      :style="{ width: `${percentage}%` }"
    ></div>
  </div>
</template>
