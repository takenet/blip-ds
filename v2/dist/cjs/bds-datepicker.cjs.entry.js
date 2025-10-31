'use strict';

var index = require('./index-D_zq0Z7d.js');
var calendar = require('./calendar-DT2tBJeg.js');
var validations = require('./validations-BrQ_igDv.js');
var positionElement = require('./position-element-Due63Z64.js');

const datepickerCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, rgb(140, 140, 140));opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--textarea{padding:12px 12px 12px 12px;-ms-flex-align:start;align-items:flex-start}.input--textarea.input--label{padding:12px 12px 12px 12px}.input--textarea .input__icon{margin-top:1px}.input--textarea .input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.input--state-primary .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.input--state-danger{border:1px solid var(--color-delete, rgb(230, 15, 15));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, rgb(138, 0, 0));z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190));box-shadow:0 0 0 2px var(--color-error, rgb(250, 190, 190))}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, rgb(230, 15, 15))}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, rgb(1, 114, 62));z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188));box-shadow:0 0 0 2px var(--color-success, rgb(132, 235, 188))}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, rgb(40, 40, 40))}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px;margin-top:1px}.input--label{padding:7px 4px 8px 12px}.input--label.input--textarea{padding:12px 12px 12px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px;-ms-flex-negative:0;flex-shrink:0}.input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start;margin-top:1px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex:1;flex:1}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper--textarea{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:2px}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;resize:none;cursor:inherit;width:100%;min-height:auto}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__text--textarea{resize:vertical;overflow-y:auto;line-height:20px;padding:0;scrollbar-width:thin;scrollbar-color:var(--color-border-2, rgba(0, 0, 0, 0.16)) transparent}.input__container__text--textarea::-webkit-scrollbar{width:8px}.input__container__text--textarea::-webkit-scrollbar-track{background:transparent}.input__container__text--textarea::-webkit-scrollbar-thumb{background:var(--color-border-2, rgba(0, 0, 0, 0.16));border-radius:4px}.input__container__text--textarea::-webkit-scrollbar-thumb:hover{background:var(--color-content-ghost, rgb(140, 140, 140))}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, rgb(89, 89, 89));word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px;-ms-flex-negative:0;flex-shrink:0}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, rgb(40, 40, 40))}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}:host{position:relative;max-width:608px}.datepicker__inputs{position:relative;width:100%;display:grid}.datepicker__inputs__open{z-index:90000}.datepicker__inputs__single{grid-template-columns:1fr}.datepicker__inputs__period{grid-template-columns:1fr 1fr;gap:16px}.datepicker__inputs bds-input{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:100%}.datepicker__inputs bds-input::part(input-container){position:relative}.datepicker__inputs__icon{cursor:pointer;color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;padding-right:16px}.datepicker__inputs__icon bds-icon:first-child{margin-right:8px}.datepicker__inputs__icon:hover bds-icon:first-child{color:var(--color-primary, rgb(30, 107, 241))}.datepicker__menu{position:absolute;pointer-events:none;background-color:var(--color-surface-0, rgb(255, 255, 255));-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));border-radius:8px;padding:16px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.datepicker__menu__open{z-index:100000;pointer-events:auto;opacity:1}.datepicker__menu__single__top-center{bottom:calc(100% + 8px);left:calc(50% - 146px)}.datepicker__menu__single__top-left{bottom:calc(100% + 8px);left:0}.datepicker__menu__single__top-right{bottom:calc(100% + 8px);right:0}.datepicker__menu__single__bottom-center{top:calc(100% + 8px);left:calc(50% - 146px)}.datepicker__menu__single__bottom-right{top:calc(100% + 8px);right:0}.datepicker__menu__single__bottom-left{top:calc(100% + 8px);left:0}.datepicker__menu__single__right-center{right:calc(100% + 8px)}.datepicker__menu__single__right-top{right:calc(100% + 8px);top:0}.datepicker__menu__single__right-bottom{right:calc(100% + 8px);bottom:0}.datepicker__menu__single__left-center{left:calc(100% + 8px)}.datepicker__menu__single__left-top{left:calc(100% + 8px);top:0}.datepicker__menu__single__left-bottom{left:calc(100% + 8px);bottom:0}.datepicker__menu__period__top-center{bottom:calc(100% + 8px);left:calc(50% - 240px)}.datepicker__menu__period__top-left{bottom:calc(100% + 8px);left:0}.datepicker__menu__period__top-right{bottom:calc(100% + 8px);right:0}.datepicker__menu__period__bottom-center{top:calc(100% + 8px);left:calc(50% - 240px)}.datepicker__menu__period__bottom-right{top:calc(100% + 8px);right:0}.datepicker__menu__period__bottom-left{top:calc(100% + 8px);left:0}.datepicker__menu__period__right-center{right:calc(100% + 8px)}.datepicker__menu__period__right-top{right:calc(100% + 8px);top:0}.datepicker__menu__period__right-bottom{right:calc(100% + 8px);bottom:0}.datepicker__menu__period__left-center{left:calc(100% + 8px)}.datepicker__menu__period__left-top{left:calc(100% + 8px);top:0}.datepicker__menu__period__left-bottom{left:calc(100% + 8px);bottom:0}.datepicker__menu__message{padding:8px;border-radius:8px;background-color:var(--color-warning, rgb(253, 233, 155));color:var(--color-content-din, rgb(0, 0, 0));display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:24px}.datepicker__menu__message bds-icon{margin-right:4px}.datepicker__menu__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding-top:8px;margin-top:8px;border-top:1px solid var(--color-border-2, rgba(0, 0, 0, 0.16))}.datepicker__menu__footer bds-button{margin-left:8px}.datepicker__calendar{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.datepicker__calendar__selectDate{width:100%;display:grid;grid-template-columns:32px 104px auto 32px;grid-gap:8px;-ms-flex-align:center;align-items:center;margin-bottom:8px;justify-items:center}.datepicker__calendar__selectDate__select{position:relative;width:100%}.datepicker__calendar__selectDate__select__input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, rgb(246, 246, 246));color:var(--color-content-default, rgb(40, 40, 40));border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input:hover{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input.input--pressed{border:1px solid var(--color-primary, rgb(30, 107, 241));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235));box-shadow:0 0 0 2px var(--color-info, rgb(128, 227, 235))}.datepicker__calendar__selectDate__select__input.input--pressed .input__icon .bds-icon{color:var(--color-primary, rgb(30, 107, 241))}.datepicker__calendar__selectDate__select__input .input__container__label{color:var(--color-content-default, rgb(40, 40, 40))}.datepicker__calendar__selectDate__select__input .input__container__label--pressed bds-typo{color:var(--color-primary, rgb(30, 107, 241))}.datepicker__calendar__selectDate__select__input .input__container__text{caret-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-default, rgb(40, 40, 40))}.datepicker__calendar__selectDate__select__input__disable{cursor:not-allowed;background:var(--color-surface-2, rgb(237, 237, 237));border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable:hover{border:1px solid var(--color-content-disable, rgb(89, 89, 89));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));box-sizing:border-box;border-radius:8px}.datepicker__calendar__selectDate__select__input__disable.input--pressed{border:1px solid var(--color-content-disable, rgb(89, 89, 89));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-surface-3, rgb(227, 227, 227));box-shadow:0 0 0 2px var(--color-surface-3, rgb(227, 227, 227))}.datepicker__calendar__selectDate__select__input__disable.input--pressed .input__icon .bds-icon{color:var(--color-content-disable, rgb(89, 89, 89))}.datepicker__calendar__selectDate__select__input__disable .input__container__label{color:var(--color-content-disable, rgb(89, 89, 89))}.datepicker__calendar__selectDate__select__input__disable .input__container__label--pressed bds-typo{color:var(--color-content-disable, rgb(89, 89, 89))}.datepicker__calendar__selectDate__select__input__disable .input__container__text{caret-color:var(--color-content-disable, rgb(89, 89, 89));color:var(--color-content-disable, rgb(89, 89, 89))}.datepicker__calendar__selectDate__select__input .icon-arrow{color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex}.datepicker__calendar__selectDate__select__options{background:var(--color-surface-0, rgb(255, 255, 255));width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 8px 4px -4px var(--color-shadow-0, rgba(0, 0, 0, 0.04)), 0px 12px 12px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);opacity:0}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.datepicker__calendar__selectDate__select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.datepicker__calendar__selectDate__select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}.datepicker__calendar__selectDate__icon{cursor:pointer;color:var(--color-content-disable, rgb(89, 89, 89))}.datepicker__calendar__selectDate .arrow-left__disable{opacity:0;pointer-events:none}.datepicker__calendar__selectDate .arrow-right__disable{opacity:0;pointer-events:none}.datepicker__calendar__week{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr);margin-bottom:8px}.datepicker__calendar__week__day{width:32px;height:32px;text-align:center;color:var(--color-content-ghost, rgb(140, 140, 140));display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.datepicker__calendar__car{height:192px;width:224px;overflow:hidden;position:relative}.datepicker__calendar__car__slide{display:-ms-flexbox;display:flex;position:absolute;left:-100%}.datepicker__calendar__car__slide__box{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.datepicker__calendar__car__slide__box__day{width:32px;height:32px;position:relative}.datepicker__calendar__car__slide__box__day__period:before{content:\"\";position:absolute;inset:4px 0px;background-color:var(--color-primary, rgb(30, 107, 241));opacity:0.25}.datepicker__calendar__car__slide__box__day__start:before{inset:4px 0;border-top-left-radius:16px;border-bottom-left-radius:16px}.datepicker__calendar__car__slide__box__day__end:before{inset:4px 0;border-top-right-radius:16px;border-bottom-right-radius:16px}.datepicker__calendar__car__slide__box__day__typo{position:relative;width:calc(100% - 2px);height:calc(100% - 2px);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:100%;color:var(--color-content-default, rgb(40, 40, 40));border:1px solid transparent;cursor:pointer}.datepicker__calendar__car__slide__box__day__typo:hover{background-color:var(--color-surface-1, rgb(246, 246, 246));color:var(--color-primary, rgb(30, 107, 241));border-color:var(--color-primary, rgb(30, 107, 241))}.datepicker__calendar__car__slide__box__day__current{background-color:var(--color-surface-1, rgb(246, 246, 246));color:var(--color-primary, rgb(30, 107, 241));border-color:var(--color-primary, rgb(30, 107, 241))}.datepicker__calendar__car__slide__box__day__selected{background-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-bright, rgb(255, 255, 255))}.datepicker__calendar__car__slide__box__day__selected:hover{background-color:var(--color-primary, rgb(30, 107, 241));color:var(--color-content-bright, rgb(255, 255, 255))}.datepicker__calendar__car__slide__box__day__disable{pointer-events:none;background-color:transparent;color:var(--color-content-ghost, rgb(140, 140, 140))}.datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPrev;animation-name:animationPrev;-webkit-animation-duration:0.33s;animation-duration:0.33s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.datepicker__calendar__car .animate__next{-webkit-animation-name:animationNext;animation-name:animationNext;-webkit-animation-duration:0.33s;animation-duration:0.33s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}.period .datepicker__calendar__selectDate{grid-template-columns:32px 120px 80px auto 32px}.period .datepicker__calendar__selectDate__futureMonth{padding:0 8px;text-align:center;color:var(--color-content-default, rgb(40, 40, 40))}.period .datepicker__calendar__week{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.period .datepicker__calendar__week__present,.period .datepicker__calendar__week__future{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:grid;grid-template-columns:repeat(7, 1fr)}.period .datepicker__calendar__car{width:464px}.period .datepicker__calendar__car__slide{left:calc(-50% - 24px)}.period .datepicker__calendar__car__slide__box{margin-left:16px}.period .datepicker__calendar__car .animate__prev{-webkit-animation-name:animationPeriodPrev;animation-name:animationPeriodPrev}.period .datepicker__calendar__car .animate__next{-webkit-animation-name:animationPeriodNext;animation-name:animationPeriodNext}.outzone{position:fixed;top:0;left:0;width:100%;height:100vh;z-index:80000}@-webkit-keyframes animationPrev{0%{left:-100%}100%{left:0}}@keyframes animationPrev{0%{left:-100%}100%{left:0}}@-webkit-keyframes animationNext{0%{left:-100%}100%{left:-200%}}@keyframes animationNext{0%{left:-100%}100%{left:-200%}}@-webkit-keyframes animationPeriodPrev{0%{left:calc(-50% - 24px)}100%{left:-16px}}@keyframes animationPeriodPrev{0%{left:calc(-50% - 24px)}100%{left:-16px}}@-webkit-keyframes animationPeriodNext{0%{left:calc(-50% - 24px)}100%{left:calc(-100% - 24px)}}@keyframes animationPeriodNext{0%{left:calc(-50% - 24px)}100%{left:calc(-100% - 24px)}}";

const DatePicker = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsStartDate = index.createEvent(this, "bdsStartDate");
        this.bdsEndDate = index.createEvent(this, "bdsEndDate");
        this.concludeDatepicker = index.createEvent(this, "concludeDatepicker");
        this.emptyConcludeDatepicker = index.createEvent(this, "emptyConcludeDatepicker");
        this.open = false;
        this.stateSelect = 'start';
        this.dateSelected = null;
        this.endDateSelected = null;
        this.errorMsgDate = null;
        this.errorMsgEndDate = null;
        this.intoView = null;
        this.scrollingTop = 0;
        /**
         * TypeOfDate. Select type of date.
         */
        this.typeOfDate = 'single';
        /**
         * StartDateLimit. Insert a limiter to select the date period.
         */
        this.startDateLimit = calendar.defaultStartDate;
        /**
         * EndDateLimit. Insert a limiter to select the date period.
         */
        this.endDateLimit = calendar.defaultEndDate;
        /**
         *  label in input, with he the input size increases.
         */
        this.label = '';
        /**
         * Message. Select type of date.
         */
        this.message = null;
        /**
         * Message. Select type of date.
         */
        this.variantBanner = 'warning';
        /**
         * Language, Entered as one of the languages. Can be one of:
         * 'pt_BR', 'es_ES', 'en_US'.
         */
        this.language = 'pt_BR';
        /**
         * Disabled input.
         */
        this.disabled = false;
        /**
         * Default value input.
         */
        this.valueDateSelected = null;
        /**
         * Default value input.
         */
        this.valueEndDateSelected = null;
        /**
         * Used to set drop position
         */
        this.positionOptions = 'auto';
        /**
         * Data test is the prop to specifically test the component action object.
         * dtInputStart is the data-test to input start.
         */
        this.dtInputStart = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtInputEnd is the data-test to input end.
         */
        this.dtInputEnd = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtOutzone is the data-test to outzone.
         */
        this.dtOutzone = null;
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
         * Data test is the prop to specifically test the component action object.
         * dtButtonClear is the data-test to button clear.
         */
        this.dtButtonClear = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonConfirm is the data-test to button confirm.
         */
        this.dtButtonConfirm = null;
        this.centerDropElement = (value) => {
            const arrayPosition = value.split('-');
            if ((arrayPosition[0] == 'left' || arrayPosition[0] == 'right') && arrayPosition[1] == 'center') {
                this.menuElement.style.top = `calc(50% - ${this.menuElement.offsetHeight / 2}px)`;
            }
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
            if (!this.valueDate) {
                this.valueEndDate = null;
            }
            this.validationDateSelected(this.valueDate);
        };
        /**
         * validationDateSelected. Function to validate date field
         */
        this.validationDateSelected = (value) => {
            const formatData = calendar.typeDateToStringDate(value);
            const valueSelected = formatData && calendar.dateToDayList(formatData);
            const start = this.startDateLimit && calendar.dateToDayList(this.startDateLimit);
            const end = this.endDateLimit && calendar.dateToDayList(this.endDateLimit);
            if (!validations.dateValidation(formatData)) {
                this.errorMsgDate = `${calendar.messageTranslate(this.language, 'dateFormatIsIncorrect')}!`;
            }
            else {
                if (calendar.fillDayList(valueSelected) < calendar.fillDayList(start) || calendar.fillDayList(valueSelected) > calendar.fillDayList(end)) {
                    this.errorMsgDate = `${calendar.messageTranslate(this.language, 'betweenPeriodOf')} ${this.startDateLimit} - ${this.endDateLimit}`;
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
            const formatData = calendar.typeDateToStringDate(value);
            const formatValueDateSelected = calendar.typeDateToStringDate(this.valueDate);
            const valueSelected = formatData && calendar.dateToDayList(formatData);
            const start = formatValueDateSelected ? calendar.dateToDayList(formatValueDateSelected) : calendar.dateToDayList(this.startDateLimit);
            const end = this.endDateLimit && calendar.dateToDayList(this.endDateLimit);
            if (!validations.dateValidation(formatData)) {
                this.errorMsgEndDate = `${calendar.messageTranslate(this.language, 'dateFormatIsIncorrect')}!`;
            }
            else {
                if (calendar.fillDayList(valueSelected) < calendar.fillDayList(start) || calendar.fillDayList(valueSelected) > calendar.fillDayList(end)) {
                    this.errorMsgEndDate = `${calendar.messageTranslate(this.language, 'betweenPeriodOf')} ${formatValueDateSelected} - ${this.endDateLimit}`;
                }
                else {
                    this.errorMsgEndDate = null;
                    this.endDateSelected = new Date(valueSelected.year, valueSelected.month, valueSelected.date);
                }
            }
        };
        this.openDatepicker = () => {
            if (!this.disabled) {
                this.open = true;
            }
        };
        this.clickConcludeDatepicker = () => {
            if (this.typeOfDate == 'period') {
                if (this.valueEndDate) {
                    const data = {
                        startDate: calendar.typeDateToStringDate(this.valueDate),
                        endDate: calendar.typeDateToStringDate(this.valueEndDate),
                    };
                    this.open = false;
                    this.concludeDatepicker.emit(data);
                    this.inputSetEndDate.removeFocus();
                    this.errorMsgEndDate = null;
                }
                else {
                    if (!this.valueDate && !this.valueEndDate) {
                        this.open = false;
                        this.emptyConcludeDatepicker.emit();
                    }
                    else {
                        this.open = true;
                        this.errorMsgEndDate = calendar.messageTranslate(this.language, 'endDateIsEmpty');
                    }
                }
            }
            else {
                if (this.valueDate != null) {
                    const data = {
                        startDate: calendar.typeDateToStringDate(this.valueDate),
                    };
                    this.concludeDatepicker.emit(data);
                }
                this.open = false;
            }
        };
        this.onFocusDateSelect = () => {
            this.stateSelect = 'start';
        };
        this.onFocusEndDateSelect = () => {
            this.stateSelect = 'end';
        };
    }
    componentWillLoad() {
        this.endDateLimitChanged();
        this.startDateLimitChanged();
        this.valueDateSelectedChanged();
        this.valueEndDateSelectedChanged();
        this.intoView = positionElement.getScrollParent(this.element);
        if (this.valueDate)
            this.validationDateSelected(this.valueDate);
        if (this.valueEndDate)
            this.validationEndDateSelected(this.valueEndDate);
    }
    componentDidLoad() {
        if (this.positionOptions != 'auto') {
            this.centerDropElement(this.positionOptions);
            this.setDefaultPlacement(this.positionOptions);
        }
        else {
            this.validatePositionDrop();
        }
    }
    valueDateSelectedChanged() {
        this.valueDate = this.valueDateSelected && calendar.dateToInputDate(this.valueDateSelected);
        if (this.valueDate)
            this.validationDateSelected(this.valueDate);
    }
    valueEndDateSelectedChanged() {
        this.valueEndDate = this.valueEndDateSelected && calendar.dateToInputDate(this.valueEndDateSelected);
        if (this.valueEndDate)
            this.validationEndDateSelected(this.valueEndDate);
    }
    /**
     * startDateLimit validation.
     */
    startDateLimitChanged() {
        if (!validations.dateValidation(this.startDateLimit)) {
            this.startDateLimit = calendar.defaultStartDate;
        }
    }
    /**
     * endDateLimit validation.
     */
    endDateLimitChanged() {
        const dlStartDate = calendar.dateToDayList(this.startDateLimit);
        const dlEndDate = calendar.dateToDayList(this.endDateLimit);
        if (!validations.dateValidation(this.endDateLimit)) {
            this.endDateLimit = calendar.defaultEndDate;
        }
        if (calendar.fillDayList(dlEndDate) < calendar.fillDayList(dlStartDate)) {
            this.endDateLimit = `${dlEndDate.date.toString().padStart(2, '0')}/${(dlEndDate.month + 1)
                .toString()
                .padStart(2, '0')}/${dlStartDate.year + 1}`;
        }
    }
    dateSelectedChanged() {
        this.stateSelect = 'end';
    }
    setDefaultPlacement(value) {
        if (this.typeOfDate == 'single') {
            this.menuElement.classList.add(`datepicker__menu__single__${value}`);
        }
        else {
            this.menuElement.classList.add(`datepicker__menu__period__${value}`);
        }
    }
    validatePositionDrop() {
        const positionValue = positionElement.positionAbsoluteElement({
            actionElement: this.element,
            changedElement: this.menuElement,
            intoView: this.intoView,
        });
        if (this.typeOfDate == 'single') {
            this.menuElement.classList.add(`datepicker__menu__single__${positionValue.y}-${positionValue.x}`);
        }
        else {
            this.menuElement.classList.add(`datepicker__menu__period__${positionValue.y}-${positionValue.x}`);
        }
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
        this.valueDate = this.dateSelected && calendar.dateToTypeDate(this.dateSelected);
        this.errorMsgDate = null;
    }
    /**
     * selectEndDate. Function to issue selected end date..
     */
    selectEndDate(event) {
        const { detail: { value }, } = event;
        this.endDateSelected = value;
        this.bdsEndDate.emit({ value: this.endDateSelected });
        this.valueEndDate = this.endDateSelected && calendar.dateToTypeDate(this.endDateSelected);
        this.errorMsgEndDate = null;
    }
    render() {
        return (index.h(index.Host, { key: '36bbc9c4e45662cd85aa8be8369cf782a2547e30', class: { datepicker: true } }, this.typeOfDate == 'single' ? (index.h("div", { class: {
                datepicker__inputs: true,
                [`datepicker__inputs__${this.typeOfDate}`]: true,
                datepicker__inputs__open: this.open,
            } }, index.h("bds-input", { class: "input-start", label: this.label.length > 0 ? this.label : calendar.termTranslate(this.language, 'setTheDate'), value: this.valueDate, disabled: this.disabled, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onBdsInput: (ev) => this.onInputDateSelected(ev.detail), danger: this.errorMsgDate ? true : false, errorMessage: this.errorMsgDate, dataTest: this.dtInputStart }))) : (index.h("div", { class: {
                datepicker__inputs: true,
                [`datepicker__inputs__${this.typeOfDate}`]: true,
                datepicker__inputs__open: this.open,
            } }, index.h("bds-input", { class: "input-start", ref: this.refInputSetDate, label: calendar.termTranslate(this.language, 'from'), value: this.valueDate, disabled: this.disabled, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onFocus: () => this.onFocusDateSelect(), onBdsInput: (ev) => this.onInputDateSelected(ev.detail), danger: this.errorMsgDate ? true : false, errorMessage: this.errorMsgDate, dataTest: this.dtInputStart }), index.h("bds-input", { class: "input-end", ref: this.refInputSetEndDate, label: calendar.termTranslate(this.language, 'to'), value: this.valueEndDate, disabled: this.disabled || this.errorMsgDate ? true : !this.dateSelected, type: "date", maxlength: 10, icon: "calendar", onClick: () => this.openDatepicker(), onFocus: () => this.onFocusEndDateSelect(), onBdsInput: (ev) => this.onInputEndDateSelected(ev.detail), danger: this.errorMsgEndDate ? true : false, errorMessage: this.errorMsgEndDate, dataTest: this.dtInputEnd }))), index.h("div", { key: '0b89b98494daeafb830545eef3d0133ffd778404', ref: this.refMenuElement, class: {
                datepicker__menu: true,
                datepicker__menu__open: this.open,
            } }, this.message && (index.h("bds-grid", { key: 'f8af1bc791126b3ed89395fbdc856ad4e056c33c', margin: "b-2" }, index.h("bds-banner", { key: '333e8b53d22a4f03ad6e4cc8be66afb44da11561', variant: this.variantBanner, context: "inside" }, this.message))), this.typeOfDate == 'single' ? (index.h("bds-datepicker-single", { ref: this.refDatepickerSingle, startDate: this.startDateLimit && calendar.dateToDayList(this.startDateLimit), endDate: this.endDateLimit && calendar.dateToDayList(this.endDateLimit), dateSelect: this.dateSelected, onBdsDateSelected: (event) => this.selectDate(event), language: this.language, dtButtonPrev: this.dtButtonPrev, dtButtonNext: this.dtButtonNext, dtSelectMonth: this.dtSelectMonth, dtSelectYear: this.dtSelectYear })) : (index.h("bds-datepicker-period", { ref: this.refDatepickerPeriod, startDate: this.startDateLimit && calendar.dateToDayList(this.startDateLimit), endDate: this.endDateLimit && calendar.dateToDayList(this.endDateLimit), startDateSelect: this.dateSelected, stateSelect: this.stateSelect, endDateSelect: this.endDateSelected, onBdsStartDate: (event) => this.selectDate(event), onBdsEndDate: (event) => this.selectEndDate(event), onBdsClickDayButton: (event) => this.whenClickCalendar(event), language: this.language, dtButtonPrev: this.dtButtonPrev, dtButtonNext: this.dtButtonNext, dtSelectMonth: this.dtSelectMonth, dtSelectYear: this.dtSelectYear })), index.h("div", { key: '93b725249db0b8b9d48b95aa2ab5c6af3c461de6', class: { datepicker__menu__footer: true } }, index.h("bds-button", { key: 'c9d02f6676f7c7526657470c32b921f6ad9f5b39', class: "bt-reset", size: "short", variant: "secondary", onClick: () => this.clearDate(), dataTest: this.dtButtonClear }, calendar.termTranslate(this.language, 'reset')), index.h("bds-button", { key: 'c77167272845dada97a46af9273de62d08c258b5', class: "bt-conclude", size: "short", onClick: this.clickConcludeDatepicker, dataTest: this.dtButtonConfirm }, calendar.termTranslate(this.language, 'conclude')))), this.open && (index.h("div", { key: 'c0725214a7c73afb99d9a403ec0f8bf91d4c09f2', class: { outzone: true }, onClick: () => this.clickConcludeDatepicker(), "data-test": this.dtOutzone }))));
    }
    get element() { return index.getElement(this); }
    static get watchers() { return {
        "valueDateSelected": ["valueDateSelectedChanged"],
        "valueEndDateSelected": ["valueEndDateSelectedChanged"],
        "startDateLimit": ["startDateLimitChanged"],
        "endDateLimit": ["endDateLimitChanged"],
        "dateSelected": ["dateSelectedChanged"]
    }; }
};
DatePicker.style = datepickerCss;

exports.bds_datepicker = DatePicker;
//# sourceMappingURL=bds-datepicker.entry.cjs.js.map

//# sourceMappingURL=bds-datepicker.cjs.entry.js.map