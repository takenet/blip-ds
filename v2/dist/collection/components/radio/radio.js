import { h, Host } from "@stencil/core";
let radioButtonIds = 0;
/** @deprecated Use uai-radio for new work. */
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
        return (h(Host, { key: 'f522239d32ab0a362f592c8570e3ec93681a786b' }, h("label", { key: '592e7390f23dd1b4c73707d01cbe922391d08c5d', class: "radio", htmlFor: this.radioId }, h("input", { key: 'b1d5ad602bff747747b95eb0e80b1d37b5edb9a7', class: "radio__input", type: "radio", ref: this.refNativeInput, id: this.radioId, onClick: this.onClick, disabled: this.disabled, checked: this.checked, value: this.value, name: this.name, "data-test": this.dataTest }), h("div", { key: '14650cf2ca240d4761daab9e8097e7cbd06e1b14', class: "radio__circle" }, !this.disabled ? h("div", { class: "focus", tabindex: "0", onKeyDown: this.handleClickKey.bind(this) }) : '', !this.disabled ? h("div", { class: "hover" }) : '', h("div", { key: '23d1ef0b36049dc461e2ebbe8eb3ed4fa3e77427', class: "radio__circle__pointer" })), this.label && (h("bds-typo", { key: 'feb8af36f38e4a7c4d2e39865b6bff44ebdc7f6f', class: "radio__text", variant: "fs-14", bold: this.checked ? 'bold' : 'regular', tag: "span" }, this.label)), h("slot", { key: 'e53429f06b6609ba675eeb6285dc8a5335c03332' }))));
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
                    "text": "label in radio, with he the input size increases."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
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
                    "text": "The value of the input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                    "text": "The name of the control, which is submitted with the form data."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the checkbox is selected."
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the user cannot interact with the checkbox."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
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
                    "text": "Data test is the prop to specifically test the component action object."
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
