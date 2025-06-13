import { Host, h } from "@stencil/core";
import messageBallon from "../../assets/svg/message-ballon.svg";
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
            const innerHTML = messageBallon;
            const svg = atob(innerHTML.replace('data:image/svg+xml;base64,', ''));
            this.svgContent = this.formatSvg(svg);
        };
    }
    componentWillLoad() {
        this.setSvgContent();
    }
    render() {
        return (h(Host, { key: 'ff20c5c8734d3548080aa6bb40f0686b9a94aea1' }, h("div", { key: '0eea0358eeb7d460f4aa6acc4107f634118eb1ab', class: "loading-container", "data-test": this.dataTest }, h("div", { key: '53c17e4b9a39360af5dde5d71284bd6a4a01318f', class: { page_loading: true }, innerHTML: this.svgContent }))));
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
