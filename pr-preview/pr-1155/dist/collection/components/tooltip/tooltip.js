import { h } from "@stencil/core";
export class Tooltip {
    constructor() {
        /**
         * Used to set tooltip visibility
         */
        this.isMouseOver = false;
        /**
         * Used to set tooltip text
         */
        this.tooltipText = 'Tooltip';
        /**
         * Used to disable tooltip when the button are avalible
         */
        this.disabled = false;
        /**
         * Used to set tooltip position
         */
        this.position = 'left-center';
        /**
         * Used to set tooltip max width
         */
        this.maxWidth = '320px';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    /**
     * Method for change the visibility of tooltip.
     */
    async visible() {
        this.isMouseOver = true;
    }
    /**
     * Method for change the visibility of tooltip.
     */
    async invisible() {
        this.isMouseOver = false;
    }
    setVisibility(value) {
        if (this.disabled) {
            this.isMouseOver = false;
            return;
        }
        this.isMouseOver = value;
    }
    componentWillLoad() {
        this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
        this.maxWidtTooltip = this.maxWidth;
    }
    tooltipTextChanged() {
        this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
    }
    maxWidthChanged() {
        this.maxWidtTooltip = this.maxWidth;
    }
    render() {
        const styleTooltip = {
            maxWidth: this.maxWidtTooltip,
        };
        return (h("div", { key: '00b09b6886eb74ac91fbea2c9fbe3d792d5bd6cb', class: "tooltip__wrapper" }, h("div", { key: 'e5026004be5450694921a9741f070f620dab6924', onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), "data-test": this.dataTest }, h("slot", { key: 'ea0363fa79c3ab2ee36cc0d981025a9dc51cf403' })), h("div", { key: 'cb0da1586a8e66456295a212cfabb1e51831c123', class: {
                tooltip__tip: true,
                [`tooltip__tip--${this.position}`]: true,
                'tooltip__tip--visible': this.isMouseOver,
            }, style: styleTooltip }, h("div", { key: '3c5bf7638affb6719452ed26d67675028cb39510', class: { tooltip__tip__text: true } }, h("pre", { key: 'd330774b5fd7140bf3f7ccb75dc096f33162d587' }, h("bds-typo", { key: 'df2356e9b99a38cb444ed77b283fdedd0c331770', class: "text", "no-wrap": "false", variant: "fs-12" }, this.textVerify))))));
    }
    static get is() { return "bds-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["tooltip.css"]
        };
    }
    static get properties() {
        return {
            "tooltipText": {
                "type": "string",
                "attribute": "tooltip-text",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to set tooltip text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Tooltip'"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Used to disable tooltip when the button are avalible"
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "TooltipPostionType",
                    "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"left-bottom\" | \"left-center\" | \"left-top\" | \"right-bottom\" | \"right-center\" | \"right-top\" | \"top-center\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "TooltipPostionType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/tooltip/tooltip.tsx",
                            "id": "src/components/tooltip/tooltip.tsx::TooltipPostionType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to set tooltip position"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'left-center'"
            },
            "maxWidth": {
                "type": "string",
                "attribute": "max-width",
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
                    "text": "Used to set tooltip max width"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'320px'"
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
            "isMouseOver": {},
            "textVerify": {},
            "maxWidtTooltip": {}
        };
    }
    static get methods() {
        return {
            "visible": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Method for change the visibility of tooltip.",
                    "tags": []
                }
            },
            "invisible": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Method for change the visibility of tooltip.",
                    "tags": []
                }
            }
        };
    }
    static get watchers() {
        return [{
                "propName": "tooltipText",
                "methodName": "tooltipTextChanged"
            }, {
                "propName": "maxWidth",
                "methodName": "maxWidthChanged"
            }];
    }
}
//# sourceMappingURL=tooltip.js.map
