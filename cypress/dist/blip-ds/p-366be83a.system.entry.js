System.register(["./p-d105fb25.system.js","./p-aa2c9d5b.system.js"],(function(e){"use strict";var t,i,o,n,s,r;return{setters:[function(e){t=e.r;i=e.c;o=e.h;n=e.g},function(e){s=e.g;r=e.p}],execute:function(){var a=':host{display:block}.element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:10px 4px 10px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #454545)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #454545)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 7px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-ghost, #8c8c8c);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #454545)}.select{position:relative;outline:none}.select__icon{color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex}.select__options{background:var(--color-surface-0, #ffffff);width:100%;max-height:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;pointer-events:none;opacity:0}.select__options::-webkit-scrollbar{width:16px;background-color:transparent}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options--open{opacity:1;pointer-events:auto}.select__options--position-top{bottom:calc(100% + 4px)}.select__options--position-bottom{top:calc(100% + 4px)}.inside-input-left{display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:8px}.input-chips__chip{margin:2px 4px 2px 0px}.input-chips__chips{-ms-flex:1;flex:1}';var l=e("bds_select",function(){function e(e){var o=this;t(this,e);this.bdsChange=i(this,"bdsChange",7);this.bdsCancel=i(this,"bdsCancel",7);this.bdsFocus=i(this,"bdsFocus",7);this.bdsBlur=i(this,"bdsBlur",7);this.refNativeInput=function(e){o.nativeInput=e};this.refDropdown=function(e){o.dropElement=e};this.refIconDrop=function(e){o.iconDropElement=e};this.onClickWrapper=function(){o.onFocus();o.isOpen=true;if(o.nativeInput){o.nativeInput.focus()}};this.onFocus=function(){o.bdsFocus.emit();o.isPressed=true};this.onBlur=function(){o.bdsBlur.emit();o.isPressed=false};this.toggle=function(){if(!o.disabled){o.isOpen=!o.isOpen}};this.getText=function(){var e,t;var i=o.childOptions.find((function(e){return e.value==o.value}));if((i===null||i===void 0?void 0:i.status)||(i===null||i===void 0?void 0:i.bulkOption)){if(o.internalOptions){var n=o.internalOptions.find((function(e){return e.value==i.value}));if(n){return n.titleText?n.titleText:n.label}}return i.querySelector("#bds-typo-label-".concat(o.value)).textContent}return(i===null||i===void 0?void 0:i.titleText)?i.titleText:(t=(e=i===null||i===void 0?void 0:i.textContent)===null||e===void 0?void 0:e.trim())!==null&&t!==void 0?t:""};this.handler=function(e){var t=e.detail.value;o.value=t;o.toggle()};this.intoView=null;this.isOpen=false;this.text="";this.validationDanger=false;this.isPressed=false;this.validationMesage="";this.internalOptions=undefined;this.options=undefined;this.value=undefined;this.danger=false;this.success=false;this.disabled=false;this.label="";this.icon="";this.placeholder="";this.helperMessage="";this.errorMessage="";this.successMessage="";this.optionsPosition="auto";this.dataTest=null}e.prototype.isOpenChanged=function(e){if(this.positionHeightDrop=="bottom"){this.iconDropElement.name=this.isOpen?"arrow-up":"arrow-down"}else{this.iconDropElement.name=this.isOpen?"arrow-down":"arrow-up"}if(e)if(this.optionsPosition!="auto"){this.setDefaultPlacement(this.optionsPosition)}else{this.validatePositionDrop()}};e.prototype.valueChanged=function(){this.bdsChange.emit({value:this.value});for(var e=0,t=this.childOptions;e<t.length;e++){var i=t[e];i.selected=this.value===i.value}this.text=this.getText()};e.prototype.handleWindow=function(e){var t=this;var i=e.composedPath();if(!i.find((function(e){return e==t.el}))){this.isOpen=false}};e.prototype.componentWillLoad=function(){this.options&&this.optionsChanged();this.intoView=s(this.el)};e.prototype.componentWillRender=function(){this.options&&this.updateOptions();this.getValueSelected()};e.prototype.componentDidLoad=function(){this.getValueSelected();if(this.optionsPosition!="auto"){this.setDefaultPlacement(this.optionsPosition)}else{this.validatePositionDrop()}};e.prototype.setDefaultPlacement=function(e){if(e=="bottom"){this.dropElement.classList.add("select__options--position-bottom");this.iconDropElement.name="arrow-down"}else{this.dropElement.classList.add("select__options--position-top");this.iconDropElement.name="arrow-up"}};e.prototype.validatePositionDrop=function(){var e=r({actionElement:this.el,changedElement:this.dropElement,intoView:this.intoView});this.positionHeightDrop=e.y;if(e.y=="bottom"){this.dropElement.classList.add("select__options--position-bottom");this.iconDropElement.name="arrow-down"}else{this.dropElement.classList.add("select__options--position-top");this.iconDropElement.name="arrow-up"}};e.prototype.optionsChanged=function(){this.updateOptions()};e.prototype.getValueSelected=function(){for(var e=0,t=this.childOptions;e<t.length;e++){var i=t[e];i.selected=this.value===i.value;i.addEventListener("optionSelected",this.handler)}this.text=this.getText()};e.prototype.updateOptions=function(){if(this.options){if(typeof this.options==="string"){this.internalOptions=JSON.parse(this.options)}else{this.internalOptions=this.options}}};Object.defineProperty(e.prototype,"childOptions",{get:function(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")):Array.from(this.el.querySelectorAll("bds-select-option"))},enumerable:false,configurable:true});Object.defineProperty(e.prototype,"childOptionSelected",{get:function(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")).find((function(e){return e.selected})):Array.from(this.el.querySelectorAll("bds-select-option")).find((function(e){return e.selected}))},enumerable:false,configurable:true});e.prototype.keyPressWrapper=function(e){var t,i,o,n;switch(e.key){case"Enter":this.toggle();break;case"ArrowDown":if(!this.disabled){this.isOpen=true}if(this.childOptionSelected){this.value=(t=this.childOptionSelected.nextSibling)===null||t===void 0?void 0:t.value;return}this.value=(i=this.el.firstElementChild)===null||i===void 0?void 0:i.value;break;case"ArrowUp":if(this.childOptionSelected){this.value=(o=this.childOptionSelected.previousSibling)===null||o===void 0?void 0:o.value;return}this.value=(n=this.el.lastElementChild)===null||n===void 0?void 0:n.value;break}};e.prototype.renderIcon=function(){return this.icon&&o("div",{class:{input__icon:true,"input__icon--large":!!this.label}},o("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))};e.prototype.renderLabel=function(){return this.label&&o("label",{class:{input__container__label:true,"input__container__label--pressed":this.isPressed&&!this.disabled}},o("bds-typo",{variant:"fs-12",bold:"bold"},this.label))};e.prototype.renderMessage=function(){var e=this.danger?"error":this.success?"checkball":"info";var t=this.danger?this.errorMessage:this.success?this.successMessage:this.helperMessage;if(!t&&this.validationDanger)t=this.validationMesage;var i=this.danger||this.validationDanger?"input__message input__message--danger":this.success?"input__message input__message--success":"input__message";if(t){return o("div",{class:i,part:"input__message"},o("div",{class:"input__message__icon"},o("bds-icon",{size:"x-small",name:e,theme:"outline",color:"inherit"})),o("bds-typo",{class:"input__message__text",variant:"fs-12"},t))}return undefined};e.prototype.render=function(){var e=this;var t=this.isPressed&&!this.disabled;return o("div",{class:"select"},o("div",{class:{element_input:true},"aria-disabled":this.disabled?"true":null},o("div",{class:{input:true,"input--state-primary":!this.danger&&!this.validationDanger,"input--state-danger":this.danger||this.validationDanger,"input--state-success":this.success,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":t},onClick:this.onClickWrapper,part:"input-container"},this.renderIcon(),o("div",{class:"input__container"},this.renderLabel(),o("div",{class:{input__container__wrapper:true}},o("input",{ref:this.refNativeInput,class:{input__container__text:true},onFocus:this.onFocus,onBlur:this.onBlur,value:this.text,disabled:this.disabled,placeholder:this.placeholder,readonly:true,"data-test":this.dataTest,onKeyDown:this.keyPressWrapper.bind(this)}))),o("div",{class:"select__icon"},o("bds-icon",{ref:function(t){return e.refIconDrop(t)},size:"small",color:"inherit"})),this.success&&o("bds-icon",{class:"icon-success",name:"check",theme:"outline",size:"xxx-small"})),this.renderMessage()),o("div",{ref:function(t){return e.refDropdown(t)},class:{select__options:true,"select__options--open":this.isOpen},role:"application"},this.internalOptions?this.internalOptions.map((function(e,t){return e.icon||e.titleText?o("bds-select-option",{key:t,value:e.value,"title-text":e.titleText,"slot-align":e.slotAlign,bulkOption:e.bulkOption,status:e.status},e.icon&&o("bds-icon",{slot:"input-left",name:e.icon,size:"medium",color:e.iconColor}),e.label):o("bds-select-option",{key:t,value:e.value,bulkOption:e.bulkOption,status:e.status},e.label)})):o("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{isOpen:["isOpenChanged"],value:["valueChanged"],options:["optionsChanged"]}},enumerable:false,configurable:true});return e}());l.style=a}}}));