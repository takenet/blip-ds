var __awaiter=this&&this.__awaiter||function(t,e,n,i){function r(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function s(t){try{l(i.next(t))}catch(e){a(e)}}function o(t){try{l(i["throw"](t))}catch(e){a(e)}}function l(t){t.done?n(t.value):r(t.value).then(s,o)}l((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,r,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return l([t,e])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(s&&(s=0,o[0]&&(n=0)),n)try{if(i=1,r&&(a=o[0]&2?r["return"]:o[0]?r["throw"]||((a=r["return"])&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;if(r=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;r=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(l){o=[6,l];r=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-d105fb25.system.js"],(function(t){"use strict";var e,n,i,r;return{setters:[function(t){e=t.r;n=t.c;i=t.h;r=t.H}],execute:function(){var a=":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}";var s=t("bds_tab_item",function(){function t(t){e(this,t);this.tabDisabled=n(this,"tabDisabled",7);this.numberElement=null;this.label=null;this.icon=null;this.iconPosition="left";this.iconTheme="outline";this.badge=false;this.badgeShape="circle";this.badgeColor="system";this.badgeIcon=null;this.badgeAnimation=false;this.badgePosition="left";this.badgeNumber=null;this.disable=false;this.open=false;this.dataTest=null}t.prototype.reciveNumber=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.numberElement=t;return[2]}))}))};t.prototype.disableChanged=function(){this.tabDisabled.emit({item:this.numberElement,disable:this.disable})};t.prototype.render=function(){var t,e;return i(r,{class:(t={},t["is-open"]=this.disable===true?false:this.open,t)},i("div",{class:{tab_item:true},"data-test":this.dataTest},i("div",{class:(e={tab_item_content:true},e["tab_item_content--open"]=this.open,e)},i("slot",null))))};Object.defineProperty(t,"watchers",{get:function(){return{disable:["disableChanged"]}},enumerable:false,configurable:true});return t}());s.style=a}}}));