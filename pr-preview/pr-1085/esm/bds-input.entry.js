import { r as registerInstance, c as createEvent, h, H as Host } from './index-611fd21e.js';
import { e as emailValidation, n as numberValidation } from './validations-e4c049e4.js';

const inputCss = ":root{--space-0:0px;--space-0-5:4px;--space-1:8px;--space-2:16px;--space-3:24px;--space-4:32px;--space-5:40px;--space-6:48px;--space-7:56px;--space-8:64px;--space-9:72px;--space-10:80px;--space-11:88px;--space-12:96px}.m-0{margin:var(--space-0) !important}.m-0\\.5{margin:var(--space-0-5) !important}.m-1{margin:var(--space-1) !important}.m-2{margin:var(--space-2) !important}.m-3{margin:var(--space-3) !important}.m-4{margin:var(--space-4) !important}.m-5{margin:var(--space-5) !important}.m-6{margin:var(--space-6) !important}.m-7{margin:var(--space-7) !important}.m-8{margin:var(--space-8) !important}.m-9{margin:var(--space-9) !important}.m-10{margin:var(--space-10) !important}.m-11{margin:var(--space-11) !important}.m-12{margin:var(--space-12) !important}.mx-0{margin-left:var(--space-0) !important;margin-right:var(--space-0) !important}.mx-0\\.5{margin-left:var(--space-0-5) !important;margin-right:var(--space-0-5) !important}.mx-1{margin-left:var(--space-1) !important;margin-right:var(--space-1) !important}.mx-2{margin-left:var(--space-2) !important;margin-right:var(--space-2) !important}.mx-3{margin-left:var(--space-3) !important;margin-right:var(--space-3) !important}.mx-4{margin-left:var(--space-4) !important;margin-right:var(--space-4) !important}.mx-5{margin-left:var(--space-5) !important;margin-right:var(--space-5) !important}.mx-6{margin-left:var(--space-6) !important;margin-right:var(--space-6) !important}.mx-7{margin-left:var(--space-7) !important;margin-right:var(--space-7) !important}.mx-8{margin-left:var(--space-8) !important;margin-right:var(--space-8) !important}.mx-9{margin-left:var(--space-9) !important;margin-right:var(--space-9) !important}.mx-10{margin-left:var(--space-10) !important;margin-right:var(--space-10) !important}.mx-11{margin-left:var(--space-11) !important;margin-right:var(--space-11) !important}.mx-12{margin-left:var(--space-12) !important;margin-right:var(--space-12) !important}.my-0{margin-top:var(--space-0) !important;margin-bottom:var(--space-0) !important}.my-0\\.5{margin-top:var(--space-0-5) !important;margin-bottom:var(--space-0-5) !important}.my-1{margin-top:var(--space-1) !important;margin-bottom:var(--space-1) !important}.my-2{margin-top:var(--space-2) !important;margin-bottom:var(--space-2) !important}.my-3{margin-top:var(--space-3) !important;margin-bottom:var(--space-3) !important}.my-4{margin-top:var(--space-4) !important;margin-bottom:var(--space-4) !important}.my-5{margin-top:var(--space-5) !important;margin-bottom:var(--space-5) !important}.my-6{margin-top:var(--space-6) !important;margin-bottom:var(--space-6) !important}.my-7{margin-top:var(--space-7) !important;margin-bottom:var(--space-7) !important}.my-8{margin-top:var(--space-8) !important;margin-bottom:var(--space-8) !important}.my-9{margin-top:var(--space-9) !important;margin-bottom:var(--space-9) !important}.my-10{margin-top:var(--space-10) !important;margin-bottom:var(--space-10) !important}.my-11{margin-top:var(--space-11) !important;margin-bottom:var(--space-11) !important}.my-12{margin-top:var(--space-12) !important;margin-bottom:var(--space-12) !important}.mt-0{margin-top:var(--space-0) !important}.mt-0\\.5{margin-top:var(--space-0-5) !important}.mt-1{margin-top:var(--space-1) !important}.mt-2{margin-top:var(--space-2) !important}.mt-3{margin-top:var(--space-3) !important}.mt-4{margin-top:var(--space-4) !important}.mt-5{margin-top:var(--space-5) !important}.mt-6{margin-top:var(--space-6) !important}.mt-7{margin-top:var(--space-7) !important}.mt-8{margin-top:var(--space-8) !important}.mt-9{margin-top:var(--space-9) !important}.mt-10{margin-top:var(--space-10) !important}.mt-11{margin-top:var(--space-11) !important}.mt-12{margin-top:var(--space-12) !important}.mr-0{margin-right:var(--space-0) !important}.mr-0\\.5{margin-right:var(--space-0-5) !important}.mr-1{margin-right:var(--space-1) !important}.mr-2{margin-right:var(--space-2) !important}.mr-3{margin-right:var(--space-3) !important}.mr-4{margin-right:var(--space-4) !important}.mr-5{margin-right:var(--space-5) !important}.mr-6{margin-right:var(--space-6) !important}.mr-7{margin-right:var(--space-7) !important}.mr-8{margin-right:var(--space-8) !important}.mr-9{margin-right:var(--space-9) !important}.mr-10{margin-right:var(--space-10) !important}.mr-11{margin-right:var(--space-11) !important}.mr-12{margin-right:var(--space-12) !important}.mb-0{margin-bottom:var(--space-0) !important}.mb-0\\.5{margin-bottom:var(--space-0-5) !important}.mb-1{margin-bottom:var(--space-1) !important}.mb-2{margin-bottom:var(--space-2) !important}.mb-3{margin-bottom:var(--space-3) !important}.mb-4{margin-bottom:var(--space-4) !important}.mb-5{margin-bottom:var(--space-5) !important}.mb-6{margin-bottom:var(--space-6) !important}.mb-7{margin-bottom:var(--space-7) !important}.mb-8{margin-bottom:var(--space-8) !important}.mb-9{margin-bottom:var(--space-9) !important}.mb-10{margin-bottom:var(--space-10) !important}.mb-11{margin-bottom:var(--space-11) !important}.mb-12{margin-bottom:var(--space-12) !important}.ml-0{margin-left:var(--space-0) !important}.ml-0\\.5{margin-left:var(--space-0-5) !important}.ml-1{margin-left:var(--space-1) !important}.ml-2{margin-left:var(--space-2) !important}.ml-3{margin-left:var(--space-3) !important}.ml-4{margin-left:var(--space-4) !important}.ml-5{margin-left:var(--space-5) !important}.ml-6{margin-left:var(--space-6) !important}.ml-7{margin-left:var(--space-7) !important}.ml-8{margin-left:var(--space-8) !important}.ml-9{margin-left:var(--space-9) !important}.ml-10{margin-left:var(--space-10) !important}.ml-11{margin-left:var(--space-11) !important}.ml-12{margin-left:var(--space-12) !important}.p-0{padding:var(--space-0) !important}.p-0\\.5{padding:var(--space-0-5) !important}.p-1{padding:var(--space-1) !important}.p-2{padding:var(--space-2) !important}.p-3{padding:var(--space-3) !important}.p-4{padding:var(--space-4) !important}.p-5{padding:var(--space-5) !important}.p-6{padding:var(--space-6) !important}.p-7{padding:var(--space-7) !important}.p-8{padding:var(--space-8) !important}.p-9{padding:var(--space-9) !important}.p-10{padding:var(--space-10) !important}.p-11{padding:var(--space-11) !important}.p-12{padding:var(--space-12) !important}.px-0{padding-left:var(--space-0) !important;padding-right:var(--space-0) !important}.px-0\\.5{padding-left:var(--space-0-5) !important;padding-right:var(--space-0-5) !important}.px-1{padding-left:var(--space-1) !important;padding-right:var(--space-1) !important}.px-2{padding-left:var(--space-2) !important;padding-right:var(--space-2) !important}.px-3{padding-left:var(--space-3) !important;padding-right:var(--space-3) !important}.px-4{padding-left:var(--space-4) !important;padding-right:var(--space-4) !important}.px-5{padding-left:var(--space-5) !important;padding-right:var(--space-5) !important}.px-6{padding-left:var(--space-6) !important;padding-right:var(--space-6) !important}.px-7{padding-left:var(--space-7) !important;padding-right:var(--space-7) !important}.px-8{padding-left:var(--space-8) !important;padding-right:var(--space-8) !important}.px-9{padding-left:var(--space-9) !important;padding-right:var(--space-9) !important}.px-10{padding-left:var(--space-10) !important;padding-right:var(--space-10) !important}.px-11{padding-left:var(--space-11) !important;padding-right:var(--space-11) !important}.px-12{padding-left:var(--space-12) !important;padding-right:var(--space-12) !important}.py-0{padding-top:var(--space-0) !important;padding-bottom:var(--space-0) !important}.py-0\\.5{padding-top:var(--space-0-5) !important;padding-bottom:var(--space-0-5) !important}.py-1{padding-top:var(--space-1) !important;padding-bottom:var(--space-1) !important}.py-2{padding-top:var(--space-2) !important;padding-bottom:var(--space-2) !important}.py-3{padding-top:var(--space-3) !important;padding-bottom:var(--space-3) !important}.py-4{padding-top:var(--space-4) !important;padding-bottom:var(--space-4) !important}.py-5{padding-top:var(--space-5) !important;padding-bottom:var(--space-5) !important}.py-6{padding-top:var(--space-6) !important;padding-bottom:var(--space-6) !important}.py-7{padding-top:var(--space-7) !important;padding-bottom:var(--space-7) !important}.py-8{padding-top:var(--space-8) !important;padding-bottom:var(--space-8) !important}.py-9{padding-top:var(--space-9) !important;padding-bottom:var(--space-9) !important}.py-10{padding-top:var(--space-10) !important;padding-bottom:var(--space-10) !important}.py-11{padding-top:var(--space-11) !important;padding-bottom:var(--space-11) !important}.py-12{padding-top:var(--space-12) !important;padding-bottom:var(--space-12) !important}.pt-0{padding-top:var(--space-0) !important}.pt-0\\.5{padding-top:var(--space-0-5) !important}.pt-1{padding-top:var(--space-1) !important}.pt-2{padding-top:var(--space-2) !important}.pt-3{padding-top:var(--space-3) !important}.pt-4{padding-top:var(--space-4) !important}.pt-5{padding-top:var(--space-5) !important}.pt-6{padding-top:var(--space-6) !important}.pt-7{padding-top:var(--space-7) !important}.pt-8{padding-top:var(--space-8) !important}.pt-9{padding-top:var(--space-9) !important}.pt-10{padding-top:var(--space-10) !important}.pt-11{padding-top:var(--space-11) !important}.pt-12{padding-top:var(--space-12) !important}.pr-0{padding-right:var(--space-0) !important}.pr-0\\.5{padding-right:var(--space-0-5) !important}.pr-1{padding-right:var(--space-1) !important}.pr-2{padding-right:var(--space-2) !important}.pr-3{padding-right:var(--space-3) !important}.pr-4{padding-right:var(--space-4) !important}.pr-5{padding-right:var(--space-5) !important}.pr-6{padding-right:var(--space-6) !important}.pr-7{padding-right:var(--space-7) !important}.pr-8{padding-right:var(--space-8) !important}.pr-9{padding-right:var(--space-9) !important}.pr-10{padding-right:var(--space-10) !important}.pr-11{padding-right:var(--space-11) !important}.pr-12{padding-right:var(--space-12) !important}.pb-0{padding-bottom:var(--space-0) !important}.pb-0\\.5{padding-bottom:var(--space-0-5) !important}.pb-1{padding-bottom:var(--space-1) !important}.pb-2{padding-bottom:var(--space-2) !important}.pb-3{padding-bottom:var(--space-3) !important}.pb-4{padding-bottom:var(--space-4) !important}.pb-5{padding-bottom:var(--space-5) !important}.pb-6{padding-bottom:var(--space-6) !important}.pb-7{padding-bottom:var(--space-7) !important}.pb-8{padding-bottom:var(--space-8) !important}.pb-9{padding-bottom:var(--space-9) !important}.pb-10{padding-bottom:var(--space-10) !important}.pb-11{padding-bottom:var(--space-11) !important}.pb-12{padding-bottom:var(--space-12) !important}.pl-0{padding-left:var(--space-0) !important}.pl-0\\.5{padding-left:var(--space-0-5) !important}.pl-1{padding-left:var(--space-1) !important}.pl-2{padding-left:var(--space-2) !important}.pl-3{padding-left:var(--space-3) !important}.pl-4{padding-left:var(--space-4) !important}.pl-5{padding-left:var(--space-5) !important}.pl-6{padding-left:var(--space-6) !important}.pl-7{padding-left:var(--space-7) !important}.pl-8{padding-left:var(--space-8) !important}.pl-9{padding-left:var(--space-9) !important}.pl-10{padding-left:var(--space-10) !important}.pl-11{padding-left:var(--space-11) !important}.pl-12{padding-left:var(--space-12) !important}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 8px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;gap:8px}.input .bds-icon{position:relative;z-index:1}.input--textarea{padding:12px 12px 12px 12px;-ms-flex-align:start;align-items:flex-start}.input--textarea.input--label{padding:12px 12px 12px 12px}.input--textarea .input__icon{margin-top:1px}.input--textarea .input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.input--pressed .input__icon .bds-icon{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__label{color:var(--color-content-default, #282828)}.input--state-primary .input__container__label--pressed bds-typo{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #282828)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-negative, #8a0000);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-negative, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #fabebe);box-shadow:0 0 0 2px var(--color-error, #fabebe)}.input--state-danger.input--pressed .input__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed bds-typo{color:var(--color-negative, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-negative, #e60f0f);color:var(--color-content-default, #282828)}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-surface-positive, #01723e);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-positive, #10603b);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success.input--pressed .input__icon .bds-icon{color:var(--color-positive, #10603b)}.input--state-success .input__container__label{color:var(--color-content-default, #282828)}.input--state-success .input__container__label--pressed bds-typo{color:var(--color-positive, #10603b)}.input--state-success .input__container__text{caret-color:var(--color-positive, #10603b);color:var(--color-content-default, #282828)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-hover, rgba(0, 0, 0, 0.08));z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-positive, #10603b);margin-left:4px;margin-top:1px}.input--label{padding:7px 4px 8px 12px}.input--label.input--textarea{padding:12px 12px 12px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:2px;-ms-flex-negative:0;flex-shrink:0}.input__icon--textarea{-ms-flex-item-align:start;align-self:flex-start;margin-top:1px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%;-ms-flex:1;flex:1}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper--textarea{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:2px}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;resize:none;cursor:inherit;width:100%;min-height:auto}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__text--textarea{resize:vertical;overflow-y:auto;line-height:20px;padding:0;scrollbar-width:thin;scrollbar-color:var(--color-border-2, rgba(0, 0, 0, 0.16)) transparent}.input__container__text--textarea::-webkit-scrollbar{width:8px}.input__container__text--textarea::-webkit-scrollbar-track{background:transparent}.input__container__text--textarea::-webkit-scrollbar-thumb{background:var(--color-border-2, rgba(0, 0, 0, 0.16));border-radius:4px}.input__container__text--textarea::-webkit-scrollbar-thumb:hover{background:var(--color-content-ghost, #8c8c8c)}.input__container__text[type=date]::-webkit-calendar-picker-indicator{opacity:0;pointer-events:none}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;gap:4px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #595959);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;margin-top:0px;-ms-flex-negative:0;flex-shrink:0}.input__message--danger .input__message__icon .bds-icon{color:var(--color-negative, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-negative, #e60f0f)}.input__message--success .input__message__icon .bds-icon{color:var(--color-positive, #10603b)}.input__message--success .input__message__text{color:var(--color-content-default, #282828)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:22px;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}";

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
    /**
     * Key press event handling (Enter, Backspace, etc).
     */
    this.keyPressWrapper = (event) => {
      switch (event.key) {
        case 'Enter':
          this.bdsSubmit.emit({ event, value: this.value });
          if (this.isSubmit) {
            this.clearTextInput();
            event.preventDefault();
          }
          break;
        case 'Backspace':
        case 'Delete':
          this.bdsKeyDownBackspace.emit({ event, value: this.value });
          break;
      }
    };
    /**
     * Function called when typing in the input field.
     */
    this.onInput = (ev) => {
      this.onBdsInputValidations();
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      // Update textarea if needed
      this.updateTextarea();
      this.bdsInput.emit(ev);
    };
    /**
     * Function called when the input field loses focus.
     */
    this.onBlur = () => {
      this.onBlurValidations();
      this.isPressed = false;
      this.bdsOnBlur.emit();
    };
    /**
     * Function called when the input field gains focus.
     */
    this.onFocus = () => {
      this.isPressed = true;
      this.bdsFocus.emit();
    };
    /**
     * Function called when clicking on the input field.
     */
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    /**
     * Clears the input field value.
     */
    this.clearTextInput = (ev) => {
      if (!this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.value = '';
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
    this.rows = 3;
    this.cols = 0;
    this.autoResize = true;
    this.resizable = false;
    this.minHeight = 60;
    this.maxHeight = 200;
    this.iconSize = 'small';
    this.requiredErrorMessage = undefined;
    this.minlengthErrorMessage = undefined;
    this.minErrorMessage = undefined;
    this.maxErrorMessage = undefined;
    this.emailErrorMessage = undefined;
    this.numberErrorMessage = undefined;
    this.chips = undefined;
    this.debounceDelay = 100;
    this.dataTest = null;
    this.encode = false;
  }
  /**
   * Sets focus to the input field.
   */
  async setFocus() {
    this.onClickWrapper();
  }
  /**
   * Removes focus from the input field.
   */
  async removeFocus() {
    this.onBlur();
  }
  /**
   * Returns the input element of the component.
   */
  async getInputElement() {
    return this.nativeInput;
  }
  /**
   * Checks if the input field is valid.
   */
  async isValid() {
    return this.nativeInput.validity.valid;
  }
  /**
   * Clears the input field value.
   */
  async clear() {
    this.value = '';
  }
  /**
   * Encodes special characters for safe display (prevents HTML code injection).
   */
  encodeValue(value) {
    const lt = /</g, gt = />/g, ap = /'/g, ic = /"/g, amp = /&/g, slash = /\//g;
    if (!this.encode)
      return value;
    return (value &&
      value
        .toString()
        .replace(lt, '&lt;')
        .replace(gt, '&gt;')
        .replace(ap, '&#39;')
        .replace(ic, '&#34;')
        .replace(amp, '&amp;')
        .replace(slash, '&#47;'));
  }
  /**
   * Notifies about the input field value change.
   */
  valueChanged(newValue) {
    const changeValue = this.encode ? this.encodeValue(newValue || '') : newValue || '';
    this.bdsChange.emit({ value: changeValue });
  }
  /**
   * Auto-resizes the textarea based on content.
   */
  autoResizeTextarea() {
    if (this.isTextarea && this.autoResize && this.nativeInput) {
      const textarea = this.nativeInput;
      // Reset height to auto to get the correct scrollHeight
      textarea.style.height = 'auto';
      // Calculate new height
      const scrollHeight = textarea.scrollHeight;
      const newHeight = Math.min(Math.max(scrollHeight, this.minHeight || 60), this.maxHeight || 200);
      textarea.style.height = `${newHeight}px`;
    }
  }
  /**
   * Debounced version of auto-resize to improve performance during rapid input events.
   */
  debouncedAutoResize() {
    if (this.autoResizeDebounceTimer) {
      clearTimeout(this.autoResizeDebounceTimer);
    }
    this.autoResizeDebounceTimer = window.setTimeout(() => {
      this.autoResizeTextarea();
    }, this.debounceDelay); // Configurable debounce delay
  }
  /**
   * Centralizes all necessary updates for the textarea, including auto-resize.
   */
  updateTextarea(immediate = false) {
    if (this.isTextarea && this.autoResize) {
      if (immediate) {
        // For immediate updates (component load, prop changes)
        this.autoResizeTextarea();
      }
      else {
        // For input events, use debounced version
        this.debouncedAutoResize();
      }
    }
  }
  /**
   * Function that renders the icon inside the input field.
   */
  renderIcon() {
    const iconSizeValue = this.iconSize === 'medium' ? 'medium' : 'small';
    const isLargeIcon = this.iconSize === 'medium';
    return (this.icon && (h("div", { class: {
        input__icon: true,
        'input__icon--large': isLargeIcon,
        'input__icon--textarea': this.isTextarea,
      } }, h("bds-icon", { class: "input__icon--color", size: iconSizeValue, name: this.icon, color: "inherit" }))));
  }
  /**
   * Function that renders the label of the input field.
   */
  renderLabel() {
    return (this.label && (h("label", { class: {
        input__container__label: true,
        'input__container__label--pressed': this.isPressed && !this.disabled,
      } }, h("bds-typo", { variant: "fs-12", bold: "bold" }, this.label))));
  }
  /**
   * Function that renders error or success messages below the input field.
   */
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
  /**
   * Validates the input field when it loses focus.
   */
  onBlurValidations() {
    this.required && this.requiredValidation();
    this.pattern && this.patternValidation();
    (this.minlength || this.maxlength) && this.lengthValidation();
    (this.min || this.max) && this.minMaxValidation();
    this.checkValidity();
  }
  /**
   * Performs field validations while the user types.
   */
  onBdsInputValidations() {
    this.type === 'email' && this.emailValidation();
    this.type === 'phonenumber' && this.numberValidation();
    this.checkValidity();
  }
  /**
   * Validates the regex pattern of the field.
   */
  patternValidation() {
    const regex = new RegExp(this.pattern);
    this.bdsPatternValidation.emit(regex.test(this.nativeInput.value));
  }
  /**
   * Validates if the field is required.
   */
  requiredValidation() {
    if (this.nativeInput.validity.valueMissing) {
      this.validationMesage = this.requiredErrorMessage;
      this.validationDanger = true;
    }
  }
  /**
   * Validates the text length in the input field.
   */
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
  /**
   * Validates the minimum and maximum values of the input field.
   */
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
  /**
   * Validates if the field contains a valid email.
   */
  emailValidation() {
    if (emailValidation(this.nativeInput.value)) {
      this.validationMesage = this.emailErrorMessage;
      this.validationDanger = true;
    }
  }
  /**
   * Validates if the field contains a valid number.
   */
  numberValidation() {
    if (numberValidation(this.nativeInput.value)) {
      this.validationMesage = this.numberErrorMessage;
      this.validationDanger = true;
    }
  }
  /**
   * Checks if the input field is valid.
   */
  checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }
  /**
   * Updates the input field value after changes.
   */
  componentDidUpdate() {
    if (this.nativeInput && this.value != this.nativeInput.value) {
      this.nativeInput.value = this.value;
    }
    // Update textarea after value changes (immediate for prop changes)
    this.updateTextarea(true);
  }
  /**
   * Initial configurations after the component loads.
   */
  componentDidLoad() {
    // Set initial height for textarea (immediate for initial load)
    this.updateTextarea(true);
  }
  /**
   * Cleanup when component is destroyed.
   */
  disconnectedCallback() {
    if (this.autoResizeDebounceTimer) {
      window.clearTimeout(this.autoResizeDebounceTimer);
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
        'input--textarea': this.isTextarea,
      }, onClick: this.onClickWrapper, onKeyDown: this.keyPressWrapper, part: "input-container" }, this.renderIcon(), h("slot", { name: "input-left" }), h("div", { class: "input__container" }, this.renderLabel(), h("div", { class: {
        input__container__wrapper: !this.chips,
        input__container__wrapper__chips: this.chips,
        'input__container__wrapper--textarea': this.isTextarea
      } }, h("slot", { name: "inside-input-left" }), h(Element, { class: {
        input__container__text: true,
        input__container__text__chips: this.chips,
        'input__container__text--textarea': this.isTextarea
      }, ref: (input) => (this.nativeInput = input), rows: this.isTextarea ? this.rows : undefined, cols: this.isTextarea ? this.cols : undefined, autocapitalize: this.autoCapitalize, autocomplete: this.autoComplete, disabled: this.disabled, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.onInput, placeholder: this.placeholder, readOnly: this.readonly, type: this.isTextarea ? undefined : this.type, value: this.encodeValue(this.value), pattern: this.pattern, required: this.required, part: "input", "data-test": this.dataTest, style: this.isTextarea ? {
        minHeight: `${this.minHeight || 60}px`,
        maxHeight: `${this.maxHeight || 200}px`,
        resize: this.resizable ? (this.autoResize ? 'none' : 'vertical') : 'none'
      } : {} }))), this.counterLength && (h("bds-counter-text", { length: this.value.length, max: this.maxlength, active: isPressed, ...this.counterLengthRule })), this.success && h("bds-icon", { class: "icon-success", name: "check", theme: "outline", size: "small" }), h("slot", { name: "input-right" })), this.renderMessage()));
  }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
Input.style = inputCss;

export { Input as bds_input };
