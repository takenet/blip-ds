var __awaiter=this&&this.__awaiter||function(t,n,e,r){function i(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,o){function u(t){try{a(r.next(t))}catch(t){o(t)}}function c(t){try{a(r["throw"](t))}catch(t){o(t)}}function a(t){t.done?e(t.value):i(t.value).then(u,c)}a((r=r.apply(t,n||[])).next())}))};var __generator=this&&this.__generator||function(t,n){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return u.next=c(0),u["throw"]=c(1),u["return"]=c(2),typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(t){return function(n){return a([t,n])}}function a(c){if(r)throw new TypeError("Generator is already executing.");while(u&&(u=0,c[0]&&(e=0)),e)try{if(r=1,i&&(o=c[0]&2?i["return"]:c[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;if(i=0,o)c=[c[0]&2,o.value];switch(c[0]){case 0:case 1:o=c;break;case 4:e.label++;return{value:c[1],done:false};case 5:e.label++;i=c[1];c=[0];continue;case 7:c=e.ops.pop();e.trys.pop();continue;default:if(!(o=e.trys,o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){e.label=c[1];break}if(c[0]===6&&e.label<o[1]){e.label=o[1];o=c;break}if(o&&e.label<o[2]){e.label=o[2];e.ops.push(c);break}if(o[2])e.ops.pop();e.trys.pop();continue}c=n.call(t,e)}catch(t){c=[6,t];i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./p-CLAYiqZ6.system.js"],(function(t){"use strict";var n,e,r,i;return{setters:[function(t){n=t.r;e=t.h;r=t.H;i=t.g}],execute:function(){var o=function(){return":host{width:100%;border-radius:8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host ::slotted(bds-step:last-child){-ms-flex:inherit;flex:inherit}::slotted(.stepper__container__divisor){-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:1.5px;background:var(--color-content-disable, rgb(89, 89, 89));margin:0px 8px;min-width:24px}::slotted(.stepper__container__divisor--completed){border-top:2px solid var(--color-primary, rgb(30, 107, 241))}"};var u=t("bds_stepper",/** @class */function(){function t(t){n(this,t)}t.prototype.connectedCallback=function(){var t=this;this.childOptions.forEach((function(n,e){n.index=e;if(e===t.childOptions.length-1){n.last=true}}))};t.prototype.componentDidLoad=function(){this.renderLine()};
/**
                 * Set the active step
                 *
                 * @param index The index of the step to be set as active
                 * @returns void
                 */t.prototype.setActiveStep=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){this.resetActiveSteps();this.childOptions[t].active=true;return[2/*return*/]}))}))};
/**
                 * Set the completed step
                 *
                 * @param index The index of the step to be set as completed
                 * @returns void
                 */t.prototype.setCompletedStep=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){this.childOptions[t].completed=true;return[2/*return*/]}))}))};
/**
                 * Returns the active step
                 *
                 * @returns HTMLBdsStepElement
                 */t.prototype.getActiveStep=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2/*return*/,this.childOptions.find((function(t){return t.active===true})).index]}))}))};
/**
                 * Reset all active steps
                 *
                 * @returns void
                 */t.prototype.resetActiveSteps=function(){return __awaiter(this,void 0,void 0,(function(){var t,n,e;return __generator(this,(function(r){for(t=0,n=this.childOptions;t<n.length;t++){e=n[t];e.active=false}return[2/*return*/]}))}))};
/**
                 * Reset all completed steps
                 *
                 * @returns void
                 */t.prototype.resetCompletedSteps=function(){return __awaiter(this,void 0,void 0,(function(){var t,n,e;return __generator(this,(function(r){for(t=0,n=this.childOptions;t<n.length;t++){e=n[t];e.completed=false}return[2/*return*/]}))}))};Object.defineProperty(t.prototype,"childOptions",{get:function(){return Array.from(this.el.querySelectorAll("bds-step"))},enumerable:false,configurable:true});t.prototype.renderLine=function(){var t=this;var n=document.createElement("div");n.classList.add("stepper__container__divisor");Array.from(this.childOptions).forEach((function(e,r){if(t.childOptions.length-1!=r){e.insertAdjacentHTML("afterend",n.outerHTML)}}))};t.prototype.render=function(){return e(r,{key:"cf0bd209899f2fb4adcc09c26086a89aed7398b1",class:"stepper__container"},e("slot",{key:"00bcc82ad03515989d1d5ef5ad70667a90a757fd"}))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());u.style=o()}}}));