'use strict';

var index = require('./index-JW9Yq-qX.js');
var uaiFormControl = require('./uai-form-control-B_Rr3WRq.js');
var uaiOverlay = require('./uai-overlay-DRE75ayC.js');
var uaiInputDateFormat = require('./uai-input-date-format-DivMrW4Y.js');

const uaiInputDateCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-feedback:var(--input-content);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-input-date-width, 100%)}:host(.uai-input-date--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-input-date--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022);--input-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-input-date--success){--input-border:var(--uai-feedback-success, #3da329);--input-message:var(--uai-feedback-success, #3da329);--input-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-input-date--disabled){--input-border:var(--uai-border-default, #e4e6e7);opacity:var(--uai-opacity-disabled, 0.5)}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.input__label,.input__message{--uai-typo-color:currentColor}.input__label{color:var(--input-label)}.input__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.input__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);height:var(--input-height);position:relative;padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--input-background);color:var(--input-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.input__control{-webkit-transition:none;transition:none}}.input__control:focus-within{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@media (forced-colors: active){.input__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-input-date--disabled):not(.uai-input-date--readonly):not(.uai-input-date--danger):not(.uai-input-date--success)) .input__control:hover:not(:focus-within){--input-border:var(--uai-content-secondary, #5f676d)}:host(.uai-input-date--disabled) .input__control{cursor:not-allowed}.input__icon{-ms-flex:none;flex:none;color:var(--input-content)}.input__feedback{-ms-flex:none;flex:none;color:var(--input-feedback)}.input__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;min-width:0;height:100%}.input__native{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;height:100%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.calendar-toggle{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:var(--uai-spacing-2xs, 0.25rem);border:0;border-radius:var(--uai-radius-md, 0.5rem);background:transparent;color:var(--input-content);cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.calendar-toggle{-webkit-transition:none;transition:none}}.calendar-toggle:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.calendar-toggle:hover:not(:disabled){background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.calendar-toggle:disabled{cursor:not-allowed}@media (forced-colors: active){.calendar-toggle{border:var(--uai-border-width-default, 1px) solid ButtonText}}:host(.uai-input-date--open) .input__control{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}.calendar-panel{--uai-overlay-gap:var(--uai-spacing-2xs, 0.25rem);--uai-overlay-margin:var(--uai-spacing-xs, 0.5rem);position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;border:0;overflow:auto;background:transparent;color:inherit;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}.calendar-panel:not(.uai-overlay--open){display:none}.calendar-panel.uai-overlay--open{opacity:1}@starting-style{.calendar-panel.uai-overlay--open{opacity:0}}@media (prefers-reduced-motion: reduce){.calendar-panel{-webkit-transition:none;transition:none}}.calendar-panel{border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-xl, 1rem);background:var(--uai-surface-paper, #ffffff);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));color:var(--uai-content-primary, #242729);overflow-x:hidden;-webkit-transform:scale(0.8);transform:scale(0.8);-webkit-transform-origin:top left;transform-origin:top left;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}.calendar-panel[data-align=end]{-webkit-transform-origin:top right;transform-origin:top right}.calendar-panel[data-side=top]{-webkit-transform-origin:bottom left;transform-origin:bottom left}.calendar-panel[data-side=top][data-align=end]{-webkit-transform-origin:bottom right;transform-origin:bottom right}.calendar-panel.uai-overlay--open{-webkit-transform:none;transform:none}@starting-style{.calendar-panel.uai-overlay--open{-webkit-transform:scale(0.8);transform:scale(0.8)}}@media (prefers-reduced-motion: reduce){.calendar-panel{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}@media (forced-colors: active){.calendar-panel{border-color:CanvasText}}@-webkit-keyframes uai-calendar-from-next{from{opacity:0;-webkit-transform:translateX(var(--uai-spacing-lg, 1.5rem));transform:translateX(var(--uai-spacing-lg, 1.5rem))}}@keyframes uai-calendar-from-next{from{opacity:0;-webkit-transform:translateX(var(--uai-spacing-lg, 1.5rem));transform:translateX(var(--uai-spacing-lg, 1.5rem))}}@-webkit-keyframes uai-calendar-from-previous{from{opacity:0;-webkit-transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)));transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)))}}@keyframes uai-calendar-from-previous{from{opacity:0;-webkit-transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)));transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)))}}@-webkit-keyframes uai-calendar-view{from{opacity:0;-webkit-transform:scale(0.96);transform:scale(0.96)}}@keyframes uai-calendar-view{from{opacity:0;-webkit-transform:scale(0.96);transform:scale(0.96)}}@-webkit-keyframes uai-calendar-pick{from{-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes uai-calendar-pick{from{-webkit-transform:scale(0.8);transform:scale(0.8)}}.calendar__body{-webkit-animation-duration:var(--uai-duration-moderate, 200ms);animation-duration:var(--uai-duration-moderate, 200ms);-webkit-animation-timing-function:var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));animation-timing-function:var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}.calendar__body--next{-webkit-animation-name:uai-calendar-from-next;animation-name:uai-calendar-from-next}.calendar__body--previous{-webkit-animation-name:uai-calendar-from-previous;animation-name:uai-calendar-from-previous}.calendar__body--view{-webkit-animation-name:uai-calendar-view;animation-name:uai-calendar-view}@media (prefers-reduced-motion: reduce){.calendar__body{-webkit-animation:none;animation:none}}.calendar__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-md, 1rem);border-bottom:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.calendar__pickers{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-xs, 0.5rem)}.calendar__arrow,.calendar__picker,.calendar__day,.calendar__option{--uai-typo-color:currentColor;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:0;border:0;background:transparent;color:var(--uai-content-primary, #242729);font:inherit;cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.calendar__arrow,.calendar__picker,.calendar__day,.calendar__option{-webkit-transition:none;transition:none}}.calendar__arrow:focus-visible,.calendar__picker:focus-visible,.calendar__day:focus-visible,.calendar__option:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.calendar__arrow:hover:not(:disabled):not([aria-disabled=true]),.calendar__picker:hover:not(:disabled):not([aria-disabled=true]),.calendar__day:hover:not(:disabled):not([aria-disabled=true]),.calendar__option:hover:not(:disabled):not([aria-disabled=true]){background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.calendar__arrow:disabled,.calendar__arrow[aria-disabled=true],.calendar__picker:disabled,.calendar__picker[aria-disabled=true],.calendar__day:disabled,.calendar__day[aria-disabled=true],.calendar__option:disabled,.calendar__option[aria-disabled=true]{color:var(--uai-content-disabled, #848e94);cursor:not-allowed}.calendar__arrow{-ms-flex:none;flex:none;width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-xl, 2rem);border-radius:var(--uai-radius-lg, 0.75rem)}.calendar__arrow--hidden{visibility:hidden}.calendar__picker{gap:var(--uai-spacing-2xs, 0.25rem);height:var(--uai-sizing-lg, 1.5rem);padding:0 var(--uai-spacing-2xs, 0.25rem);border-radius:var(--uai-radius-md, 0.5rem)}.calendar__picker ${index.transformTag("uai-icon")}{-webkit-transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.calendar__picker ${index.transformTag("uai-icon")}{-webkit-transition:none;transition:none}}.calendar__picker--open ${index.transformTag("uai-icon")}{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.calendar__body{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-md, 1rem);padding:var(--uai-spacing-md, 1rem)}.calendar__grid{border-collapse:separate;border-spacing:0 var(--uai-spacing-3xs, 0.125rem);margin:calc(-1 * var(--uai-spacing-3xs, 0.125rem)) 0}.calendar__weekday{--uai-typo-color:currentColor;width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-xl, 2rem);padding:0;color:var(--uai-content-secondary, #5f676d);font-weight:inherit;text-align:center}.calendar__cell{position:relative;width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-xl, 2rem);padding:0}.calendar__cell--between{background:var(--uai-surface-muted, #f2f3f3)}.calendar__cell--start,.calendar__cell--end{background:linear-gradient(to var(--calendar-fill-side), transparent 50%, var(--uai-surface-muted, #f2f3f3) 50%)}.calendar__cell--start{--calendar-fill-side:right}.calendar__cell--end{--calendar-fill-side:left}.calendar__cell--start.calendar__cell--end{background:none}.calendar__cell--between.calendar__cell--week-start{border-top-left-radius:var(--uai-radius-lg, 0.75rem);border-bottom-left-radius:var(--uai-radius-lg, 0.75rem)}.calendar__cell--between.calendar__cell--week-end{border-top-right-radius:var(--uai-radius-lg, 0.75rem);border-bottom-right-radius:var(--uai-radius-lg, 0.75rem)}.calendar__day{position:relative;width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-xl, 2rem);border-radius:var(--uai-radius-lg, 0.75rem)}.calendar__day--today{font-weight:var(--uai-font-weight-semibold, 600);-webkit-box-shadow:inset 0 0 0 var(--uai-border-width-default, 1px) var(--uai-border-input, #adb4b8);box-shadow:inset 0 0 0 var(--uai-border-width-default, 1px) var(--uai-border-input, #adb4b8)}.calendar__day--selected,.calendar__day--selected:hover:not(:disabled):not([aria-disabled=true]){background:var(--uai-action-primary-default, #242729);color:var(--uai-action-primary-foreground, #ffffff)}.calendar__day--selected{-webkit-animation:uai-calendar-pick var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));animation:uai-calendar-pick var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.calendar__day--selected{-webkit-animation:none;animation:none}}@media (forced-colors: active){.calendar__day--selected{outline:var(--uai-border-width-thick, 2px) solid Highlight}}.calendar__list{display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--uai-spacing-xs, 0.5rem);min-width:calc(7 * var(--uai-sizing-xl, 2rem))}.calendar__option{height:var(--uai-control-height-short, 2rem);padding:0 var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-lg, 0.75rem)}.calendar__option--current,.calendar__option--current:hover:not(:disabled){background:var(--uai-action-primary-default, #242729);color:var(--uai-action-primary-foreground, #ffffff)}`;

const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
let instances = 0;
const UaiInputDate = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiChange = index.createEvent(this, "uaiChange");
        this.uaiInput = index.createEvent(this, "uaiInput");
        this.uaiFocus = index.createEvent(this, "uaiFocus");
        this.uaiOnBlur = index.createEvent(this, "uaiOnBlur");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.display = '';
        this.validationDanger = false;
        this.disabledByForm = false;
        this.isOpen = false;
        this.view = 'days';
        /** The day with the focus in the calendar grid; its month is the month shown. */
        this.focusedDate = uaiInputDateFormat.todayIso();
        this.firstYear = 0;
        /** Where the next month or page of years comes from, for the slide animation. */
        this.slide = null;
        /** Moves the focus into the grid on the next render (opened by the keyboard or the calendar button). */
        this.focusGrid = false;
        this.defaultValue = '';
        this.typing = false;
        this.inputId = `uai-input-date-${++instances}`;
        /**
         * Name of the value in the submitted form data. Same as name, kept from bds-input.
         */
        this.inputName = '';
        /**
         * Selected date as ISO YYYY-MM-DD, for example "2026-12-25". Empty while the typed date is incomplete or invalid.
         */
        this.value = '';
        /**
         * Language of the default texts, not the date format. Can be 'pt_BR' (default), 'en_US', 'es_ES'.
         */
        this.language = 'pt_BR';
        /**
         * Height of the field. Can be one of: 'short', 'medium' (default).
         */
        this.size = 'medium';
        /**
         * UaiIcon name shown before the date.
         */
        this.icon = '';
        /**
         * If true, the date can be selected and copied but not edited, and the calendar button is hidden.
         */
        this.readonly = false;
        /**
         * If true, the field and the calendar button cannot be used and the value is left out of the form data.
         */
        this.disabled = false;
        /**
         * If true, shows the error state and errorMessage. Has priority over success.
         */
        this.danger = false;
        /**
         * If true, shows the success state and successMessage.
         */
        this.success = false;
        /**
         * Message below the field that helps to fill it.
         */
        this.helperMessage = '';
        /**
         * Message below the field while danger is true.
         */
        this.errorMessage = '';
        /**
         * Message below the field while success is true.
         */
        this.successMessage = '';
        /**
         * Accessible name of the field when the visible label is not enough.
         */
        this.ariaLabel = null;
        /**
         * Data test id, set on the native input.
         */
        this.dataTest = null;
        this.onInput = (event) => {
            var _a, _b;
            const input = event.target;
            const raw = input.value;
            const caretDigits = raw.slice(0, (_a = input.selectionStart) !== null && _a !== void 0 ? _a : raw.length).replace(/\D/g, '').length;
            const digits = raw.replace(/\D/g, '').slice(0, 8);
            const display = uaiInputDateFormat.groupDigits(digits);
            input.value = display;
            let caret = 0;
            for (let seen = 0; caret < display.length && seen < caretDigits; caret++) {
                if (/\d/.test(display[caret]))
                    seen++;
            }
            (_b = input.setSelectionRange) === null || _b === void 0 ? void 0 : _b.call(input, caret, caret);
            this.display = display;
            this.typing = true;
            this.value = uaiInputDateFormat.displayToIso(digits);
            this.typing = false;
            // A complete date typed with the calendar open shows its month.
            if (this.isOpen && uaiInputDateFormat.isIsoDate(this.value))
                this.moveTo(uaiInputDateFormat.clampIso(this.value, this.min, this.max));
            this.uaiInput.emit(event);
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        // Going into the calendar is not leaving the field: the validation waits until the calendar closes.
        this.onBlur = () => {
            if (!this.isOpen)
                this.showValidation(true);
            this.uaiOnBlur.emit();
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.key === 'ArrowDown' && (event.altKey || this.isOpen)) {
                event.preventDefault();
                this.openCalendar(true);
            }
            else if (event.key === 'Tab' && this.isOpen) {
                this.closeCalendar();
            }
            else if (event.key === 'Enter' && !event.isComposing) {
                (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
            }
        };
        this.onOverlayClose = (reason) => {
            var _a;
            if (this.isOpen)
                this.isOpen = false;
            if (reason === 'escape')
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            if (reason === 'outside')
                this.showValidation(true);
        };
        this.pickDate = (iso) => {
            var _a;
            if (uaiInputDateFormat.outOfRange(iso, this.min, this.max))
                return;
            this.display = uaiInputDateFormat.isoToDisplay(iso);
            this.value = iso;
            this.showValidation(true);
            this.closeCalendar();
            (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
        };
        // Keys move from the active day in the state, not from the button that got the event: a fast key can reach the
        // previous button before the focus moves.
        this.onDayKeyDown = (event) => {
            const target = uaiInputDateFormat.dateForKey(this.focusedDate, event);
            if (target) {
                event.preventDefault();
                this.moveFocus(target);
            }
            else if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.pickDate(this.focusedDate);
            }
        };
        this.onView = (view) => {
            // The page of years opens with the current year in its first row, leaving the years ahead in view.
            if (view === 'years')
                this.firstYear = this.viewYear - 4;
            this.changeView(view);
        };
        this.onPickMonth = (month) => {
            const { year, day } = uaiInputDateFormat.parseIso(this.focusedDate);
            const last = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
            this.focusedDate = uaiInputDateFormat.clampIso(uaiInputDateFormat.toIso(year, month, Math.min(day, last)), this.min, this.max);
            this.changeView('days');
        };
        this.onPickYear = (year) => {
            const { month, day } = uaiInputDateFormat.parseIso(this.focusedDate);
            const last = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
            this.focusedDate = uaiInputDateFormat.clampIso(uaiInputDateFormat.toIso(year, month, Math.min(day, last)), this.min, this.max);
            this.changeView('months');
        };
        // The arrows turn a month, a year in the month picker, or a page of years in the year picker.
        this.onPrevious = () => {
            if (this.view === 'years') {
                this.firstYear -= uaiInputDateFormat.YEARS_PER_PAGE;
                this.slide = 'previous';
            }
            else
                this.showMonth(this.view === 'months' ? -12 : -1);
        };
        this.onNext = () => {
            if (this.view === 'years') {
                this.firstYear += uaiInputDateFormat.YEARS_PER_PAGE;
                this.slide = 'next';
            }
            else
                this.showMonth(this.view === 'months' ? 12 : 1);
        };
        this.onInputClick = () => {
            this.openCalendar(false);
        };
        this.onButtonClick = () => {
            var _a;
            if (this.isOpen) {
                this.closeCalendar();
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                this.openCalendar(true);
            }
        };
        // Clicks on the field box (outside the button and slotted content) focus the input, as a native field does.
        this.onControlClick = (event) => {
            var _a, _b, _c;
            if ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'button'))
                return;
            if (!this.el.contains(event.target)) {
                (_c = this.nativeInput) === null || _c === void 0 ? void 0 : _c.focus();
                this.openCalendar(false);
            }
        };
    }
    /**
     * Moves the focus to the field.
     */
    async setFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Removes the focus from the field.
     */
    async removeFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.blur();
    }
    /**
     * Returns true when the date is complete, exists, is within min and max, and is present when required.
     */
    async isValid() {
        return !this.validity().invalid;
    }
    /**
     * Clears the date.
     */
    async clear() {
        this.display = '';
        this.value = '';
    }
    /**
     * Opens the calendar. Use for imperative control; pair with close.
     */
    async open() {
        this.openCalendar(false);
    }
    /**
     * Closes the calendar.
     */
    async close() {
        this.closeCalendar();
    }
    inputNameChanged() {
        if (!this.name && this.inputName)
            this.name = this.inputName;
    }
    valueChanged(newValue) {
        var _a;
        const value = newValue || '';
        if (!this.typing)
            this.display = uaiInputDateFormat.isoToDisplay(value);
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(uaiInputDateFormat.isIsoDate(value) ? value : null);
        this.uaiChange.emit({ value });
    }
    onInvalid() {
        this.showValidation(true);
    }
    // The focus moving to something outside the field and the calendar closes it. Without a target (a day button
    // replaced when the month changes, or a click on nothing), it stays: a click outside is the overlay's.
    onFocusOut(event) {
        var _a;
        const next = event.relatedTarget;
        if (next && !this.el.contains(next) && !((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.contains(next)))
            this.closeCalendar();
    }
    componentWillLoad() {
        var _a;
        this.inputNameChanged();
        this.defaultValue = uaiInputDateFormat.isIsoDate(this.value) ? this.value : '';
        this.display = uaiInputDateFormat.isoToDisplay(this.defaultValue);
        // Real browsers only: the Stencil mock DOM attaches internals without the form API.
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new uaiFormControl.UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.defaultValue || null,
                onReset: () => {
                    this.validationDanger = false;
                    this.display = uaiInputDateFormat.isoToDisplay(this.defaultValue);
                    this.value = this.defaultValue;
                },
                onDisabledChange: (disabled) => {
                    queueMicrotask(() => {
                        var _a, _b;
                        const formDisabled = (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : disabled;
                        if (!this.disabled && this.disabledByForm !== formDisabled)
                            this.disabledByForm = formDisabled;
                    });
                },
            });
        }
    }
    componentDidLoad() {
        if (this.control && this.panel) {
            this.overlay = new uaiOverlay.UaiOverlay({
                trigger: this.control,
                panel: this.panel,
                side: 'bottom',
                align: 'start',
                onClose: this.onOverlayClose,
            });
        }
    }
    componentDidRender() {
        var _a, _b, _c, _d;
        if (this.nativeInput && this.nativeInput.value !== this.display)
            this.nativeInput.value = this.display;
        const { flags, message } = this.validity();
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValidity(flags, message, this.nativeInput);
        if (this.isOpen && this.overlay && !this.overlay.isOpen)
            this.overlay.open();
        if (this.isOpen)
            (_b = this.overlay) === null || _b === void 0 ? void 0 : _b.update();
        if (this.isOpen && this.focusGrid) {
            this.focusGrid = false;
            (_d = (_c = this.panel) === null || _c === void 0 ? void 0 : _c.querySelector(`[data-iso="${this.focusedDate}"]`)) === null || _d === void 0 ? void 0 : _d.focus();
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
    formStateRestoreCallback(state) {
        if (typeof state === 'string')
            this.value = state;
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
    validity() {
        const language = this.languageValue;
        const locale = uaiInputDateFormat.dateLocale(language);
        const value = uaiInputDateFormat.isIsoDate(this.value) ? this.value : '';
        if (!this.display && !value) {
            return this.required
                ? { invalid: true, flags: { valueMissing: true }, message: this.requiredErrorMessage || locale.required }
                : { invalid: false, flags: {}, message: '' };
        }
        if (!value)
            return { invalid: true, flags: { badInput: true }, message: this.dateErrorMessage || locale.date };
        if (uaiInputDateFormat.isIsoDate(this.min) && value < this.min) {
            const message = this.minErrorMessage || locale.min(uaiInputDateFormat.isoToDisplay(this.min));
            return { invalid: true, flags: { rangeUnderflow: true }, message };
        }
        if (uaiInputDateFormat.isIsoDate(this.max) && value > this.max) {
            const message = this.maxErrorMessage || locale.max(uaiInputDateFormat.isoToDisplay(this.max));
            return { invalid: true, flags: { rangeOverflow: true }, message };
        }
        return { invalid: false, flags: {}, message: '' };
    }
    // Shows the validation result from now on; the message follows the value while it stays shown.
    showValidation(show) {
        const danger = show && this.validity().invalid;
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    get viewYear() {
        return uaiInputDateFormat.parseIso(this.focusedDate).year;
    }
    get viewMonth() {
        return uaiInputDateFormat.parseIso(this.focusedDate).month;
    }
    // The calendar starts on the chosen date, or today, within min and max.
    openCalendar(focusGrid) {
        if (this.isDisabled || this.readonly)
            return;
        if (!this.isOpen) {
            const start = uaiInputDateFormat.isIsoDate(this.value) ? this.value : uaiInputDateFormat.todayIso();
            this.focusedDate = uaiInputDateFormat.clampIso(start, this.min, this.max);
            this.view = 'days';
            this.slide = null;
            this.isOpen = true;
        }
        this.focusGrid = focusGrid;
        if (focusGrid)
            this.forceFocus();
    }
    // Asks for a render when the calendar is already open and only the focus has to move.
    forceFocus() {
        index.forceUpdate(this.el);
    }
    closeCalendar(reason = 'api') {
        var _a, _b;
        if (!this.isOpen)
            return;
        this.isOpen = false;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close(reason);
        if (!((_b = this.el.shadowRoot) === null || _b === void 0 ? void 0 : _b.activeElement))
            this.showValidation(true);
    }
    moveFocus(iso) {
        this.moveTo(uaiInputDateFormat.clampIso(iso, this.min, this.max));
        this.focusGrid = true;
        index.forceUpdate(this.el);
    }
    showMonth(months) {
        this.moveTo(uaiInputDateFormat.clampIso(uaiInputDateFormat.addMonths(this.focusedDate, months), this.min, this.max));
    }
    // Moves the calendar to a date; a new month slides in from the side it comes from.
    moveTo(iso) {
        const from = this.viewYear * 12 + this.viewMonth;
        const { year, month } = uaiInputDateFormat.parseIso(iso);
        const to = year * 12 + month;
        if (to !== from)
            this.slide = to > from ? 'next' : 'previous';
        this.focusedDate = iso;
    }
    changeView(view) {
        if (view === this.view)
            return;
        this.slide = 'view';
        this.view = view;
    }
    renderCalendar() {
        if (!this.isOpen)
            return null;
        const language = this.languageValue;
        const min = uaiInputDateFormat.parseIso(this.min);
        const max = uaiInputDateFormat.parseIso(this.max);
        const year = this.viewYear;
        const month = this.viewMonth;
        // The arrows stop at min and max: by month, by year in the month picker, by page in the year picker.
        const position = this.view === 'days' ? year * 12 + month : year;
        const limit = (date) => (this.view === 'days' ? date.year * 12 + date.month : date.year);
        const atMin = !!min && (this.view === 'years' ? this.firstYear <= min.year : position <= limit(min));
        const atMax = !!max && (this.view === 'years' ? this.firstYear + uaiInputDateFormat.YEARS_PER_PAGE - 1 >= max.year : position >= limit(max));
        return [
            index.h(uaiInputDateFormat.CalendarHeader, { year: year, month: month, view: this.view, language: language, disablePrevious: atMin, disableNext: atMax, onPrevious: this.onPrevious, onNext: this.onNext, onView: this.onView }),
            // A new key per month, page of years or view: the body is created again and its entry animation runs.
            index.h("div", { key: `${this.view}-${this.view === 'years' ? this.firstYear : this.view === 'months' ? year : `${year}-${month}`}`, class: { calendar__body: true, [`calendar__body--${this.slide}`]: !!this.slide } }, this.view === 'days' ? (index.h(uaiInputDateFormat.CalendarDays, { year: year, month: month, language: language, focused: this.focusedDate, min: this.min, max: this.max, idPrefix: `${this.inputId}-day`, isSelected: (iso) => iso === this.value, onPick: this.pickDate, onKeyDown: this.onDayKeyDown })) : (index.h(uaiInputDateFormat.CalendarList, { kind: this.view, year: year, month: month, language: language, min: this.min, max: this.max, firstYear: this.firstYear, onPick: this.view === 'months' ? this.onPickMonth : this.onPickYear }))),
        ];
    }
    render() {
        var _a, _b;
        const disabled = this.disabled || this.disabledByForm;
        const validity = this.validity();
        const validationText = this.validationDanger && validity.invalid ? validity.message : '';
        const invalid = this.danger || !!validationText;
        const success = this.success && !invalid;
        const message = this.danger
            ? this.errorMessage || validationText
            : validationText
                ? validationText
                : success
                    ? this.successMessage
                    : this.helperMessage;
        const locale = uaiInputDateFormat.dateLocale(this.languageValue);
        const label = (_a = this.label) !== null && _a !== void 0 ? _a : locale.label;
        return (index.h(index.Host, { key: '07443c7ca2ab08d0d7a5a8e92c78faed3f553c5d', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-date--size-${this.sizeValue}`]: true,
                'uai-input-date--danger': invalid,
                'uai-input-date--success': success,
                'uai-input-date--disabled': disabled,
                'uai-input-date--readonly': this.readonly && !disabled,
                'uai-input-date--open': this.isOpen,
            } }, index.h("div", { key: 'e3957516948a227fe1d89a7f5c194ecc39337352', class: "input" }, label && (index.h("label", { key: '062d6174764ef3c6f10d63ab126f09eb2bc6a65a', class: "input__label", for: this.inputId }, index.h("uai-typo", { key: '0529079c4e3fbebefecd04fe4991733dd677a7c8', variant: "caption", bold: "semibold", tag: "span", margin: false }, label))), index.h("div", { key: '89afb41e8e15749d33b124440cd74f2b46dfe5ac', class: "input__control", part: "input-container", ref: (control) => (this.control = control), onClick: this.onControlClick }, this.icon && index.h("uai-icon", { key: 'c743b32f5af53319c2744a1bfa8597a1f50d2e79', class: "input__icon", name: this.icon, size: "medium" }), index.h("div", { key: '25808cfc136f3b7842200cd4bbf2f4571cedb417', class: "input__field" }, index.h("input", { key: 'e255be6c486c6ab4bb1b323fd274bcae8246f97d', id: this.inputId, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", inputMode: "numeric", autocomplete: "off", maxLength: uaiInputDateFormat.regionalDateFormat().placeholder.length, value: this.display, placeholder: (_b = this.placeholder) !== null && _b !== void 0 ? _b : uaiInputDateFormat.regionalDateFormat().placeholder, required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.ariaLabel || null, "aria-haspopup": "dialog", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": `${this.inputId}-calendar`, "aria-invalid": invalid ? 'true' : null, "aria-describedby": message ? `${this.inputId}-message` : null, "data-test": this.dataTest, onInput: this.onInput, onClick: this.onInputClick, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown })), invalid && index.h("uai-icon", { key: '41470457759b8c6173d295fd8dba7af55f8bc11a', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && index.h("uai-icon", { key: '36dbaa7798aa489c26361453c3ebf415b27324ef', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), !this.readonly && (index.h("button", { key: 'd78809201c0f37684108087e9a34e0edb84907b9', type: "button", class: "calendar-toggle", part: "calendar-button", "aria-label": locale.calendar, "aria-haspopup": "dialog", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": `${this.inputId}-calendar`, disabled: disabled, onClick: this.onButtonClick }, index.h("uai-icon", { key: 'f9c19381d52ad4b5e02460db62bf0613e373aa5e', name: "calendar", size: "medium" }))), index.h("slot", { key: 'd22164c58bd95d50511404da5e19e7ed4fa062a4', name: "input-right" })), message && (index.h("div", { key: 'ef9f759800c2cebbdce15464c70bfa3202b5182d', id: `${this.inputId}-message`, class: "input__message", part: "input__message" }, index.h("uai-typo", { key: '586eea9fbb29759503baa624e0dc188b92eeaca6', variant: "caption", tag: "span", margin: false }, message)))), index.h("div", { key: '7f954e86e710d6690f73332d6e28d5225c247049', id: `${this.inputId}-calendar`, ref: (panel) => (this.panel = panel), class: "calendar-panel", part: "calendar", role: "dialog", "aria-label": locale.calendar, onPointerDown: (event) => {
                var _a, _b;
                if (!((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'button')))
                    event.preventDefault();
            } }, this.renderCalendar())));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "inputName": [{
                "inputNameChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }]
    }; }
};
UaiInputDate.style = uaiInputDateCss();

exports.uai_input_date = UaiInputDate;
