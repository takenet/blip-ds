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
        return (h(Host, { key: '01c10373b36658a99c810fe6dcf7b9a40698f636' }, h("div", { key: '8fbf9a177462daaecec6f92f318d20a1a9906c3d', class: "loading-container", "data-test": this.dataTest }, h("div", { key: '48a7facd88861f573b09f408b1623408cd48300d', class: { page_loading: true }, innerHTML: this.svgContent }))));
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
