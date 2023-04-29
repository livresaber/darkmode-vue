import { toggleMode, mode } from './store'
import DarkModeVue from './components/DarkMode.vue'

export const useDarkModeVue = () => ({
  toggleMode,
  mode
})

export default DarkModeVue
