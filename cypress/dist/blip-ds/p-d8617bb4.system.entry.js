var __awaiter=this&&this.__awaiter||function(e,t,n,o){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function a(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?n(e.value):r(e.value).then(a,s)}l((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(s){if(o)throw new TypeError("Generator is already executing.");while(a&&(a=0,s[0]&&(n=0)),n)try{if(o=1,r&&(i=s[0]&2?r["return"]:s[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;if(r=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(l){s=[6,l];r=0}finally{o=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-d105fb25.system.js"],(function(e){"use strict";var t,n,o,r,i;return{setters:[function(e){t=e.r;n=e.c;o=e.h;r=e.H;i=e.g}],execute:function(){var a=':host{display:block;margin:-4px;padding:4px;width:100%;position:relative;overflow:hidden;-webkit-transition:height 0.5s;-moz-transition:height 0.5s;transition:height 0.5s}.nav_main{display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;padding:8px;position:relative;cursor:pointer;border-radius:8px;border:1px solid transparent;overflow:hidden}.nav_main--loading{cursor:wait}.nav_main--disable{opacity:0.5;cursor:not-allowed}.nav_main:before{content:"";position:absolute;inset:0}.nav_main:hover:before{background-color:var(--color-content-default, #454545);opacity:0.08}.nav_main:active:before{background-color:var(--color-content-default, #454545);opacity:0.16}.nav_main:hover,.nav_main_active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_main_active:before{background-color:var(--color-content-default, #454545);border-color:var(--color-hover, rgba(0, 0, 0, 0.08));opacity:0.08}.nav_main--disable:before,.nav_main--disable:hover{border-color:transparent;background-color:transparent}.nav_main .icon-item{position:relative;color:var(--color-content-default, #454545)}.nav_main .icon-item-active{color:var(--color-primary, #1e6bf1)}.nav_main_text{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.nav_main_text .title-item{color:var(--color-content-default, #454545)}.nav_main_text .title-item--loading{color:var(--color-content-disable, #636363)}.nav_main_text .subtitle-item{color:var(--color-content-default, #454545)}.nav_main_text .subtitle-item--loading{color:var(--color-content-disable, #636363)}.nav_main_content{width:100%;-ms-flex-negative:99999;flex-shrink:99999}.nav_main_arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.nav_main_arrow--disable{color:var(--color-content-disable, #636363)}.nav_main_arrow_active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion{display:grid;grid-template-rows:0fr;-webkit-transition:all ease 0.5s;-moz-transition:all ease 0.5s;transition:all ease 0.5s}.accordion_open{grid-template-rows:1fr;padding:8px 0}.accordion .container{overflow:hidden;position:relative;padding-left:23px}.accordion .container:before{content:"";position:absolute;width:2px;inset:0;left:23px;top:8px;bottom:8px;border-radius:8px;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));opacity:0.8}.accordion .container--disable:before{background-color:transparent}.nav_tree_item{position:relative;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;cursor:pointer;padding:8px;padding-left:22px}.nav_tree_item--loading{cursor:wait}.nav_tree_item--disable{opacity:0.5;cursor:not-allowed}.nav_tree_item--disable:before,.nav_tree_item--disable:hover{border-color:transparent;background-color:transparent}.nav_tree_item .icon-item{position:relative;color:var(--color-content-default, #454545)}.nav_tree_item .icon-item-active{color:var(--color-primary, #1e6bf1)}.nav_tree_item_content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.nav_tree_item_slot{width:100%;-ms-flex-negative:99999;flex-shrink:99999}.nav_tree_item:before{content:"";position:absolute;width:2px;inset:0;top:8px;bottom:8px;border-radius:8px;background-color:transparent;-webkit-transition:background-color ease 0.8s;-moz-transition:background-color ease 0.8s;transition:background-color ease 0.8s}.nav_tree_item:hover:before{background-color:var(--color-pressed, rgba(0, 0, 0, 0.16));-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item_active:before{background-color:var(--color-primary, #1e6bf1);-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item_active:hover:before{background-color:var(--color-primary, #1e6bf1);-webkit-transition:background-color ease 0.3s;-moz-transition:background-color ease 0.3s;transition:background-color ease 0.3s}.nav_tree_item .icon-arrow{position:relative;-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.nav_tree_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.nav_tree_item_button{padding:8px;margin-left:14px;border-radius:8px;border:1px solid transparent}.nav_tree_item_button:before{left:-15px}.nav_tree_item_button:after{content:"";position:absolute;inset:0;border-radius:8px;background-color:transparent}.nav_tree_item_button:hover,.nav_tree_item_button_active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_tree_item_button:hover:after,.nav_tree_item_button_active:after{background-color:var(--color-content-default, #454545);opacity:0.08}.nav_tree_item_button:active{border-color:var(--color-pressed, rgba(0, 0, 0, 0.16))}.nav_tree_item_button:active:after{background-color:var(--color-content-default, #454545);opacity:0.16}.focus{position:relative}.focus:before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.focus:focus-visible{outline:none}.focus:focus-visible:before{border-color:var(--color-focus, #c226fb)}';var s=e("bds_nav_tree_item",function(){function e(e){var o=this;t(this,e);this.bdsToogleChange=n(this,"bdsToogleChange",7);this.navTreeParent=null;this.navTreeChild=null;this.itensElement=null;this.handler=function(){if(!o.loading&&!o.disable){if(o.navTreeParent.collapse=="single"){for(var e=0;e<o.itensElement.length;e++){if(o.itensElement[e]!=o.element)o.itensElement[e].isOpen=false}}o.toggle()}};this.collapse="single";this.icon=null;this.text=undefined;this.secondaryText=null;this.isOpen=false;this.loading=false;this.disable=false;this.dataTest=null}e.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.isOpen=!this.isOpen;return[2]}))}))};e.prototype.isOpenChanged=function(e){this.bdsToogleChange.emit({value:e,element:this.element})};e.prototype.componentWillLoad=function(){this.navTreeParent=this.element.parentElement.tagName=="BDS-NAV-TREE"&&this.element.parentElement||this.element.parentElement;this.navTreeChild=this.element.querySelector("bds-nav-tree-item")};e.prototype.componentWillRender=function(){this.itensElement=this.navTreeParent.getElementsByTagName("bds-nav-tree-item")};e.prototype.handleKeyDown=function(e){if(e.key=="Enter"){this.handler()}};e.prototype.render=function(){var e,t,n,i,a;var s=this;return o(r,null,o("div",{tabindex:"0",onKeyDown:this.handleKeyDown.bind(this),class:"focus"},o("div",{class:(e={nav_tree_item:true,nav_tree_item_active:this.isOpen,nav_tree_item_button:!this.navTreeChild,nav_tree_item_button_active:!this.navTreeChild&&this.isOpen},e["nav_tree_item--loading"]=this.loading,e["nav_tree_item--disable"]=this.disable,e),onClick:function(){return s.handler()},"data-test":this.dataTest,"aria-label":this.text+(this.secondaryText&&": ".concat(this.secondaryText))},this.loading?o("bds-loading-spinner",{size:"extra-small"}):this.icon?o("bds-icon",{class:(t={},t["icon-item"]=true,t["icon-item-active"]=this.isOpen,t),size:"medium",name:this.icon,color:"inherit",theme:"outline"}):"",o("div",{class:"nav_tree_item_content"},this.text&&o("bds-typo",{class:(n={},n["title-item"]=true,n["title-item--loading"]=this.loading,n),variant:"fs-14",tag:"span","line-height":"small",bold:this.isOpen?"bold":"regular"},this.text),this.secondaryText&&o("bds-typo",{class:(i={},i["subtitle-item"]=true,i["subtitle-item--loading"]=this.loading,i),variant:"fs-12","line-height":"small",tag:"span",margin:false},this.secondaryText)),o("div",{class:"nav_tree_item_slot"},o("slot",{name:"header-content"})),this.navTreeChild&&o("bds-icon",{class:(a={},a["nav_main_arrow"]=true,a["nav_main_arrow_active"]=this.isOpen,a["nav_main_arrow--loading"]=this.loading,a),name:"arrow-down"}))),this.navTreeChild&&o("div",{class:{accordion:true,accordion_open:this.isOpen}},o("div",{class:"container"},o("slot",null))))};Object.defineProperty(e.prototype,"element",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{isOpen:["isOpenChanged"]}},enumerable:false,configurable:true});return e}());s.style=a}}}));