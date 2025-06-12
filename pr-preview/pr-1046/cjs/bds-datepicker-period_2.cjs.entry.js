'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a53aecf.js');
const calendar = require('./calendar-56226685.js');

const datepickerCss$1 = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--textarea{padding:12px 12px 12px 12px;-ms-flex-align:start;align-items:flex-start}.input--textarea.input--label{padding:12px 12px 12px 12px}.input--textarea .input__icon{margin-top:1px}.input--textarea .input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #282828)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #282828)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #8a0000);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #fabebe);box-shadow:0 0 0 2px var(--color-error, #fabebe)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #282828)}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #01723e);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #282828)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #282828)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px;margin-top:1px}.input--label{padding:7px 4px 8px 12px}.input--label.input--textarea{padding:12px 12px 12px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px;-ms-flex-negative:0;flex-shrink:0}.input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start;margin-top:1px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex:1;flex:1}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper--textarea{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:2px}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;resize:none;cursor:inherit;width:100%;min-height:auto}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__text--textarea{resize:vertical;overflow-y:auto;line-height:20px;padding:0;scrollbar-width:thin;scrollbar-color:var(--color-border-2, rgba(0, 0, 0, 0.16)) transparent}.input__container__text--textarea::-webkit-scrollbar{width:8px}.input__container__text--textarea::-webkit-scrollbar-track{background:transparent}.input__container__text--textarea::-webkit-scrollbar-thumb{background:var(--color-border-2, rgba(0, 0, 0, 0.16));border-radius:4px}.input__container__text--textarea::-webkit-scrollbar-thumb:hover{background:var(--color-content-ghost, #8c8c8c)}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #595959);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px;-ms-flex-negative:0;flex-shrink:0}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #282828)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}:host{position:relative;max-width:608px}.datepicker__inputs{position:relative;width:100%;display:grid}.datepicker__inputs__open{z-index:90000}.datepicker__inputs__single{grid-template-columns:1fr}.datepicker__inputs__period{grid-template-columns:1fr 1fr;gap:16px}.datepicker__inputs bds-input{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%}.datepicker__inputs bds-input::part(input-container){position:relative}.datepicker__inputs__icon{cursor:pointer;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-right:16px}.datepicker__inputs__icon bds-icon:first-child{margin-right:8px}.datepicker__inputs__icon:hover bds-icon:first-child{color:var(--color-primary, #1e6bf1)}.datepicker__menu{position:absolute;pointer-events:none;background-color:var(--color-surface-0, white);-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));border-radius:8px;padding:16px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.datepicker__menu__open{z-index:100000;pointer-events:auto;opacity:1}.datepicker__menu__single__top-center{bottom:calc(100% + 8px);left:calc(50% - 146px)}.datepicker__menu__single__top-left{bottom:calc(100% + 8px);left:0}.datepicker__menu__single__top-right{bottom:calc(100% + 8px);right:0}.datepicker__menu__single__bottom-center{top:calc(100% + 8px);left:calc(50% - 146px)}.datepicker__menu__single__bottom-right{top:calc(100% + 8px);right:0}.datepicker__menu__single__bottom-left{top:calc(100% + 8px);left:0}.datepicker__menu__single__right-center{right:calc(100% + 8px)}.datepicker__menu__single__right-top{right:calc(100% + 8px);top:0}.datepicker__menu__single__right-bottom{right:calc(100% + 8px);bottom:0}.datepicker__menu__single__left-center{left:calc(100% + 8px)}.datepicker__menu__single__left-top{left:calc(100% + 8px);top:0}.datepicker__menu__single__left-bottom{left:calc(100% + 8px);bottom:0}.datepicker__menu__period__top-center{bottom:calc(100% + 8px);left:calc(50% - 240px)}.datepicker__menu__period__top-left{bottom:calc(100% + 8px);left:0}.datepicker__menu__period__top-right{bottom:calc(100% + 8px);right:0}.datepicker__menu__period__bottom-center{top:calc(100% + 8px);left:calc(50% - 240px)}.datepicker__menu__period__bottom-right{top:calc(100% + 8px);right:0}.datepicker__menu__period__bottom-left{top:calc(100% + 8px);left:0}.datepicker__menu__period__right-center{right:calc(100% + 8px)}.datepicker__menu__period__right-top{right:calc(100% + 8px);top:0}.datepicker__menu__period__right-bottom{right:calc(100% + 8px);bottom:0}.datepicker__menu__period__left-center{left:calc(100% + 8px)}.datepicker__menu__period__left-top{left:calc(100% + 8px);top:0}.datepicker__menu__period__left-bottom{left:calc(100% + 8px);bottom:0}.datepicker__menu__message{padding:8px;border-radius:8px;background-color:var(--color-warning, #fde99b);color:var(--color-content-din, black);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px}.datepicker__menu__message bds-icon{margin-right:4px}.datepicker__menu__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-top:8px;margin-top:8px;border-top:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.datepicker__menu__footer bds-button{margin-left:8px}.datepicker__calendar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.datepicker__calendar__selectDate{width:100%;display:grid;grid-template-columns:32px 104px auto 32px;grid-gap:8px;-ms-flex-align:center;align-items:center;margin-bottom:8px;justify-items:center}.datepicker__calendar__selectDate__select{position:relative;width:100%}.datepicker__calendar__selectDate__select__input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #f6f6f6);color:var(--color-content-default, #282828);border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.datepicker__calendar__selectDate__select__input.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__label{color:var(--color-content-default, #282828)}.datepicker__calendar__selectDate__select__input .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #282828)}.datepicker__calendar__selectDate__select__input__disable{cursor:not-allowed;background:var(--color-surface-2, #ededed);border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable:hover{border:1px solid var(--color-content-disable, #595959);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable.input--pressed{border:1px solid var(--color-content-disable, #595959);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-surface-3, #e3e3e3);box-shadow:0 0 0 2px var(--color-surface-3, #e3e3e3)}.datepicker__calendar__selectDate__select__input__disable.input--pressed .input__icon .bds-icon{color:var(--color-content-disable, #595959)}.datepicker__calendar__selectDate__select__input__disable .input__container__label{color:var(--color-content-disable, #595959)}.datepicker__calendar__selectDate__select__input__disable .input__container__label--pressed bds-typo{color:var(--color-content-disable, #595959)}.datepicker__calendar__selectDate__select__input__disable .input__container__text{caret-color:var(--color-content-disable, #595959);color:var(--color-content-disable, #595959)}.datepicker__calendar__selectDate__select__input .icon-arrow{color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex}.datepicker__calendar__selectDate__select__options{background:var(--color-surface-0, white);width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.datepicker__calendar__selectDate__select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.datepicker__calendar__selectDate__icon{cursor:pointer;color:var(--color-content-disable, #595959)}.datepicker__calendar__selectDate .arrow-left__disable{opacity:0;pointer-events:none}.datepicker__calendar__selectDate .arrow-right__disable{opacity:0;pointer-events:none}.datepicker__calendar__week{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);margin-bottom:8px}.datepicker__calendar__week__day{width:32px;height:32px;text-align:center;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.datepicker__calendar__car{height:192px;width:224px;overflow:hidden;position:relative}.datepicker__calendar__car__slide{display:-ms-flexbox;display:flex;position:absolute;left:-100%}.datepicker__calendar__car__slide__box{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.datepicker__calendar__car__slide__box__day{width:32px;height:32px;position:relative}.datepicker__calendar__car__slide__box__day__period:before{content:\"\";position:absolute;inset:4px 0px;background-color:var(--color-primary, #1e6bf1);opacity:0.25}.datepicker__calendar__car__slide__box__day__start:before{inset:4px 0;border-top-left-radius:16px;border-bottom-left-radius:16px}.datepicker__calendar__car__slide__box__day__end:before{inset:4px 0;border-top-right-radius:16px;border-bottom-right-radius:16px}.datepicker__calendar__car__slide__box__day__typo{position:relative;width:calc(100% - 2px);height:calc(100% - 2px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:100%;color:var(--color-content-default, #282828);border:1px solid transparent;cursor:pointer}.datepicker__calendar__car__slide__box__day__typo:hover{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__current{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__selected{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, white)}.datepicker__calendar__car__slide__box__day__selected:hover{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, white)}.datepicker__calendar__car__slide__box__day__disable{pointer-events:none;background-color:transparent;color:var(--color-content-ghost, #8c8c8c)}.datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPrev;animation-name:animationPrev;-webkit-animation-duration:0.33s;animation-duration:0.33s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.datepicker__calendar__car .animate__next{-webkit-animation-name:animationNext;animation-name:animationNext;-webkit-animation-duration:0.33s;animation-duration:0.33s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.period .datepicker__calendar__selectDate{grid-template-columns:32px 120px 80px auto 32px}.period .datepicker__calendar__selectDate__futureMonth{padding:0 8px;text-align:center;color:var(--color-content-default, #282828)}.period .datepicker__calendar__week{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.period .datepicker__calendar__week__present,.period .datepicker__calendar__week__future{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.period .datepicker__calendar__car{width:464px}.period .datepicker__calendar__car__slide{left:calc(-50% - 24px)}.period .datepicker__calendar__car__slide__box{margin-left:16px}.period .datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPeriodPrev;animation-name:animationPeriodPrev}.period .datepicker__calendar__car .animate__next{-webkit-animation-name:animationPeriodNext;animation-name:animationPeriodNext}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}@-webkit-keyframes animationPrev{0%{left:-100%}100%{left:0}}@keyframes animationPrev{0%{left:-100%}100%{left:0}}@-webkit-keyframes animationNext{0%{left:-100%}100%{left:-200%}}@keyframes animationNext{0%{left:-100%}100%{left:-200%}}@-webkit-keyframes animationPeriodPrev{0%{left:calc(-50% - 24px)}100%{left:-16px}}@keyframes animationPeriodPrev{0%{left:calc(-50% - 24px)}100%{left:-16px}}@-webkit-keyframes animationPeriodNext{0%{left:calc(-50% - 24px)}100%{left:calc(-100% - 24px)}}@keyframes animationPeriodNext{0%{left:calc(-50% - 24px)}100%{left:calc(-100% - 24px)}}";

