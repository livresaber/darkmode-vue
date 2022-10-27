<script setup>
import pkg from '../package.json'
import DarkMode from '@/components/DarkMode.vue'

const appVersion = pkg.version
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="200" height="200" />
  </header>
  <main>
    <DarkMode />
  </main>
  <footer>
    <a href='https://github.com/livresaber/darkmode-vue' target='_blank'>Version {{appVersion}} @LivreSaber</a>
  </footer>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

header {
  display: flex;
  place-items: center;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main h1 {
  margin-bottom: 1rem;
}

footer {
  margin-top: 2rem;
}
</style>
