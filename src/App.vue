<script setup>
import DarkMode from '@/components/DarkMode.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <h1>DarkMode</h1>
    <DarkMode />
  </main>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto;
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
</style>
