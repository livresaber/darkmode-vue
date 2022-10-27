import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useMode = defineStore('storeMode', () => {
  const darkmode = ref(false)
  const toggleMode = () => darkmode.value = !darkmode.value
  const setStyleVariables = (objectVariables) => {
    for(let { name, value } of objectVariables) {
      document.documentElement.style.setProperty(name, value)
    }
  }

  const setMode = (status) => {
    if (status) {
      document.body.classList.remove('lightmode')
      document.body.classList.add('darkmode')
      setStyleVariables([
        { name: '--color-text',       value: '#ffffff' },
        { name: '--color-background', value: '#222222' },
        { name: '--color-primary',    value: '#41b883' },
        { name: '--color-secondary',  value: '#34495e' },
      ])
    } else {
      document.body.classList.remove('darkmode')
      document.body.classList.add('lightmode')
      setStyleVariables([
        { name: '--color-text',       value: '#222222' },
        { name: '--color-background', value: '#ffffff' },
        { name: '--color-primary',    value: '#41b883' },
        { name: '--color-secondary',  value: '#34495e' }
      ])
    }
  }

  watch(darkmode, (value) => {
    setMode(value)
    localStorage.setItem('darkmode', JSON.stringify(value))
  })

  return { darkmode, toggleMode, setStyleVariables }
})
