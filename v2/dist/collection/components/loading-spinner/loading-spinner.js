import { h, Host } from "@stencil/core";
import { loadAssetSvg } from "../../utils/asset-loader";
export class BdsLoadingSpinner {
    constructor() {
        this.requestVersion = 0;
        /**
         * 	Sets the color of the spinner, can be 'primary', 'secondary' or 'ghost'
         */
        this.variant = 'primary';
        /**
         * Size, Entered as one of the size. Can be one of:
         * 'small', 'standard', 'large'.
         */
        this.size = 'standard';
        /**
         * Color, Entered as one of the color. Can be one of:
         * 'default', 'white'.
         */
        this.color = 'main';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**Function to transform the svg in a div element. */
        this.formatSvg = (svgContent) => {
            const div = document.createElement('div');
            div.innerHTML = svgContent;
            const svgElm = div.firstElementChild;
            svgElm.removeAttribute('width');
            svgElm.removeAttribute('height');
            return div.innerHTML;
        };
    }
    componentWillLoad() {
        this.setSvgContent();
    }
    async setSvgContent() {
        const version = ++this.requestVersion;
        try {
            const svg = await loadAssetSvg(`asset-component-loading-spinner-${this.size}`);
            if (version === this.requestVersion)
                this.svgContent = this.formatSvg(svg);
        }
        catch (_a) {
            if (version === this.requestVersion)
                this.svgContent = undefined;
        }
    }
    render() {
        return (h(Host, { key: 'df0db60c7f6c8b924aed85e3d8799da9bbb922c9' }, h("div", { key: '675a8d2cb30efbc3d2d7bcbb3da1ad67586921f8', class: {
                spinner_container: true,
                [`spinner_background_${this.size}`]: true,
            }, "data-test": this.dataTest }, h("div", { key: 'd53ff0a9fae8da75e3b8e56e9712f4b251aeef23', class: {
                spinner_background: true,
                [`spinner_background_${this.size}`]: true,
                [`spinner_background_${this.color}`]: true,
            } }), h("div", { key: 'cf636da92299f13b5d60b29347536aa4f00b3c5e', class: {
                spinner_loading: true,
                [`spinner_loading_${this.size}`]: true,
                [`spinner_loading_${this.color}`]: true,
            }, innerHTML: this.svgContent }))));
    }
    static get is() { return "bds-loading-spinner"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["loading-spinner.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["loading-spinner.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "LoadingSpinnerVariant",
                    "resolved": "\"delete\" | \"ghost\" | \"primary\" | \"secondary\" | \"tertiary\"",
                    "references": {
                        "LoadingSpinnerVariant": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/loading-spinner/loading-spinner.tsx",
                            "id": "src/components/loading-spinner/loading-spinner.tsx::LoadingSpinnerVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Sets the color of the spinner, can be 'primary', 'secondary' or 'ghost'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "loadingSize",
                    "resolved": "\"extra-small\" | \"small\" | \"standard\"",
                    "references": {
                        "loadingSize": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/loading-spinner/loading-spinner.tsx",
                            "id": "src/components/loading-spinner/loading-spinner.tsx::loadingSize"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Size, Entered as one of the size. Can be one of:\n'small', 'standard', 'large'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'standard'"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "colorsVariants",
                    "resolved": "\"content\" | \"light\" | \"main\" | \"negative\" | \"positive\"",
                    "references": {
                        "colorsVariants": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/loading-spinner/loading-spinner.tsx",
                            "id": "src/components/loading-spinner/loading-spinner.tsx::colorsVariants"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Color, Entered as one of the color. Can be one of:\n'default', 'white'."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'main'"
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
            "svgContent": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "setSvgContent"
            }];
    }
}
//# sourceMappingURL=loading-spinner.js.map
