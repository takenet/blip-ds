import { Build, Host, h, } from "@stencil/core";
import { UaiFormControl } from "../../utils/uai-form-control";
import { warnOnce } from "../../utils/deprecation";
let checkboxIds = 0;
/**
 * Checkbox for selecting any combination of options. Use a visible label, and use indeterminate only to
 * represent a parent selection whose children are partially selected. Wrap the app in UaiThemeProvider.
 *
 * @part label - The label and control layout.
 * @part control - The native checkbox input.
 * @part indicator - The visual checkbox and selection mark.
 */
export class UaiCheckbox {
    constructor() {
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
        if (Build.isDev && !this.label && !this.ariaLabel) {
            warnOnce('uai-checkbox', 'accessible-name', 'Checkbox without a visible label requires an aria-label.');
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
        return (h(Host, { key: '7de67883898aa215ee91fb9f059d2fd33c32084c', "aria-disabled": disabled ? 'true' : null, "aria-invalid": this.invalid ? 'true' : null, class: {
                'uai-checkbox--disabled': disabled,
                'uai-checkbox--short': this.size === 'short',
                'uai-checkbox--tall': this.size === 'tall',
            } }, h("label", { key: '1af4a890668fd69c97bf7073d14e679283b72491', class: "checkbox", part: "label" }, h("span", { key: 'b29fbba99ca99248529d7fd260158788d267ef8a', class: "checkbox__box" }, h("input", { key: '1e7a72fbf5fbbdea84a12278a0cbe31117998515', id: this.inputId, class: "checkbox__control", part: "control", type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: disabled, required: this.required, "aria-checked": this.indeterminate ? 'mixed' : String(this.checked), "aria-required": this.required ? 'true' : null, "aria-label": this.label ? null : this.ariaLabel, "data-test": this.dataTest, onChange: this.onChange, onKeyDown: this.onKeyDown, ref: (input) => (this.nativeInput = input) }), h("span", { key: '364fa1de0691bc478e1822bcebe82cbbd3342511', class: "checkbox__indicator", part: "indicator", "aria-hidden": "true" })), this.label && h("span", { key: '0d8d7c4c48cc1ab962a540e7ca18f04b34116b78', class: "checkbox__text" }, this.label))));
    }
    static get is() { return "uai-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-checkbox.css"]
        };
    }
    static get properties() {
        return {
            "refer": {
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
                    "text": "ID applied to the native checkbox. Kept for compatibility with bds-checkbox."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "refer"
            },
            "label": {
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
                    "text": "Visible label for the checkbox. Use aria-label when no visible label is appropriate."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'short' | 'standard' | 'tall'",
                    "resolved": "\"short\" | \"standard\" | \"tall\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Control size. Use standard by default; pair with equally sized selection controls.\nAvoid changing label typography to compensate for the control size."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "size",
                "defaultValue": "'standard'"
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
                    "text": "Name used in submitted form data. Without a name, the checkbox is not submitted."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
            },
            "checked": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the checkbox is selected."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "checked",
                "defaultValue": "false"
            },
            "indeterminate": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If true, the checkbox represents a partially selected set of child options."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "indeterminate",
                "defaultValue": "false"
            },
            "value": {
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
                    "text": "Value submitted when the checkbox is selected."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "value",
                "defaultValue": "'on'"
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
                    "text": "If true, an unchecked checkbox blocks form submission."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                    "text": "If true, the user cannot interact with the checkbox."
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
                    "text": "Accessible name used when no visible label is provided."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
            },
            "dataTest": {
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
                    "text": "Value of the data-test attribute on the native checkbox."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
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
                "method": "uaiChange",
                "name": "uaiChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted on a user-initiated change. detail: { checked, indeterminate }."
                },
                "complexType": {
                    "original": "{ checked: boolean; indeterminate: boolean }",
                    "resolved": "{ checked: boolean; indeterminate: boolean; }",
                    "references": {}
                }
            }, {
                "method": "uaiInput",
                "name": "uaiInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [{
                            "name": "deprecated",
                            "text": "This event was never emitted by bds-checkbox. Listen to uaiChange instead."
                        }],
                    "text": ""
                },
                "complexType": {
                    "original": "KeyboardEvent",
                    "resolved": "KeyboardEvent",
                    "references": {
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "getInputElement": {
                "complexType": {
                    "signature": "() => Promise<HTMLInputElement>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "HTMLInputElement": {
                            "location": "global",
                            "id": "global::HTMLInputElement"
                        }
                    },
                    "return": "Promise<HTMLInputElement>"
                },
                "docs": {
                    "text": "Returns the native checkbox input.",
                    "tags": []
                }
            },
            "getValue": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Returns whether the checkbox is selected.",
                    "tags": []
                }
            },
            "toggle": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggles the checkbox. When indeterminate, the next state is checked.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "checked",
                "methodName": "checkedChanged"
            }, {
                "propName": "indeterminate",
                "methodName": "indeterminateChanged"
            }, {
                "propName": "value",
                "methodName": "valueChanged"
            }, {
                "propName": "required",
                "methodName": "requiredChanged"
            }, {
                "propName": "disabled",
                "methodName": "disabledChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "invalid",
                "method": "onInvalid",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
