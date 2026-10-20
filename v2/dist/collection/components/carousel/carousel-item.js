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
        return (h(Host, { key: 'b2f8cdc055d5de2543f9a6944a4b1041be114b1b', class: "carrosel-item" }, h("bds-theme-provider", { key: '9fdf9eba6c5e22051ab430d0143b0df99c98c489', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: '0e95a72eaf02b289aa21c01950e22603e8229311', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: '09142215709d9d3b320f70434215a52f2463929e' }))));
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
                "attribute": "theme",
                "mutable": false,
                "complexType": {
                    "original": "Themes",
                    "resolved": "\"dark\" | \"high-contrast\" | \"light\"",
                    "references": {
                        "Themes": {
                            "location": "import",
                            "path": "../theme-provider/theme-provider",
                            "id": "src/components/theme-provider/theme-provider.tsx::Themes"
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
                "defaultValue": "'light'"
            },
            "bgImage": {
                "type": "string",
                "attribute": "bg-image",
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
                "reflect": false
            },
            "bgImageBrightness": {
                "type": "number",
                "attribute": "bg-image-brightness",
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
                "defaultValue": "1"
            },
            "bgColor": {
                "type": "string",
                "attribute": "bg-color",
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
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=carousel-item.js.map
