import { h } from "@stencil/core";
/**
 * @deprecated Use uai-select-option with UaiThemeProvider for tokenized styling, ARIA and keyboard support.
 */
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
        return (h("div", { key: '66ae6d2d9cb985369ab79562faa019e66f7e3dcd', id: `bds-select-option-${this.value}`, "data-event": "click", role: "button", onKeyDown: this.attachOptionKeyboardListeners, onClick: this.onClickSelectOption, "data-value": this.value, "data-test": this.dataTest, class: {
                'select-option': this.typeOption != 'checkbox',
                'select-option--selected': this.selected,
                'select-option--disabled': this.disabled,
                'select-option--invisible': this.invisible,
            } }, h("div", { key: 'c466118f75c50da98b3c8b8570c7a2046f98069a', style: { alignSelf: this.slotAlign } }, h("slot", { key: '00463e8a8b6a1e319b91ae410ad1a3505d5f3951', name: "input-left" })), h("div", { key: '229ab16bc14d7b444cffd65a20d6ae6d32362dd9', class: {
                'select-option__container': true,
                'select-option__container__fill_space': !!this.status,
                'select-option__container__checkbox': this.typeOption == 'checkbox',
            }, onClick: () => this.checkedCurrent() }, this.titleText && (h("bds-typo", { key: '6bfe9b84ae846b7a5a0620f1b0d144df79e87388', class: "select-option__container--value", variant: "fs-16", bold: "semi-bold" }, this.titleText)), this.typeOption === 'checkbox' ? (h("bds-checkbox", { ref: this.refNativeInput, refer: `html-for-${this.value}`, label: this.element.innerHTML, name: this.value, checked: this.checked, onBdsChange: (ev) => this.optionHandle(ev) })) : (h("bds-typo", { class: {
                'select-option__container--value': true,
                'select-option__container__overflow': !!this.status,
            }, noWrap: !!this.status, variant: "fs-14" }, h("slot", null)))), this.bulkOption && (h("bds-typo", { key: '721f2d6034bda6ca10e35dc65bb873f9fa454727', class: "select-option__container--bulk", variant: "fs-10" }, this.bulkOption)), this.status && (h("bds-typo", { key: '054a9f7c820bb0c9abf95953d16c55ae068076bd', class: "select-option__container--status", noWrap: true, variant: "fs-10" }, this.status))));
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
                "reflect": false,
                "attribute": "value"
            },
            "selected": {
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
                    "text": "The text value of the option."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selected",
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
                    "text": "If `true`, the user cannot interact with the select option."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "invisible": {
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
                    "text": "Add state danger on input, use for use feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "invisible",
                "defaultValue": "false"
            },
            "danger": {
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
                    "text": "Add state danger on input, use for use feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "danger",
                "defaultValue": "false"
            },
            "bulkOption": {
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
                    "text": "Quantity Description on option value, this item is locate to rigth in component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "bulk-option",
                "defaultValue": "''"
            },
            "slotAlign": {
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
                    "text": "Alignment of input-left slot. The value need to be one of the values used on flexbox align-self property."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "slot-align",
                "defaultValue": "'center'"
            },
            "titleText": {
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
                    "text": "If set, a title will be shown under the text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "title-text"
            },
            "status": {
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
                    "text": "If set, a text will be displayed on the right side of the option label"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "status"
            },
            "typeOption": {
                "type": "string",
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
                "attribute": "type-option",
                "defaultValue": "'default'"
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
