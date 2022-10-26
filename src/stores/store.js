import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const store = ref({ darkmode: true })
  const toggleDarkMode = () => { store.darkmode = !store.darkmode }

  return { store, toggleDarkMode }
})
