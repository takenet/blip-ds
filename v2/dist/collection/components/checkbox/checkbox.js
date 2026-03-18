import { h } from "@stencil/core";
let checkBoxIds = 0;
export class Checkbox {
    constructor() {
        /**
         * If `true`, the checkbox is selected.
         */
        this.checked = false;
        /**
         * If `true`, the checkbox is in an indeterminate state.
         * This is used when the checkbox is a parent of a list of checkboxes
         * and some (but not all) of the child checkboxes are selected.
         * Clicking when indeterminate will set the checkbox to checked.
         */
        this.indeterminate = false;
        /**
         * If `true`, the user cannot interact with the checkbox.
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.onClick = (ev) => {
            ev.stopPropagation();
            if (this.indeterminate) {
                this.indeterminate = false;
                this.checked = true;
            }
            else {
                this.checked = !this.checked;
            }
            this.bdsChange.emit({
                checked: this.checked,
                indeterminate: this.indeterminate,
            });
        };
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
        this.getStyleState = () => {
            if (this.indeterminate && !this.disabled) {
                return 'checkbox--indeterminate';
            }
            if (this.indeterminate && this.disabled) {
                return 'checkbox--indeterminate-disabled';
            }
            if (this.checked && !this.disabled) {
                return 'checkbox--selected';
            }
            if (!this.checked && !this.disabled) {
                return 'checkbox--deselected';
            }
            if (this.checked && this.disabled) {
                return 'checkbox--selected-disabled';
            }
            if (!this.checked && this.disabled) {
                return 'checkbox--deselected-disabled';
            }
            return '';
        };
        this.getIconName = () => {
            return this.indeterminate ? 'less' : 'true';
        };
    }
    connectedCallback() {
        this.checkBoxId = this.refer || `bds-checkbox-${checkBoxIds++}`;
    }
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return Promise.resolve(this.nativeInput.checked);
    }
    async toggle() {
        if (this.indeterminate) {
            this.indeterminate = false;
            this.checked = true;
        }
        else {
            this.checked = !this.checked;
        }
        this.bdsChange.emit({
            checked: this.checked,
            indeterminate: this.indeterminate,
        });
    }
    handleKeyDown(event) {
        if (this.disabled) {
            return;
        }
        if (event.key === 'Enter') {
            if (this.indeterminate) {
                this.indeterminate = false;
                this.checked = true;
            }
            else {
                this.checked = !this.checked;
            }
            this.bdsChange.emit({
                checked: this.checked,
                indeterminate: this.indeterminate,
            });
        }
    }
    render() {
        const styleState = this.getStyleState();
        return (h("div", { key: 'e8393dc51b1d3bdbcfb88e2461958ba8be6ece2e', class: {
                checkbox: true,
                [styleState]: true,
            } }, h("input", { key: 'b97b37146df694a4db9b3b974e9ba99497b09c12', type: "checkbox", ref: this.refNativeInput, id: this.checkBoxId, name: this.name, onClick: (ev) => this.onClick(ev), checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), h("label", { key: '7a395c45fd78ea969bc005ac160f42a455f82c4d', class: "checkbox__label", htmlFor: this.checkBoxId }, h("div", { key: 'bac243d4b79b8fc80b741e3f7a57987ef9afbadf', class: "checkbox__icon", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("bds-icon", { key: 'a866696637bcf8031eee4fd28a70211206c18237', class: "checkbox__icon__svg", size: "x-small", name: this.getIconName(), color: "inherit" })), this.label && (h("bds-typo", { key: 'a38c8185f5c879409dc69c7db0903fda3f4e2db1', class: "checkbox__text", variant: "fs-14", tag: "span" }, this.label)))));
    }
    static get is() { return "bds-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["checkbox.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["checkbox.css"]
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
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
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
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
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
                "required": true,
                "optional": false,
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If `true`, the checkbox is selected."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "indeterminate": {
                "type": "boolean",
                "attribute": "indeterminate",
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
                    "text": "If `true`, the checkbox is in an indeterminate state.\nThis is used when the checkbox is a parent of a list of checkboxes\nand some (but not all) of the child checkboxes are selected.\nClicking when indeterminate will set the checkbox to checked."
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
                "optional": false,
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
            "checkBoxId": {}
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
                "method": "bdsInput",
                "name": "bdsInput",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the input has changed."
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
                    "text": "",
                    "tags": []
                }
            }
        };
    }
}
//# sourceMappingURL=checkbox.js.map
