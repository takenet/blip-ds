import { r as registerInstance, c as createEvent, h, H as Host } from './index-611fd21e.js';
import { T as THIS_DAY, d as dateToDayList, f as fillDayList, h as fillDate, w as weekDays, i as getMonthsSlide, j as getYears, k as getMonths, a as defaultStartDate, b as defaultEndDate, l as changeMonths } from './calendar-6f71cf06.js';
import { e as emailValidation, n as numberValidation } from './validations-b8451d75.js';

const datepickerCss$1 = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #454545)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #454545)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #454545)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}.datepicker{position:relative;max-width:608px}.datepicker__inputs{position:relative;width:100%;display:grid}.datepicker__inputs__open{z-index:90000}.datepicker__inputs__single{grid-template-columns:1fr}.datepicker__inputs__period{grid-template-columns:1fr 1fr;gap:16px}.datepicker__inputs bds-input{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%}.datepicker__inputs bds-input::part(input-container){position:relative}.datepicker__inputs__icon{cursor:pointer;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-right:16px}.datepicker__inputs__icon bds-icon:first-child{margin-right:8px}.datepicker__inputs__icon:hover bds-icon:first-child{color:var(--color-primary, #1e6bf1)}.datepicker__menu{position:fixed;pointer-events:none;top:0;left:0;background-color:var(--color-surface-1, #f6f6f6);-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));border-radius:8px;padding:16px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.datepicker__menu__open{z-index:100000;pointer-events:auto;opacity:1}.datepicker__menu__message{padding:8px 16px;border-radius:8px;background-color:var(--color-warning, #fde99b);color:var(--color-content-din, #000000);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px}.datepicker__menu__message bds-icon{margin-right:8px}.datepicker__menu__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-top:16px;margin-top:16px;border-top:1px solid var(--color-content-ghost, #8c8c8c)}.datepicker__menu__footer bds-button{margin-left:16px}.datepicker__calendar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.datepicker__calendar__selectDate{width:100%;display:grid;grid-template-columns:28px 1fr 80px 28px;grid-gap:8px;-ms-flex-align:center;align-items:center;margin-bottom:16px;padding:0 8px}.datepicker__calendar__selectDate__select{position:relative;width:100%}.datepicker__calendar__selectDate__select__input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #f6f6f6);color:var(--color-content-default, #454545);border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.datepicker__calendar__selectDate__select__input.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__label{color:var(--color-content-default, #454545)}.datepicker__calendar__selectDate__select__input .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.datepicker__calendar__selectDate__select__input__disable{cursor:not-allowed;background:var(--color-surface-2, #e0e0e0);border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable:hover{border:1px solid var(--color-content-disable, #636363);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid var(--color-border-1, #c9c9c9);box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable.input--pressed{border:1px solid var(--color-content-disable, #636363);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-surface-3, #cfcfcf);box-shadow:0 0 0 2px var(--color-surface-3, #cfcfcf)}.datepicker__calendar__selectDate__select__input__disable.input--pressed .input__icon .bds-icon{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__label{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__label--pressed bds-typo{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__text{caret-color:var(--color-content-disable, #636363);color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input .icon-arrow{color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex}.datepicker__calendar__selectDate__select__options{background:var(--color-surface-0, #ffffff);width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar{width:16px;background-color:transparent}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.datepicker__calendar__selectDate__select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.datepicker__calendar__selectDate__icon{cursor:pointer;color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate .arrow-left{padding-left:8px}.datepicker__calendar__selectDate .arrow-left__disable{opacity:0;pointer-events:none}.datepicker__calendar__selectDate .arrow-right{padding-right:8px}.datepicker__calendar__selectDate .arrow-right__disable{opacity:0;pointer-events:none}.datepicker__calendar__week{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);margin-bottom:8px}.datepicker__calendar__week__day{width:40px;height:40px;text-align:center;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.datepicker__calendar__car{height:280px;width:280px;overflow:hidden;position:relative}.datepicker__calendar__car__slide{display:-ms-flexbox;display:flex;position:absolute;left:-100%}.datepicker__calendar__car__slide__box{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);gap:8px 0}.datepicker__calendar__car__slide__box__day{width:40px;height:40px;position:relative}.datepicker__calendar__car__slide__box__day__period:before{content:\"\";position:absolute;inset:4px 0px;background-color:var(--color-primary, #1e6bf1);opacity:0.25}.datepicker__calendar__car__slide__box__day__start:before{inset:4px 0;border-top-left-radius:16px;border-bottom-left-radius:16px}.datepicker__calendar__car__slide__box__day__end:before{inset:4px 0;border-top-right-radius:16px;border-bottom-right-radius:16px}.datepicker__calendar__car__slide__box__day__typo{position:relative;width:calc(100% - 2px);height:calc(100% - 2px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:100%;color:var(--color-content-default, #454545);border:1px solid transparent;cursor:pointer}.datepicker__calendar__car__slide__box__day__typo:hover{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__current{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__selected{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, #ffffff)}.datepicker__calendar__car__slide__box__day__selected:hover{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, #ffffff)}.datepicker__calendar__car__slide__box__day__disable{pointer-events:none;background-color:transparent;color:var(--color-content-ghost, #8c8c8c)}.datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPrev;animation-name:animationPrev;-webkit-animation-duration:0.31s;animation-duration:0.31s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.datepicker__calendar__car .animate__next{-webkit-animation-name:animationNext;animation-name:animationNext;-webkit-animation-duration:0.31s;animation-duration:0.31s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.period .datepicker__calendar__selectDate{grid-template-columns:28px 120px 80px 1fr 28px}.period .datepicker__calendar__selectDate__futureMonth{padding-left:80px;text-align:center;color:var(--color-content-default, #454545)}.period .datepicker__calendar__week{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.period .datepicker__calendar__week__present,.period .datepicker__calendar__week__future{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.period .datepicker__calendar__car{width:600px}.period .datepicker__calendar__car__slide{left:calc(-50% - 60px)}.period .datepicker__calendar__car__slide__box{margin-left:40px}.period .datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPeriodPrev;animation-name:animationPeriodPrev}.period .datepicker__calendar__car .animate__next{-webkit-animation-name:animationPeriodNext;animation-name:animationPeriodNext}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}@-webkit-keyframes animationPrev{0%{left:-100%}100%{left:0}}@keyframes animationPrev{0%{left:-100%}100%{left:0}}@-webkit-keyframes animationNext{0%{left:-100%}100%{left:-200%}}@keyframes animationNext{0%{left:-100%}100%{left:-200%}}@-webkit-keyframes animationPeriodPrev{0%{left:calc(-50% - 60px)}100%{left:-40px}}@keyframes animationPeriodPrev{0%{left:calc(-50% - 60px)}100%{left:-40px}}@-webkit-keyframes animationPeriodNext{0%{left:calc(-50% - 60px)}100%{left:calc(-100% - 80px)}}@keyframes animationPeriodNext{0%{left:calc(-50% - 60px)}100%{left:calc(-100% - 80px)}}";

