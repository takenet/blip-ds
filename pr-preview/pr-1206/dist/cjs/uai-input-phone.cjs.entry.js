'use strict';

var index = require('./index-BuAR9UTp.js');
var assetLoader = require('./asset-loader-7VlbCeFu.js');
var uaiFormControl = require('./uai-form-control-B_Rr3WRq.js');
var countriesEs_ES = require('./countries-es_ES-BrZr75bu.js');

// Country keys whose official flag artwork (blip-tokens) is published under another name.
const FLAG_ALIASES = {
    'marshall-islands': 'marshall-island',
    'northern-mariana-islands': 'northern-marianas-islands',
    'turks-and-caicos-islands': 'turks-and-caicos',
    'u.s.-virgin-islands': 'virgin-islands',
    kuwait: 'kwait',
    macau: 'macao',
    macedonia: 'republic-of-macedonia',
    malaysia: 'malasya',
    pitcairn: 'pitcairn-islands',
    'western-sahara': 'sahrawi-arab-democratic-republic',
    'saint-barthelemy': 'st-barts',
    'saint-lucia': 'st-lucia',
    'saint-vincent-and-the-grenadines': 'st-vincent-and-the-grenadines',
    'sao-tome-and-principe': 'sao-tome-and-prince',
    uzbekistan: 'uzbekistn',
    vatican: 'vatican-city',
};
/** Official flag URL for a country key such as "brazil-flag", or null when there is no published artwork. */
function flagUrl(country) {
    const base = country.replace(/-flag$/, '');
    try {
        return assetLoader.getAssetUrl(`asset-icon-${FLAG_ALIASES[base] || base}-flag-solid`);
    }
    catch (_a) {
        return null;
    }
}

/**
 * Internal overlay primitive (w0-primitivas-internas). Opens a floating panel next to its trigger in the top layer
 * (Popover API, with a `position: fixed` fallback), keeps it inside the viewport, follows scroll and resize, and closes
 * it with Escape, a click outside or when the trigger leaves the visible area. Not a public component: listbox, menu,
 * datepicker, tooltip and other UAI components build on it. The panel must include the `uai-overlay-panel` mixin,
 * which provides the spacing/2xs gap, the spacing/xs viewport margin and the duration/moderate fade.
 */
