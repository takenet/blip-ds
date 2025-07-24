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
        return (h(Host, { key: '91d33c460176f9b163760db431bb6e40f2315a0d' }, h("div", { key: 'fa32872ea7e2d99db15ed3f3915320730eb259f2', class: Object.assign(Object.assign({ chip: true }, this.getStyleChip()), this.getDisabledChip()), onClick: (ev) => this.handleClick(ev), "data-test": this.dataTest }, !this.disabled && h("div", { key: 'afac917fb643afe0f74dbf0d4a342a8abf1bf51a', class: "chip_focus", onKeyDown: this.handleKeyDown.bind(this), tabindex: "0" }), !this.isSelected && !this.disabled && h("div", { key: '1ff4dc3b67a4122420d8beb1108d975216f59e66', class: "chip_darker" }), this.icon && !this.isSelected && (h("div", { key: '16d5a1055d1f140ebe8a41715373e5a938be1843', class: "chip--icon" }, h("bds-icon", { key: '756221618403928021c4e6a6a503f6bf7972da73', size: this.getSizeIconChip(), name: this.icon }))), this.isSelected && (h("div", { key: 'e9d7eb49b3a7ff338d98bf42ed72ad11ba8f5b3a', class: "chip_selected--icon" }, h("bds-icon", { key: '0e0175d66d0d1a3e13459ecdc77b6db992e347e7', size: this.getSizeIconChip(), name: "checkball" }))), h("div", { key: '4cba6caffec90399696995c61bd169de5c0fad8d', class: this.isSelected ? `chip_selected--container-text--half` : `chip_selected--container-text--full` }, h("bds-typo", { key: 'f60732ceba2a6ebacf856f7120e4ea7e7b1f693a', class: Object.assign({ 'chip--text': true }, this.getStyleText()), variant: "fs-12", "no-wrap": true, bold: "bold" }, h("slot", { key: '7eb8412b2ea1ec66d430eb8313dd66e58b8d1477' }))))));
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
