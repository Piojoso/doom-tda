import { defineStore } from 'pinia'

export const useCountDownStore = defineStore('countdown', () => {
  const launchDate = new Date(Date.UTC(2025, 4, 15, 0, 0, 0))

  const localDate = new Date()

  const getDifference = () => {
    const diffMs = launchDate.getTime() - new Date().getTime()

    // Calcular tiempo restante
    const totalSeconds = Math.floor(diffMs / 1000)
    const days = Math.floor(totalSeconds / (3600 * 24))
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    // Mostrar resultado
    return `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos.`
  }

  return {
    // props
    launchDate,
    localDate,

    // actions
    getDifference,
  }
})
