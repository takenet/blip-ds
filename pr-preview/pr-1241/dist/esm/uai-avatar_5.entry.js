import { r as registerInstance, c as createEvent, h, H as Host, g as getElement, t as transformTag } from './index-B3G05Lxx.js';
import { c as colorLetter } from './color-letter-1bmWbKgO.js';
import { U as UaiFormControl } from './uai-form-control-BkRP7pRQ.js';

const firstLetter = (word) => (word || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .charAt(0)
    .toUpperCase();
/** Initials of a full name: first letter of the first and of the last name ("ana maria silva" -> "AS"). */
function initialsOf(name) {
    const words = (name || '').trim().split(/\s+/).filter(Boolean);
    if (!words.length)
        return '';
    return firstLetter(words[0]) + (words.length > 1 ? firstLetter(words[words.length - 1]) : '');
}

const uaiAvatarCss = () => `:host{--avatar-size:var(--uai-sizing-3xl, 3rem);--avatar-font-size:var(--uai-heading-md-font-size, 1.25rem);--avatar-line-height:var(--uai-heading-md-line-height, 1.75rem);--avatar-background:var(--uai-surface-muted, #f2f3f3);--avatar-content:var(--uai-content-secondary, #5f676d);display:-ms-inline-flexbox;display:inline-flex;-ms-flex:0 0 var(--avatar-size);flex:0 0 var(--avatar-size);-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--avatar-size);height:var(--avatar-size);border-radius:var(--uai-radius-full, 624.9375rem);vertical-align:middle}:host([hidden]){display:none}:host(.uai-avatar--size-micro){--avatar-size:var(--uai-sizing-lg, 1.5rem);--avatar-font-size:var(--uai-body-sm-font-size, 0.75rem);--avatar-line-height:var(--uai-body-sm-line-height, 1.25rem)}:host(.uai-avatar--size-extra-small){--avatar-size:var(--uai-sizing-xl, 2rem);--avatar-font-size:var(--uai-body-base-font-size, 0.875rem);--avatar-line-height:var(--uai-body-base-line-height, 1.375rem)}:host(.uai-avatar--size-small){--avatar-size:var(--uai-sizing-2xl, 2.5rem);--avatar-font-size:var(--uai-body-lg-font-size, 1rem);--avatar-line-height:var(--uai-body-lg-line-height, 1.5rem)}:host(.uai-avatar--size-large){--avatar-size:var(--uai-sizing-4xl, 4rem);--avatar-font-size:var(--uai-heading-lg-font-size, 1.5rem);--avatar-line-height:var(--uai-heading-lg-line-height, 2rem)}:host(.uai-avatar--size-extra-large){--avatar-size:var(--uai-sizing-5xl, 4.5rem);--avatar-font-size:var(--uai-heading-xl-font-size, 2rem);--avatar-line-height:var(--uai-heading-xl-line-height, 2.5rem)}:host(.uai-avatar--color-info){--avatar-background:var(--uai-feedback-info-subtle, #eff6ff);--avatar-content:var(--uai-content-primary, #242729)}:host(.uai-avatar--color-success){--avatar-background:var(--uai-feedback-success-subtle, #ecfdf5);--avatar-content:var(--uai-content-primary, #242729)}:host(.uai-avatar--color-warning){--avatar-background:var(--uai-feedback-warning-subtle, #fff7ed);--avatar-content:var(--uai-content-primary, #242729)}:host(.uai-avatar--color-error){--avatar-background:var(--uai-feedback-error-subtle, #fef2f2);--avatar-content:var(--uai-content-primary, #242729)}:host(.uai-avatar--upload){cursor:pointer}:host(.uai-avatar--upload):focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.avatar{position:relative;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;overflow:hidden;border-radius:inherit;background-color:var(--avatar-background);color:var(--avatar-content);font-family:var(--uai-font-family-sans, Figtree), sans-serif;font-size:var(--avatar-font-size);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--avatar-line-height)}.avatar__image{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.avatar__initials,.avatar__ellipsis{overflow:hidden;white-space:nowrap}.avatar__icon{color:currentColor}.avatar__upload{position:absolute;inset:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--uai-overlay-default, rgba(0, 0, 0, 0.72));color:var(--uai-content-inverse, #ffffff);opacity:0;-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.avatar__upload{-webkit-transition:none;transition:none}}:host(.uai-avatar--upload:hover) .avatar__upload,:host(.uai-avatar--upload:focus-visible) .avatar__upload{opacity:1}.avatar__file{display:none}@media (forced-colors: active){.avatar{border:var(--uai-border-width-default, 1px) solid CanvasText}}`;

const SIZES = ['micro', 'extra-small', 'small', 'standard', 'large', 'extra-large'];
const COLORS = ['colorLetter', 'system', 'success', 'warning', 'error', 'info', 'surface'];
// system and info share feedback/info-subtle: UAI has a single information surface.
const UAI_COLOR = {
    system: 'info',
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
    surface: 'surface',
};
const ICON_SIZE = {
    micro: 'x-small',
    'extra-small': 'small',
    small: 'medium',
    standard: 'medium',
    large: 'medium',
    'extra-large': 'medium',
};
const UaiAvatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiClickAvatar = createEvent(this, "uaiClickAvatar");
        this.uaiImageUpload = createEvent(this, "uaiImageUpload");
        this.imageFailed = false;
        /**
         * Full name of the person. Builds the initials (first letter of the first and the last name) and the accessible
         * name.
         */
        this.name = null;
        /**
         * URL of the photo. Without it, or if it fails to load, the initials are shown.
         */
        this.thumbnail = null;
        /**
         * Avatar size. Can be one of: 'micro', 'extra-small', 'small', 'standard' (default), 'large', 'extra-large'.
         */
        this.size = 'standard';
        /**
         * Background behind the initials. Can be one of: 'colorLetter' (default, picked by the first letter of the name),
         * 'system', 'success', 'warning', 'error', 'info', 'surface' (neutral).
         */
        this.color = 'colorLetter';
        /**
         * If true, shows the upload icon on hover and focus. The click only emits uaiClickAvatar; the app opens its own
         * picker.
         */
        this.upload = false;
        /**
         * If true, activating the avatar opens the image picker, shows the chosen image and emits uaiImageUpload.
         */
        this.openUpload = false;
        /**
         * Number of hidden people, shown as "+N" (for example in a group of avatars).
         */
        this.ellipsis = null;
        /**
         * Data test id, set on the host.
         */
        this.dataTest = null;
        this.onClick = (event) => {
            this.activate(event);
        };
        this.onKeyDown = (event) => {
            if (!this.interactive || (event.key !== 'Enter' && event.key !== ' '))
                return;
            event.preventDefault();
            this.activate(event);
        };
        this.onFileChange = (event) => {
            var _a;
            const file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (!file)
                return;
            const reader = new FileReader();
            reader.onload = () => {
                const url = reader.result;
                this.thumbnail = url;
                this.uaiImageUpload.emit(url);
            };
            reader.readAsDataURL(file);
        };
    }
    resetImageError() {
        this.imageFailed = false;
    }
    componentWillLoad() {
    }
    get sizeValue() {
        if (SIZES.includes(this.size))
            return this.size;
        return 'standard';
    }
    get personName() {
        return (this.name || this.label || '').trim();
    }
    get image() {
        return this.thumbnail || this.src || '';
    }
    get interactive() {
        return !!(this.upload || this.openUpload);
    }
    get text() {
        const fromName = initialsOf(this.personName);
        if (fromName)
            return fromName;
        return (this.initials || '').trim().slice(0, 2).toUpperCase();
    }
    resolvedColor(initials) {
        let color = this.color;
        if (!COLORS.includes(color)) {
            color = 'colorLetter';
        }
        if (color !== 'colorLetter')
            return UAI_COLOR[color];
        const letter = colorLetter.find((item) => item.value === initials.charAt(0));
        return letter ? UAI_COLOR[letter.color] || 'surface' : 'surface';
    }
    activate(event) {
        var _a;
        this.uaiClickAvatar.emit(event);
        if (this.openUpload)
            (_a = this.fileInput) === null || _a === void 0 ? void 0 : _a.click();
    }
    renderContent(size, initials) {
        if (this.ellipsis) {
            return (h("span", { class: "avatar__ellipsis", "aria-hidden": "true" }, `+${this.ellipsis}`));
        }
        if (this.image && !this.imageFailed) {
            return (h("img", { class: "avatar__image", src: this.image, alt: "", "aria-hidden": "true", onError: () => (this.imageFailed = true) }));
        }
        if (initials) {
            return (h("span", { class: "avatar__initials", "aria-hidden": "true" }, initials));
        }
        return (h("uai-icon", { class: "avatar__icon", name: "avatar-user", theme: "outline", size: ICON_SIZE[size], "aria-hidden": "true" }));
    }
    render() {
        const size = this.sizeValue;
        const initials = this.text;
        const hasImage = !!this.image && !this.imageFailed;
        const color = this.ellipsis || hasImage || !initials ? 'surface' : this.resolvedColor(initials);
        const name = this.personName;
        const interactive = this.interactive;
        const accessibleName = name || (this.ellipsis ? `+${this.ellipsis}` : '');
        return (h(Host, { key: 'f755e54a5a6b15c7292f641e43ede68cdfb175b2', class: {
                [`uai-avatar--size-${size}`]: true,
                [`uai-avatar--color-${color}`]: true,
                'uai-avatar--upload': interactive,
            }, role: interactive ? 'button' : accessibleName ? 'img' : null, tabindex: interactive ? '0' : null, "aria-label": interactive ? accessibleName || 'Avatar' : accessibleName || null, "aria-hidden": !interactive && !accessibleName ? 'true' : null, "data-test": this.dataTest, onClick: this.onClick, onKeyDown: this.onKeyDown }, h("div", { key: 'b6f13f298a96922208c50a22b56925fb06884152', class: "avatar", part: "avatar" }, this.renderContent(size, initials), interactive && (h("div", { key: '479cd9e22d5e1a2ef284240a0cbfa52e566a960b', class: "avatar__upload", "aria-hidden": "true" }, h("uai-icon", { key: '8847eb973d780a8c12bd7a7970827204aa67e4ed', name: "upload", theme: "outline", size: ICON_SIZE[size] })))), this.openUpload && (h("input", { key: '901ba7657428e2f2fd5dfe04ee7c99c5806299f8', ref: (input) => (this.fileInput = input), class: "avatar__file", type: "file", accept: "image/*", tabindex: "-1", "aria-hidden": "true", onChange: this.onFileChange, onClick: (event) => event.stopPropagation() }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "thumbnail": [{
                "resetImageError": 0
            }],
        "src": [{
                "resetImageError": 0
            }]
    }; }
};
UaiAvatar.style = uaiAvatarCss();

const uaiCheckboxCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif}.checkbox{display:-ms-inline-flexbox;display:inline-flex;min-height:var(--uai-control-height-short, 2rem);-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox__box{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;width:var(--uai-sizing-md, 1.25rem);height:var(--uai-sizing-md, 1.25rem)}.checkbox__control{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:inherit;z-index:1}.checkbox__indicator{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:grid;place-content:center;width:100%;height:100%;pointer-events:none;border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:var(--uai-radius-md, 0.5rem);background:var(--uai-surface-paper, #ffffff);color:var(--uai-action-primary-foreground, #ffffff);cursor:inherit;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.checkbox__indicator{-webkit-transition:none;transition:none}}.checkbox__indicator::before{position:absolute;inset:calc(var(--uai-spacing-3xs, 0.125rem) - var(--uai-spacing-xs, 0.5rem) - var(--uai-border-width-default, 1px));border-radius:var(--uai-radius-full, 624.9375rem);background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));content:"";opacity:0;pointer-events:none;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.checkbox__indicator::before{-webkit-transition:none;transition:none}}.checkbox__indicator::after{-webkit-box-sizing:border-box;box-sizing:border-box;width:calc(var(--uai-sizing-md, 1.25rem) / 2);height:calc(var(--uai-sizing-md, 1.25rem) * 0.35);border:0 solid currentColor;border-left-width:var(--uai-border-width-thick, 2px);border-bottom-width:var(--uai-border-width-thick, 2px);content:"";-webkit-transform:translateY(calc(-1 * var(--uai-border-width-default, 1px))) rotate(-45deg);transform:translateY(calc(-1 * var(--uai-border-width-default, 1px))) rotate(-45deg);visibility:hidden}.checkbox__control:checked+.checkbox__indicator,.checkbox__control:indeterminate+.checkbox__indicator{border-width:var(--uai-border-width-thick, 2px);background:var(--uai-action-primary-default, #242729)}.checkbox__control:checked+.checkbox__indicator::before,.checkbox__control:indeterminate+.checkbox__indicator::before{inset:calc(var(--uai-spacing-3xs, 0.125rem) - var(--uai-spacing-xs, 0.5rem) - var(--uai-border-width-thick, 2px))}.checkbox__control:checked+.checkbox__indicator::after,.checkbox__control:indeterminate+.checkbox__indicator::after{visibility:visible}.checkbox__control:indeterminate+.checkbox__indicator::after{width:var(--uai-sizing-xs, 0.75rem);height:calc(var(--uai-sizing-md, 1.25rem) / 10);border:0;background:currentColor;-webkit-transform:none;transform:none}.checkbox__control:hover:not(:disabled)+.checkbox__indicator{border-color:var(--uai-action-primary-hover, #181a1b)}.checkbox__control:checked:hover:not(:disabled)+.checkbox__indicator,.checkbox__control:indeterminate:hover:not(:disabled)+.checkbox__indicator{border-color:var(--uai-action-primary-hover, #181a1b);background:var(--uai-action-primary-hover, #181a1b)}.checkbox__control:focus-visible+.checkbox__indicator{border-color:var(--uai-border-ring, #242729)}.checkbox__control:disabled+.checkbox__indicator{border-color:var(--uai-border-input, #adb4b8);background:var(--uai-surface-muted, #f2f3f3);color:var(--uai-content-disabled, #848e94);cursor:not-allowed}.checkbox__control:checked:disabled+.checkbox__indicator,.checkbox__control:indeterminate:disabled+.checkbox__indicator{border-color:var(--uai-border-input, #adb4b8);background:var(--uai-content-disabled, #848e94);color:var(--uai-surface-paper, #ffffff)}@media (forced-colors: active){.checkbox__control:checked+.checkbox__indicator,.checkbox__control:indeterminate+.checkbox__indicator{forced-color-adjust:none;border-color:SelectedItem;background:SelectedItem;color:SelectedItemText}.checkbox__control:disabled+.checkbox__indicator{border-color:GrayText;color:GrayText}}.checkbox:hover .checkbox__control:not(:disabled)+.checkbox__indicator::before,.checkbox__control:focus-visible:not(:disabled)+.checkbox__indicator::before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}:host(.uai-checkbox--short) .checkbox__box{width:var(--uai-sizing-sm, 1rem);height:var(--uai-sizing-sm, 1rem)}:host(.uai-checkbox--short) .checkbox__indicator::after{width:calc(var(--uai-sizing-sm, 1rem) / 2);height:calc(var(--uai-sizing-sm, 1rem) * 0.35)}:host(.uai-checkbox--short) .checkbox__control:indeterminate+.checkbox__indicator::after{width:calc(var(--uai-sizing-sm, 1rem) * 0.6);height:calc(var(--uai-sizing-sm, 1rem) / 10)}:host(.uai-checkbox--short) .checkbox__indicator{border-radius:var(--uai-radius-sm, 0.25rem)}:host(.uai-checkbox--tall) .checkbox__box{width:var(--uai-sizing-lg, 1.5rem);height:var(--uai-sizing-lg, 1.5rem)}:host(.uai-checkbox--tall) .checkbox__indicator::after{width:calc(var(--uai-sizing-lg, 1.5rem) / 2);height:calc(var(--uai-sizing-lg, 1.5rem) * 0.35)}:host(.uai-checkbox--tall) .checkbox__control:indeterminate+.checkbox__indicator::after{width:calc(var(--uai-sizing-lg, 1.5rem) * 0.6);height:calc(var(--uai-sizing-lg, 1.5rem) / 10)}.checkbox__text{color:inherit;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem)}:host(.uai-checkbox--disabled) .checkbox{cursor:not-allowed}:host(.uai-checkbox--disabled) .checkbox__text{color:var(--uai-content-disabled, #848e94)}.checkbox:hover .checkbox__control:not(:disabled)+.checkbox__indicator{border-color:var(--uai-action-primary-hover, #181a1b)}.checkbox:hover .checkbox__control:checked:not(:disabled)+.checkbox__indicator,.checkbox:hover .checkbox__control:indeterminate:not(:disabled)+.checkbox__indicator{border-color:var(--uai-action-primary-hover, #181a1b);background:var(--uai-action-primary-hover, #181a1b)}`;

let checkboxIds = 0;
const UaiCheckbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiChange = createEvent(this, "uaiChange");
        this.uaiInput = createEvent(this, "uaiInput");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.disabledByForm = false;
        this.invalid = false;
        this.defaultChecked = false;
        this.defaultIndeterminate = false;
        this.generatedId = `uai-checkbox-${++checkboxIds}`;
        /**
         * Control size. Use standard by default; pair with equally sized selection controls.
         * Avoid changing label typography to compensate for the control size.
         */
        this.size = 'standard';
        /**
         * If true, the checkbox is selected.
         */
        this.checked = false;
        /**
         * If true, the checkbox represents a partially selected set of child options.
         */
        this.indeterminate = false;
        /**
         * Value submitted when the checkbox is selected.
         */
        this.value = 'on';
        /**
         * If true, an unchecked checkbox blocks form submission.
         */
        this.required = false;
        /**
         * If true, the user cannot interact with the checkbox.
         */
        this.disabled = false;
        /**
         * Accessible name used when no visible label is provided.
         */
        this.ariaLabel = null;
        /**
         * Value of the data-test attribute on the native checkbox.
         */
        this.dataTest = null;
        this.onChange = (event) => {
            const input = event.currentTarget;
            this.setFromUser(this.indeterminate || input.checked);
        };
        this.onKeyDown = (event) => {
            if (event.key !== 'Enter' || event.isComposing || this.effectiveDisabled)
                return;
            event.preventDefault();
            void this.toggle();
        };
    }
    /**
     * Returns the native checkbox input.
     */
    async getInputElement() {
        return this.nativeInput;
    }
    /**
     * Returns whether the checkbox is selected.
     */
    async getValue() {
        return this.nativeInput ? this.nativeInput.checked : this.checked;
    }
    /**
     * Toggles the checkbox. When indeterminate, the next state is checked.
     */
    async toggle() {
        if (this.effectiveDisabled)
            return;
        this.setFromUser(this.indeterminate || !this.checked);
    }
    checkedChanged() {
        this.syncFormValue();
        this.syncValidity();
    }
    indeterminateChanged() {
        this.syncNativeState();
    }
    valueChanged() {
        this.syncFormValue();
    }
    requiredChanged() {
        this.syncValidity();
    }
    disabledChanged() {
        this.syncValidity();
    }
    onInvalid() {
        this.invalid = true;
    }
    componentWillLoad() {
        var _a;
        this.defaultChecked = this.checked;
        this.defaultIndeterminate = this.indeterminate;
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => (this.defaultChecked ? this.value : null),
                onReset: (value) => {
                    this.checked = value !== null;
                    this.indeterminate = this.defaultIndeterminate;
                    this.invalid = false;
                },
                onDisabledChange: (disabled) => {
                    this.disabledByForm = disabled;
                    this.syncValidity();
                },
            });
        }
    }
    componentDidRender() {
        this.syncNativeState();
        this.syncFormValue();
        this.syncValidity();
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
        this.checked = state !== null;
        this.indeterminate = false;
    }
    get effectiveDisabled() {
        return this.disabled || this.disabledByForm;
    }
    get inputId() {
        return this.refer || this.generatedId;
    }
    syncNativeState() {
        if (!this.nativeInput)
            return;
        this.nativeInput.indeterminate = this.indeterminate;
        this.nativeInput.checked = this.checked;
        this.nativeInput.disabled = this.effectiveDisabled;
    }
    syncFormValue() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.checked ? this.value : null);
    }
    syncValidity() {
        const input = this.nativeInput;
        if (!input || !this.formControl)
            return;
        const invalid = this.required && !this.checked && !this.effectiveDisabled;
        const message = this.requiredErrorMessage || input.validationMessage;
        this.formControl.setValidity({ valueMissing: invalid }, invalid ? message : '', input);
        if (!invalid)
            this.invalid = false;
    }
    setFromUser(checked) {
        if (this.effectiveDisabled)
            return;
        this.checked = checked;
        this.indeterminate = false;
        this.invalid = false;
        this.syncNativeState();
        this.uaiChange.emit({ checked: this.checked, indeterminate: this.indeterminate });
    }
    render() {
        const disabled = this.effectiveDisabled;
        return (h(Host, { key: '312797bab9a9bc454bcee2e7008b5164ff7b8e54', "aria-disabled": disabled ? 'true' : null, "aria-invalid": this.invalid ? 'true' : null, class: {
                'uai-checkbox--disabled': disabled,
                'uai-checkbox--short': this.size === 'short',
                'uai-checkbox--tall': this.size === 'tall',
            } }, h("label", { key: '69ec044466f8e3d63a8d10caa9bae2f54a586402', class: "checkbox", part: "label" }, h("span", { key: '0a79cdf5082424c4dd04a72af5e4770e5df3c601', class: "checkbox__box" }, h("input", { key: 'c18edf9eb290caca8628ce35c2273bbdf701a241', id: this.inputId, class: "checkbox__control", part: "control", type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: disabled, required: this.required, "aria-checked": this.indeterminate ? 'mixed' : String(this.checked), "aria-required": this.required ? 'true' : null, "aria-label": this.label ? null : this.ariaLabel, "data-test": this.dataTest, onChange: this.onChange, onKeyDown: this.onKeyDown, ref: (input) => (this.nativeInput = input) }), h("span", { key: 'c81117b84a22b93a645df476547dc2c7db8058da', class: "checkbox__indicator", part: "indicator", "aria-hidden": "true" })), this.label && h("span", { key: '5db61fc7737c7f79271d385cbf1996df4ee06dde', class: "checkbox__text" }, this.label))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": [{
                "checkedChanged": 0
            }],
        "indeterminate": [{
                "indeterminateChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }],
        "required": [{
                "requiredChanged": 0
            }],
        "disabled": [{
                "disabledChanged": 0
            }]
    }; }
};
UaiCheckbox.style = uaiCheckboxCss();

const uaiRadioCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif}.radio{display:-ms-inline-flexbox;display:inline-flex;min-height:var(--uai-control-height-short, 2rem);-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio__control{position:relative;display:grid;-ms-flex:none;flex:none;width:var(--uai-sizing-md, 1.25rem);height:var(--uai-sizing-md, 1.25rem);place-items:center}.radio__control::before{position:absolute;inset:calc(var(--uai-spacing-3xs, 0.125rem) - var(--uai-spacing-xs, 0.5rem));border-radius:var(--uai-radius-full, 624.9375rem);background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));content:"";opacity:0;pointer-events:none;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.radio__control::before{-webkit-transition:none;transition:none}}.radio__input{position:relative;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;display:grid;width:100%;height:100%;margin:0;border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:50%;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--uai-surface-paper, #ffffff);cursor:inherit;place-content:center;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.radio__input{-webkit-transition:none;transition:none}}.radio__input:checked{border-width:var(--uai-border-width-thick, 2px);border-color:var(--uai-action-primary-default, #242729)}.radio__input:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-2xs, 0.25rem)}.radio__input:disabled{border-color:var(--uai-content-disabled, #848e94);background:var(--uai-surface-paper, #ffffff);cursor:not-allowed}.radio__input:checked:disabled{border-color:var(--uai-content-disabled, #848e94)}.radio__dot{position:absolute;z-index:2;width:50%;height:50%;border-radius:50%;background:var(--uai-action-primary-default, #242729);opacity:0;pointer-events:none;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.radio__dot{-webkit-transition:none;transition:none}}:host(.uai-radio--short) .radio__control{width:var(--uai-sizing-sm, 1rem);height:var(--uai-sizing-sm, 1rem)}:host(.uai-radio--tall) .radio__control{width:var(--uai-sizing-lg, 1.5rem);height:var(--uai-sizing-lg, 1.5rem)}.radio__input:checked+.radio__dot{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.radio__input:disabled:checked+.radio__dot{background:var(--uai-content-disabled, #848e94)}.radio__text{color:inherit;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem)}:host(:not(.uai-radio--disabled):hover) .radio__control::before,.radio__control:has(.radio__input:focus-visible:not(:disabled))::before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}:host(.uai-radio--disabled) .radio{cursor:not-allowed}:host(.uai-radio--disabled) .radio__text{color:var(--uai-content-disabled, #848e94)}@media (forced-colors: active){.radio__input:checked{border-color:SelectedItem;background:SelectedItem}.radio__input:checked+.radio__dot{background:SelectedItemText}.radio__input:disabled{border-color:GrayText}}`;

let radioIds = 0;
const UaiRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiChange = createEvent(this, "uaiChange");
        this.uaiClickChange = createEvent(this, "uaiClickChange");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.groupTabIndex = 0;
        this.groupDisabled = false;
        this.disabledByForm = false;
        this.defaultValue = null;
        this.generatedId = `uai-radio-${++radioIds}`;
        /**
         * Control size. Use standard by default; pair with equally sized selection controls.
         * Avoid changing label typography to compensate for the control size.
         */
        this.size = 'standard';
        /**
         * If true, the radio is selected.
         */
        this.checked = false;
        /**
         * If true, the user cannot interact with the radio.
         */
        this.disabled = false;
        /**
         * Accessible name used when no visible label or slotted content is provided.
         */
        this.ariaLabel = null;
        /**
         * Value of the data-test attribute on the native radio.
         */
        this.dataTest = null;
        this.onClick = (event) => {
            if (this.effectiveDisabled)
                return;
            event.stopPropagation();
            void this.activate();
        };
        this.onKeyDown = (event) => {
            if (event.key !== 'Enter' || event.isComposing || this.effectiveDisabled)
                return;
            event.preventDefault();
            void this.activate();
        };
    }
    /**
     * Returns the native radio input.
     */
    async getInputElement() {
        return this.nativeInput;
    }
    /**
     * Returns whether the radio is selected.
     */
    async getValue() {
        return this.nativeInput ? this.nativeInput.checked : this.checked;
    }
    /**
     * Moves focus to the native radio input.
     */
    async setFocus() {
        var _a;
        (_a = this.nativeInput) === null || _a === void 0 ? void 0 : _a.focus();
    }
    /**
     * Sets this option's position in the group's tab sequence.
     */
    async setTabIndex(value) {
        this.groupTabIndex = value;
    }
    /**
     * Applies the disabled state inherited from a UaiRadioGroup.
     */
    async setGroupDisabled(value) {
        this.groupDisabled = value;
    }
    /**
     * Selects this option from a user-driven group action.
     */
    async activate() {
        if (this.effectiveDisabled)
            return;
        this.checked = true;
        this.uaiClickChange.emit({ checked: true });
    }
    checkedChanged(value) {
        if (value)
            this.deselectStandalonePeers();
        this.syncFormValue();
        this.uaiChange.emit({ checked: value });
    }
    valueChanged() {
        this.syncFormValue();
    }
    componentWillLoad() {
        var _a;
        this.defaultValue = this.checked && !this.isGrouped ? this.value : null;
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.defaultValue,
                onReset: (value) => {
                    if (!this.isGrouped)
                        this.checked = value !== null;
                },
                onDisabledChange: (disabled) => {
                    this.disabledByForm = disabled;
                },
            });
        }
    }
    componentDidRender() {
        if (this.checked)
            this.deselectStandalonePeers();
        this.syncNativeState();
        this.syncFormValue();
    }
    formResetCallback() {
        var _a;
        if (!this.isGrouped)
            (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.reset();
    }
    formDisabledCallback(disabled) {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setDisabled(disabled);
    }
    formStateRestoreCallback(state) {
        if (!this.isGrouped)
            this.checked = state !== null;
    }
    get effectiveDisabled() {
        const group = this.el.closest(`${transformTag("uai-radio-group")}`);
        return this.disabled || this.groupDisabled || this.disabledByForm || !!(group === null || group === void 0 ? void 0 : group.disabled);
    }
    get isGrouped() {
        return !!this.el.closest(`${transformTag("uai-radio-group")}`);
    }
    get inputId() {
        return this.refer || this.generatedId;
    }
    get formOwner() {
        const formId = this.el.getAttribute('form');
        const form = formId ? this.el.ownerDocument.getElementById(formId) : this.el.closest('form');
        return form instanceof HTMLFormElement ? form : null;
    }
    deselectStandalonePeers() {
        if (!this.name || this.isGrouped)
            return;
        const root = this.el.getRootNode();
        if (!(root instanceof Document || root instanceof ShadowRoot))
            return;
        for (const radio of Array.from(root.querySelectorAll(`${transformTag("uai-radio")}`))) {
            const formId = radio.getAttribute('form');
            const form = formId ? radio.ownerDocument.getElementById(formId) : radio.closest('form');
            if (radio !== this.el &&
                !radio.closest(`${transformTag("uai-radio-group")}`) &&
                radio.name === this.name &&
                form === this.formOwner) {
                radio.checked = false;
            }
        }
    }
    syncNativeState() {
        if (!this.nativeInput)
            return;
        this.nativeInput.checked = this.checked;
        this.nativeInput.disabled = this.effectiveDisabled;
        this.nativeInput.tabIndex = this.groupTabIndex;
    }
    syncFormValue() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.checked && !this.isGrouped ? this.value : null);
    }
    render() {
        var _a;
        const disabled = this.effectiveDisabled;
        const hasVisibleName = !!(this.label || ((_a = this.el.textContent) === null || _a === void 0 ? void 0 : _a.trim()));
        return (h(Host, { key: 'f94c5d77ffdb17ff1ab07f702c424756634a68fd', "aria-disabled": disabled ? 'true' : null, class: {
                'uai-radio--disabled': disabled,
                'uai-radio--checked': this.checked,
                'uai-radio--short': this.size === 'short',
                'uai-radio--tall': this.size === 'tall',
            } }, h("label", { key: 'c2924dc8d49319548badad6df5942ba14a26d507', class: "radio", part: "label" }, h("span", { key: '7b1f53137eb2fc4bd8bc109f16d949826b0a359a', class: "radio__control", part: "control" }, h("input", { key: 'cba1a118655d489cb1d88c7f4af047913e6e7cba', id: this.inputId, class: "radio__input", part: "input", type: "radio", value: this.value, name: this.isGrouped ? undefined : this.name, checked: this.checked, disabled: disabled, tabIndex: this.groupTabIndex, "aria-label": hasVisibleName ? null : this.ariaLabel, "data-test": this.dataTest, onClick: this.onClick, onKeyDown: this.onKeyDown, ref: (input) => (this.nativeInput = input) }), h("span", { key: 'dcd6f5d83057578bb22e7e9a1378ff56dbdea76e', class: "radio__dot", "aria-hidden": "true" })), h("span", { key: 'dfbd6bb863249ea4a1d9572e29e81217134218e0', class: "radio__text" }, this.label, h("slot", { key: 'b5a0cb2206a738975b4d26235b4f6e2eedf4e754' })))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": [{
                "checkedChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }]
    }; }
};
UaiRadio.style = uaiRadioCss();

const uaiSwitchCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.switch__label{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.switch__text{font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem)}:host([aria-disabled=true]) .switch__label{color:var(--uai-content-disabled, #848e94);cursor:not-allowed}.switch{position:relative;display:-ms-inline-flexbox;display:inline-flex;width:var(--uai-sizing-2xl, 2.5rem);height:var(--uai-sizing-md, 1.25rem);cursor:pointer;-ms-flex:none;flex:none}.switch--short{width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-sm, 1rem)}.switch--tall{width:var(--uai-sizing-3xl, 3rem);height:var(--uai-sizing-lg, 1.5rem)}.switch__input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:inherit}.switch__track{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;height:100%;padding:var(--uai-spacing-3xs, 0.125rem);border-radius:var(--uai-radius-full, 624.9375rem);background:var(--uai-border-input, #adb4b8);pointer-events:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.switch__track{-webkit-transition:none;transition:none}}.switch__handle{position:relative;width:var(--uai-sizing-sm, 1rem);height:100%;border-radius:var(--uai-radius-full, 624.9375rem);background:var(--uai-action-primary-foreground, #ffffff);-webkit-transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.switch__handle{-webkit-transition:none;transition:none}}.switch__handle::before{position:absolute;inset:0;border-radius:var(--uai-radius-full, 624.9375rem);-webkit-box-shadow:0 0 0 calc(4 * var(--uai-border-width-thick, 2px)) var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));box-shadow:0 0 0 calc(4 * var(--uai-border-width-thick, 2px)) var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));content:"";opacity:0;pointer-events:none;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.switch__handle::before{-webkit-transition:none;transition:none}}.switch--short .switch__handle{width:var(--uai-sizing-xs, 0.75rem)}.switch--tall .switch__handle{width:var(--uai-sizing-md, 1.25rem)}.switch__input:checked+.switch__track{background:var(--uai-action-primary-default, #242729)}.switch__input:checked+.switch__track .switch__handle{-webkit-transform:translateX(calc(var(--uai-sizing-md, 1.25rem)));transform:translateX(calc(var(--uai-sizing-md, 1.25rem)))}.switch--short .switch__input:checked+.switch__track .switch__handle{-webkit-transform:translateX(var(--uai-sizing-sm, 1rem));transform:translateX(var(--uai-sizing-sm, 1rem))}.switch--tall .switch__input:checked+.switch__track .switch__handle{-webkit-transform:translateX(var(--uai-sizing-lg, 1.5rem));transform:translateX(var(--uai-sizing-lg, 1.5rem))}.switch__input:focus-visible+.switch__track{outline:var(--uai-border-width-default, 1px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.switch__label:hover .switch__input:not(:disabled)+.switch__track .switch__handle::before,.switch__input:focus-visible:not(:disabled)+.switch__track .switch__handle::before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.switch__input:disabled{cursor:not-allowed}.switch__input:disabled+.switch__track{background:var(--uai-content-disabled, #848e94)}@media (forced-colors: active){.switch__track{border:var(--uai-border-width-default, 1px) solid ButtonText;background:Canvas;forced-color-adjust:none}.switch__handle{background:ButtonText}.switch__input:checked+.switch__track{background:Highlight}.switch__input:checked+.switch__track .switch__handle{background:HighlightText}.switch__input:disabled+.switch__track{border-color:GrayText;background:Canvas}.switch__input:disabled+.switch__track .switch__handle{background:GrayText}}`;

let switchIds = 0;
const UaiSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiChange = createEvent(this, "uaiChange");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.disabledByForm = false;
        this.defaultChecked = false;
        this.generatedId = `uai-switch-${++switchIds}`;
        /** Relative control size. Use standard by default; pair with adjacent controls. Avoid custom dimensions. */
        this.size = 'standard';
        /** Current on/off state. Use for controlled settings; pair with uaiChange. Avoid treating it as an action. */
        this.checked = false;
        /** Prevents interaction. Use for unavailable settings; pair with explanatory text. Avoid hiding restrictions. */
        this.disabled = false;
        /** Submitted value when on. Use with name; pair with form association. Avoid depending on unchecked submission. */
        this.value = 'on';
        /** Accessible setting name when no visible label is provided. Avoid unnamed switches. */
        this.ariaLabel = null;
        /** Test selector on the native input. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        this.onChange = () => {
            if (!this.effectiveDisabled)
                this.checked = this.nativeInput.checked;
        };
        this.onKeyDown = (event) => {
            if (event.key !== 'Enter' || event.repeat || event.isComposing || this.effectiveDisabled)
                return;
            event.preventDefault();
            this.checked = !this.checked;
        };
    }
    /** Returns the native input. Use for focus; pair with accessible naming. Avoid modifying its visual styles. */
    async getInputElement() {
        return this.nativeInput;
    }
    /** Returns the on/off state. Use for imperative consumers; pair with uaiChange. Avoid polling. */
    async getValue() {
        return this.checked;
    }
    checkedChanged() {
        this.syncFormValue();
        this.uaiChange.emit({ checked: this.checked });
    }
    valueChanged() {
        this.syncFormValue();
    }
    componentWillLoad() {
        var _a;
        this.defaultChecked = this.checked;
        if (typeof ((_a = this.internals) === null || _a === void 0 ? void 0 : _a.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => (this.defaultChecked ? this.value : null),
                onReset: (value) => {
                    this.checked = value !== null;
                },
                onDisabledChange: (disabled) => {
                    this.disabledByForm = disabled;
                },
            });
        }
    }
    componentDidRender() {
        this.syncFormValue();
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
        this.checked = state !== null;
    }
    syncFormValue() {
        var _a;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue(this.checked ? this.value : null);
    }
    get effectiveDisabled() {
        return this.disabled || this.disabledByForm;
    }
    render() {
        const size = ['short', 'standard', 'tall'].includes(this.size) ? this.size : 'standard';
        return (h(Host, { key: '5bb0097c7d32889aeaa428742b7306c97de4e1ac', "aria-disabled": this.effectiveDisabled ? 'true' : null }, h("label", { key: '700c2160f74ad8574177b504a8eb43f8750ba582', class: "switch__label", part: "label" }, h("span", { key: '748e9280d1d8b7b24745e8cde4c8e29f4e01406b', class: `switch switch--${size}` }, h("input", { key: '954ce819fa44188d444498f74d0e790534b241fb', ref: (input) => (this.nativeInput = input), id: this.refer || this.generatedId, class: "switch__input", part: "control", type: "checkbox", name: this.name, value: this.value, role: "switch", checked: this.checked, disabled: this.effectiveDisabled, "aria-checked": String(this.checked), "aria-label": this.ariaLabel, "data-test": this.dataTest, onChange: this.onChange, onKeyDown: this.onKeyDown }), h("span", { key: '81764bf450fec4aeb21a676e3a54c4d2c0df7259', class: "switch__track", part: "track", "aria-hidden": "true" }, h("span", { key: '5000be7d6811d3aea7c6b053c4d21d8551e59ae0', class: "switch__handle", part: "handle" }))), this.label && h("span", { key: '64df8c22a7f5ec0866ffbfbcd5726a74e622ca6b', class: "switch__text" }, this.label))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": [{
                "checkedChanged": 0
            }],
        "value": [{
                "valueChanged": 0
            }]
    }; }
};
UaiSwitch.style = uaiSwitchCss();

