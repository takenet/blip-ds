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
        return (h(Host, { key: '37b3f36bb81b57708b91406c5c8a844f6d4c8ba4' }, h("label", { key: 'ae3905590ac776f361a417b109a231dc5d79b4e8', class: "radio", htmlFor: this.radioId }, h("input", { key: '303991b490baf075e0c04e9fcfc0cdf9a400daed', class: "radio__input", type: "radio", ref: this.refNativeInput, id: this.radioId, onClick: this.onClick, disabled: this.disabled, checked: this.checked, value: this.value, name: this.name, "data-test": this.dataTest }), h("div", { key: 'd53ec5d624c13c564ed56319798711f2a70bc1c4', class: "radio__circle" }, !this.disabled ? h("div", { class: "focus", tabindex: "0", onKeyDown: this.handleClickKey.bind(this) }) : '', !this.disabled ? h("div", { class: "hover" }) : '', h("div", { key: 'c31679c6eec396ff2ea6c02c722b0b7927caf678', class: "radio__circle__pointer" })), this.label && (h("bds-typo", { key: '42ac37f3e3c98a2c65658eef0edc8161105b1e41', class: "radio__text", variant: "fs-14", bold: this.checked ? 'bold' : 'regular', tag: "span" }, this.label)), h("slot", { key: '577f05d7d5ee93dce3615c67a2ea7fd0fb593725' }))));
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
                    "original": "any",
                    "resolved": "any",
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
                    "original": "any",
                    "resolved": "any",
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
