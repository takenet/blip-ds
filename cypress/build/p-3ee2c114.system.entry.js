var __awaiter=this&&this.__awaiter||function(t,e,n,o){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{s(o.next(t))}catch(e){i(e)}}function c(t){try{s(o["throw"](t))}catch(e){i(e)}}function s(t){t.done?n(t.value):r(t.value).then(a,c)}s((o=o.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(t){return function(e){return s([t,e])}}function s(c){if(o)throw new TypeError("Generator is already executing.");while(a&&(a=0,c[0]&&(n=0)),n)try{if(o=1,r&&(i=c[0]&2?r["return"]:c[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,c[1])).done)return i;if(r=0,i)c=[c[0]&2,i.value];switch(c[0]){case 0:case 1:i=c;break;case 4:n.label++;return{value:c[1],done:false};case 5:n.label++;r=c[1];c=[0];continue;case 7:c=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1];i=c;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(c);break}if(i[2])n.ops.pop();n.trys.pop();continue}c=e.call(t,n)}catch(s){c=[6,s];r=0}finally{o=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./p-d105fb25.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.h}],execute:function(){var o='.accordion_header{display:-ms-flexbox;display:flex;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, #454545);cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header slot{display:-ms-flexbox;display:flex;width:100%;-ms-flex-negative:99999;flex-shrink:99999}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, #454545);opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, #c226fb)}.accordion_header .accButton:hover{background-color:var(--color-surface-1, #f6f6f6)}.accordion_header .accButton:active{background-color:var(--color-surface-1, #f6f6f6)}.accordion_body{height:0;overflow:hidden;border-bottom:none;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.accordion_body::-webkit-scrollbar{width:16px;background-color:transparent}.accordion_body::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.accordion_body_isOpen{overflow:overlay}.accordion_body_divisor{border-bottom:1px solid var(--color-border-1, #c9c9c9)}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, #454545)}';var r=t("bds_accordion_body",function(){function t(t){var n=this;e(this,t);this.container=null;this.refContainer=function(t){n.container=t};this.isOpen=false;this.isOpenAftAnimation=false;this.heightContainer=undefined;this.numberElement=null;this.hasDivisor=true;this.dataTest=null}t.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.isOpen=!this.isOpen;return[2]}))}))};t.prototype.open=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.isOpen=true;return[2]}))}))};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.isOpen=false;return[2]}))}))};t.prototype.divisor=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.hasDivisor=t;return[2]}))}))};t.prototype.isOpenChanged=function(){var t=this;this.heightContainer=this.isOpen?this.container.offsetHeight:0;if(this.isOpen){setTimeout((function(){t.isOpenAftAnimation=!t.isOpenAftAnimation}),500)}else{this.isOpenAftAnimation=!this.isOpenAftAnimation}};t.prototype.render=function(){var t=this;return n("div",{class:{accordion_body:true,accordion_body_divisor:this.hasDivisor,accordion_body_isOpen:this.isOpenAftAnimation},style:{height:"".concat(this.heightContainer,"px")},"data-test":this.dataTest},n("div",{class:"container",ref:function(e){return t.refContainer(e)}},n("slot",null)))};Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["isOpenChanged"]}},enumerable:false,configurable:true});return t}());r.style=o}}}));