const uaiTooltipCss = () => `:host{display:inline-block;vertical-align:middle}.tooltip__wrapper{display:inline-block;position:relative}.tooltip__trigger{display:inline-block}.tooltip__tip{--tooltip-bg:var(--uai-surface-inverse, #242729);--tooltip-arrow-size:var(--uai-sizing-2xs, 0.5rem);--tooltip-hairline:var(--uai-border-width-default, 1px);--tooltip-gap:calc(var(--tooltip-arrow-size) + var(--uai-spacing-3xs, 0.125rem));position:absolute;left:50%;-webkit-box-sizing:border-box;box-sizing:border-box;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:var(--uai-sizing-lg, 1.5rem);max-width:var(--uai-width-tooltip, 15rem);padding:var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-md, 0.5rem);background:var(--tooltip-bg);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));color:var(--uai-content-inverse, #ffffff);font-family:var(--uai-font-family-sans, Figtree), sans-serif;white-space:break-spaces;cursor:default;z-index:9000;visibility:hidden;opacity:0;pointer-events:none;-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), visibility var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), visibility var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.tooltip__tip{-webkit-transition:none;transition:none}}.tooltip__tip--visible{visibility:visible;opacity:1}.tooltip__tip::before{content:"";left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;margin-left:calc(-1 * var(--tooltip-arrow-size));border-width:var(--tooltip-arrow-size)}.tooltip__tip--top-center,.tooltip__tip--top-left,.tooltip__tip--top-right{bottom:calc(100% + var(--tooltip-gap))}.tooltip__tip--top-center::before,.tooltip__tip--top-left::before,.tooltip__tip--top-right::before{top:100%;border-top-color:var(--tooltip-bg)}.tooltip__tip--top-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--top-left::before{left:calc(15% + var(--tooltip-arrow-size))}.tooltip__tip--top-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--top-right::before{left:calc(85% - var(--tooltip-arrow-size))}.tooltip__tip--bottom-center,.tooltip__tip--top-center{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip__tip--left-center,.tooltip__tip--right-center{-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}.tooltip__tip--right-center,.tooltip__tip--right-top,.tooltip__tip--right-bottom{left:calc(100% + var(--tooltip-gap));top:50%}.tooltip__tip--right-center::before,.tooltip__tip--right-top::before,.tooltip__tip--right-bottom::before{left:calc(var(--tooltip-hairline) - var(--tooltip-arrow-size));top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-right-color:var(--tooltip-bg)}.tooltip__tip--right-top{top:0}.tooltip__tip--right-top::before{top:40%}.tooltip__tip--right-bottom{top:initial;bottom:0}.tooltip__tip--right-bottom::before{top:60%}.tooltip__tip--bottom-center,.tooltip__tip--bottom-right,.tooltip__tip--bottom-left{top:calc(100% + var(--tooltip-gap))}.tooltip__tip--bottom-center::before,.tooltip__tip--bottom-right::before,.tooltip__tip--bottom-left::before{bottom:100%;border-bottom-color:var(--tooltip-bg)}.tooltip__tip--bottom-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--bottom-right::before{left:calc(85% - var(--tooltip-arrow-size))}.tooltip__tip--bottom-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--bottom-left::before{left:calc(15% + var(--tooltip-arrow-size))}.tooltip__tip--left-center,.tooltip__tip--left-top,.tooltip__tip--left-bottom{left:auto;right:calc(100% + var(--tooltip-gap));top:50%}.tooltip__tip--left-center::before,.tooltip__tip--left-top::before,.tooltip__tip--left-bottom::before{left:auto;right:calc(var(--tooltip-hairline) - 2 * var(--tooltip-arrow-size));top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-left-color:var(--tooltip-bg)}.tooltip__tip--left-top{top:0}.tooltip__tip--left-top::before{top:40%}.tooltip__tip--left-bottom{top:initial;bottom:0}.tooltip__tip--left-bottom::before{top:60%}.tooltip__text{--uai-typo-color:currentColor;display:block;white-space:break-spaces}`;

