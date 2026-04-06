import { Host, h } from "@stencil/core";
export class ChartTooltip {
    constructor() {
        this.indicator = 'dot';
        this.hideLabel = false;
        this.hideIndicator = false;
        this.visible = false;
        this.x = 0;
        this.y = 0;
        this.label = '';
        this.content = '';
        this.entries = [];
    }
    componentDidLoad() {
        this.initializePortal();
    }
    componentDidUpdate() {
        this.updatePortalContent();
    }
    disconnectedCallback() {
        if (this.portalElement && this.portalElement.parentNode) {
            this.portalElement.parentNode.removeChild(this.portalElement);
        }
    }
    initializePortal() {
        if (!document.getElementById('bds-chart-tooltip-portal')) {
            this.portalElement = document.createElement('div');
            this.portalElement.id = 'bds-chart-tooltip-portal';
            document.body.appendChild(this.portalElement);
        }
        else {
            this.portalElement = document.getElementById('bds-chart-tooltip-portal');
        }
        this.portalWrapper = document.createElement('div');
        this.portalWrapper.className = 'bds-chart-tooltip-wrapper';
        this.portalElement.appendChild(this.portalWrapper);
        this.updatePortalContent();
    }
    updatePortalContent() {
        if (!this.portalWrapper)
            return;
        let innerHtml;
        if (this.entries.length > 0) {
            const labelHtml = this.label
                ? `<bds-typo class="label" variant="fs-12" bold="bold" margin="false">${this.label}</bds-typo>`
                : '';
            const entriesHtml = this.entries.map(entry => {
                const indicatorStyle = `background:${entry.color};`;
                const indicatorHtml = this.hideIndicator
                    ? ''
                    : `<span class="indicator indicator-${this.indicator}" style="${indicatorStyle}"></span>`;
                return `<div class="entry">${indicatorHtml}<bds-typo class="entry-name" variant="fs-12" bold="regular" margin="false">${entry.name}</bds-typo><bds-typo class="entry-value" variant="fs-12" bold="bold" margin="false">${entry.value}</bds-typo></div>`;
            }).join('');
            innerHtml = `${labelHtml}<div class="entries">${entriesHtml}</div>`;
        }
        else {
            // Legacy single-content fallback
            const parts = [];
            if (this.label)
                parts.push(`<bds-typo class="label" variant="fs-12" bold="bold" margin="false">${this.label}</bds-typo>`);
            if (!this.hideIndicator)
                parts.push(`<span class="indicator indicator-${this.indicator}"></span>`);
            if (this.content)
                parts.push(`<bds-typo class="content" variant="fs-12" bold="regular" margin="false">${this.content}</bds-typo>`);
            innerHtml = parts.join('');
        }
        this.portalWrapper.style.left = `${this.x}px`;
        this.portalWrapper.style.top = `${this.y}px`;
        this.portalWrapper.style.opacity = this.visible ? '1' : '0';
        this.portalWrapper.style.pointerEvents = 'none';
        const tooltipDiv = this.portalWrapper.querySelector('.chart-tooltip');
        if (tooltipDiv) {
            tooltipDiv.innerHTML = innerHtml;
        }
        else {
            this.portalWrapper.innerHTML = `<div class="chart-tooltip">${innerHtml}</div>`;
        }
    }
    async setTooltipState(state) {
        if (state.visible !== undefined)
            this.visible = state.visible;
        if (state.x !== undefined)
            this.x = state.x;
        if (state.y !== undefined)
            this.y = state.y;
        if (state.label !== undefined)
            this.label = String(state.label);
        if (state.content !== undefined)
            this.content = String(state.content);
        if (state.entries !== undefined)
            this.entries = state.entries;
    }
    render() {
        return h(Host, { key: '4fd6c3eb4fd0713d5203b6db4ef58d16fd3264a1', style: { display: 'none' } });
    }
    static get is() { return "bds-chart-tooltip"; }
    static get originalStyleUrls() {
        return {
            "$": ["chart-tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chart-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "labelKey": {
                "type": "string",
                "attribute": "label-key",
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
            "nameKey": {
                "type": "string",
                "attribute": "name-key",
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
            "indicator": {
                "type": "string",
                "attribute": "indicator",
                "mutable": false,
                "complexType": {
                    "original": "'dot' | 'line' | 'dashed'",
                    "resolved": "\"dashed\" | \"dot\" | \"line\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'dot'"
            },
            "hideLabel": {
                "type": "boolean",
                "attribute": "hide-label",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hideIndicator": {
                "type": "boolean",
                "attribute": "hide-indicator",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "visible": {},
            "x": {},
            "y": {},
            "label": {},
            "content": {},
            "entries": {}
        };
    }
    static get methods() {
        return {
            "setTooltipState": {
                "complexType": {
                    "signature": "(state: { visible?: boolean; x?: number; y?: number; label?: string; content?: string; entries?: TooltipEntry[]; }) => Promise<void>",
                    "parameters": [{
                            "name": "state",
                            "type": "{ visible?: boolean; x?: number; y?: number; label?: string; content?: string; entries?: TooltipEntry[]; }",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "TooltipEntry": {
                            "location": "global",
                            "id": "global::TooltipEntry"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=chart-tooltip.js.map
