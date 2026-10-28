var __awaiter=this&&this.__awaiter||function(t,e,n,i){function s(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function a(t){try{c(i.next(t))}catch(t){r(t)}}function o(t){try{c(i["throw"](t))}catch(t){r(t)}}function c(t){t.done?n(t.value):s(t.value).then(a,o)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,s,r,a=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return a.next=o(0),a["throw"]=o(1),a["return"]=o(2),typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(t){return function(e){return c([t,e])}}function c(o){if(i)throw new TypeError("Generator is already executing.");while(a&&(a=0,o[0]&&(n=0)),n)try{if(i=1,s&&(r=o[0]&2?s["return"]:o[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,o[1])).done)return r;if(s=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;s=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){n.label=o[1];break}if(o[0]===6&&n.label<r[1]){n.label=r[1];r=o;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(o);break}if(r[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t];s=0}finally{i=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};import{r as registerInstance,c as createEvent,h,H as Host}from"./index-CkbvGS8Z.js";var tabItemCss=function(){return":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}"};var BdsTabItem=/** @class */function(){function t(t){registerInstance(this,t);this.tabDisabled=createEvent(this,"tabDisabled");
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
         */this.dataTest=null}t.prototype.reciveNumber=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.numberElement=t;return[2/*return*/]}))}))};t.prototype.disableChanged=function(){this.tabDisabled.emit({item:this.numberElement,disable:this.disable})};t.prototype.render=function(){var t,e;return h(Host,{key:"26d6906f398536db50e373eafe96a89cf2de8ff6",class:(t={},t["is-open"]=this.disable===true?false:this.open,t)},h("div",{key:"d77b152588d788cb10068367b868037388df16d9",class:{tab_item:true},"data-test":this.dataTest},h("div",{key:"5f0959b8eedd7f3022d0a0ab6b9c628cb9f3bde6",class:(e={tab_item_content:true},e["tab_item_content--open"]=this.open,e)},h("slot",{key:"0795d73f43c0fad8007d9096bba616713ee41736"}))))};Object.defineProperty(t,"watchers",{get:function(){return{disable:[{disableChanged:0}]}},enumerable:false,configurable:true});return t}();BdsTabItem.style=tabItemCss();export{BdsTabItem as bds_tab_item};