import{r as s,c as t,h as i,H as o}from"./p-93b809e8.js";const e=class{constructor(i){s(this,i),this.bdsInputPasswordChange=t(this,"bdsInputPasswordChange",7),this.bdsInputPasswordInput=t(this,"bdsInputPasswordInput",7),this.bdsInputPasswordBlur=t(this,"bdsInputPasswordBlur",7),this.bdsInputPasswordFocus=t(this,"bdsInputPasswordFocus",7),this.bdsInputPasswordSubmit=t(this,"bdsInputPasswordSubmit",7),this.bdsKeyDownBackspace=t(this,"bdsKeyDownBackspace",7),this.refNativeInput=s=>{this.nativeInput=s},this.toggleEyePassword=()=>{this.disabled||(this.openEyes=!this.openEyes)},this.onClickWrapper=()=>{this.onFocus(),this.nativeInput&&this.nativeInput.focus()},this.onInput=s=>{const t=s.target;t&&(this.value=t.value||""),this.bdsInputPasswordInput.emit(s)},this.onBlur=()=>{this.bdsInputPasswordBlur.emit(),this.isPressed=!1},this.onFocus=()=>{this.bdsInputPasswordFocus.emit(),this.isPressed=!0},this.onSubmit=()=>{this.bdsInputPasswordSubmit.emit()},this.keyPressWrapper=s=>{this.bdsKeyDownBackspace.emit({ev:s,value:this.value})},this.validationDanger=!1,this.isPressed=!1,this.validationMesage="",this.openEyes=!1,this.value="",this.label="",this.inputName="",this.max=void 0,this.maxlength=void 0,this.min=void 0,this.minlength=void 0,this.readonly=!1,this.helperMessage="",this.errorMessage="",this.successMessage="",this.danger=!1,this.success=!1,this.icon="",this.disabled=!1,this.autoCapitalize="off",this.autoComplete="off",this.placeholder="",this.dataTest=null}handleKeyDown(s){"Enter"==s.key&&this.toggleEyePassword()}getAutoComplete(){return this.openEyes?this.autoComplete:"current-password"}onChange(){this.bdsInputPasswordChange.emit({value:null==this.value?this.value:this.value.toString()})}renderIcon(){return this.icon&&i("div",{class:{input__icon:!0,"input__icon--large":!!this.label}},i("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))}renderLabel(){return this.label&&i("label",{class:{input__container__label:!0,"input__container__label--pressed":this.isPressed&&!this.disabled}},i("bds-typo",{variant:"fs-12",bold:"bold"},this.label))}renderMessage(){let s=this.danger?this.errorMessage:this.success?this.successMessage:this.helperMessage;if(!s&&this.validationDanger&&(s=this.validationMesage),s)return i("div",{class:this.danger||this.validationDanger?"input__message input__message--danger":this.success?"input__message input__message--success":"input__message",part:"input__message"},i("div",{class:"input__message__icon"},i("bds-icon",{size:"x-small",name:this.danger?"error":this.success?"checkball":"info",theme:"outline",color:"inherit"})),i("bds-typo",{class:"input__message__text",variant:"fs-12"},s))}render(){const s=this.isPressed&&!this.disabled,t=this.openEyes?"eye-open":"eye-closed",e=this.openEyes?"text":"password",r=this.getAutoComplete();return i(o,null,i("div",{class:{element_input:!0},"aria-disabled":this.disabled?"true":null},i("div",{class:{input:!0,"input--state-primary":!this.danger&&!this.validationDanger,"input--state-danger":this.danger||this.validationDanger,"input--state-success":this.success,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":s},onClick:this.onClickWrapper,onKeyDown:this.keyPressWrapper,part:"input-container"},this.renderIcon(),i("div",{class:"input__container"},this.renderLabel(),i("div",{class:{input__container__wrapper:!0}},i("input",{ref:this.refNativeInput,class:{input__container__text:!0},type:e,name:this.inputName,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,readOnly:this.readonly,autocomplete:r,autocapitalize:this.autoCapitalize,placeholder:this.placeholder,onInput:this.onInput,onFocus:this.onFocus,onBlur:this.onBlur,onSubmit:this.onSubmit,value:this.value,disabled:this.disabled,"data-test":this.dataTest}))),i("div",{class:"input__password--icon",onClick:this.toggleEyePassword,onKeyDown:this.handleKeyDown.bind(this),tabindex:"0"},i("bds-icon",{size:"small",name:t,color:"inherit"})),this.success&&i("bds-icon",{class:"icon-success",name:"check",theme:"outline",size:"xxx-small"})),this.renderMessage()))}static get watchers(){return{value:["onChange"]}}};e.style='.sc-bds-input-password-h{display:block}.element_input.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input.sc-bds-input-password input.sc-bds-input-password{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input.sc-bds-input-password input.sc-bds-input-password::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input.sc-bds-input-password input.sc-bds-input-password::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input.sc-bds-input-password .bds-icon.sc-bds-input-password{position:relative;z-index:1}.input--state-primary.sc-bds-input-password{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.sc-bds-input-password .input__icon.sc-bds-input-password{position:relative}.input--state-primary.sc-bds-input-password .input__icon.sc-bds-input-password::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input--state-primary.sc-bds-input-password:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed.sc-bds-input-password{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed.sc-bds-input-password .input__icon.sc-bds-input-password .bds-icon.sc-bds-input-password{color:var(--color-primary, #1e6bf1)}.input--state-primary.sc-bds-input-password .input__container__label.sc-bds-input-password{color:var(--color-content-default, #454545)}.input--state-primary.sc-bds-input-password .input__container__label--pressed.sc-bds-input-password bds-typo.sc-bds-input-password{color:var(--color-primary, #1e6bf1)}.input--state-primary.sc-bds-input-password .input__container__text.sc-bds-input-password{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger.sc-bds-input-password{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.sc-bds-input-password .input__icon.sc-bds-input-password{position:relative}.input--state-danger.sc-bds-input-password .input__icon.sc-bds-input-password::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger.sc-bds-input-password:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed.sc-bds-input-password{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed.sc-bds-input-password .input__icon.sc-bds-input-password .bds-icon.sc-bds-input-password{color:var(--color-negative, #e60f0f)}.input--state-danger.sc-bds-input-password .input__container__label.sc-bds-input-password{color:var(--color-delete, #e60f0f)}.input--state-danger.sc-bds-input-password .input__container__label--pressed.sc-bds-input-password bds-typo.sc-bds-input-password{color:var(--color-negative, #e60f0f)}.input--state-danger.sc-bds-input-password .input__container__text.sc-bds-input-password{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success.sc-bds-input-password{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.sc-bds-input-password .input__icon.sc-bds-input-password{position:relative}.input--state-success.sc-bds-input-password .input__icon.sc-bds-input-password::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success.sc-bds-input-password:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed.sc-bds-input-password{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed.sc-bds-input-password .input__icon.sc-bds-input-password .bds-icon.sc-bds-input-password{color:var(--color-positive, #10603b)}.input--state-success.sc-bds-input-password .input__container__label.sc-bds-input-password{color:var(--color-content-default, #454545)}.input--state-success.sc-bds-input-password .input__container__label--pressed.sc-bds-input-password bds-typo.sc-bds-input-password{color:var(--color-positive, #10603b)}.input--state-success.sc-bds-input-password .input__container__text.sc-bds-input-password{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-disabled.sc-bds-input-password{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled.sc-bds-input-password .input__icon.sc-bds-input-password{position:relative}.input--state-disabled.sc-bds-input-password .input__icon.sc-bds-input-password::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input.sc-bds-input-password .icon-success.sc-bds-input-password{color:var(--color-positive, #10603b);margin-left:4px}.input--label.sc-bds-input-password{padding:7px 4px 8px 12px}.input__icon.sc-bds-input-password{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large.sc-bds-input-password{padding:4px}.input__container.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips.sc-bds-input-password{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips.sc-bds-input-password::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips.sc-bds-input-password::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text.sc-bds-input-password{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text.sc-bds-input-password:focus{outline:0}.input__container__text.sc-bds-input-password::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text.sc-bds-input-password:focus{outline:0}.input__container__text[type=checkbox].sc-bds-input-password,.input__container__text[type=radio].sc-bds-input-password{width:13px;height:13px}.input__container__text[type=search].sc-bds-input-password{-webkit-appearance:textfield;-webkit-box-sizing:content-box}.sc-bds-input-password::-webkit-search-decoration{display:none}.input__container__text[type=reset].sc-bds-input-password,.input__container__text[type=button].sc-bds-input-password,.input__container__text[type=submit].sc-bds-input-password{overflow:visible}.input__container__text.sc-bds-input-password::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text.sc-bds-input-password::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message.sc-bds-input-password{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message.sc-bds-input-password bds-typo.sc-bds-input-password{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon.sc-bds-input-password{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger.sc-bds-input-password .bds-icon.sc-bds-input-password{color:var(--color-negative, #e60f0f)}.input__message--danger.sc-bds-input-password .input__message__text.sc-bds-input-password{color:var(--color-negative, #e60f0f)}.input__message--success.sc-bds-input-password .input__message__icon.sc-bds-input-password .bds-icon.sc-bds-input-password{color:var(--color-positive, #10603b)}.input__message--success.sc-bds-input-password .input__message__text.sc-bds-input-password{color:var(--color-content-default, #454545)}.input__password--icon.sc-bds-input-password{position:relative;color:var(--color-content-disable, #636363);display:-ms-flexbox;display:flex}.input__password--icon.sc-bds-input-password::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px;pointer-events:none}.input__password--icon.sc-bds-input-password:focus-visible{outline:none}.input__password--icon.sc-bds-input-password:focus-visible::before{border-color:var(--color-focus, #c226fb)}';export{e as bds_input_password}