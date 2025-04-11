"use strict";(self.webpackChunkblip_ds=self.webpackChunkblip_ds||[]).push([[8873],{"./dist/esm/bds-counter-text.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{bds_counter_text:()=>CounterText});var CounterTextState,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/esm/index-611fd21e.js");!function(CounterTextState){CounterTextState.Default="default",CounterTextState.Warning="warning",CounterTextState.Delete="delete"}(CounterTextState||(CounterTextState={}));const CounterText=class{constructor(hostRef){(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.length=void 0,this.max=void 0,this.active=!1,this.warning={max:20,min:2},this.delete={max:1,min:0}}getState(){const actualLength=this.getActualLength();return actualLength>=this.warning.min&&actualLength<=this.warning.max?CounterTextState.Warning:actualLength<=this.delete.max?CounterTextState.Delete:CounterTextState.Default}getActualLength(){return this.max-this.length}render(){const state=this.getState(),actualLength=this.getActualLength();return(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{"counter-text":!0,"counter-text--active":this.active,[`counter-text--${state}`]:!0}},(0,_index_611fd21e_js__WEBPACK_IMPORTED_MODULE_0__.h)("bds-typo",{variant:"fs-10"},actualLength))}};CounterText.style=".counter-text{background:var(--color-surface-2, #e0e0e0);color:var(--color-content-disable, #636363);-webkit-box-sizing:content-box;box-sizing:content-box;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;border-radius:11px;padding:0 8px;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none}.counter-text--active{background:var(--color-system, #b2dffd);color:var(--color-content-din, black)}.counter-text--warning{background:var(--color-warning, #fde99b);color:var(--color-content-din, black)}.counter-text--delete{background:var(--color-delete, #e60f0f);color:var(--color-content-bright, white)}"}}]);