import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';
import { U as UaiFormControl } from './uai-form-control-BkRP7pRQ.js';

const uaiRadioGroupCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);color:var(--uai-content-primary, #242729);font-family:var(--uai-font-family-sans, Figtree), sans-serif}:host([aria-disabled=true]){cursor:not-allowed}.validation-proxy{position:absolute;width:0;height:0;overflow:hidden;-webkit-clip-path:inset(50%);clip-path:inset(50%);white-space:nowrap}@media (forced-colors: active){:host(:focus-within){outline:var(--uai-border-width-thick, 2px) solid CanvasText}}`;

const isRadioOption = (target) => target instanceof HTMLElement && target.tagName.toLowerCase() === 'uai-radio';
const UaiRadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiRadioGroupChange = createEvent(this, "uaiRadioGroupChange");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
        this.disabledByForm = false;
        this.invalid = false;
        this.defaultValue = null;
        this.suppressChangeEvent = false;
        /**
         * If true, a selection is required before form submission.
         */
        this.required = false;
        /**
         * If true, all options are disabled.
         */
        this.disabled = false;
        /**
         * Accessible name of the radio group. Use this or aria-labelledby.
         */
        this.ariaLabel = null;
        this.onSlotChange = () => {
            if (this.value === undefined)
                this.initializeSelection();
            this.syncRadios();
        };
        this.onKeyDown = (event) => {
            const key = event.key;
            if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(key) ||
                this.effectiveDisabled ||
                this.isFromNestedGroup(event)) {
                return;
            }
            const options = this.getEnabledOptions();
            if (!options.length)
                return;
            event.preventDefault();
            const current = isRadioOption(event.target) ? options.indexOf(event.target) : options.findIndex((radio) => radio.value === this.value);
            const direction = key === 'ArrowRight' || key === 'ArrowDown' ? 1 : -1;
            const nextIndex = current < 0 ? (direction > 0 ? 0 : options.length - 1) : (current + direction + options.length) % options.length;
            const next = options[nextIndex];
            if (next.value !== this.value)
                void next.activate();
            void next.setFocus();
        };
    }
    valueChanged(value) {
        this.syncRadios();
        this.syncFormValue();
        this.syncValidity();
        if (!this.suppressChangeEvent)
            this.uaiRadioGroupChange.emit({ value });
    }
    disabledChanged() {
        this.syncRadios();
        this.syncValidity();
    }
    requiredChanged() {
        this.syncValidity();
    }
    onRadioClickChange(event) {
        var _a;
        if (!((_a = event.detail) === null || _a === void 0 ? void 0 : _a.checked) || !this.isOwnRadio(event.target))
            return;
        if (event.target.value !== this.value)
            this.value = event.target.value;
    }
    onRadioChange(event) {
        var _a, _b;
        if (!this.isOwnRadio(event.target))
            return;
        if (((_a = event.detail) === null || _a === void 0 ? void 0 : _a.checked) && event.target.value !== this.value) {
            this.value = event.target.value;
        }
        else if (!((_b = event.detail) === null || _b === void 0 ? void 0 : _b.checked) && event.target.value === this.value) {
            this.value = undefined;
        }
    }
    isOwnRadio(target) {
        return isRadioOption(target) && target.closest('uai-radio-group') === this.el;
    }
    isFromNestedGroup(event) {
        return event.composedPath().some((target) => target instanceof HTMLElement && target.tagName.toLowerCase() === 'uai-radio-group' && target !== this.el);
    }
    onInvalid() {
        this.invalid = true;
    }
    componentWillLoad() {
        var _a, _b;
        this.defaultValue = (_a = this.value) !== null && _a !== void 0 ? _a : null;
        if (typeof ((_b = this.internals) === null || _b === void 0 ? void 0 : _b.setFormValue) === 'function') {
            this.formControl = new UaiFormControl({
                internals: this.internals,
                defaultValue: () => this.defaultValue,
                onReset: (value) => {
                    this.value = typeof value === 'string' ? value : undefined;
                    this.invalid = false;
                },
                onDisabledChange: (disabled) => {
                    this.disabledByForm = disabled;
                    this.syncRadios();
                    this.syncValidity();
                },
            });
        }
    }
    componentDidLoad() {
        if (typeof MutationObserver === 'function') {
            this.observer = new MutationObserver(() => this.syncRadios());
            this.observer.observe(this.el, {
                attributes: true,
                attributeFilter: ['checked', 'disabled', 'value'],
                childList: true,
                subtree: true,
            });
        }
        this.initializeSelection();
        this.syncRadios();
    }
    disconnectedCallback() {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    }
    componentDidRender() {
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
        this.value = state === null ? undefined : state;
    }
    get effectiveDisabled() {
        return this.disabled || this.disabledByForm;
    }
    get radioOptions() {
        return Array.from(this.el.querySelectorAll('uai-radio')).filter((radio) => radio.closest('uai-radio-group') === this.el);
    }
    getEnabledOptions() {
        return this.radioOptions.filter((radio) => !radio.disabled && !this.effectiveDisabled);
    }
    initializeSelection() {
        var _a;
        const radios = this.radioOptions;
        if (this.value !== undefined) {
            this.defaultValue = this.value;
            return;
        }
        const checked = radios.find((radio) => radio.checked && !radio.disabled);
        if (!checked) {
            this.defaultValue = null;
            return;
        }
        this.defaultValue = (_a = checked.value) !== null && _a !== void 0 ? _a : null;
        this.suppressChangeEvent = true;
        this.value = checked.value;
        this.suppressChangeEvent = false;
    }
    syncRadios() {
        const radios = this.radioOptions;
        if (!radios.length)
            return;
        let selected = this.value === undefined ? undefined : radios.find((radio) => radio.value === this.value && !radio.disabled);
        if (this.value !== undefined && !selected && !this.effectiveDisabled) {
            this.suppressChangeEvent = true;
            this.value = undefined;
            this.suppressChangeEvent = false;
            selected = undefined;
        }
        const enabled = this.getEnabledOptions();
        const activeTabStop = selected || enabled[0];
        for (const radio of radios) {
            radio.checked = radio === selected;
            void radio.setGroupDisabled(this.effectiveDisabled);
            void radio.setTabIndex(radio === activeTabStop ? 0 : -1);
        }
    }
    syncFormValue() {
        var _a, _b;
        (_a = this.formControl) === null || _a === void 0 ? void 0 : _a.setValue((_b = this.value) !== null && _b !== void 0 ? _b : null);
    }
    syncValidity() {
        const proxy = this.validationProxy;
        if (!proxy || !this.formControl)
            return;
        const missing = this.required && this.value == null && !this.effectiveDisabled;
        const message = this.requiredErrorMessage || proxy.validationMessage;
        const anchor = this.getEnabledOptions()[0];
        this.formControl.setValidity({ valueMissing: missing }, missing ? message : '', anchor);
        if (!missing)
            this.invalid = false;
    }
    render() {
        const disabled = this.effectiveDisabled;
        return (h(Host, { key: '13fc49a1c8d9b5f9a26754dff0a173fdd4c708df', role: "radiogroup", tabIndex: -1, part: "group", "aria-label": this.ariaLabel || null, "aria-labelledby": this.ariaLabelledBy || null, "aria-disabled": disabled ? 'true' : null, "aria-required": this.required ? 'true' : null, "aria-invalid": this.invalid ? 'true' : null, onKeyDown: this.onKeyDown }, h("slot", { key: 'ec7d3dc9c6ab4af474d5f6d27dcb1f8bf1b5d068', onSlotchange: this.onSlotChange }), h("input", { key: 'e06978a43099556e3c8108b6163ee0e18846aaaa', class: "validation-proxy", type: "checkbox", required: this.required && !disabled, checked: this.value !== undefined && this.value !== null, "aria-hidden": "true", tabIndex: -1, ref: (input) => (this.validationProxy = input) })));
    }
    static get formAssociated() { return true; }
    get el() { return getElement(this); }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }],
        "disabled": [{
                "disabledChanged": 0
            }],
        "required": [{
                "requiredChanged": 0
            }]
    }; }
};
UaiRadioGroup.style = uaiRadioGroupCss();

export { UaiRadioGroup as uai_radio_group };
