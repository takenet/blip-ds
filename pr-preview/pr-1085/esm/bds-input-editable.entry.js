import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-611fd21e.js';

const inputEditableCss = ":root{--space-0:0px;--space-0-5:4px;--space-1:8px;--space-2:16px;--space-3:24px;--space-4:32px;--space-5:40px;--space-6:48px;--space-7:56px;--space-8:64px;--space-9:72px;--space-10:80px;--space-11:88px;--space-12:96px}.m-0{margin:var(--space-0) !important}.m-0\\.5{margin:var(--space-0-5) !important}.m-1{margin:var(--space-1) !important}.m-2{margin:var(--space-2) !important}.m-3{margin:var(--space-3) !important}.m-4{margin:var(--space-4) !important}.m-5{margin:var(--space-5) !important}.m-6{margin:var(--space-6) !important}.m-7{margin:var(--space-7) !important}.m-8{margin:var(--space-8) !important}.m-9{margin:var(--space-9) !important}.m-10{margin:var(--space-10) !important}.m-11{margin:var(--space-11) !important}.m-12{margin:var(--space-12) !important}.mx-0{margin-left:var(--space-0) !important;margin-right:var(--space-0) !important}.mx-0\\.5{margin-left:var(--space-0-5) !important;margin-right:var(--space-0-5) !important}.mx-1{margin-left:var(--space-1) !important;margin-right:var(--space-1) !important}.mx-2{margin-left:var(--space-2) !important;margin-right:var(--space-2) !important}.mx-3{margin-left:var(--space-3) !important;margin-right:var(--space-3) !important}.mx-4{margin-left:var(--space-4) !important;margin-right:var(--space-4) !important}.mx-5{margin-left:var(--space-5) !important;margin-right:var(--space-5) !important}.mx-6{margin-left:var(--space-6) !important;margin-right:var(--space-6) !important}.mx-7{margin-left:var(--space-7) !important;margin-right:var(--space-7) !important}.mx-8{margin-left:var(--space-8) !important;margin-right:var(--space-8) !important}.mx-9{margin-left:var(--space-9) !important;margin-right:var(--space-9) !important}.mx-10{margin-left:var(--space-10) !important;margin-right:var(--space-10) !important}.mx-11{margin-left:var(--space-11) !important;margin-right:var(--space-11) !important}.mx-12{margin-left:var(--space-12) !important;margin-right:var(--space-12) !important}.my-0{margin-top:var(--space-0) !important;margin-bottom:var(--space-0) !important}.my-0\\.5{margin-top:var(--space-0-5) !important;margin-bottom:var(--space-0-5) !important}.my-1{margin-top:var(--space-1) !important;margin-bottom:var(--space-1) !important}.my-2{margin-top:var(--space-2) !important;margin-bottom:var(--space-2) !important}.my-3{margin-top:var(--space-3) !important;margin-bottom:var(--space-3) !important}.my-4{margin-top:var(--space-4) !important;margin-bottom:var(--space-4) !important}.my-5{margin-top:var(--space-5) !important;margin-bottom:var(--space-5) !important}.my-6{margin-top:var(--space-6) !important;margin-bottom:var(--space-6) !important}.my-7{margin-top:var(--space-7) !important;margin-bottom:var(--space-7) !important}.my-8{margin-top:var(--space-8) !important;margin-bottom:var(--space-8) !important}.my-9{margin-top:var(--space-9) !important;margin-bottom:var(--space-9) !important}.my-10{margin-top:var(--space-10) !important;margin-bottom:var(--space-10) !important}.my-11{margin-top:var(--space-11) !important;margin-bottom:var(--space-11) !important}.my-12{margin-top:var(--space-12) !important;margin-bottom:var(--space-12) !important}.mt-0{margin-top:var(--space-0) !important}.mt-0\\.5{margin-top:var(--space-0-5) !important}.mt-1{margin-top:var(--space-1) !important}.mt-2{margin-top:var(--space-2) !important}.mt-3{margin-top:var(--space-3) !important}.mt-4{margin-top:var(--space-4) !important}.mt-5{margin-top:var(--space-5) !important}.mt-6{margin-top:var(--space-6) !important}.mt-7{margin-top:var(--space-7) !important}.mt-8{margin-top:var(--space-8) !important}.mt-9{margin-top:var(--space-9) !important}.mt-10{margin-top:var(--space-10) !important}.mt-11{margin-top:var(--space-11) !important}.mt-12{margin-top:var(--space-12) !important}.mr-0{margin-right:var(--space-0) !important}.mr-0\\.5{margin-right:var(--space-0-5) !important}.mr-1{margin-right:var(--space-1) !important}.mr-2{margin-right:var(--space-2) !important}.mr-3{margin-right:var(--space-3) !important}.mr-4{margin-right:var(--space-4) !important}.mr-5{margin-right:var(--space-5) !important}.mr-6{margin-right:var(--space-6) !important}.mr-7{margin-right:var(--space-7) !important}.mr-8{margin-right:var(--space-8) !important}.mr-9{margin-right:var(--space-9) !important}.mr-10{margin-right:var(--space-10) !important}.mr-11{margin-right:var(--space-11) !important}.mr-12{margin-right:var(--space-12) !important}.mb-0{margin-bottom:var(--space-0) !important}.mb-0\\.5{margin-bottom:var(--space-0-5) !important}.mb-1{margin-bottom:var(--space-1) !important}.mb-2{margin-bottom:var(--space-2) !important}.mb-3{margin-bottom:var(--space-3) !important}.mb-4{margin-bottom:var(--space-4) !important}.mb-5{margin-bottom:var(--space-5) !important}.mb-6{margin-bottom:var(--space-6) !important}.mb-7{margin-bottom:var(--space-7) !important}.mb-8{margin-bottom:var(--space-8) !important}.mb-9{margin-bottom:var(--space-9) !important}.mb-10{margin-bottom:var(--space-10) !important}.mb-11{margin-bottom:var(--space-11) !important}.mb-12{margin-bottom:var(--space-12) !important}.ml-0{margin-left:var(--space-0) !important}.ml-0\\.5{margin-left:var(--space-0-5) !important}.ml-1{margin-left:var(--space-1) !important}.ml-2{margin-left:var(--space-2) !important}.ml-3{margin-left:var(--space-3) !important}.ml-4{margin-left:var(--space-4) !important}.ml-5{margin-left:var(--space-5) !important}.ml-6{margin-left:var(--space-6) !important}.ml-7{margin-left:var(--space-7) !important}.ml-8{margin-left:var(--space-8) !important}.ml-9{margin-left:var(--space-9) !important}.ml-10{margin-left:var(--space-10) !important}.ml-11{margin-left:var(--space-11) !important}.ml-12{margin-left:var(--space-12) !important}.p-0{padding:var(--space-0) !important}.p-0\\.5{padding:var(--space-0-5) !important}.p-1{padding:var(--space-1) !important}.p-2{padding:var(--space-2) !important}.p-3{padding:var(--space-3) !important}.p-4{padding:var(--space-4) !important}.p-5{padding:var(--space-5) !important}.p-6{padding:var(--space-6) !important}.p-7{padding:var(--space-7) !important}.p-8{padding:var(--space-8) !important}.p-9{padding:var(--space-9) !important}.p-10{padding:var(--space-10) !important}.p-11{padding:var(--space-11) !important}.p-12{padding:var(--space-12) !important}.px-0{padding-left:var(--space-0) !important;padding-right:var(--space-0) !important}.px-0\\.5{padding-left:var(--space-0-5) !important;padding-right:var(--space-0-5) !important}.px-1{padding-left:var(--space-1) !important;padding-right:var(--space-1) !important}.px-2{padding-left:var(--space-2) !important;padding-right:var(--space-2) !important}.px-3{padding-left:var(--space-3) !important;padding-right:var(--space-3) !important}.px-4{padding-left:var(--space-4) !important;padding-right:var(--space-4) !important}.px-5{padding-left:var(--space-5) !important;padding-right:var(--space-5) !important}.px-6{padding-left:var(--space-6) !important;padding-right:var(--space-6) !important}.px-7{padding-left:var(--space-7) !important;padding-right:var(--space-7) !important}.px-8{padding-left:var(--space-8) !important;padding-right:var(--space-8) !important}.px-9{padding-left:var(--space-9) !important;padding-right:var(--space-9) !important}.px-10{padding-left:var(--space-10) !important;padding-right:var(--space-10) !important}.px-11{padding-left:var(--space-11) !important;padding-right:var(--space-11) !important}.px-12{padding-left:var(--space-12) !important;padding-right:var(--space-12) !important}.py-0{padding-top:var(--space-0) !important;padding-bottom:var(--space-0) !important}.py-0\\.5{padding-top:var(--space-0-5) !important;padding-bottom:var(--space-0-5) !important}.py-1{padding-top:var(--space-1) !important;padding-bottom:var(--space-1) !important}.py-2{padding-top:var(--space-2) !important;padding-bottom:var(--space-2) !important}.py-3{padding-top:var(--space-3) !important;padding-bottom:var(--space-3) !important}.py-4{padding-top:var(--space-4) !important;padding-bottom:var(--space-4) !important}.py-5{padding-top:var(--space-5) !important;padding-bottom:var(--space-5) !important}.py-6{padding-top:var(--space-6) !important;padding-bottom:var(--space-6) !important}.py-7{padding-top:var(--space-7) !important;padding-bottom:var(--space-7) !important}.py-8{padding-top:var(--space-8) !important;padding-bottom:var(--space-8) !important}.py-9{padding-top:var(--space-9) !important;padding-bottom:var(--space-9) !important}.py-10{padding-top:var(--space-10) !important;padding-bottom:var(--space-10) !important}.py-11{padding-top:var(--space-11) !important;padding-bottom:var(--space-11) !important}.py-12{padding-top:var(--space-12) !important;padding-bottom:var(--space-12) !important}.pt-0{padding-top:var(--space-0) !important}.pt-0\\.5{padding-top:var(--space-0-5) !important}.pt-1{padding-top:var(--space-1) !important}.pt-2{padding-top:var(--space-2) !important}.pt-3{padding-top:var(--space-3) !important}.pt-4{padding-top:var(--space-4) !important}.pt-5{padding-top:var(--space-5) !important}.pt-6{padding-top:var(--space-6) !important}.pt-7{padding-top:var(--space-7) !important}.pt-8{padding-top:var(--space-8) !important}.pt-9{padding-top:var(--space-9) !important}.pt-10{padding-top:var(--space-10) !important}.pt-11{padding-top:var(--space-11) !important}.pt-12{padding-top:var(--space-12) !important}.pr-0{padding-right:var(--space-0) !important}.pr-0\\.5{padding-right:var(--space-0-5) !important}.pr-1{padding-right:var(--space-1) !important}.pr-2{padding-right:var(--space-2) !important}.pr-3{padding-right:var(--space-3) !important}.pr-4{padding-right:var(--space-4) !important}.pr-5{padding-right:var(--space-5) !important}.pr-6{padding-right:var(--space-6) !important}.pr-7{padding-right:var(--space-7) !important}.pr-8{padding-right:var(--space-8) !important}.pr-9{padding-right:var(--space-9) !important}.pr-10{padding-right:var(--space-10) !important}.pr-11{padding-right:var(--space-11) !important}.pr-12{padding-right:var(--space-12) !important}.pb-0{padding-bottom:var(--space-0) !important}.pb-0\\.5{padding-bottom:var(--space-0-5) !important}.pb-1{padding-bottom:var(--space-1) !important}.pb-2{padding-bottom:var(--space-2) !important}.pb-3{padding-bottom:var(--space-3) !important}.pb-4{padding-bottom:var(--space-4) !important}.pb-5{padding-bottom:var(--space-5) !important}.pb-6{padding-bottom:var(--space-6) !important}.pb-7{padding-bottom:var(--space-7) !important}.pb-8{padding-bottom:var(--space-8) !important}.pb-9{padding-bottom:var(--space-9) !important}.pb-10{padding-bottom:var(--space-10) !important}.pb-11{padding-bottom:var(--space-11) !important}.pb-12{padding-bottom:var(--space-12) !important}.pl-0{padding-left:var(--space-0) !important}.pl-0\\.5{padding-left:var(--space-0-5) !important}.pl-1{padding-left:var(--space-1) !important}.pl-2{padding-left:var(--space-2) !important}.pl-3{padding-left:var(--space-3) !important}.pl-4{padding-left:var(--space-4) !important}.pl-5{padding-left:var(--space-5) !important}.pl-6{padding-left:var(--space-6) !important}.pl-7{padding-left:var(--space-7) !important}.pl-8{padding-left:var(--space-8) !important}.pl-9{padding-left:var(--space-9) !important}.pl-10{padding-left:var(--space-10) !important}.pl-11{padding-left:var(--space-11) !important}.pl-12{padding-left:var(--space-12) !important}.element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input,.element_input textarea{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder,.element_input textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-moz-placeholder,.element_input textarea::-moz-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input:-ms-input-placeholder,.element_input textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-ms-input-placeholder,.element_input textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::placeholder,.element_input textarea::placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.element_input input::-webkit-input-placeholder,.element_input textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8c8c8c);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #f6f6f6)}.input--state-primary{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-primary, #1e6bf1);z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary .input__container__label{color:var(--color-content-default, #282828)}.input--state-primary .input__container__label--pressed{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #282828)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-delete, #e60f0f);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #fabebe);box-shadow:0 0 0 2px var(--color-error, #fabebe)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-delete, #e60f0f);color:var(--color-content-default, #282828)}.input--state-success{border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success .input__icon{position:relative}.input--state-success .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-success, #84ebbc);z-index:0;border-radius:8px}.input--state-success:hover{border:1px solid var(--color-content-default, #282828);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-success.input--pressed{border:1px solid var(--color-content-default, #282828);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-success, #84ebbc);box-shadow:0 0 0 2px var(--color-success, #84ebbc)}.input--state-success .input__container__label{color:var(--color-content-default, #282828)}.input--state-success .input__container__label--pressed{color:var(--color-content-default, #282828)}.input--state-success .input__container__text{caret-color:var(--color-content-default, #282828);color:var(--color-content-default, #282828)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed;background:var(--color-surface-2, #ededed)}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:\"\";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-primary, #1e6bf1);z-index:0;opacity:50%;border-radius:8px}.input .icon-success{color:var(--color-success, #84ebbc);margin-left:4px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:var(--color-shadow-0, rgba(0, 0, 0, 0.04));border-radius:10px}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:var(--color-border-1, rgba(0, 0, 0, 0.2))}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #595959);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger .bds-icon{color:var(--color-delete, #e60f0f)}.input__message--danger .input__message__text{color:var(--color-delete, #e60f0f)}.input__editable{display:block}.input__editable--static{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer;position:relative}.input__editable--static::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.input__editable--static:focus-visible{outline:none}.input__editable--static:focus-visible::before{border-color:var(--color-focus, #c226fb)}.input__editable--static:hover .input__editable--static__typo{border:1px solid var(--color-primary, #1e6bf1)}.input__editable--static:hover .input__editable--static__icon{color:var(--color-primary, #1e6bf1)}.input__editable--static__typo{border:1px solid transparent;margin:0;padding:8px;border-radius:8px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:80%;color:var(--color-content-default, #282828)}.input__editable--static__icon{margin-left:8px;color:var(--color-content-ghost, #8c8c8c)}.input__editable--active{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.input__editable--active .element_input{min-width:120px;margin-right:4px}.input__editable--active .element_input.expanded{max-width:100%}.input__editable--active .element_input.fixed{max-width:140px}.input__editable--active .element_input.short input{font-size:1rem;line-height:0px}.input__editable--active .element_input.standard input{font-size:1.5rem;line-height:0px}.input__editable--active .element_input.tall input{font-size:2.5rem;line-height:0px}.input__editable--active .element_input::part(input-container){padding:4px 4px 5px 12px}.input__editable--active .element_input::part(input__message){min-width:180px}.input__editable--active bds-icon{cursor:pointer;position:relative}.input__editable--active bds-icon::before{content:\"\";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.input__editable--active bds-icon:focus-visible{outline:none}.input__editable--active bds-icon:focus-visible::before{border-color:var(--color-focus, #c226fb)}.input__editable--active__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:auto 0}.input__editable--active__icon--error{color:var(--color-delete, #e60f0f)}.input__editable--active__icon--error:hover{color:var(--color-delete, #e60f0f)}.input__editable--active__icon--checkball{color:var(--color-primary, #1e6bf1)}.input__editable--active__icon--checkball:hover{color:var(--color-primary, #1e6bf1)}.input__editable--active__icon--checkball--error{color:var(--color-content-ghost, #8c8c8c)}.input__editable--active__icon--checkball--error:hover{color:var(--color-content-ghost, #8c8c8c)}.input__editable--hidden{display:none}";

