import { Host, h } from "@stencil/core";
export class Card {
    constructor() {
        /**
         * Prop for set the height of the component.
         */
        this.height = null;
        /**
         * Prop for set the width of the component.
         */
        this.width = 'fit-content';
        /**
         * If the prop is true, the component will be clickable.
         */
        this.clickable = false;
        /**
         * Prop for set the background color.
         */
        this.bgColor = 'surface-1';
        /**
         * Prop for set the background color.
         */
        this.selectable = false;
        /**
         * Prop for set the border color.
         */
        this.borderColor = null;
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this.isHovered = false;
        this.isPressed = false;
        this.elevation = 'primary';
    }
    componentDidLoad() {
        this.cardElement = this.element.shadowRoot.querySelector('.card');
        if (this.cardElement && (this.clickable === true || this.selectable === true)) {
            this.cardElement.addEventListener('mouseenter', () => {
                this.isHovered = true;
            });
            this.cardElement.addEventListener('mouseleave', () => {
                this.isHovered = false;
            });
            this.cardElement.addEventListener('mousedown', (event) => {
                this.isPressed = true;
                this.bdsClick.emit(event);
            });
            document.addEventListener('mouseup', () => {
                this.isPressed = false;
            });
            this.cardElement.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    this.isPressed = true;
                    this.bdsClick.emit(event);
                }
            });
            this.cardElement.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    this.isPressed = false;
                }
            });
        }
    }
    componentDidUpdate() {
        if (this.isPressed) {
            this.elevation = 'static';
        }
        else if (this.isHovered) {
            this.elevation = 'secondary';
        }
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.isPressed = true;
            this.bdsClick.emit(event);
        }
    }
    render() {
        const styleHost = {
            width: this.width,
        };
        return (h(Host, { key: '4039d17cd946c4ba7c0ded983fa3b6f275a14325', style: styleHost }, h("bds-paper", { key: '5a4ef1ca04489c83e7329157c449171efb0106b2', border: this.clickable ? false : true, elevation: this.elevation, class: {
                card: true,
                card_hover: this.clickable,
                card_hover_selectable: this.isHovered && this.selectable ? true : false,
                card_hover_pressed: this.isHovered && this.selectable ? true : false
            }, height: this.height, width: this.width, bgColor: this.bgColor, "data-test": this.dataTest, "border-color": this.borderColor ? this.borderColor : 'border-1' }, h("div", { key: '0c19693051c5bec25e7a72f2cfcc05f10e20776e', tabindex: "0", class: "focus", onKeyDown: this.handleKeyDown.bind(this) }), h("bds-grid", { key: 'b00a88658dd97910541df9f213a3d212a8c6dad4', xxs: "12", direction: "column", gap: "2", padding: "2" }, h("slot", { key: 'cf48b448ab2034969524a61ea5d806a7f71bda36' })))));
    }
    static get is() { return "bds-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card.css"]
        };
    }
    static get properties() {
        return {
            "height": {
                "type": "string",
                "attribute": "height",
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
                    "text": "Prop for set the height of the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "width": {
                "type": "string",
                "attribute": "width",
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
                    "text": "Prop for set the width of the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'fit-content'"
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
                    "text": "If the prop is true, the component will be clickable."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "bgColor": {
                "type": "string",
                "attribute": "bg-color",
                "mutable": false,
                "complexType": {
                    "original": "PaperBackground",
                    "resolved": "\"surface-0\" | \"surface-1\" | \"surface-2\" | \"surface-3\" | \"surface-4\"",
                    "references": {
                        "PaperBackground": {
                            "location": "import",
                            "path": "../paper/paper-interface",
                            "id": "src/components/paper/paper-interface.ts::PaperBackground"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prop for set the background color."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'surface-1'"
            },
            "selectable": {
                "type": "boolean",
                "attribute": "selectable",
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
                    "text": "Prop for set the background color."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "borderColor": {
                "type": "string",
                "attribute": "border-color",
                "mutable": true,
                "complexType": {
                    "original": "BorderColor",
                    "resolved": "\"border-1\" | \"border-2\" | \"delete\" | \"error\" | \"negative\" | \"positive\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {
                        "BorderColor": {
                            "location": "import",
                            "path": "../paper/paper-interface",
                            "id": "src/components/paper/paper-interface.ts::BorderColor"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Prop for set the border color."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
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
    static get states() {
        return {
            "isHovered": {},
            "isPressed": {},
            "elevation": {}
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
                    "text": "This event will be dispatch when click on the component."
                },
                "complexType": {
                    "original": "PointerEvent | KeyboardEvent",
                    "resolved": "KeyboardEvent | PointerEvent",
                    "references": {
                        "PointerEvent": {
                            "location": "global",
                            "id": "global::PointerEvent"
                        },
                        "KeyboardEvent": {
                            "location": "global",
                            "id": "global::KeyboardEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=card.js.map
