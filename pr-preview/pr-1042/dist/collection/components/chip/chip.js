import { Host, h } from "@stencil/core";
export class Chip {
    constructor() {
        /**
         * Chip size. Entered as one of the size design tokens. Can be one of:
         * "standard" and "tall"
         */
        this.size = 'standard';
        /**
         * Variant. Entered as one of the variant. Can be one of:
         * 'primary', 'default';
         */
        this.variant = 'default';
        /**
         * Add state danger on chip, use for use feedback.
         */
        this.danger = false;
        /**
         * Add state filter on chip whith specific color.
         */
        this.filter = false;
        /**
         * When 'true' and the component is using the primary variant, a hover is added
         */
        this.clickable = false;
        /**
         * When 'true', the component recive remove button and dispach event onBdsDelete
         */
        this.deletable = false;
        /**
         * When 'true', no events will be dispatched
         */
        this.disabled = false;
    }
    handleClickDelete(event) {
        if (!this.deletable || this.disabled)
            return;
        event.preventDefault();
        this.bdsDelete.emit({ id: this.element.id });
    }
    getClickClass() {
        return this.clickable ? { 'chip--click': true } : {};
    }
    getSizeClass() {
        return this.size === 'standard' ? { 'chip--standard': true } : { 'chip--tall': true };
    }
    getStateClass() {
        if (this.disabled) {
            return { 'chip--default': true };
        }
        if (this.danger) {
            return { 'chip--danger': true };
        }
        if (this.filter) {
            return { 'chip--filter': true };
        }
        if (this.variant === 'primary') {
            return { 'chip--primary': true };
        }
        if (this.variant === 'watermelon') {
            return { 'chip--watermelon': true };
        }
        return { 'chip--default': true };
    }
    render() {
        return (h(Host, { key: 'd831b25dab1957b462d16c052ebd9d67ba795839', class: Object.assign(Object.assign(Object.assign({ chip: true }, this.getClickClass()), this.getStateClass()), this.getSizeClass()) }, this.icon && (h("div", { key: 'fef08391ae455996360d9f5e7d723b3b89353e84', class: "chip__icon" }, h("bds-icon", { key: '3f003aa3b8611fffb5e836c178c797d92bc40520', size: "x-small", name: this.icon }))), h("slot", { key: 'decd45998ea5247618739698e01bc38237c9c2dd' }), this.deletable && (h("div", { key: 'c351986efc842e885502b0b608ca3bcfd2aadee1', class: "chip__delete", onClick: this.handleClickDelete.bind(this) }, h("bds-icon", { key: 'cd0d62c912efe8260eb620ddd2bf4024619f1206', size: "x-small", theme: "solid", name: "error" })))));
    }
    static get is() { return "bds-chip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chip.css"]
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
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ChipSize",
                    "resolved": "\"standard\" | \"tall\"",
                    "references": {
                        "ChipSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/chip/chip.tsx",
                            "id": "src/components/chip/chip.tsx::ChipSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Chip size. Entered as one of the size design tokens. Can be one of:\n\"standard\" and \"tall\""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'standard'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "ChipVariant",
                    "resolved": "\"default\" | \"primary\" | \"watermelon\"",
                    "references": {
                        "ChipVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/chip/chip.tsx",
                            "id": "src/components/chip/chip.tsx::ChipVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Variant. Entered as one of the variant. Can be one of:\n'primary', 'default';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "danger": {
                "type": "boolean",
                "attribute": "danger",
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
                    "text": "Add state danger on chip, use for use feedback."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "filter": {
                "type": "boolean",
                "attribute": "filter",
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
                    "text": "Add state filter on chip whith specific color."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When 'true' and the component is using the primary variant, a hover is added"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "deletable": {
                "type": "boolean",
                "attribute": "deletable",
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
                    "text": "When 'true', the component recive remove button and dispach event onBdsDelete"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When 'true', no events will be dispatched"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "bdsDelete",
                "name": "bdsDelete",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Triggered after a mouse click on delete icon, return id element. Only fired when deletable is true."
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
//# sourceMappingURL=chip.js.map
