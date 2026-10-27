import { h, Host } from "@stencil/core";
let radioButtonIds = 0;
export class Radio {
    constructor() {
        /**
         * If `true`, the checkbox is selected.
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the checkbox.
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.onClick = (event) => {
            this.checked = true;
            this.bdsClickChange.emit({ checked: this.checked });
            event.stopPropagation();
        };
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
    }
    checkedChanged(isChecked) {
        this.bdsChange.emit({ checked: isChecked });
    }
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return Promise.resolve(this.nativeInput.checked);
    }
    connectedCallback() {
        this.radioId = this.refer || `bds-radio-${radioButtonIds++}`;
    }
    handleClickKey(event) {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            this.onClick(event);
            event.preventDefault();
            this.bdsClickChange.emit({ checked: this.checked });
        }
    }
    render() {
        return (h(Host, { key: 'f05b3cbde641c88fd385e51e0e03464f2ec7d17f' }, h("label", { key: '7e0f97c93972a88b63b5c788e939f4d1ffd55e81', class: "radio", htmlFor: this.radioId }, h("input", { key: 'e0066a73fba0cc034d56ed1acc09667b6ded86b6', class: "radio__input", type: "radio", ref: this.refNativeInput, id: this.radioId, onClick: this.onClick, disabled: this.disabled, checked: this.checked, value: this.value, name: this.name, "data-test": this.dataTest }), h("div", { key: '4b79ef7d95f4702805328a90afc50a142ff0eae8', class: "radio__circle" }, !this.disabled ? h("div", { class: "focus", tabindex: "0", onKeyDown: this.handleClickKey.bind(this) }) : '', !this.disabled ? h("div", { class: "hover" }) : '', h("div", { key: '68adfae176276724b006b0c84579f4ab042cb30e', class: "radio__circle__pointer" })), this.label && (h("bds-typo", { key: '67fef57938171adcc2f5f0eea1b65eff6ed6898e', class: "radio__text", variant: "fs-14", bold: this.checked ? 'bold' : 'regular', tag: "span" }, this.label)), h("slot", { key: 'dfd8fd66529fc5acfa3c9cb9079115c667f503f3' }))));
    }
    static get is() { return "bds-radio"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["radio.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["radio.css"]
        };
    }
    static get properties() {
        return {
            "refer": {
                "type": "string",
                "attribute": "refer",
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
                    "text": "Refer. Field to add refer in radio buttom."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
                    "text": "label in radio, with he the input size increases."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "string",
                "attribute": "value",
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
                    "text": "The value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "name": {
                "type": "string",
                "attribute": "name",
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
                    "text": "The name of the control, which is submitted with the form data."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "checked": {
                "type": "boolean",
                "attribute": "checked",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the checkbox is selected."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the user cannot interact with the checkbox."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "dataTest": {
                "type": "string",
                "attribute": "data-test",
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
                    "text": "Data test is the prop to specifically test the component action object."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "radioId": {}
        };
    }
    static get events() {
        return [{
                "method": "bdsChange",
                "name": "bdsChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value has changed."
                },
                "complexType": {
                    "original": "{ checked: boolean }",
                    "resolved": "{ checked: boolean; }",
                    "references": {}
                }
            }, {
                "method": "bdsClickChange",
                "name": "bdsClickChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the value has changed because of a click event."
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
                    "text": "",
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
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "checked",
                "methodName": "checkedChanged"
            }];
    }
}
//# sourceMappingURL=radio.js.map
