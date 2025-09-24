import { h } from "@stencil/core";
export class Typo {
    constructor() {
        /**
         * Variant. Entered as one of the font size variant. Can be one of:
         * 'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';
         */
        this.variant = 'fs-16';
        /**
         * Line Height. Entered as one of the line hieght. Can be one of:
         * 'none', 'small', 'simple', 'plus', 'double'
         */
        this.lineHeight = null;
        /**
         * Bold. Entered as one of the bold. Can be one of:
         * 'regular', 'semi-bold', 'bold', 'extra-bold';
         */
        this.bold = null;
        /**
         * Added font style italic
         */
        this.italic = false;
        /**
         * Added style no wrap
         */
        this.noWrap = false;
        /**
         * Tranform text in paragraph
         */
        this.paragraph = false;
        /**
         * If true, adds default margin values
         */
        this.margin = true;
        /**
         * Define element tag, must be used for acessibilty
         */
        this.tag = 'p';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        const Element = this.tag;
        return (h(Element, { key: 'fc26ef24e6f4b1946d971efc3003fb6d549c3e67', class: {
                typo: true,
                [`typo__variant--${this.variant}`]: true,
                [`typo__margin--${this.variant}`]: this.margin,
                'typo--no-wrap': this.noWrap,
                'typo--paragraph': this.paragraph,
                'typo--italic': this.italic,
                [`typo__line-height--${this.lineHeight}`]: !!this.lineHeight,
                [`typo__bold--${this.bold}`]: !!this.bold,
            }, part: "bds-typo__text", "data-test": this.dataTest }, h("slot", { key: '4ab6c5e8ab4c9213961fd45d02fc9e1cd002a070' })));
    }
    static get is() { return "bds-typo"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["typo.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["typo.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "FontSize",
                    "resolved": "\"fs-10\" | \"fs-12\" | \"fs-14\" | \"fs-16\" | \"fs-20\" | \"fs-24\" | \"fs-32\" | \"fs-40\"",
                    "references": {
                        "FontSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/typo/typo.tsx",
                            "id": "src/components/typo/typo.tsx::FontSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Variant. Entered as one of the font size variant. Can be one of:\n'fs-10' ,'fs-12' ,'fs-14' ,'fs-16' ,'fs-20' ,'fs-24' ,'fs-32' ,'fs-40';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'fs-16'"
            },
            "lineHeight": {
                "type": "string",
                "attribute": "line-height",
                "mutable": false,
                "complexType": {
                    "original": "FontLineHeight",
                    "resolved": "\"double\" | \"none\" | \"plus\" | \"simple\" | \"small\"",
                    "references": {
                        "FontLineHeight": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/typo/typo.tsx",
                            "id": "src/components/typo/typo.tsx::FontLineHeight"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Line Height. Entered as one of the line hieght. Can be one of:\n'none', 'small', 'simple', 'plus', 'double'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "bold": {
                "type": "string",
                "attribute": "bold",
                "mutable": false,
                "complexType": {
                    "original": "Bold",
                    "resolved": "\"bold\" | \"extra-bold\" | \"regular\" | \"semi-bold\"",
                    "references": {
                        "Bold": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/typo/typo.tsx",
                            "id": "src/components/typo/typo.tsx::Bold"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Bold. Entered as one of the bold. Can be one of:\n'regular', 'semi-bold', 'bold', 'extra-bold';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "null"
            },
            "italic": {
                "type": "boolean",
                "attribute": "italic",
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
                    "text": "Added font style italic"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "noWrap": {
                "type": "boolean",
                "attribute": "no-wrap",
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
                    "text": "Added style no wrap"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "paragraph": {
                "type": "boolean",
                "attribute": "paragraph",
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
                    "text": "Tranform text in paragraph"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "margin": {
                "type": "boolean",
                "attribute": "margin",
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
                    "text": "If true, adds default margin values"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "tag": {
                "type": "string",
                "attribute": "tag",
                "mutable": false,
                "complexType": {
                    "original": "Tag",
                    "resolved": "\"h1\" | \"h2\" | \"h3\" | \"h4\" | \"p\" | \"span\"",
                    "references": {
                        "Tag": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/typo/typo.tsx",
                            "id": "src/components/typo/typo.tsx::Tag"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Define element tag, must be used for acessibilty"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'p'"
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
}
//# sourceMappingURL=typo.js.map
