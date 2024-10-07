var __awaiter=this&&this.__awaiter||function(e,t,o,n){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,r){function c(e){try{s(n.next(e))}catch(t){r(t)}}function a(e){try{s(n["throw"](e))}catch(t){r(t)}}function s(e){e.done?o(e.value):i(e.value).then(c,a)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var o={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},n,i,r,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(e){return function(t){return s([e,t])}}function s(a){if(n)throw new TypeError("Generator is already executing.");while(c&&(c=0,a[0]&&(o=0)),o)try{if(n=1,i&&(r=a[0]&2?i["return"]:a[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;if(i=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:o.label++;return{value:a[1],done:false};case 5:o.label++;i=a[1];a=[0];continue;case 7:a=o.ops.pop();o.trys.pop();continue;default:if(!(r=o.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){o=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(a[0]===6&&o.label<r[1]){o.label=r[1];r=a;break}if(r&&o.label<r[2]){o.label=r[2];o.ops.push(a);break}if(r[2])o.ops.pop();o.trys.pop();continue}a=t.call(e,o)}catch(s){a=[6,s];i=0}finally{n=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-d105fb25.system.js"],(function(e){"use strict";var t,o,n,i;return{setters:[function(e){t=e.r;o=e.c;n=e.h;i=e.g}],execute:function(){var r='.accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, #454545);cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, #454545);opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, #c226fb)}.accordion_header .accButton:hover{background-color:var(--color-surface-1, #f6f6f6)}.accordion_header .accButton:active{background-color:var(--color-surface-1, #f6f6f6)}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:transparent}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, #c9c9c9)}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, #454545)}';var c=e("bds_accordion",function(){function e(e){t(this,e);this.bdsToggle=o(this,"bdsToggle",7);this.bdsAccordionOpen=o(this,"bdsAccordionOpen",7);this.bdsAccordionClose=o(this,"bdsAccordionClose",7);this.accGroup=null;this.accheaders=null;this.accBodies=null;this.isOpen=false;this.numberElement=null;this.condition=false;this.startOpen=false;this.divisor=true}e.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.isOpen=!this.isOpen;this.bdsToggle.emit({value:this.isOpen});return[2]}))}))};e.prototype.open=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(o){(e=this.accheaders)===null||e===void 0?void 0:e.open();(t=this.accBodies)===null||t===void 0?void 0:t.open();this.isOpen=true;return[2]}))}))};e.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(o){(e=this.accheaders)===null||e===void 0?void 0:e.close();(t=this.accBodies)===null||t===void 0?void 0:t.close();this.isOpen=false;return[2]}))}))};e.prototype.notStart=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.startOpen=false;return[2]}))}))};e.prototype.reciveNumber=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.numberElement=e;return[2]}))}))};e.prototype.isOpenChanged=function(e){var t,o,n,i,r;if(e){if(this.accGroup.collapse=="single"&&this.condition===false){(t=this.accGroup)===null||t===void 0?void 0:t.closeAll(this.numberElement)}(o=this.accheaders)===null||o===void 0?void 0:o.open();(n=this.accBodies)===null||n===void 0?void 0:n.open();this.bdsAccordionOpen.emit()}else{(i=this.accheaders)===null||i===void 0?void 0:i.close();(r=this.accBodies)===null||r===void 0?void 0:r.close();this.bdsAccordionClose.emit()}this.condition=false};e.prototype.componentWillLoad=function(){this.accGroup=this.element.parentElement.tagName=="BDS-ACCORDION-GROUP"&&this.element.parentElement;this.accheaders=this.element.children[0];this.accBodies=this.element.children[1];var e=this.element.querySelector("bds-accordion-body");if(e){e.divisor(this.divisor)}if(this.startOpen===true){this.condition=true;this.isOpen=true}};e.prototype.render=function(){return n("div",{class:"accordion_group"},n("slot",null))};Object.defineProperty(e.prototype,"element",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{isOpen:["isOpenChanged"]}},enumerable:false,configurable:true});return e}());c.style=r}}}));