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
        return (h("bds-paper", { key: '20667960987546a7d8236d670c3ad6339c52612f', class: "card", width: "240px", height: "140px", onClick: () => this.handleCopyVariable(this.variable) }, h("bds-grid", { key: '742418758c7dc72b53143fa15b29fc92348a980d', direction: "column", height: "100%" }, h("bds-grid", { key: '2dd61a98e38c0b2854801729d7b096a9d9d4602a', height: "70%", xxs: "12", class: {
                'card-color--color': true,
                [`card-color--${this.variable}`]: true,
            } }), h("bds-grid", { key: 'bb2c1d923fcf84f9fbdb2aad75641fb58455ca5e', "justify-content": "center", "align-items": "center", height: "30%" }, !this.showMessage ? (h("bds-typo", { class: "card-text", variant: "fs-14", bold: "bold" }, "$", this.variable)) : (h("bds-typo", { class: "card-text-copie", variant: "fs-14", bold: "bold" }, "Cor copiada!"))))));
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
