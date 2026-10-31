'use strict';

var index = require('./index-BuAR9UTp.js');
var uaiFormControl = require('./uai-form-control-B_Rr3WRq.js');

const uaiRadioCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif}.radio{display:-ms-inline-flexbox;display:inline-flex;min-height:var(--uai-control-height-short, 2rem);-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.radio__control{position:relative;display:grid;-ms-flex:none;flex:none;width:var(--uai-sizing-md, 1.25rem);height:var(--uai-sizing-md, 1.25rem);place-items:center}.radio__control::before{position:absolute;inset:calc(var(--uai-spacing-3xs, 0.125rem) - var(--uai-spacing-xs, 0.5rem));border-radius:var(--uai-radius-full, 624.9375rem);background:var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));content:"";opacity:0;pointer-events:none;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.radio__control::before{-webkit-transition:none;transition:none}}.radio__input{position:relative;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;display:grid;width:100%;height:100%;margin:0;border:var(--uai-border-width-default, 1px) solid var(--uai-border-input, #adb4b8);border-radius:50%;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--uai-surface-paper, #ffffff);cursor:inherit;place-content:center;-webkit-transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:border-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.radio__input{-webkit-transition:none;transition:none}}.radio__input:checked{border-width:var(--uai-border-width-thick, 2px);border-color:var(--uai-action-primary-default, #242729)}.radio__input:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-2xs, 0.25rem)}.radio__input:disabled{border-color:var(--uai-content-disabled, #848e94);background:var(--uai-surface-paper, #ffffff);cursor:not-allowed}.radio__input:checked:disabled{border-color:var(--uai-content-disabled, #848e94)}.radio__dot{position:absolute;z-index:2;width:50%;height:50%;border-radius:50%;background:var(--uai-action-primary-default, #242729);opacity:0;pointer-events:none;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.radio__dot{-webkit-transition:none;transition:none}}:host(.uai-radio--short) .radio__control{width:var(--uai-sizing-sm, 1rem);height:var(--uai-sizing-sm, 1rem)}:host(.uai-radio--tall) .radio__control{width:var(--uai-sizing-lg, 1.5rem);height:var(--uai-sizing-lg, 1.5rem)}.radio__input:checked+.radio__dot{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.radio__input:disabled:checked+.radio__dot{background:var(--uai-content-disabled, #848e94)}.radio__text{color:inherit;font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem)}:host(:not(.uai-radio--disabled):hover) .radio__control::before,.radio__control:has(.radio__input:focus-visible:not(:disabled))::before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}:host(.uai-radio--disabled) .radio{cursor:not-allowed}:host(.uai-radio--disabled) .radio__text{color:var(--uai-content-disabled, #848e94)}@media (forced-colors: active){.radio__input:checked{border-color:SelectedItem;background:SelectedItem}.radio__input:checked+.radio__dot{background:SelectedItemText}.radio__input:disabled{border-color:GrayText}}`;

let radioIds = 0;
const UaiRadio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiChange = index.createEvent(this, "uaiChange");
        this.uaiClickChange = index.createEvent(this, "uaiClickChange");
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
            this.formControl = new uaiFormControl.UaiFormControl({
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
        const group = this.el.closest('uai-radio-group');
        return this.disabled || this.groupDisabled || this.disabledByForm || !!(group === null || group === void 0 ? void 0 : group.disabled);
    }
    get isGrouped() {
        return !!this.el.closest('uai-radio-group');
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
        for (const radio of Array.from(root.querySelectorAll('uai-radio'))) {
            const formId = radio.getAttribute('form');
            const form = formId ? radio.ownerDocument.getElementById(formId) : radio.closest('form');
            if (radio !== this.el &&
                !radio.closest('uai-radio-group') &&
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
        return (index.h(index.Host, { key: '7f6acd898914066b44992c1b7eb6febdd02cebcb', "aria-disabled": disabled ? 'true' : null, class: {
                'uai-radio--disabled': disabled,
                'uai-radio--checked': this.checked,
                'uai-radio--short': this.size === 'short',
                'uai-radio--tall': this.size === 'tall',
            } }, index.h("label", { key: '0eda6a81500059b3799b2039fa30ca0b0b0e3047', class: "radio", part: "label" }, index.h("span", { key: 'ec330329e1f2c868346f7f81e87b3cd384b5ce01', class: "radio__control", part: "control" }, index.h("input", { key: 'd0c3e17dba1b7c12851e133234c8377556e4e2f2', id: this.inputId, class: "radio__input", part: "input", type: "radio", value: this.value, name: this.isGrouped ? undefined : this.name, checked: this.checked, disabled: disabled, tabIndex: this.groupTabIndex, "aria-label": hasVisibleName ? null : this.ariaLabel, "data-test": this.dataTest, onClick: this.onClick, onKeyDown: this.onKeyDown, ref: (input) => (this.nativeInput = input) }), index.h("span", { key: '1cf7818c2f1401e59b32ae04a3a87b54df71864e', class: "radio__dot", "aria-hidden": "true" })), index.h("span", { key: '0063e86a550f2cf6b99e460a75f00c814f25ece6', class: "radio__text" }, this.label, index.h("slot", { key: '19d8d2a2e03d70a5fe2a9ea086a647a0492043f8' })))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    get el() { return index.getElement(this); }
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

exports.uai_radio = UaiRadio;
