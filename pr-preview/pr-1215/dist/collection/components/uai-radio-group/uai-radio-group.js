import { Build, Host, h, } from "@stencil/core";
import { UaiFormControl } from "../../utils/uai-form-control";
import { warnOnce } from "../../utils/deprecation";
const isRadioOption = (target) => target instanceof HTMLElement && target.tagName.toLowerCase() === 'uai-radio';
/**
 * Coordinates a mutually exclusive set of UaiRadio options. Provide an accessible group name with
 * aria-label or aria-labelledby. The group owns the submitted name and value.
 *
 * @slot - UaiRadio options, optionally wrapped by layout elements.
 * @part group - The radiogroup container.
 */
export class UaiRadioGroup {
    constructor() {
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
        if (Build.isDev && !this.ariaLabel && !this.ariaLabelledBy) {
            warnOnce('uai-radio-group', 'accessible-name', 'Radio groups require aria-label or aria-labelledby.');
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
        return (h(Host, { key: '3a81e981a2abb93c7cf6b004565d963b06cecd31', role: "radiogroup", tabIndex: -1, part: "group", "aria-label": this.ariaLabel || null, "aria-labelledby": this.ariaLabelledBy || null, "aria-disabled": disabled ? 'true' : null, "aria-required": this.required ? 'true' : null, "aria-invalid": this.invalid ? 'true' : null, onKeyDown: this.onKeyDown }, h("slot", { key: 'd81db55415cac129b0f2d3a98026fc618a7033d6', onSlotchange: this.onSlotChange }), h("input", { key: '1ce000e41cca6bb1d62f839cd0a25c4964f686f3', class: "validation-proxy", type: "checkbox", required: this.required && !disabled, checked: this.value !== undefined && this.value !== null, "aria-hidden": "true", tabIndex: -1, ref: (input) => (this.validationProxy = input) })));
    }
    static get is() { return "uai-radio-group"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-radio-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-radio-group.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Selected radio value."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value"
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Name used for the selected value in submitted form data."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, a selection is required before form submission."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "required",
                "defaultValue": "false"
            },
            "requiredErrorMessage": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Message announced when required validation fails. Defaults to the browser's localized message."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required-error-message"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, all options are disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name of the radio group. Use this or aria-labelledby."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
            },
            "ariaLabelledBy": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "ID references for the accessible name of the radio group."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-labelledby"
            }
        };
    }
    static get states() {
        return {
            "disabledByForm": {},
            "invalid": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiRadioGroupChange",
                "name": "uaiRadioGroupChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted whenever the selected value changes. detail: { value }."
                },
                "complexType": {
                    "original": "{ value?: string }",
                    "resolved": "{ value?: string; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "disabled",
                "methodName": "disabledChanged"
            }, {
                "propName": "required",
                "methodName": "requiredChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "uaiClickChange",
                "method": "onRadioClickChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "uaiChange",
                "method": "onRadioChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "invalid",
                "method": "onInvalid",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
