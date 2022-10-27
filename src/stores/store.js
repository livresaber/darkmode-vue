import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', () => {
  const darkmode = reactive(false)
  const toggleDarkMode = () => {
    darkmode = !darkmode
    console.log('toggleDarkMode')
  }

  return { darkmode, toggleDarkMode }
})
