<script setup>
import pkg from '../package.json'
import DarkModeVue from 'darkmode-vue'

const appVersion = pkg.version
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="200" height="200" />
    <h1><a href='https://github.com/livresaber/darkmode-vue' target='_blank'>darkmode-vue@{{ appVersion }}</a></h1>
  </header>
  <main>
    <h2>Install</h2>
    <code class="code">
      npm install darkmode-vue
    </code>
    <h2>Usage</h2>
    <code class="code">
      import DarkModeVue from 'darkmode-vue'
      <br>
      {{`<DarkModeVue />`}}
    </code>
    <code>
      <DarkModeVue />
    </code>
    <h2>Prop hiddenLabel</h2>
    <code class="code">
      {{`<DarkModeVue :hiddenLabel="true" />`}}
    </code>
    <code>
      <DarkModeVue :hiddenLabel="true" />
    </code>
    <h2>Prop hiddenIcon</h2>
    <code class="code">
      {{`<DarkModeVue :hiddenIcon="true" />`}}
    </code>
    <code>
      <DarkModeVue :hiddenIcon="true" />
    </code>
    <h3>Description class of components</h3>
    <p>If DarkModeVue usage in a page, a class in body document is update with darkmode or lightmode.</p>
    <p>In LocalStorage is created a key store with value current mode.</p>
    <p>Do you usage children body.darkmode or body.lightmode styles for your application.</p>
    <p>I recomend create a variables colors in css and update this with toggle class of body document.</p>
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

h2, h3 {
  margin-top: 2rem;
}

code {
  padding: 1rem;
  margin-top: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

code.code:hover {
  background: #000;
}

header {
  display: flex;
  place-items: center;
  flex-direction: column;
  padding: 1rem;
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
  padding: 2rem;
}
</style>
