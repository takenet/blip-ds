var __awaiter=this&&this.__awaiter||function(t,e,n,i){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function s(t){try{l(i.next(t))}catch(e){r(e)}}function o(t){try{l(i["throw"](t))}catch(e){r(e)}}function l(t){t.done?n(t.value):a(t.value).then(s,o)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,a,r,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return l([t,e])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(s&&(s=0,o[0]&&(n=0)),n)try{if(i=1,a&&(r=o[0]&2?a["return"]:o[0]?a["throw"]||((r=a["return"])&&r.call(a),0):a.next)&&!(r=r.call(a,o[1])).done)return r;if(a=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){n.label=o[1];break}if(o[0]===6&&n.label<r[1]){n.label=r[1];r=o;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(o);break}if(r[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(l){o=[6,l];a=0}finally{i=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};import{r as registerInstance,c as createEvent,h,H as Host}from"./index-611fd21e.js";var tabItemCss=":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}";var BdsTabItem=function(){function t(t){registerInstance(this,t);this.tabDisabled=createEvent(this,"tabDisabled",7);this.numberElement=null;this.label=null;this.icon=null;this.iconPosition="left";this.iconTheme="outline";this.badge=false;this.badgeShape="circle";this.badgeColor="system";this.badgeIcon=null;this.badgeAnimation=false;this.badgePosition="left";this.badgeNumber=null;this.disable=false;this.open=false;this.dataTest=null}t.prototype.reciveNumber=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.numberElement=t;return[2]}))}))};t.prototype.disableChanged=function(){this.tabDisabled.emit({item:this.numberElement,disable:this.disable})};t.prototype.render=function(){var t,e;return h(Host,{class:(t={},t["is-open"]=this.disable===true?false:this.open,t)},h("div",{class:{tab_item:true},"data-test":this.dataTest},h("div",{class:(e={tab_item_content:true},e["tab_item_content--open"]=this.open,e)},h("slot",null))))};Object.defineProperty(t,"watchers",{get:function(){return{disable:["disableChanged"]}},enumerable:false,configurable:true});return t}();BdsTabItem.style=tabItemCss;export{BdsTabItem as bds_tab_item};