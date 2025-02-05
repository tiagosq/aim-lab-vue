<script setup lang="ts">
import ProgressBarComponent from '@/components/ProgressBarComponent.vue'
import { useScoreStore } from '@/stores/score'
const scoreStore = useScoreStore()
</script>
<template>
  <nav class="flex gap-2 justify-between items-center px-5 py-2 bg-gray-600 text-white">
    <h1 class="text-4xl italic">Aim Lab Vue</h1>
    <div class="text-center">
      <p>Timer</p>
      <p class="text-4xl font-bold">{{ scoreStore.timer }}</p>
    </div>
    <div class="flex gap-4 items-center">
      <div>
        <p><b>Score: </b> {{ scoreStore.score }}</p>
        <p><b>Highest: </b> {{ scoreStore.highScore }}</p>
      </div>
      <button
        @click="scoreStore.resetGame"
        class="p-1 px-2 rounded bg-green-700 text-white hover:bg-green-600 transition-all duration-300 cursor-pointer"
      >
        Play Again
      </button>
    </div>
  </nav>
  <ProgressBarComponent />
</template>
