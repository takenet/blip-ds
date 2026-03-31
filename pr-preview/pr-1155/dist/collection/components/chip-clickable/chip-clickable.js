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
        return (h(Host, { key: '81b8b0eabe8b60422dd6c37db95ff24efd0cce9e' }, h("div", { key: '0c5ea22d5ac037ec92bb1425de62d89e33b3af23', class: {
                chip_clickable: true,
                [`chip_clickable--${this.color}`]: true && !this.disabled,
                [`chip_clickable--${this.size}`]: true,
                'chip_clickable--hide': !this.visible,
                'chip_clickable--click': this.clickable,
                'chip_clickable--disabled': this.disabled,
            }, onClick: this.handleClick.bind(this), "data-test": this.dataTest }, this.clickable && !this.disabled && (h("div", { key: 'd64148a7990a7122cb83600eeeb0eabe98798597', class: "chip_focus", onKeyDown: this.handleClickKey.bind(this), tabindex: "0" })), this.clickable && !this.disabled && h("div", { key: 'f6c388e3b8cd375e90289fe1fd628f292a42999b', class: "chip_darker" }), this.icon && !this.avatar && (h("div", { key: '89720d37fb9d2bac99b11267ec0f458a2fe74ea6', class: "chip_clickable--icon" }, h("bds-icon", { key: '9ba8e5137ae728faca79e103069499aff6286640', size: this.getSizeIconChip(), name: this.icon }))), this.avatar && (h("div", { key: '24c88bd4c3ece279eddd8135591ab7c997aded43', class: "chip_clickable--avatar" }, h("bds-avatar", { key: '208b5f035f751f13cc4729587e7fc1b5b4fcc82c', size: this.getSizeAvatarChip(), thumbnail: this.avatar }))), h("div", { key: 'ded99799cc37face13162b83114f197b0cdfe9df', class: this.close && (this.icon || this.avatar)
                ? `chip_clickable--container-text--min`
                : !this.close && !this.icon && !this.avatar
                    ? `chip_clickable--container-text--full`
                    : `chip_clickable--container-text--half` }, h("bds-typo", { key: '905058defcc0423413fd0d1319323baf8339820f', "no-wrap": "true", class: "chip_clickable--text", variant: "fs-12", bold: "bold" }, h("slot", { key: '121970910a177829ddf0d67d5198bdc0d4911384' }))), this.close && (h("div", { key: '603693e1efa1e6f8a6ac152c217c5748515d7566', class: "chip_clickable--close", "data-test": this.dtButtonClose, onClick: this.handleCloseChip.bind(this) }, !this.disabled && (h("div", { key: 'f6b41aae039740f488c8b9f91eada9441d3e0d5c', class: "close_focus", onKeyDown: this.handleCloseKey.bind(this), tabindex: "0" })), h("bds-icon", { key: '5823d24b3ee1939dcb8d0638f74eea7be517674c', size: "x-small", theme: "solid", name: "error" }))))));
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
                    "original": "{ id: string }",
                    "resolved": "{ id: string; }",
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
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=chip-clickable.js.map
