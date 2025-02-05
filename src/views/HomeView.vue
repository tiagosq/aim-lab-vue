<script setup lang="ts"></script>

<template>
  <main class="flex flex-col gap-2 justify-center items-center">
    <h1 class="text-5xl text-white">Aim Lab</h1>
    <p>A cheap version to practice some Vue3</p>
    <div class="flex flex-col gap-2 justify-center items-center">
      <RouterLink to="/game" class="text-blue-500">Start the Game</RouterLink>
      <RouterLink to="/about" class="text-blue-500">About</RouterLink>
    </div>
  </main>
</template>
