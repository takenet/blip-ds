"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[4506],{"./dist/esm/bds-illustration_2.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bds_illustration:()=>BdsIllustration,bds_skeleton:()=>Skeleton});var _index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-611fd21e.js");const packageJson={name:"blip-ds",version:"0.0.0-development",description:"Blip Design System",main:"./dist/index.cjs.js",module:"./dist/index.js",es2015:"./dist/esm/index.mjs",es2017:"./dist/esm/index.mjs",types:"./dist/types/index.d.ts",collection:"./dist/collection/collection-manifest.json","collection:main":"./dist/collection/index.js",unpkg:"./dist/blip-ds/blip-ds.js",files:["dist/","loader/"],scripts:{generate:"stencil generate",clear:"rimraf  node_modules/ && rimraf  dist/ && rimraf  www/","clear-cypress":"rimraf cypress/assets/ && rimraf cypress/build/ && rimraf cypress/dist/ && rimraf cypress/screenshots/",dev:"npm-run-all --parallel start storybook",start:"stencil build --dev --watch --serve --docs",build:"npm run clear-cypress && npm run build:component","build:component":"stencil build --docs --prod","build:react":"cd ./blip-ds-react && npm install && npm run build",ci:"npm run build && npm run storybook:build && npm run storybook:deploy",test:"stencil test --spec","test:e2e":"stencil test --e2e","test:snapshot":"stencil test --e2e --screenshot","test:watch":"stencil test --spec --watch","test:coverage":"stencil test --spec --e2e --coverage","cypress:open":"cypress open","cypress:test":"npm run build && cypress run --component",storybook:"storybook dev -p 6006","storybook:build":"storybook build -s www","storybook:deploy":"storybook-to-ghpages",eslint:"eslint . --ext .jsx,.ts,.tsx","semantic-release":"semantic-release",commit:"git-cz","build-storybook":"storybook build"},devDependencies:{"@babel/core":"^7.18.2","@stencil/core":"^2.16.1","@stencil/react-output-target":"0.5.3","@stencil/sass":"1.5.2","@storybook/addon-actions":"7.0.22","@storybook/addon-essentials":"^7.0.22","@storybook/addon-interactions":"^7.0.22","@storybook/addon-links":"^7.0.22","@storybook/global":"5.0.0","@storybook/manager-api":"^7.4.1","@storybook/react":"^7.0.22","@storybook/react-webpack5":"^7.0.22","@storybook/storybook-deployer":"^2.8.16","@storybook/testing-library":"^0.2.0","@storybook/theming":"^7.4.1","@types/color":"^3.0.3","@types/jest":"27.5.1","@types/puppeteer":"5.4.6","@types/webpack":"^5.28.0","@typescript-eslint/eslint-plugin":"^5.26.0","@typescript-eslint/parser":"^5.23.0","babel-loader":"^8.2.5","babel-preset-react-app":"^10.0.1",color:"^4.2.3",commitizen:"^4.2.4","copy-webpack-plugin":"^11.0.0",cypress:"^13.15.0","cypress-real-events":"^1.13.0","cypress-wait-until":"^3.0.2","cz-conventional-changelog":"^3.3.0","cz-customizable":"^6.3.0","cz-customizable-ghooks":"^2.0.0",eslint:"^8.57.0","eslint-config-prettier":"^9.1.0","eslint-config-standard-with-typescript":"^16.0.0","eslint-plugin-import":"^2.29.1","eslint-plugin-prettier":"^5.1.3","eslint-plugin-react":"^7.34.1","eslint-plugin-storybook":"^0.8.0",ghooks:"^2.0.4",jest:"27.4.5","jest-cli":"27.4.5","npm-run-all":"^4.1.5",prettier:"^3.2.5",puppeteer:"^14.0.0","react-scripts":"^5.0.1",rimraf:"^6.0.1","semantic-release":"^23.0.8",storybook:"^7.0.22","ts-node":"^10.7.0","types-ramda":"0.29.4",typescript:"^4.7.2"},dependencies:{"@storybook/addon-console":"^2.0.0","@storybook/addon-docs":"^7.6.20",autoprefixer:"^10.4.7","blip-tokens":"^1.91.0",react:"^18.1.0","react-dom":"^18.1.0"},repository:{type:"git",url:"https://github.com/takenet/blip-ds.git"},bugs:{url:"https://github.com/takenet/blip-ds/issues"},homepage:"https://github.com/takenet/blip-ds#readme",config:{commitizen:{path:"./node_modules/cz-customizable"},"cz-customizable":{config:"./.cz-config.js"},ghooks:{"pre-commit":"npm run eslint && npm run cypress:test","pre-push":"npm run eslint","commit-msg":"cz-customizable-ghooks $2"}},browserslist:{production:[">0.2%","not dead","not op_mini all"],development:["last 1 chrome version","last 1 firefox version","last 1 safari version"]},license:"MIT",optionalDependencies:{fsevents:"^2.3.1"}},BdsIllustration=class{constructor(hostRef){(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.setIllustrationContent=()=>{const apiUrl=`https://cdn.jsdelivr.net/npm/blip-tokens@${packageJson.dependencies["blip-tokens"].replace("^","")}/build/json/illustrations/${this.type}/${this.name}.json`;fetch(apiUrl).then((response=>response.json().then((data=>{this.IllustrationContent=data[`asset-${this.type}-${this.name}-svg`]}))))},this.IllustrationContent=void 0,this.type="default",this.name=void 0,this.alt=void 0,this.dataTest=null}componentWillLoad(){this.setIllustrationContent()}render(){return(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.H,{role:"img",class:{"bds-illustration":!0}},this.IllustrationContent?(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("img",{draggable:!1,src:`data:image/svg+xml;base64,${this.IllustrationContent}`,alt:this.alt,"data-test":this.dataTest}):(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"default","data-test":this.dataTest}))}static get assetsDirs(){return["svg"]}};BdsIllustration.style=":host .illustration{display:-ms-flexbox;display:flex;height:100%;width:auto}:host(.bds-illustration) img{width:100%;height:100%}";const Skeleton=class{constructor(hostRef){(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.shape="square",this.height="50px",this.width="100%",this.dataTest=null}render(){return(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.H,{style:{display:"flex",position:"relative",overflow:"hidden",width:this.width,height:this.height,borderRadius:"circle"===this.shape?"50%":"8px"}},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-grid",{xxs:"12",class:{skeleton:!0,[`skeleton_shape--${this.shape}`]:!0}}),(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{style:{display:"flex",width:"100%",height:"100%",position:"absolute",borderRadius:"circle"===this.shape?"50%":"8px",overflow:"hidden"},"data-test":this.dataTest},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"animation"})))}};Skeleton.style=".skeleton{min-width:8px;min-height:8px;background-color:var(--color-content-default, #454545);opacity:0.16;overflow:hidden}.skeleton_shape--circle{border-radius:50%}.skeleton_shape--square{border-radius:8px}.animation{position:absolute;width:100%;height:100%;background:-webkit-gradient(linear, left top, right top, from(rgba(246, 246, 246, 0)), color-stop(50%, rgba(246, 246, 246, 0.56)), to(rgba(246, 246, 246, 0)));background:linear-gradient(90deg, rgba(246, 246, 246, 0) 0%, rgba(246, 246, 246, 0.56) 50%, rgba(246, 246, 246, 0) 100%);mix-blend-mode:overlay;-webkit-animation:2.5s ease-out infinite shine;animation:2.5s ease-out infinite shine}@-webkit-keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes shine{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}20%{-webkit-transform:translateX(100%);transform:translateX(100%)}100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}"}}]);