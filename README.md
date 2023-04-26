# darkmode-vue

A component darkmode injection in your document page with vue.js

<img alt="A component darkmode screenshot using in a application real" width="100%" src="https://raw.githubusercontent.com/livresaber/darkmode-vue/master/public/screen-darkmode-vue.png" />

Install
```js
npm install darkmode-vue
```

Usage basic
```vue
import VueTechsLogs from 'darkmode-vue';

<Darkmode />
```

Prop hiddenLabel
```vue
<Darkmode :hiddenLabel="true" />
```

Prop hiddenIcon
```vue
<Darkmode :hiddenIcon="true" />
```

### Description class of components
If DarkModeVue usage in a page, a class in body document is update with class darkmode or lightmode.
In LocalStorage is created a key store with value current mode.
Do you usage children body.darkmode or body.lightmode styles for your application.
I recomend create a variables colors in css and update this with toggle class of body document.
