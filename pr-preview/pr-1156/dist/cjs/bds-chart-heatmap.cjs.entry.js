'use strict';

var index = require('./index-t1DDWEYz.js');
var chartMath = require('./chart-math-BUxv1lwU.js');
var chartAxisRender = require('./chart-axis-render-CLJUhKD_.js');

const chartHeatmapCss = ".chart__x-labels{font-family:inherit;pointer-events:none}.chart__x-label{font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.75rem;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.chart__y-labels{font-family:inherit;pointer-events:none}.chart__y-label{font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.75rem;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;min-height:400px;max-width:1920px;max-height:1080px}svg{-ms-flex:1 1 0px;flex:1 1 0;min-height:0;width:100%}.chart-heatmap__cell{cursor:default}.chart-heatmap__x-label,.chart-heatmap__y-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}";

const FONT_SIZE = 12;
const FONT_BASELINE = 4;
const ChartHeatmap = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Array of data objects or JSON string. Each object must have xKey, yKey, and valueKey fields. */
        this.data = [];
        /** Data field used for X-axis (column) categories. */
        this.xKey = 'x';
        /** Data field used for Y-axis (row) categories. */
        this.yKey = 'y';
        /** Data field whose numeric value drives cell opacity (min → 0.1, max → 1.0). */
        this.valueKey = 'value';
        /** Base fill color of cells. Can be overridden by <bds-heatmap-cell color="...">. */
        this.color = 'var(--color-extended-blue, #0d6efd)';
        /** Border-radius of each cell in pixels. */
        this.cellRadius = 4;
        /** Gap between cells in pixels. */
        this.cellPadding = 4;
        this.actualWidth = 640;
        this.actualHeight = 280;
        this.hoveredIndex = -1;
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
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    calculateActualDimensions() {
        var _a;
        this.actualWidth = this.host.clientWidth || 640;
        const svgEl = (_a = this.host.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('svg');
        this.actualHeight = (svgEl === null || svgEl === void 0 ? void 0 : svgEl.clientHeight) || this.host.clientHeight || 280;
    }
    readConfig() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18;
        const parseBoolean = (value) => {
            if (typeof value === 'boolean')
                return value;
            if (typeof value === 'string')
                return value === 'true';
            return !!value;
        };
        const gridElement = this.host.querySelector('bds-chart-grid');
        const showHorizontalGrid = gridElement
            ? parseBoolean((_b = (_a = gridElement.getAttribute('horizontal')) !== null && _a !== void 0 ? _a : gridElement.horizontal) !== null && _b !== void 0 ? _b : 'true')
            : false;
        const showVerticalGrid = gridElement
            ? parseBoolean((_d = (_c = gridElement.getAttribute('vertical')) !== null && _c !== void 0 ? _c : gridElement.vertical) !== null && _d !== void 0 ? _d : 'false')
            : false;
        const gridStrokeStyle = (_f = (_e = gridElement === null || gridElement === void 0 ? void 0 : gridElement.getAttribute('strokeStyle')) !== null && _e !== void 0 ? _e : gridElement === null || gridElement === void 0 ? void 0 : gridElement.strokeStyle) !== null && _f !== void 0 ? _f : 'solid';
        const xAxisElement = this.host.querySelector('bds-x-axis');
        const showXLabels = parseBoolean((_h = (_g = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('show')) !== null && _g !== void 0 ? _g : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.show) !== null && _h !== void 0 ? _h : 'true');
        const showXTickLine = parseBoolean((_k = (_j = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('tickLine')) !== null && _j !== void 0 ? _j : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.tickLine) !== null && _k !== void 0 ? _k : 'true');
        const xTickMargin = Number((_m = (_l = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('tickMargin')) !== null && _l !== void 0 ? _l : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.tickMargin) !== null && _m !== void 0 ? _m : 10);
        const xTickFormatter = (_o = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('data-tick-formatter')) !== null && _o !== void 0 ? _o : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.tickFormatter;
        const xKey = (_r = (_q = (_p = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('data-key')) !== null && _p !== void 0 ? _p : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('dataKey')) !== null && _q !== void 0 ? _q : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.dataKey) !== null && _r !== void 0 ? _r : this.xKey;
        const xLineColor = (_t = (_s = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('line-color')) !== null && _s !== void 0 ? _s : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.lineColor) !== null && _t !== void 0 ? _t : 'var(--color-border-1)';
        const xLabelColor = (_v = (_u = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('label-color')) !== null && _u !== void 0 ? _u : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.labelColor) !== null && _v !== void 0 ? _v : 'var(--color-content-default)';
        const yAxisElement = this.host.querySelector('bds-y-axis');
        const showYAxisLabels = parseBoolean((_x = (_w = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('show')) !== null && _w !== void 0 ? _w : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.show) !== null && _x !== void 0 ? _x : 'true');
        const showYTickLine = parseBoolean((_z = (_y = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('tickLine')) !== null && _y !== void 0 ? _y : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.tickLine) !== null && _z !== void 0 ? _z : 'true');
        const yTickMargin = Number((_1 = (_0 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('tickMargin')) !== null && _0 !== void 0 ? _0 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.tickMargin) !== null && _1 !== void 0 ? _1 : 10);
        const yTickFormatter = (_2 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('data-tick-formatter')) !== null && _2 !== void 0 ? _2 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.tickFormatter;
        const yKey = (_5 = (_4 = (_3 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('data-key')) !== null && _3 !== void 0 ? _3 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('dataKey')) !== null && _4 !== void 0 ? _4 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.dataKey) !== null && _5 !== void 0 ? _5 : this.yKey;
        const yLineColor = (_7 = (_6 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('line-color')) !== null && _6 !== void 0 ? _6 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.lineColor) !== null && _7 !== void 0 ? _7 : 'var(--color-border-1)';
        const yLabelColor = (_9 = (_8 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('label-color')) !== null && _8 !== void 0 ? _8 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.labelColor) !== null && _9 !== void 0 ? _9 : 'var(--color-content-default)';
        // bds-heatmap-cell overrides
        const cellEl = this.host.querySelector('bds-heatmap-cell');
        const color = (_12 = (_11 = (_10 = cellEl === null || cellEl === void 0 ? void 0 : cellEl.getAttribute('data-color')) !== null && _10 !== void 0 ? _10 : cellEl === null || cellEl === void 0 ? void 0 : cellEl.getAttribute('color')) !== null && _11 !== void 0 ? _11 : cellEl === null || cellEl === void 0 ? void 0 : cellEl.color) !== null && _12 !== void 0 ? _12 : this.color;
        const cellRadius = Number((_15 = (_14 = (_13 = cellEl === null || cellEl === void 0 ? void 0 : cellEl.getAttribute('data-radius')) !== null && _13 !== void 0 ? _13 : cellEl === null || cellEl === void 0 ? void 0 : cellEl.getAttribute('radius')) !== null && _14 !== void 0 ? _14 : cellEl === null || cellEl === void 0 ? void 0 : cellEl.radius) !== null && _15 !== void 0 ? _15 : this.cellRadius);
        const valueKey = (_18 = (_17 = (_16 = cellEl === null || cellEl === void 0 ? void 0 : cellEl.getAttribute('data-value-key')) !== null && _16 !== void 0 ? _16 : cellEl === null || cellEl === void 0 ? void 0 : cellEl.getAttribute('valueKey')) !== null && _17 !== void 0 ? _17 : cellEl === null || cellEl === void 0 ? void 0 : cellEl.valueKey) !== null && _18 !== void 0 ? _18 : this.valueKey;
        return {
            showHorizontalGrid, showVerticalGrid, gridStrokeStyle,
            showXLabels, showXTickLine, xTickMargin, xTickFormatter, xKey, xLineColor, xLabelColor,
            showYAxisLabels, showYTickLine, yTickMargin, yTickFormatter, yKey, yLineColor, yLabelColor,
            color, cellRadius, valueKey,
        };
    }
    computeMargin(config) {
        const { showXLabels, showXTickLine, xTickMargin, showYAxisLabels, showYTickLine, yTickMargin } = config;
        const bottom = showXLabels
            ? (showXTickLine ? chartAxisRender.TICK_LENGTH : 0) + xTickMargin + FONT_SIZE + FONT_BASELINE
            : 8;
        const left = showYAxisLabels
            ? 20 + (showYTickLine ? chartAxisRender.TICK_LENGTH : 0) + yTickMargin
            : 8;
        return { top: 20, right: 20, bottom, left };
    }
    emitLeave() {
        this.hoveredIndex = -1;
        const tooltipElement = this.host.querySelector('bds-chart-tooltip');
        if (tooltipElement) {
            tooltipElement.setTooltipState({ visible: false });
        }
    }
    handleCanvasMouseMove(event) {
        var _a;
        const svg = event.currentTarget;
        if (!svg)
            return;
        const rect = svg.getBoundingClientRect();
        const mx = event.clientX - rect.left;
        const my = event.clientY - rect.top;
        const config = this.readConfig();
        const margin = this.computeMargin(config);
        const { cells } = chartMath.calculateHeatmapLayout(this.data, config.xKey, config.yKey, config.valueKey, this.actualWidth, this.actualHeight, margin, this.cellPadding);
        if (cells.length === 0)
            return;
        let closestIndex = 0;
        let closestDistance = Infinity;
        cells.forEach((cell, index) => {
            const cx = margin.left + cell.x + cell.width / 2;
            const cy = margin.top + cell.y + cell.height / 2;
            const dist = Math.hypot(mx - cx, my - cy);
            if (dist < closestDistance) {
                closestDistance = dist;
                closestIndex = index;
            }
        });
        this.hoveredIndex = closestIndex;
        const datum = cells[closestIndex].datum;
        const tooltipElement = this.host.querySelector('bds-chart-tooltip');
        if (tooltipElement) {
            tooltipElement.setTooltipState({
                visible: true,
                x: event.clientX,
                y: event.clientY,
                label: `${datum[config.xKey]} × ${datum[config.yKey]}`,
                entries: [{ color: config.color, name: config.valueKey, value: (_a = datum[config.valueKey]) !== null && _a !== void 0 ? _a : '' }],
            });
        }
    }
    render() {
        const config = this.readConfig();
        const { showHorizontalGrid, showVerticalGrid, gridStrokeStyle, showXLabels, showXTickLine, xTickMargin, xTickFormatter, xKey, xLineColor, xLabelColor, showYAxisLabels, showYTickLine, yTickMargin, yTickFormatter, yKey, yLineColor, yLabelColor, color, cellRadius, valueKey, } = config;
        const margin = this.computeMargin(config);
        const { cells, xLabels, yLabels } = chartMath.calculateHeatmapLayout(this.data, xKey, yKey, valueKey, this.actualWidth, this.actualHeight, margin, this.cellPadding);
        const getStrokeDasharray = (style) => {
            if (style === 'dashed')
                return '4,4';
            if (style === 'dotted')
                return '1,3';
            return '';
        };
        return (index.h(index.Host, null, index.h("svg", { width: this.actualWidth, height: this.actualHeight, class: "chart-heatmap", "aria-hidden": "true" }, showHorizontalGrid && (index.h("g", { class: "chart-heatmap__grid-y", "stroke-dasharray": getStrokeDasharray(gridStrokeStyle) }, yLabels.map((label, idx) => (index.h("line", { key: `grid-h-${idx}`, x1: margin.left, y1: margin.top + label.y, x2: this.actualWidth - margin.right, y2: margin.top + label.y, stroke: "rgba(0,0,0,0.05)", "stroke-width": "1" }))))), showVerticalGrid && (index.h("g", { class: "chart-heatmap__grid-x", "stroke-dasharray": getStrokeDasharray(gridStrokeStyle) }, xLabels.map((label, idx) => (index.h("line", { key: `grid-v-${idx}`, x1: margin.left + label.x, y1: margin.top, x2: margin.left + label.x, y2: this.actualHeight - margin.bottom, stroke: "rgba(0,0,0,0.05)", "stroke-width": "1" }))))), index.h("g", { transform: `translate(${margin.left}, ${margin.top})` }, index.h("g", { class: "chart-heatmap__cells" }, cells.map((cell, index$1) => (index.h("rect", { key: `cell-${index$1}`, class: "chart-heatmap__cell", x: cell.x, y: cell.y, width: Math.max(cell.width, 0), height: Math.max(cell.height, 0), rx: cellRadius, fill: color, style: { opacity: String(cell.opacity), pointerEvents: 'none', transition: 'opacity 0.2s ease' } })))), this.hoveredIndex >= 0 && cells[this.hoveredIndex] && (index.h("rect", { key: "hover-bg", class: "chart-heatmap__hover-bg", x: cells[this.hoveredIndex].x, y: cells[this.hoveredIndex].y, width: Math.max(cells[this.hoveredIndex].width, 0), height: Math.max(cells[this.hoveredIndex].height, 0), rx: cellRadius, fill: "rgba(0,0,0,0.08)", style: { pointerEvents: 'none' } }))), showXLabels && chartAxisRender.renderXAxisLabels({
            xLabels,
            margin,
            actualHeight: this.actualHeight,
            showTickLine: showXTickLine,
            tickMargin: xTickMargin,
            tickFormatter: xTickFormatter,
            lineColor: xLineColor,
            labelColor: xLabelColor,
        }), showYAxisLabels && chartAxisRender.renderYAxisLabels({
            yLabels,
            margin,
            showTickLine: showYTickLine,
            tickMargin: yTickMargin,
            tickFormatter: yTickFormatter,
            lineColor: yLineColor,
            labelColor: yLabelColor,
        }), index.h("rect", { key: "chart-overlay", x: 0, y: 0, width: this.actualWidth, height: this.actualHeight, fill: "transparent", style: { cursor: 'default' }, onMouseMove: (e) => this.handleCanvasMouseMove(e), onMouseLeave: () => this.emitLeave() })), index.h("slot", null)));
    }
    get host() { return index.getElement(this); }
};
ChartHeatmap.style = chartHeatmapCss;

exports.bds_chart_heatmap = ChartHeatmap;
//# sourceMappingURL=bds-chart-heatmap.entry.cjs.js.map

//# sourceMappingURL=bds-chart-heatmap.cjs.entry.js.map