const OPEN_CLASS = 'uai-overlay--open';
const clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));
function computeOverlayLayout(input) {
    const { trigger, panel, viewport, gap, margin } = input;
    const maxWidth = Math.max(0, viewport.width - 2 * margin);
    const minWidth = input.matchTriggerWidth ? Math.min(trigger.width, maxWidth) : 0;
    const width = clamp(panel.width, minWidth, maxWidth);
    const below = viewport.height - trigger.bottom - gap - margin;
    const above = trigger.top - gap - margin;
    const side = panel.height > below && above > below ? 'top' : 'bottom';
    const maxHeight = Math.max(0, side === 'top' ? above : below);
    const height = Math.min(panel.height, maxHeight);
    const top = side === 'top' ? trigger.top - gap - height : trigger.bottom + gap;
    const inRightHalf = trigger.left + trigger.width / 2 > viewport.width / 2;
    const fitsFromStart = trigger.left + width <= viewport.width - margin;
    const align = inRightHalf || !fitsFromStart ? 'end' : 'start';
    const preferredLeft = align === 'end' ? trigger.right - width : trigger.left;
    const left = clamp(preferredLeft, margin, viewport.width - margin - width);
    return { top, left, minWidth, maxWidth, maxHeight, side, align };
}
const supportsPopover = () => typeof HTMLElement !== 'undefined' && 'popover' in HTMLElement.prototype;
// Resolves a length custom property (rem or px) set by the uai-overlay-panel mixin.
function readLength(element, property) {
    const value = getComputedStyle(element).getPropertyValue(property).trim();
    const amount = parseFloat(value);
    if (Number.isNaN(amount))
        return 0;
    if (value.endsWith('rem'))
        return amount * parseFloat(getComputedStyle(document.documentElement).fontSize);
    return amount;
}
// Open overlays, oldest first. Escape and outside clicks act on the most recent one.
const stack = [];
function onKeydown(event) {
    if (event.key !== 'Escape' || !stack.length)
        return;
    event.stopPropagation();
    event.preventDefault();
    stack[stack.length - 1].close('escape');
}
function onPointerdown(event) {
    const path = event.composedPath();
    for (const overlay of [...stack].reverse()) {
        if (overlay.contains(path))
            break;
        overlay.close('outside');
    }
}
function listen(active) {
    const method = active ? 'addEventListener' : 'removeEventListener';
    document[method]('keydown', onKeydown, true);
    document[method]('pointerdown', onPointerdown, true);
}
class UaiOverlay {
    constructor(options) {
        this.popover = supportsPopover();
        this.frame = 0;
        this.opened = false;
        this.schedule = () => {
            cancelAnimationFrame(this.frame);
            this.frame = requestAnimationFrame(() => this.update());
        };
        this.options = options;
        if (this.popover)
            options.panel.setAttribute('popover', 'manual');
    }
    get isOpen() {
        return this.opened;
    }
    open() {
        if (this.opened)
            return;
        const { panel, trigger } = this.options;
        this.opened = true;
        panel.classList.add(OPEN_CLASS);
        if (this.popover)
            panel.showPopover();
        this.update();
        if (!stack.length)
            listen(true);
        stack.push(this);
        window.addEventListener('scroll', this.schedule, { capture: true, passive: true });
        window.addEventListener('resize', this.schedule, { passive: true });
        if (typeof IntersectionObserver !== 'undefined') {
            this.observer = new IntersectionObserver((entries) => {
                if (entries.some((entry) => !entry.isIntersecting))
                    this.close('trigger-hidden');
            });
            this.observer.observe(trigger);
        }
    }
    close(reason = 'api') {
        var _a;
        if (!this.opened)
            return;
        const { panel, trigger, onClose } = this.options;
        this.opened = false;
        stack.splice(stack.indexOf(this), 1);
        if (!stack.length)
            listen(false);
        window.removeEventListener('scroll', this.schedule, { capture: true });
        window.removeEventListener('resize', this.schedule);
        cancelAnimationFrame(this.frame);
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        this.observer = undefined;
        panel.classList.remove(OPEN_CLASS);
        if (this.popover && panel.matches(':popover-open'))
            panel.hidePopover();
        if (reason === 'escape')
            trigger.focus({ preventScroll: true });
        onClose === null || onClose === void 0 ? void 0 : onClose(reason);
    }
    toggle() {
        if (this.opened)
            this.close();
        else
            this.open();
    }
    /** Recomputes the position, for example after the panel content changes. */
    update() {
        if (!this.opened)
            return;
        const { panel, trigger, matchTriggerWidth } = this.options;
        const style = panel.style;
        // Measure the natural size from the viewport origin, without the limits of the previous position.
        style.minWidth = style.maxWidth = style.maxHeight = '';
        style.top = style.left = '0';
        const size = panel.getBoundingClientRect();
        const layout = computeOverlayLayout({
            trigger: trigger.getBoundingClientRect(),
            panel: { width: size.width, height: size.height },
            viewport: { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight },
            gap: readLength(panel, '--uai-overlay-gap'),
            margin: readLength(panel, '--uai-overlay-margin'),
            matchTriggerWidth,
        });
        style.top = `${layout.top}px`;
        style.left = `${layout.left}px`;
        style.minWidth = `${layout.minWidth}px`;
        style.maxWidth = `${layout.maxWidth}px`;
        style.maxHeight = `${layout.maxHeight}px`;
        panel.dataset.side = layout.side;
        panel.dataset.align = layout.align;
    }
    /** True when the event path goes through this overlay's panel or trigger. */
    contains(path) {
        return path.includes(this.options.panel) || path.includes(this.options.trigger);
    }
    destroy() {
        this.close();
        this.options.panel.removeAttribute('popover');
    }
}

