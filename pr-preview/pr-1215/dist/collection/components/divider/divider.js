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
        return (h(Host, { key: 'ee259e66535e0ec9dc8022d69e96a30f7be287e6', class: orientationClass }, h("hr", { key: '5b3ddc5ca3af376349f0611b0c720d62b4eb1761', class: `${this.orientation} ${this.styleType} color-${this.color}` })));
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
                "attribute": "style-type",
                "defaultValue": "'solid'"
            },
            "orientation": {
                "type": "string",
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
                "attribute": "orientation",
                "defaultValue": "'horizontal'"
            },
            "color": {
                "type": "string",
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
                "attribute": "color",
                "defaultValue": "'divider-1'"
            }
        };
    }
}
