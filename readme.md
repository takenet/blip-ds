![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)    ![npm version](https://img.shields.io/npm/v/blip-ds)    ![npm bundle size min](https://img.shields.io/bundlephobia/min/blip-ds)    ![npm bundle size mingzip](https://img.shields.io/bundlephobia/minzip/blip-ds) 


# BliP DS 

This project was born based on the need to create a Design System to be used within Take. The components are written in Web Components using the StencilJS library created by the Ionic team.

This project was created using [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter).

## Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Installation

Blip-DS is available as an npm package.

```bash
npm i blip-ds
```

## Style Tokens

Some SCSS Tokens have been defined within the Design System. Currently we have: colors, fonts and zindex.

To make these scss files available, the outputTargets.copy property was configured inside stencil.config.ts, in which after build it is exported to the dist / collection / styles destination.

### How to use

@import "~blip-ds/dist/collection/styles/_colors.scss";

## Framework Integrations

There is not much secret, if you need something more detailed I recommend reading the [documentação do StencilJS](https://stenciljs.com/docs/overview).

### Angular

File: main.ts
```typescript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Note: loader import location set using "esmLoaderPath" within the output target confg
import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
applyPolyfills().then(() => {
  defineCustomElements(window)
})
```


File: app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
```

**Examples**

File: app.component.html
```html
<div>
  <div class="container-count">
    <bds-typo variant="fs-16">{{ count }}</bds-typo>
    <bds-button (click)="addCount()">+</bds-button>
    <bds-button (click)="subCount()">-</bds-button>
    <bds-input value={{count}} (bdsChange)="onChange($event)"></bds-input>
  </div>
</div>
```

File: app.component.ts
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;

  addCount() {
    this.count++;
  }

  subCount() {
    this.count--;
  }

  onChange(event) {
    this.count = event.target.value;
  }
}

```

### React

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';

ReactDOM.render(<App />, document.getElementById('root'));

applyPolyfills().then(() => {
    defineCustomElements(window);
});
```

**Examples**

React has a big problem working with web components, as properties and events are not handled correctly. The solution to these two problems is to create a web component wrapper with a React component, and thus using the Ref of the custom element. As in the example below:

```jsx
const InputExample = ({ onInput, onChange, value }) => {
  const elementRf = useRef(null);

  useEffect(() => {
    elementRf.current.value = value;
    elementRf.current.addEventListener('bdsChange', (event) => {
      onChange(event);
    });

    elementRf.current.addEventListener('bdsInput', (event) => {
      console.log('bdsInput', { event })
    });
  }, [value, onChange, onInput]);

  return <bds-input ref={elementRf} value={value}></bds-input>

}
```

Here we create a functional component named InputExample to be the wrapper for the Custom Element bds-input.

```jsx
function CountBlipDS() {
  const [count, changeCount] = useState(0);

  return (
    <div>
      <p> {count} </p>
      <InputExample value={count} onChange={(event) => { changeCount(event.target.value) }}></InputExample>
    </div>
  );
}
```

### Vue

```javascript
import Vue from 'vue'
import { applyPolyfills, defineCustomElements } from 'blip-ds/loader';

import App from './App.vue'


Vue.config.productionTip = false

Vue.config.ignoredElements = [/bds-\w*/];

applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: h => h(App),
}).$mount('#app')
```

The components should then be available in any of the Vue components


**Examples**

```vue
<template>
  <div id="app">
    {{ count }}
    <bds-button v-on:click="count++">+</bds-button>
    <bds-button v-on:click="count--">-</bds-button>
    <bds-input v-bind:value="count" v-on:bdsChange="change"></bds-input>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data: function() {
    return {
      count: 0
    };
  },
  methods: {
    change(event) {
      this.count = event.target.value;
    }
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>

}
```


## Building 


### Getting Started

To start building a new web component:

Run:

```bash
npm install
npm start
```

Run with Storybook

```bash
npm story 
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Create component:


```bash
npm run generate
```

## License

`blip-ds` is under the [ISC license](https://opensource.org/licenses/ISC).