const uaiInputPhoneCss = () => `:host{--input-height:var(--uai-control-height-medium, 2.5rem);--input-background:var(--uai-surface-paper, #ffffff);--input-border:var(--uai-border-input, #adb4b8);--input-content:var(--uai-content-primary, #242729);--input-label:var(--uai-content-primary, #242729);--input-message:var(--uai-content-secondary, #5f676d);--input-feedback:var(--input-content);--prefix-background:var(--uai-surface-muted, #f2f3f3);--input-halo:color-mix(     in srgb,     var(--uai-border-ring, #242729) calc(var(--uai-opacity-focus-ring, 0.3) * 100%),     transparent   );display:block;width:var(--uai-input-phone-width, 100%)}:host(.uai-input-phone--size-short){--input-height:var(--uai-control-height-short, 2rem)}:host(.uai-input-phone--danger){--input-border:var(--uai-feedback-error, #cf0022);--input-label:var(--uai-feedback-error, #cf0022);--input-message:var(--uai-feedback-error, #cf0022);--input-feedback:var(--uai-feedback-error, #cf0022)}:host(.uai-input-phone--success){--input-border:var(--uai-feedback-success, #3da329);--input-message:var(--uai-feedback-success, #3da329);--input-feedback:var(--uai-feedback-success, #3da329)}:host(.uai-input-phone--disabled){--input-background:var(--uai-surface-muted, #f2f3f3);--input-border:var(--uai-border-default, #e4e6e7);--input-content:var(--uai-content-disabled, #848e94);--input-label:var(--uai-content-disabled, #848e94);--input-message:var(--uai-content-disabled, #848e94);--input-feedback:var(--uai-content-disabled, #848e94)}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.input__label,.input__message,.prefix__code{--uai-typo-color:currentColor}.input__label{color:var(--input-label)}.input__message{padding:0 var(--uai-spacing-xs, 0.5rem);color:var(--input-message)}.input__control{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);height:var(--input-height);padding:0 var(--uai-spacing-xs, 0.5rem) 0 var(--uai-spacing-2xs, 0.25rem);border:var(--uai-border-width-default, 1px) solid var(--input-border);border-radius:var(--uai-radius-lg, 0.75rem);background-color:var(--input-background);color:var(--input-content);cursor:text;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.input__control{-webkit-transition:none;transition:none}}.input__control:focus-within{--input-border:var(--uai-border-ring, #242729);-webkit-box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo);box-shadow:0 0 0 var(--uai-border-width-thick, 2px) var(--input-halo)}@media (forced-colors: active){.input__control:focus-within{-webkit-box-shadow:none;box-shadow:none;outline:var(--uai-border-width-thick, 2px) solid CanvasText}}:host(:not(.uai-input-phone--disabled):not(.uai-input-phone--readonly):not(.uai-input-phone--danger):not(.uai-input-phone--success)) .input__control:hover:not(:focus-within){--input-border:var(--uai-content-secondary, #5f676d)}:host(.uai-input-phone--disabled) .input__control{cursor:not-allowed}.input__icon{-ms-flex:none;flex:none;margin-left:var(--uai-spacing-2xs, 0.25rem);color:var(--input-content)}.input__feedback{-ms-flex:none;flex:none;color:var(--input-feedback)}.prefix{display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-2xs, 0.25rem);margin:0;padding:var(--uai-spacing-2xs, 0.25rem);border:0;border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--prefix-background);color:var(--input-content);font:inherit;cursor:pointer}.prefix:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.prefix:disabled{cursor:inherit}@media (forced-colors: active){.prefix{border:var(--uai-border-width-default, 1px) solid ButtonText}}.prefix__flag,.option__flag-image{display:block;width:var(--uai-sizing-sm, 1rem);height:var(--uai-sizing-sm, 1rem);-o-object-fit:contain;object-fit:contain}.prefix__arrow{-webkit-transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.prefix__arrow{-webkit-transition:none;transition:none}}:host(.uai-input-phone--open) .prefix__arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.input__field{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:center;align-items:center;min-width:0;height:100%}.input__native{-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:0;height:100%;margin:0;padding:0;border:0;outline:none;background:transparent;color:inherit;font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem);text-overflow:ellipsis;-webkit-appearance:none;-moz-appearance:none;appearance:none}.input__native::-webkit-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-moz-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::-ms-input-placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native::placeholder{color:var(--uai-content-placeholder, #adb4b8);opacity:1}.input__native:disabled{cursor:not-allowed;opacity:1;-webkit-text-fill-color:currentColor}.input__native:disabled::-webkit-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-moz-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled:-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::-ms-input-placeholder{color:var(--uai-content-disabled, #848e94)}.input__native:disabled::placeholder{color:var(--uai-content-disabled, #848e94)}.list{--uai-overlay-gap:var(--uai-spacing-2xs, 0.25rem);--uai-overlay-margin:var(--uai-spacing-xs, 0.5rem);position:fixed;inset:auto;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0;border:0;overflow:auto;background:transparent;color:inherit;opacity:0;-webkit-transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete;transition:opacity var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), display var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete, overlay var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) allow-discrete}.list:not(.uai-overlay--open){display:none}.list.uai-overlay--open{opacity:1}@starting-style{.list.uai-overlay--open{opacity:0}}@media (prefers-reduced-motion: reduce){.list{-webkit-transition:none;transition:none}}.list{min-width:var(--uai-width-menu, 14rem);padding:var(--uai-spacing-2xs, 0.25rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-lg, 0.75rem);background:var(--uai-surface-paper, #ffffff);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));color:var(--uai-content-primary, #242729);list-style:none;outline:none}@media (forced-colors: active){.list{border-color:CanvasText}}.option{--uai-typo-color:currentColor;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);padding:var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-md, 0.5rem);cursor:pointer}.option[aria-selected=true]{background:var(--uai-overlay-selected, rgba(0, 0, 0, 0.06))}.option--active{background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08))}@media (forced-colors: active){.option--active{outline:var(--uai-border-width-thick, 2px) solid Highlight}}.option__flag{-ms-flex:none;flex:none;width:var(--uai-sizing-sm, 1rem)}.option__name{-ms-flex:1 1 auto;flex:1 1 auto;min-width:0}.option__code{-ms-flex:none;flex:none;color:var(--uai-content-secondary, #5f676d)}`;

