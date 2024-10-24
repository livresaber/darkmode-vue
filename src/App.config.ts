import pkg from '../package.json';
const appVersion = pkg.version;
const vueVersion = pkg.dependencies.vue.replace('^', '');

export const configApp = {
  name: 'darkmode-vue',
  npm: 'https://www.npmjs.com/package/darkmode-vue',
  github: 'https://github.com/livresaber/darkmode-vue',
  appVersion,
  vueVersion,
  stepsInstall: [
    {
      name: 'Install',
      language: 'bash',
      content: 'npm install darkmode-vue',
    },
    {
      name: 'Usage',
      language: 'tsx',
      content: `import DarkModeVue from 'darkmode-vue'

<DarkModeVue />`,
    },
  ],
}
