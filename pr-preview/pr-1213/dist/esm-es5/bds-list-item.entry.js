import{r as registerInstance,c as createEvent,h,H as Host,g as getElement}from"./index-CkbvGS8Z.js";var listCss=function(){return':host{display:block;width:100%}:host(.list_item_content){display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall{padding:16px}.list_item_standard{padding:8px 16px}.list_item_short{padding:8px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-item-active{color:var(--color-primary, rgb(30, 107, 241))}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-item .subtitle-item{color:var(--color-content-default, rgb(40, 40, 40))}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, rgb(40, 40, 40))}.list_item .icon-arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius{border-radius:8px}.border_radius:before,.border_radius:after,.border_radius .active{border-radius:8px}.active{position:absolute;background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08;inset:0}.clickable{position:relative;cursor:pointer;gap:8px}.clickable:before{content:"";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.08}.clickable:active:before{background-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}'};var ListItem=/** @class */function(){function t(t){var e=this;registerInstance(this,t);this.bdsChecked=createEvent(this,"bdsChecked");this.bdsClickActionButtom=createEvent(this,"bdsClickActionButtom");this.internalChips=[];this.internalActionsButtons=[];this.checked=false;
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
         */this.dataTest=null;this.handler=function(){e.typeList=="radio"?e.checked=true:e.checked=!e.checked};this.clickActionButtons=function(t,i){var s=i.composedPath()[0];e.bdsClickActionButtom.emit({value:e.value,icon:t,elementButton:s})}}t.prototype.componentWillLoad=function(){this.hasActionAreaSlot=!!this.hostElement.querySelector('[slot="action-area"]');this.hasContentAreaSlot=!!this.hostElement.querySelector('[slot="content-area"]');this.chipsChanged();this.actionsButtonsChanged()};t.prototype.checkedChanged=function(t){this.bdsChecked.emit({value:this.value,text:this.text,secondaryText:this.secondaryText,typeList:this.typeList,checked:t})};t.prototype.chipsChanged=function(){if(this.chips){if(typeof this.chips==="string"){this.internalChips=JSON.parse(this.chips)}else{this.internalChips=this.chips}}else{this.internalChips=[]}};t.prototype.actionsButtonsChanged=function(){if(this.actionsButtons){if(typeof this.actionsButtons==="string"){this.internalActionsButtons=JSON.parse(this.actionsButtons)}else{this.internalActionsButtons=this.actionsButtons}}else{this.internalActionsButtons=[]}};t.prototype.renderChips=function(){if(!this.internalChips.length){return[]}return this.internalChips.map((function(t,e){var i=e.toString();var s=30;if(t.length<=s){return h("bds-chip-clickable",{id:i,key:i,color:"default"},t)}else{return h("bds-tooltip",{key:i,position:"top-center","tooltip-text":t},h("bds-chip-clickable",{id:i,key:i,color:"default"},"".concat(t.slice(0,s)," ...")))}}))};t.prototype.renderActionsButtons=function(){var t=this;if(!this.internalActionsButtons.length){return[]}return this.internalActionsButtons.map((function(e,i){var s=i.toString();return h("bds-button-icon",{key:s,variant:"secondary",icon:e,size:"short",onClick:function(i){return t.clickActionButtons(e,i)}})}))};t.prototype.render=function(){var t,e,i,s,a,o;var c=this.clickable==true||this.typeList=="checkbox"||this.typeList=="radio"||this.typeList=="switch";var l=this.typeList=="checkbox"||this.typeList=="radio";var r=this.avatarName||this.avatarThumbnail;return h(Host,{key:"1ed4b830af3dd04483c76b9eee2c6da7c8b3fe8d"},h("div",{key:"e2ba821790ddaca352cb4828938d78b0b20a7f76",onClick:this.handler,tabindex:"0",class:(t={list_item:true,clickable:c,border_radius:this.borderRadius},t["list_item_".concat(this.size)]=true,t),"data-test":this.dataTest},this.active&&h("div",{key:"e9c1425f04be56274f3370902bbf89ab8acd641d",class:"active"}),l&&h("div",{key:"371b856b19d43530b8a078f27569dbc7fcae7597",class:{input_list:true}},this.typeList=="radio"&&h("bds-radio",{key:"b3e42a0aacb5c98b8c9ae47ae57be3263930dab7",value:this.value,checked:this.checked}),this.typeList=="checkbox"&&h("bds-checkbox",{key:"74fb757f1a39dcccc321ad6d980641c9d83ab947",refer:"",label:"",name:"cb1",disabled:false,checked:this.checked})),r?h("bds-avatar",{class:"avatar-item",name:this.avatarName,thumbnail:this.avatarThumbnail,size:"extra-small"}):this.icon&&h("bds-icon",{class:(e={},e["icon-item"]=true,e["icon-item-active"]=this.active,e),size:"medium",name:this.icon,color:"inherit",theme:this.active?"solid":"outline"}),h("div",{key:"14c140c9b85bf34d24d62b4441490ed643f9ac5a",class:(i={},i["content-slot"]=true,i)},h("slot",{key:"e3e19ff84b273cdb92b0314a25874448a90e7f5b"})),(this.text||this.secondaryText)&&h("div",{key:"0bf605242927c42fea67b5458b4a95ae7ef1e9cc",class:(s={},s["content-item"]=true,s["grow-up"]=!this.hasActionAreaSlot&&!this.hasContentAreaSlot&&this.internalChips.length<0,s)},this.text&&h("bds-typo",{key:"31f16781d62bed4e6f03a5ed22cf80374d1a609e",class:"title-item",variant:"fs-16",tag:"span",bold:this.active?"bold":"regular"},this.text),this.secondaryText&&h("bds-typo",{key:"046abccf59e02adbf8122c70035df7fc4f3ae861",class:"subtitle-item",variant:"fs-12","line-height":"small",tag:"span"},this.secondaryText)),h("div",{key:"e4613e5a58dfb15d2233dd315962ad2df1ceb802",class:(a={},a["content-area"]=true,a["grow-up"]=true,a)},this.internalChips.length>0&&h("div",{key:"f5bfcd346c3fd79f3c9c9a7c53857e48120d3ed3",class:"internal-chips"},this.renderChips()),h("slot",{key:"f01fbff4e5f1b535df100bed164ffa546ac9143e",name:"content-area"})),(!this.typeList||this.typeList=="default")&&h("div",{key:"5107410d455f396d847d2ca7bcda54bd188e564d",class:(o={},o["action-area"]=true,o)},this.internalActionsButtons.length>0&&h("div",{key:"89c5f5814f9778664adca036a1777466f2ac9a84",class:"internal-actions-buttons"},this.renderActionsButtons()),h("slot",{key:"a2bc58776b2adc934df95d5069724df5791fc30d",name:"action-area"})),this.typeList=="switch"&&h("bds-switch",{key:"3d34ff527fa0507c463f154e0c133543c492ad69",refer:"",name:"",checked:this.checked})))};Object.defineProperty(t.prototype,"hostElement",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{checked:[{checkedChanged:0}],chips:[{chipsChanged:0}],actionsButtons:[{actionsButtonsChanged:0}]}},enumerable:false,configurable:true});return t}();ListItem.style=listCss();export{ListItem as bds_list_item};