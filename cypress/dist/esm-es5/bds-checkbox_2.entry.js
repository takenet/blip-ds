var __awaiter=this&&this.__awaiter||function(e,t,o,n){function i(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,c){function r(e){try{l(n.next(e))}catch(t){c(t)}}function s(e){try{l(n["throw"](e))}catch(t){c(t)}}function l(e){e.done?o(e.value):i(e.value).then(r,s)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var o={label:0,sent:function(){if(c[0]&1)throw c[1];return c[1]},trys:[],ops:[]},n,i,c,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(e){return function(t){return l([e,t])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(r&&(r=0,s[0]&&(o=0)),o)try{if(n=1,i&&(c=s[0]&2?i["return"]:s[0]?i["throw"]||((c=i["return"])&&c.call(i),0):i.next)&&!(c=c.call(i,s[1])).done)return c;if(i=0,c)s=[s[0]&2,c.value];switch(s[0]){case 0:case 1:c=s;break;case 4:o.label++;return{value:s[1],done:false};case 5:o.label++;i=s[1];s=[0];continue;case 7:s=o.ops.pop();o.trys.pop();continue;default:if(!(c=o.trys,c=c.length>0&&c[c.length-1])&&(s[0]===6||s[0]===2)){o=0;continue}if(s[0]===3&&(!c||s[1]>c[0]&&s[1]<c[3])){o.label=s[1];break}if(s[0]===6&&o.label<c[1]){o.label=c[1];c=s;break}if(c&&o.label<c[2]){o.label=c[2];o.ops.push(s);break}if(c[2])o.ops.pop();o.trys.pop();continue}s=t.call(e,o)}catch(l){s=[6,l];i=0}finally{n=c=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};import{r as registerInstance,c as createEvent,h,g as getElement}from"./index-611fd21e.js";var checkboxCss='.checkbox{display:inline}.checkbox input[type=checkbox]{display:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-tap-highlight-color:transparent;cursor:pointer;margin:0}.checkbox input[type=checkbox]:focus{outline:0}.checkbox__icon{position:relative}.checkbox__icon::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.checkbox__icon:focus-visible{outline:none}.checkbox__icon:focus-visible::before{border-color:var(--color-focus, #c226fb)}.checkbox__icon:hover{border-color:var(--color-brand, #0096fa)}.checkbox--selected .checkbox__icon{background-color:var(--color-surface-primary, #1e6bf1);border-color:var(--color-surface-primary, #1e6bf1)}.checkbox--selected .checkbox__icon__svg{color:var(--color-content-bright, #ffffff)}.checkbox--selected .checkbox__icon:hover{background-color:var(--color-brand, #0096fa)}.checkbox--selected-disabled .checkbox__label{cursor:not-allowed}.checkbox--selected-disabled .checkbox__icon{color:var(--color-content-default, #454545);border-color:var(--color-content-default, #454545);background-color:var(--color-surface-3, #cfcfcf);opacity:50%}.checkbox--selected-disabled .checkbox__text{opacity:50%}.checkbox--deselected .checkbox__icon__svg{display:none}.checkbox--deselected-disabled .checkbox__label{cursor:not-allowed}.checkbox--deselected-disabled .checkbox__icon{opacity:50%;background-color:var(--color-surface-1, #f6f6f6);border:1px solid var(--color-brand, #0096fa)}.checkbox--deselected-disabled .checkbox__icon__svg{display:none}.checkbox__label{-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}.checkbox__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:18px;width:18px;border-radius:4px;color:var(--color-surface-1, #f6f6f6);border:1px solid var(--color-content-default, #454545);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:4px;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s}.checkbox__text{margin-left:8px;color:var(--color-content-default, #454545)}';var checkBoxIds=0;var Checkbox=function(){function e(e){var t=this;registerInstance(this,e);this.bdsChange=createEvent(this,"bdsChange",7);this.bdsInput=createEvent(this,"bdsInput",7);this.onClick=function(e){e.stopPropagation();t.checked=!t.checked;t.bdsChange.emit({checked:t.checked})};this.refNativeInput=function(e){t.nativeInput=e};this.getStyleState=function(){if(t.checked&&!t.disabled){return"checkbox--selected"}if(!t.checked&&!t.disabled){return"checkbox--deselected"}if(t.checked&&t.disabled){return"checkbox--selected-disabled"}if(!t.checked&&t.disabled){return"checkbox--deselected-disabled"}return""};this.checkBoxId=undefined;this.refer=undefined;this.label=undefined;this.name=undefined;this.checked=false;this.disabled=false;this.dataTest=null}e.prototype.connectedCallback=function(){this.checkBoxId=this.refer||"bds-checkbox-".concat(checkBoxIds++)};e.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)};e.prototype.getValue=function(){return Promise.resolve(this.nativeInput.checked)};e.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.checked=!this.checked;this.bdsChange.emit({checked:this.checked});return[2]}))}))};e.prototype.handleKeyDown=function(e){if(e.key=="Enter"){this.checked=!this.checked;this.bdsChange.emit({checked:this.checked})}};e.prototype.render=function(){var e;var t=this;var o=this.getStyleState();return h("div",{class:(e={checkbox:true},e[o]=true,e)},h("input",{type:"checkbox",ref:this.refNativeInput,id:this.checkBoxId,name:this.name,onClick:function(e){return t.onClick(e)},checked:this.checked,disabled:this.disabled,"data-test":this.dataTest}),h("label",{class:"checkbox__label",htmlFor:this.checkBoxId},h("div",{class:"checkbox__icon",tabindex:"0",onKeyDown:this.handleKeyDown.bind(this)},h("bds-icon",{class:"checkbox__icon__svg",size:"x-small",name:"true",color:"inherit"})),this.label&&h("bds-typo",{class:"checkbox__text",variant:"fs-14",tag:"span"},this.label)))};return e}();Checkbox.style=checkboxCss;var selectOptionCss=":host(.option-checked){-ms-flex-order:-1;order:-1}.load-spinner{background-color:var(--color-surface-0, #ffffff);height:200px}.select-option{display:grid;width:100%;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background-color:var(--color-surface-0, #ffffff);padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none;-ms-flex-order:1;order:1}.select-option--selected .select-option__container--value{color:var(--color-primary, #1e6bf1)}.select-option--disabled .select-option__container--value,.select-option--disabled .select-option__container--bulk{cursor:not-allowed;color:var(--color-content-disable, #636363)}.select-option--disabled .select-option__container--value:hover,.select-option--disabled .select-option__container--bulk:hover{background-color:var(--color-surface-1, #f6f6f6)}.select-option ::slotted(bds-icon){margin-right:10px}.select-option__container{color:var(--color-content-default, #454545);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.select-option__container__checkbox{cursor:pointer;padding:8px;padding-left:12px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;gap:8px;-ms-flex-align:center;align-items:center;outline:none;-ms-flex-direction:row;flex-direction:row}.select-option__container__fill_space{width:100%}.select-option__container--bulk,.select-option__container--status{color:var(--color-content-ghost, #8c8c8c)}.select-option__container--status{margin-left:4px}.select-option__container__overflow{overflow:hidden;padding-right:16px}.select-option__container:hover>.select-option__container--value,.select-option__container:hover>.select-option__container--bulk,.select-option__container:hover>.select-option__container--status{color:var(--color-primary, #1e6bf1)}.select-option__container:active>.select-option__container--value,.select-option__container:active>.select-option__container--bulk,.select-option__container:active>.select-option__container--status{color:var(--color-primary, #1e6bf1)}.select-option:hover{background-color:var(--color-surface-1, #f6f6f6)}.select-option:focus{background-color:var(--color-surface-1, #f6f6f6);color:#3f7de8}.select-option--selected{background-color:var(--color-surface-1, #f6f6f6)}.select-option--invisible{display:none}";var SelectOption=function(){function e(e){var t=this;registerInstance(this,e);this.optionSelected=createEvent(this,"optionSelected",7);this.optionChecked=createEvent(this,"optionChecked",7);this.refNativeInput=function(e){t.nativeInput=e};this.checkedCurrent=function(){if(t.typeOption!=="checkbox")return;t.nativeInput.toggle()};this.onClickSelectOption=function(){if(t.typeOption=="checkbox")return;if(!t.disabled){t.optionSelected.emit({value:t.value,label:t.element.innerHTML})}};this.optionHandle=function(e){var o=e.target;var n={value:o.name,label:t.element.innerHTML,checked:o.checked};t.checked=!t.checked;t.optionChecked.emit(n)};this.attachOptionKeyboardListeners=function(e){var o=e.target;switch(e.key){case"Enter":t.onClickSelectOption();break;case"ArrowDown":if(o.parentElement.nextElementSibling&&!o.parentElement.nextElementSibling.hasAttribute("invisible")){e.preventDefault();e.stopPropagation();o.parentElement.nextElementSibling.firstElementChild.focus()}break;case"ArrowUp":if(o.parentElement.previousElementSibling&&!o.parentElement.previousElementSibling.hasAttribute("invisible")){e.preventDefault();e.stopPropagation();o.parentElement.previousElementSibling.firstElementChild.focus()}}};this.value=undefined;this.selected=false;this.disabled=false;this.invisible=false;this.danger=false;this.bulkOption="";this.slotAlign="center";this.titleText=undefined;this.status=undefined;this.typeOption="default";this.checked=false;this.dataTest=null}e.prototype.changeSelectionType=function(){this.typeOption=this.typeOption};e.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.checked=!this.checked;return[2]}))}))};e.prototype.toMark=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.checked=true;return[2]}))}))};e.prototype.markOff=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.checked=false;return[2]}))}))};e.prototype.render=function(){var e=this;return h("div",{id:"bds-select-option-".concat(this.value),"data-event":"click",role:"button",onKeyDown:this.attachOptionKeyboardListeners,onClick:this.onClickSelectOption,"data-value":this.value,"data-test":this.dataTest,class:{"select-option":this.typeOption!="checkbox","select-option--selected":this.selected,"select-option--disabled":this.disabled,"select-option--invisible":this.invisible}},h("div",{style:{alignSelf:this.slotAlign}},h("slot",{name:"input-left"})),h("div",{class:{"select-option__container":true,"select-option__container__fill_space":!!this.status,"select-option__container__checkbox":this.typeOption=="checkbox"},onClick:function(){return e.checkedCurrent()}},this.titleText&&h("bds-typo",{class:"select-option__container--value",variant:"fs-16",bold:"semi-bold"},this.titleText),this.typeOption==="checkbox"?h("bds-checkbox",{ref:this.refNativeInput,refer:"html-for-".concat(this.value),label:this.element.innerHTML,name:this.value,checked:this.checked,onBdsChange:function(t){return e.optionHandle(t)}}):h("bds-typo",{class:{"select-option__container--value":true,"select-option__container__overflow":!!this.status},noWrap:!!this.status,variant:"fs-14"},h("slot",null))),this.bulkOption&&h("bds-typo",{class:"select-option__container--bulk",variant:"fs-10"},this.bulkOption),this.status&&h("bds-typo",{class:"select-option__container--status",noWrap:true,variant:"fs-10"},this.status))};Object.defineProperty(e.prototype,"element",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{typeOption:["changeSelectionType"]}},enumerable:false,configurable:true});return e}();SelectOption.style=selectOptionCss;export{Checkbox as bds_checkbox,SelectOption as bds_select_option};