System.register(["./p-CLAYiqZ6.system.js"],(function(t){"use strict";var e,i,s,a,c;return{setters:[function(t){e=t.r;i=t.c;s=t.h;a=t.H;c=t.g}],execute:function(){var o=function(){return':host{display:block;width:100%}:host(.list_item_content){display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall{padding:16px}.list_item_standard{padding:8px 16px}.list_item_short{padding:8px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-item .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius{border-radius:8px}.border_radius:before,.border_radius:after,.border_radius .active{border-radius:8px}.active{position:absolute;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08;inset:0}.clickable{position:relative;cursor:pointer;gap:8px}.clickable:before{content:"";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.clickable:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}'};var l=t("bds_list_item",/** @class */function(){function t(t){var s=this;e(this,t);this.bdsChecked=i(this,"bdsChecked");this.bdsClickActionButtom=i(this,"bdsClickActionButtom");this.internalChips=[];this.internalActionsButtons=[];this.checked=false;
/**
                     * Typelis. Used toselect type of item list.
                     */this.typeList=null;
/**
                     * AvatarName. Used to enter the avatar name.
                     */this.avatarName=null;
/**
                     * AvatarThumbnail. Used to insert the avatar photo.
                     */this.avatarThumbnail=null;
/**
                     * Icon. Used to add icon in list item.
                     */this.icon=null;
/**
                     * Value. Used to insert a value in list item.
                     */this.value=null;
/**
                     * Text. Used to insert a text in the display item.
                     */this.text=null;
/**
                     * SecondaryText. Used to insert a secondaryText in the display item.
                     */this.secondaryText=null;
/**
                     * The chips on the component
                     * Should be passed this way:
                     * chips='["chip1", "chip2"]'
                     */this.chips=[];
/**
                     * The actions buttons on the component
                     * Should be passed this way:
                     * actions-buttons='["copy", "settings-general", "more-options-horizontal"]'
                     */this.actionsButtons=[];
/**
                     * Clickable. Used to define if the item is clickable or not.
                     */this.clickable=false;
/**
                     * Active. Used to define when the item is highlighted.
                     */this.active=false;
/**
                     * Enable rounded border on item
                     */this.borderRadius=false;
/**
                     * Size. Entered as one of the size. Can be one of:
                     * 'tall', 'standard', 'short';
                     */this.size="standard";
/**
                     * Data test is the prop to specifically test the component action object.
                     */this.dataTest=null;this.handler=function(){s.typeList=="radio"?s.checked=true:s.checked=!s.checked};this.clickActionButtons=function(t,e){var i=e.composedPath()[0];s.bdsClickActionButtom.emit({value:s.value,icon:t,elementButton:i})}}t.prototype.componentWillLoad=function(){this.hasActionAreaSlot=!!this.hostElement.querySelector('[slot="action-area"]');this.hasContentAreaSlot=!!this.hostElement.querySelector('[slot="content-area"]');this.chipsChanged();this.actionsButtonsChanged()};t.prototype.checkedChanged=function(t){this.bdsChecked.emit({value:this.value,text:this.text,secondaryText:this.secondaryText,typeList:this.typeList,checked:t})};t.prototype.chipsChanged=function(){if(this.chips){if(typeof this.chips==="string"){
// Keep the current chips if AngularJS has not interpolated the attribute yet; @Watch('chips') reloads it.
try{this.internalChips=JSON.parse(this.chips)}catch(t){}}else{this.internalChips=this.chips}}else{this.internalChips=[]}};t.prototype.actionsButtonsChanged=function(){if(this.actionsButtons){if(typeof this.actionsButtons==="string"){
// Keep the current buttons if AngularJS has not interpolated the attribute yet; @Watch('actionsButtons') reloads it.
try{this.internalActionsButtons=JSON.parse(this.actionsButtons)}catch(t){}}else{this.internalActionsButtons=this.actionsButtons}}else{this.internalActionsButtons=[]}};t.prototype.renderChips=function(){if(!this.internalChips.length){return[]}return this.internalChips.map((function(t,e){var i=e.toString();var a=30;if(t.length<=a){return s("bds-chip-clickable",{id:i,key:i,color:"default"},t)}else{return s("bds-tooltip",{key:i,position:"top-center","tooltip-text":t},s("bds-chip-clickable",{id:i,key:i,color:"default"},"".concat(t.slice(0,a)," ...")))}}))};t.prototype.renderActionsButtons=function(){var t=this;if(!this.internalActionsButtons.length){return[]}return this.internalActionsButtons.map((function(e,i){var a=i.toString();return s("bds-button-icon",{key:a,variant:"secondary",icon:e,size:"short",onClick:function(i){return t.clickActionButtons(e,i)}})}))};t.prototype.render=function(){var t,e,i,c,o,l;var r=this.clickable==true||this.typeList=="checkbox"||this.typeList=="radio"||this.typeList=="switch";var n=this.typeList=="checkbox"||this.typeList=="radio";var d=this.avatarName||this.avatarThumbnail;return s(a,{key:"5d0fc6dc496c1970b60cf906f0716829207a2acf"},s("div",{key:"9e2dc4550ef33bbd2254d89c09474c3afbe49cf3",onClick:this.handler,tabindex:"0",class:(t={list_item:true,clickable:r,border_radius:this.borderRadius},t["list_item_".concat(this.size)]=true,t),"data-test":this.dataTest},this.active&&s("div",{key:"26af8caac0c5e6b4f9a1d9f03308a483e7955c30",class:"active"}),n&&s("div",{key:"b1b867d364f731dcf90e7ce9a700598b19ce794e",class:{input_list:true}},this.typeList=="radio"&&s("bds-radio",{key:"89692771d61ef323cc04a002f9b6dc22a755b3e1",value:this.value,checked:this.checked}),this.typeList=="checkbox"&&s("bds-checkbox",{key:"43ecf3976d1984dce20e25425f2f9fbbcaabf95e",refer:"",label:"",name:"cb1",disabled:false,checked:this.checked})),d?s("bds-avatar",{class:"avatar-item",name:this.avatarName,thumbnail:this.avatarThumbnail,size:"extra-small"}):this.icon&&s("bds-icon",{class:(e={},e["icon-item"]=true,e["icon-item-active"]=this.active,e),size:"medium",name:this.icon,color:"inherit",theme:this.active?"solid":"outline"}),s("div",{key:"c820ae9372e6a119c25bb266154549b888cafc48",class:(i={},i["content-slot"]=true,i)},s("slot",{key:"4f93ce728b872a1674b547d782f8809f2fc52f96"})),(this.text||this.secondaryText)&&s("div",{key:"600c2b3c47368fc4153712746d1dd3c7911cf29d",class:(c={},c["content-item"]=true,c["grow-up"]=!this.hasActionAreaSlot&&!this.hasContentAreaSlot&&this.internalChips.length<0,c)},this.text&&s("bds-typo",{key:"23ee91b19335a8eae029b38ec77e02eeeb3976c8",class:"title-item",variant:"fs-16",tag:"span",bold:this.active?"bold":"regular"},this.text),this.secondaryText&&s("bds-typo",{key:"ce84fa1cbd564bb41ac53b81102d25f3a162a8ba",class:"subtitle-item",variant:"fs-12","line-height":"small",tag:"span"},this.secondaryText)),s("div",{key:"5db03a578eb118dfd4957d105dd4946cb88191e7",class:(o={},o["content-area"]=true,o["grow-up"]=true,o)},this.internalChips.length>0&&s("div",{key:"70d22430305174f9f28a5c8f0b0ed7b00832227c",class:"internal-chips"},this.renderChips()),s("slot",{key:"159f927eb3d8912f99cbe71411c536976b8deb46",name:"content-area"})),(!this.typeList||this.typeList=="default")&&s("div",{key:"4a710862c532d7779ce46557919e3eec9cf54d45",class:(l={},l["action-area"]=true,l)},this.internalActionsButtons.length>0&&s("div",{key:"d3bb5d236a98625843c330d38dd3219ca5a4b0b2",class:"internal-actions-buttons"},this.renderActionsButtons()),s("slot",{key:"6f955de4081d3e80a06769e2b792ef383709bc59",name:"action-area"})),this.typeList=="switch"&&s("bds-switch",{key:"b64a0c1f2f0b909d149e089e734c181035a467db",refer:"",name:"",checked:this.checked})))};Object.defineProperty(t.prototype,"hostElement",{get:function(){return c(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{checked:[{checkedChanged:0}],chips:[{chipsChanged:0}],actionsButtons:[{actionsButtonsChanged:0}]}},enumerable:false,configurable:true});return t}());l.style=o()}}}));