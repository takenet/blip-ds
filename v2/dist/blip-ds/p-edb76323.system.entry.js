var __awaiter=this&&this.__awaiter||function(t,e,n,i){function s(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function u(t){try{c(i["throw"](t))}catch(t){r(t)}}function c(t){t.done?n(t.value):s(t.value).then(a,u)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,s,r,a=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return a.next=u(0),a["throw"]=u(1),a["return"]=u(2),typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return c([t,e])}}function c(u){if(i)throw new TypeError("Generator is already executing.");while(a&&(a=0,u[0]&&(n=0)),n)try{if(i=1,s&&(r=u[0]&2?s["return"]:u[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,u[1])).done)return r;if(s=0,r)u=[u[0]&2,r.value];switch(u[0]){case 0:case 1:r=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;s=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){n.label=u[1];break}if(u[0]===6&&n.label<r[1]){n.label=r[1];r=u;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(u);break}if(r[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(t){u=[6,t];s=0}finally{i=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-CLAYiqZ6.system.js"],(function(t){"use strict";var e,n,i,s;return{setters:[function(t){e=t.r;n=t.c;i=t.h;s=t.H}],execute:function(){var r=function(){return":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}"};var a=t("bds_tab_item",/** @class */function(){function t(t){e(this,t);this.tabDisabled=n(this,"tabDisabled");
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
                     */this.dataTest=null}t.prototype.reciveNumber=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.numberElement=t;return[2/*return*/]}))}))};t.prototype.disableChanged=function(){this.tabDisabled.emit({item:this.numberElement,disable:this.disable})};t.prototype.render=function(){var t,e;return i(s,{key:"eaed3b610d8f46b5bf7d6ceab0e45889ffa55ff1",class:(t={},t["is-open"]=this.disable===true?false:this.open,t)},i("div",{key:"066c32b0a2c26ce85856be44d21593d915b78581",class:{tab_item:true},"data-test":this.dataTest},i("div",{key:"29c3d2586252586de451d1a759299d715ef5d330",class:(e={tab_item_content:true},e["tab_item_content--open"]=this.open,e)},i("slot",{key:"4a57ada68ca5e5ed8b8d0169dc23a8b8fb59d92c"}))))};Object.defineProperty(t,"watchers",{get:function(){return{disable:[{disableChanged:0}]}},enumerable:false,configurable:true});return t}());a.style=r()}}}));