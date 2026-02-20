import { h, Host } from "@stencil/core";
export class BdsDivider {
    constructor() {
        /**
         * O tipo de estilo da linha: sólida, pontilhada, tracejada
         */
        this.styleType = 'solid';
        /**
         * Define se o divider deve ser exibido horizontalmente ou verticalmente
         */
        this.orientation = 'horizontal';
        /**
         * Cor da linha, aceitando qualquer valor válido em CSS (hex, rgb, nome da cor)
         */
        this.color = 'divider-1';
    }
    render() {
        const orientationClass = `${this.orientation} ${this.styleType} color-${this.color} `;
        return (h(Host, { key: '34533ddf1fc2e4ea30775031cd95b5515f52da73', class: orientationClass }, h("hr", { key: 'ff7e0b6d0c99c7b7accb99f4de1055c70b075ad6', class: `${this.orientation} ${this.styleType} color-${this.color}` })));
    }
    static get is() { return "bds-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["divider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["divider.css"]
        };
    }
    static get properties() {
        return {
            "styleType": {
                "type": "string",
                "attribute": "style-type",
                "mutable": false,
                "complexType": {
                    "original": "'solid' | 'dotted' | 'dashed'",
                    "resolved": "\"dashed\" | \"dotted\" | \"solid\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "O tipo de estilo da linha: s\u00F3lida, pontilhada, tracejada"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'solid'"
            },
            "orientation": {
                "type": "string",
                "attribute": "orientation",
                "mutable": false,
                "complexType": {
                    "original": "'horizontal' | 'vertical'",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Define se o divider deve ser exibido horizontalmente ou verticalmente"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'horizontal'"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'divider-1' | 'divider-2' | 'divider-3'",
                    "resolved": "\"divider-1\" | \"divider-2\" | \"divider-3\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Cor da linha, aceitando qualquer valor v\u00E1lido em CSS (hex, rgb, nome da cor)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'divider-1'"
            }
        };
    }
}
//# sourceMappingURL=divider.js.map
