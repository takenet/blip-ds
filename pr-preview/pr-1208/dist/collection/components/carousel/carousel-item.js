import { h, Host } from "@stencil/core";
export class BdsCarouselItem {
    constructor() {
        /**
         * Set what theme will be aplyed inside the component.
         * 'light', 'dark';
         */
        this.theme = 'light';
        this.bgImageBrightness = 1;
    }
    render() {
        return (h(Host, { key: '9816220cbe08d233e5ae19dcccc229fd40a7adae', class: "carrosel-item" }, h("bds-theme-provider", { key: '24a9af783186acf42a7e2922abfa324c642c8948', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: '63a88c7d0efb79a38e97af5015438c269360bfca', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: '227dca52a0cb6282c30e2972dd8caf6707ce0852' }))));
    }
    static get is() { return "bds-carousel-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["carousel-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["carousel-item.css"]
        };
    }
    static get properties() {
        return {
            "theme": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Themes",
                    "resolved": "\"dark\" | \"high-contrast\" | \"light\"",
                    "references": {
                        "Themes": {
                            "location": "import",
                            "path": "../theme-provider/theme-provider",
                            "id": "src/components/theme-provider/theme-provider.tsx::Themes",
                            "referenceLocation": "Themes"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Set what theme will be aplyed inside the component.\n'light', 'dark';"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "theme",
                "defaultValue": "'light'"
            },
            "bgImage": {
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
                "attribute": "bg-image"
            },
            "bgImageBrightness": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "bg-image-brightness",
                "defaultValue": "1"
            },
            "bgColor": {
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
                "attribute": "bg-color"
            }
        };
    }
}