const SIZES = ['short', 'medium'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const COUNTRIES = {
    pt_BR: countriesEs_ES.countriesPt_BR,
    en_US: countriesEs_ES.countriesEn_US,
    es_ES: countriesEs_ES.countriesEs_ES,
};
const TEXTS = {
    pt_BR: {
        label: 'Telefone',
        country: 'Código do país',
        list: 'Países',
        required: 'Informe o telefone.',
        number: 'Use apenas números, espaços e os caracteres + - ( ) .',
    },
    en_US: {
        label: 'Phone number',
        country: 'Country code',
        list: 'Countries',
        required: 'Enter the phone number.',
        number: 'Use only numbers, spaces and the characters + - ( ) .',
    },
    es_ES: {
        label: 'Teléfono',
        country: 'Código del país',
        list: 'Países',
        required: 'Ingrese el teléfono.',
        number: 'Use solo números, espacios y los caracteres + - ( ) .',
    },
};
const PHONE_CHARACTERS = /^[0-9+\-(). ]*$/;
const normalize = (text) => text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
let instances = 0;
const UaiInputPhone = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiPhoneNumberChange = index.createEvent(this, "uaiPhoneNumberChange");
        this.uaiInput = index.createEvent(this, "uaiInput");
        this.uaiCancel = index.createEvent(this, "uaiCancel");
        this.uaiFocus = index.createEvent(this, "uaiFocus");
        this.uaiBlur = index.createEvent(this, "uaiBlur");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.isOpen = false;
        this.activeIndex = -1;
        this.validationDanger = false;
        this.disabledByForm = false;
        this.defaults = { text: '', code: '+55', country: '', isoCode: '' };
        this.id = `uai-input-phone-${++instances}`;
        /**
         * Name of the value in the submitted form data. Same as name.
         */
        this.inputName = '';
        /**
         * Phone number typed by the person, without the country code. Free text: no mask or formatting is applied.
         */
        this.text = '';
        /**
         * Dial code of the selected country, for example "+55" (default) or "+1". Use changeCountry to pick a country that
         * shares its code with others.
         */
        this.value = '+55';
        /**
         * Language of the country names and default texts. Can be one of: 'pt_BR' (default), 'en_US', 'es_ES'.
         */
        this.language = 'pt_BR';
        /**
         * Height of the field. Can be one of: 'short', 'medium' (default).
         */
        this.size = 'medium';
        /**
         * Example of the expected number, shown while the field is empty, for example "11 99999-0000". Do not use it as
         * the label.
         */
        this.placeholder = '';
        /**
         * UaiIcon name shown before the country selector.
         */
        this.icon = '';
        /**
         * If true, the number can be selected and copied but not edited, and the country cannot be changed.
         */
        this.readonly = false;
        /**
         * If true, the field and the country selector cannot be used and the value is left out of the form data.
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
         * Message below the field that helps to fill it, for example the expected format.
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
        /**
         * Data test id, set on the country selector button.
         */
        this.dtSelectFlag = null;
        this.onOverlayClose = (reason) => {
            if (this.isOpen)
                this.isOpen = false;
            if (reason === 'escape' || reason === 'outside')
                this.uaiCancel.emit();
        };
        this.onButtonClick = () => {
            if (this.isOpen)
                this.closeList();
            else
                this.openList();
        };
        this.onButtonKeyDown = (event) => {
            if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                this.openList();
            }
        };
        this.onListKeyDown = (event) => {
            var _a, _b;
            const keys = {
                ArrowDown: () => this.moveActive(this.activeIndex + 1),
                ArrowUp: () => this.moveActive(this.activeIndex - 1),
                Home: () => this.moveActive(0),
                End: () => this.moveActive(this.countryKeys.length - 1),
                Enter: () => this.select(this.activeIndex),
                ' ': () => this.select(this.activeIndex),
            };
            if (keys[event.key]) {
                event.preventDefault();
                keys[event.key]();
            }
            else if (event.key === 'Tab') {
                event.preventDefault();
                this.closeList();
                if (event.shiftKey)
                    (_a = this.button) === null || _a === void 0 ? void 0 : _a.focus();
                else
                    (_b = this.nativeInput) === null || _b === void 0 ? void 0 : _b.focus();
            }
            else if (event.key.length === 1 && /\p{L}/u.test(event.key)) {
                event.preventDefault();
                this.typeAhead(event.key);
            }
        };
        this.onInput = (event) => {
            this.text = event.target.value;
            this.uaiInput.emit(event);
        };
        this.onFocus = () => {
            this.uaiFocus.emit();
        };
        this.onBlur = () => {
            this.showValidation(true);
            this.uaiBlur.emit();
        };
        this.onKeyDown = (event) => {
            var _a, _b;
            if (event.key === 'Enter' && !event.isComposing)
                (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.form) === null || _b === void 0 ? void 0 : _b.requestSubmit();
        };
        // Clicks on the field box (outside the selector and slotted content) focus the number, as a native field does.
        this.onControlClick = (event) => {
            var _a;
            const path = event.composedPath();
            if (this.button && path.includes(this.button))
                return;
            if (!this.el.contains(event.target))
                (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
        };
    }
    /**
     * Selects a country. code is the dial code ("+1"), isoCode the ISO text ("US / USA") and flag the country key
     * ("united-states-flag").
     */
    async changeCountry(code, isoCode, flag) {
        this.selectedCountry = flag;
        this.isoCode = isoCode;
        this.value = code;
        this.emitChange();
    }
    /**
     * Removes the focus from the field.
     */
    async removeFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.blur();
    }
    /**
     * Moves the focus to the number.
     */
    async setFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Returns true when the number meets required and has only digits, spaces and + - ( ) .
     */
    async isValid() {
        return !this.validityFlags().invalid;
    }
    /**
     * Clears the number. The country stays selected.
     */
    async clear() {
        this.text = '';
    }
    inputNameChanged() {
        if (!this.name && this.inputName)
            this.name = this.inputName;
    }
    textChanged() {
        this.syncFormValue();
        this.emitChange();
    }
    codeChanged() {
        this.resolveCountry();
        this.syncFormValue();
    }
    languageChanged() {
        this.resolveCountry();
    }
    optionsChanged() {
    }
    onInvalid() {
        this.showValidation(true);
    }
    componentWillLoad() {
        var _a;
        this.inputNameChanged();
        this.resolveCountry();
        this.defaults = {
            text: this.text || '',
            code: this.value,
            country: this.selectedCountry,
            isoCode: this.isoCode,
        };
        // Real browsers only: the Stencil mock DOM attaches internals without the form API.
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new uaiFormControl.UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.formValue(this.defaults.code, this.defaults.text),
                onReset: () => {
                    this.validationDanger = false;
                    this.selectedCountry = this.defaults.country;
                    this.isoCode = this.defaults.isoCode;
                    this.value = this.defaults.code;
                    this.text = this.defaults.text;
                },
                onDisabledChange: (disabled) => {
                    queueMicrotask(() => {
                        var _a, _b;
                        const formDisabled = (_b = (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.disabled) !== null && _b !== void 0 ? _b : disabled;
                        if (!this.disabled && this.disabledByForm !== formDisabled)
                            this.disabledByForm = formDisabled;
                        if (formDisabled)
                            this.closeList();
                    });
                },
            });
        }
        this.warnLegacyUsage();
    }
    componentDidLoad() {
        if (this.button && this.list) {
            this.overlay = new UaiOverlay({
                trigger: this.button,
                panel: this.list,
                matchTriggerWidth: false,
                onClose: this.onOverlayClose,
            });
        }
    }
    componentDidRender() {
        var _a, _b, _c, _d;
        if (this.nativeInput && this.nativeInput.value !== (this.text || '')) {
            this.nativeInput.value = this.text || '';
        }
        if (this.isOpen && this.overlay && !this.overlay.isOpen) {
            this.overlay.open();
            (_a = this.list) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
        }
        if (this.isOpen) {
            (_b = this.overlay) === null || _b === void 0 ? void 0 : _b.update();
            (_d = (_c = this.activeOption()) === null || _c === void 0 ? void 0 : _c.scrollIntoView) === null || _d === void 0 ? void 0 : _d.call(_c, { block: 'nearest' });
        }
        this.syncValidity();
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
        if (typeof state !== 'string')
            return;
        const [code, ...number] = state.split(' ');
        if (code)
            this.value = code;
        this.text = number.join(' ');
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
    get countries() {
        return COUNTRIES[this.languageValue];
    }
    get countryKeys() {
        return Object.keys(this.countries);
    }
    get texts() {
        return TEXTS[this.languageValue];
    }
    get isDisabled() {
        return this.disabled || this.disabledByForm;
    }
    get canPick() {
        return !this.isDisabled && !this.readonly;
    }
    // Keeps the selected country when it still has the current code; otherwise picks the first country with it.
    resolveCountry() {
        const countries = this.countries;
        const current = this.selectedCountry && countries[this.selectedCountry];
        if (current && current.code === this.value) {
            this.isoCode = current.isoCode;
            return;
        }
        const key = this.countryKeys.find((name) => countries[name].code === this.value) || this.countryKeys[0];
        this.selectedCountry = key;
        this.isoCode = countries[key].isoCode;
    }
    formValue(code, text) {
        return text ? `${code || ''} ${text}`.trim() : null;
    }
    syncFormValue() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.formValue(this.value, this.text || ''));
    }
    emitChange() {
        this.uaiPhoneNumberChange.emit({
            value: this.text,
            code: this.value,
            isoCode: this.isoCode,
            country: this.selectedCountry,
        });
    }
    warnLegacyUsage() {
    }
    validityFlags() {
        const text = this.text || '';
        if (this.required && !text) {
            return {
                invalid: true,
                flags: { valueMissing: true },
                message: this.requiredErrorMessage || this.texts.required,
            };
        }
        if (!PHONE_CHARACTERS.test(text)) {
            return { invalid: true, flags: { patternMismatch: true }, message: this.numberErrorMessage || this.texts.number };
        }
        return { invalid: false, flags: {}, message: '' };
    }
    syncValidity() {
        var _a;
        const { flags, message } = this.validityFlags();
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValidity(flags, message, this.nativeInput);
    }
    // Shows the validation result from now on; the message follows the value while it stays shown.
    showValidation(show) {
        const danger = show && this.validityFlags().invalid;
        if (danger !== this.validationDanger)
            this.validationDanger = danger;
    }
    activeOption() {
        var _a;
        return ((_a = this.list) === null || _a === void 0 ? void 0 : _a.querySelector('.option--active')) || null;
    }
    openList() {
        if (!this.canPick || this.isOpen)
            return;
        const selected = this.countryKeys.indexOf(this.selectedCountry);
        this.activeIndex = selected < 0 ? 0 : selected;
        this.isOpen = true;
    }
    closeList(reason = 'api') {
        var _a;
        if (!this.isOpen)
            return;
        this.isOpen = false;
        (_a = this.overlay) === null || _a === void 0 ? void 0 : _a.close(reason);
    }
    select(index) {
        var _a;
        const key = this.countryKeys[index];
        if (!key)
            return;
        const country = this.countries[key];
        this.closeList();
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.focus();
        if (key === this.selectedCountry)
            return;
        this.changeCountry(country.code, country.isoCode, key);
    }
    moveActive(index) {
        const last = this.countryKeys.length - 1;
        this.activeIndex = Math.min(Math.max(index, 0), last);
    }
    // Activates the next country whose name starts with the typed letter, cycling from the active one.
    typeAhead(letter) {
        const keys = this.countryKeys;
        const target = normalize(letter);
        for (let step = 1; step <= keys.length; step++) {
            const index = (this.activeIndex + step) % keys.length;
            if (normalize(this.countries[keys[index]].name).startsWith(target)) {
                this.activeIndex = index;
                return;
            }
        }
    }
    renderFlag(key, className) {
        const url = key ? flagUrl(key) : null;
        return url ? index.h("img", { class: className, src: url, alt: "", draggable: false }) : null;
    }
    renderOptions() {
        if (!this.isOpen)
            return null;
        return this.countryKeys.map((key, index$1) => {
            const country = this.countries[key];
            return (index.h("li", { id: `${this.id}-option-${index$1}`, key: key, role: "option", part: "country-option", "data-country": key, "aria-selected": key === this.selectedCountry ? 'true' : 'false', class: { option: true, 'option--active': index$1 === this.activeIndex }, onClick: () => this.select(index$1), onPointerMove: () => {
                    if (this.activeIndex !== index$1)
                        this.activeIndex = index$1;
                } }, index.h("span", { class: "option__flag" }, this.renderFlag(key, 'option__flag-image')), index.h("uai-typo", { class: "option__name", variant: "body-base", tag: "span", margin: false }, country.name), index.h("uai-typo", { class: "option__code", variant: "body-base", tag: "span", margin: false }, country.code)));
        });
    }
    render() {
        var _a;
        const disabled = this.isDisabled;
        const validity = this.validityFlags();
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
        const label = (_a = this.label) !== null && _a !== void 0 ? _a : this.texts.label;
        const country = this.countries[this.selectedCountry];
        const countryName = country ? `${country.name} ${this.value}` : this.value;
        return (index.h(index.Host, { key: '36a928ada9517deadb95d2c88eabc4a89c8bf005', "aria-disabled": disabled ? 'true' : null, class: {
                [`uai-input-phone--size-${this.sizeValue}`]: true,
                'uai-input-phone--danger': invalid,
                'uai-input-phone--success': success,
                'uai-input-phone--disabled': disabled,
                'uai-input-phone--readonly': this.readonly && !disabled,
                'uai-input-phone--open': this.isOpen,
            } }, index.h("div", { key: '64552c7eb5695d3c795acba1e1b9ecc671a659a3', class: "input" }, label && (index.h("label", { key: '4fdda3921e3634e9d2552b91f4db1d36e49dfc6f', class: "input__label", for: this.id }, index.h("uai-typo", { key: '536e9b224a38fce5ad35dc0f0db8aa3c67f325eb', variant: "caption", bold: "semibold", tag: "span", margin: false }, label))), index.h("div", { key: 'a7bd8fd5f0c13e40fc10bb00cb483f89b6236c19', class: "input__control", part: "input-container", onClick: this.onControlClick }, this.icon && index.h("uai-icon", { key: '5ff45d9e0e53971082a8372d95074f460146f0aa', class: "input__icon", name: this.icon, size: "medium" }), index.h("button", { key: '791b225b007ef2dc9a05e4cf43550d2ae4cfd462', type: "button", ref: (button) => (this.button = button), class: "prefix", part: "country-button", "aria-haspopup": "listbox", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-controls": `${this.id}-list`, "aria-label": `${this.texts.country}: ${countryName}`, disabled: !this.canPick, "data-test": this.dtSelectFlag, onClick: this.onButtonClick, onKeyDown: this.onButtonKeyDown }, this.renderFlag(this.selectedCountry, 'prefix__flag'), index.h("uai-typo", { key: '30c6a2225d7abb92fe88984566bae33a33989f27', class: "prefix__code", variant: "body-base", tag: "span", margin: false }, this.value), !this.readonly && index.h("uai-icon", { key: '68c5d92b080d090a2473a3737749f4adfe3a9ae6', class: "prefix__arrow", name: "arrow-down", size: "medium" })), index.h("div", { key: 'b75f5eeb2b7e298f10dfd31bb33991f1a16becc3', class: "input__field" }, index.h("input", { key: '7949e60bd812753b7e8bcb61cbea66fb4d60f246', id: this.id, ref: (input) => (this.nativeInput = input), class: "input__native", part: "input", type: "tel", inputMode: "tel", autocomplete: "tel-national", value: this.text || '', placeholder: this.placeholder, required: this.required, readOnly: this.readonly, disabled: disabled, maxLength: this.value === '+55' ? 25 : undefined, "aria-label": this.ariaLabel || null, "aria-invalid": invalid ? 'true' : null, "aria-describedby": message ? `${this.id}-message` : null, "data-test": this.dataTest, onInput: this.onInput, onFocus: this.onFocus, onBlur: this.onBlur, onKeyDown: this.onKeyDown })), invalid && index.h("uai-icon", { key: '1f1317079f40b76097fd3215d291f26f5492f909', class: "input__feedback", name: "error", theme: "outline", size: "medium" }), success && index.h("uai-icon", { key: '21431c6ca466118dc794adc115d9f384b77f6df6', class: "input__feedback", name: "checkball", theme: "solid", size: "medium" }), index.h("slot", { key: '8049cb80021d5f392ffef0beda2a0c552c468d7f', name: "input-right" })), message && (index.h("div", { key: 'de3a6c7b2daedc0b49a92bf667c74eebda4981ff', id: `${this.id}-message`, class: "input__message", part: "input__message" }, index.h("uai-typo", { key: '47583d84e75056bf863406388e9c5411e369301f', variant: "caption", tag: "span", margin: false }, message)))), index.h("ul", { key: '0fc505605d6e325577be36368581179d08561ea1', id: `${this.id}-list`, ref: (list) => (this.list = list), class: "list", part: "country-list", role: "listbox", tabindex: "-1", "aria-label": this.texts.list, "aria-activedescendant": this.isOpen && this.activeIndex >= 0 ? `${this.id}-option-${this.activeIndex}` : null, onKeyDown: this.onListKeyDown }, this.renderOptions())));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "inputName": [{
                "inputNameChanged": 0
            }],
        "text": [{
                "textChanged": 0
            }],
        "value": [{
                "codeChanged": 0
            }],
        "language": [{
                "languageChanged": 0
            }],
        "options": [{
                "optionsChanged": 0
            }]
    }; }
};
UaiInputPhone.style = uaiInputPhoneCss();

exports.uai_input_phone = UaiInputPhone;
