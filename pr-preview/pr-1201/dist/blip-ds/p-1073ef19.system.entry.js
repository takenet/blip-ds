var __awaiter=this&&this.__awaiter||function(t,e,n,i){function s(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function u(t){try{c(i["throw"](t))}catch(t){a(t)}}function c(t){t.done?n(t.value):s(t.value).then(r,u)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,s,a,r=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return r.next=u(0),r["throw"]=u(1),r["return"]=u(2),typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function u(t){return function(e){return c([t,e])}}function c(u){if(i)throw new TypeError("Generator is already executing.");while(r&&(r=0,u[0]&&(n=0)),n)try{if(i=1,s&&(a=u[0]&2?s["return"]:u[0]?s["throw"]||((a=s["return"])&&a.call(s),0):s.next)&&!(a=a.call(s,u[1])).done)return a;if(s=0,a)u=[u[0]&2,a.value];switch(u[0]){case 0:case 1:a=u;break;case 4:n.label++;return{value:u[1],done:false};case 5:n.label++;s=u[1];u=[0];continue;case 7:u=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(u[0]===6&&n.label<a[1]){n.label=a[1];a=u;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(u);break}if(a[2])n.ops.pop();n.trys.pop();continue}u=e.call(t,n)}catch(t){u=[6,t];s=0}finally{i=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};System.register(["./p-3jVR6_RY.system.js"],(function(t){"use strict";var e,n,i,s;return{setters:[function(t){e=t.r;n=t.c;i=t.h;s=t.H}],execute:function(){var a=function(){return":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}"};var r=t("bds_tab_item",/** @class */function(){function t(t){e(this,t);this.tabDisabled=n(this,"tabDisabled");
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
                     */this.dataTest=null}t.prototype.reciveNumber=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.numberElement=t;return[2/*return*/]}))}))};t.prototype.disableChanged=function(){this.tabDisabled.emit({item:this.numberElement,disable:this.disable})};t.prototype.render=function(){var t,e;return i(s,{key:"7fba977b5aac7b438e396a0909bff59623cb8174",class:(t={},t["is-open"]=this.disable===true?false:this.open,t)},i("div",{key:"bc698ee5760314ea17c66bacc0718619f6f863fa",class:{tab_item:true},"data-test":this.dataTest},i("div",{key:"1d76a0e7fb691d5d54440a2a47874a24ea3b929e",class:(e={tab_item_content:true},e["tab_item_content--open"]=this.open,e)},i("slot",{key:"25aedd8e9e4689fdcdaf510d862079ae25db02fc"}))))};Object.defineProperty(t,"watchers",{get:function(){return{disable:[{disableChanged:0}]}},enumerable:false,configurable:true});return t}());r.style=a()}}}));