import { ref, watch } from 'vue'

const namePack = 'darkmode'
const modeLocal = localStorage.getItem(namePack)
export const mode = ref(modeLocal == null ? false : JSON.parse(modeLocal))
export const toggleMode = () => mode.value = !mode.value

const setMode = (value) => {
  const bodyClass = document.body.classList
  localStorage.setItem(namePack, JSON.stringify(value))
  value ? bodyClass.add(namePack) : bodyClass.remove(namePack)
}

setMode(mode.value)
watch(mode, (value) => setMode(value))