const BdsdatepickerPeriod = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsStartDate = createEvent(this, "bdsStartDate", 7);
    this.bdsEndDate = createEvent(this, "bdsEndDate", 7);
    this.bdsClickDayButton = createEvent(this, "bdsClickDayButton", 7);
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
    this.monthActivated = THIS_DAY.getMonth();
    this.yearActivated = THIS_DAY.getFullYear();
    this.animatePrev = false;
    this.animateNext = false;
    this.activeSelectYear = false;
    this.openSelectMonth = false;
    this.openSelectYear = false;
    this.monthsSlide = undefined;
    this.loadingSlide = 'await';
    this.startDate = dateToDayList(defaultStartDate);
    this.endDate = dateToDayList(defaultEndDate);
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
      }, onClick: () => this.selectDate(item) }, item.date))))));
  }
  render() {
    const futureMonth = changeMonths(this.language).filter((obj) => obj.value === this.monthsSlide[2].month);
    const futureYear = this.monthsSlide[2].year;
    return (h("div", { class: { datepicker__calendar: true, [`period`]: true } }, h("div", { class: { datepicker__calendar__selectDate: true } }, h("bds-icon", { class: {
        [`arrow-left`]: true,
        [`arrow-left__disable`]: fillDayList(this.monthsSlide[0].days[this.monthsSlide[0].days.length - 1]) <
          fillDayList(this.startDate),
        datepicker__calendar__selectDate__icon: true,
      }, name: "arrow-left", theme: "outline", size: "small", onClick: () => this.prevMonth(), dataTest: this.dtButtonPrev }), [
      this.renderSelectData(this.months, this.monthActivated, 'months'),
      this.renderSelectData(this.years, this.yearActivated, 'years'),
    ], h("bds-typo", { class: "datepicker__calendar__selectDate__futureMonth", variant: "fs-14" }, `${futureMonth[0].label}, ${futureYear}`), h("bds-icon", { class: {
        [`arrow-right`]: true,
        [`arrow-right__disable`]: fillDayList(this.monthsSlide[2].days[0]) > fillDayList(this.endDate),
        datepicker__calendar__selectDate__icon: true,
      }, name: "arrow-right", theme: "outline", size: "small", onClick: () => this.nextMonth(), dataTest: this.dtButtonNext })), h("div", null, h("div", { class: { datepicker__calendar__week: true } }, h("div", { class: { datepicker__calendar__week__present: true } }, this.week.map((item, idx) => (h("bds-typo", { key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0))))), h("div", { class: { datepicker__calendar__week__future: true } }, this.week.map((item, idx) => (h("bds-typo", { key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0)))))), h("div", { class: { datepicker__calendar__car: true, datepicker__calendar__car__period: true } }, h("div", { class: {
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

const datepickerCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #454545)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #454545)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #454545)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}.datepicker{position:relative;max-width:608px}.datepicker__inputs{position:relative;width:100%;display:grid}.datepicker__inputs__open{z-index:90000}.datepicker__inputs__single{grid-template-columns:1fr}.datepicker__inputs__period{grid-template-columns:1fr 1fr;gap:16px}.datepicker__inputs bds-input{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%}.datepicker__inputs bds-input::part(input-container){position:relative}.datepicker__inputs__icon{cursor:pointer;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-right:16px}.datepicker__inputs__icon bds-icon:first-child{margin-right:8px}.datepicker__inputs__icon:hover bds-icon:first-child{color:var(--color-primary, #1e6bf1)}.datepicker__menu{position:fixed;pointer-events:none;top:0;left:0;background-color:var(--color-surface-1, #f6f6f6);-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));border-radius:8px;padding:16px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.datepicker__menu__open{z-index:100000;pointer-events:auto;opacity:1}.datepicker__menu__message{padding:8px 16px;border-radius:8px;background-color:var(--color-warning, #fde99b);color:var(--color-content-din, #000000);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px}.datepicker__menu__message bds-icon{margin-right:8px}.datepicker__menu__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-top:16px;margin-top:16px;border-top:1px solid var(--color-content-ghost, #8c8c8c)}.datepicker__menu__footer bds-button{margin-left:16px}.datepicker__calendar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.datepicker__calendar__selectDate{width:100%;display:grid;grid-template-columns:28px 1fr 80px 28px;grid-gap:8px;-ms-flex-align:center;align-items:center;margin-bottom:16px;padding:0 8px}.datepicker__calendar__selectDate__select{position:relative;width:100%}.datepicker__calendar__selectDate__select__input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #f6f6f6);color:var(--color-content-default, #454545);border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.datepicker__calendar__selectDate__select__input.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__label{color:var(--color-content-default, #454545)}.datepicker__calendar__selectDate__select__input .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.datepicker__calendar__selectDate__select__input .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.datepicker__calendar__selectDate__select__input__disable{cursor:not-allowed;background:var(--color-surface-2, #e0e0e0);border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable:hover{border:1px solid var(--color-content-disable, #636363);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid var(--color-border-1, #c9c9c9);box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable.input--pressed{border:1px solid var(--color-content-disable, #636363);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-surface-3, #cfcfcf);box-shadow:0 0 0 2px var(--color-surface-3, #cfcfcf)}.datepicker__calendar__selectDate__select__input__disable.input--pressed .input__icon .bds-icon{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__label{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__label--pressed bds-typo{color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input__disable .input__container__text{caret-color:var(--color-content-disable, #636363);color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate__select__input .icon-arrow{color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex}.datepicker__calendar__selectDate__select__options{background:var(--color-surface-0, #ffffff);width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar{width:16px;background-color:transparent}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.datepicker__calendar__selectDate__select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.datepicker__calendar__selectDate__icon{cursor:pointer;color:var(--color-content-disable, #636363)}.datepicker__calendar__selectDate .arrow-left{padding-left:8px}.datepicker__calendar__selectDate .arrow-left__disable{opacity:0;pointer-events:none}.datepicker__calendar__selectDate .arrow-right{padding-right:8px}.datepicker__calendar__selectDate .arrow-right__disable{opacity:0;pointer-events:none}.datepicker__calendar__week{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);margin-bottom:8px}.datepicker__calendar__week__day{width:40px;height:40px;text-align:center;color:var(--color-content-ghost, #8c8c8c);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.datepicker__calendar__car{height:280px;width:280px;overflow:hidden;position:relative}.datepicker__calendar__car__slide{display:-ms-flexbox;display:flex;position:absolute;left:-100%}.datepicker__calendar__car__slide__box{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);gap:8px 0}.datepicker__calendar__car__slide__box__day{width:40px;height:40px;position:relative}.datepicker__calendar__car__slide__box__day__period:before{content:\"\";position:absolute;inset:4px 0px;background-color:var(--color-primary, #1e6bf1);opacity:0.25}.datepicker__calendar__car__slide__box__day__start:before{inset:4px 0;border-top-left-radius:16px;border-bottom-left-radius:16px}.datepicker__calendar__car__slide__box__day__end:before{inset:4px 0;border-top-right-radius:16px;border-bottom-right-radius:16px}.datepicker__calendar__car__slide__box__day__typo{position:relative;width:calc(100% - 2px);height:calc(100% - 2px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:100%;color:var(--color-content-default, #454545);border:1px solid transparent;cursor:pointer}.datepicker__calendar__car__slide__box__day__typo:hover{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__current{background-color:var(--color-surface-1, #f6f6f6);color:var(--color-primary, #1e6bf1);border-color:var(--color-primary, #1e6bf1)}.datepicker__calendar__car__slide__box__day__selected{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, #ffffff)}.datepicker__calendar__car__slide__box__day__selected:hover{background-color:var(--color-primary, #1e6bf1);color:var(--color-content-bright, #ffffff)}.datepicker__calendar__car__slide__box__day__disable{pointer-events:none;background-color:transparent;color:var(--color-content-ghost, #8c8c8c)}.datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPrev;animation-name:animationPrev;-webkit-animation-duration:0.31s;animation-duration:0.31s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.datepicker__calendar__car .animate__next{-webkit-animation-name:animationNext;animation-name:animationNext;-webkit-animation-duration:0.31s;animation-duration:0.31s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.period .datepicker__calendar__selectDate{grid-template-columns:28px 120px 80px 1fr 28px}.period .datepicker__calendar__selectDate__futureMonth{padding-left:80px;text-align:center;color:var(--color-content-default, #454545)}.period .datepicker__calendar__week{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.period .datepicker__calendar__week__present,.period .datepicker__calendar__week__future{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.period .datepicker__calendar__car{width:600px}.period .datepicker__calendar__car__slide{left:calc(-50% - 60px)}.period .datepicker__calendar__car__slide__box{margin-left:40px}.period .datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPeriodPrev;animation-name:animationPeriodPrev}.period .datepicker__calendar__car .animate__next{-webkit-animation-name:animationPeriodNext;animation-name:animationPeriodNext}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}@-webkit-keyframes animationPrev{0%{left:-100%}100%{left:0}}@keyframes animationPrev{0%{left:-100%}100%{left:0}}@-webkit-keyframes animationNext{0%{left:-100%}100%{left:-200%}}@keyframes animationNext{0%{left:-100%}100%{left:-200%}}@-webkit-keyframes animationPeriodPrev{0%{left:calc(-50% - 60px)}100%{left:-40px}}@keyframes animationPeriodPrev{0%{left:calc(-50% - 60px)}100%{left:-40px}}@-webkit-keyframes animationPeriodNext{0%{left:calc(-50% - 60px)}100%{left:calc(-100% - 80px)}}@keyframes animationPeriodNext{0%{left:calc(-50% - 60px)}100%{left:calc(-100% - 80px)}}";

const BdsdatepickerSingle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsDateSelected = createEvent(this, "bdsDateSelected", 7);
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
    this.monthActivated = THIS_DAY.getMonth();
    this.yearActivated = THIS_DAY.getFullYear();
    this.animatePrev = false;
    this.animateNext = false;
    this.openSelectMonth = false;
    this.openSelectYear = false;
    this.monthsSlide = undefined;
    this.loadingSlide = 'await';
    this.endDate = dateToDayList(defaultEndDate);
    this.startDate = dateToDayList(defaultStartDate);
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
    const oldDate = fillDayList(_oldValue);
    const newDate = fillDayList(newValue);
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
    const fullCurrDate = fillDate(THIS_DAY);
    if (fillDayList(value) == fullCurrDate)
      return true;
    else
      return false;
  }
  /**
   * checkDisableDay. Function to check the disable day.
   */
  checkDisableDay(value) {
    const startDateLimit = this.startDate ? fillDayList(this.startDate) : `0`;
    const endDateLimit = this.endDate ? fillDayList(this.endDate) : `9999999`;
    if (this.startDate && fillDayList(value) < startDateLimit) {
      return true;
    }
    if (this.endDate && fillDayList(value) > endDateLimit) {
      return true;
    }
  }
  /**
   * checkSelectedDay. Function to check the selected day.
   */
  checkSelectedDay(value) {
    const selectedDate = this.dateSelect ? fillDate(this.dateSelect) : `0`;
    if (fillDayList(value) == selectedDate)
      return true;
    else
      return false;
  }
  renderSelectData(data, selected, ref) {
    var _a;
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
      }, "data-test": ref == 'months' ? this.dtSelectMonth : this.dtSelectYear }, h("bds-typo", { variant: "fs-14" }, (_a = labelSelect[0]) === null || _a === void 0 ? void 0 : _a.label), h("div", { class: "icon-arrow" }, h("bds-icon", { size: "small", name: iconArrow, color: "inherit" }))), h("div", { class: {
        datepicker__calendar__selectDate__select__options: true,
        'datepicker__calendar__selectDate__select__options--open': openSelect,
      } }, data.map((option) => (h("bds-select-option", { value: option.value, key: option.value, onOptionSelected: (event) => this.handler(event, ref), selected: option.value == selected, onClick: () => this.openDateSelect(false, ref) }, option.label))))));
  }
  renderCarSlideBox(days, firstDayWeek) {
    return (h("div", { class: { datepicker__calendar__car__slide__box: true } }, this.prevDays(firstDayWeek), days.map((item, idx) => (h("div", { key: idx, class: {
        datepicker__calendar__car__slide__box__day: true,
      } }, h("bds-typo", { class: {
        datepicker__calendar__car__slide__box__day__typo: true,
        datepicker__calendar__car__slide__box__day__current: this.checkCurrentDay(item),
        datepicker__calendar__car__slide__box__day__selected: this.checkSelectedDay(item),
        datepicker__calendar__car__slide__box__day__disable: this.checkDisableDay(item),
      }, onClick: () => this.selectDate(item) }, item.date))))));
  }
  render() {
    return (h("div", { class: { datepicker__calendar: true } }, h("div", { class: { datepicker__calendar__selectDate: true } }, h("bds-icon", { class: {
        [`arrow-left`]: true,
        [`arrow-left__disable`]: fillDayList(this.monthsSlide[0].days[this.monthsSlide[0].days.length - 1]) <
          fillDayList(this.startDate),
        datepicker__calendar__selectDate__icon: true,
      }, name: "arrow-left", theme: "outline", size: "small", onClick: () => this.prevMonth(), dataTest: this.dtButtonPrev }), [
      this.renderSelectData(this.months, this.monthActivated, 'months'),
      this.renderSelectData(this.years, this.yearActivated, 'years'),
    ], h("bds-icon", { class: {
        [`arrow-right`]: true,
        [`arrow-right__disable`]: fillDayList(this.monthsSlide[2].days[0]) > fillDayList(this.endDate),
        datepicker__calendar__selectDate__icon: true,
      }, name: "arrow-right", theme: "outline", size: "small", onClick: () => this.nextMonth(), dataTest: this.dtButtonNext })), h("div", null, h("div", { class: { datepicker__calendar__week: true } }, this.week.map((item, idx) => (h("bds-typo", { key: idx, class: `datepicker__calendar__week__day` }, item.charAt(0))))), h("div", { class: { datepicker__calendar__car: true } }, h("div", { class: {
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

const inputCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.input .bds-icon{position:relative;z-index:1}.input--state-primary{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #454545)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #ffd6d6);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #454545)}.input--state-success{border:1px solid var(--color-border-1, #c9c9c9);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #d3f4e5);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #454545)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #454545)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #454545)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}";

const Input = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsChange = createEvent(this, "bdsChange", 7);
    this.bdsInput = createEvent(this, "bdsInput", 7);
    this.bdsOnBlur = createEvent(this, "bdsOnBlur", 7);
    this.bdsFocus = createEvent(this, "bdsFocus", 7);
    this.bdsSubmit = createEvent(this, "bdsSubmit", 7);
    this.bdsPatternValidation = createEvent(this, "bdsPatternValidation", 7);
    this.bdsKeyDownBackspace = createEvent(this, "bdsKeyDownBackspace", 7);
    this.keyPressWrapper = (event) => {
      switch (event.key) {
        case 'Enter':
          this.bdsSubmit.emit({ event, value: this.value });
          if (this.isSubmit) {
            this.clearTextInput();
            event.preventDefault();
          }
          break;
        case 'Backspace' :
          this.bdsKeyDownBackspace.emit({ event, value: this.value });
          break;
      }
    };
    this.onInput = (ev) => {
      this.onBdsInputValidations();
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.bdsInput.emit(ev);
    };
    this.onBlur = () => {
      this.onBlurValidations();
      this.isPressed = false;
      this.bdsOnBlur.emit();
    };
    this.onFocus = () => {
      this.isPressed = true;
      this.bdsFocus.emit();
    };
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.clearTextInput = (ev) => {
      if (!this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
    this.isPressed = false;
    this.isPassword = false;
    this.validationMesage = '';
    this.validationDanger = false;
    this.inputName = '';
    this.type = 'text';
    this.label = '';
    this.placeholder = '';
    this.autoCapitalize = 'off';
    this.autoComplete = 'off';
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.readonly = false;
    this.required = undefined;
    this.pattern = undefined;
    this.helperMessage = '';
    this.errorMessage = '';
    this.successMessage = '';
    this.icon = '';
    this.disabled = false;
    this.danger = false;
    this.success = false;
    this.value = '';
    this.counterLength = false;
    this.counterLengthRule = null;
    this.isSubmit = false;
    this.isTextarea = false;
    this.rows = 1;
    this.cols = 0;
    this.requiredErrorMessage = undefined;
    this.minlengthErrorMessage = undefined;
    this.minErrorMessage = undefined;
    this.maxErrorMessage = undefined;
    this.emailErrorMessage = undefined;
    this.numberErrorMessage = undefined;
    this.chips = undefined;
    this.dataTest = null;
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.bdsChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  /**
   * Sets focus on the specified `ion-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    this.onClickWrapper();
  }
  async removeFocus() {
    this.onBlur();
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  async getInputElement() {
    return this.nativeInput;
  }
  /**
   * Return the validity of the input.
   */
  async isValid() {
    return this.nativeInput.validity.valid;
  }
  /**
   * Return the validity of the input.
   */
  async clear() {
    this.value = '';
  }
  renderIcon() {
    return (this.icon && (h("div", { class: {
        input__icon: true,
        'input__icon--large': !!this.label,
      } }, h("bds-icon", { class: "input__icon--color", size: this.label ? 'medium' : 'small', name: this.icon, color: "inherit" }))));
  }
  renderLabel() {
    return (this.label && (h("label", { class: {
        input__container__label: true,
        'input__container__label--pressed': this.isPressed && !this.disabled,
      } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
  }
  renderMessage() {
    const icon = this.danger ? 'error' : this.success ? 'checkball' : 'info';
    let message = this.danger ? this.errorMessage : this.success ? this.successMessage : this.helperMessage;
    if (!message && this.validationDanger)
      message = this.validationMesage;
    const styles = this.danger || this.validationDanger
      ? 'input__message input__message--danger'
      : this.success
        ? 'input__message input__message--success'
        : 'input__message';
    if (message) {
      return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "outline", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
    }
    return undefined;
  }
  onBlurValidations() {
    this.required && this.requiredValidation();
    this.pattern && this.patternValidation();
    (this.minlength || this.maxlength) && this.lengthValidation();
    (this.min || this.max) && this.minMaxValidation();
    this.checkValidity();
  }
  onBdsInputValidations() {
    this.type === 'email' && this.emailValidation();
    this.type === 'phonenumber' && this.numberValidation();
    this.checkValidity();
  }
  patternValidation() {
    const regex = new RegExp(this.pattern);
    this.bdsPatternValidation.emit(regex.test(this.nativeInput.value));
  }
  requiredValidation() {
    if (this.nativeInput.validity.valueMissing) {
      this.validationMesage = this.requiredErrorMessage;
      this.validationDanger = true;
    }
  }
  lengthValidation() {
    if (this.nativeInput.validity.tooShort) {
      this.validationMesage = this.minlengthErrorMessage;
      this.validationDanger = true;
      return;
    }
    if (this.nativeInput.validity.tooLong) {
      this.validationDanger = true;
      return;
    }
  }
  minMaxValidation() {
    if (this.nativeInput.validity.rangeUnderflow) {
      this.validationMesage = this.minErrorMessage;
      this.validationDanger = true;
      return;
    }
    if (this.nativeInput.validity.rangeOverflow) {
      this.validationMesage = this.maxErrorMessage;
      this.validationDanger = true;
      return;
    }
  }
  emailValidation() {
    if (emailValidation(this.nativeInput.value)) {
      this.validationMesage = this.emailErrorMessage;
      this.validationDanger = true;
    }
  }
  numberValidation() {
    if (numberValidation(this.nativeInput.value)) {
      this.validationMesage = this.numberErrorMessage;
      this.validationDanger = true;
    }
  }
  checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }
  componentDidUpdate() {
    if (this.nativeInput && this.value != this.nativeInput.value) {
      this.nativeInput.value = this.value;
    }
  }
  render() {
    const isPressed = this.isPressed && !this.disabled;
    const Element = this.isTextarea ? 'textarea' : 'input';
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null }, h("div", { class: {
        input: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--state-disabled': this.disabled,
        'input--label': !!this.label,
        'input--pressed': isPressed,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("slot", { name: "input-left" }), h("div", { class: "input__container" }, this.renderLabel(), h("div", { class: { input__container__wrapper: !this.chips, input__container__wrapper__chips: this.chips } }, h("slot", { name: "inside-input-left" }), h(Element, { class: { input__container__text: true, input__container__text__chips: this.chips }, ref: (input) => (this.nativeInput = input), rows: this.rows, cols: this.cols, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, disabled: this.disabled, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, readOnly: this.readonly, type: this.type, value: this.value, pattern: this.pattern, required: this.required, part: "input", "data-test": this.dataTest }))), this.counterLength && (h("bds-counter-text", Object.assign({ length: this.value.length, max: this.maxlength, active: isPressed }, this.counterLengthRule))), this.success && h("bds-icon", { class: "icon-success", name: "check", theme: "outline", size: "small" }), h("slot", { name: "input-right" })), this.renderMessage()));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
Input.style = inputCss;

export { BdsdatepickerPeriod as bds_datepicker_period, BdsdatepickerSingle as bds_datepicker_single, Input as bds_input };
