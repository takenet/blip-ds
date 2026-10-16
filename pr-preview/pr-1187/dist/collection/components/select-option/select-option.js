import { h } from "@stencil/core";
export class SelectOption {
    constructor() {
        /**
         * The text value of the option.
         */
        this.selected = false;
        /**
         * If `true`, the user cannot interact with the select option.
         */
        this.disabled = false;
        /**
         * Add state danger on input, use for use feedback.
         */
        this.invisible = false;
        /**
         * Add state danger on input, use for use feedback.
         */
        this.danger = false;
        /**
         *  Quantity Description on option value, this item is locate to rigth in component.
         */
        this.bulkOption = '';
        /**
         *  Alignment of input-left slot. The value need to be one of the values used on flexbox align-self property.
         */
        this.slotAlign = 'center';
        /**
         * Type Option. Used toselect type of item list.
         */
        this.typeOption = 'default';
        /**
         * If `true`, the checkbox is selected.
         */
        this.checked = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.refNativeInput = (input) => {
            this.nativeInput = input;
        };
        this.checkedCurrent = () => {
            if (this.typeOption !== 'checkbox')
                return;
            this.nativeInput.toggle();
        };
        this.onClickSelectOption = () => {
            if (this.typeOption == 'checkbox')
                return;
            if (!this.disabled) {
                this.optionSelected.emit({ value: this.value, label: this.element.innerHTML });
            }
        };
        this.optionHandle = (ev) => {
            const elementChecked = ev.target;
            const data = { value: elementChecked.name, label: this.element.innerHTML, checked: elementChecked.checked };
            this.checked = !this.checked;
            this.optionChecked.emit(data);
        };
        this.attachOptionKeyboardListeners = (event) => {
            const element = event.target;
            switch (event.key) {
                case "Enter" /* Keyboard.ENTER */:
                    this.onClickSelectOption();
                    break;
                case "ArrowDown" /* Keyboard.ARROW_DOWN */:
                    if (element.parentElement.nextElementSibling &&
                        !element.parentElement.nextElementSibling.hasAttribute('invisible')) {
                        event.preventDefault();
                        event.stopPropagation();
                        element.parentElement.nextElementSibling.firstElementChild.focus();
                    }
                    break;
                case "ArrowUp" /* Keyboard.ARROW_UP */:
                    if (element.parentElement.previousElementSibling &&
                        !element.parentElement.previousElementSibling.hasAttribute('invisible')) {
                        event.preventDefault();
                        event.stopPropagation();
                        element.parentElement.previousElementSibling.firstElementChild.focus();
                    }
            }
        };
    }
    changeSelectionType() {
        this.typeOption = this.typeOption;
    }
    async toggle() {
        this.checked = !this.checked;
    }
    async toMark() {
        this.checked = true;
    }
    async markOff() {
        this.checked = false;
    }
    render() {
        return (h("div", { key: '5b7c2422b760789a14b01edb074d14a95ebf4d9b', id: `bds-select-option-${this.value}`, "data-event": "click", role: "button", onKeyDown: this.attachOptionKeyboardListeners, onClick: this.onClickSelectOption, "data-value": this.value, "data-test": this.dataTest, class: {
                'select-option': this.typeOption != 'checkbox',
                'select-option--selected': this.selected,
                'select-option--disabled': this.disabled,
                'select-option--invisible': this.invisible,
            } }, h("div", { key: 'd4398f3f076c9819e3801ecf422a36f60f337abf', style: { alignSelf: this.slotAlign } }, h("slot", { key: '107cdbe656c38de44bd58237a0425e1fd984f683', name: "input-left" })), h("div", { key: '30d79c0e46edbdeaee3fea51cbf3a6e31954f8ec', class: {
                'select-option__container': true,
                'select-option__container__fill_space': !!this.status,
                'select-option__container__checkbox': this.typeOption == 'checkbox',
            }, onClick: () => this.checkedCurrent() }, this.titleText && (h("bds-typo", { key: '961a3a61273eb6f68c2d6cba60497d6b64e999b6', class: "select-option__container--value", variant: "fs-16", bold: "semi-bold" }, this.titleText)), this.typeOption === 'checkbox' ? (h("bds-checkbox", { ref: this.refNativeInput, refer: `html-for-${this.value}`, label: this.element.innerHTML, name: this.value, checked: this.checked, onBdsChange: (ev) => this.optionHandle(ev) })) : (h("bds-typo", { class: {
                'select-option__container--value': true,
                'select-option__container__overflow': !!this.status,
            }, noWrap: !!this.status, variant: "fs-14" }, h("slot", null)))), this.bulkOption && (h("bds-typo", { key: '8344a83667a5a29dcc487c8bb8a3df1af3583d30', class: "select-option__container--bulk", variant: "fs-10" }, this.bulkOption)), this.status && (h("bds-typo", { key: 'a4234b17ea814f502a485eea748e52091090bcf0', class: "select-option__container--status", noWrap: true, variant: "fs-10" }, this.status))));
    }
    static get is() { return "bds-select-option"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["select-option.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["select-option.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "any",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
            "selected": {
                "type": "boolean",
                "attribute": "selected",
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
                    "text": "The text value of the option."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
                    "text": "If `true`, the user cannot interact with the select option."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "invisible": {
                "type": "boolean",
                "attribute": "invisible",
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
                    "text": "Add state danger on input, use for use feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "danger": {
                "type": "boolean",
                "attribute": "danger",
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
                    "text": "Add state danger on input, use for use feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "bulkOption": {
                "type": "string",
                "attribute": "bulk-option",
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
                    "text": "Quantity Description on option value, this item is locate to rigth in component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "slotAlign": {
                "type": "string",
                "attribute": "slot-align",
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
                    "text": "Alignment of input-left slot. The value need to be one of the values used on flexbox align-self property."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'center'"
            },
            "titleText": {
                "type": "string",
                "attribute": "title-text",
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
                    "text": "If set, a title will be shown under the text"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "status": {
                "type": "string",
                "attribute": "status",
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
                    "text": "If set, a text will be displayed on the right side of the option label"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "typeOption": {
                "type": "string",
                "attribute": "type-option",
                "mutable": true,
                "complexType": {
                    "original": "TypeOption",
                    "resolved": "\"checkbox\" | \"default\"",
                    "references": {
                        "TypeOption": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/select-option/select-option.tsx",
                            "id": "src/components/select-option/select-option.tsx::TypeOption"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Type Option. Used toselect type of item list."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'default'"
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
    static get events() {
        return [{
                "method": "optionSelected",
                "name": "optionSelected",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ value: any; label: string }",
                    "resolved": "{ value: any; label: string; }",
                    "references": {}
                }
            }, {
                "method": "optionChecked",
                "name": "optionChecked",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ value: string; label: string; checked: boolean }",
                    "resolved": "{ value: string; label: string; checked: boolean; }",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
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
            },
            "toMark": {
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
            },
            "markOff": {
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
    static get elementRef() { return "element"; }
    static get watchers() {
        return [{
                "propName": "typeOption",
                "methodName": "changeSelectionType"
            }];
    }
}
//# sourceMappingURL=select-option.js.map
