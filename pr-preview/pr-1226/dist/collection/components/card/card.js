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
        return (h(Host, { key: '12fcfd7bd7ec040966e21dce15635a870d6f846d', style: styleHost }, h("bds-paper", { key: 'a2b60300cab9db26ffb6e2f7fa730ffa15c992ca', border: this.clickable ? false : true, elevation: this.elevation, class: {
                card: true,
                card_hover: this.clickable,
                card_hover_selectable: this.isHovered && this.selectable ? true : false,
                card_hover_pressed: this.isHovered && this.selectable ? true : false
            }, height: this.height, width: this.width, bgColor: this.bgColor, "data-test": this.dataTest, "border-color": this.borderColor ? this.borderColor : 'border-1' }, h("div", { key: 'c7456d814502182a1d4e4269828057af240e6214', tabindex: "0", class: "focus", onKeyDown: this.handleKeyDown.bind(this) }), h("bds-grid", { key: '8b609c311abfdca471c554e8bfbb4bb80cd4d414', xxs: "12", direction: "column", gap: "2", padding: "2" }, h("slot", { key: '312d6c2af967d4ed8e50aaf587cc3e17d9000b4c' })))));
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
                "attribute": "height",
                "defaultValue": "null"
            },
            "width": {
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
                    "text": "Prop for set the width of the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "'fit-content'"
            },
            "clickable": {
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
                    "text": "If the prop is true, the component will be clickable."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "clickable",
                "defaultValue": "false"
            },
            "bgColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "PaperBackground",
                    "resolved": "\"surface-0\" | \"surface-1\" | \"surface-2\" | \"surface-3\" | \"surface-4\"",
                    "references": {
                        "PaperBackground": {
                            "location": "import",
                            "path": "../paper/paper-interface",
                            "id": "src/components/paper/paper-interface.ts::PaperBackground",
                            "referenceLocation": "PaperBackground"
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
                "attribute": "bg-color",
                "defaultValue": "'surface-1'"
            },
            "selectable": {
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
                    "text": "Prop for set the background color."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "selectable",
                "defaultValue": "false"
            },
            "borderColor": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "BorderColor",
                    "resolved": "\"border-1\" | \"border-2\" | \"delete\" | \"error\" | \"negative\" | \"positive\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {
                        "BorderColor": {
                            "location": "import",
                            "path": "../paper/paper-interface",
                            "id": "src/components/paper/paper-interface.ts::BorderColor",
                            "referenceLocation": "BorderColor"
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
                "attribute": "border-color",
                "defaultValue": "null"
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
