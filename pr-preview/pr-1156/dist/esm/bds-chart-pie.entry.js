import { r as registerInstance, h, H as Host, a as getElement } from './index-BALoTlPi.js';
import { g as calculatePieLayout, h as generateDonutPath, D as DEFAULT_LEGEND_PALETTE } from './chart-math-CLjGJy6L.js';

const chartPieCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;min-height:300px;max-width:1920px;max-height:1080px;--chart-pie-hover-brightness:1.12}svg{-ms-flex:1 1 0px;flex:1 1 0;min-height:0;width:100%}.chart-pie__slice{-webkit-transition:opacity 0.2s ease, -webkit-filter 0.15s ease;transition:opacity 0.2s ease, -webkit-filter 0.15s ease;transition:opacity 0.2s ease, filter 0.15s ease;transition:opacity 0.2s ease, filter 0.15s ease, -webkit-filter 0.15s ease;cursor:pointer}.chart-pie__slice--faded{opacity:0.3}.chart-pie__slice--hovered{-webkit-filter:brightness(var(--chart-pie-hover-brightness));filter:brightness(var(--chart-pie-hover-brightness))}";

const ChartPie = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Array of data objects or JSON string. Each object must have labelKey and valueKey fields. */
        this.data = [];
        /** Field name used for slice labels. */
        this.labelKey = 'label';
        /** Field name whose numeric value determines each slice size. */
        this.valueKey = 'value';
        /** Fallback color (palette is used automatically; this is a last-resort override). */
        this.color = 'var(--color-extended-blue, #0d6efd)';
        this.actualWidth = 400;
        this.actualHeight = 300;
        this.hoveredIndex = -1;
        this.activeLegendItem = null;
        this.resizeObserver = null;
    }
    componentDidLoad() {
        this.calculateActualDimensions();
        if (typeof ResizeObserver !== 'undefined') {
            this.resizeObserver = new ResizeObserver(() => {
                this.calculateActualDimensions();
            });
            this.resizeObserver.observe(this.host);
        }
        this.host.addEventListener('bdsLegendItemClick', (e) => {
            const label = e.detail;
            this.activeLegendItem = this.activeLegendItem === label ? null : label;
        });
    }
    componentDidRender() {
        var _a;
        const legendElement = this.host.querySelector('bds-chart-legend');
        if (!legendElement)
            return;
        const { slices } = this.computeLayout();
        if (slices.length === 0)
            return;
        const { legendAlign } = this.readConfig();
        const items = slices.map(s => ({ label: s.label, color: s.color }));
        (_a = legendElement.setLegendState) === null || _a === void 0 ? void 0 : _a.call(legendElement, { items, align: legendAlign, activeItem: this.activeLegendItem });
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    calculateActualDimensions() {
        var _a;
        this.actualWidth = this.host.clientWidth || 400;
        const svgEl = (_a = this.host.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('svg');
        this.actualHeight = (svgEl === null || svgEl === void 0 ? void 0 : svgEl.clientHeight) || this.host.clientHeight || 300;
    }
    readConfig() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const configEl = this.host.querySelector('bds-pie-config');
        const innerRadius = Number((_b = (_a = configEl === null || configEl === void 0 ? void 0 : configEl.getAttribute('data-inner-radius')) !== null && _a !== void 0 ? _a : configEl === null || configEl === void 0 ? void 0 : configEl.innerRadius) !== null && _b !== void 0 ? _b : 60);
        const padAngle = Number((_d = (_c = configEl === null || configEl === void 0 ? void 0 : configEl.getAttribute('data-pad-angle')) !== null && _c !== void 0 ? _c : configEl === null || configEl === void 0 ? void 0 : configEl.padAngle) !== null && _d !== void 0 ? _d : 0.02);
        const cornerRadius = Number((_f = (_e = configEl === null || configEl === void 0 ? void 0 : configEl.getAttribute('data-corner-radius')) !== null && _e !== void 0 ? _e : configEl === null || configEl === void 0 ? void 0 : configEl.cornerRadius) !== null && _f !== void 0 ? _f : 3);
        const legendElement = this.host.querySelector('bds-chart-legend');
        const legendAlign = ((_h = (_g = legendElement === null || legendElement === void 0 ? void 0 : legendElement.getAttribute('align')) !== null && _g !== void 0 ? _g : legendElement === null || legendElement === void 0 ? void 0 : legendElement.align) !== null && _h !== void 0 ? _h : 'center');
        return { innerRadius, padAngle, cornerRadius, legendAlign };
    }
    computeLayout() {
        const { innerRadius } = this.readConfig();
        return calculatePieLayout(this.data, this.labelKey, this.valueKey, this.actualWidth, this.actualHeight, innerRadius, DEFAULT_LEGEND_PALETTE);
    }
    emitLeave() {
        this.hoveredIndex = -1;
        const tooltipEl = this.host.querySelector('bds-chart-tooltip');
        if (tooltipEl) {
            tooltipEl.setTooltipState({ visible: false });
        }
    }
    showTooltip(index, event) {
        const tooltipEl = this.host.querySelector('bds-chart-tooltip');
        if (!tooltipEl)
            return;
        const { slices } = this.computeLayout();
        const slice = slices[index];
        if (!slice)
            return;
        tooltipEl.setTooltipState({
            visible: true,
            x: event.clientX,
            y: event.clientY,
            label: slice.label,
            entries: [
                {
                    color: slice.color,
                    name: slice.label,
                    value: `${slice.value} (${slice.percentage.toFixed(1)}%)`,
                },
            ],
        });
    }
    render() {
        const { padAngle } = this.readConfig();
        const { slices, outerRadius, innerRadius, centerX, centerY } = this.computeLayout();
        return (h(Host, { key: '84ee50fe7d0e7cf70897844cfc27fc66b64bbf86' }, h("svg", { key: '431c415cdb7c5e758c85b04765b50f9504755470', width: this.actualWidth, height: this.actualHeight, class: "chart-pie", "aria-hidden": "true", onMouseLeave: () => this.emitLeave() }, h("g", { key: '05ecbe88adaf0d405436c2ce0a62f7c86dd12d7e', transform: `translate(${centerX}, ${centerY})` }, slices.map((slice, index) => {
            const isHovered = this.hoveredIndex === index;
            const isFaded = this.activeLegendItem !== null
                ? this.activeLegendItem !== slice.label
                : (this.hoveredIndex >= 0 && !isHovered);
            const d = generateDonutPath(slice.startAngle, slice.endAngle, outerRadius, innerRadius, padAngle);
            if (!d)
                return null;
            const classes = [
                'chart-pie__slice',
                isHovered ? 'chart-pie__slice--hovered' : '',
                isFaded ? 'chart-pie__slice--faded' : '',
            ].filter(Boolean).join(' ');
            return (h("path", { key: `slice-${index}`, class: classes, d: d, fill: slice.color, onMouseEnter: (e) => { this.hoveredIndex = index; this.showTooltip(index, e); }, onMouseMove: (e) => this.showTooltip(index, e), onMouseLeave: () => this.emitLeave() }));
        }))), h("slot", { key: 'fe3eb0f7dfa4d8ba875831f2f00fff21902c1d20' })));
    }
    get host() { return getElement(this); }
};
ChartPie.style = chartPieCss;

export { ChartPie as bds_chart_pie };
//# sourceMappingURL=bds-chart-pie.entry.js.map

//# sourceMappingURL=bds-chart-pie.entry.js.map