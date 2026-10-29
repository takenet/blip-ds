import { Build, Host, h, } from "@stencil/core";
import { UaiFormControl } from "../../utils/uai-form-control";
import { warnOnce } from "../../utils/deprecation";
let radioIds = 0;
/**
 * Radio option for one choice in a mutually exclusive group. Pair radios with a labelled UaiRadioGroup.
 * Wrap the app in UaiThemeProvider.
 *
 * @slot - Additional visible label content.
 * @part label - The label and control layout.
 * @part control - The visual radio control.
 * @part input - The native radio input.
 */
export class UaiRadio {
    constructor() {
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
        var _a, _b;
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
        if (Build.isDev && !this.label && !this.ariaLabel && !((_b = this.el.textContent) === null || _b === void 0 ? void 0 : _b.trim())) {
            warnOnce('uai-radio', 'accessible-name', 'Radio without visible label content requires an aria-label.');
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
        return (h(Host, { key: '264d72550995d78d1e4c133970ce09f492976069', "aria-disabled": disabled ? 'true' : null, class: {
                'uai-radio--disabled': disabled,
                'uai-radio--checked': this.checked,
                'uai-radio--short': this.size === 'short',
                'uai-radio--tall': this.size === 'tall',
            } }, h("label", { key: 'a634f56d3427058f78fc03213bfad1c2dbe8d655', class: "radio", part: "label" }, h("span", { key: 'eed25dbefb85ed6af4db4636c61f1776ccecc51f', class: "radio__control", part: "control" }, h("input", { key: '95d904eb5da2bcabc4ab87128a9b987d4a3b43e2', id: this.inputId, class: "radio__input", part: "input", type: "radio", value: this.value, name: this.isGrouped ? undefined : this.name, checked: this.checked, disabled: disabled, tabIndex: this.groupTabIndex, "aria-label": hasVisibleName ? null : this.ariaLabel, "data-test": this.dataTest, onClick: this.onClick, onKeyDown: this.onKeyDown, ref: (input) => (this.nativeInput = input) }), h("span", { key: 'f6abb02532f0f82422595f64139156fc0263a171', class: "radio__dot", "aria-hidden": "true" })), h("span", { key: 'b8429bd90c1d21c87db7f58a951a82af99d16b4f', class: "radio__text" }, this.label, h("slot", { key: '3bbd28f48d50504c2f68fd22f1e503d67abc43ed' })))));
    }
    static get is() { return "uai-radio"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-radio.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-radio.css"]
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
                    "text": "ID applied to the native radio. Kept for compatibility with bds-radio."
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
                    "text": "Visible label for the radio."
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
            "value": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Value submitted when this radio is selected."
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
                    "text": "Name used in submitted form data when the radio is not inside a UaiRadioGroup."
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
                    "text": "If true, the radio is selected."
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
                    "text": "If true, the user cannot interact with the radio."
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
                    "text": "Accessible name used when no visible label or slotted content is provided."
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
                    "text": "Value of the data-test attribute on the native radio."
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
            "groupTabIndex": {},
            "groupDisabled": {},
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
                    "text": "Emitted whenever checked changes. detail: { checked }."
                },
                "complexType": {
                    "original": "{ checked: boolean }",
                    "resolved": "{ checked: boolean; }",
                    "references": {}
                }
            }, {
                "method": "uaiClickChange",
                "name": "uaiClickChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted once when the radio is activated, including reselecting it. detail: { checked }."
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
                    "text": "Returns the native radio input.",
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
                    "text": "Returns whether the radio is selected.",
                    "tags": []
                }
            },
            "setFocus": {
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
                    "text": "Moves focus to the native radio input.",
                    "tags": []
                }
            },
            "setTabIndex": {
                "complexType": {
                    "signature": "(value: number) => Promise<void>",
                    "parameters": [{
                            "name": "value",
                            "type": "number",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets this option's position in the group's tab sequence.",
                    "tags": []
                }
            },
            "setGroupDisabled": {
                "complexType": {
                    "signature": "(value: boolean) => Promise<void>",
                    "parameters": [{
                            "name": "value",
                            "type": "boolean",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Applies the disabled state inherited from a UaiRadioGroup.",
                    "tags": []
                }
            },
            "activate": {
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
                    "text": "Selects this option from a user-driven group action.",
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
