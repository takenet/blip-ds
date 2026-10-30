import { h } from "@stencil/core";
let checkBoxIds = 0;
/** @deprecated Use uai-checkbox for new work. */
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
            // When clicking from indeterminate state, set to checked
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
        // When toggling from indeterminate, always set to checked
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
            // When pressing Enter from indeterminate state, set to checked
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
        return (h("div", { key: '84d67c76bda309114e84efcb0eb19a19fdf2a6e3', class: {
                checkbox: true,
                [styleState]: true,
            } }, h("input", { key: '3918c3a7955b57d7b54eeca246dfc57afe0aba95', type: "checkbox", ref: this.refNativeInput, id: this.checkBoxId, name: this.name, onClick: (ev) => this.onClick(ev), checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), h("label", { key: '6549951af976df3936d7d59f4f2ff950b391449e', class: "checkbox__label", htmlFor: this.checkBoxId }, h("div", { key: '622409beefe2a474afe686eb79b220a4d3fc2f1b', class: "checkbox__icon", tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("bds-icon", { key: '52d7477559479cb8a0f4787eb3f147a9d086dfeb', class: "checkbox__icon__svg", size: "x-small", name: this.getIconName(), color: "inherit" })), this.label && (h("bds-typo", { key: '055b0438c93956b8106f178ea886320debf40726', class: "checkbox__text", variant: "fs-14", tag: "span" }, this.label)))));
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
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "name": {
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
                "optional": false,
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
                    "text": "If `true`, the checkbox is in an indeterminate state.\nThis is used when the checkbox is a parent of a list of checkboxes\nand some (but not all) of the child checkboxes are selected.\nClicking when indeterminate will set the checkbox to checked."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "indeterminate",
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