const BdsdatepickerPeriod = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsStartDate = index.createEvent(this, "bdsStartDate", 7);
    this.bdsEndDate = index.createEvent(this, "bdsEndDate", 7);
    this.bdsClickDayButton = index.createEvent(this, "bdsClickDayButton", 7);
    /**
     * handler of select months or yaer.
     */
    this.handler = (event, ref) => {
      const { detail: { value }, } = event;
      if (ref == 'months') {
        this.monthActivated = value;
      }
      else {
        if (value == this.startDate.year && this.monthActivated <= this.startDate.month) {
          this.monthActivated = this.startDate.month;
        }
        if (value == this.endDate.year && this.monthActivated >= this.endDate.month) {
          this.monthActivated = this.endDate.month;
        }
        this.yearActivated = value;
      }
    };
    /**
     * openDateSelect. Function to open the year or month selector.
     */
    this.openDateSelect = (value, ref) => {
      if (ref == 'months') {
        setTimeout(() => {
          this.openSelectMonth = value;
        }, 100);
      }
      else {
        setTimeout(() => {
          this.openSelectYear = value;
        }, 100);
      }
    };
    this.week = undefined;
    this.months = undefined;
    this.years = undefined;
    this.monthActivated = this.startDateSelect ? this.startDateSelect.getMonth() : calendar.THIS_DAY.getMonth();
    this.yearActivated = this.startDateSelect ? this.startDateSelect.getFullYear() : calendar.THIS_DAY.getFullYear();
    this.animatePrev = false;
    this.animateNext = false;
    this.activeSelectYear = false;
    this.openSelectMonth = false;
    this.openSelectYear = false;
    this.monthsSlide = undefined;
    this.loadingSlide = 'await';
    this.startDate = calendar.dateToDayList(calendar.defaultStartDate);
    this.endDate = calendar.dateToDayList(calendar.defaultEndDate);
    this.startDateSelect = null;
    this.endDateSelect = null;
    this.language = 'pt_BR';
    this.stateSelect = 'start';
    this.dtButtonPrev = null;
    this.dtButtonNext = null;
    this.dtSelectMonth = null;
    this.dtSelectYear = null;
  }
  /**
   * Return the validity of the input.
   */
  async clear() {
    this.startDateSelect = null;
    this.endDateSelect = null;
  }
  /**
   * startDateSelect. Function to output selected start date.
   */
  startDateSelectChanged() {
    this.bdsStartDate.emit({ value: this.startDateSelect });
  }
  /**
   * endDateSelect. Function to output selected end date.
   */
  endDateSelectChanged() {
    this.bdsEndDate.emit({ value: this.endDateSelect });
  }
  periodToSelectChanged(newValue, _oldValue) {
    const oldDate = calendar.fillDayList(_oldValue);
    const newDate = calendar.fillDayList(newValue);
    if (newDate != oldDate) {
      this.monthActivated = this.startDate.month;
      this.yearActivated = this.startDate.year;
    }
  }
  componentWillLoad() {
    const fillStartDate = calendar.fillDayList(this.startDate);
    const fillEndDate = calendar.fillDayList(this.endDate);
    const fillActDate = calendar.fillDate(calendar.THIS_DAY);
    if (fillStartDate > fillActDate || fillEndDate < fillActDate) {
      this.monthActivated = this.startDate.month;
      this.yearActivated = this.startDate.year;
    }
  }
  componentWillRender() {
    this.week = Object.values(calendar.weekDays(this.language));
    this.monthsSlide = calendar.getMonthsSlide(this.yearActivated, this.monthActivated);
    this.years = calendar.getYears(this.yearActivated, this.startDate.year, this.endDate.year);
    this.months = calendar.getMonths(this.yearActivated, this.startDate, this.endDate, calendar.changeMonths(this.language));
  }
  /**
   * prevDays. Function to create a gap between the beginning of the grid and the first day of the month.
   */
  prevDays(value) {
    const lenghtDays = [];
    for (let i = 0; i < value; i++) {
      lenghtDays.push(i);
    }
    return lenghtDays.map((item) => index.h("span", { key: `id${item}`, class: `space ${item}` }));
  }
  /**
   * selectDate. Function to select the desired date.
   */
  selectDate(value) {
    const changeSelected = new Date(value.year, value.month, value.date);
    if (this.stateSelect == 'start') {
      this.startDateSelect = changeSelected;
      this.endDateSelect = null;
    }
    if (this.stateSelect == 'end')
      this.endDateSelect = changeSelected;
    this.bdsClickDayButton.emit({ state: this.stateSelect });
  }
  /**
   * prevMonth. Function to rewind the date on the calendar slide.
   */
  prevMonth() {
    this.animatePrev = true;
    if (this.loadingSlide != 'pendding') {
      this.loadingSlide = 'pendding';
      setTimeout(() => {
        this.animatePrev = false;
        this.monthActivated = this.monthActivated - 1;
        if (this.monthActivated < 0) {
          this.monthActivated = 11;
          this.yearActivated = this.yearActivated - 1;
        }
        this.loadingSlide = 'success';
      }, 300);
    }
    else {
      return;
    }
  }
  /**
   * nextMonth. Function to advance the date on the calendar slide.
   */
  nextMonth() {
    this.animateNext = true;
    if (this.loadingSlide != 'pendding') {
      this.loadingSlide = 'pendding';
      setTimeout(() => {
        this.animateNext = false;
        this.monthActivated = this.monthActivated + 1;
        if (this.monthActivated > 11) {
          this.monthActivated = 0;
          this.yearActivated = this.yearActivated + 1;
        }
        this.loadingSlide = 'success';
      }, 300);
    }
    else {
      return;
    }
  }
  /**
   * checkCurrentDay. Function to check the current day.
   */
  checkCurrentDay(value) {
    const validateDate = calendar.fillDayList(value);
    const fullCurrDate = calendar.fillDate(calendar.THIS_DAY);
    if (validateDate == fullCurrDate)
      return true;
    else
      return false;
  }
  /**
   * checkDisableDay. Function to check the disable day.
   */
  checkDisableDay(value) {
    const validateDate = calendar.fillDayList(value);
    const startDateLimit = this.startDate ? calendar.fillDayList(this.startDate) : `0`;
    const endDateLimit = this.endDate ? calendar.fillDayList(this.endDate) : `9999999`;
    const startSelectedDate = this.startDateSelect ? calendar.fillDate(this.startDateSelect) : `0`;
    if (this.startDate && validateDate < startDateLimit) {
      return true;
    }
    if (this.startDateSelect && this.stateSelect == 'end') {
      if (validateDate < startSelectedDate) {
        return true;
      }
    }
    if (this.endDate && validateDate > endDateLimit) {
      return true;
    }
  }
  /**
   * checkSelectedDay. Function to check the selected day.
   */
  checkSelectedDay(value) {
    const validateDate = calendar.fillDayList(value);
    const startSelectedDate = this.startDateSelect ? calendar.fillDate(this.startDateSelect) : `0`;
    const endSelectedDate = this.endDateSelect ? calendar.fillDate(this.endDateSelect) : `0`;
    if (validateDate == startSelectedDate || validateDate == endSelectedDate)
      return true;
    else
      return false;
  }
  /**
   * checkPeriodDay. Function to check the period selected day.
   */
  checkPeriodDay(value) {
    const validateDate = calendar.fillDayList(value);
    const startSelectedDate = this.startDateSelect ? calendar.fillDate(this.startDateSelect) : `0`;
    const endSelectedDate = this.endDateSelect ? calendar.fillDate(this.endDateSelect) : `0`;
    if (startSelectedDate && endSelectedDate) {
      if (validateDate >= startSelectedDate && validateDate <= endSelectedDate) {
        return true;
      }
    }
  }
  /**
   * checkPeriodStart. Function to check the period selected start day.
   */
  checkPeriodStart(value) {
    const validateDate = value.date == 1;
    const validateDay = value.day == 0;
    const selectDate = calendar.fillDayList(value);
    const startSelectedDate = this.startDateSelect ? calendar.fillDate(this.startDateSelect) : `0`;
    const validateStartDate = selectDate == startSelectedDate;
    if (validateDate || validateDay || validateStartDate) {
      return true;
    }
  }
  /**
   * checkPeriodEnd. Function to check the period selected end day.
   */
  checkPeriodEnd(value, lastItem) {
    const validateDate = lastItem;
    const validateDay = value.day == 6;
    const selectDate = calendar.fillDayList(value);
    const endSelectedDate = this.endDateSelect ? calendar.fillDate(this.endDateSelect) : `0`;
    const validateStartDate = selectDate == endSelectedDate;
    if (validateDate || validateDay || validateStartDate) {
      return true;
    }
  }
  renderSelectData(data, selected, ref) {
    const openSelect = ref == 'months' ? this.openSelectMonth : this.openSelectYear;
    const labelSelect = data.filter((obj) => obj.value === selected);
    const iconArrow = openSelect ? 'arrow-up' : 'arrow-down';
    return (index.h("div", { class: {
        datepicker__calendar__selectDate__select: true,
        [`datepicker__calendar__selectDate__select__${ref}`]: true,
      } }, index.h("button", { onFocus: () => data.length > 1 && this.openDateSelect(true, ref), onBlur: () => data.length > 1 && this.openDateSelect(false, ref), class: {
        datepicker__calendar__selectDate__select__input: true,
        datepicker__calendar__selectDate__select__input__disable: data.length <= 1,
        [`input--pressed`]: openSelect,
      }, "data-test": ref == 'months' ? this.dtSelectMonth : this.dtSelectYear }, index.h("bds-typo", { variant: "fs-14" }, labelSelect[0].label), index.h("div", { class: "icon-arrow" }, index.h("bds-icon", { size: "small", name: iconArrow, color: "inherit" }))), index.h("div", { class: {
        datepicker__calendar__selectDate__select__options: true,
        'datepicker__calendar__selectDate__select__options--open': openSelect,
      } }, data.map((option) => (index.h("bds-select-option", { value: option.value, key: option.value, onOptionSelected: (event) => this.handler(event, ref), selected: option.value == selected, onClick: () => this.openDateSelect(false, ref) }, option.label))))));
  }
  renderCarSlideBox(days, firstDayWeek) {
    return (index.h("div", { class: { datepicker__calendar__car__slide__box: true } }, this.prevDays(firstDayWeek), days.map((item, idx) => (index.h("div", { key: idx, class: {
        datepicker__calendar__car__slide__box__day: true,
        datepicker__calendar__car__slide__box__day__period: this.checkPeriodDay(item),
        datepicker__calendar__car__slide__box__day__start: this.checkPeriodStart(item),
        datepicker__calendar__car__slide__box__day__end: this.checkPeriodEnd(item, days.length === idx + 1),
      } }, index.h("bds-typo", { class: {
        datepicker__calendar__car__slide__box__day__typo: true,
        datepicker__calendar__car__slide__box__day__current: this.checkCurrentDay(item),
        datepicker__calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
        datepicker__calendar__car__slide__box__day__disable: this.checkDisableDay(item),
      }, variant: "fs-14", onClick: () => this.selectDate(item) }, item.date))))));
  }
  render() {
    const futureMonth = calendar.changeMonths(this.language).filter((obj) => obj.value === this.monthsSlide[2].month);
    const futureYear = this.monthsSlide[2].year;
    return (index.h("div", { class: { datepicker__calendar: true, [`period`]: true } }, index.h("div", { class: { datepicker__calendar__selectDate: true } }, index.h("bds-icon", { class: {
        [`arrow-left`]: true,
        [`arrow-left__disable`]: calendar.fillDayList(this.monthsSlide[0].days[this.monthsSlide[0].days.length - 1]) <
          calendar.fillDayList(this.startDate),
        datepicker__calendar__selectDate__icon: true,
      }, name: "arrow-left", theme: "outline", size: "small", onClick: () => this.prevMonth(), dataTest: this.dtButtonPrev }), [
      this.renderSelectData(this.months, this.monthActivated, 'months'),
      this.renderSelectData(this.years, this.yearActivated, 'years'),
    ], index.h("bds-typo", { class: "datepicker__calendar__selectDate__futureMonth", variant: "fs-14" }, `${futureMonth[0].label}, ${futureYear}`), index.h("bds-icon", { class: {
        [`arrow-right`]: true,
        [`arrow-right__disable`]: calendar.fillDayList(this.monthsSlide[2].days[0]) > calendar.fillDayList(this.endDate),
        datepicker__calendar__selectDate__icon: true,
      }, name: "arrow-right", theme: "outline", size: "small", onClick: () => this.nextMonth(), dataTest: this.dtButtonNext })), index.h("div", null, index.h("div", { class: { datepicker__calendar__week: true } }, index.h("div", { class: { datepicker__calendar__week__present: true } }, this.week.map((item, idx) => (index.h("bds-typo", { variant: "fs-14", key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0))))), index.h("div", { class: { datepicker__calendar__week__future: true } }, this.week.map((item, idx) => (index.h("bds-typo", { variant: "fs-14", key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0)))))), index.h("div", { class: { datepicker__calendar__car: true, datepicker__calendar__car__period: true } }, index.h("div", { class: {
        datepicker__calendar__car__slide: true,
        animate__prev: this.animatePrev,
        animate__next: this.animateNext,
      } }, [
      this.renderCarSlideBox(this.monthsSlide[0].days, this.monthsSlide[0].days[0].day),
      this.renderCarSlideBox(this.monthsSlide[1].days, this.monthsSlide[1].days[0].day),
      this.renderCarSlideBox(this.monthsSlide[2].days, this.monthsSlide[2].days[0].day),
      this.renderCarSlideBox(this.monthsSlide[3].days, this.monthsSlide[3].days[0].day),
    ])))));
  }
  static get watchers() { return {
    "startDateSelect": ["startDateSelectChanged"],
    "endDateSelect": ["endDateSelectChanged"],
    "endDate": ["periodToSelectChanged"],
    "startDate": ["periodToSelectChanged"]
  }; }
};
BdsdatepickerPeriod.style = datepickerCss$1;

const datepickerCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:start;align-items:flex-start;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--textarea{padding:12px 12px 12px 12px;-ms-flex-align:start;align-items:flex-start}.input--textarea.input--label{padding:12px 12px 12px 12px}.input--textarea .input__icon{margin-top:1px}.input--textarea .input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #282828)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #282828)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #8a0000);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #fabebe);box-shadow:0 0 0 2px var(--color-error, #fabebe)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #282828)}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #01723e);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #282828)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #282828)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px;margin-top:1px}.input--label{padding:7px 4px 8px 12px}.input--label.input--textarea{padding:12px 12px 12px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px;-ms-flex-negative:0;flex-shrink:0}.input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start;margin-top:1px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex:1;flex:1}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper--textarea{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:2px}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;resize:none;cursor:inherit;width:100%;min-height:auto}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__text--textarea{resize:vertical;overflow-y:auto;line-height:20px;padding:0;scrollbar-width:thin;scrollbar-color:var(--color-border-2, rgba(0, 0, 0, 0.16)) transparent}.input__container__text--textarea::-webkit-scrollbar{width:8px}.input__container__text--textarea::-webkit-scrollbar-track{background:transparent}.input__container__text--textarea::-webkit-scrollbar-thumb{background:var(--color-border-2, rgba(0, 0, 0, 0.16));border-radius:4px}.input__container__text--textarea::-webkit-scrollbar-thumb:hover{background:var(--color-content-ghost, #8c8c8c)}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #595959);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px;-ms-flex-negative:0;flex-shrink:0}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #282828)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}:host{position:relative;max-width:608px}.datepicker__inputs{position:relative;width:100%;display:grid}.datepicker__inputs__open{z-index:90000}.datepicker__inputs__single{grid-template-columns:1fr}.datepicker__inputs__period{grid-template-columns:1fr 1fr;gap:16px}.datepicker__inputs bds-input{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%}.datepicker__inputs bds-input::part(input-container){position:relative}.datepicker__inputs__icon{cursor:pointer;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-right:16px}.datepicker__inputs__icon bds-icon:first-child{margin-right:8px}.datepicker__inputs__icon:hover bds-icon:first-child{color:var(--color-primary, #1e6bf1)}.datepicker__menu{position:absolute;pointer-events:none;background-color:var(--color-surface-0, white);-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));border-radius:8px;padding:16px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.datepicker__menu__open{z-index:100000;pointer-events:auto;opacity:1}.datepicker__menu__single__top-center{bottom:calc(100% + 8px);left:calc(50% - 146px)}.datepicker__menu__single__top-left{bottom:calc(100% + 8px);left:0}.datepicker__menu__single__top-right{bottom:calc(100% + 8px);right:0}.datepicker__menu__single__bottom-center{top:calc(100% + 8px);left:calc(50% - 146px)}.datepicker__menu__single__bottom-right{top:calc(100% + 8px);right:0}.datepicker__menu__single__bottom-left{top:calc(100% + 8px);left:0}.datepicker__menu__single__right-center{right:calc(100% + 8px)}.datepicker__menu__single__right-top{right:calc(100% + 8px);top:0}.datepicker__menu__single__right-bottom{right:calc(100% + 8px);bottom:0}.datepicker__menu__single__left-center{left:calc(100% + 8px)}.datepicker__menu__single__left-top{left:calc(100% + 8px);top:0}.datepicker__menu__single__left-bottom{left:calc(100% + 8px);bottom:0}.datepicker__menu__period__top-center{bottom:calc(100% + 8px);left:calc(50% - 240px)}.datepicker__menu__period__top-left{bottom:calc(100% + 8px);left:0}.datepicker__menu__period__top-right{bottom:calc(100% + 8px);right:0}.datepicker__menu__period__bottom-center{top:calc(100% + 8px);left:calc(50% - 240px)}.datepicker__menu__period__bottom-right{top:calc(100% + 8px);right:0}.datepicker__menu__period__bottom-left{top:calc(100% + 8px);left:0}.datepicker__menu__period__right-center{right:calc(100% + 8px)}.datepicker__menu__period__right-top{right:calc(100% + 8px);top:0}.datepicker__menu__period__right-bottom{right:calc(100% + 8px);bottom:0}.datepicker__menu__period__left-center{left:calc(100% + 8px)}.datepicker__menu__period__left-top{left:calc(100% + 8px);top:0}.datepicker__menu__period__left-bottom{left:calc(100% + 8px);bottom:0}.datepicker__menu__message{padding:8px;border-radius:8px;background-color:var(--color-warning, #fde99b);color:var(--color-content-din, black);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px}.datepicker__menu__message bds-icon{margin-right:4px}.datepicker__menu__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-top:8px;margin-top:8px;border-top:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.datepicker__menu__footer bds-button{margin-left:8px}.datepicker__calendar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.datepicker__calendar__selectDate{width:100%;display:grid;grid-template-columns:32px 104px auto 32px;grid-gap:8px;-ms-flex-align:center;align-items:center;margin-bottom:8px;justify-items:center}.datepicker__calendar__selectDate__select{position:relative;width:100%}.datepicker__calendar__selectDate__select__input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #f6f6f6);color:var(--color-content-default, #282828);border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.datepicker__calendar__selectDate__select__input.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__label{color:var(--color-content-default, #282828)}.datepicker__calendar__selectDate__select__input .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #282828)}.datepicker__calendar__selectDate__select__input__disable{cursor:not-allowed;background:var(--color-surface-2, #ededed);border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable:hover{border:1px solid var(--color-content-disable, #595959);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable.input--pressed{border:1px solid var(--color-content-disable, #595959);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-surface-3, #e3e3e3);box-shadow:0 0 0 2px var(--color-surface-3, #e3e3e3)}.datepicker__calendar__selectDate__select__input__disable.input--pressed .input__icon .bds-icon{color:var(--color-content-disable, #595959)}.datepicker__calendar__selectDate__select__input__disable .input__container__label{color:var(--color-content-disable, #595959)}.datepicker__calendar__selectDate__select__input__disable .input__container__label--pressed bds-typo{color:var(--color-content-disable, #595959)}.datepicker__calendar__selectDate__select__input__disable .input__container__text{caret-color:var(--color-content-disable, #595959);color:var(--color-content-disable, #595959)}.datepicker__calendar__selectDate__select__input .icon-arrow{color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex}.datepicker__calendar__selectDate__select__options{background:var(--color-surface-0, white);width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.datepicker__calendar__selectDate__select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.datepicker__calendar__selectDate__icon{cursor:pointer;color:var(--color-content-disable, #595959)}.datepicker__calendar__selectDate .arrow-left__disable{opacity:0;pointer-events:none}.datepicker__calendar__selectDate .arrow-right__disable{opacity:0;pointer-events:none}.datepicker__calendar__week{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);margin-bottom:8px}.datepicker__calendar__week__day{width:32px;height:32px;text-align:center;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.datepicker__calendar__car{height:192px;width:224px;overflow:hidden;position:relative}.datepicker__calendar__car__slide{display:-ms-flexbox;display:flex;position:absolute;left:-100%}.datepicker__calendar__car__slide__box{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.datepicker__calendar__car__slide__box__day{width:32px;height:32px;position:relative}.datepicker__calendar__car__slide__box__day__period:before{content:\"\";position:absolute;inset:4px 0px;background-color:var(--color-primary, #1e6bf1);opacity:0.25}.datepicker__calendar__car__slide__box__day__start:before{inset:4px 0;border-top-left-radius:16px;border-bottom-left-radius:16px}.datepicker__calendar__car__slide__box__day__end:before{inset:4px 0;border-top-right-radius:16px;border-bottom-right-radius:16px}.datepicker__calendar__car__slide__box__day__typo{position:relative;width:calc(100% - 2px);height:calc(100% - 2px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:100%;color:var(--color-content-default, #282828);border:1px solid transparent;cursor:pointer}.datepicker__calendar__car__slide__box__day__typo:hover{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__current{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__selected{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, white)}.datepicker__calendar__car__slide__box__day__selected:hover{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, white)}.datepicker__calendar__car__slide__box__day__disable{pointer-events:none;background-color:transparent;color:var(--color-content-ghost, #8c8c8c)}.datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPrev;animation-name:animationPrev;-webkit-animation-duration:0.33s;animation-duration:0.33s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.datepicker__calendar__car .animate__next{-webkit-animation-name:animationNext;animation-name:animationNext;-webkit-animation-duration:0.33s;animation-duration:0.33s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.period .datepicker__calendar__selectDate{grid-template-columns:32px 120px 80px auto 32px}.period .datepicker__calendar__selectDate__futureMonth{padding:0 8px;text-align:center;color:var(--color-content-default, #282828)}.period .datepicker__calendar__week{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.period .datepicker__calendar__week__present,.period .datepicker__calendar__week__future{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.period .datepicker__calendar__car{width:464px}.period .datepicker__calendar__car__slide{left:calc(-50% - 24px)}.period .datepicker__calendar__car__slide__box{margin-left:16px}.period .datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPeriodPrev;animation-name:animationPeriodPrev}.period .datepicker__calendar__car .animate__next{-webkit-animation-name:animationPeriodNext;animation-name:animationPeriodNext}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}@-webkit-keyframes animationPrev{0%{left:-100%}100%{left:0}}@keyframes animationPrev{0%{left:-100%}100%{left:0}}@-webkit-keyframes animationNext{0%{left:-100%}100%{left:-200%}}@keyframes animationNext{0%{left:-100%}100%{left:-200%}}@-webkit-keyframes animationPeriodPrev{0%{left:calc(-50% - 24px)}100%{left:-16px}}@keyframes animationPeriodPrev{0%{left:calc(-50% - 24px)}100%{left:-16px}}@-webkit-keyframes animationPeriodNext{0%{left:calc(-50% - 24px)}100%{left:calc(-100% - 24px)}}@keyframes animationPeriodNext{0%{left:calc(-50% - 24px)}100%{left:calc(-100% - 24px)}}";

