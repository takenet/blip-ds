import { h, Host } from "@stencil/core";
import loadExtraSmall from "../../assets/svg/load-extra-small.svg";
import loadSmall from "../../assets/svg/load-small.svg";
import loadStandard from "../../assets/svg/load-standard.svg";
export class BdsLoadingSpinner {
    constructor() {
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
        this.setSvgContent = () => {
            const innerHTML = this.size == 'extra-small'
                ? loadExtraSmall
                : this.size == 'small'
                    ? loadSmall
                    : this.size == 'standard' && loadStandard;
            const svg = atob(innerHTML.replace('data:image/svg+xml;base64,', ''));
            this.svgContent = this.formatSvg(svg);
        };
    }
    componentWillLoad() {
        this.setSvgContent();
    }
    render() {
        return (h(Host, { key: '45a1a1848ff530eb26d783587a08e97dc395cfe2' }, h("div", { key: 'c82ecf86bed59b078270a36d38ca57a85d3053b8', class: {
                spinner_container: true,
                [`spinner_background_${this.size}`]: true,
            }, "data-test": this.dataTest }, h("div", { key: '98c3907f8e73206a8243565eeb06311ac7e2345c', class: {
                spinner_background: true,
                [`spinner_background_${this.size}`]: true,
                [`spinner_background_${this.color}`]: true,
            } }), h("div", { key: '8fe6324d3bafebf2f3d231f347bcad2a7940491a', class: {
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
}
//# sourceMappingURL=loading-spinner.js.map
