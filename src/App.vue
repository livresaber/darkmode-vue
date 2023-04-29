<script setup>
import pkg from '../package.json';
import DarkModeVue, { useDarkModeVue } from 'darkmode-vue';
import CodeComponent from './components/CodeComponent.vue';

const appVersion = pkg.version;
const { mode, toggleMode } = useDarkModeVue()
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

    <h2>Prop labelDark and labelLight</h2>
    <CodeComponent>
      {{`<DarkModeVue
  labelDark="Tema escuro"
  labelLight="Tema claro"
/>`}}
    </CodeComponent>
    <CodeComponent :disableCopy="true">
      <DarkModeVue
        labelDark="Tema escuro"
        labelLight="Tema claro"
      />
    </CodeComponent>

    <h2>Slot change icon and label custom</h2>
    <CodeComponent>
      {{`<DarkModeVue>
  <template #iconDark>
    <svg></svg>
  </template>
  <template #iconLight>
    <svg></svg>
  </template>
  <template #labelDark>
    Off
  </template>
  <template #labelLight>
    On
  </template>
</DarkModeVue>`}}
    </CodeComponent>
    <CodeComponent :disableCopy="true">
      <DarkModeVue>
        <template #iconDark>
          <svg viewBox="0 0 24 24" width="30"><path fill="currentColor" d="M12,2C9.76,2 7.78,3.05 6.5,4.68L16.31,14.5C17.94,13.21 19,11.24 19,9A7,7 0 0,0 12,2M3.28,4L2,5.27L5.04,8.3C5,8.53 5,8.76 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H14.73L18.73,22L20,20.72L3.28,4M9,20V21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9Z"></path></svg>
        </template>
        <template #iconLight>
          <svg viewBox="0 0 24 24" width="30"><path fill="currentColor" d="M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63Z"></path></svg>
        </template>
        <template #labelDark>
          Off
        </template>
        <template #labelLight>
          On
        </template>
      </DarkModeVue>
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
}`}}
    </CodeComponent>
    <p>Create your variable colors and update this with class .darkmode.</p>

    <h2>Usage useDarkModeVue with toggleMode and mode value</h2>
    <CodeComponent>
      {{`import { useDarkModeVue } from 'darkmode-vue';

const { mode, toggleMode } = useDarkModeVue();

<button @click="toggleMode">DarkModeVue \{\{ mode \}\}</button>
`}}
    </CodeComponent>

    <button class="btn-custom" @click="toggleMode">DarkModeVue {{ mode }}</button>

    <h3>Description class of components</h3>
    <p>If DarkModeVue usage in a page, a class in body document is update with darkmode.</p>
    <p>In LocalStorage is created a key store with value current mode.</p>
    <p>Do you usage children body.darkmode styles for your application.</p>
    <p>I recommend create a variables colors in css and update this with toggle class of body document.</p>
  </main>
  <footer>
    <a href='https://github.com/livresaber/darkmode-vue' target='_blank'>Version {{appVersion}} @LivreSaber</a>
  </footer>
</template>

<style scoped>

.btn-custom {
  width: 200px;
  padding: 1rem;
  margin: 2rem auto 0;
}
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
