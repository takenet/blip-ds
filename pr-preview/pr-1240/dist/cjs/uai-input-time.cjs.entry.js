'use strict';

var index = require('./index-GTJCA4wH.js');
var uaiFormControl = require('./uai-form-control-B_Rr3WRq.js');
var uaiOverlay = require('./uai-overlay-DRE75ayC.js');

const TIME = /^([01]\d|2[0-3]):([0-5]\d)$/;
const LOCALES = {
    pt_BR: {
        label: 'Horário',
        picker: 'Escolher horário',
        hours: 'Horas',
        minutes: 'Minutos',
        required: 'Informe o horário.',
        time: 'Informe um horário de 00:00 a 23:59.',
        min: (time) => `Informe um horário a partir de ${time}.`,
        max: (time) => `Informe um horário até ${time}.`,
    },
    en_US: {
        label: 'Time',
        picker: 'Choose time',
        hours: 'Hours',
        minutes: 'Minutes',
        required: 'Enter the time.',
        time: 'Enter a time from 00:00 to 23:59.',
        min: (time) => `Enter a time at or after ${time}.`,
        max: (time) => `Enter a time at or before ${time}.`,
    },
    es_ES: {
        label: 'Hora',
        picker: 'Elegir hora',
        hours: 'Horas',
        minutes: 'Minutos',
        required: 'Ingrese la hora.',
        time: 'Ingrese una hora de 00:00 a 23:59.',
        min: (time) => `Ingrese una hora a partir de las ${time}.`,
        max: (time) => `Ingrese una hora hasta las ${time}.`,
    },
};
const timeLocale = (language) => LOCALES[language];
/** True when the text is a time of day as HH:mm, from 00:00 to 23:59. */
function isTime(text) {
    return TIME.test(text || '');
}
/**
 * The digits a keystroke leaves, as far as they can still be a time of day: a first digit above 2, an hour above 23
 * or a minute tens above 5 is refused, and the previous digits stay.
 */
function acceptDigits(typed, previous) {
    const digits = typed.replace(/\D/g, '');
    if (digits.length > 4 ||
        (digits[0] && digits[0] > '2') ||
        (digits.length >= 2 && Number(digits.slice(0, 2)) > 23) ||
        (digits[2] && digits[2] > '5')) {
        return previous;
    }
    return digits;
}
/** The digits as shown in the field: HH:mm, with the colon once the hour is complete. */
function groupTime(digits) {
    return digits.length > 2 ? `${digits.slice(0, 2)}:${digits.slice(2)}` : digits;
}
/** HH:mm for four digits that make a time, or '' while incomplete. */
function digitsToTime(digits) {
    const time = groupTime(digits);
    return digits.length === 4 && isTime(time) ? time : '';
}
/** Two digits, as hours and minutes are shown: 9 is "09". */
function pad(value) {
    return String(value).padStart(2, '0');
}

const uaiInputTimeCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-feedback:var(--input-content);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-input-time-width, 100%)}:host(.uai-input-time--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-input-time--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022);--input-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-input-time--success){--input-border:var(--uai-feedback-success, #3da329);--input-message:var(--uai-feedback-success, #3da329);--input-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-input-time--disabled){--input-background:var(--uai-surface-muted, #f2f3f3);--input-border:var(--uai-border-default, #e4e6e7);--input-content:var(--uai-content-disabled, #848e94);--input-label:var(--uai-content-disabled, #848e94);--input-message:var(--uai-content-disabled, #848e94);--input-feedback:var(--uai-content-disabled, #848e94)}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.input__label,.input__message{--uai-typo-color:currentColor}.input__label{color:var(--input-label)}.input__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.input__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);height:var(--input-height);position:relative;padding:0 var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--input-background);color:var(--input-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.input__control{-webkit-transition:none;transition:none}}.input__control:focus-within{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@media (forced-colors: active){.input__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-input-time--disabled):not(.uai-input-time--readonly):not(.uai-input-time--danger):not(.uai-input-time--success)) .input__control:hover:not(:focus-within){--input-border:var(--uai-content-secondary, #5f676d)}:host(.uai-input-time--disabled) .input__control{cursor:not-allowed}.input__icon{-ms-flex:none;flex:none;color:var(--input-content)}.input__feedback{-ms-flex:none;flex:none;color:var(--input-feedback)}.input__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;min-width:0;height:100%}.input__native{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;height:100%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.input__native:disabled::-webkit-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-moz-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled:-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::placeholder{color:var(--uai-content-disabled, #848e94)}.clock{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:var(--uai-spacing-2xs, 0.25rem);border:0;border-radius:var(--uai-radius-md, 0.5rem);background:transparent;color:var(--input-content);cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.clock{-webkit-transition:none;transition:none}}.clock:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.clock:hover:not(:disabled){background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.clock:disabled{cursor:not-allowed}@media (forced-colors: active){.clock{border:var(--uai-border-width-default, 1px) solid ButtonText}}:host(.uai-input-time--open) .input__control{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@-webkit-keyframes uai-calendar-from-next{from{opacity:0;-webkit-transform:translateX(var(--uai-spacing-lg, 1.5rem));transform:translateX(var(--uai-spacing-lg, 1.5rem))}}@keyframes uai-calendar-from-next{from{opacity:0;-webkit-transform:translateX(var(--uai-spacing-lg, 1.5rem));transform:translateX(var(--uai-spacing-lg, 1.5rem))}}@-webkit-keyframes uai-calendar-from-previous{from{opacity:0;-webkit-transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)));transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)))}}@keyframes uai-calendar-from-previous{from{opacity:0;-webkit-transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)));transform:translateX(calc(-1 * var(--uai-spacing-lg, 1.5rem)))}}@-webkit-keyframes uai-calendar-view{from{opacity:0;-webkit-transform:scale(0.96);transform:scale(0.96)}}@keyframes uai-calendar-view{from{opacity:0;-webkit-transform:scale(0.96);transform:scale(0.96)}}@-webkit-keyframes uai-calendar-pick{from{-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes uai-calendar-pick{from{-webkit-transform:scale(0.8);transform:scale(0.8)}}.panel{--uai-overlay-gap:var(--uai-spacing-2xs, 0.25rem);--uai-overlay-margin:var(--uai-spacing-xs, 0.5rem);position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;border:0;overflow:auto;background:transparent;color:inherit;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}.panel:not(.uai-overlay--open){display:none}.panel.uai-overlay--open{opacity:1}@starting-style{.panel.uai-overlay--open{opacity:0}}@media (prefers-reduced-motion: reduce){.panel{-webkit-transition:none;transition:none}}.panel{display:-ms-flexbox;display:flex;gap:var(--uai-spacing-2xs, 0.25rem);max-height:calc(6 * var(--uai-control-height-medium, 2.5rem));padding:var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-lg, 0.75rem);background:var(--uai-surface-paper, #ffffff);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));color:var(--uai-content-primary, #242729);overflow-x:hidden;-webkit-transform:scale(0.8);transform:scale(0.8);-webkit-transform-origin:top left;transform-origin:top left;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, -webkit-transform var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}.panel[data-align=end]{-webkit-transform-origin:top right;transform-origin:top right}.panel[data-side=top]{-webkit-transform-origin:bottom left;transform-origin:bottom left}.panel[data-side=top][data-align=end]{-webkit-transform-origin:bottom right;transform-origin:bottom right}.panel.uai-overlay--open{-webkit-transform:none;transform:none}@starting-style{.panel.uai-overlay--open{-webkit-transform:scale(0.8);transform:scale(0.8)}}@media (prefers-reduced-motion: reduce){.panel{-webkit-transform:none;transform:none;-webkit-transition:none;transition:none}}@media (forced-colors: active){.panel{border-color:CanvasText}}.column{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem);margin:0;padding:0;overflow-y:auto;list-style:none;scrollbar-width:thin}.column+.column{padding-left:var(--uai-spacing-2xs, 0.25rem);border-left:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7)}.option{--uai-typo-color:currentColor;display:-ms-flexbox;display:flex;-ms-flex:none;flex:none;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;min-width:var(--uai-control-height-medium, 2.5rem);padding:var(--uai-spacing-2xs, 0.25rem) var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-md, 0.5rem);cursor:pointer;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.option{-webkit-transition:none;transition:none}}.option:hover:not(.option--disabled){background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}.option[aria-selected=true]{background:var(--uai-overlay-selected, rgba(0, 0, 0, 0.06));-webkit-animation:uai-calendar-pick var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));animation:uai-calendar-pick var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.option[aria-selected=true]{-webkit-animation:none;animation:none}}.option--active{-webkit-box-shadow:inset 0 0 0 var(--uai-border-width-thick, 2px) var(--uai-border-ring, #242729);box-shadow:inset 0 0 0 var(--uai-border-width-thick, 2px) var(--uai-border-ring, #242729)}.option--disabled{color:var(--uai-content-disabled, #848e94);cursor:not-allowed}@media (forced-colors: active){.option--active{outline:var(--uai-border-width-thick, 2px) solid Highlight}}`;

const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const HOURS = Array.from({ length: 24 }, (_, hour) => hour);
let instances = 0;
const UaiInputTime = class {
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
        this.activeColumn = 'hour';
        this.activeHour = 0;
        this.activeMinute = 0;
        this.defaultValue = '';
        this.typing = false;
        this.inputId = `uai-input-time-${++instances}`;
        /**
         * Name of the value in the submitted form data. Same as name, kept from bds-input.
         */
        this.inputName = '';
        /**
         * Chosen time as HH:mm, from "00:00" to "23:59". Empty while the typed time is incomplete.
         */
        this.value = '';
        /**
         * Interval of the minutes offered in the panel, from 1 to 30: 5 (default) offers 00, 05, 10… Typing accepts any
         * minute. Use 15 or 30 for appointments; avoid 1, which makes a long list.
         */
        this.minuteStep = 5;
        /**
         * Language of the default texts. Can be 'pt_BR' (default), 'en_US', 'es_ES'.
         */
        this.language = 'pt_BR';
        /**
         * Height of the field. Can be one of: 'short', 'medium' (default).
         */
        this.size = 'medium';
        /**
         * UaiIcon name shown before the time.
         */
        this.icon = '';
        /**
         * If true, the time can be selected and copied but not edited; the panel does not open and its button is hidden.
         */
        this.readonly = false;
        /**
         * If true, the field and the picker button cannot be used and the value is left out of the form data.
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
        this.onOverlayClose = (reason) => {
            var _a;
            if (this.isOpen)
                this.isOpen = false;
            if (reason === 'escape')
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            if (reason === 'outside')
                this.showValidation(true);
        };
        this.onInput = (event) => {
            var _a, _b;
            const input = event.target;
            const raw = input.value;
            const previous = this.display.replace(/\D/g, '');
            const digits = acceptDigits(raw, previous);
            const refused = digits === previous && raw.replace(/\D/g, '') !== previous;
            const caretDigits = refused
                ? previous.length
                : raw.slice(0, (_a = input.selectionStart) !== null && _a !== void 0 ? _a : raw.length).replace(/\D/g, '').length;
            const display = groupTime(digits);
            input.value = display;
            let caret = 0;
            for (let seen = 0; caret < display.length && seen < caretDigits; caret++) {
                if (/\d/.test(display[caret]))
                    seen++;
            }
            (_b = input.setSelectionRange) === null || _b === void 0 ? void 0 : _b.call(input, caret, caret);
            this.display = display;
            this.typing = true;
            this.value = digitsToTime(digits);
            this.typing = false;
            // While the panel is open, it follows the hour being typed.
            if (this.isOpen && digits.length >= 2 && !this.hourDisabled(Number(digits.slice(0, 2)))) {
                this.activeHour = Number(digits.slice(0, 2));
            }
            this.uaiInput.emit(event);
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        this.onBlur = () => {
            if (!this.isOpen)
                this.showValidation(true);
            this.uaiOnBlur.emit();
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.key === 'ArrowDown' && event.altKey) {
                event.preventDefault();
                this.openPanel();
                return;
            }
            if (this.isOpen) {
                const keys = {
                    ArrowDown: () => this.moveActive(1),
                    ArrowUp: () => this.moveActive(-1),
                    ArrowRight: () => (this.activeColumn = 'minute'),
                    ArrowLeft: () => (this.activeColumn = 'hour'),
                    Enter: () => this.activeColumn === 'hour' ? this.pickHour(this.activeHour) : this.pickMinute(this.activeMinute),
                };
                if (keys[event.key]) {
                    event.preventDefault();
                    keys[event.key]();
                }
                else if (event.key === 'Tab') {
                    this.closePanel();
                }
                return;
            }
            if (event.key === 'Enter' && !event.isComposing)
                (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
        };
        // A click on the field opens the panel; on the button, it opens or closes it.
        this.onInputClick = () => {
            this.openPanel();
        };
        this.onButtonClick = () => {
            var _a;
            if (this.isOpen)
                this.closePanel();
            else {
                this.openPanel();
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
            }
        };
        // Clicks on the field box (outside the button and slotted content) focus the input and open the panel.
        this.onControlClick = (event) => {
            var _a, _b, _c;
            if ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest) === null || _b === void 0 ? void 0 : _b.call(_a, 'button'))
                return;
            if (!this.el.contains(event.target)) {
                (_c = this.nativeInput) === null || _c === void 0 ? void 0 : _c.focus();
                this.openPanel();
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
     * Returns true when the time is complete, within min and max, and present when required.
     */
    async isValid() {
        return !this.validity().invalid;
    }
    /**
     * Clears the time.
     */
    async clear() {
        this.display = '';
        this.value = '';
    }
    /**
     * Opens the time panel. Use for imperative control; pair with close.
     */
    async open() {
        this.openPanel();
    }
    /**
     * Closes the time panel.
     */
    async close() {
        this.closePanel();
    }
    inputNameChanged() {
        if (!this.name && this.inputName)
            this.name = this.inputName;
    }
    valueChanged(newValue) {
        var _a;
        const value = newValue || '';
        if (!this.typing)
            this.display = isTime(value) ? value : '';
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(isTime(value) ? value : null);
        this.uaiChange.emit({ value });
    }
    onInvalid() {
        this.showValidation(true);
    }
    componentWillLoad() {
        var _a;
        this.inputNameChanged();
        this.defaultValue = isTime(this.value) ? this.value : '';
        this.display = this.defaultValue;
        // Real browsers only: the Stencil mock DOM attaches internals without the form API.
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new uaiFormControl.UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.defaultValue || null,
                onReset: () => {
                    this.validationDanger = false;
                    this.display = this.defaultValue;
                    this.value = this.defaultValue;
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
        var _a, _b, _c;
        if (this.nativeInput && this.nativeInput.value !== this.display)
            this.nativeInput.value = this.display;
        const { flags, message } = this.validity();
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValidity(flags, message, this.nativeInput);
        if (this.isOpen && this.overlay && !this.overlay.isOpen)
            this.overlay.open();
        if (this.isOpen) {
            (_b = this.overlay) === null || _b === void 0 ? void 0 : _b.update();
            // Keeps the active hour and minute in view, each in its own column.
            (_c = this.panel) === null || _c === void 0 ? void 0 : _c.querySelectorAll('.option--current').forEach((option) => { var _a; return (_a = option.scrollIntoView) === null || _a === void 0 ? void 0 : _a.call(option, { block: 'nearest' }); });
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
    get minutes() {
        const step = Math.round(Number(this.minuteStep));
        const valid = step >= 1 && step <= 30 ? step : 5;
        return Array.from({ length: Math.ceil(60 / valid) }, (_, index) => index * valid);
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    // HH:mm compares in the order of the day, so min and max compare as text.
    inRange(time) {
        return (!isTime(this.min) || time >= this.min) && (!isTime(this.max) || time <= this.max);
    }
    hourDisabled(hour) {
        const first = `${pad(hour)}:00`;
        const last = `${pad(hour)}:59`;
        return (isTime(this.min) && last < this.min) || (isTime(this.max) && first > this.max);
    }
    minuteDisabled(minute) {
        return !this.inRange(`${pad(this.activeHour)}:${pad(minute)}`);
    }
    validity() {
        const locale = timeLocale(this.languageValue);
        const value = isTime(this.value) ? this.value : '';
        if (!this.display && !value) {
            return this.required
                ? { invalid: true, flags: { valueMissing: true }, message: this.requiredErrorMessage || locale.required }
                : { invalid: false, flags: {}, message: '' };
        }
        if (!value)
            return { invalid: true, flags: { badInput: true }, message: this.timeErrorMessage || locale.time };
        if (isTime(this.min) && value < this.min) {
            return { invalid: true, flags: { rangeUnderflow: true }, message: this.minErrorMessage || locale.min(this.min) };
        }
        if (isTime(this.max) && value > this.max) {
            return { invalid: true, flags: { rangeOverflow: true }, message: this.maxErrorMessage || locale.max(this.max) };
        }
        return { invalid: false, flags: {}, message: '' };
    }
    // Shows the validation result from now on; the message follows the value while it stays shown.
    showValidation(show) {
        const danger = show && this.validity().invalid;
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
    }
    setTime(time) {
        this.display = time;
        this.value = time;
    }
    // The panel starts on the hour and minute of the value, or on the first ones it can offer.
    openPanel() {
        var _a, _b;
        if (this.isDisabled || this.readonly || this.isOpen)
            return;
        const [hour, minute] = isTime(this.value) ? this.value.split(':').map(Number) : [null, null];
        this.activeHour = (_a = hour !== null && hour !== void 0 ? hour : HOURS.find((candidate) => !this.hourDisabled(candidate))) !== null && _a !== void 0 ? _a : 0;
        const minutes = this.minutes;
        this.activeMinute =
            minute === null
                ? ((_b = minutes.find((candidate) => !this.minuteDisabled(candidate))) !== null && _b !== void 0 ? _b : 0)
                : minutes.reduce((best, candidate) => (Math.abs(candidate - minute) < Math.abs(best - minute) ? candidate : best));
        this.activeColumn = 'hour';
        this.isOpen = true;
    }
    closePanel(reason = 'api') {
        var _a;
        if (!this.isOpen)
            return;
        this.isOpen = false;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close(reason);
    }
    // The hour fills the field at once, with the minute already shown (or the first one offered), and moves to the minutes.
    pickHour(hour) {
        var _a;
        if (this.hourDisabled(hour))
            return;
        this.activeHour = hour;
        const minutes = this.minutes;
        if (this.minuteDisabled(this.activeMinute)) {
            this.activeMinute = (_a = minutes.find((candidate) => !this.minuteDisabled(candidate))) !== null && _a !== void 0 ? _a : this.activeMinute;
        }
        this.setTime(`${pad(hour)}:${pad(this.activeMinute)}`);
        this.activeColumn = 'minute';
    }
    pickMinute(minute) {
        var _a;
        if (this.minuteDisabled(minute))
            return;
        this.activeMinute = minute;
        this.setTime(`${pad(this.activeHour)}:${pad(minute)}`);
        this.showValidation(true);
        this.closePanel();
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    moveActive(step) {
        if (this.activeColumn === 'hour') {
            for (let hour = this.activeHour + step; hour >= 0 && hour < 24; hour += step) {
                if (!this.hourDisabled(hour))
                    return void (this.activeHour = hour);
            }
            return;
        }
        const minutes = this.minutes;
        for (let index = minutes.indexOf(this.activeMinute) + step; index >= 0 && index < minutes.length; index += step) {
            if (!this.minuteDisabled(minutes[index]))
                return void (this.activeMinute = minutes[index]);
        }
    }
    optionId(column, value) {
        return `${this.inputId}-${column}-${value}`;
    }
    renderColumn(column, label, values) {
        const [hour, minute] = isTime(this.value) ? this.value.split(':').map(Number) : [null, null];
        const chosen = column === 'hour' ? hour : hour === this.activeHour ? minute : null;
        const active = column === 'hour' ? this.activeHour : this.activeMinute;
        return (index.h("ul", { class: "column", role: "listbox", "aria-label": label }, values.map((item) => {
            const disabled = column === 'hour' ? this.hourDisabled(item) : this.minuteDisabled(item);
            return (index.h("li", { id: this.optionId(column, item), role: "option", part: "picker-option", "aria-selected": chosen === item ? 'true' : 'false', "aria-disabled": disabled ? 'true' : null, class: {
                    option: true,
                    'option--current': item === active,
                    'option--active': item === active && this.activeColumn === column,
                    'option--disabled': disabled,
                }, onClick: () => (column === 'hour' ? this.pickHour(item) : this.pickMinute(item)) }, index.h("uai-typo", { variant: "body-base", tag: "span", margin: false }, pad(item))));
        })));
    }
    render() {
        var _a, _b;
        const disabled = this.isDisabled;
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
        const locale = timeLocale(this.languageValue);
        const label = (_a = this.label) !== null && _a !== void 0 ? _a : locale.label;
        const panelId = `${this.inputId}-picker`;
        const activeValue = this.activeColumn === 'hour' ? this.activeHour : this.activeMinute;
        return (index.h(index.Host, { key: '1cca79b469cbdd2118ddcc01eea1edaf934b9ab3', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-time--size-${this.sizeValue}`]: true,
                'uai-input-time--danger': invalid,
                'uai-input-time--success': success,
                'uai-input-time--disabled': disabled,
                'uai-input-time--readonly': this.readonly && !disabled,
                'uai-input-time--open': this.isOpen,
            } }, index.h("div", { key: 'dd1f4b9b41094c91e081b5d45f8eca02f9cd38b4', class: "input" }, label && (index.h("label", { key: '6493d75d5f23f17ea8dc42beb8f60780c8e478d0', class: "input__label", for: this.inputId }, index.h("uai-typo", { key: '20c8a5c99d73fb242563ce99814e0f72ebdb6a27', variant: "caption", bold: "semibold", tag: "span", margin: false }, label))), index.h("div", { key: 'fec2e79a8b73004c01a3ddc8b0d288e1c143f600', class: "input__control", part: "input-container", ref: (control) => (this.control = control), onClick: this.onControlClick }, this.icon && index.h("uai-icon", { key: '5baf0c543f70c8891900804bcd6e179aeb05699c', class: "input__icon", name: this.icon, size: "medium" }), index.h("div", { key: '1c02602f7e09a965d7d1fccc041998e844b566df', class: "input__field" }, index.h("input", { key: '85300d45b1ea6200867b80c365ad14a5598bc8e2', id: this.inputId, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "text", role: "combobox", inputMode: "numeric", autocomplete: "off", maxLength: 5, value: this.display, placeholder: (_b = this.placeholder) !== null && _b !== void 0 ? _b : 'hh:mm', required: this.required, readOnly: this.readonly, disabled: disabled, "aria-label": this.ariaLabel || null, "aria-haspopup": "listbox", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": panelId, "aria-activedescendant": this.isOpen ? this.optionId(this.activeColumn, activeValue) : null, "aria-invalid": invalid ? 'true' : null, "aria-describedby": message ? `${this.inputId}-message` : null, "data-test": this.dataTest, onInput: this.onInput, onClick: this.onInputClick, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown })), invalid && index.h("uai-icon", { key: 'fd95c33a9471828a529b4b883372e559025fe0bf', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && index.h("uai-icon", { key: '818363272c5dd39721c67cd620878e560a35abc8', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), !this.readonly && (index.h("button", { key: '8ae0e730e07b9913eb698eefa6e25af2fdb187b8', type: "button", class: "clock", part: "picker-button", "aria-label": locale.picker, "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": panelId, disabled: disabled, onClick: this.onButtonClick }, index.h("uai-icon", { key: 'e047943c8ceb9644341a47fc8168465727dfb3eb', name: "clock", size: "medium" }))), index.h("slot", { key: '07eb42e7afde8ec93144be87fedfec1a95a2388b', name: "input-right" })), message && (index.h("div", { key: '454f2a99ac832d078ca9bf07f1e102a5f91aeeee', id: `${this.inputId}-message`, class: "input__message", part: "input__message" }, index.h("uai-typo", { key: 'ad2866a17879cb789e8664a1d33aebdc0faebfa4', variant: "caption", tag: "span", margin: false }, message)))), index.h("div", { key: '820e93dea830902990b0da29d201fcf01c247bd6', id: panelId, ref: (panel) => (this.panel = panel), class: "panel", part: "picker", role: "group", "aria-label": locale.picker, onPointerDown: (event) => event.preventDefault() }, this.isOpen && this.renderColumn('hour', locale.hours, HOURS), this.isOpen && this.renderColumn('minute', locale.minutes, this.minutes))));
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
UaiInputTime.style = uaiInputTimeCss();

exports.uai_input_time = UaiInputTime;
