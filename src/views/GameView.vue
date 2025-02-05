<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue'
import { useScoreStore } from '@/stores/score'

const scoreStore = useScoreStore()

const onClick = (event) => {
  scoreStore.incrementScore()
  event.target.style.top = `${Math.random() * 90}%`
  event.target.style.left = `${Math.random() * 90}%`
}
</script>

<template>
  <div class="w-full h-screen flex flex-col bg-gray-800">
    <HeaderComponent />
    <div class="flex justify-center items-center grow p-5 relative">
      <div
        v-if="scoreStore.timer > 0"
        class="ball w-12 h-12 rounded-full bg-green-600 absolute transition-all duration-500"
        @click="onClick"
      ></div>
      <div v-else class="flex flex-col gap-2 justify-center items-center">
        <h1 class="text-5xl text-white">Game Over</h1>
        <p class="text-white font-bold text-xl">{{ scoreStore.score }}</p>
        <button
          @click="scoreStore.resetTimer"
          class="p-2 px-4 rounded bg-green-700 text-white hover:bg-green-600 transition-all duration-300 cursor-pointer"
        >
          Play Again
        </button>
      </div>
    </div>
  </div>
</template>
