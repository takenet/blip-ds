import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const POSITIONS = [
    'top-center',
    'top-left',
    'top-right',
    'left-center',
    'left-top',
    'left-bottom',
    'bottom-center',
    'bottom-right',
    'bottom-left',
    'right-center',
    'right-top',
    'right-bottom',
];
let tooltipIds = 0;
const formatText = (text) => (text ? text.replace(/<br>/gi, '\r\n') : '');
/**
 * Short supplementary text shown on hover or keyboard focus of the wrapped element.
 * Use for brief hints; pair with UaiThemeProvider; avoid essential information or interactive content.
 *
 * @slot - The element that triggers the tooltip.
 * @part tip - The floating tooltip container.
 */
export class UaiTooltip {
    constructor() {
        this.isVisible = false;
        this.tipId = `uai-tooltip-${++tooltipIds}`;
        /** Tooltip text; <br> breaks the line. Use short hints; pair with the wrapped element; avoid essential information. */
        this.tooltipText = 'Tooltip';
        /** Prevents the tooltip from showing. Use when the wrapped element is unavailable; pair with explanatory text elsewhere. */
        this.disabled = false;
        /** Placement relative to the wrapped element. Use the side with free space; avoid covering related content. */
        this.position = 'left-center';
        /** Maximum tooltip width as a CSS length. Defaults to the width/tooltip token; use for long text; avoid widths narrower than the content needs. */
        this.maxWidth = null;
        /** Test selector on the trigger wrapper. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        this.onKeyDown = (event) => {
            if (event.key === 'Escape' && this.isVisible)
                this.isVisible = false;
        };
    }
    /** Shows the tooltip. Use for imperative control; pair with invisible. Avoid calling it while disabled. */
    async visible() {
        this.isVisible = true;
    }
    /** Hides the tooltip. Use for imperative control; pair with visible. Avoid leaving it open after the task ends. */
    async invisible() {
        this.isVisible = false;
    }
    tooltipTextChanged() {
        this.textVerify = formatText(this.tooltipText);
    }
    maxWidthChanged() {
        this.maxWidthTooltip = this.maxWidth;
    }
    disabledChanged() {
        if (this.disabled)
            this.isVisible = false;
    }
    componentWillLoad() {
        this.textVerify = formatText(this.tooltipText);
        this.maxWidthTooltip = this.maxWidth;
    }
    setVisibility(value) {
        this.isVisible = this.disabled ? false : value;
    }
    render() {
        const position = POSITIONS.find((candidate) => candidate === this.position) || 'left-center';
        if (position !== this.position)
            warnLegacyValue('uai-tooltip', 'position', this.position, position);
        return (h(Host, { key: 'cf9c2942533a48e4644ac75466922551b5719995' }, h("div", { key: 'ad59e697d1b91a857fb0bd7872e6f9bbdaa251a7', class: "tooltip__wrapper" }, h("div", { key: '316dee506555328406685fcac7ed7f8ae6c43762', class: "tooltip__trigger", onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), onFocusin: () => this.setVisibility(true), onFocusout: () => this.setVisibility(false), onKeyDown: this.onKeyDown, "data-test": this.dataTest, "aria-describedby": this.tipId }, h("slot", { key: 'f87ed33db8d2292a1fc1c7e1842ed6e6651b1561' })), h("div", { key: 'c09a3d20196d740f56d18e917729edead647e050', id: this.tipId, part: "tip", role: "tooltip", class: {
                tooltip__tip: true,
                [`tooltip__tip--${position}`]: true,
                'tooltip__tip--visible': this.isVisible,
            }, style: { maxWidth: this.maxWidthTooltip } }, h("uai-typo", { key: 'c5f065076a039f3c24e2e735b756d3b5d93e16b7', class: "tooltip__text", tag: "span", variant: "caption", margin: false }, this.textVerify)))));
    }
    static get is() { return "uai-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "tooltipText": {
                "type": "string",
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
                    "text": "Tooltip text; <br> breaks the line. Use short hints; pair with the wrapped element; avoid essential information."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "tooltip-text",
                "defaultValue": "'Tooltip'"
            },
            "disabled": {
                "type": "boolean",
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
                    "text": "Prevents the tooltip from showing. Use when the wrapped element is unavailable; pair with explanatory text elsewhere."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiTooltipPositionType",
                    "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"left-bottom\" | \"left-center\" | \"left-top\" | \"right-bottom\" | \"right-center\" | \"right-top\" | \"top-center\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "UaiTooltipPositionType": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-tooltip/uai-tooltip.tsx",
                            "id": "src/components/uai-tooltip/uai-tooltip.tsx::UaiTooltipPositionType"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placement relative to the wrapped element. Use the side with free space; avoid covering related content."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "position",
                "defaultValue": "'left-center'"
            },
            "maxWidth": {
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
                    "text": "Maximum tooltip width as a CSS length. Defaults to the width/tooltip token; use for long text; avoid widths narrower than the content needs."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-width",
                "defaultValue": "null"
            },
            "dataTest": {
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
                    "text": "Test selector on the trigger wrapper. Use for automation; pair with semantic queries. Avoid styling by it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data-test",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "isVisible": {},
            "textVerify": {},
            "maxWidthTooltip": {}
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
                    "text": "Shows the tooltip. Use for imperative control; pair with invisible. Avoid calling it while disabled.",
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
                    "text": "Hides the tooltip. Use for imperative control; pair with visible. Avoid leaving it open after the task ends.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "tooltipText",
                "methodName": "tooltipTextChanged"
            }, {
                "propName": "maxWidth",
                "methodName": "maxWidthChanged"
            }, {
                "propName": "disabled",
                "methodName": "disabledChanged"
            }];
    }
}