const BdsdatepickerSingle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bdsDateSelected = index.createEvent(this, "bdsDateSelected", 7);
    /**
     * handler of select months or yaer.
     */
    this.handler = (event, ref) => {
      const { detail: { value }, } = event;
      if (ref == 'months') {
        this.monthActivated = value;
      }
      else {
        if (value == this.startDate.year && this.monthActivated <= this.startDate.month) {
          this.monthActivated = this.startDate.month;
        }
        if (value == this.endDate.year && this.monthActivated >= this.endDate.month) {
          this.monthActivated = this.endDate.month;
        }
        this.yearActivated = value;
      }
    };
    /**
     * openDateSelect. Function to open the year or month selector.
     */
    this.openDateSelect = (value, ref) => {
      if (ref == 'months') {
        setTimeout(() => {
          this.openSelectMonth = value;
        }, 100);
      }
      else {
        setTimeout(() => {
          this.openSelectYear = value;
        }, 100);
      }
    };
    this.week = undefined;
    this.months = undefined;
    this.years = undefined;
    this.monthActivated = this.dateSelect ? this.dateSelect.getMonth() : calendar.THIS_DAY.getMonth();
    this.yearActivated = this.dateSelect ? this.dateSelect.getFullYear() : calendar.THIS_DAY.getFullYear();
    this.animatePrev = false;
    this.animateNext = false;
    this.openSelectMonth = false;
    this.openSelectYear = false;
    this.monthsSlide = undefined;
    this.loadingSlide = 'await';
    this.endDate = calendar.dateToDayList(calendar.defaultEndDate);
    this.startDate = calendar.dateToDayList(calendar.defaultStartDate);
    this.dateSelect = null;
    this.language = 'pt_BR';
    this.dtButtonPrev = null;
    this.dtButtonNext = null;
    this.dtSelectMonth = null;
    this.dtSelectYear = null;
  }
  /**
   * Return the validity of the input.
   */
  async clear() {
    this.dateSelect = null;
  }
  periodToSelectChanged(newValue, _oldValue) {
    const oldDate = calendar.fillDayList(_oldValue);
    const newDate = calendar.fillDayList(newValue);
    if (newDate != oldDate) {
      this.monthActivated = this.startDate.month;
      this.yearActivated = this.startDate.year;
    }
  }
  /**
   * DateSelect. Function to output selected start date.
   */
  startDateSelectChanged() {
    this.bdsDateSelected.emit({ value: this.dateSelect });
  }
  componentWillLoad() {
    const fillStartDate = calendar.fillDayList(this.startDate);
    const fillEndDate = calendar.fillDayList(this.endDate);
    const fillActDate = calendar.fillDate(calendar.THIS_DAY);
    if (fillStartDate > fillActDate || fillEndDate < fillActDate) {
      this.monthActivated = this.startDate.month;
      this.yearActivated = this.startDate.year;
    }
  }
  componentWillRender() {
    this.week = Object.values(calendar.weekDays(this.language));
    this.monthsSlide = calendar.getMonthsSlide(this.yearActivated, this.monthActivated);
    this.years = calendar.getYears(this.yearActivated, this.startDate.year, this.endDate.year);
    this.months = calendar.getMonths(this.yearActivated, this.startDate, this.endDate, calendar.changeMonths(this.language));
  }
  /**
   * prevDays. Function to create a gap between the beginning of the grid and the first day of the month.
   */
  prevDays(value) {
    const lenghtDays = [];
    for (let i = 0; i < value; i++) {
      lenghtDays.push(i);
    }
    return lenghtDays.map((item) => index.h("span", { key: `id${item}`, class: `space ${item}` }));
  }
  /**
   * selectDate. Function to select the desired date.
   */
  selectDate(value) {
    const changeSelected = new Date(value.year, value.month, value.date);
    this.bdsDateSelected.emit({ value: changeSelected });
  }
  /**
   * prevMonth. Function to rewind the date on the calendar slide.
   */
  prevMonth() {
    this.animatePrev = true;
    if (this.loadingSlide != 'pendding') {
      this.loadingSlide = 'pendding';
      setTimeout(() => {
        this.animatePrev = false;
        this.monthActivated = this.monthActivated - 1;
        if (this.monthActivated < 0) {
          this.monthActivated = 11;
          this.yearActivated = this.yearActivated - 1;
        }
        this.loadingSlide = 'success';
      }, 300);
    }
    else {
      return;
    }
  }
  /**
   * nextMonth. Function to advance the date on the calendar slide.
   */
  nextMonth() {
    this.animateNext = true;
    if (this.loadingSlide != 'pendding') {
      this.loadingSlide = 'pendding';
      setTimeout(() => {
        this.animateNext = false;
        this.monthActivated = this.monthActivated + 1;
        if (this.monthActivated > 11) {
          this.monthActivated = 0;
          this.yearActivated = this.yearActivated + 1;
        }
        this.loadingSlide = 'success';
      }, 300);
    }
    else {
      return;
    }
  }
  /**
   * checkCurrentDay. Function to check the current day.
   */
  checkCurrentDay(value) {
    const fullCurrDate = calendar.fillDate(calendar.THIS_DAY);
    if (calendar.fillDayList(value) == fullCurrDate)
      return true;
    else
      return false;
  }
  /**
   * checkDisableDay. Function to check the disable day.
   */
  checkDisableDay(value) {
    const startDateLimit = this.startDate ? calendar.fillDayList(this.startDate) : `0`;
    const endDateLimit = this.endDate ? calendar.fillDayList(this.endDate) : `9999999`;
    if (this.startDate && calendar.fillDayList(value) < startDateLimit) {
      return true;
    }
    if (this.endDate && calendar.fillDayList(value) > endDateLimit) {
      return true;
    }
  }
  /**
   * checkSelectedDay. Function to check the selected day.
   */
  checkSelectedDay(value) {
    const selectedDate = this.dateSelect ? calendar.fillDate(this.dateSelect) : `0`;
    if (calendar.fillDayList(value) == selectedDate)
      return true;
    else
      return false;
  }
  renderSelectData(data, selected, ref) {
    const openSelect = ref == 'months' ? this.openSelectMonth : this.openSelectYear;
    const labelSelect = data.filter((obj) => obj.value === selected);
    const iconArrow = openSelect ? 'arrow-up' : 'arrow-down';
    return (index.h("div", { class: {
        datepicker__calendar__selectDate__select: true,
        [`datepicker__calendar__selectDate__select__${ref}`]: true,
      } }, index.h("button", { onFocus: () => data.length > 1 && this.openDateSelect(true, ref), onBlur: () => data.length > 1 && this.openDateSelect(false, ref), class: {
        datepicker__calendar__selectDate__select__input: true,
        datepicker__calendar__selectDate__select__input__disable: data.length <= 1,
        [`input--pressed`]: openSelect,
      }, "data-test": ref == 'months' ? this.dtSelectMonth : this.dtSelectYear }, index.h("bds-typo", { variant: "fs-14" }, labelSelect[0]?.label), index.h("div", { class: "icon-arrow" }, index.h("bds-icon", { size: "small", name: iconArrow, color: "inherit" }))), index.h("div", { class: {
        datepicker__calendar__selectDate__select__options: true,
        'datepicker__calendar__selectDate__select__options--open': openSelect,
      } }, data.map((option) => (index.h("bds-select-option", { value: option.value, key: option.value, onOptionSelected: (event) => this.handler(event, ref), selected: option.value == selected, onClick: () => this.openDateSelect(false, ref) }, option.label))))));
  }
  renderCarSlideBox(days, firstDayWeek) {
    return (index.h("div", { class: { datepicker__calendar__car__slide__box: true } }, this.prevDays(firstDayWeek), days.map((item, idx) => (index.h("div", { key: idx, class: {
        datepicker__calendar__car__slide__box__day: true,
      } }, index.h("bds-typo", { class: {
        datepicker__calendar__car__slide__box__day__typo: true,
        datepicker__calendar__car__slide__box__day__current: this.checkCurrentDay(item),
        datepicker__calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
        datepicker__calendar__car__slide__box__day__disable: this.checkDisableDay(item),
      }, onClick: () => this.selectDate(item), variant: "fs-14" }, item.date))))));
  }
  render() {
    return (index.h("div", { class: { datepicker__calendar: true } }, index.h("div", { class: { datepicker__calendar__selectDate: true } }, index.h("bds-icon", { class: {
        [`arrow-left`]: true,
        [`arrow-left__disable`]: calendar.fillDayList(this.monthsSlide[0].days[this.monthsSlide[0].days.length - 1]) <
          calendar.fillDayList(this.startDate),
        datepicker__calendar__selectDate__icon: true,
      }, name: "arrow-left", theme: "outline", size: "small", onClick: () => this.prevMonth(), dataTest: this.dtButtonPrev }), [
      this.renderSelectData(this.months, this.monthActivated, 'months'),
      this.renderSelectData(this.years, this.yearActivated, 'years'),
    ], index.h("bds-icon", { class: {
        [`arrow-right`]: true,
        [`arrow-right__disable`]: calendar.fillDayList(this.monthsSlide[2].days[0]) > calendar.fillDayList(this.endDate),
        datepicker__calendar__selectDate__icon: true,
      }, name: "arrow-right", theme: "outline", size: "small", onClick: () => this.nextMonth(), dataTest: this.dtButtonNext })), index.h("div", null, index.h("div", { class: { datepicker__calendar__week: true } }, this.week.map((item, idx) => (index.h("bds-typo", { variant: "fs-14", key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0))))), index.h("div", { class: { datepicker__calendar__car: true } }, index.h("div", { class: {
        datepicker__calendar__car__slide: true,
        animate__prev: this.animatePrev,
        animate__next: this.animateNext,
      } }, [
      this.renderCarSlideBox(this.monthsSlide[0].days, this.monthsSlide[0].days[0].day),
      this.renderCarSlideBox(this.monthsSlide[1].days, this.monthsSlide[1].days[0].day),
      this.renderCarSlideBox(this.monthsSlide[2].days, this.monthsSlide[2].days[0].day),
    ])))));
  }
  static get watchers() { return {
    "endDate": ["periodToSelectChanged"],
    "startDate": ["periodToSelectChanged"],
    "dateSelect": ["startDateSelectChanged"]
  }; }
};
BdsdatepickerSingle.style = datepickerCss;

exports.bds_datepicker_period = BdsdatepickerPeriod;
exports.bds_datepicker_single = BdsdatepickerSingle;
