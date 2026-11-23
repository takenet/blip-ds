import { t as transformTag, r as registerInstance, c as createEvent, f as forceUpdate, h, H as Host, g as getElement } from './index-B3G05Lxx.js';
import { w as warnOnce } from './deprecation-B4L0JRQZ.js';
import { U as UaiFormControl } from './uai-form-control-BkRP7pRQ.js';
import { U as UaiOverlay } from './uai-overlay-BCD7g-De.js';
import { t as todayIso, o as outOfRange, d as dateForKey, c as clampIso, p as parseIso, a as addMonths, b as toIso, g as groupDigits, e as displayToIso, i as isoToDisplay, r as regionalDateFormat, C as CalendarHeader, Y as YEARS_PER_PAGE, f as CalendarDays, h as CalendarList } from './uai-input-date-format-BkcYZfwW.js';

const TEXTS = {
    pt_BR: {
        label: 'Data',
        open: 'Abrir calendário',
        dialog: 'Escolher data',
        date: 'Data',
        start: 'Começa',
        end: 'Termina',
        reset: 'Redefinir',
        apply: 'Aplicar',
        invalid: 'Data fora do período permitido.',
    },
    en_US: {
        label: 'Date',
        open: 'Open calendar',
        dialog: 'Choose date',
        date: 'Date',
        start: 'Starts',
        end: 'Ends',
        reset: 'Reset',
        apply: 'Apply',
        invalid: 'Date outside the allowed period.',
    },
    es_ES: {
        label: 'Fecha',
        open: 'Abrir calendario',
        dialog: 'Elegir fecha',
        date: 'Fecha',
        start: 'Comienza',
        end: 'Termina',
        reset: 'Restablecer',
        apply: 'Aplicar',
        invalid: 'Fecha fuera del período permitido.',
    },
};
const datepickerTexts = (language) => TEXTS[language];

const uaiDatepickerCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-datepicker-width, 100%)}:host(.uai-datepicker--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-datepicker--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022)}:host(.uai-datepicker--disabled){--input-background:var(--uai-surface-muted, #f2f3f3);--input-border:var(--uai-border-default, #e4e6e7);--input-content:var(--uai-content-disabled, #848e94);--input-label:var(--uai-content-disabled, #848e94);--input-message:var(--uai-content-disabled, #848e94)}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.input__label,.input__message,.input__value{--uai-typo-color:currentColor}.input__label{color:var(--input-label)}.input__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.input__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);width:100%;height:var(--input-height);margin:0;padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);outline:none;background-color:var(--input-background);color:var(--input-content);font:inherit;text-align:left;cursor:pointer;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.input__control{-webkit-transition:none;transition:none}}.input__control:focus-visible,:host(.uai-datepicker--open) .input__control{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}.input__control:hover:not(:disabled){--input-border:var(--uai-content-secondary, #5f676d)}.input__control:disabled{cursor:not-allowed}@media (forced-colors: active){.input__control:focus-visible{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(.uai-datepicker--danger) .input__control:hover:not(:disabled){--input-border:var(--uai-feedback-error, #cf0022)}.input__value{-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.input__value--placeholder{color:var(--uai-content-placeholder, #adb4b8)}:host(.uai-datepicker--disabled) .input__value--placeholder{color:var(--uai-content-disabled, #848e94)}.input__icon,.input__feedback{-ms-flex:none;flex:none}.input__feedback{color:var(--uai-feedback-error, #cf0022)}.panel{--uai-overlay-gap:var(--uai-spacing-2xs, 0.25rem);--uai-overlay-margin:var(--uai-spacing-xs, 0.5rem);position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;border:0;overflow:auto;background:transparent;color:inherit;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}.panel:not(.uai-overlay--open){display:none}.panel.uai-overlay--open{opacity:1}@starting-style{.panel.uai-overlay--open{opacity:0}}@media (prefers-reduced-motion: reduce){.panel{-webkit-transition:none;transition:none}}.panel{border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-xl, 1rem);background:var(--uai-surface-paper, #ffffff);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));color:var(--uai-content-primary, #242729);overflow-x:hidden;-webkit-transform:scale(0.8);transform:scale(0.8);-webkit-transform-origin:top left;transform-origin:top left;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}.panel[data-align=end]{-webkit-transform-origin:top right;transform-origin:top right}.panel[data-side=top]{-webkit-transform-origin:bottom left;transform-origin:bottom left}.panel[data-side=top][data-align=end]{-webkit-transform-origin:bottom right;transform-origin:bottom right}.panel.uai-overlay--open{-webkit-transform:none;transform:none}@starting-style{.panel.uai-overlay--open{-webkit-transform:scale(0.8);transform:scale(0.8)}}@media (prefers-reduced-motion: reduce){.panel{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}@media (forced-colors: active){.panel{border-color:CanvasText}}.panel__months{display:-ms-flexbox;display:flex;border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.panel__column{display:-ms-flexbox;display:flex;-ms-flex:1 1 0px;flex:1 1 0;-ms-flex-direction:column;flex-direction:column;min-width:0}.month__body{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-md, 1rem);padding:var(--uai-spacing-md, 1rem)}.month__body .calendar__body{padding:0}.field{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem);width:calc(7 * var(--uai-sizing-xl, 2rem))}.field__label{--uai-typo-color:currentColor;padding-left:var(--uai-spacing-xs, 0.5rem);color:var(--uai-content-primary, #242729)}.field__input{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:var(--uai-control-height-medium, 2.5rem);margin:0;padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:var(--uai-radius-lg, 0.75rem);outline:none;background:var(--uai-surface-paper, #ffffff);color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem);-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.field__input{-webkit-transition:none;transition:none}}.field__input::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.field__input::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.field__input:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.field__input::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.field__input::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.field__input:hover{border-color:var(--uai-content-secondary, #5f676d)}.field__input:focus{border-color:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}.field--danger .field__input{border-color:var(--uai-feedback-error, #cf0022)}.panel__message{--uai-typo-color:currentColor;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-md, 1rem) var(--uai-spacing-md, 1rem) 0;color:var(--uai-content-secondary, #5f676d)}.panel__message--info{color:var(--uai-feedback-info, #0073e5)}.panel__message--success{color:var(--uai-feedback-success, #3da329)}.panel__message--warning{color:var(--uai-feedback-warning, #ff8000)}.panel__message--error{color:var(--uai-feedback-error, #cf0022)}.panel__footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-md, 1rem)}@-webkit-keyframes uai-calendar-from-next{from{opacity:0;-webkit-transform:translateX(var(--uai-spacing-lg, 1.5rem));transform:translateX(var(--uai-spacing-lg, 1.5rem))}}@keyframes uai-calendar-from-next{from{opacity:0;-webkit-transform:translateX(var(--uai-spacing-lg, 1.5rem));transform:translateX(var(--uai-spacing-lg, 1.5rem))}}@-webkit-keyframes uai-calendar-from-previous{from{opacity:0;-webkit-transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)));transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)))}}@keyframes uai-calendar-from-previous{from{opacity:0;-webkit-transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)));transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)))}}@-webkit-keyframes uai-calendar-view{from{opacity:0;-webkit-transform:scale(0.96);transform:scale(0.96)}}@keyframes uai-calendar-view{from{opacity:0;-webkit-transform:scale(0.96);transform:scale(0.96)}}@-webkit-keyframes uai-calendar-pick{from{-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes uai-calendar-pick{from{-webkit-transform:scale(0.8);transform:scale(0.8)}}.calendar__body{-webkit-animation-duration:var(--uai-duration-moderate, 200ms);animation-duration:var(--uai-duration-moderate, 200ms);-webkit-animation-timing-function:var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));animation-timing-function:var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}.calendar__body--next{-webkit-animation-name:uai-calendar-from-next;animation-name:uai-calendar-from-next}.calendar__body--previous{-webkit-animation-name:uai-calendar-from-previous;animation-name:uai-calendar-from-previous}.calendar__body--view{-webkit-animation-name:uai-calendar-view;animation-name:uai-calendar-view}@media (prefers-reduced-motion: reduce){.calendar__body{-webkit-animation:none;animation:none}}.calendar__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-md, 1rem);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.calendar__pickers{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-xs, 0.5rem)}.calendar__arrow,.calendar__picker,.calendar__day,.calendar__option{--uai-typo-color:currentColor;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:0;border:0;background:transparent;color:var(--uai-content-primary, #242729);font:inherit;cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.calendar__arrow,.calendar__picker,.calendar__day,.calendar__option{-webkit-transition:none;transition:none}}.calendar__arrow:focus-visible,.calendar__picker:focus-visible,.calendar__day:focus-visible,.calendar__option:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.calendar__arrow:hover:not(:disabled):not([aria-disabled=true]),.calendar__picker:hover:not(:disabled):not([aria-disabled=true]),.calendar__day:hover:not(:disabled):not([aria-disabled=true]),.calendar__option:hover:not(:disabled):not([aria-disabled=true]){background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.calendar__arrow:disabled,.calendar__arrow[aria-disabled=true],.calendar__picker:disabled,.calendar__picker[aria-disabled=true],.calendar__day:disabled,.calendar__day[aria-disabled=true],.calendar__option:disabled,.calendar__option[aria-disabled=true]{color:var(--uai-content-disabled, #848e94);cursor:not-allowed}.calendar__arrow{-ms-flex:none;flex:none;width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-xl, 2rem);border-radius:var(--uai-radius-lg, 0.75rem)}.calendar__arrow--hidden{visibility:hidden}.calendar__picker{gap:var(--uai-spacing-2xs, 0.25rem);height:var(--uai-sizing-lg, 1.5rem);padding:0 var(--uai-spacing-2xs, 0.25rem);border-radius:var(--uai-radius-md, 0.5rem)}.calendar__picker ${transformTag("uai-icon")}{-webkit-transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.calendar__picker ${transformTag("uai-icon")}{-webkit-transition:none;transition:none}}.calendar__picker--open ${transformTag("uai-icon")}{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.calendar__body{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-md, 1rem);padding:var(--uai-spacing-md, 1rem)}.calendar__grid{border-collapse:separate;border-spacing:0 var(--uai-spacing-3xs, 0.125rem);margin:calc(-1 * var(--uai-spacing-3xs, 0.125rem)) 0}.calendar__weekday{--uai-typo-color:currentColor;width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-xl, 2rem);padding:0;color:var(--uai-content-secondary, #5f676d);font-weight:inherit;text-align:center}.calendar__cell{position:relative;width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-xl, 2rem);padding:0}.calendar__cell--between{background:var(--uai-surface-muted, #f2f3f3)}.calendar__cell--start,.calendar__cell--end{background:linear-gradient(to var(--calendar-fill-side), transparent 50%, var(--uai-surface-muted, #f2f3f3) 50%)}.calendar__cell--start{--calendar-fill-side:right}.calendar__cell--end{--calendar-fill-side:left}.calendar__cell--start.calendar__cell--end{background:none}.calendar__cell--between.calendar__cell--week-start{border-top-left-radius:var(--uai-radius-lg, 0.75rem);border-bottom-left-radius:var(--uai-radius-lg, 0.75rem)}.calendar__cell--between.calendar__cell--week-end{border-top-right-radius:var(--uai-radius-lg, 0.75rem);border-bottom-right-radius:var(--uai-radius-lg, 0.75rem)}.calendar__day{position:relative;width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-xl, 2rem);border-radius:var(--uai-radius-lg, 0.75rem)}.calendar__day--today{font-weight:var(--uai-font-weight-semibold, 600);-webkit-box-shadow:inset 0 0 0 var(--uai-border-width-default, 1px) var(--uai-border-input, #adb4b8);box-shadow:inset 0 0 0 var(--uai-border-width-default, 1px) var(--uai-border-input, #adb4b8)}.calendar__day--selected,.calendar__day--selected:hover:not(:disabled):not([aria-disabled=true]){background:var(--uai-action-primary-default, #242729);color:var(--uai-action-primary-foreground, #ffffff)}.calendar__day--selected{-webkit-animation:uai-calendar-pick var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));animation:uai-calendar-pick var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.calendar__day--selected{-webkit-animation:none;animation:none}}@media (forced-colors: active){.calendar__day--selected{outline:var(--uai-border-width-thick, 2px) solid Highlight}}.calendar__list{display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--uai-spacing-xs, 0.5rem);min-width:calc(7 * var(--uai-sizing-xl, 2rem))}.calendar__option{height:var(--uai-control-height-short, 2rem);padding:0 var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-lg, 0.75rem)}.calendar__option--current,.calendar__option--current:hover:not(:disabled){background:var(--uai-action-primary-default, #242729);color:var(--uai-action-primary-foreground, #ffffff)}`;

const TAG = 'uai-datepicker';
const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const TYPES = ['single', 'period'];
const LEGACY_DATE = /^(\d{2})\/(\d{2})\/(\d{4})$/;
const BANNER_ICONS = {
    system: 'info',
    info: 'info',
    success: 'checkball',
    warning: 'warning',
    error: 'error',
};
let instances = 0;
const UaiDatepicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiStartDate = createEvent(this, "uaiStartDate");
        this.uaiEndDate = createEvent(this, "uaiEndDate");
        this.uaiConcludeDatepicker = createEvent(this, "uaiConcludeDatepicker");
        this.uaiEmptyConcludeDatepicker = createEvent(this, "uaiEmptyConcludeDatepicker");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.isOpen = false;
        this.view = 'days';
        /** The month on the left (or the only month), as an ISO date on its first day. */
        this.shownMonth = todayIso().slice(0, 8) + '01';
        /** The day with the focus in the grids. */
        this.focusedDate = todayIso();
        this.firstYear = 0;
        this.slide = null;
        /** The draft: what the person chooses before applying. */
        this.draftStart = null;
        this.draftEnd = null;
        /** What the date fields of the panel show while being typed. */
        this.typed = { start: null, end: null };
        this.hovered = null;
        this.disabledByForm = false;
        this.focusGrid = false;
        this.baseId = `uai-datepicker-${++instances}`;
        /** One date or a period. Can be one of: 'single' (default), 'period'. */
        this.typeOfDate = 'single';
        /** Message shown inside the panel, above the buttons, such as a rule about the period. */
        this.message = null;
        /** Tone of the message inside the panel. Can be one of: 'system', 'info', 'success', 'warning' (default), 'error'. */
        this.variantBanner = 'warning';
        /** Language of the texts and of the calendar. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'. */
        this.language = 'pt_BR';
        /** If true, the field cannot be used and is left out of the form data. */
        this.disabled = false;
        /** Chosen date, or the start of the period, as ISO YYYY-MM-DD (the legacy DD/MM/YYYY still works, with a warning). */
        this.valueDateSelected = null;
        /** End of the period, as ISO YYYY-MM-DD (the legacy DD/MM/YYYY still works, with a warning). */
        this.valueEndDateSelected = null;
        /**
         * Side and alignment of the panel. Can be 'auto' (default) or a side and an edge such as 'bottom-left',
         * 'bottom-right', 'top-left', 'top-right'. 'top-center' and 'bottom-center' keep only the side; the right and
         * left sides of the legacy fall back to 'auto'.
         */
        this.positionOptions = 'auto';
        /** Height of the field. Can be one of: 'short', 'medium' (default). */
        this.size = 'medium';
        /** Message below the field that helps to fill it. */
        this.helperMessage = '';
        /** If true, shows the error state and errorMessage. */
        this.danger = false;
        /** Message below the field while danger is true. */
        this.errorMessage = '';
        /** Accessible name of the field when the visible label is not enough. */
        this.ariaLabel = null;
        /** Data test id of the start date field of the panel (or the only one). */
        this.dtInputStart = null;
        /** Data test id of the end date field of the panel. */
        this.dtInputEnd = null;
        /** Data test id of the field that opens the panel. Kept from bds-datepicker, where it was the outside area. */
        this.dtOutzone = null;
        /** Data test id of the previous month button. */
        this.dtButtonPrev = null;
        /** Data test id of the next month button. */
        this.dtButtonNext = null;
        /** Data test id of the month button. */
        this.dtSelectMonth = null;
        /** Data test id of the year button. */
        this.dtSelectYear = null;
        /** Data test id of the Reset button. */
        this.dtButtonClear = null;
        /** Data test id of the Apply button. */
        this.dtButtonConfirm = null;
        this.onOverlayClose = (reason) => {
            var _a;
            if (this.isOpen)
                this.isOpen = false;
            if (reason === 'escape')
                (_a = this.trigger) === null || _a === void 0 ? void 0 : _a.focus();
        };
        // ---- choosing ------------------------------------------------------------------------------
        // A single date is the start. In a period, a click starts it, the next click after the start ends it, and a click
        // before the start (or after a complete period) starts again.
        this.pick = (iso) => {
            if (outOfRange(iso, this.min, this.max))
                return;
            this.focusedDate = iso;
            this.typed = { start: null, end: null };
            if (!this.isPeriod || !this.draftStart || this.draftEnd || iso < this.draftStart) {
                this.setDraft(iso, null);
            }
            else {
                this.setDraft(this.draftStart, iso);
            }
        };
        this.apply = () => {
            var _a;
            if (!this.canApply)
                return;
            this.valueDateSelected = this.draftStart;
            this.valueEndDateSelected = this.isPeriod ? this.draftEnd : null;
            if (this.draftStart) {
                this.uaiConcludeDatepicker.emit(this.isPeriod ? { startDate: this.draftStart, endDate: this.draftEnd } : { startDate: this.draftStart });
            }
            else {
                this.uaiEmptyConcludeDatepicker.emit();
            }
            this.closePanel();
            (_a = this.trigger) === null || _a === void 0 ? void 0 : _a.focus();
        };
        this.reset = () => {
            this.setDraft(null, null);
            this.typed = { start: null, end: null };
        };
        this.rangeOf = (iso) => {
            var _a;
            if (!this.isPeriod || !this.draftStart)
                return null;
            const end = (_a = this.draftEnd) !== null && _a !== void 0 ? _a : (this.hovered && this.hovered > this.draftStart ? this.hovered : null);
            if (!end || end === this.draftStart)
                return null;
            if (iso === this.draftStart)
                return 'start';
            if (iso === end)
                return 'end';
            return iso > this.draftStart && iso < end ? 'between' : null;
        };
        // ---- keyboard and views --------------------------------------------------------------------
        this.onDayKeyDown = (event) => {
            const target = dateForKey(this.focusedDate, event);
            if (target) {
                event.preventDefault();
                this.focusedDate = clampIso(target, this.min, this.max);
                this.showMonthOf(this.focusedDate);
                this.focusGrid = true;
                forceUpdate(this.el);
            }
            else if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.pick(this.focusedDate);
            }
        };
        this.onView = (view, month) => {
            this.shownMonth = month;
            if (view === 'years')
                this.firstYear = parseIso(month).year - 4;
            this.slide = 'view';
            this.view = view;
        };
        // A month or year picked in the pickers of the right month moves the left one too, a month before.
        this.pickMonth = (month, offset) => {
            const { year } = parseIso(addMonths(this.shownMonth, offset));
            this.shownMonth = addMonths(toIso(year, month, 1), -offset);
            this.slide = 'view';
            this.view = 'days';
        };
        this.pickYear = (year, offset) => {
            const { month } = parseIso(addMonths(this.shownMonth, offset));
            this.shownMonth = addMonths(toIso(year, month, 1), -offset);
            this.slide = 'view';
            this.view = 'months';
        };
    }
    /** Opens the panel. */
    async open() {
        this.openPanel(false);
    }
    /** Closes the panel, discarding the draft. */
    async close() {
        this.closePanel();
    }
    /** Clears the chosen date or period. */
    async clear() {
        this.valueDateSelected = null;
        this.valueEndDateSelected = null;
        this.resetDraft();
    }
    valueChanged() {
        this.syncFormValue();
    }
    positionChanged() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.setPlacement(this.placement);
    }
    // The focus moving to something outside the field and the panel closes it, discarding the draft.
    onFocusOut(event) {
        var _a;
        const next = event.relatedTarget;
        if (next && !this.el.contains(next) && !((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.contains(next)))
            this.closePanel();
    }
    componentWillLoad() {
        var _a;
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            const initial = { start: this.startValue, end: this.endValue };
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.formValue(initial.start, initial.end),
                onReset: () => {
                    this.valueDateSelected = initial.start;
                    this.valueEndDateSelected = initial.end;
                },
                onDisabledChange: (disabled) => {
                    queueMicrotask(() => {
                        var _a, _b;
                        const formDisabled = (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : disabled;
                        if (!this.disabled && this.disabledByForm !== formDisabled)
                            this.disabledByForm = formDisabled;
                        if (formDisabled)
                            this.closePanel();
                    });
                },
            });
            this.syncFormValue();
        }
    }
    componentDidLoad() {
        if (this.trigger && this.panel) {
            this.overlay = new UaiOverlay(Object.assign({ trigger: this.trigger, panel: this.panel, onClose: this.onOverlayClose }, this.placement));
        }
    }
    componentDidRender() {
        var _a, _b, _c;
        if (this.isOpen && this.overlay && !this.overlay.isOpen)
            this.overlay.open();
        if (this.isOpen)
            (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.update();
        if (this.isOpen && this.focusGrid) {
            this.focusGrid = false;
            (_c = (_b = this.panel) === null || _b === void 0 ? void 0 : _b.querySelector(`[data-iso="${this.focusedDate}"]`)) === null || _c === void 0 ? void 0 : _c.focus();
        }
    }
    disconnectedCallback() {
        var _a;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.destroy();
    }
    formResetCallback() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.reset();
    }
    formDisabledCallback(disabled) {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setDisabled(disabled);
    }
    // ---- values --------------------------------------------------------------------------------
    // ISO dates from the props: ISO as is, the legacy DD/MM/YYYY converted with a warning, anything else ignored.
    iso(value, prop) {
        if (!value)
            return null;
        if (parseIso(value))
            return value;
        const legacy = LEGACY_DATE.exec(value);
        if (legacy) {
            const iso = `${legacy[3]}-${legacy[2]}-${legacy[1]}`;
            if (parseIso(iso)) {
                return iso;
            }
        }
        warnOnce(TAG, `${prop}-invalid`, `${prop} must be an ISO date (YYYY-MM-DD).`);
        return null;
    }
    get startValue() {
        return this.iso(this.valueDateSelected, 'valueDateSelected');
    }
    get endValue() {
        return this.isPeriod ? this.iso(this.valueEndDateSelected, 'valueEndDateSelected') : null;
    }
    get min() {
        return this.iso(this.startDateLimit, 'startDateLimit');
    }
    get max() {
        return this.iso(this.endDateLimit, 'endDateLimit');
    }
    get isPeriod() {
        if (TYPES.includes(this.typeOfDate))
            return this.typeOfDate === 'period';
        return false;
    }
    get languageValue() {
        if (LANGUAGES.includes(this.language))
            return this.language;
        return 'pt_BR';
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        return 'medium';
    }
    get placement() {
        const position = String(this.positionOptions || 'auto');
        if (position === 'auto')
            return {};
        const [side, edge] = position.split('-');
        if (side !== 'top' && side !== 'bottom') {
            return {};
        }
        const align = edge === 'left' || edge === 'start' ? 'start' : edge === 'right' || edge === 'end' ? 'end' : undefined;
        return { side, align };
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    formValue(start, end) {
        if (!start)
            return null;
        if (!this.isPeriod)
            return start;
        if (!this.name)
            return null;
        const data = new FormData();
        data.append(this.name, start);
        if (end)
            data.append(this.name, end);
        return data;
    }
    syncFormValue() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.formValue(this.startValue, this.endValue));
    }
    // ---- panel ---------------------------------------------------------------------------------
    resetDraft() {
        this.draftStart = this.startValue;
        this.draftEnd = this.endValue;
        this.typed = { start: null, end: null };
        this.hovered = null;
    }
    // The panel starts on the chosen date (or today, within the limits); a period shows it and the next month.
    openPanel(focusGrid) {
        var _a;
        if (this.isDisabled)
            return;
        if (!this.isOpen) {
            this.resetDraft();
            const start = clampIso((_a = this.draftStart) !== null && _a !== void 0 ? _a : todayIso(), this.min, this.max);
            this.focusedDate = start;
            this.shownMonth = this.firstOfMonth(start);
            if (this.isPeriod && this.max && this.firstOfMonth(this.max) === this.shownMonth) {
                this.shownMonth = addMonths(this.shownMonth, -1);
            }
            this.view = 'days';
            this.slide = null;
            this.isOpen = true;
        }
        this.focusGrid = focusGrid;
        if (focusGrid)
            forceUpdate(this.el);
    }
    closePanel(reason = 'api') {
        var _a;
        if (!this.isOpen)
            return;
        this.isOpen = false;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close(reason);
    }
    firstOfMonth(iso) {
        return `${iso.slice(0, 8)}01`;
    }
    get monthsShown() {
        return this.isPeriod ? 2 : 1;
    }
    // Shows a month: the grids move only when it is not already in view, sliding from the side it comes from.
    showMonthOf(iso) {
        const target = this.firstOfMonth(iso);
        const last = addMonths(this.shownMonth, this.monthsShown - 1);
        if (target >= this.shownMonth && target <= last)
            return;
        const next = target > last ? addMonths(target, 1 - this.monthsShown) : target;
        this.slide = next > this.shownMonth ? 'next' : 'previous';
        this.shownMonth = next;
    }
    turn(months) {
        this.slide = months > 0 ? 'next' : 'previous';
        this.shownMonth = addMonths(this.shownMonth, months);
    }
    setDraft(start, end) {
        if (start !== this.draftStart)
            this.uaiStartDate.emit({ value: start });
        if (this.isPeriod && end !== this.draftEnd)
            this.uaiEndDate.emit({ value: end });
        this.draftStart = start;
        this.draftEnd = end;
    }
    get canApply() {
        return !this.isPeriod || !this.draftStart || !!this.draftEnd;
    }
    // ---- date fields of the panel --------------------------------------------------------------
    onTyped(edge, event) {
        const input = event.target;
        const digits = input.value.replace(/\D/g, '').slice(0, 8);
        const display = groupDigits(digits);
        input.value = display;
        this.typed = Object.assign(Object.assign({}, this.typed), { [edge]: display });
        const iso = displayToIso(digits);
        if (!iso || outOfRange(iso, this.min, this.max))
            return;
        if (edge === 'start')
            this.setDraft(iso, this.draftEnd && this.draftEnd >= iso ? this.draftEnd : null);
        else if (this.draftStart && iso >= this.draftStart)
            this.setDraft(this.draftStart, iso);
        this.focusedDate = iso;
        this.showMonthOf(iso);
    }
    fieldText(edge) {
        const typed = this.typed[edge];
        if (typed !== null)
            return typed;
        return isoToDisplay(edge === 'start' ? this.draftStart : this.draftEnd);
    }
    fieldInvalid(edge) {
        const typed = this.typed[edge];
        if (!typed)
            return false;
        const iso = displayToIso(typed.replace(/\D/g, ''));
        return typed.replace(/\D/g, '').length === 8 && (!iso || outOfRange(iso, this.min, this.max));
    }
    // ---- render --------------------------------------------------------------------------------
    renderField(edge, label, dataTest) {
        const id = `${this.baseId}-${edge}`;
        const invalid = this.fieldInvalid(edge);
        return (h("div", { class: { field: true, 'field--danger': invalid } }, h("label", { class: "field__label", for: id }, h("uai-typo", { variant: "caption", bold: "semibold", tag: "span", margin: false }, label)), h("input", { id: id, class: "field__input", part: "date-input", type: "text", inputMode: "numeric", autocomplete: "off", maxLength: regionalDateFormat().placeholder.length, placeholder: regionalDateFormat().placeholder, value: this.fieldText(edge), "aria-invalid": invalid ? 'true' : null, "data-test": dataTest, onInput: (event) => this.onTyped(edge, event), onKeyDown: (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    this.apply();
                }
            } })));
    }
    renderMonth(offset) {
        const language = this.languageValue;
        const month = addMonths(this.shownMonth, offset);
        const { year, month: monthIndex } = parseIso(month);
        const min = parseIso(this.min);
        const max = parseIso(this.max);
        const last = this.monthsShown - 1;
        const position = this.view === 'days' ? year * 12 + monthIndex : year;
        const limit = (date) => (this.view === 'days' ? date.year * 12 + date.month : date.year);
        const atMin = !!min && (this.view === 'years' ? this.firstYear <= min.year : position - offset <= limit(min));
        const atMax = !!max && (this.view === 'years' ? this.firstYear + YEARS_PER_PAGE - 1 >= max.year : position + (last - offset) >= limit(max));
        return (h("div", { class: "month" }, h(CalendarHeader, { year: year, month: monthIndex, view: this.view, language: language, showPrevious: offset === 0, showNext: offset === last, disablePrevious: atMin, disableNext: atMax, onPrevious: () => (this.view === 'years' ? ((this.firstYear -= YEARS_PER_PAGE), (this.slide = 'previous')) : this.turn(this.view === 'months' ? -12 : -1)), onNext: () => (this.view === 'years' ? ((this.firstYear += YEARS_PER_PAGE), (this.slide = 'next')) : this.turn(this.view === 'months' ? 12 : 1)), onView: (view) => this.onView(view, addMonths(month, -offset)), dataTest: { previous: this.dtButtonPrev, next: this.dtButtonNext, month: this.dtSelectMonth, year: this.dtSelectYear } })));
    }
    renderBody(offset) {
        var _a, _b, _c, _d;
        const language = this.languageValue;
        const month = addMonths(this.shownMonth, offset);
        const { year, month: monthIndex } = parseIso(month);
        const texts = datepickerTexts(language);
        const edge = offset === 0 ? 'start' : 'end';
        const key = this.view === 'years' ? `years-${this.firstYear}` : this.view === 'months' ? `months-${year}` : `days-${month}`;
        return (h("div", { class: "month__body" }, this.renderField(edge, this.isPeriod ? (edge === 'start' ? texts.start : texts.end) : texts.date, edge === 'start' ? this.dtInputStart : this.dtInputEnd), h("div", { key: key, class: { calendar__body: true, [`calendar__body--${this.slide}`]: !!this.slide } }, this.view === 'days' ? (h(CalendarDays, { year: year, month: monthIndex, language: language, focused: this.focusedDate, min: (_a = this.min) !== null && _a !== void 0 ? _a : undefined, max: (_b = this.max) !== null && _b !== void 0 ? _b : undefined, idPrefix: `${this.baseId}-day`, isSelected: (iso) => iso === this.draftStart || iso === this.draftEnd, rangeOf: this.rangeOf, onPick: this.pick, onKeyDown: this.onDayKeyDown, onHover: (iso) => {
                if (this.isPeriod && this.draftStart && !this.draftEnd)
                    this.hovered = iso;
            } })) : (h(CalendarList, { kind: this.view, year: year, month: monthIndex, language: language, min: (_c = this.min) !== null && _c !== void 0 ? _c : undefined, max: (_d = this.max) !== null && _d !== void 0 ? _d : undefined, firstYear: this.firstYear, onPick: (value) => (this.view === 'months' ? this.pickMonth(value, offset) : this.pickYear(value, offset)) })))));
    }
    renderPanel() {
        if (!this.isOpen)
            return null;
        const texts = datepickerTexts(this.languageValue);
        const offsets = this.isPeriod ? [0, 1] : [0];
        const variant = Object.keys(BANNER_ICONS).includes(this.variantBanner) ? this.variantBanner : 'warning';
        return [
            h("div", { class: "panel__months" }, offsets.map((offset) => (h("div", { class: "panel__column" }, this.renderMonth(offset), this.renderBody(offset))))),
            this.message && (h("div", { class: `panel__message panel__message--${variant}`, part: "message", role: "status" }, h("uai-icon", { name: BANNER_ICONS[variant], size: "small" }), h("uai-typo", { variant: "caption", tag: "span", margin: false }, this.message))),
            h("div", { class: "panel__footer" }, h("uai-button", { variant: "outline", color: "content", size: "medium", "data-test": this.dtButtonClear, onUaiClick: this.reset }, texts.reset), h("uai-button", { variant: "solid", color: "primary", size: "medium", "data-test": this.dtButtonConfirm, disabled: !this.canApply, onUaiClick: this.apply }, texts.apply)),
        ];
    }
    render() {
        var _a, _b;
        const disabled = this.isDisabled;
        const texts = datepickerTexts(this.languageValue);
        const label = (_a = this.label) !== null && _a !== void 0 ? _a : texts.label;
        const start = this.startValue;
        const end = this.endValue;
        const shown = start ? (end ? `${isoToDisplay(start)} – ${isoToDisplay(end)}` : isoToDisplay(start)) : '';
        const placeholder = (_b = this.placeholder) !== null && _b !== void 0 ? _b : (this.isPeriod ? `${regionalDateFormat().placeholder} – ${regionalDateFormat().placeholder}` : regionalDateFormat().placeholder);
        const message = this.danger ? this.errorMessage : this.helperMessage;
        const panelId = `${this.baseId}-panel`;
        return (h(Host, { key: 'ae0b2a0b26cf47c361cdb2616a58047c6bd20ef4', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-datepicker--size-${this.sizeValue}`]: true,
                'uai-datepicker--danger': this.danger,
                'uai-datepicker--disabled': disabled,
                'uai-datepicker--open': this.isOpen,
                'uai-datepicker--period': this.isPeriod,
            } }, h("div", { key: 'ce89dd99c56d2f09670fdc934b85e72ff884354a', class: "input" }, label && (h("label", { key: '0bd21102576f33b065091728f4b71ff7c1c7341f', class: "input__label", for: `${this.baseId}-trigger` }, h("uai-typo", { key: '12f4a83ab230684a30d1f1843b72170c5df7522f', variant: "caption", bold: "semibold", tag: "span", margin: false }, label))), h("button", { key: '1e5923b6d2027b29abc1202a6ff29ad8cafa27cb', id: `${this.baseId}-trigger`, type: "button", ref: (trigger) => (this.trigger = trigger), class: "input__control", part: "input-container", "aria-haspopup": "dialog", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": panelId, "aria-label": this.ariaLabel || null, "aria-invalid": this.danger ? 'true' : null, "aria-describedby": message ? `${this.baseId}-message` : null, disabled: disabled, "data-test": this.dtOutzone, onClick: () => (this.isOpen ? this.closePanel() : this.openPanel(false)), onKeyDown: (event) => {
                if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    this.openPanel(true);
                }
            } }, h("uai-typo", { key: 'eb1f964c43dfa78dc42a4f10c9533f6a9bd3a427', class: { input__value: true, 'input__value--placeholder': !shown }, variant: "body-base", tag: "span", margin: false }, shown || placeholder), this.danger && h("uai-icon", { key: '8b0e66d1780af2b479ea9027333a8ce7ba71f09b', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), h("uai-icon", { key: '599ee0161c3a2ba6714636a785b2680d7fd59788', class: "input__icon", name: "calendar", size: "medium", "aria-hidden": "true" })), message && (h("div", { key: '26dbed4e38850f25d5dc8e4d8f8417321db72ff4', id: `${this.baseId}-message`, class: "input__message", part: "input__message" }, h("uai-typo", { key: '7202bfd2ac9b971bdfbd86b3486c526f5695cdd2', variant: "caption", tag: "span", margin: false }, message)))), h("div", { key: '5713479d6f622aa84887b0a2b801d9fe2b4b3c72', id: panelId, ref: (panel) => (this.panel = panel), class: "panel", part: "panel", role: "dialog", "aria-label": texts.dialog, onPointerDown: (event) => {
                var _a, _b;
                if (!((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'button, input, uai-button')))
                    event.preventDefault();
            }, onPointerLeave: () => (this.hovered = null) }, this.renderPanel())));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "valueDateSelected": [{
                "valueChanged": 0
            }],
        "valueEndDateSelected": [{
                "valueChanged": 0
            }],
        "positionOptions": [{
                "positionChanged": 0
            }]
    }; }
};
UaiDatepicker.style = uaiDatepickerCss();

export { UaiDatepicker as uai_datepicker };
