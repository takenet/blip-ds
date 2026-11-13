var __awaiter=this&&this.__awaiter||function(t,e,n,i){function s(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function c(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i["throw"](t))}catch(t){r(t)}}function u(t){t.done?n(t.value):s(t.value).then(c,a)}u((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,s,r,c=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return c.next=a(0),c["throw"]=a(1),c["return"]=a(2),typeof Symbol==="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(t){return function(e){return u([t,e])}}function u(a){if(i)throw new TypeError("Generator is already executing.");while(c&&(c=0,a[0]&&(n=0)),n)try{if(i=1,s&&(r=a[0]&2?s["return"]:a[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,a[1])).done)return r;if(s=0,r)a=[a[0]&2,r.value];switch(a[0]){case 0:case 1:r=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;s=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!r||a[1]>r[0]&&a[1]<r[3])){n.label=a[1];break}if(a[0]===6&&n.label<r[1]){n.label=r[1];r=a;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(a);break}if(r[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];s=0}finally{i=r=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-CLAYiqZ6.system.js"],(function(t){"use strict";var e,n,i,s;return{setters:[function(t){e=t.r;n=t.c;i=t.h;s=t.H}],execute:function(){var r=function(){return":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}"};var c=t("bds_tab_item",/** @class */function(){function t(t){e(this,t);this.tabDisabled=n(this,"tabDisabled");
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
                     */this.dataTest=null}t.prototype.reciveNumber=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.numberElement=t;return[2/*return*/]}))}))};t.prototype.disableChanged=function(){this.tabDisabled.emit({item:this.numberElement,disable:this.disable})};t.prototype.render=function(){var t,e;return i(s,{key:"205c60057b6881dd4b81059d55663e3c256fcc2b",class:(t={},t["is-open"]=this.disable===true?false:this.open,t)},i("div",{key:"2e5085e6932619eb2c9afb24dba16a7cc96ff4f5",class:{tab_item:true},"data-test":this.dataTest},i("div",{key:"c622b678025363392e595e69209143a8d72d60c3",class:(e={tab_item_content:true},e["tab_item_content--open"]=this.open,e)},i("slot",{key:"1152f1abcbd9645a9cd7d250e49ef073cc76914d"}))))};Object.defineProperty(t,"watchers",{get:function(){return{disable:[{disableChanged:0}]}},enumerable:false,configurable:true});return t}());c.style=r()}}}));