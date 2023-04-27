import { ref, watch } from 'vue'

const modeLocal = localStorage.getItem('darkmode')
export const mode = ref(modeLocal == null ? false : JSON.parse(modeLocal))

export const toggleMode = () => mode.value = !mode.value

const setMode = (value) => {
  localStorage.setItem('darkmode', JSON.stringify(value))

  if(value) {
    document.body.classList.add('darkmode')
    document.body.classList.remove('lightmode')
  } else {
    document.body.classList.add('lightmode')
    document.body.classList.remove('darkmode')
  }
}

setMode(mode.value)
watch(mode, (value) => setMode(value))
