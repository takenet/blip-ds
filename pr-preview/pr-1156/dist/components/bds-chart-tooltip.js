import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const chartTooltipCss = "bds-chart-tooltip{display:none}#bds-chart-tooltip-portal{position:fixed;top:0;left:0;z-index:9999;pointer-events:none;width:100%;height:100%}.bds-chart-tooltip-wrapper{position:fixed;pointer-events:none;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease}.bds-chart-tooltip-wrapper.visible{pointer-events:auto}.chart-tooltip{background:var(--color-surface-1, rgb(246, 246, 246));border:1px solid var(--color-border-1, rgba(0, 0, 0, 0.2));border-radius:8px;padding:16px;color:var(--color-content-default, rgb(40, 40, 40));white-space:nowrap;-webkit-transform:translate(-50%, -130%);transform:translate(-50%, -130%);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:4px;min-height:32px;min-width:80px;width:auto;height:auto}.label{color:var(--color-content-default, rgb(40, 40, 40));margin-bottom:2px}.entries{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:4px}.entry{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:6px}.entry-name{color:var(--color-content-default, rgb(40, 40, 40))}.entry-value{margin-left:auto;padding-left:12px}.content{margin-left:2px}.indicator{display:inline-block;width:8px;height:8px;border-radius:50%;-ms-flex-negative:0;flex-shrink:0}.indicator-dot{border-radius:50%}.indicator-line{width:3px;height:14px;border-radius:1px}.indicator-dashed{width:10px;height:3px;border-radius:1px}";

const ChartTooltip = /*@__PURE__*/ proxyCustomElement(class ChartTooltip extends H {
    constructor() {
        super();
        this.__registerHost();
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
    get el() { return this; }
    static get style() { return chartTooltipCss; }
}, [0, "bds-chart-tooltip", {
        "labelKey": [1, "label-key"],
        "nameKey": [1, "name-key"],
        "indicator": [1],
        "hideLabel": [4, "hide-label"],
        "hideIndicator": [4, "hide-indicator"],
        "visible": [32],
        "x": [32],
        "y": [32],
        "label": [32],
        "content": [32],
        "entries": [32],
        "setTooltipState": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-chart-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-chart-tooltip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartTooltip);
            }
            break;
    } });
}

const BdsChartTooltip = ChartTooltip;
const defineCustomElement = defineCustomElement$1;

export { BdsChartTooltip, defineCustomElement };
//# sourceMappingURL=bds-chart-tooltip.js.map

//# sourceMappingURL=bds-chart-tooltip.js.map