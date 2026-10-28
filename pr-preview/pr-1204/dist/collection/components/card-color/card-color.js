import { h } from "@stencil/core";
export class CardColor {
    constructor() {
        this.showMessage = false;
        /**
         * Specifies if the hex is a linear gradient
         */
        this.gradient = false;
        /**
         * If true, the text will be white
         */
        this.lightText = false;
        this.handleCopyVariable = (variable) => {
            const value = `$${variable}`;
            navigator.clipboard.writeText(value);
            this.showMessage = true;
            // Ocultar a mensagem após 3 segundos
            setTimeout(() => {
                this.showMessage = false;
            }, 3000);
        };
    }
    render() {
        return (h("bds-paper", { key: 'c465738e382406fad8c5cfa23e7d8b4cf67bd376', class: "card", width: "240px", height: "140px", onClick: () => this.handleCopyVariable(this.variable) }, h("bds-grid", { key: 'eb9cff6b3dfd6f58f15c0fd6d7c82c1b8bee3599', direction: "column", height: "100%" }, h("bds-grid", { key: '56d2902192e36647f8a794f159d22168b73d1291', height: "70%", xxs: "12", class: {
                'card-color--color': true,
                [`card-color--${this.variable}`]: true,
            } }), h("bds-grid", { key: '01486239eaa68c540b30a14dcf7c871e12251b62', "justify-content": "center", "align-items": "center", height: "30%" }, !this.showMessage ? (h("bds-typo", { class: "card-text", variant: "fs-14", bold: "bold" }, "$", this.variable)) : (h("bds-typo", { class: "card-text-copie", variant: "fs-14", bold: "bold" }, "Cor copiada!"))))));
    }
    static get is() { return "bds-card-color"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-color.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-color.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies name color, use Figma docs in Blip DS."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name"
            },
            "hex": {
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
                    "text": "Specifies HEX color, use Figma docs in Blip DS."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hex"
            },
            "gradient": {
                "type": "boolean",
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
                    "text": "Specifies if the hex is a linear gradient"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "gradient",
                "defaultValue": "false"
            },
            "variable": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies variabel sass color, _variables.scss."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "variable"
            },
            "lightText": {
                "type": "boolean",
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
                    "text": "If true, the text will be white"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "light-text",
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "showMessage": {}
        };
    }
}
