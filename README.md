# darkmode-vue

A component darkmode injection in your document page with vue.js

<img alt="A component darkmode screenshot using in a application real" width="100%" src="https://raw.githubusercontent.com/livresaber/darkmode-vue/master/public/screen-darkmode-vue.png" />

Install
```js
npm install --save darkmode-vue
```

Usage basic
```vue
import DarkModeVue from 'darkmode-vue';

<DarkModeVue />
```

Prop hiddenLabel
```vue
<DarkModeVue :hiddenLabel="true" />
```

Prop hiddenIcon
```vue
<DarkModeVue :hiddenIcon="true" />
```

Style modification and usage in your styles
```css
body {
  --dm-color-primary: #41b883;
  --dm-color-secondary: #34495e;
}

body.lightmode {
  --dm-color-text: #222;
  --dm-color-background: #fff;
}

body.darkmode {
  --dm-color-text: #fff;
  --dm-color-background: #222;
}

body.lightmode .teste {
  background: #f00;
}
```
Create your variable colors and update this with class .lightmode or .darkmode.

### Description class of components
If DarkModeVue usage in a page, a class in body document is update with class darkmode or lightmode.
In LocalStorage is created a key store with value current mode.
Do you usage children body.darkmode or body.lightmode styles for your application.
I recomend create a variables colors in css and update this with toggle class of body document.
