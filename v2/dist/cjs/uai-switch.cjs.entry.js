'use strict';

var index = require('./index-BuAR9UTp.js');
var uaiFormControl = require('./uai-form-control-B_Rr3WRq.js');

const uaiSwitchCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.switch__label{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.switch__text{font-size:var(--uai-body-base-font-size, 0.875rem);font-weight:var(--uai-font-weight-regular, 400);line-height:var(--uai-body-base-line-height, 1.375rem)}:host([aria-disabled=true]) .switch__label{color:var(--uai-content-disabled, #848e94);cursor:not-allowed}.switch{position:relative;display:-ms-inline-flexbox;display:inline-flex;width:var(--uai-sizing-2xl, 2.5rem);height:var(--uai-sizing-md, 1.25rem);cursor:pointer;-ms-flex:none;flex:none}.switch--short{width:var(--uai-sizing-xl, 2rem);height:var(--uai-sizing-sm, 1rem)}.switch--tall{width:var(--uai-sizing-3xl, 3rem);height:var(--uai-sizing-lg, 1.5rem)}.switch__input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:inherit}.switch__track{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;height:100%;padding:var(--uai-spacing-3xs, 0.125rem);border-radius:var(--uai-radius-full, 624.9375rem);background:var(--uai-border-input, #adb4b8);pointer-events:none;-webkit-transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:background-color var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.switch__track{-webkit-transition:none;transition:none}}.switch__handle{position:relative;width:var(--uai-sizing-sm, 1rem);height:100%;border-radius:var(--uai-radius-full, 624.9375rem);background:var(--uai-action-primary-foreground, #ffffff);-webkit-transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.switch__handle{-webkit-transition:none;transition:none}}.switch__handle::before{position:absolute;inset:0;border-radius:var(--uai-radius-full, 624.9375rem);-webkit-box-shadow:0 0 0 calc(4 * var(--uai-border-width-thick, 2px)) var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));box-shadow:0 0 0 calc(4 * var(--uai-border-width-thick, 2px)) var(--uai-overlay-hover, rgba(0, 0, 0, 0.08));content:"";opacity:0;pointer-events:none;-webkit-transform:scale(0.75);transform:scale(0.75);-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.switch__handle::before{-webkit-transition:none;transition:none}}.switch--short .switch__handle{width:var(--uai-sizing-xs, 0.75rem)}.switch--tall .switch__handle{width:var(--uai-sizing-md, 1.25rem)}.switch__input:checked+.switch__track{background:var(--uai-action-primary-default, #242729)}.switch__input:checked+.switch__track .switch__handle{-webkit-transform:translateX(calc(var(--uai-sizing-md, 1.25rem)));transform:translateX(calc(var(--uai-sizing-md, 1.25rem)))}.switch--short .switch__input:checked+.switch__track .switch__handle{-webkit-transform:translateX(var(--uai-sizing-sm, 1rem));transform:translateX(var(--uai-sizing-sm, 1rem))}.switch--tall .switch__input:checked+.switch__track .switch__handle{-webkit-transform:translateX(var(--uai-sizing-lg, 1.5rem));transform:translateX(var(--uai-sizing-lg, 1.5rem))}.switch__input:focus-visible+.switch__track{outline:var(--uai-border-width-default, 1px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.switch__label:hover .switch__input:not(:disabled)+.switch__track .switch__handle::before,.switch__input:focus-visible:not(:disabled)+.switch__track .switch__handle::before{opacity:1;-webkit-transform:scale(1);transform:scale(1)}.switch__input:disabled{cursor:not-allowed}.switch__input:disabled+.switch__track{background:var(--uai-content-disabled, #848e94)}@media (forced-colors: active){.switch__track{border:var(--uai-border-width-default, 1px) solid ButtonText;background:Canvas;forced-color-adjust:none}.switch__handle{background:ButtonText}.switch__input:checked+.switch__track{background:Highlight}.switch__input:checked+.switch__track .switch__handle{background:HighlightText}.switch__input:disabled+.switch__track{border-color:GrayText;background:Canvas}.switch__input:disabled+.switch__track .switch__handle{background:GrayText}}`;

let switchIds = 0;
const UaiSwitch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiChange = index.createEvent(this, "uaiChange");
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
            this.formControl = new uaiFormControl.UaiFormControl({
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
        return (index.h(index.Host, { key: '2c59f8d670ddfc6817fdbaf8ac1afeae58928cec', "aria-disabled": this.effectiveDisabled ? 'true' : null }, index.h("label", { key: '4d74c4456cb778b64d58000af56f9dd5b8f7c537', class: "switch__label", part: "label" }, index.h("span", { key: 'f6a2cea574163cde1685e2edf3bb442492731b10', class: `switch switch--${size}` }, index.h("input", { key: 'aa2507da5e3a5816022b3c23edcc8863b33f667e', ref: (input) => (this.nativeInput = input), id: this.refer || this.generatedId, class: "switch__input", part: "control", type: "checkbox", name: this.name, value: this.value, role: "switch", checked: this.checked, disabled: this.effectiveDisabled, "aria-checked": String(this.checked), "aria-label": this.ariaLabel, "data-test": this.dataTest, onChange: this.onChange, onKeyDown: this.onKeyDown }), index.h("span", { key: 'f2f7110e2d5f89a9917e95fc6e767d22ac9395d2', class: "switch__track", part: "track", "aria-hidden": "true" }, index.h("span", { key: 'd06cd58834f53e9679ffdd7752776b7cdc003506', class: "switch__handle", part: "handle" }))), this.label && index.h("span", { key: 'ce8ca7f6a75d99b90980a1b13ea2c14c6522a0b7', class: "switch__text" }, this.label))));
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
UaiSwitch.style = uaiSwitchCss();

exports.uai_switch = UaiSwitch;
