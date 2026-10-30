import { Host, h } from "@stencil/core";
import { loadAssetSvg } from "../../utils/asset-loader";
export class BdsLoading {
    constructor() {
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
        this.setSvgContent = async () => {
            try {
                const svg = await loadAssetSvg('asset-component-loading-page');
                this.svgContent = this.formatSvg(svg);
            }
            catch (_a) {
                this.svgContent = undefined;
            }
        };
    }
    componentWillLoad() {
        this.setSvgContent();
    }
    render() {
        return (h(Host, { key: '270b24627ef357bd5a08290603d7b29d63e73cf4' }, h("div", { key: '91c1819a5639f0b0d55aafc19fdd1656213f27a2', class: "loading-container", "data-test": this.dataTest }, h("div", { key: '97a73edf20e4406992e6cd531a502ba8ac9f3002', class: { page_loading: true }, innerHTML: this.svgContent }))));
    }
    static get is() { return "bds-loading-page"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["loading-page.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["loading-page.css"]
        };
    }
    static get properties() {
        return {
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
    static get states() {
        return {
            "svgContent": {}
        };
    }
}
