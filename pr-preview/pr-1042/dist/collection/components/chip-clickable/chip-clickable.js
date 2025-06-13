import { Host, h } from "@stencil/core";
export class ChipClickable {
    constructor() {
        this.visible = true;
        /**
         * used for change the color. Uses one of them.
         */
        this.color = 'default';
        /**
         * used for change the size chip. Uses one of them.
         */
        this.size = 'standard';
        /**
         * it makes the chip clickable.
         */
        this.clickable = false;
        /**
         * used for delete the chip.
         */
        this.close = false;
        /**
         * the chip gone stay disabled while this prop be true.
         */
        this.disabled = false;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Data test is the prop to specifically test the component action object.
         * dtButtonClose is the data-test to button close.
         */
        this.dtButtonClose = null;
    }
    handleClickKey(event) {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            event.preventDefault();
            this.chipClickableClick.emit();
        }
    }
    handleClick(event) {
        if (!this.disabled) {
            event.preventDefault();
            this.chipClickableClick.emit();
        }
    }
    handleCloseChip(event) {
        event.preventDefault();
        this.chipClickableClose.emit({ id: this.element.id });
    }
    handleCloseKey(event) {
        if ((event.key === 'Enter' || event.key === ' ') && !this.disabled) {
            event.preventDefault();
            this.chipClickableClose.emit({ id: this.element.id });
        }
    }
    getSizeAvatarChip() {
        if (this.size === 'tall') {
            return 'extra-small';
        }
        else
            return 'micro';
    }
    getSizeIconChip() {
        if (this.size === 'tall') {
            return 'medium';
        }
        else
            return 'x-small';
    }
    render() {
        return (h(Host, { key: 'a484e58dc90b62b8ad74a11705d0efd8382185e3' }, h("div", { key: '3d0a2c590ffe9ae89941c5bd2e73e2b407b1add3', class: {
                chip_clickable: true,
                [`chip_clickable--${this.color}`]: true && !this.disabled,
                [`chip_clickable--${this.size}`]: true,
                'chip_clickable--hide': !this.visible,
                'chip_clickable--click': this.clickable,
                'chip_clickable--disabled': this.disabled,
            }, onClick: this.handleClick.bind(this), "data-test": this.dataTest }, this.clickable && !this.disabled && (h("div", { key: '6c6e89984c427d3e20aaca4d0339992818e0e4dd', class: "chip_focus", onKeyDown: this.handleClickKey.bind(this), tabindex: "0" })), this.clickable && !this.disabled && h("div", { key: '002103387277cde8a86afce59ae22a6eabd55bf6', class: "chip_darker" }), this.icon && !this.avatar && (h("div", { key: '3d407de38a7e442356d24a954e7a041bf5d3518a', class: "chip_clickable--icon" }, h("bds-icon", { key: 'decf9fe0ab44c101f366070fb71347d83b62f6ec', size: this.getSizeIconChip(), name: this.icon }))), this.avatar && (h("div", { key: '38ead54424b4435cd6da1c0794a3b1987179f692', class: "chip_clickable--avatar" }, h("bds-avatar", { key: 'daca44da604029e5e93078f062efa9419e637552', size: this.getSizeAvatarChip(), thumbnail: this.avatar }))), h("div", { key: '2c22c9824b2adc7f54049dc5149f0a700306498b', class: this.close && (this.icon || this.avatar)
                ? `chip_clickable--container-text--min`
                : !this.close && !this.icon && !this.avatar
                    ? `chip_clickable--container-text--full`
                    : `chip_clickable--container-text--half` }, h("bds-typo", { key: '6beed0256b3985cb870d1545af3c634755fd3f8b', "no-wrap": "true", class: "chip_clickable--text", variant: "fs-12", bold: "bold" }, h("slot", { key: '0138704cd285cf018738f81cb0f4aadaf0ce2f50' }))), this.close && (h("div", { key: '0343f5ce17252337c094a668faa79a743c1da788', class: "chip_clickable--close", "data-test": this.dtButtonClose, onClick: this.handleCloseChip.bind(this) }, !this.disabled && (h("div", { key: '8825c413ad7a45f563a938aa786e227d4e94da13', class: "close_focus", onKeyDown: this.handleCloseKey.bind(this), tabindex: "0" })), h("bds-icon", { key: '764137a65a22077d31b6e9d3da826c2e88a1483b', size: "x-small", theme: "solid", name: "error" }))))));
    }
    static get is() { return "bds-chip-clickable"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chip-clickable.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chip-clickable.css"]
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
            "avatar": {
                "type": "string",
                "attribute": "avatar",
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
                    "text": "used for add avatar left container. Uses the bds-avatar component."
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
                    "original": "ColorChipClickable",
                    "resolved": "\"danger\" | \"default\" | \"info\" | \"outline\" | \"success\" | \"warning\"",
                    "references": {
                        "ColorChipClickable": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/chip-clickable/chip-clickable.tsx",
                            "id": "src/components/chip-clickable/chip-clickable.tsx::ColorChipClickable"
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
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/chip-clickable/chip-clickable.tsx",
                            "id": "src/components/chip-clickable/chip-clickable.tsx::Size"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "used for change the size chip. Uses one of them."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'standard'"
            },
            "clickable": {
                "type": "boolean",
                "attribute": "clickable",
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
                    "text": "it makes the chip clickable."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "close": {
                "type": "boolean",
                "attribute": "close",
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
                    "text": "used for delete the chip."
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
                    "text": "the chip gone stay disabled while this prop be true."
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
            },
            "dtButtonClose": {
                "type": "string",
                "attribute": "dt-button-close",
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
                    "text": "Data test is the prop to specifically test the component action object.\ndtButtonClose is the data-test to button close."
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
            "visible": {}
        };
    }
    static get events() {
        return [{
                "method": "chipClickableClose",
                "name": "chipClickableClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered after a mouse click on close icon, return id element. Only fired when close is true."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "chipClickableClick",
                "name": "chipClickableClick",
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
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=chip-clickable.js.map
