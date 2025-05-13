<template>
  <div class="bg-[url(@/assets/background.jpeg)] bg-center">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-4 col-start-2">
        <div class="flex items-center min-h-screen">
          <div
            class="bg-orange-900/90 p-5 rounded-2xl border-2 w-full flex flex-col items-center"
          >
            <span class="text-3xl">¡Se viene!</span>
            <img src="@/assets/doom_logo.png" class="my-5 h-[200px]" />
            <hr class="w-full" />
            <span class="text-3xl mt-5">Faltan:</span>
            <span class="text-4xl mt-4 text-center">{{ difference }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="relative bg-[url('@/assets/background.jpeg')] bg-center bg-cover">
    <div class="absolute inset-0 bg-black/80 backdrop-blur-[1px]"></div>

    <div class="relative z-10 grid grid-cols-6 gap-4 min-h-screen items-center">
      <div class="col-span-4 col-start-2">
        <div
          class="bg-gradient-to-b from-orange-800/90 to-red-900/80 text-white p-8 rounded-2xl border-4 border-red-700 shadow-lg shadow-red-800/60 w-full flex flex-col items-center font-doomish"
        >
          <span class="text-4xl tracking-wide text-lime-300 drop-shadow-md"
            >¡Se viene!</span
          >
          <img src="@/assets/doom_logo.png" class="my-5 h-[200px]" />
          <hr class="border-lime-400 w-1/2 my-4" />
          <div class="text-3xl mt-2 text-yellow-300 animate-pulse">Faltan</div>
          <div class="text-2xl font-mono mt-2 tracking-widest text-white">
            {{ '01 Dias XX:XX:XX' }}
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { useCountDownStore } from '@/stores/useCountDownStore'
import { onMounted, ref } from 'vue'

const countdownStore = useCountDownStore()

const difference = ref('')

const countdown = () => {
  setInterval(() => {
    difference.value = countdownStore.getDifference()
    console.log(countdownStore.getDifference())
  }, 1000)

  // return difference
}

onMounted(() => {
  countdown()
})
</script>
