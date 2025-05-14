<template>
  <div class="bg-[url(@/assets/background.jpeg)] bg-center">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-4 col-start-2">
        <div class="flex items-center min-h-screen">
          <div
            class="bg-orange-900/90 p-5 rounded-2xl border-2 w-full flex flex-col items-center"
          >
            <span v-if="!isLaunched" class="text-3xl">¡Se viene!</span>
            <img src="@/assets/doom_logo.png" class="my-5 h-[200px]" />
            <hr class="w-full" />
            <template v-if="!isLaunched">
              <span class="text-3xl mt-5">Faltan:</span>
              <span class="text-4xl mt-4 text-center">{{ difference }}</span>
            </template>
            <template v-else>
              <span class="text-3xl mt-5">¡¡¡Ya esta aca!!!</span>
              <span class="text-4xl mt-4 text-center">
                ¿Qué haces que no estas jugando?
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountDownStore } from '@/stores/useCountDownStore'
import { onMounted, ref } from 'vue'

const countdownStore = useCountDownStore()

const difference = ref('')
const isLaunched = ref<boolean>(false)

const countdown = () => {
  setInterval(() => {
    difference.value = countdownStore.getDifference()

    isLaunched.value = countdownStore.isLaunched
  }, 1000)
}

onMounted(() => {
  countdown()
})
</script>
