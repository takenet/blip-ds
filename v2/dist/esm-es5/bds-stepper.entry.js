var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,o){function s(t){try{u(n.next(t))}catch(t){o(t)}}function a(t){try{u(n["throw"](t))}catch(t){o(t)}}function u(t){t.done?r(t.value):i(t.value).then(s,a)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,i,o,s=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return s.next=a(0),s["throw"]=a(1),s["return"]=a(2),typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return u([t,e])}}function u(a){if(n)throw new TypeError("Generator is already executing.");while(s&&(s=0,a[0]&&(r=0)),r)try{if(n=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:r.label++;return{value:a[1],done:false};case 5:r.label++;i=a[1];a=[0];continue;case 7:a=r.ops.pop();r.trys.pop();continue;default:if(!(o=r.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){r=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(a[0]===6&&r.label<o[1]){r.label=o[1];o=a;break}if(o&&r.label<o[2]){r.label=o[2];r.ops.push(a);break}if(o[2])r.ops.pop();r.trys.pop();continue}a=e.call(t,r)}catch(t){a=[6,t];i=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};import{t as transformTag,r as registerInstance,h,H as Host,g as getElement}from"./index-B3G05Lxx.js";var stepperCss=function(){return":host{width:100%;border-radius:8px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host ::slotted(".concat(transformTag("bds-step"),":last-child){-ms-flex:inherit;flex:inherit}::slotted(.stepper__container__divisor){-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-item-align:center;align-self:center;height:1.5px;background:var(--color-content-disable, rgb(89, 89, 89));margin:0px 8px;min-width:24px}::slotted(.stepper__container__divisor--completed){border-top:2px solid var(--color-primary, rgb(30, 107, 241))}")};var BdsStepper=/** @class */function(){function t(t){registerInstance(this,t)}t.prototype.connectedCallback=function(){var t=this;this.childOptions.forEach((function(e,r){e.index=r;if(r===t.childOptions.length-1){e.last=true}}))};t.prototype.componentDidLoad=function(){this.renderLine()};
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
     */t.prototype.resetActiveSteps=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r;return __generator(this,(function(n){for(t=0,e=this.childOptions;t<e.length;t++){r=e[t];r.active=false}return[2/*return*/]}))}))};
/**
     * Reset all completed steps
     *
     * @returns void
     */t.prototype.resetCompletedSteps=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r;return __generator(this,(function(n){for(t=0,e=this.childOptions;t<e.length;t++){r=e[t];r.completed=false}return[2/*return*/]}))}))};Object.defineProperty(t.prototype,"childOptions",{get:function(){return Array.from(this.el.querySelectorAll("".concat(transformTag("bds-step"))))},enumerable:false,configurable:true});t.prototype.renderLine=function(){var t=this;var e=document.createElement(transformTag("div"));e.classList.add("stepper__container__divisor");Array.from(this.childOptions).forEach((function(r,n){if(t.childOptions.length-1!=n){r.insertAdjacentHTML("afterend",e.outerHTML)}}))};t.prototype.render=function(){return h(Host,{key:"9b025068f53981962cb5687b2c2d291580f5b36d",class:"stepper__container"},h("slot",{key:"830da495bc71d4b6fe4c7f7edeee605c263633e1"}))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();BdsStepper.style=stepperCss();export{BdsStepper as bds_stepper};