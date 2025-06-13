import { h } from "@stencil/core";
let switchIds = 0;
export class Switch {
    constructor() {
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'tall', 'standard', 'short';
         */
        this.size = 'standard';
        /**
         * If `true`, the switch is selected.
         */
        this.checked = false;
        /**
         * If `true`, the user cannot interact with the switch.
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.onClick = () => {
            this.checked = !this.checked;
        };
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
        this.getStyleState = () => {
            if (this.checked && !this.disabled) {
                return 'slider--selected';
            }
            if (!this.checked && !this.disabled) {
                return 'slider--deselected';
            }
            if (this.checked && this.disabled) {
                return 'slider--selected-disabled';
            }
            if (!this.checked && this.disabled) {
                return 'slider--deselected-disabled';
            }
            return '';
        };
        this.handleClick = (ev) => {
            if (!this.disabled) {
                if (ev.key === 'Enter') {
                    this.checked = !this.checked;
                }
            }
        };
    }
    connectedCallback() {
        this.switchId = this.refer || `bds-switch-${switchIds++}`;
    }
    checkedChanged(isChecked) {
        this.bdsChange.emit({
            checked: isChecked,
        });
    }
    getInputElement() {
        return Promise.resolve(this.nativeInput);
    }
    getValue() {
        return Promise.resolve(this.nativeInput.checked);
    }
    getSizeClass() {
        return `switch switch--size-${this.size} `;
    }
    getSizeSliderClass() {
        return `slider slider--size-${this.size} round `;
    }
    render() {
        const sizeClass = this.getSizeClass();
        const sizeSliderClass = this.getSizeSliderClass();
        const styleState = this.getStyleState();
        return (h("label", { key: '436ed33ad83041289505840a79399cd2b5ec181d', class: { [sizeClass]: true } }, h("div", { key: '5cb1149c85d4d036a663d2a3181039c6f9322106', tabindex: "0", onKeyDown: (ev) => this.handleClick(ev), class: "focus" }), h("input", { key: 'be37c22d7651839251448700f14621b62a1fd120', type: "checkbox", ref: this.refNativeInput, id: this.switchId, name: this.name, onClick: this.onClick, checked: this.checked, disabled: this.disabled, "data-test": this.dataTest }), h("span", { key: 'c9f243ee191a52fb9c793132fb8ea6f225c9db91', class: { [sizeSliderClass]: true, [styleState]: true } })));
    }
    static get is() { return "bds-switch"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["switch.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["switch.css"]
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
                    "text": "The refer of the control."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "SwitchSize",
                    "resolved": "\"short\" | \"standard\" | \"tall\"",
                    "references": {
                        "SwitchSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/switch/switch.tsx",
                            "id": "src/components/switch/switch.tsx::SwitchSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size. Entered as one of the size. Can be one of:\n'tall', 'standard', 'short';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'standard'"
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
                    "text": "If `true`, the switch is selected."
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
                    "text": "If `true`, the user cannot interact with the switch."
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
            "switchId": {}
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
//# sourceMappingURL=switch.js.map
