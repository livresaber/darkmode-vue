import { ref, watch } from 'vue'

const modeLocal = localStorage.getItem('darkmode')
export const mode = ref(modeLocal == null ? false : JSON.parse(modeLocal))
export const toggleMode = () => mode.value = !mode.value

const setMode = (value) => {
  localStorage.setItem('darkmode', JSON.stringify(value))
  document.body.classList.toggle('darkmode')
}

setMode(mode.value)
watch(mode, (value) => setMode(value))