const InputEditable = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bdsInputEditableSave = createEvent(this, "bdsInputEditableSave", 7);
    this.bdsChange = createEvent(this, "bdsChange", 7);
    this.bdsInput = createEvent(this, "bdsInput", 7);
    this.bdsCancel = createEvent(this, "bdsCancel", 7);
    this.bdsFocus = createEvent(this, "bdsFocus", 7);
    this.bdsBlur = createEvent(this, "bdsBlur", 7);
    this.handleEditing = () => {
      this.toggleEditing();
    };
    this.toggleEditing = () => {
      this.isEditing = !this.isEditing;
    };
    this.handleSaveText = () => {
      const newValue = this.nativeInput.value;
      if (newValue.length > 0 && newValue.length >= this.minlength && !this.danger) {
        this.bdsInputEditableSave.emit({ value: newValue, oldValue: this.oldValue });
        this.oldValue = newValue;
        this.value = newValue;
        this.toggleEditing();
      }
    };
    this.changedInputValue = async (ev) => {
      const input = ev.target;
      this.checkValidity();
      if (input) {
        if (input.value.length < Number(this.minlength)) {
          this.isValid = false;
        }
        else {
          this.isValid = true;
        }
      }
      this.bdsInput.emit(ev);
      this.bdsChange.emit({ value: this.nativeInput.value, oldValue: this.oldValue });
    };
    this.onFocus = () => {
      this.isFocused = true;
      this.isPressed = true;
      this.bdsFocus.emit();
    };
    this.onBlur = () => {
      this.onBlurValidations();
      this.bdsBlur.emit();
      this.isPressed = false;
    };
    this.onClickWrapper = () => {
      this.onFocus();
      if (this.nativeInput) {
        this.nativeInput.focus();
      }
    };
    this.getExpand = () => {
      if (this.expand) {
        return 'expanded';
      }
      else {
        return 'fixed';
      }
    };
    this.oldValue = undefined;
    this.isEditing = false;
    this.isValid = true;
    this.isPressed = false;
    this.isFocused = false;
    this.validationMesage = '';
    this.validationDanger = false;
    this.size = 'standard';
    this.expand = false;
    this.dataTest = null;
    this.inputName = '';
    this.value = '';
    this.requiredErrorMessage = undefined;
    this.minlength = 0;
    this.minlengthErrorMessage = undefined;
    this.maxlength = undefined;
    this.errorMessage = '';
    this.successMessage = '';
    this.helperMessage = '';
    this.placeholder = '';
    this.danger = false;
    this.success = false;
    this.dtButtonEdit = null;
    this.dtButtonClose = null;
    this.dtButtonConfirm = null;
  }
  componentWillLoad() {
    this.oldValue = this.value;
  }
  onBlurValidations() {
    this.requiredValidation();
    (this.minlength || this.maxlength) && this.lengthValidation();
    this.checkValidity();
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
  checkValidity() {
    if (this.nativeInput.validity.valid) {
      this.validationDanger = false;
    }
  }
  handleKeyDownToggle(event) {
    if (event.key == 'Enter') {
      this.toggleEditing();
    }
  }
  handleKeyDownSave(event) {
    if (event.key == 'Enter') {
      this.handleSaveText();
    }
  }
  getFontSizeClass() {
    if (this.size == 'short') {
      return 'fs-16';
    }
    else if (this.size == 'standard') {
      return 'fs-24';
    }
    else if (this.size == 'tall') {
      return 'fs-40';
    }
    else {
      return 'fs-24';
    }
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
      return (h("div", { class: styles, part: "input__message" }, h("div", { class: "input__message__icon" }, h("bds-icon", { size: "x-small", name: icon, theme: "solid", color: "inherit" })), h("bds-typo", { class: "input__message__text", variant: "fs-12" }, message)));
    }
    return undefined;
  }
  render() {
    const variant = this.getFontSizeClass();
    const inputExpand = this.getExpand();
    return (h(Host, null, h("div", { class: "input__editable" }, h("div", { class: { 'input__editable--static': true, 'input__editable--hidden': this.isEditing }, onClick: this.handleEditing, "data-test": this.dtButtonEdit, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this) }, h("bds-typo", { tag: "span", part: "input__editable--static__typo", class: "input__editable--static__typo", variant: variant }, this.value), h("bds-icon", { key: "edit-icon", class: "input__editable--static__icon", name: "edit" })), h("div", { class: { 'input__editable--active': true, 'input__editable--hidden': !this.isEditing } }, h("div", { class: { element_input: true, [inputExpand]: true, [this.size]: true } }, h("div", { class: {
        input: true,
        select: true,
        'input--state-primary': !this.danger && !this.validationDanger,
        'input--state-danger': this.danger || this.validationDanger,
        'input--state-success': this.success,
        'input--pressed': this.isPressed,
      }, onClick: this.onClickWrapper }, h("div", { class: "input__container" }, h("input", { class: { input__container__text: true }, ref: (input) => (this.nativeInput = input), minLength: this.minlength, maxLength: this.maxlength, name: this.inputName, onBlur: this.onBlur, onFocus: this.onFocus, onInput: this.changedInputValue, placeholder: this.placeholder, value: this.value, required: true, part: "input", "data-test": this.dataTest })), this.success && h("bds-icon", { class: "icon-success", name: "checkball", theme: "solid", size: "xxx-small" })), this.renderMessage()), h("div", { class: "input__editable--active__icon" }, h("bds-icon", { key: "error-icon", class: "input__editable--active__icon--error", theme: "solid", name: "error", onClick: this.handleEditing, tabindex: "0", onKeyDown: this.handleKeyDownToggle.bind(this), dataTest: this.dtButtonClose }), h("bds-icon", { key: "checkball-icon", class: {
        'input__editable--active__icon--checkball': true,
        'input__editable--active__icon--checkball--error': !this.isValid,
      }, theme: "solid", name: "checkball", onClick: this.handleSaveText, tabindex: "0", onKeyDown: this.handleKeyDownSave.bind(this), dataTest: this.dtButtonConfirm }))))));
  }
  get el() { return getElement(this); }
};
InputEditable.style = inputEditableCss;

export { InputEditable as bds_input_editable };
