var __awaiter=this&&this.__awaiter||function(t,e,n,i){function s(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function o(t){try{c(i["throw"](t))}catch(t){a(t)}}function c(t){t.done?n(t.value):s(t.value).then(r,o)}c((i=i.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,s,a,r=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return r.next=o(0),r["throw"]=o(1),r["return"]=o(2),typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function o(t){return function(e){return c([t,e])}}function c(o){if(i)throw new TypeError("Generator is already executing.");while(r&&(r=0,o[0]&&(n=0)),n)try{if(i=1,s&&(a=o[0]&2?s["return"]:o[0]?s["throw"]||((a=s["return"])&&a.call(s),0):s.next)&&!(a=a.call(s,o[1])).done)return a;if(s=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;s=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t];s=0}finally{i=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};import{r as registerInstance,c as createEvent,h,H as Host}from"./index-CkbvGS8Z.js";var tabItemCss=function(){return":host{display:none}:host(.is-open){display:block;height:100%}.tab_item{height:100%}.tab_item_content{display:none;height:100%}.tab_item_content--open{display:block}"};var BdsTabItem=/** @class */function(){function t(t){registerInstance(this,t);this.tabDisabled=createEvent(this,"tabDisabled");
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
         */this.dataTest=null}t.prototype.reciveNumber=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.numberElement=t;return[2/*return*/]}))}))};t.prototype.disableChanged=function(){this.tabDisabled.emit({item:this.numberElement,disable:this.disable})};t.prototype.render=function(){var t,e;return h(Host,{key:"29365d8c7d2e02ab7b66799bd0520a20055ef130",class:(t={},t["is-open"]=this.disable===true?false:this.open,t)},h("div",{key:"a763afa9b095b52899d4368e62f25427217c01bc",class:{tab_item:true},"data-test":this.dataTest},h("div",{key:"200622216a9d4266ea3e585c54213976eb240280",class:(e={tab_item_content:true},e["tab_item_content--open"]=this.open,e)},h("slot",{key:"3db13a46d2b72ea48b1566810371b5479a62d993"}))))};Object.defineProperty(t,"watchers",{get:function(){return{disable:[{disableChanged:0}]}},enumerable:false,configurable:true});return t}();BdsTabItem.style=tabItemCss();export{BdsTabItem as bds_tab_item};