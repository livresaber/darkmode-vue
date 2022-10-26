<script setup>
import { ref, watch } from 'vue'

const darkmode = ref(false);

const changeDarkMode = () => darkmode.value = !darkmode.value

const setStyleVariables = (objectVariables) => {
  for(let { name, value } of objectVariables) {
    document.documentElement.style.setProperty(name, value);
  }
}


watch(darkmode, async (value) => {
  localStorage.setItem('DarkMode', JSON.stringify(value))

  if (value) {
    document.body.classList.remove('theme-light')
    document.body.classList.add('theme-dark')

    setStyleVariables([
      { name: '--color-text',       value: '#000'    },
      { name: '--color-background', value: '#fff'    },
      { name: '--color-primary',    value: '#41b883' },
      { name: '--color-secondary',  value: '#34495e' }
    ])
  } else {
    document.body.classList.remove('theme-dark')
    document.body.classList.add('theme-light')

    setStyleVariables([
      { name: '--color-text',       value: '#fff'    },
      { name: '--color-background', value: '#000'    },
      { name: '--color-primary',    value: '#41b883' },
      { name: '--color-secondary',  value: '#34495e' },
    ])
  }
})
</script>

<template>
  <button
    class="darkmode"
    type="button"
    @click="changeDarkMode"
  >
    {{ darkmode ? 'LightMode' : 'DarkMode' }}
  </button>
</template>

<style>
.darkmode {
  background: var(--color-primary);
  color: var(--color-text);
  padding: 1rem;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
}
</style>
