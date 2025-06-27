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
        return (h(Host, { key: '1e33ada55a3b814269ecb01d90e89ea3984b0414' }, h("div", { key: 'eeff52441ea7b0e67d60d0a02b5fd54c9cd712d6', class: Object.assign(Object.assign({ chip: true }, this.getStyleChip()), this.getDisabledChip()), onClick: (ev) => this.handleClick(ev), "data-test": this.dataTest }, !this.disabled && h("div", { key: '94ccd6403ec0f45d918e6a61dd4ba5b2eff5683f', class: "chip_focus", onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }), !this.isSelected && !this.disabled && h("div", { key: '37a273a6697e37b515ed9429fe71c790263b140b', class: "chip_darker" }), this.icon && !this.isSelected && (h("div", { key: '33e618cffbdd77803a61b13e19913a97500e62d4', class: "chip--icon" }, h("bds-icon", { key: '59e951a21725aa97dea64d61c7465863aa2c3b77', size: this.getSizeIconChip(), name: this.icon }))), this.isSelected && (h("div", { key: '868d5fb08cfe8b9ef0e792ff97004624cf052d65', class: "chip_selected--icon" }, h("bds-icon", { key: '8dff7167e05826fac0008c4762ed3506cb12c3c4', size: this.getSizeIconChip(), name: "checkball" }))), h("div", { key: '5852b5f684f7672966a411fe66cda045e10c61ad', class: this.isSelected ? `chip_selected--container-text--half` : `chip_selected--container-text--full` }, h("bds-typo", { key: '642855e4fb67d2a1dd10494b77b4c8f8b4c5cd7f', class: Object.assign({ 'chip--text': true }, this.getStyleText()), variant: "fs-12", "no-wrap": true, bold: "bold" }, h("slot", { key: 'b2bf55c0efee784937d1170aadc73f97a7fbfdd4' }))))));
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
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=chip-selected.js.map
