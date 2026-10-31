import { Build, Host, h, } from "@stencil/core";
import { UaiFormControl } from "../../utils/uai-form-control";
import { warnOnce } from "../../utils/deprecation";
let switchIds = 0;
/**
 * Binary setting applied immediately. Use an accessible name; pair with UaiThemeProvider.
 * Avoid switches for submitting a form or choosing mutually exclusive options.
 *
 * @part control - The native switch input.
 * @part track - The visual track.
 * @part handle - The moving handle.
 * @part label - The label and control layout.
 */
export class UaiSwitch {
    constructor() {
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
        if (Build.isDev && !this.label && !this.ariaLabel) {
            warnOnce('uai-switch', 'accessible-name', 'Switch requires a label or aria-label describing the setting.');
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
        if (Build.isDev && size !== this.size) {
            warnOnce('uai-switch', 'size', `Unknown size "${this.size}". Use short, standard or tall; falling back to standard.`);
        }
        return (h(Host, { key: '5f69860fb17ba3100c74b80681401fc1d5010402', "aria-disabled": this.effectiveDisabled ? 'true' : null }, h("label", { key: 'bc95ed037fcee091a94a10ce8d997cb3e73d4695', class: "switch__label", part: "label" }, h("span", { key: '5788d5f95e2b34ba6ba31ae6f7122696bc458ee8', class: `switch switch--${size}` }, h("input", { key: 'a6db463c47e8ed414c902524af8fecf18e25fa8e', ref: (input) => (this.nativeInput = input), id: this.refer || this.generatedId, class: "switch__input", part: "control", type: "checkbox", name: this.name, value: this.value, role: "switch", checked: this.checked, disabled: this.effectiveDisabled, "aria-checked": String(this.checked), "aria-label": this.ariaLabel, "data-test": this.dataTest, onChange: this.onChange, onKeyDown: this.onKeyDown }), h("span", { key: 'fe34d1a236e2a1353d73af350d5a6e05e7b6e8b6', class: "switch__track", part: "track", "aria-hidden": "true" }, h("span", { key: 'f7e11fbb4ace056895338b7e6a75f238b0a2f87a', class: "switch__handle", part: "handle" }))), this.label && h("span", { key: 'ec0e8b44f4ad2ef67b31a8a35ab7fc53cf26773e', class: "switch__text" }, this.label))));
    }
    static get is() { return "uai-switch"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-switch.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-switch.css"]
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
                    "text": "Native input ID. Use for integration; pair with getInputElement. Avoid duplicate IDs."
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
                    "text": "Visible setting name. Use with the control; pair with checked. Avoid unnamed settings."
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
                    "original": "UaiSwitchSize",
                    "resolved": "\"short\" | \"standard\" | \"tall\"",
                    "references": {
                        "UaiSwitchSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-switch/uai-switch.tsx",
                            "id": "src/components/uai-switch/uai-switch.tsx::UaiSwitchSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Relative control size. Use standard by default; pair with adjacent controls. Avoid custom dimensions."
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
                    "text": "Submitted field name. Use inside forms; pair with value. Avoid duplicate names for unrelated settings."
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
                    "text": "Current on/off state. Use for controlled settings; pair with uaiChange. Avoid treating it as an action."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "checked",
                "defaultValue": "false"
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
                    "text": "Prevents interaction. Use for unavailable settings; pair with explanatory text. Avoid hiding restrictions."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
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
                    "text": "Submitted value when on. Use with name; pair with form association. Avoid depending on unchecked submission."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "'on'"
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
                    "text": "Accessible setting name when no visible label is provided. Avoid unnamed switches."
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
                    "text": "Test selector on the native input. Use for automation; pair with semantic queries. Avoid styling by it."
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
            "disabledByForm": {}
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
                    "text": "State change, including programmatic changes. Use detail.checked; pair with checked. Avoid duplicate handlers."
                },
                "complexType": {
                    "original": "{ checked: boolean }",
                    "resolved": "{ checked: boolean; }",
                    "references": {}
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
                    "text": "Returns the native input. Use for focus; pair with accessible naming. Avoid modifying its visual styles.",
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
                    "text": "Returns the on/off state. Use for imperative consumers; pair with uaiChange. Avoid polling.",
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
                "propName": "value",
                "methodName": "valueChanged"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
