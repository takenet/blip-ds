import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';
import { T as THIS_DAY, d as dateToDayList, f as fillDayList, a as fillDate, w as weekDays, g as getMonthsSlide, b as getYears, c as getMonths, e as changeMonths, h as defaultStartDate, i as defaultEndDate } from './p-DnLxuNI7.js';
import { d as defineCustomElement$4 } from './p-BmvUJnHb.js';
import { d as defineCustomElement$3 } from './p-BHBVuzyo.js';
import { d as defineCustomElement$2 } from './p-CpJLOuix.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

const datepickerCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, rgb(89, 89, 89));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}:host{position:relative;max-width:608px}.datepicker__inputs{position:relative;width:100%;display:grid}.datepicker__inputs__open{z-index:90000}.datepicker__inputs__single{grid-template-columns:1fr}.datepicker__inputs__period{grid-template-columns:1fr 1fr;gap:16px}.datepicker__inputs bds-input{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%}.datepicker__inputs bds-input::part(input-container){position:relative}.datepicker__inputs__icon{cursor:pointer;color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-right:16px}.datepicker__inputs__icon bds-icon:first-child{margin-right:8px}.datepicker__inputs__icon:hover bds-icon:first-child{color:var(--color-primary, rgb(30, 107, 241))}.datepicker__menu{position:absolute;pointer-events:none;background-color:var(--color-surface-0, rgb(255, 255, 255));-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));border-radius:8px;padding:16px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.datepicker__menu__open{z-index:100000;pointer-events:auto;opacity:1}.datepicker__menu__single__top-center{bottom:calc(100% + 8px);left:calc(50% - 146px)}.datepicker__menu__single__top-left{bottom:calc(100% + 8px);left:0}.datepicker__menu__single__top-right{bottom:calc(100% + 8px);right:0}.datepicker__menu__single__bottom-center{top:calc(100% + 8px);left:calc(50% - 146px)}.datepicker__menu__single__bottom-right{top:calc(100% + 8px);right:0}.datepicker__menu__single__bottom-left{top:calc(100% + 8px);left:0}.datepicker__menu__single__right-center{right:calc(100% + 8px)}.datepicker__menu__single__right-top{right:calc(100% + 8px);top:0}.datepicker__menu__single__right-bottom{right:calc(100% + 8px);bottom:0}.datepicker__menu__single__left-center{left:calc(100% + 8px)}.datepicker__menu__single__left-top{left:calc(100% + 8px);top:0}.datepicker__menu__single__left-bottom{left:calc(100% + 8px);bottom:0}.datepicker__menu__period__top-center{bottom:calc(100% + 8px);left:calc(50% - 240px)}.datepicker__menu__period__top-left{bottom:calc(100% + 8px);left:0}.datepicker__menu__period__top-right{bottom:calc(100% + 8px);right:0}.datepicker__menu__period__bottom-center{top:calc(100% + 8px);left:calc(50% - 240px)}.datepicker__menu__period__bottom-right{top:calc(100% + 8px);right:0}.datepicker__menu__period__bottom-left{top:calc(100% + 8px);left:0}.datepicker__menu__period__right-center{right:calc(100% + 8px)}.datepicker__menu__period__right-top{right:calc(100% + 8px);top:0}.datepicker__menu__period__right-bottom{right:calc(100% + 8px);bottom:0}.datepicker__menu__period__left-center{left:calc(100% + 8px)}.datepicker__menu__period__left-top{left:calc(100% + 8px);top:0}.datepicker__menu__period__left-bottom{left:calc(100% + 8px);bottom:0}.datepicker__menu__message{padding:8px;border-radius:8px;background-color:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-din, rgb(0, 0, 0));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px}.datepicker__menu__message bds-icon{margin-right:4px}.datepicker__menu__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-top:8px;margin-top:8px;border-top:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.datepicker__menu__footer bds-button{margin-left:8px}.datepicker__calendar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.datepicker__calendar__selectDate{width:100%;display:grid;grid-template-columns:32px 104px auto 32px;grid-gap:8px;-ms-flex-align:center;align-items:center;margin-bottom:8px;justify-items:center}.datepicker__calendar__selectDate__select{position:relative;width:100%}.datepicker__calendar__selectDate__select__input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, rgb(246, 246, 246));color:var(--color-content-default, rgb(40, 40, 40));border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.datepicker__calendar__selectDate__select__input.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.datepicker__calendar__selectDate__select__input .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.datepicker__calendar__selectDate__select__input .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.datepicker__calendar__selectDate__select__input .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.datepicker__calendar__selectDate__select__input__disable{cursor:not-allowed;background:var(--color-surface-2, rgb(237, 237, 237));border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable:hover{border:1px solid var(--color-content-disable, rgb(89, 89, 89));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable.input--pressed{border:1px solid var(--color-content-disable, rgb(89, 89, 89));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-surface-3, rgb(227, 227, 227));box-shadow:0 0 0 2px var(--color-surface-3, rgb(227, 227, 227))}.datepicker__calendar__selectDate__select__input__disable.input--pressed .input__icon .bds-icon{color:var(--color-content-disable, rgb(89, 89, 89))}.datepicker__calendar__selectDate__select__input__disable .input__container__label{color:var(--color-content-disable, rgb(89, 89, 89))}.datepicker__calendar__selectDate__select__input__disable .input__container__label--pressed bds-typo{color:var(--color-content-disable, rgb(89, 89, 89))}.datepicker__calendar__selectDate__select__input__disable .input__container__text{caret-color:var(--color-content-disable, rgb(89, 89, 89));color:var(--color-content-disable, rgb(89, 89, 89))}.datepicker__calendar__selectDate__select__input .icon-arrow{color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex}.datepicker__calendar__selectDate__select__options{background:var(--color-surface-0, rgb(255, 255, 255));width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.datepicker__calendar__selectDate__select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.datepicker__calendar__selectDate__icon{cursor:pointer;color:var(--color-content-disable, rgb(89, 89, 89))}.datepicker__calendar__selectDate .arrow-left__disable{opacity:0;pointer-events:none}.datepicker__calendar__selectDate .arrow-right__disable{opacity:0;pointer-events:none}.datepicker__calendar__week{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);margin-bottom:8px}.datepicker__calendar__week__day{width:32px;height:32px;text-align:center;color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.datepicker__calendar__car{height:192px;width:224px;overflow:hidden;position:relative}.datepicker__calendar__car__slide{display:-ms-flexbox;display:flex;position:absolute;left:-100%}.datepicker__calendar__car__slide__box{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.datepicker__calendar__car__slide__box__day{width:32px;height:32px;position:relative}.datepicker__calendar__car__slide__box__day__period:before{content:\"\";position:absolute;inset:4px 0px;background-color:var(--color-primary, rgb(30, 107, 241));opacity:0.25}.datepicker__calendar__car__slide__box__day__start:before{inset:4px 0;border-top-left-radius:16px;border-bottom-left-radius:16px}.datepicker__calendar__car__slide__box__day__end:before{inset:4px 0;border-top-right-radius:16px;border-bottom-right-radius:16px}.datepicker__calendar__car__slide__box__day__typo{position:relative;width:calc(100% - 2px);height:calc(100% - 2px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:100%;color:var(--color-content-default, rgb(40, 40, 40));border:1px solid transparent;cursor:pointer}.datepicker__calendar__car__slide__box__day__typo:hover{background-color:var(--color-surface-1, rgb(246, 246, 246));color:var(--color-primary, rgb(30, 107, 241));border-color:var(--color-primary, rgb(30, 107, 241))}.datepicker__calendar__car__slide__box__day__current{background-color:var(--color-surface-1, rgb(246, 246, 246));color:var(--color-primary, rgb(30, 107, 241));border-color:var(--color-primary, rgb(30, 107, 241))}.datepicker__calendar__car__slide__box__day__selected{background-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-bright, rgb(255, 255, 255))}.datepicker__calendar__car__slide__box__day__selected:hover{background-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-bright, rgb(255, 255, 255))}.datepicker__calendar__car__slide__box__day__disable{pointer-events:none;background-color:transparent;color:var(--color-content-ghost, rgb(140, 140, 140))}.datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPrev;animation-name:animationPrev;-webkit-animation-duration:0.33s;animation-duration:0.33s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.datepicker__calendar__car .animate__next{-webkit-animation-name:animationNext;animation-name:animationNext;-webkit-animation-duration:0.33s;animation-duration:0.33s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.period .datepicker__calendar__selectDate{grid-template-columns:32px 120px 80px auto 32px}.period .datepicker__calendar__selectDate__futureMonth{padding:0 8px;text-align:center;color:var(--color-content-default, rgb(40, 40, 40))}.period .datepicker__calendar__week{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.period .datepicker__calendar__week__present,.period .datepicker__calendar__week__future{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.period .datepicker__calendar__car{width:464px}.period .datepicker__calendar__car__slide{left:calc(-50% - 24px)}.period .datepicker__calendar__car__slide__box{margin-left:16px}.period .datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPeriodPrev;animation-name:animationPeriodPrev}.period .datepicker__calendar__car .animate__next{-webkit-animation-name:animationPeriodNext;animation-name:animationPeriodNext}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}@-webkit-keyframes animationPrev{0%{left:-100%}100%{left:0}}@keyframes animationPrev{0%{left:-100%}100%{left:0}}@-webkit-keyframes animationNext{0%{left:-100%}100%{left:-200%}}@keyframes animationNext{0%{left:-100%}100%{left:-200%}}@-webkit-keyframes animationPeriodPrev{0%{left:calc(-50% - 24px)}100%{left:-16px}}@keyframes animationPeriodPrev{0%{left:calc(-50% - 24px)}100%{left:-16px}}@-webkit-keyframes animationPeriodNext{0%{left:calc(-50% - 24px)}100%{left:calc(-100% - 24px)}}@keyframes animationPeriodNext{0%{left:calc(-50% - 24px)}100%{left:calc(-100% - 24px)}}";

const BdsdatepickerPeriod = /*@__PURE__*/ proxyCustomElement(class BdsdatepickerPeriod extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.bdsStartDate = createEvent(this, "bdsStartDate");
        this.bdsEndDate = createEvent(this, "bdsEndDate");
        this.bdsClickDayButton = createEvent(this, "bdsClickDayButton");
        this.monthActivated = this.startDateSelect ? this.startDateSelect.getMonth() : THIS_DAY.getMonth();
        this.yearActivated = this.startDateSelect ? this.startDateSelect.getFullYear() : THIS_DAY.getFullYear();
        this.animatePrev = false;
        this.animateNext = false;
        this.activeSelectYear = false;
        this.openSelectMonth = false;
        this.openSelectYear = false;
        this.loadingSlide = 'await';
        /**
         * StartDate. Insert a limiter to select the date period.
         */
        this.startDate = dateToDayList(defaultStartDate);
        /**
         * EndDate. Insert a limiter to select the date period.
         */
        this.endDate = dateToDayList(defaultEndDate);
        /**
         * StartDateSelect. Insert a limiter to select the date period.
         */
        this.startDateSelect = null;
        /**
         * EndDateSelect. Insert a limiter to select the date period.
         */
        this.endDateSelect = null;
        /**
         * Language, Entered as one of the languages. Can be one of:
         * 'pt_BR', 'es_ES', 'en_US'.
         */
        this.language = 'pt_BR';
        /**
         * EndDateSelect. Insert a limiter to select the date period.
         */
        this.stateSelect = 'start';
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonPrev is the data-test to button prev.
         */
        this.dtButtonPrev = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonNext is the data-test to button next.
         */
        this.dtButtonNext = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtSelectMonth is the data-test to select month.
         */
        this.dtSelectMonth = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtSelectYear is the data-test to select year.
         */
        this.dtSelectYear = null;
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
        const oldDate = fillDayList(_oldValue);
        const newDate = fillDayList(newValue);
        if (newDate != oldDate) {
            this.monthActivated = this.startDate.month;
            this.yearActivated = this.startDate.year;
        }
    }
    componentWillLoad() {
        const fillStartDate = fillDayList(this.startDate);
        const fillEndDate = fillDayList(this.endDate);
        const fillActDate = fillDate(THIS_DAY);
        if (fillStartDate > fillActDate || fillEndDate < fillActDate) {
            this.monthActivated = this.startDate.month;
            this.yearActivated = this.startDate.year;
        }
    }
    componentWillRender() {
        this.week = Object.values(weekDays(this.language));
        this.monthsSlide = getMonthsSlide(this.yearActivated, this.monthActivated);
        this.years = getYears(this.yearActivated, this.startDate.year, this.endDate.year);
        this.months = getMonths(this.yearActivated, this.startDate, this.endDate, changeMonths(this.language));
    }
    /**
     * prevDays. Function to create a gap between the beginning of the grid and the first day of the month.
     */
    prevDays(value) {
        const lenghtDays = [];
        for (let i = 0; i < value; i++) {
            lenghtDays.push(i);
        }
        return lenghtDays.map((item) => h("span", { key: `id${item}`, class: `space ${item}` }));
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
        const validateDate = fillDayList(value);
        const fullCurrDate = fillDate(THIS_DAY);
        if (validateDate == fullCurrDate)
            return true;
        else
            return false;
    }
    /**
     * checkDisableDay. Function to check the disable day.
     */
    checkDisableDay(value) {
        const validateDate = fillDayList(value);
        const startDateLimit = this.startDate ? fillDayList(this.startDate) : `0`;
        const endDateLimit = this.endDate ? fillDayList(this.endDate) : `9999999`;
        const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;
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
        const validateDate = fillDayList(value);
        const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;
        const endSelectedDate = this.endDateSelect ? fillDate(this.endDateSelect) : `0`;
        if (validateDate == startSelectedDate || validateDate == endSelectedDate)
            return true;
        else
            return false;
    }
    /**
     * checkPeriodDay. Function to check the period selected day.
     */
    checkPeriodDay(value) {
        const validateDate = fillDayList(value);
        const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;
        const endSelectedDate = this.endDateSelect ? fillDate(this.endDateSelect) : `0`;
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
        const selectDate = fillDayList(value);
        const startSelectedDate = this.startDateSelect ? fillDate(this.startDateSelect) : `0`;
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
        const selectDate = fillDayList(value);
        const endSelectedDate = this.endDateSelect ? fillDate(this.endDateSelect) : `0`;
        const validateStartDate = selectDate == endSelectedDate;
        if (validateDate || validateDay || validateStartDate) {
            return true;
        }
    }
    renderSelectData(data, selected, ref) {
        const openSelect = ref == 'months' ? this.openSelectMonth : this.openSelectYear;
        const labelSelect = data.filter((obj) => obj.value === selected);
        const iconArrow = openSelect ? 'arrow-up' : 'arrow-down';
        return (h("div", { class: {
                datepicker__calendar__selectDate__select: true,
                [`datepicker__calendar__selectDate__select__${ref}`]: true,
            } }, h("button", { onFocus: () => data.length > 1 && this.openDateSelect(true, ref), onBlur: () => data.length > 1 && this.openDateSelect(false, ref), class: {
                datepicker__calendar__selectDate__select__input: true,
                datepicker__calendar__selectDate__select__input__disable: data.length <= 1,
                [`input--pressed`]: openSelect,
            }, "data-test": ref == 'months' ? this.dtSelectMonth : this.dtSelectYear }, h("bds-typo", { variant: "fs-14" }, labelSelect[0].label), h("div", { class: "icon-arrow" }, h("bds-icon", { size: "small", name: iconArrow, color: "inherit" }))), h("div", { class: {
                datepicker__calendar__selectDate__select__options: true,
                'datepicker__calendar__selectDate__select__options--open': openSelect,
            } }, data.map((option) => (h("bds-select-option", { value: option.value, key: option.value, onOptionSelected: (event) => this.handler(event, ref), selected: option.value == selected, onClick: () => this.openDateSelect(false, ref) }, option.label))))));
    }
    renderCarSlideBox(days, firstDayWeek) {
        return (h("div", { class: { datepicker__calendar__car__slide__box: true } }, this.prevDays(firstDayWeek), days.map((item, idx) => (h("div", { key: idx, class: {
                datepicker__calendar__car__slide__box__day: true,
                datepicker__calendar__car__slide__box__day__period: this.checkPeriodDay(item),
                datepicker__calendar__car__slide__box__day__start: this.checkPeriodStart(item),
                datepicker__calendar__car__slide__box__day__end: this.checkPeriodEnd(item, days.length === idx + 1),
            } }, h("bds-typo", { class: {
                datepicker__calendar__car__slide__box__day__typo: true,
                datepicker__calendar__car__slide__box__day__current: this.checkCurrentDay(item),
                datepicker__calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
                datepicker__calendar__car__slide__box__day__disable: this.checkDisableDay(item),
            }, variant: "fs-14", onClick: () => this.selectDate(item) }, item.date))))));
    }
    render() {
        const futureMonth = changeMonths(this.language).filter((obj) => obj.value === this.monthsSlide[2].month);
        const futureYear = this.monthsSlide[2].year;
        return (h("div", { key: '1b6c17809d83cc528d94ee21d6c6d6e422c31055', class: { datepicker__calendar: true, [`period`]: true } }, h("div", { key: 'e01a46ea9bad84e022ef112f911b705d04ca4346', class: { datepicker__calendar__selectDate: true } }, h("bds-icon", { key: '6d6224d9c12ce4b95c99700ca21ee2b130406d25', class: {
                [`arrow-left`]: true,
                [`arrow-left__disable`]: fillDayList(this.monthsSlide[0].days[this.monthsSlide[0].days.length - 1]) <
                    fillDayList(this.startDate),
                datepicker__calendar__selectDate__icon: true,
            }, name: "arrow-left", theme: "outline", size: "small", onClick: () => this.prevMonth(), dataTest: this.dtButtonPrev }), [
            this.renderSelectData(this.months, this.monthActivated, 'months'),
            this.renderSelectData(this.years, this.yearActivated, 'years'),
        ], h("bds-typo", { key: 'ca0ff960b04e1573e35eba5fdcda5022deee0359', class: "datepicker__calendar__selectDate__futureMonth", variant: "fs-14" }, `${futureMonth[0].label}, ${futureYear}`), h("bds-icon", { key: '4f813679c8526ec5a50d766e57f1926ccb3c4702', class: {
                [`arrow-right`]: true,
                [`arrow-right__disable`]: fillDayList(this.monthsSlide[2].days[0]) > fillDayList(this.endDate),
                datepicker__calendar__selectDate__icon: true,
            }, name: "arrow-right", theme: "outline", size: "small", onClick: () => this.nextMonth(), dataTest: this.dtButtonNext })), h("div", { key: '4cdf2341e9c5779e9c1ea12f2294a37b8e37c9d0' }, h("div", { key: '81bfa5df025ca23dce29b52098ef890320f20ec0', class: { datepicker__calendar__week: true } }, h("div", { key: 'b5fae83dfda1e30ab43f1176c65864c4dd77052d', class: { datepicker__calendar__week__present: true } }, this.week.map((item, idx) => (h("bds-typo", { variant: "fs-14", key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0))))), h("div", { key: '87fbd028e390c5ac9c12f0954271a1b1cd5326e8', class: { datepicker__calendar__week__future: true } }, this.week.map((item, idx) => (h("bds-typo", { variant: "fs-14", key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0)))))), h("div", { key: 'ab6420524540a79e8358ddb0045016da2236b24a', class: { datepicker__calendar__car: true, datepicker__calendar__car__period: true } }, h("div", { key: 'de19d2a4bce241bf0bd0cce5921a0dc0c6f9ee36', class: {
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
    static get style() { return datepickerCss; }
}, [1, "bds-datepicker-period", {
        "startDate": [16, "start-date"],
        "endDate": [16, "end-date"],
        "startDateSelect": [1040, "start-date-select"],
        "endDateSelect": [1040, "end-date-select"],
        "language": [1],
        "stateSelect": [1537, "state-select"],
        "dtButtonPrev": [1, "dt-button-prev"],
        "dtButtonNext": [1, "dt-button-next"],
        "dtSelectMonth": [1, "dt-select-month"],
        "dtSelectYear": [1, "dt-select-year"],
        "week": [32],
        "months": [32],
        "years": [32],
        "monthActivated": [32],
        "yearActivated": [32],
        "animatePrev": [32],
        "animateNext": [32],
        "activeSelectYear": [32],
        "openSelectMonth": [32],
        "openSelectYear": [32],
        "monthsSlide": [32],
        "loadingSlide": [32],
        "clear": [64]
    }, undefined, {
        "startDateSelect": ["startDateSelectChanged"],
        "endDateSelect": ["endDateSelectChanged"],
        "endDate": ["periodToSelectChanged"],
        "startDate": ["periodToSelectChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-datepicker-period", "bds-checkbox", "bds-icon", "bds-select-option", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-datepicker-period":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsdatepickerPeriod);
            }
            break;
        case "bds-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "bds-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "bds-select-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { BdsdatepickerPeriod as B, defineCustomElement as d };
//# sourceMappingURL=p-KmcoJaS5.js.map

//# sourceMappingURL=p-KmcoJaS5.js.map