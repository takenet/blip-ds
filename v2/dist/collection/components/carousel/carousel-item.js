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
        return (h(Host, { key: '4c2579e2ee173f0c64c6cd02059c9a2f58f7f126', class: "carrosel-item" }, h("bds-theme-provider", { key: 'c914aa51082a993235ec0c52ba2c0c38a5493b00', theme: this.theme, class: "carrosel-item-frame", style: { background: this.bgColor } }, this.bgImage && (h("bds-image", { key: 'b25a0c0bd6da90dea74ccbed99bbe1eb3e87ae21', class: "image-bg", alt: "Example of a image", width: "100%", height: "100%", brightness: this.bgImageBrightness, "object-fit": "cover", src: this.bgImage })), h("slot", { key: 'e060d3f2750fa0d95dce03a15fe2966aaba181cf' }))));
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
