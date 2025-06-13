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
        return (h("div", { key: '6da2ea779f9807677a19729e15ccd61aca97b0ca', class: "tooltip__wrapper" }, h("div", { key: 'c37849f8004ccf25a43af153e2f5a7261fb138ef', onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), "data-test": this.dataTest }, h("slot", { key: '653e81c1c01d88500dc16a82396bba779e8b9273' })), h("div", { key: '4a4a53fabfdcb86e3ee0071da326b467010fb6d6', class: {
                tooltip__tip: true,
                [`tooltip__tip--${this.position}`]: true,
                'tooltip__tip--visible': this.isMouseOver,
            }, style: styleTooltip }, h("div", { key: '6b2efdb0caa33e685195c0f6180c6dbc707e5571', class: { tooltip__tip__text: true } }, h("pre", { key: '6de01456532d086f8558bcaa0a9546081778b7d4' }, h("bds-typo", { key: '93c3a9e4c145c1daf59514eb50229f0571377df4', class: "text", "no-wrap": "false", variant: "fs-12" }, this.textVerify))))));
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
