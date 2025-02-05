import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', () => {
  const MAX_TIMER = 30
  const score = ref(0)
  const timer = ref(30)
  const highScore = ref(
    localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')!) : 0,
  )
  const timerCounter = ref<number>(0)

  const setTimer = () => {
    if (timerCounter.value !== null) {
      clearInterval(timerCounter.value)
    }
    timerCounter.value = setInterval(() => {
      timer.value--
      if (timer.value === 0) {
        clearInterval(timerCounter.value)
      }
    }, 1000)
  }

  const resetGame = () => {
    if (timerCounter.value !== null) {
      clearInterval(timerCounter.value)
    }
    score.value = 0
    timer.value = MAX_TIMER
    setTimer()
  }

  const incrementScore = () => {
    score.value += timer.value * 5
    timer.value = timer.value + 5 > MAX_TIMER ? MAX_TIMER : timer.value + 5

    if (score.value > highScore.value) {
      highScore.value = score.value
      localStorage.setItem('highScore', highScore.value.toString())
    }
  }

  setTimer()

  return { score, timer, highScore, incrementScore, resetGame, MAX_TIMER }
})
