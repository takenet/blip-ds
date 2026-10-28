var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t))e[t]=r[t]};return e(r,t)};return function(r,t){if(typeof t!=="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __assign=this&&this.__assign||function(){__assign=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o))e[o]=r[o]}return e};return __assign.apply(this,arguments)};var __awaiter=this&&this.__awaiter||function(e,r,t,n){function o(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n["throw"](e))}catch(e){a(e)}}function l(e){e.done?t(e.value):o(e.value).then(i,s)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i=Object.create((typeof Iterator==="function"?Iterator:Object).prototype);return i.next=s(0),i["throw"]=s(1),i["return"]=s(2),typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(i&&(i=0,s[0]&&(t=0)),t)try{if(n=1,o&&(a=s[0]&2?o["return"]:s[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,s[1])).done)return a;if(o=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;o=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){t.label=s[1];break}if(s[0]===6&&t.label<a[1]){t.label=a[1];a=s;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(s);break}if(a[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(e){s=[6,e];o=0}finally{n=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,r,t){if(t||arguments.length===2)for(var n=0,o=r.length,a;n<o;n++){if(a||!(n in r)){if(!a)a=Array.prototype.slice.call(r,0,n);a[n]=r[n]}}return e.concat(a||Array.prototype.slice.call(r))};var NAMESPACE="blip-ds";var BUILD=/* blip-ds */{hotModuleReplacement:false,hydratedSelectorName:"hydrated",lazyLoad:true,propChangeCallback:true,slotRelocation:true,state:true,updatable:true};
/*
 Stencil Client Platform v4.45.2 | MIT Licensed | https://stenciljs.com
 */
// src/utils/get-prop-descriptor.ts
function getPropertyDescriptor(e,r,t){var n=typeof HTMLElement!=="undefined"?HTMLElement.prototype:null;while(e&&e!==n){var o=Object.getOwnPropertyDescriptor(e,r);if(o&&(!t||o.get))return o;e=Object.getPrototypeOf(e)}return void 0}
// src/utils/es2022-rewire-class-members.ts
var reWireGetterSetter=function(e,r){var t;var n=r.t;var o=Object.entries((t=n.o)!=null?t:{});o.map((function(t){var n=t[0],o=t[1][0];if(o&31/* Prop */||o&32/* State */){var a=e[n];var i=getPropertyDescriptor(Object.getPrototypeOf(e),n,true)||Object.getOwnPropertyDescriptor(e,n);if(i){Object.defineProperty(e,n,{get:function(){return i.get.call(this)},set:function(e){i.set.call(this,e)},configurable:true,enumerable:true})}if(r.i.has(n)){e[n]=r.i.get(n)}else if(a!==void 0){e[n]=a}}}))};
// src/client/client-host-ref.ts
var getHostRef=function(e){if(e.__stencil__getHostRef){return e.__stencil__getHostRef()}return void 0};var registerInstance=function(e,r){if(!r)return;e.__stencil__getHostRef=function(){return r};r.l=e;if(r.t.u&512/* hasModernPropertyDecls */&&BUILD.state){reWireGetterSetter(e,r)}};var registerHost=function(e,r){var t={u:0,$hostElement$:e,t:r,i:new Map,v:new Map};{t.p=new Promise((function(e){return t.m=e}))}{t.h=new Promise((function(e){return t.S=e}));e["s-p"]=[];e["s-rc"]=[]}{t.j=[]}var n=t;e.__stencil__getHostRef=function(){return n};return n};var isMemberInElement=function(e,r){return r in e};var consoleError=function(e,r){return(0,console.error)(e,r)};
// src/client/client-load-module.ts
var cmpModules=new Map;var failedLoadAttempts=new Map;var loadModule=function(e,r,t){var n;var o=e._.replace(/-/g,"_");var a=e.C;if(!a){return void 0}var i=cmpModules.get(a);if(i){return i[o]}var s=(n=failedLoadAttempts.get(a))!=null?n:0;var l=[s>0?"s-retry=".concat(s):"",""].filter(Boolean).join("&");if(!t||!BUILD.hotModuleReplacement){var u=function(e){cmpModules.set(a,e);return e[o]};switch(a){case"bds-card-body":return import(
/* webpackMode: "lazy" */
"./bds-card-body.entry.js").then(u,consoleError);case"bds-card-subtitle":return import(
/* webpackMode: "lazy" */
"./bds-card-subtitle.entry.js").then(u,consoleError);case"bds-radio-group":return import(
/* webpackMode: "lazy" */
"./bds-radio-group.entry.js").then(u,consoleError);case"bds-accordion":return import(
/* webpackMode: "lazy" */
"./bds-accordion.entry.js").then(u,consoleError);case"bds-accordion-body":return import(
/* webpackMode: "lazy" */
"./bds-accordion-body.entry.js").then(u,consoleError);case"bds-accordion-group":return import(
/* webpackMode: "lazy" */
"./bds-accordion-group.entry.js").then(u,consoleError);case"bds-accordion-header":return import(
/* webpackMode: "lazy" */
"./bds-accordion-header.entry.js").then(u,consoleError);case"bds-alert":return import(
/* webpackMode: "lazy" */
"./bds-alert.entry.js").then(u,consoleError);case"bds-alert-actions":return import(
/* webpackMode: "lazy" */
"./bds-alert-actions.entry.js").then(u,consoleError);case"bds-alert-body":return import(
/* webpackMode: "lazy" */
"./bds-alert-body.entry.js").then(u,consoleError);case"bds-alert-header":return import(
/* webpackMode: "lazy" */
"./bds-alert-header.entry.js").then(u,consoleError);case"bds-avatar-group":return import(
/* webpackMode: "lazy" */
"./bds-avatar-group.entry.js").then(u,consoleError);case"bds-banner-link":return import(
/* webpackMode: "lazy" */
"./bds-banner-link.entry.js").then(u,consoleError);case"bds-breadcrumb":return import(
/* webpackMode: "lazy" */
"./bds-breadcrumb.entry.js").then(u,consoleError);case"bds-button-group":return import(
/* webpackMode: "lazy" */
"./bds-button-group.entry.js").then(u,consoleError);case"bds-card":return import(
/* webpackMode: "lazy" */
"./bds-card.entry.js").then(u,consoleError);case"bds-card-color":return import(
/* webpackMode: "lazy" */
"./bds-card-color.entry.js").then(u,consoleError);case"bds-card-footer":return import(
/* webpackMode: "lazy" */
"./bds-card-footer.entry.js").then(u,consoleError);case"bds-card-header":return import(
/* webpackMode: "lazy" */
"./bds-card-header.entry.js").then(u,consoleError);case"bds-card-title":return import(
/* webpackMode: "lazy" */
"./bds-card-title.entry.js").then(u,consoleError);case"bds-carousel":return import(
/* webpackMode: "lazy" */
"./bds-carousel.entry.js").then(u,consoleError);case"bds-carousel-item":return import(
/* webpackMode: "lazy" */
"./bds-carousel-item.entry.js").then(u,consoleError);case"bds-chip":return import(
/* webpackMode: "lazy" */
"./bds-chip.entry.js").then(u,consoleError);case"bds-chip-selected":return import(
/* webpackMode: "lazy" */
"./bds-chip-selected.entry.js").then(u,consoleError);case"bds-data-table":return import(
/* webpackMode: "lazy" */
"./bds-data-table.entry.js").then(u,consoleError);case"bds-datepicker":return import(
/* webpackMode: "lazy" */
"./bds-datepicker.entry.js").then(u,consoleError);case"bds-divider":return import(
/* webpackMode: "lazy" */
"./bds-divider.entry.js").then(u,consoleError);case"bds-expansion-panel":return import(
/* webpackMode: "lazy" */
"./bds-expansion-panel.entry.js").then(u,consoleError);case"bds-expansion-panel-body":return import(
/* webpackMode: "lazy" */
"./bds-expansion-panel-body.entry.js").then(u,consoleError);case"bds-expansion-panel-header":return import(
/* webpackMode: "lazy" */
"./bds-expansion-panel-header.entry.js").then(u,consoleError);case"bds-input-chips":return import(
/* webpackMode: "lazy" */
"./bds-input-chips.entry.js").then(u,consoleError);case"bds-input-editable":return import(
/* webpackMode: "lazy" */
"./bds-input-editable.entry.js").then(u,consoleError);case"bds-input-password":return import(
/* webpackMode: "lazy" */
"./bds-input-password.entry.js").then(u,consoleError);case"bds-list":return import(
/* webpackMode: "lazy" */
"./bds-list.entry.js").then(u,consoleError);case"bds-list-item-content":return import(
/* webpackMode: "lazy" */
"./bds-list-item-content.entry.js").then(u,consoleError);case"bds-loading-bar":return import(
/* webpackMode: "lazy" */
"./bds-loading-bar.entry.js").then(u,consoleError);case"bds-loading-page":return import(
/* webpackMode: "lazy" */
"./bds-loading-page.entry.js").then(u,consoleError);case"bds-menu":return import(
/* webpackMode: "lazy" */
"./bds-menu.entry.js").then(u,consoleError);case"bds-menu-action":return import(
/* webpackMode: "lazy" */
"./bds-menu-action.entry.js").then(u,consoleError);case"bds-menu-exibition":return import(
/* webpackMode: "lazy" */
"./bds-menu-exibition.entry.js").then(u,consoleError);case"bds-menu-list":return import(
/* webpackMode: "lazy" */
"./bds-menu-list.entry.js").then(u,consoleError);case"bds-menu-list-item":return import(
/* webpackMode: "lazy" */
"./bds-menu-list-item.entry.js").then(u,consoleError);case"bds-menu-separation":return import(
/* webpackMode: "lazy" */
"./bds-menu-separation.entry.js").then(u,consoleError);case"bds-modal":return import(
/* webpackMode: "lazy" */
"./bds-modal.entry.js").then(u,consoleError);case"bds-modal-action":return import(
/* webpackMode: "lazy" */
"./bds-modal-action.entry.js").then(u,consoleError);case"bds-modal-close-button":return import(
/* webpackMode: "lazy" */
"./bds-modal-close-button.entry.js").then(u,consoleError);case"bds-nav-tree":return import(
/* webpackMode: "lazy" */
"./bds-nav-tree.entry.js").then(u,consoleError);case"bds-nav-tree-group":return import(
/* webpackMode: "lazy" */
"./bds-nav-tree-group.entry.js").then(u,consoleError);case"bds-nav-tree-item":return import(
/* webpackMode: "lazy" */
"./bds-nav-tree-item.entry.js").then(u,consoleError);case"bds-navbar":return import(
/* webpackMode: "lazy" */
"./bds-navbar.entry.js").then(u,consoleError);case"bds-navbar-content":return import(
/* webpackMode: "lazy" */
"./bds-navbar-content.entry.js").then(u,consoleError);case"bds-progress-bar":return import(
/* webpackMode: "lazy" */
"./bds-progress-bar.entry.js").then(u,consoleError);case"bds-select-chips":return import(
/* webpackMode: "lazy" */
"./bds-select-chips.entry.js").then(u,consoleError);case"bds-sidebar":return import(
/* webpackMode: "lazy" */
"./bds-sidebar.entry.js").then(u,consoleError);case"bds-slider":return import(
/* webpackMode: "lazy" */
"./bds-slider.entry.js").then(u,consoleError);case"bds-step":return import(
/* webpackMode: "lazy" */
"./bds-step.entry.js").then(u,consoleError);case"bds-stepper":return import(
/* webpackMode: "lazy" */
"./bds-stepper.entry.js").then(u,consoleError);case"bds-tab":return import(
/* webpackMode: "lazy" */
"./bds-tab.entry.js").then(u,consoleError);case"bds-tab-group":return import(
/* webpackMode: "lazy" */
"./bds-tab-group.entry.js").then(u,consoleError);case"bds-tab-item":return import(
/* webpackMode: "lazy" */
"./bds-tab-item.entry.js").then(u,consoleError);case"bds-tab-panel":return import(
/* webpackMode: "lazy" */
"./bds-tab-panel.entry.js").then(u,consoleError);case"bds-table":return import(
/* webpackMode: "lazy" */
"./bds-table.entry.js").then(u,consoleError);case"bds-table-body":return import(
/* webpackMode: "lazy" */
"./bds-table-body.entry.js").then(u,consoleError);case"bds-table-header":return import(
/* webpackMode: "lazy" */
"./bds-table-header.entry.js").then(u,consoleError);case"bds-table-row":return import(
/* webpackMode: "lazy" */
"./bds-table-row.entry.js").then(u,consoleError);case"bds-table-th":return import(
/* webpackMode: "lazy" */
"./bds-table-th.entry.js").then(u,consoleError);case"bds-tabs":return import(
/* webpackMode: "lazy" */
"./bds-tabs.entry.js").then(u,consoleError);case"bds-toast":return import(
/* webpackMode: "lazy" */
"./bds-toast.entry.js").then(u,consoleError);case"bds-warning":return import(
/* webpackMode: "lazy" */
"./bds-warning.entry.js").then(u,consoleError);case"uai-button":return import(
/* webpackMode: "lazy" */
"./uai-button.entry.js").then(u,consoleError);case"uai-grid":return import(
/* webpackMode: "lazy" */
"./uai-grid.entry.js").then(u,consoleError);case"uai-input":return import(
/* webpackMode: "lazy" */
"./uai-input.entry.js").then(u,consoleError);case"uai-input-chips":return import(
/* webpackMode: "lazy" */
"./uai-input-chips.entry.js").then(u,consoleError);case"uai-input-editable":return import(
/* webpackMode: "lazy" */
"./uai-input-editable.entry.js").then(u,consoleError);case"uai-input-password":return import(
/* webpackMode: "lazy" */
"./uai-input-password.entry.js").then(u,consoleError);case"uai-navbar":return import(
/* webpackMode: "lazy" */
"./uai-navbar.entry.js").then(u,consoleError);case"uai-navbar-content":return import(
/* webpackMode: "lazy" */
"./uai-navbar-content.entry.js").then(u,consoleError);case"uai-paper":return import(
/* webpackMode: "lazy" */
"./uai-paper.entry.js").then(u,consoleError);case"uai-textarea":return import(
/* webpackMode: "lazy" */
"./uai-textarea.entry.js").then(u,consoleError);case"uai-theme-provider":return import(
/* webpackMode: "lazy" */
"./uai-theme-provider.entry.js").then(u,consoleError);case"bds-badge":return import(
/* webpackMode: "lazy" */
"./bds-badge.entry.js").then(u,consoleError);case"bds-chip-tag":return import(
/* webpackMode: "lazy" */
"./bds-chip-tag.entry.js").then(u,consoleError);case"bds-image":return import(
/* webpackMode: "lazy" */
"./bds-image.entry.js").then(u,consoleError);case"bds-list-item":return import(
/* webpackMode: "lazy" */
"./bds-list-item.entry.js").then(u,consoleError);case"bds-select":return import(
/* webpackMode: "lazy" */
"./bds-select.entry.js").then(u,consoleError);case"bds-table-cell":return import(
/* webpackMode: "lazy" */
"./bds-table-cell.entry.js").then(u,consoleError);case"bds-toast-container":return import(
/* webpackMode: "lazy" */
"./bds-toast-container.entry.js").then(u,consoleError);case"bds-banner":return import(
/* webpackMode: "lazy" */
"./bds-banner.entry.js").then(u,consoleError);case"bds-dropdown":return import(
/* webpackMode: "lazy" */
"./bds-dropdown.entry.js").then(u,consoleError);case"bds-input":return import(
/* webpackMode: "lazy" */
"./bds-input.entry.js").then(u,consoleError);case"bds-button":return import(
/* webpackMode: "lazy" */
"./bds-button.entry.js").then(u,consoleError);case"bds-avatar":return import(
/* webpackMode: "lazy" */
"./bds-avatar.entry.js").then(u,consoleError);case"bds-loading-spinner":return import(
/* webpackMode: "lazy" */
"./bds-loading-spinner.entry.js").then(u,consoleError);case"bds-button-icon":return import(
/* webpackMode: "lazy" */
"./bds-button-icon.entry.js").then(u,consoleError);case"bds-input-phone-number":return import(
/* webpackMode: "lazy" */
"./bds-input-phone-number.entry.js").then(u,consoleError);case"bds-pagination":return import(
/* webpackMode: "lazy" */
"./bds-pagination.entry.js").then(u,consoleError);case"uai-avatar":return import(
/* webpackMode: "lazy" */
"./uai-avatar.entry.js").then(u,consoleError);case"uai-input-date":return import(
/* webpackMode: "lazy" */
"./uai-input-date.entry.js").then(u,consoleError);case"bds-counter-text":return import(
/* webpackMode: "lazy" */
"./bds-counter-text.entry.js").then(u,consoleError);case"bds-icon":return import(
/* webpackMode: "lazy" */
"./bds-icon.entry.js").then(u,consoleError);case"uai-input-phone":return import(
/* webpackMode: "lazy" */
"./uai-input-phone.entry.js").then(u,consoleError);case"bds-datepicker-period_2":return import(
/* webpackMode: "lazy" */
"./bds-datepicker-period_2.entry.js").then(u,consoleError);case"bds-illustration_2":return import(
/* webpackMode: "lazy" */
"./bds-illustration_2.entry.js").then(u,consoleError);case"bds-radio_2":return import(
/* webpackMode: "lazy" */
"./bds-radio_2.entry.js").then(u,consoleError);case"bds-chip-clickable_2":return import(
/* webpackMode: "lazy" */
"./bds-chip-clickable_2.entry.js").then(u,consoleError);case"bds-checkbox_2":return import(
/* webpackMode: "lazy" */
"./bds-checkbox_2.entry.js").then(u,consoleError);case"uai-icon_2":return import(
/* webpackMode: "lazy" */
"./uai-icon_2.entry.js").then(u,consoleError);case"bds-autocomplete":return import(
/* webpackMode: "lazy" */
"./bds-autocomplete.entry.js").then(u,consoleError);case"bds-rich-text":return import(
/* webpackMode: "lazy" */
"./bds-rich-text.entry.js").then(u,consoleError);case"bds-upload":return import(
/* webpackMode: "lazy" */
"./bds-upload.entry.js").then(u,consoleError);case"bds-grid_5":return import(
/* webpackMode: "lazy" */
"./bds-grid_5.entry.js").then(u,consoleError)}}return import(
/* @vite-ignore */
/* webpackInclude: /\.entry\.js$/ */
/* webpackExclude: /\.system\.entry\.js$/ */
/* webpackMode: "lazy" */
"./".concat(a,".entry.js").concat(l?"?"+l:"")).then((function(e){{failedLoadAttempts.delete(a);cmpModules.set(a,e)}return e[o]}),(function(e){failedLoadAttempts.set(a,s+1);consoleError(e,r.$hostElement$)}))};
// src/client/client-style.ts
var styles=new Map;var HYDRATED_CSS="{visibility:hidden}.hydrated{visibility:inherit}";var SLOT_FB_CSS="slot-fb{display:contents}slot-fb[hidden]{display:none}";var XLINK_NS="http://www.w3.org/1999/xlink";var MAX_LAZY_LOAD_RETRIES=3;var LAZY_LOAD_RETRY_INTERVAL_MS=1e3;var FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS=["formAssociatedCallback","formResetCallback","formDisabledCallback","formStateRestoreCallback"];var win=typeof window!=="undefined"?window:{};var plt={u:0,T:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)},ce:function(e,r){return new CustomEvent(e,r)}};var supportsListenerOptions=function(){var e;var r=false;try{(e=win.document)==null?void 0:e.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){r=true}}))}catch(e){}return r}();var promiseResolve=function(e){return Promise.resolve(e)};var supportsConstructableStylesheets=function(){try{if(!win.document.adoptedStyleSheets){return false}new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false}();var supportsMutableAdoptedStyleSheets=supportsConstructableStylesheets?function(){return!!win.document&&Object.getOwnPropertyDescriptor(win.document.adoptedStyleSheets,"length").writable}():false;var queuePending=false;var queueDomReads=[];var queueDomWrites=[];var scheduleFlush=function(){var e;return((e=win.document)==null?void 0:e.hidden)?setTimeout(flush,16):plt.raf(flush)};var queueTask=function(e,r){return function(t){e.push(t);if(!queuePending){queuePending=true;if(r&&plt.u&4/* queueSync */){nextTick(flush)}else{scheduleFlush()}}}};var consume=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(e){consoleError(e)}}e.length=0};var flush=function(){consume(queueDomReads);{consume(queueDomWrites);if(queuePending=queueDomReads.length>0){scheduleFlush()}}};var nextTick=function(e){return promiseResolve().then(e)};var writeTask=queueTask(queueDomWrites,true);
// src/utils/style.ts
function createStyleSheetIfNeededAndSupported(e){return void 0}
// src/utils/shadow-root.ts
var globalStyleSheet;function createShadowRoot(e){var r;var t={mode:"open"};{t.delegatesFocus=!!(e.u&16/* shadowDelegatesFocus */)}var n=this.attachShadow(t);if(globalStyleSheet===void 0)globalStyleSheet=(r=createStyleSheetIfNeededAndSupported())!=null?r:null;if(globalStyleSheet){if(supportsMutableAdoptedStyleSheets){n.adoptedStyleSheets.push(globalStyleSheet)}else{n.adoptedStyleSheets=__spreadArray(__spreadArray([],n.adoptedStyleSheets,true),[globalStyleSheet],false)}}}var updateFallbackSlotVisibility=function(e){var r=internalCall(e,"childNodes");if(e.tagName&&e.tagName.includes("-")&&e["s-cr"]&&e.tagName!=="SLOT-FB"){getHostSlotNodes(r,e.tagName).forEach((function(e){if(e.nodeType===1/* ElementNode */&&e.tagName==="SLOT-FB"){if(getSlotChildSiblings(e,getSlotName(e),false).length){e.hidden=true}else{e.hidden=false}}}))}var t=0;for(t=0;t<r.length;t++){var n=r[t];if(n.nodeType===1/* ElementNode */&&internalCall(n,"childNodes").length){updateFallbackSlotVisibility(n)}}};var getSlottedChildNodes=function(e){var r=[];for(var t=0;t<e.length;t++){var n=e[t]["s-nr"]||void 0;if(n&&n.isConnected){r.push(n)}}return r};function getHostSlotNodes(e,r,t){var n=0;var o=[];var a;for(;n<e.length;n++){a=e[n];if(a["s-sr"]&&(!r||a["s-hn"]===r)&&(t===void 0||getSlotName(a)===t)){o.push(a);if(typeof t!=="undefined")return o}o=__spreadArray(__spreadArray([],o,true),getHostSlotNodes(internalCall(a,"childNodes"),r,t),true)}return o}var getSlotChildSiblings=function(e,r,t){if(t===void 0){t=true}var n=[];if(t&&e["s-sr"]||!e["s-sr"])n.push(e);var o=e;while(o=o.nextSibling){if(getSlotName(o)===r&&(t||!o["s-sr"]))n.push(o)}return n};var isNodeLocatedInSlot=function(e,r){if(e.nodeType===1/* ElementNode */){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var getSlotName=function(e){return typeof e["s-sn"]==="string"?e["s-sn"]:e.nodeType===1&&e.getAttribute("slot")||void 0};function patchSlotNode(e){if(e.assignedElements||e.assignedNodes||!e["s-sr"])return;var r=function(r){return function(e){var t=[];var n=this["s-sn"];if(e==null?void 0:e.flatten){console.error("\n          Flattening is not supported for Stencil non-shadow slots.\n          You can use `.childNodes` to nested slot fallback content.\n          If you have a particular use case, please open an issue on the Stencil repo.\n        ")}var o=this["s-cr"].parentElement;var a=o.__childNodes?o.childNodes:getSlottedChildNodes(o.childNodes);a.forEach((function(e){if(n===getSlotName(e)){t.push(e)}}));if(r){return t.filter((function(e){return e.nodeType===1}/* ElementNode */))}return t}.bind(e)};e.assignedElements=r(true);e.assignedNodes=r(false)}function dispatchSlotChangeEvent(e){e.dispatchEvent(new CustomEvent("slotchange",{bubbles:false,cancelable:false,composed:false}))}function findSlotFromSlottedNode(e,r){var t;r=r||((t=e["s-ol"])==null?void 0:t.parentElement);if(!r)return{slotNode:null,slotName:""};var n=e["s-sn"]=getSlotName(e)||"";var o=internalCall(r,"childNodes");var a=getHostSlotNodes(o,r.tagName,n)[0];return{slotNode:a,slotName:n}}function internalCall(e,r){if("__"+r in e){var t=e["__"+r];if(typeof t!=="function")return t;return t.bind(e)}else{if(typeof e[r]!=="function")return e[r];return e[r].bind(e)}}var createTime=function(e,r){if(r===void 0){r=""}{return function(){return}}};var uniqueTime=function(e,r){{return function(){return}}};
// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(e){var r,t,n;return(n=(t=(r=e.head)==null?void 0:r.querySelector('meta[name="csp-nonce"]'))==null?void 0:t.getAttribute("content"))!=null?n:void 0}
// src/runtime/styles.ts
var rootAppliedStyles=new WeakMap;var registerStyle=function(e,r,t){var n=styles.get(e);if(supportsConstructableStylesheets&&t){n=n||new CSSStyleSheet;if(typeof n==="string"){n=r}else{n.replaceSync(r)}}else{n=r}styles.set(e,n)};var addStyle=function(e,r,t){var n,o,a;var i=getScopeId(r);var s=styles.get(i);if(!win.document){return i}e=e.nodeType===11/* DocumentFragment */?e:win.document;if(s){if(typeof s==="string"){e=e.head||e;var l=rootAppliedStyles.get(e);var u=void 0;if(!l){rootAppliedStyles.set(e,l=new Set)}if(!l.has(i)){u=win.document.createElement("style");u.textContent=s;var c=(n=plt.N)!=null?n:queryNonceMetaTagContent(win.document);if(c!=null){u.setAttribute("nonce",c)}if(!(r.u&1/* shadowDomEncapsulation */)){if(e.nodeName==="HEAD"){var f=e.querySelectorAll("link[rel=preconnect]");var d=f.length>0?f[f.length-1].nextSibling:e.querySelector("style");e.insertBefore(u,(d==null?void 0:d.parentNode)===e?d:null)}else if("host"in e){if(supportsConstructableStylesheets){var v=(o=e.defaultView)!=null?o:e.ownerDocument.defaultView;var p=new v.CSSStyleSheet;p.replaceSync(s);if(supportsMutableAdoptedStyleSheets){e.adoptedStyleSheets.unshift(p)}else{e.adoptedStyleSheets=__spreadArray([p],e.adoptedStyleSheets,true)}}else{var b=e.querySelector("style");if(b&&true){b.textContent=s+b.textContent}else{e.prepend(u)}}}else{e.append(u)}}if(r.u&1/* shadowDomEncapsulation */){e.insertBefore(u,null)}if(r.u&4/* hasSlotRelocation */){u.textContent+=SLOT_FB_CSS}if(l){l.add(i)}}}else{var l=rootAppliedStyles.get(e);if(!l){rootAppliedStyles.set(e,l=new Set)}if(!l.has(i)){var v=(a=e.defaultView)!=null?a:e.ownerDocument.defaultView;var p=void 0;if(s.constructor===v.CSSStyleSheet){p=s}else{p=new v.CSSStyleSheet;for(var m=0;m<s.cssRules.length;m++){p.insertRule(s.cssRules[m].cssText,m)}}if(supportsMutableAdoptedStyleSheets){e.adoptedStyleSheets.push(p)}else{e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets,true),[p],false)}l.add(i)}}}return i};var attachStyles=function(e){var r=e.t;var t=e.$hostElement$;var n=r.u;var o=createTime("attachStyles",r._);var a=addStyle(t.shadowRoot?t.shadowRoot:t.getRootNode(),r);if(n&10/* needsScopedEncapsulation */){t["s-sc"]=a;t.classList.add(a+"-h")}o()};var getScopeId=function(e,r){return"sc-"+e._};
// src/utils/helpers.ts
var isDef=function(e){return e!=null&&e!==void 0};var isComplexType=function(e){e=typeof e;return e==="object"||e==="function"};
// src/runtime/vdom/h.ts
var h=function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}if(typeof e==="string"){e=transformTag(e)}var o=null;var a=null;var i=null;var s=false;var l=false;var u=[];var c=function(r){for(var t=0;t<r.length;t++){o=r[t];if(Array.isArray(o)){c(o)}else if(o!=null&&typeof o!=="boolean"){if(s=typeof e!=="function"&&!isComplexType(o)){o=String(o)}else if(typeof e!=="function"&&o.u===void 0){{consoleError("Invalid vNode child")}continue}if(s&&l){u[u.length-1].A+=o}else{u.push(s?newVNode(null,o):o)}l=s}}};c(t);if(r){if(r.key){a=r.key}if(r.name){i=r.name}{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,u,vdomFnUtils)}var d=newVNode(e,null);d.k=r;if(u.length>0){d.R=u}{d.L=a}{d.O=i}return d};var newVNode=function(e,r){var t={u:0,I:e,
// Normalize undefined to null to prevent rendering "undefined" as text
A:r!=null?r:null,V:null,R:null};{t.k=null}{t.L=null}{t.O=null}return t};var Host={};var isHost=function(e){return e&&e.I===Host};var vdomFnUtils={forEach:function(e,r){return e.map(convertToPublic).forEach(r)},map:function(e,r){return e.map(convertToPublic).map(r).map(convertToPrivate)}};var convertToPublic=function(e){return{vattrs:e.k,vchildren:e.R,vkey:e.L,vname:e.O,vtag:e.I,vtext:e.A}};var convertToPrivate=function(e){if(typeof e.vtag==="function"){var r=__assign({},e.vattrs);if(e.vkey){r.key=e.vkey}if(e.vname){r.name=e.vname}return h.apply(void 0,__spreadArray([e.vtag,r],e.vchildren||[],false))}var t=newVNode(e.vtag,e.vtext);t.k=e.vattrs;t.R=e.vchildren;t.L=e.vkey;t.O=e.vname;return t};
// src/runtime/normalize-watchers.ts
var normalizeWatchers=function(e){if(!e)return void 0;var r=Object.keys(e);if(r.length===0)return void 0;var t=false;for(var n=0,o=r;n<o.length;n++){var a=o[n];if(t)break;for(var i=0,s=e[a];i<s.length;i++){var l=s[i];if(typeof l==="string"){t=true;break}}}if(!t)return e;var u={};for(var c=0,f=r;c<f.length;c++){var a=f[c];u[a]=e[a].map((function(e){var r;return typeof e==="string"?(r={},r[e]=0,r):e}))}return u};
// src/runtime/parse-property-value.ts
var parsePropertyValue=function(e,r,t){if(e!=null&&!isComplexType(e)){if(r&4/* Boolean */){if(t&&typeof e==="string"){return e===""||!!e}else{return e==="false"?false:e===""||!!e}}if(r&2/* Number */){return typeof e==="string"?parseFloat(e):typeof e==="number"?e:NaN}if(r&1/* String */){return String(e)}return e}return e};var getElement=function(e){var r;return(r=getHostRef(e))==null?void 0:r.$hostElement$};
// src/runtime/event-emitter.ts
var createEvent=function(e,r,t){var n=getElement(e);return{emit:function(e){return emitEvent(n,r,{bubbles:true,composed:true,cancelable:true,detail:e})}}};var emitEvent=function(e,r,t){var n=plt.ce(r,t);e.dispatchEvent(n);return n};var setAccessor=function(e,r,t,n,o,a,i){if(t===n){return}var s=isMemberInElement(e,r);var l=r.toLowerCase();if(r==="class"){var u=e.classList;var c=parseClassList(t);var f=parseClassList(n);{var d=c.filter((function(e){return e&&!f.includes(e)}));u.remove.apply(u,d);u.add.apply(u,f.filter((function(e){return e&&!c.includes(e)})))}}else if(r==="style"){{for(var v in t){if(!n||n[v]==null){if(v.includes("-")){e.style.removeProperty(v)}else{e.style[v]=""}}}}for(var v in n){if(!t||n[v]!==t[v]){if(v.includes("-")){e.style.setProperty(v,n[v])}else{e.style[v]=n[v]}}}}else if(r==="key");else if(r==="ref"){if(n){queueRefAttachment(n,e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(isMemberInElement(win,l)){r=l.slice(2)}else{r=l[2]+r.slice(3)}if(t||n){var p=r.endsWith(CAPTURE_EVENT_SUFFIX);r=r.replace(CAPTURE_EVENT_REGEX,"");if(t){plt.rel(e,r,t,p)}if(n){plt.ael(e,r,n,p)}}}else if(r[0]==="a"&&r.startsWith("attr:")){var b=r.slice(5);var m=void 0;{var y=getHostRef(e);if(y&&y.t&&y.t.o){var h=y.t.o[b];if(h&&h[1]){m=h[1]}}}if(!m){m=b.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}if(n==null||n===false){if(n!==false||e.getAttribute(m)===""){e.removeAttribute(m)}}else{e.setAttribute(m,n===true?"":n)}return}else if(r[0]==="p"&&r.startsWith("prop:")){var b=r.slice(5);try{e[b]=n}catch(e){}return}else{var E=isComplexType(n);if((s||E&&n!==null)&&!o){try{if(!e.tagName.includes("-")){var S=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!==S){if(typeof e.__lookupSetter__(r)==="function"){e[r]=S}else{e.setAttribute(r,S)}}}else if(e[r]!==n){e[r]=n}}catch(e){}}var g=false;{if(l!==(l=l.replace(/^xlink\:?/,""))){r=l;g=true}}if(n==null||n===false){if(n!==false||e.getAttribute(r)===""||a&4/* isHost */&&!isEnumeratedAttribute(r)){if(g){e.removeAttributeNS(XLINK_NS,r)}else{e.removeAttribute(r)}}}else if((!s||a&4/* isHost */||o)&&!E&&e.nodeType===1/* ElementNode */){n=n===true?"":n;if(g){e.setAttributeNS(XLINK_NS,r,n)}else{e.setAttribute(r,n)}}}};var ENUMERATED_ATTRIBUTES=new Set(["draggable","contenteditable","spellcheck"]);var isEnumeratedAttribute=function(e){return ENUMERATED_ATTRIBUTES.has(e)||e.startsWith("aria-")};var parseClassListRegex=/\s/;var parseClassList=function(e){if(typeof e==="object"&&e&&"baseVal"in e){e=e.baseVal}if(!e||typeof e!=="string"){return[]}return e.split(parseClassListRegex)};var CAPTURE_EVENT_SUFFIX="Capture";var CAPTURE_EVENT_REGEX=new RegExp(CAPTURE_EVENT_SUFFIX+"$");
// src/runtime/vdom/update-element.ts
var updateElement=function(e,r,t,n){var o=r.V.nodeType===11/* DocumentFragment */&&r.V.host?r.V.host:r.V;var a=e&&e.k||{};var i=r.k||{};{for(var s=0,l=sortedAttrNames(Object.keys(a));s<l.length;s++){var u=l[s];if(!(u in i)){setAccessor(o,u,a[u],void 0,t,r.u)}}}for(var c=0,f=sortedAttrNames(Object.keys(i));c<f.length;c++){var u=f[c];setAccessor(o,u,a[u],i[u],t,r.u)}};function sortedAttrNames(e){return e.includes("ref")?__spreadArray(__spreadArray([],e.filter((function(e){return e!=="ref"})),true),["ref"],false):
// no need to sort, return the original array
e}
// src/runtime/vdom/vdom-render.ts
var scopeId;var contentRef;var hostTagName;var useNativeShadowDom=false;var checkSlotFallbackVisibility=false;var checkSlotRelocate=false;var isSvgMode=false;var refCallbacksToRemove=[];var refCallbacksToAttach=[];var createElm=function(e,r,t){var n;var o=r.R[t];var a=0;var i;var s;var l;if(!useNativeShadowDom){checkSlotRelocate=true;if(o.I==="slot"){o.u|=o.R?
// slot element has fallback content
// still create an element that "mocks" the slot element
2/* isSlotFallback */:
// slot element does not have fallback content
// create an html comment we'll use to always reference
// where actual slot content should sit next to
1/* isSlotReference */}}if(o.A!=null){i=o.V=win.document.createTextNode(o.A)}else if(o.u&1/* isSlotReference */){i=o.V=win.document.createTextNode("");{updateElement(null,o,isSvgMode)}}else{if(!win.document){throw new Error("You are trying to render a Stencil component in an environment that doesn't support the DOM.")}i=o.V=win.document.createElement(!useNativeShadowDom&&BUILD.slotRelocation&&o.u&2/* isSlotFallback */?"slot-fb":o.I);{updateElement(null,o,isSvgMode)}if(isDef(scopeId)&&i["s-si"]!==scopeId){i.classList.add(i["s-si"]=scopeId)}if(o.R){var u=o.I==="template"?i.content:i;for(a=0;a<o.R.length;++a){s=createElm(e,o,a);if(s){u.appendChild(s)}}}}i["s-hn"]=hostTagName;{if(o.u&(2/* isSlotFallback */|1/* isSlotReference */)){i["s-sr"]=true;i["s-cr"]=contentRef;i["s-sn"]=o.O||"";i["s-rf"]=(n=o.k)==null?void 0:n.ref;patchSlotNode(i);l=e&&e.R&&e.R[t];if(l&&l.I===o.I&&e.V){relocateToHostRoot(e.V)}{addRemoveSlotScopedClass(contentRef,i,r.V,e==null?void 0:e.V)}}}return i};var relocateToHostRoot=function(e){plt.u|=1/* isTmpDisconnected */;var r=e.closest(hostTagName.toLowerCase());if(r!=null){var t=Array.from(r.__childNodes||r.childNodes).find((function(e){return e["s-cr"]}));var n=Array.from(e.__childNodes||e.childNodes);for(var o=0,a=t?n.reverse():n;o<a.length;o++){var i=a[o];if(i["s-sh"]!=null){insertBefore(r,i,t!=null?t:null);i["s-sh"]=void 0;checkSlotRelocate=true}}}plt.u&=-2/* isTmpDisconnected */};var putBackInOriginalLocation=function(e,r){plt.u|=1/* isTmpDisconnected */;var t=Array.from(e.__childNodes||e.childNodes);if(e["s-sr"]){var n=e;while(n=n.nextSibling){if(n&&n["s-sn"]===e["s-sn"]&&n["s-sh"]===hostTagName){t.push(n)}}}for(var o=t.length-1;o>=0;o--){var a=t[o];if(a["s-hn"]!==hostTagName&&a["s-ol"]){insertBefore(referenceNode(a).parentNode,a,referenceNode(a));a["s-ol"].remove();a["s-ol"]=void 0;a["s-sh"]=void 0;checkSlotRelocate=true}if(r){putBackInOriginalLocation(a,r)}}plt.u&=-2/* isTmpDisconnected */};var addVnodes=function(e,r,t,n,o,a){var i=e["s-cr"]&&e["s-cr"].parentNode||e;var s;if(i.shadowRoot&&i.tagName===hostTagName){i=i.shadowRoot}if(t.I==="template"){i=i.content}for(;o<=a;++o){if(n[o]){s=createElm(null,t,o);if(s){n[o].V=s;insertBefore(i,s,referenceNode(r))}}}};var removeVnodes=function(e,r,t){for(var n=r;n<=t;++n){var o=e[n];if(o){var a=o.V;nullifyVNodeRefs(o);if(a){{checkSlotFallbackVisibility=true;if(a["s-ol"]){a["s-ol"].remove()}else{putBackInOriginalLocation(a,true)}}a.remove()}}}};var updateChildren=function(e,r,t,n,o){if(o===void 0){o=false}var a=0;var i=0;var s=0;var l=0;var u=r.length-1;var c=r[0];var f=r[u];var d=n.length-1;var v=n[0];var p=n[d];var b;var m;var y=t.I==="template"?e.content:e;while(a<=u&&i<=d){if(c==null){c=r[++a]}else if(f==null){f=r[--u]}else if(v==null){v=n[++i]}else if(p==null){p=n[--d]}else if(isSameVnode(c,v,o)){patch(c,v,o);c=r[++a];v=n[++i]}else if(isSameVnode(f,p,o)){patch(f,p,o);f=r[--u];p=n[--d]}else if(isSameVnode(c,p,o)){if(c.I==="slot"||p.I==="slot"){putBackInOriginalLocation(c.V.parentNode,false)}patch(c,p,o);insertBefore(y,c.V,f.V.nextSibling);c=r[++a];p=n[--d]}else if(isSameVnode(f,v,o)){if(c.I==="slot"||p.I==="slot"){putBackInOriginalLocation(f.V.parentNode,false)}patch(f,v,o);insertBefore(y,f.V,c.V);f=r[--u];v=n[++i]}else{s=-1;{for(l=a;l<=u;++l){if(r[l]&&r[l].L!==null&&r[l].L===v.L){s=l;break}}}if(s>=0){m=r[s];if(m.I!==v.I){b=createElm(r&&r[i],t,i)}else{patch(m,v,o);r[s]=void 0;b=m.V}v=n[++i]}else{b=createElm(r&&r[i],t,i);v=n[++i]}if(b){{insertBefore(referenceNode(c.V).parentNode,b,referenceNode(c.V))}}}}if(a>u){addVnodes(e,n[d+1]==null?null:n[d+1].V,t,n,i,d)}else if(i>d){removeVnodes(r,a,u)}};var isSameVnode=function(e,r,t){if(t===void 0){t=false}if(e.I===r.I){if(e.I==="slot"){return e.O===r.O}if(!t){return e.L===r.L}if(t&&!e.L&&r.L){e.L=r.L}return true}return false};var referenceNode=function(e){return e&&e["s-ol"]||e};var patch=function(e,r,t){if(t===void 0){t=false}var n=r.V=e.V;var o=e.R;var a=r.R;var i=r.I;var s=r.A;var l;if(s==null){{if(i==="slot"&&!useNativeShadowDom){if(e.O!==r.O){r.V["s-sn"]=r.O||"";relocateToHostRoot(r.V.parentElement)}}updateElement(e,r,isSvgMode)}if(o!==null&&a!==null){updateChildren(n,o,r,a,t)}else if(a!==null){if(e.A!==null){n.textContent=""}addVnodes(n,null,r,a,0,a.length-1)}else if(
// don't do this on initial render as it can cause non-hydrated content to be removed
!t&&BUILD.updatable&&o!==null){removeVnodes(o,0,o.length-1)}else;}else if(l=n["s-cr"]){l.parentNode.textContent=s}else if(e.A!==s){n.data=s}};var relocateNodes=[];var markSlotContentForRelocation=function(e){var r;var t;var n;var o=e.__childNodes||e.childNodes;for(var a=0,i=o;a<i.length;a++){var s=i[a];if(s["s-sr"]&&(r=s["s-cr"])&&r.parentNode){t=r.parentNode.__childNodes||r.parentNode.childNodes;var l=s["s-sn"];var u=function(){r=t[n];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==s["s-hn"]&&(// let an exact named-slot match override a stale default-slot claim. Skip this for
// `slotName === ''` itself - a matched default node's cached `s-sn` is `''` too, which
// would trivially "match" on every re-render and force pointless re-insertion.
!r["s-sh"]||r["s-sh"]!==s["s-hn"]||l!==""&&getSlotName(r)===l)){if(isNodeLocatedInSlot(r,l)){var e=relocateNodes.find((function(e){return e.M===r}));checkSlotFallbackVisibility=true;r["s-sn"]=r["s-sn"]||l;if(e){e.M["s-sh"]=s["s-hn"];e.D=s}else{r["s-sh"]=s["s-hn"];relocateNodes.push({D:s,M:r})}if(r["s-sr"]){relocateNodes.map((function(t){if(isNodeLocatedInSlot(t.M,r["s-sn"])){e=relocateNodes.find((function(e){return e.M===r}));if(e&&!t.D){t.D=e.D}}}))}}else if(!relocateNodes.some((function(e){return e.M===r}))){relocateNodes.push({M:r})}}};for(n=t.length-1;n>=0;n--){u()}}if(s.nodeType===1/* ElementNode */){markSlotContentForRelocation(s)}}};var nullifyVNodeRefs=function(e){{if(e.k&&e.k.ref){refCallbacksToRemove.push((function(){return e.k.ref(null)}))}e.R&&e.R.map(nullifyVNodeRefs)}};var queueRefAttachment=function(e,r){{refCallbacksToAttach.push((function(){return e(r)}))}};var flushQueuedRefCallbacks=function(){{refCallbacksToRemove.forEach((function(e){return e()}));refCallbacksToRemove.length=0;refCallbacksToAttach.forEach((function(e){return e()}));refCallbacksToAttach.length=0}};var insertBefore=function(e,r,t,n){{if(typeof r["s-sn"]==="string"&&!!r["s-sr"]&&!!r["s-cr"]){addRemoveSlotScopedClass(r["s-cr"],r,e,r.parentElement)}else if(typeof r["s-sn"]==="string"){e.insertBefore(r,t);var o=findSlotFromSlottedNode(r).slotNode;if(o&&!n)dispatchSlotChangeEvent(o);return r}}if(e==null?void 0:e.__insertBefore){return e.__insertBefore(r,t)}else{return e==null?void 0:e.insertBefore(r,t)}};function addRemoveSlotScopedClass(e,r,t,n){var o,a;var i;if(e&&typeof r["s-sn"]==="string"&&!!r["s-sr"]&&e.parentNode&&e.parentNode["s-sc"]&&(i=r["s-si"]||e.parentNode["s-sc"])){var s=r["s-sn"];var l=r["s-hn"];(o=t.classList)==null?void 0:o.add(i+"-s");if(n&&((a=n.classList)==null?void 0:a.contains(i+"-s"))){var u=(n.__childNodes||n.childNodes)[0];var c=false;while(u){if(u["s-sn"]!==s&&u["s-hn"]===l&&!!u["s-sr"]){c=true;break}u=u.nextSibling}if(!c)n.classList.remove(i+"-s")}}}var renderVdom=function(e,r,t){if(t===void 0){t=false}var n,o,a,i,s;var l=e.$hostElement$;var u=e.t;var c=e.H||newVNode(null,null);var f=isHost(r);var d=f?r:h(null,null,r);hostTagName=l.tagName;if(u.$){d.k=d.k||{};u.$.forEach((function(e){var r=e[0],t=e[1];{d.k[t]=l[r]}}))}if(t&&d.k){for(var v=0,p=Object.keys(d.k);v<p.length;v++){var b=p[v];if(l.hasAttribute(b)&&!["key","ref","style","class"].includes(b)){d.k[b]=l[b]}}}d.I=null;d.u|=4/* isHost */;e.H=d;d.V=c.V=l.shadowRoot||l;{scopeId=l["s-sc"]}useNativeShadowDom=!!(u.u&1/* shadowDomEncapsulation */)&&!(u.u&128/* shadowNeedsScopedCss */);{contentRef=l["s-cr"];checkSlotFallbackVisibility=false}patch(c,d,t);{plt.u|=1/* isTmpDisconnected */;if(checkSlotRelocate){markSlotContentForRelocation(d.V);for(var m=0,y=relocateNodes;m<y.length;m++){var E=y[m];var S=E.M;if(!S["s-ol"]&&win.document){var g=win.document.createTextNode("");g["s-nr"]=S;insertBefore(S.parentNode,S["s-ol"]=g,S,t)}}for(var j=0,w=relocateNodes;j<w.length;j++){var E=w[j];var S=E.M;var _=E.D;if(S.nodeType===1/* ElementNode */&&t){S["s-ih"]=(n=S.hidden)!=null?n:false}if(_){var C=_.parentNode;var T=_.nextSibling;if(T&&T.nodeType===1/* ElementNode */){var g=(o=S["s-ol"])==null?void 0:o.previousSibling;while(g){var N=(a=g["s-nr"])!=null?a:null;if(N&&N["s-sn"]===S["s-sn"]&&C===(N.__parentNode||N.parentNode)){N=N.nextSibling;while(N===S||(N==null?void 0:N["s-sr"])){N=N==null?void 0:N.nextSibling}if(!N||!N["s-nr"]){T=N;break}}g=g.previousSibling}}var A=S.__parentNode||S.parentNode;var k=S.__nextSibling||S.nextSibling;if(!T&&C!==A||k!==T){if(S!==T){insertBefore(C,S,T,t);if(S.nodeType===8/* CommentNode */&&S.nodeValue.startsWith("s-nt-")){var R=win.document.createTextNode(S.nodeValue.replace(/^s-nt-/,""));R["s-hn"]=S["s-hn"];R["s-sn"]=S["s-sn"];R["s-sh"]=S["s-sh"];R["s-sr"]=S["s-sr"];R["s-ol"]=S["s-ol"];R["s-ol"]["s-nr"]=R;insertBefore(S.parentNode,R,S,t);S.parentNode.removeChild(S)}if(S.nodeType===1/* ElementNode */&&S.tagName!=="SLOT-FB"){S.hidden=(i=S["s-ih"])!=null?i:false}}}S&&typeof _["s-rf"]==="function"&&_["s-rf"](_)}else if(S.nodeType===1/* ElementNode */){S.hidden=true}}}if(checkSlotFallbackVisibility){updateFallbackSlotVisibility(d.V)}plt.u&=-2/* isTmpDisconnected */;relocateNodes.length=0}if(!useNativeShadowDom&&!(u.u&1/* shadowDomEncapsulation */)&&l["s-cr"]){var L=d.V.__childNodes||d.V.childNodes;for(var O=0,I=L;O<I.length;O++){var V=I[O];if(V["s-hn"]!==hostTagName&&!V["s-sh"]){if(t&&V["s-ih"]==null){V["s-ih"]=(s=V.hidden)!=null?s:false}if(V.nodeType===1/* ElementNode */){V.hidden=true}else if(V.nodeType===3/* TextNode */&&!!V.nodeValue.trim()){var M=win.document.createComment("s-nt-"+V.nodeValue);M["s-sn"]=V["s-sn"];insertBefore(V.parentNode,M,V,t);V.parentNode.removeChild(V)}}}}contentRef=void 0;flushQueuedRefCallbacks()};
// src/runtime/update-component.ts
var attachToAncestor=function(e,r){if(r&&!e.F&&r["s-p"]){var t=r["s-p"].push(new Promise((function(n){return e.F=function(){r["s-p"].splice(t-1,1);n()}})))}};var scheduleUpdate=function(e,r){{e.u|=16/* isQueuedForUpdate */}if(e.u&4/* isWaitingForChildren */){e.u|=512/* needsRerender */;return}attachToAncestor(e,e.P);var t=function(){return dispatchHooks(e,r)};if(r){queueMicrotask((function(){t()}));return}return writeTask(t)};var dispatchHooks=function(e,r){var t=e.$hostElement$;var n=createTime("scheduleUpdate",e.t._);var o=e.l;if(!o){throw new Error("Can't render component <".concat(t.tagName.toLowerCase()," /> with invalid Stencil runtime! Make sure this imported component is compiled with a `externalRuntime: true` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime"))}var a;if(r){{if(e.U){e.U=false;safeCall(o,"connectedCallback",void 0,t)}{e.u|=256/* isListenReady */;if(e.B){e.B.map((function(e){var r=e[0],n=e[1];return safeCall(o,r,n,t)}));e.B=void 0}}if(e.j.length){e.j.forEach((function(e){return e(t)}))}}a=safeCall(o,"componentWillLoad",void 0,t)}else{a=safeCall(o,"componentWillUpdate",void 0,t)}a=enqueue(a,(function(){return safeCall(o,"componentWillRender",void 0,t)}));n();return enqueue(a,(function(){return updateComponent(e,o,r)}))};var enqueue=function(e,r){return isPromisey(e)?e.then(r).catch((function(e){console.error(e);r()})):r()};var isPromisey=function(e){return e instanceof Promise||e&&e.then&&typeof e.then==="function"};var updateComponent=function(e,r,t){return __awaiter(void 0,void 0,void 0,(function(){var n,o,a,i,s,l,u;return __generator(this,(function(c){o=e.$hostElement$;a=createTime("update",e.t._);i=o["s-rc"];if(t){attachStyles(e)}s=createTime("render",e.t._);{callRender(e,r,o,t)}if(i){i.map((function(e){return e()}));o["s-rc"]=void 0}s();a();{l=(n=o["s-p"])!=null?n:[];u=function(){return postUpdateComponent(e)};if(l.length===0){u()}else{Promise.all(l).then(u).catch(u);e.u|=4/* isWaitingForChildren */;l.length=0}}return[2/*return*/]}))}))};var callRender=function(e,r,t,n){try{r=r.render();{e.u&=-17/* isQueuedForUpdate */}{e.u|=2/* hasRendered */}{{{renderVdom(e,r,n)}}}}catch(r){consoleError(r,e.$hostElement$)}return null};var postUpdateComponent=function(e){var r=e.t._;var t=e.$hostElement$;var n=createTime("postUpdate",r);var o=e.l;var a=e.P;safeCall(o,"componentDidRender",void 0,t);if(!(e.u&64/* hasLoadedComponent */)){e.u|=64/* hasLoadedComponent */;{addHydratedFlag(t)}safeCall(o,"componentDidLoad",void 0,t);n();{e.S(t);if(!a){appDidLoad()}}}else{safeCall(o,"componentDidUpdate",void 0,t);n()}{e.m(t)}{if(e.F){e.F();e.F=void 0}if(e.u&512/* needsRerender */){nextTick((function(){return scheduleUpdate(e,false)}))}e.u&=-517}};var appDidLoad=function(e){nextTick((function(){return emitEvent(win,"appload",{detail:{namespace:NAMESPACE}})}))};var safeCall=function(e,r,t,n){if(e&&e[r]){try{return e[r](t)}catch(e){consoleError(e,n)}}return void 0};var addHydratedFlag=function(e){var r;return e.classList.add((r=BUILD.hydratedSelectorName)!=null?r:"hydrated")};
// src/runtime/set-value.ts
var getValue=function(e,r){return getHostRef(e).i.get(r)};var setValue=function(e,r,t,n){var o=getHostRef(e);if(!o){return}if(!o){throw new Error("Couldn't find host element for \"".concat(n._,'" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).'))}var a=o.$hostElement$;var i=o.i.get(r);var s=o.u;var l=o.l;t=parsePropertyValue(t,n.o[r][0],!!(n.u&64/* formAssociated */));var u=Number.isNaN(i)&&Number.isNaN(t);var c=t!==i&&!u;if((!(s&8/* isConstructingInstance */)||i===void 0)&&c){o.i.set(r,t);if(n.q){var f=n.q[r];if(f){f.map((function(e){try{var n=Object.entries(e)[0],u=n[0],c=n[1];if(s&128/* isWatchReady */||c&1/* Immediate */){if(!l){o.j.push((function(){o.l[u](t,i,r)}))}else{l[u](t,i,r)}}}catch(e){consoleError(e,a)}}))}}if(s&2/* hasRendered */){if(l.componentShouldUpdate){var d=l.componentShouldUpdate(t,i,r);if(d===false&&!(s&16/* isQueuedForUpdate */)){return}}if(!(s&16/* isQueuedForUpdate */)){scheduleUpdate(o,false)}}}};
// src/runtime/proxy-component.ts
var reflectedAttrValue=function(e){return e==null||e===false?null:e===true?"":String(e)};var replayPendingSetterValues=function(e,r){var t;var n=e.l;if(!n)return;for(var o=0,a=Object.entries((t=r.o)!=null?t:{});o<a.length;o++){var i=a[o],s=i[0],l=i[1][0];if(l&4096/* Setter */&&e.i.has(s)){var u=e.i.get(s);if(n[s]!==u){n[s]=u}}}};var proxyComponent=function(e,r,t){var n,o;var a=e.prototype;if(r.u&64/* formAssociated */&&t&1/* isElementConstructor */){FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach((function(e){Object.defineProperty(a,e,{value:function(){var r=[];for(var t=0;t<arguments.length;t++){r[t]=arguments[t]}var n;var o=getHostRef(this);var a=o==null?void 0:o.l;if(!a){(n=o==null?void 0:o.h)==null?void 0:n.then((function(t){var n=t[e];typeof n==="function"&&n.call.apply(n,__spreadArray([t],r,false))}))}else{var i=a[e];typeof i==="function"&&i.call.apply(i,__spreadArray([a],r,false))}}})}))}if(r.o||BUILD.propChangeCallback){{if(e.watchers&&!r.q){r.q=normalizeWatchers(e.watchers)}if(e.deserializers&&!r.W){r.W=e.deserializers}if(e.serializers&&!r.X){r.X=e.serializers}}var i=Object.entries((n=r.o)!=null?n:{});i.map((function(e){var n=e[0],o=e[1][0];if(o&31/* Prop */||t&2/* proxyState */&&o&32/* State */){var i=getPropertyDescriptor(a,n)||{},s=i.get,l=i.set;if(s)r.o[n][0]|=2048/* Getter */;if(l)r.o[n][0]|=4096/* Setter */;if(t&1/* isElementConstructor */||!s){Object.defineProperty(a,n,{get:function(){{if((r.o[n][0]&2048/* Getter */)===0){return getValue(this,n)}var e=getHostRef(this);if(!e)return a[n];return e.l?e.l[n]:getValue(this,n)}},configurable:true,enumerable:true})}Object.defineProperty(a,n,{set:function(e){var a=getHostRef(this);if(!a){return}if(l){var i=o&32/* State */?this[n]:a.$hostElement$[n];if(typeof i==="undefined"&&a.i.get(n)){e=a.i.get(n)}l.apply(this,[parsePropertyValue(e,o,!!(r.u&64/* formAssociated */))]);e=o&32/* State */?this[n]:a.$hostElement$[n];setValue(this,n,e,r);return}{if((t&1/* isElementConstructor */)===0||(r.o[n][0]&4096/* Setter */)===0){setValue(this,n,e,r);return}var s=parsePropertyValue(e,o,!!(r.u&64/* formAssociated */));if(a.l){var i=a.l[n];if(!a.i.get(n)&&i){a.i.set(n,i)}a.l[n]=s;setValue(this,n,a.l[n],r)}else{a.i.set(n,s)}}}})}else if(t&1/* isElementConstructor */&&o&64/* Method */){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t;var o=getHostRef(this);return(t=o==null?void 0:o.p)==null?void 0:t.then((function(){var r;return(r=o.l)==null?void 0:r[n].apply(r,e)}))}})}}));if(t&1/* isElementConstructor */){var s=new Map;a.attributeChangedCallback=function(e,t,n){var o=this;plt.jmp((function(){var l;var u=s.get(e);var c=getHostRef(o);if(o.hasOwnProperty(u)&&BUILD.lazyLoad){n=o[u];delete o[u]}if(a.hasOwnProperty(u)&&typeof o[u]==="number"&&// cast type to number to avoid TS compiler issues
o[u]==n){return}else if(u==null){var f=c==null?void 0:c.u;if(c&&f&&!(f&8/* isConstructingInstance */)&&n!==t){var d=c.l;var v=(l=r.q)==null?void 0:l[e];v==null?void 0:v.forEach((function(r){var o=Object.entries(r)[0],a=o[0],i=o[1];if(d[a]!=null&&(f&128/* isWatchReady */||i&1/* Immediate */)){d[a].call(d,n,t,e)}}))}return}var p=i.find((function(e){var r=e[0];return r===u}));var b=p?p[1][0]:0;var m=b&4/* Boolean */;if(b&512/* ReflectAttr */&&b&8/* Any */&&// a complex value is never written to an attribute, so a change while the prop holds
// one is always external
!isComplexType(o[u])&&reflectedAttrValue(o[u])===n){return}var y=m&&n===null&&o[u]===void 0;if(m){var h=!!(r.u&64/* formAssociated */);n=n===null||n==="false"&&!h?false:true}var E=Object.getOwnPropertyDescriptor(a,u);if(!y&&n!=o[u]&&(!E.get||!!E.set)){o[u]=n}}))};e.observedAttributes=Array.from(
new Set(__spreadArray(__spreadArray([],Object.keys((o=r.q)!=null?o:{}),true),i.filter((function(e){var r=e[0],t=e[1];return t[0]&31}/* HasAttribute */)).map((function(e){var t=e[0],n=e[1];var o;var a=n[1]||t;s.set(a,t);if(n[0]&512/* ReflectAttr */){(o=r.$)==null?void 0:o.push([t,a])}return a})),true)))}}return e};
// src/runtime/initialize-component.ts
var initializeComponent=function(e,r,t,n){return __awaiter(void 0,void 0,void 0,(function(){var n,o,a,i,s,l,u,c,f,d,v,p,b,m;return __generator(this,(function(y){switch(y.label){case 0:y.trys.push([0,7,,8]);if(!((r.u&32/* hasInitializedComponent */)===0))return[3/*break*/,6];r.u|=32/* hasInitializedComponent */;r.u&=-1025/* hasFailedLoad */;a=t.C;if(!a)return[3/*break*/,4];i=loadModule(t,r);if(!(i&&"then"in i))return[3/*break*/,2];s=uniqueTime();return[4/*yield*/,i];case 1:o=y.sent();s();return[3/*break*/,3];case 2:o=i;y.label=3;case 3:if(!o){r.u&=-33/* hasInitializedComponent */;r.Y=((n=r.Y)!=null?n:0)+1;if(r.Y<MAX_LAZY_LOAD_RETRIES){r.u|=1024/* hasFailedLoad */}throw new Error('Constructor for "'.concat(t._,"#").concat(r.G,'" was not found'))}if(!o.isProxied){{t.q=normalizeWatchers(o.watchers);t.X=o.serializers;t.W=o.deserializers}proxyComponent(o,t,2/* proxyState */);o.isProxied=true}l=createTime("createInstance",t._);{r.u|=8/* isConstructingInstance */}try{new o(r)}catch(r){consoleError(r,e)}{r.u&=-9/* isConstructingInstance */;replayPendingSetterValues(r,t)}{r.u|=128/* isWatchReady */}l();u=t.u&4/* hasSlotRelocation */;if(!u){fireConnectedCallback(r.l,e)}else{r.U=true}return[3/*break*/,5];case 4:o=e.constructor;c=e.localName;customElements.whenDefined(c).then((function(){return r.u|=128}/* isWatchReady */));y.label=5;case 5:if(o&&o.style){f=void 0;if(typeof o.style==="string"){f=o.style}d=getScopeId(t);if(!styles.has(d)||BUILD.hotModuleReplacement){v=createTime("registerStyles",t._);registerStyle(d,f,!!(t.u&1/* shadowDomEncapsulation */));v()}}y.label=6;case 6:p=r.P;b=function(){return scheduleUpdate(r,true)};if(p&&p["s-rc"]){p["s-rc"].push(b)}else{b()}return[3/*break*/,8];case 7:m=y.sent();consoleError(m,e);if(r.F){r.F();r.F=void 0}if(r.S&&!(r.u&1024/* hasFailedLoad */)){r.S(e)}return[3/*break*/,8];case 8:return[2/*return*/]}}))}))};var fireConnectedCallback=function(e,r){{safeCall(e,"connectedCallback",void 0,r)}};
// src/runtime/connected-callback.ts
var connectedCallback=function(e){if((plt.u&1/* isTmpDisconnected */)===0){var r=getHostRef(e);if(!r){return}var t=r.t;var n=createTime("connectedCallback",t._);if(!(r.u&1/* hasConnected */)){r.u|=1/* hasConnected */;{if(// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
t.u&(4/* hasSlotRelocation */|8/* needsShadowDomShim */)){setContentReference(e)}}{var o=e;while(o=o.parentNode||o.host){if(o["s-p"]){attachToAncestor(r,r.P=o);break}}}if(t.o){Object.entries(t.o).map((function(r){var t=r[0],n=r[1][0];if(n&31/* Prop */&&Object.prototype.hasOwnProperty.call(e,t)){var o=e[t];delete e[t];e[t]=o}}))}{initializeComponent(e,r,t)}}else{addHostEventListeners(e,r,t.K);if(r==null?void 0:r.l){fireConnectedCallback(r.l,e)}else if(r.u&1024/* hasFailedLoad */){setTimeout((function(){return initializeComponent(e,r,t)}),LAZY_LOAD_RETRY_INTERVAL_MS)}else if(r==null?void 0:r.h){r.h.then((function(){return fireConnectedCallback(r.l,e)}))}}n()}};var setContentReference=function(e){if(!win.document){return}var r=e["s-cr"]=win.document.createComment("");r["s-cn"]=true;insertBefore(e,r,e.firstChild)};var disconnectInstance=function(e,r){{safeCall(e,"disconnectedCallback",void 0,r||e)}};var disconnectedCallback=function(e){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(t){if((plt.u&1/* isTmpDisconnected */)===0){r=getHostRef(e);{if(r==null?void 0:r.Z){r.Z.map((function(e){return e()}));r.Z=void 0}}if(r==null?void 0:r.l){disconnectInstance(r.l,e)}else if(r==null?void 0:r.h){r.h.then((function(){return disconnectInstance(r.l,e)}))}}if(rootAppliedStyles.has(e)){rootAppliedStyles.delete(e)}if(e.shadowRoot&&rootAppliedStyles.has(e.shadowRoot)){rootAppliedStyles.delete(e.shadowRoot)}return[2/*return*/]}))}))};
// src/runtime/bootstrap-lazy.ts
var bootstrapLazy=function(e,r){if(r===void 0){r={}}var t;if(!win.document){console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");return}var n=createTime();var o=[];var a=r.exclude||[];var i=win.customElements;var s=win.document.head;var l=s.querySelector("meta[charset]");var u=win.document.createElement("style");var c=[];var f;var d=true;Object.assign(plt,r);plt.T=new URL(r.resourcesUrl||"./",win.document.baseURI).href;var v=false;e.map((function(e){e[1].map((function(r){var t,n;var s={u:r[0],_:r[1],o:r[2],K:r[3]};if(s.u&4/* hasSlotRelocation */){v=true}{s.o=r[2]}{s.K=r[3]}{s.$=[]}{s.q=normalizeWatchers(r[4]);s.X=(t=r[5])!=null?t:{};s.W=(n=r[6])!=null?n:{}}var l=transformTag(s._);var u=/** @class */function(e){__extends(r,e);
// StencilLazyHost
function r(r){var t=e.call(this,r)||this;t.hasRegisteredEventListeners=false;r=t;registerHost(r,s);if(s.u&1/* shadowDomEncapsulation */){{if(!r.shadowRoot){createShadowRoot.call(r,s)}else{if(r.shadowRoot.mode!=="open"){throw new Error("Unable to re-use existing shadow root for ".concat(s._,"! Mode is set to ").concat(r.shadowRoot.mode," but Stencil only supports open shadow roots."))}}}}return t}r.prototype.connectedCallback=function(){var e=this;var r=getHostRef(this);if(!r){return}if(!this.hasRegisteredEventListeners){this.hasRegisteredEventListeners=true;addHostEventListeners(this,r,s.K)}if(f){clearTimeout(f);f=null}if(d){c.push(this)}else{plt.jmp((function(){return connectedCallback(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;plt.jmp((function(){return disconnectedCallback(e)}));nextTick((function(){var r;var t=getHostRef(e);if(!t){return}var n=c.findIndex((function(r){return r===e}));if(n>-1){c.splice(n,1)}if(((r=t==null?void 0:t.H)==null?void 0:r.V)instanceof Node&&!t.H.V.isConnected){delete t.H.V}}))};r.prototype.componentOnReady=function(){var e;return(e=getHostRef(this))==null?void 0:e.h};return r}(HTMLElement);if(s.u&64/* formAssociated */){u.formAssociated=true}s.C=e[0];if(!a.includes(l)&&!i.get(l)){o.push(l);i.define(l,proxyComponent(u,s,1/* isElementConstructor */))}}))}));if(o.length>0){if(v){u.textContent+=SLOT_FB_CSS}{u.textContent+=o.sort()+HYDRATED_CSS}if(u.innerHTML.length){u.setAttribute("data-styles","");var p=(t=plt.N)!=null?t:queryNonceMetaTagContent(win.document);if(p!=null){u.setAttribute("nonce",p)}s.insertBefore(u,l?l.nextSibling:s.firstChild)}}d=false;if(c.length){c.map((function(e){return e.connectedCallback()}))}else{{plt.jmp((function(){return f=setTimeout(appDidLoad,30)}))}}n()};var addHostEventListeners=function(e,r,t,n){if(t&&win.document){t.map((function(t){var n=t[0],o=t[1],a=t[2];var i=getHostListenerTarget(win.document,e,n);var s=hostListenerProxy(r,a);var l=hostListenerOpts(n);plt.ael(i,o,s,l);(r.Z=r.Z||[]).push((function(){return plt.rel(i,o,s,l)}))}))}};var hostListenerProxy=function(e,r){return function(t){var n;try{{if(e.u&256/* isListenReady */){(n=e.l)==null?void 0:n[r](t)}else{(e.B=e.B||[]).push([r,t])}}}catch(r){consoleError(r,e.$hostElement$)}}};var getHostListenerTarget=function(e,r,t){if(t&8/* TargetWindow */){return win}if(t&16/* TargetBody */){return e.body}return r};var hostListenerOpts=function(e){return supportsListenerOptions?{passive:(e&1/* Passive */)!==0,capture:(e&2/* Capture */)!==0}:(e&2/* Capture */)!==0};
// src/runtime/nonce.ts
var setNonce=function(e){return plt.N=e};function transformTag(e){return e}export{Host as H,NAMESPACE as N,bootstrapLazy as b,createEvent as c,getElement as g,h,promiseResolve as p,registerInstance as r,setNonce as s,win as w};