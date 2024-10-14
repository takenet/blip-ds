import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-611fd21e.js';
import { t as typeDateToStringDate, d as dateToDayList, m as messageTranslate, f as fillDayList, a as defaultStartDate, b as defaultEndDate, c as dateToInputDate, e as dateToTypeDate, g as termTranslate } from './calendar-6f71cf06.js';
import { d as dateValidation } from './validations-b8451d75.js';
import { d as positionElement, g as getScrollParent } from './position-element-dba422ab.js';

const datepickerCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #454545)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #454545)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #454545)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}.datepicker{position:relative;max-width:608px}.datepicker__inputs{position:relative;width:100%;display:grid}.datepicker__inputs__open{z-index:90000}.datepicker__inputs__single{grid-template-columns:1fr}.datepicker__inputs__period{grid-template-columns:1fr 1fr;gap:16px}.datepicker__inputs bds-input{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%}.datepicker__inputs bds-input::part(input-container){position:relative}.datepicker__inputs__icon{cursor:pointer;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-right:16px}.datepicker__inputs__icon bds-icon:first-child{margin-right:8px}.datepicker__inputs__icon:hover bds-icon:first-child{color:var(--color-primary, #1e6bf1)}.datepicker__menu{position:fixed;pointer-events:none;top:0;left:0;background-color:var(--color-surface-1, #f6f6f6);-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));border-radius:8px;padding:16px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.datepicker__menu__open{z-index:100000;pointer-events:auto;opacity:1}.datepicker__menu__message{padding:8px 16px;border-radius:8px;background-color:var(--color-warning, #fde99b);color:var(--color-content-din, #000000);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px}.datepicker__menu__message bds-icon{margin-right:8px}.datepicker__menu__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-top:16px;margin-top:16px;border-top:1px solid var(--color-content-ghost, #8c8c8c)}.datepicker__menu__footer bds-button{margin-left:16px}.datepicker__calendar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.datepicker__calendar__selectDate{width:100%;display:grid;grid-template-columns:28px 1fr 80px 28px;grid-gap:8px;-ms-flex-align:center;align-items:center;margin-bottom:16px;padding:0 8px}.datepicker__calendar__selectDate__select{position:relative;width:100%}.datepicker__calendar__selectDate__select__input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #f6f6f6);color:var(--color-content-default, #454545);border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.datepicker__calendar__selectDate__select__input.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__label{color:var(--color-content-default, #454545)}.datepicker__calendar__selectDate__select__input .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.datepicker__calendar__selectDate__select__input__disable{cursor:not-allowed;background:var(--color-surface-2, #e0e0e0);border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable:hover{border:1px solid var(--color-content-disable, #636363);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid var(--color-border-1, #c9c9c9);box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable.input--pressed{border:1px solid var(--color-content-disable, #636363);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-surface-3, #cfcfcf);box-shadow:0 0 0 2px var(--color-surface-3, #cfcfcf)}.datepicker__calendar__selectDate__select__input__disable.input--pressed .input__icon .bds-icon{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__label{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__label--pressed bds-typo{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__text{caret-color:var(--color-content-disable, #636363);color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input .icon-arrow{color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex}.datepicker__calendar__selectDate__select__options{background:var(--color-surface-0, #ffffff);width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar{width:16px;background-color:transparent}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.datepicker__calendar__selectDate__select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.datepicker__calendar__selectDate__icon{cursor:pointer;color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate .arrow-left{padding-left:8px}.datepicker__calendar__selectDate .arrow-left__disable{opacity:0;pointer-events:none}.datepicker__calendar__selectDate .arrow-right{padding-right:8px}.datepicker__calendar__selectDate .arrow-right__disable{opacity:0;pointer-events:none}.datepicker__calendar__week{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);margin-bottom:8px}.datepicker__calendar__week__day{width:40px;height:40px;text-align:center;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.datepicker__calendar__car{height:280px;width:280px;overflow:hidden;position:relative}.datepicker__calendar__car__slide{display:-ms-flexbox;display:flex;position:absolute;left:-100%}.datepicker__calendar__car__slide__box{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);gap:8px 0}.datepicker__calendar__car__slide__box__day{width:40px;height:40px;position:relative}.datepicker__calendar__car__slide__box__day__period:before{content:\"\";position:absolute;inset:4px 0px;background-color:var(--color-primary, #1e6bf1);opacity:0.25}.datepicker__calendar__car__slide__box__day__start:before{inset:4px 0;border-top-left-radius:16px;border-bottom-left-radius:16px}.datepicker__calendar__car__slide__box__day__end:before{inset:4px 0;border-top-right-radius:16px;border-bottom-right-radius:16px}.datepicker__calendar__car__slide__box__day__typo{position:relative;width:calc(100% - 2px);height:calc(100% - 2px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:100%;color:var(--color-content-default, #454545);border:1px solid transparent;cursor:pointer}.datepicker__calendar__car__slide__box__day__typo:hover{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__current{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__selected{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, #ffffff)}.datepicker__calendar__car__slide__box__day__selected:hover{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, #ffffff)}.datepicker__calendar__car__slide__box__day__disable{pointer-events:none;background-color:transparent;color:var(--color-content-ghost, #8c8c8c)}.datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPrev;animation-name:animationPrev;-webkit-animation-duration:0.31s;animation-duration:0.31s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.datepicker__calendar__car .animate__next{-webkit-animation-name:animationNext;animation-name:animationNext;-webkit-animation-duration:0.31s;animation-duration:0.31s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.period .datepicker__calendar__selectDate{grid-template-columns:28px 120px 80px 1fr 28px}.period .datepicker__calendar__selectDate__futureMonth{padding-left:80px;text-align:center;color:var(--color-content-default, #454545)}.period .datepicker__calendar__week{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.period .datepicker__calendar__week__present,.period .datepicker__calendar__week__future{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.period .datepicker__calendar__car{width:600px}.period .datepicker__calendar__car__slide{left:calc(-50% - 60px)}.period .datepicker__calendar__car__slide__box{margin-left:40px}.period .datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPeriodPrev;animation-name:animationPeriodPrev}.period .datepicker__calendar__car .animate__next{-webkit-animation-name:animationPeriodNext;animation-name:animationPeriodNext}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}@-webkit-keyframes animationPrev{0%{left:-100%}100%{left:0}}@keyframes animationPrev{0%{left:-100%}100%{left:0}}@-webkit-keyframes animationNext{0%{left:-100%}100%{left:-200%}}@keyframes animationNext{0%{left:-100%}100%{left:-200%}}@-webkit-keyframes animationPeriodPrev{0%{left:calc(-50% - 60px)}100%{left:-40px}}@keyframes animationPeriodPrev{0%{left:calc(-50% - 60px)}100%{left:-40px}}@-webkit-keyframes animationPeriodNext{0%{left:calc(-50% - 60px)}100%{left:calc(-100% - 80px)}}@keyframes animationPeriodNext{0%{left:calc(-50% - 60px)}100%{left:calc(-100% - 80px)}}";

const DatePicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsStartDate = createEvent(this, "bdsStartDate", 7);
    this.bdsEndDate = createEvent(this, "bdsEndDate", 7);
    this.concludeDatepicker = createEvent(this, "concludeDatepicker", 7);
    this.refActionElement = (el) => {
      this.actionElement = el;
    };
    this.refMenuElement = (el) => {
      this.menuElement = el;
    };
    this.refInputSetDate = (el) => {
      this.inputSetDate = el;
    };
    this.refInputSetEndDate = (el) => {
      this.inputSetEndDate = el;
    };
    this.refDatepickerPeriod = (el) => {
      this.datepickerPeriod = el;
    };
    this.refDatepickerSingle = (el) => {
      this.datepickerSingle = el;
    };
    /**
     * clearDatepicker. Function to clear datepicker
     */
    this.clearDate = () => {
      this.valueDate = null;
      this.bdsStartDate.emit({ value: null });
      if (this.typeOfDate == 'single') {
        this.datepickerSingle.clear();
      }
      else {
        this.datepickerPeriod.clear();
        this.valueEndDate = null;
        this.bdsEndDate.emit({ value: null });
        setTimeout(() => {
          var _a;
          (_a = this.inputSetDate) === null || _a === void 0 ? void 0 : _a.setFocus();
        }, 10);
      }
    };
    this.onInputDateSelected = (ev) => {
      const input = ev.target;
      this.valueDate = input.value;
      this.validationDateSelected(this.valueDate);
    };
    /**
     * validationDateSelected. Function to validate date field
     */
    this.validationDateSelected = (value) => {
      const formatData = typeDateToStringDate(value);
      const valueSelected = formatData && dateToDayList(formatData);
      const start = this.startDateLimit && dateToDayList(this.startDateLimit);
      const end = this.endDateLimit && dateToDayList(this.endDateLimit);
      if (!dateValidation(formatData)) {
        this.errorMsgDate = `${messageTranslate(this.language, 'dateFormatIsIncorrect')}!`;
      }
      else {
        if (fillDayList(valueSelected) < fillDayList(start) || fillDayList(valueSelected) > fillDayList(end)) {
          this.errorMsgDate = `${messageTranslate(this.language, 'betweenPeriodOf')} ${this.startDateLimit} - ${this.endDateLimit}`;
        }
        else {
          this.errorMsgDate = null;
          this.dateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
        }
      }
    };
    this.onInputEndDateSelected = (ev) => {
      const input = ev.target;
      this.valueEndDate = input.value;
      this.validationEndDateSelected(this.valueEndDate);
    };
    /**
     * maskEndDateSelected. Function to add mask to the end date field
     */
    this.validationEndDateSelected = (value) => {
      const formatData = typeDateToStringDate(value);
      const formatValueDateSelected = typeDateToStringDate(this.valueDate);
      const valueSelected = formatData && dateToDayList(formatData);
      const start = formatValueDateSelected ? dateToDayList(formatValueDateSelected) : dateToDayList(this.startDateLimit);
      const end = this.endDateLimit && dateToDayList(this.endDateLimit);
      if (!dateValidation(formatData)) {
        this.errorMsgEndDate = `${messageTranslate(this.language, 'dateFormatIsIncorrect')}!`;
      }
      else {
        if (fillDayList(valueSelected) < fillDayList(start) || fillDayList(valueSelected) > fillDayList(end)) {
          this.errorMsgEndDate = `${messageTranslate(this.language, 'betweenPeriodOf')} ${formatValueDateSelected} - ${this.endDateLimit}`;
        }
        else {
          this.errorMsgEndDate = null;
          this.endDateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
        }
      }
    };
    this.openDatepicker = () => {
      if (!this.disabled) {
        const positionValue = positionElement({
          actionElement: this.actionElement,
          changedElement: this.menuElement,
          intoView: this.intoView,
        });
        this.menupositionTop = positionValue.top;
        this.menupositionLeft = positionValue.left;
        this.open = true;
      }
    };
    this.clickConcludeDatepicker = () => {
      const data = this.typeOfDate === 'single'
        ? { startDate: typeDateToStringDate(this.valueDate) }
        : {
          startDate: typeDateToStringDate(this.valueDate),
          endDate: typeDateToStringDate(this.valueEndDate),
        };
      this.concludeDatepicker.emit(data);
      this.open = false;
      if (this.typeOfDate == 'period') {
        this.inputSetEndDate.removeFocus();
      }
    };
    this.onClickCloseButtom = () => {
      this.open = false;
    };
    this.onFocusDateSelect = () => {
      this.stateSelect = 'start';
    };
    this.onFocusEndDateSelect = () => {
      this.stateSelect = 'end';
    };
    this.open = false;
    this.stateSelect = 'start';
    this.dateSelected = null;
    this.endDateSelected = null;
    this.errorMsgDate = null;
    this.errorMsgEndDate = null;
    this.intoView = null;
    this.scrollingTop = 0;
    this.menupositionTop = 0;
    this.menupositionLeft = 0;
    this.valueDate = undefined;
    this.valueEndDate = undefined;
    this.typeOfDate = 'single';
    this.startDateLimit = defaultStartDate;
    this.endDateLimit = defaultEndDate;
    this.label = '';
    this.message = null;
    this.variantBanner = 'warning';
    this.language = 'pt_BR';
    this.disabled = false;
    this.valueDateSelected = null;
    this.valueEndDateSelected = null;
    this.dtInputStart = null;
    this.dtInputEnd = null;
    this.dtOutzone = null;
    this.dtButtonPrev = null;
    this.dtButtonNext = null;
    this.dtSelectMonth = null;
    this.dtSelectYear = null;
    this.dtButtonClear = null;
    this.dtButtonConfirm = null;
  }
  valueDateSelectedChanged() {
    this.valueDate = this.valueDateSelected && dateToInputDate(this.valueDateSelected);
    if (this.valueDate)
      this.validationDateSelected(this.valueDate);
  }
  valueEndDateSelectedChanged() {
    this.valueEndDate = this.valueEndDateSelected && dateToInputDate(this.valueEndDateSelected);
    if (this.valueEndDate)
      this.validationEndDateSelected(this.valueEndDate);
  }
  /**
   * startDateLimit validation.
   */
  startDateLimitChanged() {
    if (!dateValidation(this.startDateLimit)) {
      this.startDateLimit = defaultStartDate;
    }
  }
  /**
   * endDateLimit validation.
   */
  endDateLimitChanged() {
    const dlStartDate = dateToDayList(this.startDateLimit);
    const dlEndDate = dateToDayList(this.endDateLimit);
    if (!dateValidation(this.endDateLimit)) {
      this.endDateLimit = defaultEndDate;
    }
    if (fillDayList(dlEndDate) < fillDayList(dlStartDate)) {
      this.endDateLimit = `${dlEndDate.date.toString().padStart(2, '0')}/${(dlEndDate.month + 1)
        .toString()
        .padStart(2, '0')}/${dlStartDate.year + 1}`;
    }
  }
  dateSelectedChanged() {
    this.stateSelect = 'end';
  }
  componentWillLoad() {
    this.endDateLimitChanged();
    this.startDateLimitChanged();
    this.valueDateSelectedChanged();
    this.valueEndDateSelectedChanged();
    this.intoView = getScrollParent(this.element);
    if (this.valueDate)
      this.validationDateSelected(this.valueDate);
    if (this.valueEndDate)
      this.validationEndDateSelected(this.valueEndDate);
  }
  /**
   * whenClickCalendar. Function to output selected date.
   */
  whenClickCalendar(event) {
    var _a;
    const { detail: { value }, } = event;
    if (value == 'start') {
      (_a = this.inputSetEndDate) === null || _a === void 0 ? void 0 : _a.setFocus();
    }
  }
  /**
   * selectDate. Function to output selected date.
   */
  selectDate(event) {
    const { detail: { value }, } = event;
    this.dateSelected = value;
    this.bdsStartDate.emit({ value: this.dateSelected });
    this.valueDate = this.dateSelected && dateToTypeDate(this.dateSelected);
    this.errorMsgDate = null;
  }
  /**
   * selectEndDate. Function to issue selected end date..
   */
  selectEndDate(event) {
    const { detail: { value }, } = event;
    this.endDateSelected = value;
    this.bdsEndDate.emit({ value: this.endDateSelected });
    this.valueEndDate = this.endDateSelected && dateToTypeDate(this.endDateSelected);
    this.errorMsgEndDate = null;
  }
  render() {
    const menuPosition = {
      top: `${this.menupositionTop}px`,
      left: `${this.menupositionLeft}px`,
    };
    return (h(Host, null, h("div", { ref: this.refActionElement, class: { datepicker: true } }, this.typeOfDate == 'single' ? (h("div", { class: {
        datepicker__inputs: true,
        [`datepicker__inputs__${this.typeOfDate}`]: true,
        datepicker__inputs__open: this.open,
      } }, h("bds-input", { label: this.label.length > 0 ? this.label : termTranslate(this.language, 'setTheDate'), value: this.valueDate, disabled: this.disabled, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onBdsInput: (ev) => this.onInputDateSelected(ev), danger: this.errorMsgDate ? true : false, errorMessage: this.errorMsgDate, dataTest: this.dtInputStart }))) : (h("div", { class: {
        datepicker__inputs: true,
        [`datepicker__inputs__${this.typeOfDate}`]: true,
        datepicker__inputs__open: this.open,
      } }, h("bds-input", { ref: this.refInputSetDate, label: termTranslate(this.language, 'from'), value: this.valueDate, disabled: this.disabled, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onFocus: () => this.onFocusDateSelect(), onBdsInput: (ev) => this.onInputDateSelected(ev), danger: this.errorMsgDate ? true : false, errorMessage: this.errorMsgDate, dataTest: this.dtInputStart }), h("bds-input", { ref: this.refInputSetEndDate, label: termTranslate(this.language, 'to'), value: this.valueEndDate, disabled: this.disabled || !this.dateSelected, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onFocus: () => this.onFocusEndDateSelect(), onBdsInput: (ev) => this.onInputEndDateSelected(ev), danger: this.errorMsgEndDate ? true : false, errorMessage: this.errorMsgEndDate, dataTest: this.dtInputEnd }))), h("div", { ref: this.refMenuElement, class: {
        datepicker__menu: true,
        datepicker__menu__open: this.open,
      }, style: menuPosition }, this.message && (h("bds-grid", { margin: "b-2" }, h("bds-banner", { variant: this.variantBanner, context: "inside" }, this.message))), this.typeOfDate == 'single' ? (h("bds-datepicker-single", { ref: this.refDatepickerSingle, startDate: this.startDateLimit && dateToDayList(this.startDateLimit), endDate: this.endDateLimit && dateToDayList(this.endDateLimit), dateSelect: this.dateSelected, onBdsDateSelected: (event) => this.selectDate(event), language: this.language, dtButtonPrev: this.dtButtonPrev, dtButtonNext: this.dtButtonNext, dtSelectMonth: this.dtSelectMonth, dtSelectYear: this.dtSelectYear })) : (h("bds-datepicker-period", { ref: this.refDatepickerPeriod, startDate: this.startDateLimit && dateToDayList(this.startDateLimit), endDate: this.endDateLimit && dateToDayList(this.endDateLimit), startDateSelect: this.dateSelected, stateSelect: this.stateSelect, endDateSelect: this.endDateSelected, onBdsStartDate: (event) => this.selectDate(event), onBdsEndDate: (event) => this.selectEndDate(event), onBdsClickDayButton: (event) => this.whenClickCalendar(event), language: this.language, dtButtonPrev: this.dtButtonPrev, dtButtonNext: this.dtButtonNext, dtSelectMonth: this.dtSelectMonth, dtSelectYear: this.dtSelectYear })), h("div", { class: { datepicker__menu__footer: true } }, h("bds-button", { variant: "secondary", onClick: () => this.clearDate(), dataTest: this.dtButtonClear }, termTranslate(this.language, 'reset')), h("bds-button", { onClick: this.clickConcludeDatepicker, dataTest: this.dtButtonConfirm }, termTranslate(this.language, 'conclude'))))), this.open && (h("div", { class: { outzone: true }, onClick: () => this.onClickCloseButtom(), "data-test": this.dtOutzone }))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "valueDateSelected": ["valueDateSelectedChanged"],
    "valueEndDateSelected": ["valueEndDateSelectedChanged"],
    "startDateLimit": ["startDateLimitChanged"],
    "endDateLimit": ["endDateLimitChanged"],
    "dateSelected": ["dateSelectedChanged"]
  }; }
};
DatePicker.style = datepickerCss;

export { DatePicker as bds_datepicker };
