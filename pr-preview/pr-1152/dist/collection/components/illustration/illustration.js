import { h, Host } from "@stencil/core";
import packageJson from "../../../package.json";
export class BdsIllustration {
    constructor() {
        /**
         * Specifies the type to use. Can be: 'default'.
         */
        this.type = 'default';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**Function to map the svg and call the "formatSvg" function */
        this.setIllustrationContent = () => {
            const tokensVersion = packageJson.dependencies['blip-tokens'].replace('^', '');
            const apiUrl = `https://cdn.jsdelivr.net/npm/blip-tokens@${tokensVersion}/build/json/illustrations/${this.type}/${this.name}.json`;
            fetch(apiUrl).then((response) => response.json().then((data) => {
                this.IllustrationContent = data[`asset-${this.type}-${this.name}-svg`];
            }));
        };
    }
    componentWillLoad() {
        this.setIllustrationContent();
    }
    render() {
        return (h(Host, { key: '068f8c950e40c190bc704ef26afba5a5a5ca0043', role: "img", class: {
                'bds-illustration': true,
            } }, this.IllustrationContent ? (h("img", { draggable: false, src: `data:image/svg+xml;base64,${this.IllustrationContent}`, alt: this.alt, "data-test": this.dataTest })) : (h("div", { class: "default", "data-test": this.dataTest }))));
    }
    static get is() { return "bds-illustration"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["illustration.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["illustration.css"]
        };
    }
    static get assetsDirs() { return ["svg"]; }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "IllustrationType",
                    "resolved": "\"blip-outline\" | \"blip-solid\" | \"brand\" | \"default\" | \"empty-states\" | \"logo-integration\" | \"screens\" | \"segmented\" | \"smartphone\" | \"spots\"",
                    "references": {
                        "IllustrationType": {
                            "location": "import",
                            "path": "./illustration-interface",
                            "id": "src/components/illustration/illustration-interface.ts::IllustrationType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the type to use. Can be: 'default'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'default'"
            },
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Specifies the name of illustration. Verify the names on illustration tokens."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "alt": {
                "type": "string",
                "attribute": "alt",
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
                    "text": "Alternative text for the image."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
            "IllustrationContent": {}
        };
    }
}
//# sourceMappingURL=illustration.js.map
