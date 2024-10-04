import{r as t,c as i,h as s,H as e,g as o}from"./p-93b809e8.js";const a=class{constructor(s){t(this,s),this.bdsChecked=i(this,"bdsChecked",7),this.bdsClickActionButtom=i(this,"bdsClickActionButtom",7),this.handler=()=>{this.checked="radio"==this.typeList||!this.checked},this.clickActionButtons=(t,i)=>{const s=i.composedPath()[0];this.bdsClickActionButtom.emit({value:this.value,icon:t,elementButton:s})},this.internalChips=[],this.internalActionsButtons=[],this.checked=!1,this.typeList=null,this.avatarName=null,this.avatarThumbnail=null,this.icon=null,this.value=null,this.text=null,this.secondaryText=null,this.chips=[],this.actionsButtons=[],this.clickable=!1,this.active=!1,this.borderRadius=!1,this.size="standard",this.dataTest=null}componentWillLoad(){this.hasActionAreaSlot=!!this.hostElement.querySelector('[slot="action-area"]'),this.hasContentAreaSlot=!!this.hostElement.querySelector('[slot="content-area"]'),this.chipsChanged(),this.actionsButtonsChanged()}checkedChanged(t){this.bdsChecked.emit({value:this.value,text:this.text,secondaryText:this.secondaryText,typeList:this.typeList,checked:t})}chipsChanged(){this.internalChips=this.chips?"string"==typeof this.chips?JSON.parse(this.chips):this.chips:[]}actionsButtonsChanged(){this.internalActionsButtons=this.actionsButtons?"string"==typeof this.actionsButtons?JSON.parse(this.actionsButtons):this.actionsButtons:[]}renderChips(){return this.internalChips.length?this.internalChips.map(((t,i)=>{const e=i.toString();return t.length<=30?s("bds-chip-clickable",{id:e,key:e,color:"default"},t):s("bds-tooltip",{key:e,position:"top-center","tooltip-text":t},s("bds-chip-clickable",{id:e,key:e,color:"default"},`${t.slice(0,30)} ...`))})):[]}renderActionsButtons(){return this.internalActionsButtons.length?this.internalActionsButtons.map(((t,i)=>{const e=i.toString();return s("bds-button-icon",{key:e,variant:"secondary",icon:t,size:"short",onClick:i=>this.clickActionButtons(t,i)})})):[]}render(){const t="checkbox"==this.typeList||"radio"==this.typeList,i=this.avatarName||this.avatarThumbnail;return s(e,null,s("div",{onClick:this.handler,tabindex:"0",class:{list_item:!0,clickable:1==this.clickable||"checkbox"==this.typeList||"radio"==this.typeList||"switch"==this.typeList,border_radius:this.borderRadius,[`list_item_${this.size}`]:!0},"data-test":this.dataTest},this.active&&s("div",{class:"active"}),t&&s("div",{class:{input_list:!0}},"radio"==this.typeList&&s("bds-radio",{value:this.value,checked:this.checked}),"checkbox"==this.typeList&&s("bds-checkbox",{refer:"",label:"",name:"cb1",disabled:!1,checked:this.checked})),i?s("bds-avatar",{class:"avatar-item",name:this.avatarName,thumbnail:this.avatarThumbnail,size:"extra-small"}):this.icon&&s("bds-icon",{class:{"icon-item":!0,"icon-item-active":this.active},size:"medium",name:this.icon,color:"inherit",theme:this.active?"solid":"outline"}),s("div",{class:{"content-slot":!0}},s("slot",null)),(this.text||this.secondaryText)&&s("div",{class:{"content-item":!0,"grow-up":!this.hasActionAreaSlot&&!this.hasContentAreaSlot&&this.internalChips.length<0}},this.text&&s("bds-typo",{class:"title-item",variant:"fs-16",tag:"span",bold:this.active?"bold":"regular"},this.text),this.secondaryText&&s("bds-typo",{class:"subtitle-item",variant:"fs-12","line-height":"small",tag:"span"},this.secondaryText)),s("div",{class:{"content-area":!0,"grow-up":!0}},this.internalChips.length>0&&s("div",{class:"internal-chips"},this.renderChips()),s("slot",{name:"content-area"})),(!this.typeList||"default"==this.typeList)&&s("div",{class:{"action-area":!0}},this.internalActionsButtons.length>0&&s("div",{class:"internal-actions-buttons"},this.renderActionsButtons()),s("slot",{name:"action-area"})),"switch"==this.typeList&&s("bds-switch",{refer:"",name:"",checked:this.checked})))}get hostElement(){return o(this)}static get watchers(){return{checked:["checkedChanged"],chips:["chipsChanged"],actionsButtons:["actionsButtonsChanged"]}}};a.style=':host{display:block;width:100%}:host(.list_item_content){display:-ms-flexbox;display:flex;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.list_item{display:-ms-flexbox;display:flex;gap:16px;-ms-flex-align:center;align-items:center}.list_item_tall{padding:16px}.list_item_standard{padding:8px 16px}.list_item_short{padding:8px}.list_item .input_list{position:relative}.list_item .avatar-item{position:relative;display:block}.list_item .icon-item{position:relative;color:var(--color-content-default, #454545)}.list_item .icon-item-active{color:var(--color-primary, #1e6bf1)}.list_item .grow-up{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:8px}.list_item .content-item{position:relative;display:-ms-flexbox;display:flex;gap:2px;-ms-flex-direction:column;flex-direction:column}.list_item .content-item .title-item{color:var(--color-content-default, #454545)}.list_item .content-item .subtitle-item{color:var(--color-content-default, #454545)}.list_item .content-area{position:relative;-ms-flex-positive:2;flex-grow:2}.list_item .content-area .internal-chips,.list_item .content-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px}.list_item .action-area{position:relative}.list_item .action-area .internal-actions-buttons,.list_item .action-area ::slotted(*){display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;color:var(--color-content-default, #454545)}.list_item .icon-arrow{-webkit-transition:all ease 0.3s;-moz-transition:all ease 0.3s;transition:all ease 0.3s;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.list_item .icon-arrow-active{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.border_radius{border-radius:8px}.border_radius:before,.border_radius:after,.border_radius .active{border-radius:8px}.active{position:absolute;background-color:var(--color-content-default, #454545);opacity:0.08;inset:0}.clickable{position:relative;cursor:pointer;gap:8px}.clickable:before{content:"";position:absolute;inset:0}.clickable:hover:before{background-color:var(--color-content-default, #454545);opacity:0.08}.clickable:active:before{background-color:var(--color-content-default, #454545);opacity:0.16}';export{a as bds_list_item}