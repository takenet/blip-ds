import { Host, h } from "@stencil/core";
export class Paper {
    constructor() {
        this.hasBorder = true;
        /**
         * Size. Entered as one of the size. Can be one of:
         * 'static', 'primary', 'secondary';
         */
        this.elevation = 'static';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**
         * Prop for set the border of the component.
         */
        this.border = false;
        /**
         * Prop for set the height of the component.
         */
        this.height = null;
        /**
         * Prop for set the width of the component.
         */
        this.width = null;
        /**
         * Prop for set the background color.
         */
        this.bgColor = 'surface-1';
        /**
         * Prop for set the border color.
         */
        this.borderColor = null;
    }
    componentWillLoad() {
        this.border === true ? (this.hasBorder = false) : (this.hasBorder = true);
    }
    render() {
        return (h(Host, { key: '6931d4e185dad775f53442bb97f88c7fb673fcd6', class: {
                [`paper__elevation--${this.elevation}`]: this.hasBorder,
                border: this.border,
                [`bg-${this.bgColor}`]: true,
                [`border-${this.borderColor}`]: true,
            }, style: { height: `${this.height}`, width: `${this.width}` } }, h("div", { key: 'b1fae5f6cd490fce614cadaff8d2da3d683e25b6', class: "paper__display", "data-test": this.dataTest }, h("slot", { key: '797aa7750ff2f0c07ece7461c7d43ba6bc1a71ad' }))));
    }
    static get is() { return "bds-paper"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["paper.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["paper.css"]
        };
    }
    static get properties() {
        return {
            "elevation": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "PaperElevation",
                    "resolved": "\"none\" | \"primary\" | \"secondary\" | \"static\"",
                    "references": {
                        "PaperElevation": {
                            "location": "import",
                            "path": "./paper-interface",
                            "id": "src/components/paper/paper-interface.ts::PaperElevation",
                            "referenceLocation": "PaperElevation"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size. Entered as one of the size. Can be one of:\n'static', 'primary', 'secondary';"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "elevation",
                "defaultValue": "'static'"
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
            },
            "border": {
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
                    "text": "Prop for set the border of the component."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "border",
                "defaultValue": "false"
            },
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
                "defaultValue": "null"
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
                            "path": "./paper-interface",
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
            "borderColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "BorderColor",
                    "resolved": "\"border-1\" | \"border-2\" | \"delete\" | \"error\" | \"negative\" | \"positive\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {
                        "BorderColor": {
                            "location": "import",
                            "path": "./paper-interface",
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
            }
        };
    }
    static get states() {
        return {
            "hasBorder": {},
            "constElevation": {}
        };
    }
}
