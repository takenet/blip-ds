import { h } from "@stencil/core";
export class IconButton {
    constructor() {
        /**
         * 	If true, the base button will be disabled.
         */
        this.disabled = false;
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'tall', 'standard', 'short';
         */
        this.size = 'standard';
        /**
         * Variant. Entered as one of the variant. Can be one of:
         * 'primary', 'secondary', 'ghost', 'dashed';
         */
        this.variant = 'primary';
        /**
         * The theme of the icon. Can be one of:
         * 'outline', 'solid';
         */
        this.iconTheme = 'outline';
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.icon = null;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.mapSize = {
            tall: 'xxx-large',
            standard: 'x-large',
            short: 'medium',
        };
        this.mapVariantStyle = {
            primary: 'icon__button--primary',
            secondary: 'icon__button--secondary',
            tertiary: 'icon__button--tertiary',
            delete: 'icon__button--delete',
            ghost: 'icon__button--ghost',
            'secondary--white': 'icon__button--secondary-white',
        };
        this.handleClick = (ev) => {
            if (!this.disabled) {
                this.bdsClick.emit(ev);
            }
        };
    }
    render() {
        if (!this.icon)
            return null;
        const size = this.mapSize[this.size];
        const state = this.mapVariantStyle[this.variant];
        return (h("button", { onClick: (ev) => this.handleClick(ev), disabled: this.disabled, class: {
                ['icon__button']: true,
                [state]: true,
                [`${state}--disabled`]: this.disabled,
                [`size-${this.size}`]: true,
            }, "data-test": this.dataTest, tabindex: "0" }, h("bds-icon", { name: this.icon, size: size, theme: this.iconTheme, color: "inherit" })));
    }
    static get is() { return "bds-button-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["icon-button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["icon-button.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "If true, the base button will be disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "IconButtonSize",
                    "resolved": "\"short\" | \"standard\" | \"tall\"",
                    "references": {
                        "IconButtonSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/icon-button/icon-button.tsx",
                            "id": "src/components/icon-button/icon-button.tsx::IconButtonSize"
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
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "IconButtonVariant",
                    "resolved": "\"delete\" | \"ghost\" | \"primary\" | \"secondary\" | \"secondary--white\" | \"tertiary\"",
                    "references": {
                        "IconButtonVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/icon-button/icon-button.tsx",
                            "id": "src/components/icon-button/icon-button.tsx::IconButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Variant. Entered as one of the variant. Can be one of:\n'primary', 'secondary', 'ghost', 'dashed';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "iconTheme": {
                "type": "string",
                "attribute": "icon-theme",
                "mutable": false,
                "complexType": {
                    "original": "ButtonIconTheme",
                    "resolved": "\"outline\" | \"solid\"",
                    "references": {
                        "ButtonIconTheme": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/icon-button/icon-button.tsx",
                            "id": "src/components/icon-button/icon-button.tsx::ButtonIconTheme"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The theme of the icon. Can be one of:\n'outline', 'solid';"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'outline'"
            },
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
                    "text": "used for add icon in input left. Uses the bds-icon component."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "null"
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
                "method": "bdsClick",
                "name": "bdsClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event buttom onClick."
                },
                "complexType": {
                    "original": "PointerEvent",
                    "resolved": "PointerEvent",
                    "references": {
                        "PointerEvent": {
                            "location": "global",
                            "id": "global::PointerEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=icon-button.js.map
