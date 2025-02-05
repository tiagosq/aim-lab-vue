<template>
  <main class="flex flex-col gap-4 justify-center items-center bg-gray-800 text-white h-screen">
    <h1 class="text-8xl italic">Aim Lab Vue</h1>
    <p>A cheap version to practice some Vue3</p>
    <div class="flex flex-col gap-2 justify-center items-center">
      <RouterLink
        to="/game"
        class="p-2 px-4 rounded bg-green-700 text-white hover:bg-green-600 transition-all duration-300 cursor-pointer"
        >Start the Game</RouterLink
      >
    </div>
  </main>
</template>
