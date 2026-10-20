import { Host, h } from "@stencil/core";
import blipBallonWhite from "blip-tokens/build/json/illustrations/brand/blip-ballon-white.json";
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
        this.setSvgContent = () => {
            const innerHTML = blipBallonWhite['asset-brand-blip-ballon-white-svg'];
            const svg = atob(innerHTML);
            this.svgContent = this.formatSvg(svg);
        };
    }
    componentWillLoad() {
        this.setSvgContent();
    }
    render() {
        return (h(Host, { key: '83dd8bdf5a8972f70bb1e726cd1ff46c36aa3b93' }, h("div", { key: 'f7968cfc8d45b0d5047ef05dd87b0a9a338cfa6c', class: "loading-container", "data-test": this.dataTest }, h("div", { key: '2a6adb55b0068b1cb1917b0893632b1c7b695c7a', class: { page_loading: true }, innerHTML: this.svgContent }))));
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
}
//# sourceMappingURL=loading-page.js.map
