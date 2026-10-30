var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function u(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r["throw"](t))}catch(t){o(t)}}function c(t){t.done?n(t.value):i(t.value).then(u,s)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,u=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return u.next=s(0),u["throw"]=s(1),u["return"]=s(2),typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function s(t){return function(e){return c([t,e])}}function c(s){if(r)throw new TypeError("Generator is already executing.");while(u&&(u=0,s[0]&&(n=0)),n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(t){s=[6,t];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-CLAYiqZ6.system.js"],(function(t){"use strict";var e,n,r,i;return{setters:[function(t){e=t.r;n=t.h;r=t.H;i=t.g}],execute:function(){var o=function(){return":host{width:100%;border-radius:8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host ::slotted(bds-step:last-child){-ms-flex:inherit;flex:inherit}::slotted(.stepper__container__divisor){-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:1.5px;background:var(--color-content-disable, rgb(89, 89, 89));margin:0px 8px;min-width:24px}::slotted(.stepper__container__divisor--completed){border-top:2px solid var(--color-primary, rgb(30, 107, 241))}"};var u=t("bds_stepper",/** @class */function(){function t(t){e(this,t)}t.prototype.connectedCallback=function(){var t=this;this.childOptions.forEach((function(e,n){e.index=n;if(n===t.childOptions.length-1){e.last=true}}))};t.prototype.componentDidLoad=function(){this.renderLine()};
/**
                 * Set the active step
                 *
                 * @param index The index of the step to be set as active
                 * @returns void
                 */t.prototype.setActiveStep=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.resetActiveSteps();this.childOptions[t].active=true;return[2/*return*/]}))}))};
/**
                 * Set the completed step
                 *
                 * @param index The index of the step to be set as completed
                 * @returns void
                 */t.prototype.setCompletedStep=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.childOptions[t].completed=true;return[2/*return*/]}))}))};
/**
                 * Returns the active step
                 *
                 * @returns HTMLBdsStepElement
                 */t.prototype.getActiveStep=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2/*return*/,this.childOptions.find((function(t){return t.active===true})).index]}))}))};
/**
                 * Reset all active steps
                 *
                 * @returns void
                 */t.prototype.resetActiveSteps=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n;return __generator(this,(function(r){for(t=0,e=this.childOptions;t<e.length;t++){n=e[t];n.active=false}return[2/*return*/]}))}))};
/**
                 * Reset all completed steps
                 *
                 * @returns void
                 */t.prototype.resetCompletedSteps=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,n;return __generator(this,(function(r){for(t=0,e=this.childOptions;t<e.length;t++){n=e[t];n.completed=false}return[2/*return*/]}))}))};Object.defineProperty(t.prototype,"childOptions",{get:function(){return Array.from(this.el.querySelectorAll("bds-step"))},enumerable:false,configurable:true});t.prototype.renderLine=function(){var t=this;var e=document.createElement("div");e.classList.add("stepper__container__divisor");Array.from(this.childOptions).forEach((function(n,r){if(t.childOptions.length-1!=r){n.insertAdjacentHTML("afterend",e.outerHTML)}}))};t.prototype.render=function(){return n(r,{key:"5df10f7513bc03a1433ab3249fe52f725b6d6166",class:"stepper__container"},n("slot",{key:"bb8490653e6db32f9bbbf8f5e77fd9a51d1be74c"}))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}());u.style=o()}}}));