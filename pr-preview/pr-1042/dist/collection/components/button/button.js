import { h, Host } from "@stencil/core";
export class Button {
    constructor() {
        this.group = false;
        /**
         * 	If true, the base button will be disabled.
         */
        this.block = false;
        /**
         * 	If true, the base button will be disabled.
         */
        this.disabled = false;
        this.color = 'primary';
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'tall', 'standard', 'short';
         */
        this.size = 'medium';
        /**
         * Variant. Entered as one of the variant. Can be one of:
         * 'primary', 'secondary', 'ghost', 'dashed';
         */
        this.variant = 'solid';
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.icon = null;
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.iconLeft = null;
        /**
         * used for add icon in input left. Uses the bds-icon component.
         */
        this.iconRight = null;
        /**
         * The arrow button
         */
        this.arrow = false;
        /**
         * The type of the button. Can be one of:
         * 'button', 'submit', 'reset';
         */
        this.type = 'button';
        /**
         * The theme of the icon. Can be one of:
         * 'outline', 'solid';
         */
        this.iconTheme = 'outline';
        /**
         * The type of the icon. Can be one of:
         * 'icon', 'logo', 'emoji';
         */
        this.typeIcon = 'icon';
        /**
         * 	If true, shows the loading spinner
         */
        this.bdsLoading = false;
        /**
         * 	If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'
         */
        this.bdsLoadingVariant = 'primary';
        /**
         * 	If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'
         */
        this.bdsLoadingColor = 'main';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    async isActive(value) {
        this.active = value;
    }
    async setPosition(position) {
        this.position = position;
        this.position ? (this.group = true) : false;
    }
    async setDirection(direction) {
        this.direction = direction;
    }
    async setSize(size) {
        this.size = size;
    }
    async setColor(color) {
        this.color = color;
    }
    async setVariant(variant) {
        this.variant = variant;
    }
    componentDidRender() {
        this.logSlotText();
        this.buttonLegacy();
    }
    buttonLegacy() {
        this.variant === 'facebook' ? this.setVariant('outline') : this.setVariant(this.variant);
        this.size === 'tall'
            ? this.setSize('large')
            : this.size === 'standard'
                ? this.setSize('medium')
                : this.setSize(this.size);
    }
    logSlotText() {
        const slot = this.el.shadowRoot.querySelector('slot');
        const onlyIconElement = this.el.shadowRoot.querySelector('button');
        if (slot) {
            const assignedNodes = slot.assignedNodes();
            let slotText = '';
            assignedNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    slotText += node.textContent;
                }
            });
            if (slotText === '' && this.size === 'medium') {
                onlyIconElement.classList.add('button__only-icon--medium');
            }
            if (slotText === '' && this.size === 'large') {
                onlyIconElement.classList.add('button__only-icon--large');
            }
            if (slotText === '' && this.size === 'short') {
                onlyIconElement.classList.add('button__only-icon--short');
            }
        }
    }
    renderLoadingSpinner() {
        if (this.variant === 'solid') {
            if (['primary', 'positive', 'negative'].includes(this.color)) {
                this.loadingColor = 'light';
            }
            else if (this.color === 'content') {
                this.loadingColor = 'content';
            }
        }
        else if (this.variant === 'outline' || this.variant === 'text') {
            this.loadingColor = this.color === 'positive' ? 'positive' : this.color === 'negative' ? 'negative' : 'main';
        }
        return h("bds-loading-spinner", { size: "extra-small", color: this.loadingColor });
    }
    handleClick(ev) {
        if (!this.disabled) {
            this.bdsClick.emit(ev);
            const form = this.el.closest('form');
            if (form) {
                ev.preventDefault();
                const fakeButton = document.createElement('button');
                fakeButton.type = this.type;
                fakeButton.style.display = 'none';
                form.appendChild(fakeButton);
                fakeButton.click();
                fakeButton.remove();
            }
        }
    }
    ;
    render() {
        return (h(Host, { key: 'ea0fdfbd7dea4953d27e0ab7441657d93c0d2e18', class: { host: true, block: this.block, group: this.group } }, h("div", { key: 'a6f9a0831fe820f1b8095ace8724d8b2a683f491', tabindex: "0", onKeyDown: (ev) => this.handleClick(ev), class: "focus" }), h("button", { key: '61e8483a9b7cc8479f07f64860bfef3aca573f7e', onClick: (ev) => this.handleClick(ev), disabled: this.disabled, tabindex: "-1", "aria-disabled": this.disabled ? 'true' : 'false', "aria-live": "assertive", type: this.type, class: {
                button: true,
                'button--block': this.block,
                'button--group': this.group,
                [`button__position--${this.direction}--${this.position}`]: true,
                'button--active': this.active,
                [`button__variant--${this.variant === 'delete' ? 'solid' : this.variant}`]: true,
                [`button__${this.variant === 'delete' ? 'solid' : this.variant}`]: true,
                [`button__color--${this.variant === 'delete' ? 'negative' : this.color}`]: true,
                [`button__variant--${this.variant}--disabled`]: this.disabled,
                [`button__size--${this.size}`]: true,
            }, part: "button", "data-test": this.dataTest }, this.bdsLoading ? this.renderLoadingSpinner() : '', this.iconLeft || this.icon ? (h("bds-icon", { class: { icon_buttom: true, hide: this.bdsLoading }, name: this.icon ? this.icon : this.iconLeft, theme: this.iconTheme, type: this.typeIcon, color: "inherit", size: 'medium' })) : (''), h("bds-typo", { key: 'd655c2da9dfca9081e13d8791a93c583e51a4b80', class: { typo_buttom: true, button__content: true, hide: this.bdsLoading }, variant: "fs-14", lineHeight: "simple", bold: "bold" }, h("slot", { key: '10e2d744dfa152d1c7ee8e227346dc93df83c208' })), this.iconRight || this.arrow ? (h("bds-icon", { class: { icon_buttom: true, hide: this.bdsLoading }, name: this.arrow ? 'arrow-right' : this.iconRight, color: "inherit", theme: this.iconTheme, type: this.typeIcon })) : (''))));
    }
    static get is() { return "bds-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["button.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["button.css"]
        };
    }
    static get properties() {
        return {
            "block": {
                "type": "boolean",
                "attribute": "block",
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
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": true,
                "complexType": {
                    "original": "ButtonSize",
                    "resolved": "\"large\" | \"medium\" | \"short\" | \"standard\" | \"tall\"",
                    "references": {
                        "ButtonSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/button/button.tsx",
                            "id": "src/components/button/button.tsx::ButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size. Entered as one of the size. Can be one of:\r\n'tall', 'standard', 'short';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'medium'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": true,
                "complexType": {
                    "original": "ButtonVariant",
                    "resolved": "\"dashed\" | \"delete\" | \"facebook\" | \"ghost\" | \"outline\" | \"primary\" | \"secondary\" | \"secondary--white\" | \"solid\" | \"tertiary\" | \"text\"",
                    "references": {
                        "ButtonVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/button/button.tsx",
                            "id": "src/components/button/button.tsx::ButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Variant. Entered as one of the variant. Can be one of:\r\n'primary', 'secondary', 'ghost', 'dashed';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'solid'"
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
            "iconLeft": {
                "type": "string",
                "attribute": "icon-left",
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
            "iconRight": {
                "type": "string",
                "attribute": "icon-right",
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
            "arrow": {
                "type": "boolean",
                "attribute": "arrow",
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
                    "text": "The arrow button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "ButtonType",
                    "resolved": "\"button\" | \"reset\" | \"submit\"",
                    "references": {
                        "ButtonType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/button/button.tsx",
                            "id": "src/components/button/button.tsx::ButtonType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the button. Can be one of:\r\n'button', 'submit', 'reset';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'button'"
            },
            "iconTheme": {
                "type": "string",
                "attribute": "icon-theme",
                "mutable": false,
                "complexType": {
                    "original": "IconTheme",
                    "resolved": "\"outline\" | \"solid\"",
                    "references": {
                        "IconTheme": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/button/button.tsx",
                            "id": "src/components/button/button.tsx::IconTheme"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The theme of the icon. Can be one of:\r\n'outline', 'solid';"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'outline'"
            },
            "typeIcon": {
                "type": "string",
                "attribute": "type-icon",
                "mutable": false,
                "complexType": {
                    "original": "IconType",
                    "resolved": "\"emoji\" | \"icon\" | \"logo\"",
                    "references": {
                        "IconType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/button/button.tsx",
                            "id": "src/components/button/button.tsx::IconType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The type of the icon. Can be one of:\r\n'icon', 'logo', 'emoji';"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "'icon'"
            },
            "bdsLoading": {
                "type": "boolean",
                "attribute": "bds-loading",
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
                    "text": "If true, shows the loading spinner"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "bdsLoadingVariant": {
                "type": "string",
                "attribute": "bds-loading-variant",
                "mutable": false,
                "complexType": {
                    "original": "LoadingSpinnerVariant",
                    "resolved": "\"delete\" | \"ghost\" | \"primary\" | \"secondary\" | \"tertiary\"",
                    "references": {
                        "LoadingSpinnerVariant": {
                            "location": "import",
                            "path": "../loading-spinner/loading-spinner",
                            "id": "src/components/loading-spinner/loading-spinner.tsx::LoadingSpinnerVariant"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "bdsLoadingColor": {
                "type": "string",
                "attribute": "bds-loading-color",
                "mutable": false,
                "complexType": {
                    "original": "colorsVariants",
                    "resolved": "\"content\" | \"light\" | \"main\" | \"negative\" | \"positive\"",
                    "references": {
                        "colorsVariants": {
                            "location": "import",
                            "path": "../loading-spinner/loading-spinner",
                            "id": "src/components/loading-spinner/loading-spinner.tsx::colorsVariants"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "If not empty, Sets the color of the spinner, can be 'primary','secondary' or 'ghost'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'main'"
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
            "slotText": {},
            "active": {},
            "position": {},
            "direction": {},
            "group": {},
            "loadingColor": {}
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
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "isActive": {
                "complexType": {
                    "signature": "(value: any) => Promise<void>",
                    "parameters": [{
                            "name": "value",
                            "type": "any",
                            "docs": ""
                        }],
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
            "setPosition": {
                "complexType": {
                    "signature": "(position: \"first\" | \"last\" | \"middle\") => Promise<void>",
                    "parameters": [{
                            "name": "position",
                            "type": "\"first\" | \"last\" | \"middle\"",
                            "docs": ""
                        }],
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
            "setDirection": {
                "complexType": {
                    "signature": "(direction: \"row\" | \"column\") => Promise<void>",
                    "parameters": [{
                            "name": "direction",
                            "type": "\"row\" | \"column\"",
                            "docs": ""
                        }],
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
            "setSize": {
                "complexType": {
                    "signature": "(size: ButtonSize) => Promise<void>",
                    "parameters": [{
                            "name": "size",
                            "type": "\"medium\" | \"large\" | \"standard\" | \"short\" | \"tall\"",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "ButtonSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/button/button.tsx",
                            "id": "src/components/button/button.tsx::ButtonSize"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            },
            "setColor": {
                "complexType": {
                    "signature": "(color: \"primary\" | \"content\" | \"negative\" | \"positive\") => Promise<void>",
                    "parameters": [{
                            "name": "color",
                            "type": "\"content\" | \"positive\" | \"negative\" | \"primary\"",
                            "docs": ""
                        }],
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
            "setVariant": {
                "complexType": {
                    "signature": "(variant: ButtonVariant) => Promise<void>",
                    "parameters": [{
                            "name": "variant",
                            "type": "\"delete\" | \"outline\" | \"solid\" | \"text\" | \"secondary\" | \"primary\" | \"tertiary\" | \"ghost\" | \"secondary--white\" | \"dashed\" | \"facebook\"",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "ButtonVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/button/button.tsx",
                            "id": "src/components/button/button.tsx::ButtonVariant"
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "bdsLoading",
                "methodName": "renderLoadingSpinner"
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleClick",
                "target": undefined,
                "capture": true,
                "passive": false
            }];
    }
}
//# sourceMappingURL=button.js.map
