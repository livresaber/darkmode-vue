<script setup>
import pkg from '../package.json';
import DarkModeVue from 'darkmode-vue';
import CodeComponent from './components/CodeComponent.vue';

const appVersion = pkg.version;
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="200" height="200" />
    <h1><a href='https://github.com/livresaber/darkmode-vue' target='_blank'>darkmode-vue@{{ appVersion }}</a></h1>
  </header>
  <main>
    <h2>Install</h2>
    <CodeComponent>
      npm install darkmode-vue
    </CodeComponent>
    <h2>Usage</h2>
    <CodeComponent>
      import DarkModeVue from 'darkmode-vue'
      <br>
      {{`<DarkModeVue />`}}
    </CodeComponent>
    <CodeComponent :disableCopy="true">
      <DarkModeVue />
    </CodeComponent>
    <h2>Prop hiddenLabel</h2>
    <CodeComponent>
      {{`<DarkModeVue :hiddenLabel="true" />`}}
    </CodeComponent>
    <CodeComponent :disableCopy="true">
      <DarkModeVue :hiddenLabel="true" />
    </CodeComponent>
    <h2>Prop hiddenIcon</h2>
    <CodeComponent>
      {{`<DarkModeVue :hiddenIcon="true" />`}}
    </CodeComponent>
    <CodeComponent :disableCopy="true">
      <DarkModeVue :hiddenIcon="true" />
    </CodeComponent>
    <h2>Style modification and usage in your styles</h2>
    <CodeComponent>
      {{`body {
  --dm-color-primary: #41b883;
  --dm-color-secondary: #34495e;
  --dm-color-text: #222;
  --dm-color-background: #fff;
}

body.darkmode {
  --dm-color-text: #fff;
  --dm-color-background: #222;
}

body.lightmode .teste {
  background: #f00;
}`}}
    </CodeComponent>
    <p>Create your variable colors and update this with class .lightmode or .darkmode.</p>
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
