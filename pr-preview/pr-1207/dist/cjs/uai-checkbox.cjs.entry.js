'use strict';

var index = require('./index-BuAR9UTp.js');
var uaiFormControl = require('./uai-form-control-B_Rr3WRq.js');

const uaiCheckboxCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif}.checkbox{display:-ms-inline-flexbox;display:inline-flex;min-height:var(--uai-control-height-short, 2rem);-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.checkbox__box{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex:none;flex:none;width:var(--uai-sizing-md, 1.25rem);height:var(--uai-sizing-md, 1.25rem)}.checkbox__control{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:inherit;z-index:1}.checkbox__indicator{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:grid;place-content:center;width:100%;height:100%;pointer-events:none;border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:var(--uai-radius-md, 0.5rem);background:var(--uai-surface-paper, #ffffff);color:var(--uai-action-primary-foreground, #ffffff);cursor:inherit;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-box-shadow var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.checkbox__indicator{-webkit-transition:none;transition:none}}.checkbox__indicator::before{position:absolute;inset:calc(var(--uai-spacing-3xs, 0.125rem) - var(--uai-spacing-xs, 0.5rem) - var(--uai-border-width-default, 1px));border-radius:var(--uai-radius-full, 624.9375rem);background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));content:"";opacity:0;pointer-events:none;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.checkbox__indicator::before{-webkit-transition:none;transition:none}}.checkbox__indicator::after{-webkit-box-sizing:border-box;box-sizing:border-box;width:calc(var(--uai-sizing-md, 1.25rem) / 2);height:calc(var(--uai-sizing-md, 1.25rem) * 0.35);border:0 solid currentColor;border-left-width:var(--uai-border-width-thick, 2px);border-bottom-width:var(--uai-border-width-thick, 2px);content:"";-webkit-transform:translateY(calc(-1 * var(--uai-border-width-default, 1px))) rotate(-45deg);transform:translateY(calc(-1 * var(--uai-border-width-default, 1px))) rotate(-45deg);visibility:hidden}.checkbox__control:checked+.checkbox__indicator,.checkbox__control:indeterminate+.checkbox__indicator{border-width:var(--uai-border-width-thick, 2px);background:var(--uai-action-primary-default, #242729)}.checkbox__control:checked+.checkbox__indicator::before,.checkbox__control:indeterminate+.checkbox__indicator::before{inset:calc(var(--uai-spacing-3xs, 0.125rem) - var(--uai-spacing-xs, 0.5rem) - var(--uai-border-width-thick, 2px))}.checkbox__control:checked+.checkbox__indicator::after,.checkbox__control:indeterminate+.checkbox__indicator::after{visibility:visible}.checkbox__control:indeterminate+.checkbox__indicator::after{width:var(--uai-sizing-xs, 0.75rem);height:calc(var(--uai-sizing-md, 1.25rem) / 10);border:0;background:currentColor;-webkit-transform:none;transform:none}.checkbox__control:hover:not(:disabled)+.checkbox__indicator{border-color:var(--uai-action-primary-hover, #181a1b)}.checkbox__control:checked:hover:not(:disabled)+.checkbox__indicator,.checkbox__control:indeterminate:hover:not(:disabled)+.checkbox__indicator{border-color:var(--uai-action-primary-hover, #181a1b);background:var(--uai-action-primary-hover, #181a1b)}.checkbox__control:focus-visible+.checkbox__indicator{border-color:var(--uai-border-ring, #242729)}.checkbox__control:disabled+.checkbox__indicator{border-color:var(--uai-border-input, #adb4b8);background:var(--uai-surface-muted, #f2f3f3);color:var(--uai-content-disabled, #848e94);cursor:not-allowed}.checkbox__control:checked:disabled+.checkbox__indicator,.checkbox__control:indeterminate:disabled+.checkbox__indicator{border-color:var(--uai-border-input, #adb4b8);background:var(--uai-content-disabled, #848e94);color:var(--uai-surface-paper, #ffffff)}@media (forced-colors: active){.checkbox__control:checked+.checkbox__indicator,.checkbox__control:indeterminate+.checkbox__indicator{forced-color-adjust:none;border-color:SelectedItem;background:SelectedItem;color:SelectedItemText}.checkbox__control:disabled+.checkbox__indicator{border-color:GrayText;color:GrayText}}.checkbox:hover .checkbox__control:not(:disabled)+.checkbox__indicator::before,.checkbox__control:focus-visible:not(:disabled)+.checkbox__indicator::before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}:host(.uai-checkbox--short) .checkbox__box{width:var(--uai-sizing-sm, 1rem);height:var(--uai-sizing-sm, 1rem)}:host(.uai-checkbox--short) .checkbox__indicator::after{width:calc(var(--uai-sizing-sm, 1rem) / 2);height:calc(var(--uai-sizing-sm, 1rem) * 0.35)}:host(.uai-checkbox--short) .checkbox__control:indeterminate+.checkbox__indicator::after{width:calc(var(--uai-sizing-sm, 1rem) * 0.6);height:calc(var(--uai-sizing-sm, 1rem) / 10)}:host(.uai-checkbox--short) .checkbox__indicator{border-radius:var(--uai-radius-sm, 0.25rem)}:host(.uai-checkbox--tall) .checkbox__box{width:var(--uai-sizing-lg, 1.5rem);height:var(--uai-sizing-lg, 1.5rem)}:host(.uai-checkbox--tall) .checkbox__indicator::after{width:calc(var(--uai-sizing-lg, 1.5rem) / 2);height:calc(var(--uai-sizing-lg, 1.5rem) * 0.35)}:host(.uai-checkbox--tall) .checkbox__control:indeterminate+.checkbox__indicator::after{width:calc(var(--uai-sizing-lg, 1.5rem) * 0.6);height:calc(var(--uai-sizing-lg, 1.5rem) / 10)}.checkbox__text{color:inherit;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem)}:host(.uai-checkbox--disabled) .checkbox{cursor:not-allowed}:host(.uai-checkbox--disabled) .checkbox__text{color:var(--uai-content-disabled, #848e94)}.checkbox:hover .checkbox__control:not(:disabled)+.checkbox__indicator{border-color:var(--uai-action-primary-hover, #181a1b)}.checkbox:hover .checkbox__control:checked:not(:disabled)+.checkbox__indicator,.checkbox:hover .checkbox__control:indeterminate:not(:disabled)+.checkbox__indicator{border-color:var(--uai-action-primary-hover, #181a1b);background:var(--uai-action-primary-hover, #181a1b)}`;

let checkboxIds = 0;
const UaiCheckbox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiChange = index.createEvent(this, "uaiChange");
        this.uaiInput = index.createEvent(this, "uaiInput");
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
            this.formControl = new uaiFormControl.UaiFormControl({
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
        return (index.h(index.Host, { key: 'ff220d023aac29b10f46fde65882af6b8f1acd67', "aria-disabled": disabled ? 'true' : null, "aria-invalid": this.invalid ? 'true' : null, class: {
                'uai-checkbox--disabled': disabled,
                'uai-checkbox--short': this.size === 'short',
                'uai-checkbox--tall': this.size === 'tall',
            } }, index.h("label", { key: 'bb47f56f1459a77f0ee4a3141c5a8f362bebe2ec', class: "checkbox", part: "label" }, index.h("span", { key: '5f9c854ffdaa7c135462034cec7a63ba5fe028d5', class: "checkbox__box" }, index.h("input", { key: '736d6033d78a50e7d12524ff6fe63a6a6f5f2dc3', id: this.inputId, class: "checkbox__control", part: "control", type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: disabled, required: this.required, "aria-checked": this.indeterminate ? 'mixed' : String(this.checked), "aria-required": this.required ? 'true' : null, "aria-label": this.label ? null : this.ariaLabel, "data-test": this.dataTest, onChange: this.onChange, onKeyDown: this.onKeyDown, ref: (input) => (this.nativeInput = input) }), index.h("span", { key: 'b54e97a8a2d5a39c7f2bee7620ee087137e935e0', class: "checkbox__indicator", part: "indicator", "aria-hidden": "true" })), this.label && index.h("span", { key: '79a0521af0fb01b5b5f6e9e24ca0b16326710347', class: "checkbox__text" }, this.label))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
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

exports.uai_checkbox = UaiCheckbox;
