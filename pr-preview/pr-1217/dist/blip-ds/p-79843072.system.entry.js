var __awaiter=this&&this.__awaiter||function(t,e,n,i){function s(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{u(i.next(t))}catch(t){r(t)}}function c(t){try{u(i["throw"](t))}catch(t){r(t)}}function u(t){t.done?n(t.value):s(t.value).then(a,c)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,s,r,a=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return a.next=c(0),a["throw"]=c(1),a["return"]=c(2),typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(t){return function(e){return u([t,e])}}function u(c){if(i)throw new TypeError("Generator is already executing.");while(a&&(a=0,c[0]&&(n=0)),n)try{if(i=1,s&&(r=c[0]&2?s["return"]:c[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,c[1])).done)return r;if(s=0,r)c=[c[0]&2,r.value];switch(c[0]){case 0:case 1:r=c;break;case 4:n.label++;return{value:c[1],done:false};case 5:n.label++;s=c[1];c=[0];continue;case 7:c=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1];r=c;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(c);break}if(r[2])n.ops.pop();n.trys.pop();continue}c=e.call(t,n)}catch(t){c=[6,t];s=0}finally{i=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:true}}};System.register(["./p-CLAYiqZ6.system.js"],(function(t){"use strict";var e,n,i,s;return{setters:[function(t){e=t.r;n=t.c;i=t.h;s=t.H}],execute:function(){var r=function(){return":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}"};var a=t("bds_tab_item",/** @class */function(){function t(t){e(this,t);this.tabDisabled=n(this,"tabDisabled");
/**
                     * Use to set number of tabItem.
                     */this.numberElement=null;
/**
                     * The text to be shown at the Tab item.
                     */this.label=null;
/**
                     * The icon to be shown at the Tab item.
                     */this.icon=null;
/**
                     * The position of the icon at the Tab item ('left', 'right').
                     */this.iconPosition="left";
/**
                     * The theme of the icon at the Tab item ('solid', 'outline', 'emoji', 'logos').
                     */this.iconTheme="outline";
/**
                     * The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon').
                     */this.badge=false;
/**
                     * The shape of the badge to be shown at the Tab item ('circle', 'square', 'triangle', 'triangle-reverse', 'polygon').
                     */this.badgeShape="circle";
/**
                     * The color of the badge to be shown at the Tab item.
                     */this.badgeColor="system";
/**
                     * The icon to be shown inside the badge at the Tab item ('system', 'danger', 'warning', 'success', 'neutral')
                     */this.badgeIcon=null;
/**
                     * The animation of the badge to be shown at the Tab item.
                     */this.badgeAnimation=false;
/**
                     * The animation of the badge to be shown at the Tab item.
                     */this.badgePosition="left";
/**
                     * The number to be shown inside the badge at the Tab item.
                     */this.badgeNumber=null;
/**
                     * Prop for disable the especific tab.
                     */this.disable=false;
/**
                     * Prop to indicate an error state for the tab.
                     */this.error=false;
/**
                     * Inline styles to be applied to the tab group header element.
                     */this.headerStyle=null;
/**
                     * Inline styles to be applied to the tab group content element.
                     */this.contentStyle=null;
/**
                     * Used to open/close the Tab item.
                     */this.open=false;
/**
                     * Data test is the prop to specifically test the component action object.
                     */this.dataTest=null}t.prototype.reciveNumber=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.numberElement=t;return[2/*return*/]}))}))};t.prototype.disableChanged=function(){this.tabDisabled.emit({item:this.numberElement,disable:this.disable})};t.prototype.render=function(){var t,e;return i(s,{key:"23d6c0e8116c46d7be85a06b6b88097925af44d4",class:(t={},t["is-open"]=this.disable===true?false:this.open,t)},i("div",{key:"c5cb79cf57c929881d283ad443b75590ab0a35cf",class:{tab_item:true},"data-test":this.dataTest},i("div",{key:"0ce2c58dfc6ee340f6660d44358719a1945f8005",class:(e={tab_item_content:true},e["tab_item_content--open"]=this.open,e)},i("slot",{key:"4dd9f30f576e951e5a40b8d60bd603e0d8efcbab"}))))};Object.defineProperty(t,"watchers",{get:function(){return{disable:[{disableChanged:0}]}},enumerable:false,configurable:true});return t}());a.style=r()}}}));