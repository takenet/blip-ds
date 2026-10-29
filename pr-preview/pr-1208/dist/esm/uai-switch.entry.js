import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';
import { U as UaiFormControl } from './uai-form-control-BkRP7pRQ.js';

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
        return (h(Host, { key: 'a93a8cc3d85835eca17897ecb5be56f0b32b37e8', "aria-disabled": this.effectiveDisabled ? 'true' : null }, h("label", { key: 'e3759aa14d369d6daf6b9c391bf7b88854e54231', class: "switch__label", part: "label" }, h("span", { key: '049c60f1c9cfb093f0343845de0c99e7c754d1b5', class: `switch switch--${size}` }, h("input", { key: '616f7cc2862cb8907086ec90b442a34303cd48d7', ref: (input) => (this.nativeInput = input), id: this.refer || this.generatedId, class: "switch__input", part: "control", type: "checkbox", name: this.name, value: this.value, role: "switch", checked: this.checked, disabled: this.effectiveDisabled, "aria-checked": String(this.checked), "aria-label": this.ariaLabel, "data-test": this.dataTest, onChange: this.onChange, onKeyDown: this.onKeyDown }), h("span", { key: '65e5afeded39e41f218c934b70f910a24fdbb8fd', class: "switch__track", part: "track", "aria-hidden": "true" }, h("span", { key: '80576b3e6b4de1afbf314e0483375ec5b8547273', class: "switch__handle", part: "handle" }))), this.label && h("span", { key: 'c673dda287dadd9be2ab30dec9ec834fb6210c49', class: "switch__text" }, this.label))));
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

export { UaiSwitch as uai_switch };