const POSITIONS = [
    'top-center',
    'top-left',
    'top-right',
    'left-center',
    'left-top',
    'left-bottom',
    'bottom-center',
    'bottom-right',
    'bottom-left',
    'right-center',
    'right-top',
    'right-bottom',
];
let tooltipIds = 0;
const formatText = (text) => (text ? text.replace(/<br>/gi, '\r\n') : '');
const UaiTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isVisible = false;
        this.tipId = `uai-tooltip-${++tooltipIds}`;
        /** Tooltip text; <br> breaks the line. Use short hints; pair with the wrapped element; avoid essential information. */
        this.tooltipText = 'Tooltip';
        /** Prevents the tooltip from showing. Use when the wrapped element is unavailable; pair with explanatory text elsewhere. */
        this.disabled = false;
        /** Placement relative to the wrapped element. Use the side with free space; avoid covering related content. */
        this.position = 'left-center';
        /** Maximum tooltip width as a CSS length. Defaults to the width/tooltip token; use for long text; avoid widths narrower than the content needs. */
        this.maxWidth = null;
        /** Test selector on the trigger wrapper. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        this.onKeyDown = (event) => {
            if (event.key === 'Escape' && this.isVisible)
                this.isVisible = false;
        };
    }
    /** Shows the tooltip. Use for imperative control; pair with invisible. Avoid calling it while disabled. */
    async visible() {
        this.isVisible = true;
    }
    /** Hides the tooltip. Use for imperative control; pair with visible. Avoid leaving it open after the task ends. */
    async invisible() {
        this.isVisible = false;
    }
    tooltipTextChanged() {
        this.textVerify = formatText(this.tooltipText);
    }
    maxWidthChanged() {
        this.maxWidthTooltip = this.maxWidth;
    }
    disabledChanged() {
        if (this.disabled)
            this.isVisible = false;
    }
    componentWillLoad() {
        this.textVerify = formatText(this.tooltipText);
        this.maxWidthTooltip = this.maxWidth;
    }
    setVisibility(value) {
        this.isVisible = this.disabled ? false : value;
    }
    render() {
        const position = POSITIONS.find((candidate) => candidate === this.position) || 'left-center';
        return (h(Host, { key: 'bb09c0ab4b678c5be34364b5f7326a9c0ca4c5c1' }, h("div", { key: 'b8aa5374e4df4e6857ab6a85ac5078d9b45a2ea3', class: "tooltip__wrapper" }, h("div", { key: 'd8135e984ee075c1502bd43b386d82c87c77724c', class: "tooltip__trigger", onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), onFocusin: () => this.setVisibility(true), onFocusout: () => this.setVisibility(false), onKeyDown: this.onKeyDown, "data-test": this.dataTest, "aria-describedby": this.tipId }, h("slot", { key: '23a714aa5c75684b5fa0a07751da4736d3445668' })), h("div", { key: 'c4928dbdf2062580326c6dc29af336f44450fbf4', id: this.tipId, part: "tip", role: "tooltip", class: {
                tooltip__tip: true,
                [`tooltip__tip--${position}`]: true,
                'tooltip__tip--visible': this.isVisible,
            }, style: { maxWidth: this.maxWidthTooltip } }, h("uai-typo", { key: '32e7fdabd7e5a8947af2251ec46884ff1453e523', class: "tooltip__text", tag: "span", variant: "caption", margin: false }, this.textVerify)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "tooltipText": [{
                "tooltipTextChanged": 0
            }],
        "maxWidth": [{
                "maxWidthChanged": 0
            }],
        "disabled": [{
                "disabledChanged": 0
            }]
    }; }
};
UaiTooltip.style = uaiTooltipCss();

export { UaiAvatar as uai_avatar, UaiCheckbox as uai_checkbox, UaiRadio as uai_radio, UaiSwitch as uai_switch, UaiTooltip as uai_tooltip };
