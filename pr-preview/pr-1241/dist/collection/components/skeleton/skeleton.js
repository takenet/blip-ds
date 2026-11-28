import { h, Host } from "@stencil/core";
/**
 * @deprecated Use uai-skeleton with UaiThemeProvider for tokenized styling.
 */
export class Skeleton {
    constructor() {
        this.shape = 'square';
        this.height = '50px';
        this.width = '100%';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        return (h(Host, { key: '187e4b047bc7fc3bc2f6a8f96af40b37f41d23fa', style: {
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                width: this.width,
                height: this.height,
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
            } }, h("bds-grid", { key: '8615f70a2b8cec72ac9dfb610a65813586a09e0a', xxs: "12", class: { skeleton: true, [`skeleton_shape--${this.shape}`]: true } }), h("div", { key: '5077ffb487767e836436720e866f5af5bc6f4b93', style: {
                display: 'flex',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: this.shape === 'circle' ? '50%' : '8px',
                overflow: 'hidden',
            }, "data-test": this.dataTest }, h("div", { key: 'aa8c77615412a9e6a8ef12b3fee56dd5b440f9da', class: "animation" }))));
    }
    static get is() { return "bds-skeleton"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["skeleton.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["skeleton.css"]
        };
    }
    static get properties() {
        return {
            "shape": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Shape",
                    "resolved": "\"circle\" | \"square\"",
                    "references": {
                        "Shape": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/skeleton/skeleton.tsx",
                            "id": "src/components/skeleton/skeleton.tsx::Shape"
                        }
                    }
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
                "attribute": "shape",
                "defaultValue": "'square'"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "'50px'"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "'100%'"
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
}
