import { h, Host } from "@stencil/core";
import { getAssetUrl } from "../../utils/asset-loader";
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
    }
    componentWillLoad() {
        this.setIllustrationContent();
    }
    setIllustrationContent() {
        try {
            this.IllustrationContent = this.name ? getAssetUrl(`illustration/${this.type}/${this.name}`) : undefined;
        }
        catch (_a) {
            this.IllustrationContent = undefined;
        }
    }
    render() {
        return (h(Host, { key: '88d8ec3c305d9e92e00a5fe9ce88eb51ed8d9952', role: "img", class: {
                'bds-illustration': true,
            } }, this.IllustrationContent ? (h("img", { draggable: false, src: this.IllustrationContent, onError: () => { this.IllustrationContent = undefined; }, alt: this.alt, "data-test": this.dataTest })) : (h("div", { class: "default", "data-test": this.dataTest }))));
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
    static get watchers() {
        return [{
                "propName": "name",
                "methodName": "setIllustrationContent"
            }, {
                "propName": "type",
                "methodName": "setIllustrationContent"
            }];
    }
}
//# sourceMappingURL=illustration.js.map
