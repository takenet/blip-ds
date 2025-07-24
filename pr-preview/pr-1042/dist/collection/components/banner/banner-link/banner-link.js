import { h } from "@stencil/core";
export class BannerLink {
    constructor() {
        /**
         * Set the link pass.
         */
        this.target = 'blank';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        this._buttonClickHandler = () => {
            this.bdsBannerLink.emit(this.el);
            window.open(this.link, `_${this.target}`);
        };
    }
    handleKeyDown(event) {
        if (event.key == 'Enter') {
            this.bdsBannerLink.emit(this.el);
            window.open(this.link, `_${this.target}`);
        }
    }
    render() {
        const Element = 'a';
        return (h(Element, { key: 'c8568adcbe7eb31b2bcf5ac88f08357a950d30c5', class: { banner__link: true }, onClick: () => this._buttonClickHandler(), "data-test": this.dataTest, tabindex: "0", onKeyDown: this.handleKeyDown.bind(this) }, h("slot", { key: 'eaaa13f59a5662c02459cbb12cb1cfa78c5a1120' })));
    }
    static get is() { return "bds-banner-link"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["banner-link.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["banner-link.css"]
        };
    }
    static get properties() {
        return {
            "link": {
                "type": "string",
                "attribute": "link",
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
                    "text": "Set the link pass."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "target": {
                "type": "string",
                "attribute": "target",
                "mutable": false,
                "complexType": {
                    "original": "targets",
                    "resolved": "\"blank\" | \"framename\" | \"parent\" | \"self\" | \"top\"",
                    "references": {
                        "targets": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/banner/banner-link/banner-link.tsx",
                            "id": "src/components/banner/banner-link/banner-link.tsx::targets"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Set the link pass."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'blank'"
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
    static get events() {
        return [{
                "method": "bdsBannerLink",
                "name": "bdsBannerLink",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the link is clicked."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=banner-link.js.map
