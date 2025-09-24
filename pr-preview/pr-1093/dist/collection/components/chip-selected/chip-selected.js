import { Host, h } from "@stencil/core";
export class ChipSelected {
    constructor() {
        this.isSelected = false;
        /**
         * used for change the color. Uses one of them.
         */
        this.color = 'default';
        /**
         * used for change the chip size. Use one of them;
         */
        this.size = 'standard';
        /**
         * used for set the initial setup for true;
         */
        this.selected = false;
        /**
         * When 'true', no events will be dispatched
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    handleKeyDown(event) {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            event.preventDefault();
            if (this.isSelected) {
                this.isSelected = false;
            }
            else {
                this.isSelected = true;
            }
            this.chipClick.emit({ selected: this.isSelected });
        }
    }
    handleClick(event) {
        if (!this.disabled) {
            event.preventDefault();
            if (this.isSelected) {
                this.isSelected = false;
            }
            else {
                this.isSelected = true;
            }
            this.chipClick.emit({ selected: this.isSelected });
        }
    }
    componentWillLoad() {
        this.el.focus();
        this.isSelected = this.selected;
    }
    getDisabledChip() {
        return this.disabled ? { chip_disabled: true, [`chip_disabled--${this.size}`]: true } : {};
    }
    getStyleChip() {
        return this.isSelected
            ? { chip_selected: true, [`chip_selected--${this.size}`]: true }
            : { [`chip--${this.color}`]: true, [`chip--${this.size}`]: true };
    }
    getStyleText() {
        if (this.isSelected) {
            const chipSelected = { 'chip_selected--text': true };
            return chipSelected;
        }
    }
    getSizeIconChip() {
        if (this.size === 'tall') {
            return 'medium';
        }
        else
            return 'x-small';
    }
    render() {
        return (h(Host, { key: '18075d116fbfd2778ead391f6eabe73f4cc4ba9b' }, h("div", { key: 'e58dc939ed85f6c0bb8d36fc872a5cc56fc3bda7', class: Object.assign(Object.assign({ chip: true }, this.getStyleChip()), this.getDisabledChip()), onClick: (ev) => this.handleClick(ev), "data-test": this.dataTest }, !this.disabled && h("div", { key: 'b8c686322397598a1280c67f2754a48403334266', class: "chip_focus", onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }), !this.isSelected && !this.disabled && h("div", { key: '1c475b5e7a51324f031c2c6953f5116fd2edca9c', class: "chip_darker" }), this.icon && !this.isSelected && (h("div", { key: '954ca24707820e1780f9cd78bdd1c79a1645b921', class: "chip--icon" }, h("bds-icon", { key: '1fe6e7a56d1cdf2e94bef4ef8c845c364de6d77d', size: this.getSizeIconChip(), name: this.icon }))), this.isSelected && (h("div", { key: '83da6efe0dd55781a4a94c47974be22d313a94a0', class: "chip_selected--icon" }, h("bds-icon", { key: '5b8de80b511814c2315654c9dd0a69cdaa7b8ba1', size: this.getSizeIconChip(), name: "checkball" }))), h("div", { key: 'b1f1d265c4bcf4bbd05dc35bbd8aeca99c2bdeb4', class: this.isSelected ? `chip_selected--container-text--half` : `chip_selected--container-text--full` }, h("bds-typo", { key: '6245650ace38bb0ef3115c61e84fb1ccf75396e3', class: Object.assign({ 'chip--text': true }, this.getStyleText()), variant: "fs-12", "no-wrap": true, bold: "bold" }, h("slot", { key: 'd9c7d48ada626b245e5b9eefe1cc029649eb56bf' }))))));
    }
    static get is() { return "bds-chip-selected"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chip-selected.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chip-selected.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
                "type": "string",
                "attribute": "icon",
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
                    "text": "used for add icon in left container. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "ColorChipSelected",
                    "resolved": "\"danger\" | \"default\" | \"info\" | \"outline\" | \"success\" | \"warning\"",
                    "references": {
                        "ColorChipSelected": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/chip-selected/chip-selected.tsx",
                            "id": "src/components/chip-selected/chip-selected.tsx::ColorChipSelected"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "used for change the color. Uses one of them."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "Size",
                    "resolved": "\"standard\" | \"tall\"",
                    "references": {
                        "Size": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/chip-selected/chip-selected.tsx",
                            "id": "src/components/chip-selected/chip-selected.tsx::Size"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "used for change the chip size. Use one of them;"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'standard'"
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
                    "text": "used for set the initial setup for true;"
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
                    "text": "When 'true', no events will be dispatched"
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
            "isSelected": {}
        };
    }
    static get events() {
        return [{
                "method": "chipClick",
                "name": "chipClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ selected: boolean }",
                    "resolved": "{ selected: boolean; }",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=chip-selected.js.map
