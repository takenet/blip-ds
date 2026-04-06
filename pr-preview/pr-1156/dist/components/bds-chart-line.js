import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { b as buildCategoryColorMap, e as calculateLineChartLayout } from './p-CLjGJy6L.js';
import { r as renderXAxisLabels, a as renderYAxisLabels } from './p-D5sZS1Wr.js';

const chartLineCss = ".chart__x-labels{font-family:inherit;pointer-events:none}.chart__x-label{font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.75rem;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.chart__y-labels{font-family:inherit;pointer-events:none}.chart__y-label{font-family:\"Nunito Sans\", \"Carbona\", \"Tahoma\", \"Helvetica\", \"Arial\", sans-serif;font-size:0.75rem;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;min-height:400px;max-width:1920px;max-height:1080px;--chart-hover-line-color:var(--color-content-ghost, rgba(0, 0, 0, 0.35));--chart-hover-dot-stroke:white}svg{-ms-flex:1 1 0px;flex:1 1 0;min-height:0;width:100%}.chart-line__grid{pointer-events:none}.chart-line__path{stroke-linecap:round;stroke-linejoin:round}.chart-line__point{-webkit-transition:-webkit-transform 0.2s ease;transition:-webkit-transform 0.2s ease;transition:transform 0.2s ease;transition:transform 0.2s ease, -webkit-transform 0.2s ease;cursor:default}.chart-line__point:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px)}";

// Pixel constants used for dynamic margin computation
const TICK_LENGTH = 6; // length of tick mark line
const FONT_SIZE = 12; // SVG label font-size
const FONT_BASELINE = 4; // extra baseline offset for SVG text
const ChartLine = /*@__PURE__*/ proxyCustomElement(class ChartLine extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.data = [];
        this.color = 'var(--color-extended-blue, #0d66f4)';
        this.strokeWidth = 2;
        this.curve = 'monotone';
        this.circleRadius = 4;
        this.actualWidth = 640;
        this.actualHeight = 280;
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
            this.handleLegendClick(e.detail);
        });
    }
    componentDidRender() {
        var _a;
        const legendElement = this.host.querySelector('bds-chart-legend');
        if (!legendElement)
            return;
        const config = this.readAxisConfig();
        const { lines, showLegend, legendDataKey, legendAlign } = config;
        if (!showLegend)
            return;
        const categoryColorMap = legendDataKey
            ? buildCategoryColorMap(this.data, legendDataKey)
            : null;
        const items = categoryColorMap
            ? Array.from(categoryColorMap.entries()).map(([label, color]) => ({ label, color }))
            : lines.map(s => ({ label: s.dataKey, color: s.color }));
        (_a = legendElement.setLegendState) === null || _a === void 0 ? void 0 : _a.call(legendElement, { items, align: legendAlign, activeItem: this.activeLegendItem });
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
    readAxisConfig() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21;
        const parseBoolean = (value) => {
            if (typeof value === 'boolean')
                return value;
            if (typeof value === 'string')
                return value === 'true';
            return !!value;
        };
        const gridElement = this.host.querySelector('bds-chart-grid');
        const showVerticalGrid = parseBoolean((_b = (_a = gridElement === null || gridElement === void 0 ? void 0 : gridElement.getAttribute('vertical')) !== null && _a !== void 0 ? _a : gridElement === null || gridElement === void 0 ? void 0 : gridElement.vertical) !== null && _b !== void 0 ? _b : 'false');
        const showHorizontalGrid = parseBoolean((_d = (_c = gridElement === null || gridElement === void 0 ? void 0 : gridElement.getAttribute('horizontal')) !== null && _c !== void 0 ? _c : gridElement === null || gridElement === void 0 ? void 0 : gridElement.horizontal) !== null && _d !== void 0 ? _d : 'true');
        const gridStrokeStyle = (_f = (_e = gridElement === null || gridElement === void 0 ? void 0 : gridElement.getAttribute('strokeStyle')) !== null && _e !== void 0 ? _e : gridElement === null || gridElement === void 0 ? void 0 : gridElement.strokeStyle) !== null && _f !== void 0 ? _f : 'solid';
        const gridStrokeColor = (_h = (_g = gridElement === null || gridElement === void 0 ? void 0 : gridElement.getAttribute('stroke-color')) !== null && _g !== void 0 ? _g : gridElement === null || gridElement === void 0 ? void 0 : gridElement.strokeColor) !== null && _h !== void 0 ? _h : 'var(--color-border-1)';
        const xAxisElement = this.host.querySelector('bds-x-axis');
        const showXLabels = parseBoolean((_k = (_j = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('show')) !== null && _j !== void 0 ? _j : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.show) !== null && _k !== void 0 ? _k : 'true');
        const xDataKey = (_o = (_m = (_l = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('data-key')) !== null && _l !== void 0 ? _l : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('dataKey')) !== null && _m !== void 0 ? _m : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.dataKey) !== null && _o !== void 0 ? _o : 'label';
        const showXTickLine = parseBoolean((_q = (_p = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('tickLine')) !== null && _p !== void 0 ? _p : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.tickLine) !== null && _q !== void 0 ? _q : 'true');
        const showXAxisLine = parseBoolean((_s = (_r = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('axis-line')) !== null && _r !== void 0 ? _r : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.axisLine) !== null && _s !== void 0 ? _s : 'true');
        const xLineColor = (_u = (_t = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('line-color')) !== null && _t !== void 0 ? _t : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.lineColor) !== null && _u !== void 0 ? _u : 'var(--color-border-1)';
        const xLabelColor = (_w = (_v = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('label-color')) !== null && _v !== void 0 ? _v : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.labelColor) !== null && _w !== void 0 ? _w : 'var(--color-content-default)';
        const xTickMargin = Number((_y = (_x = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('tickMargin')) !== null && _x !== void 0 ? _x : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.tickMargin) !== null && _y !== void 0 ? _y : 10);
        const xTickFormatter = (_z = xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.getAttribute('data-tick-formatter')) !== null && _z !== void 0 ? _z : xAxisElement === null || xAxisElement === void 0 ? void 0 : xAxisElement.tickFormatter;
        const yAxisElement = this.host.querySelector('bds-y-axis');
        const showYAxisLabels = parseBoolean((_1 = (_0 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('show')) !== null && _0 !== void 0 ? _0 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.show) !== null && _1 !== void 0 ? _1 : 'true');
        const yDataKey = (_4 = (_3 = (_2 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('data-key')) !== null && _2 !== void 0 ? _2 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('dataKey')) !== null && _3 !== void 0 ? _3 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.dataKey) !== null && _4 !== void 0 ? _4 : 'value';
        const showYTickLine = parseBoolean((_6 = (_5 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('tickLine')) !== null && _5 !== void 0 ? _5 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.tickLine) !== null && _6 !== void 0 ? _6 : 'true');
        const showYAxisLine = parseBoolean((_8 = (_7 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('axis-line')) !== null && _7 !== void 0 ? _7 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.axisLine) !== null && _8 !== void 0 ? _8 : 'true');
        const yLineColor = (_10 = (_9 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('line-color')) !== null && _9 !== void 0 ? _9 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.lineColor) !== null && _10 !== void 0 ? _10 : 'var(--color-border-1)';
        const yLabelColor = (_12 = (_11 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('label-color')) !== null && _11 !== void 0 ? _11 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.labelColor) !== null && _12 !== void 0 ? _12 : 'var(--color-content-default)';
        const yTickMargin = Number((_14 = (_13 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('tickMargin')) !== null && _13 !== void 0 ? _13 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.tickMargin) !== null && _14 !== void 0 ? _14 : 10);
        const yTickFormatter = (_15 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('data-tick-formatter')) !== null && _15 !== void 0 ? _15 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.tickFormatter;
        const yTickCount = Number((_17 = (_16 = yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.getAttribute('tickCount')) !== null && _16 !== void 0 ? _16 : yAxisElement === null || yAxisElement === void 0 ? void 0 : yAxisElement.tickCount) !== null && _17 !== void 0 ? _17 : 5);
        // Read ALL bds-line children (support multiple lines)
        const lineElements = Array.from(this.host.querySelectorAll('bds-line'));
        const lines = lineElements.map((lineEl) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            return ({
                dataKey: (_a = lineEl.getAttribute('dataKey')) !== null && _a !== void 0 ? _a : lineEl.dataKey,
                color: (_c = (_b = lineEl.getAttribute('color')) !== null && _b !== void 0 ? _b : lineEl.color) !== null && _c !== void 0 ? _c : this.color,
                strokeWidth: Number((_e = (_d = lineEl.getAttribute('strokeWidth')) !== null && _d !== void 0 ? _d : lineEl.strokeWidth) !== null && _e !== void 0 ? _e : this.strokeWidth),
                curve: (_g = (_f = lineEl.getAttribute('curve')) !== null && _f !== void 0 ? _f : lineEl.curve) !== null && _g !== void 0 ? _g : this.curve,
                radius: Number((_j = (_h = lineEl.getAttribute('radius')) !== null && _h !== void 0 ? _h : lineEl.radius) !== null && _j !== void 0 ? _j : this.circleRadius),
                dot: ((_l = (_k = lineEl.getAttribute('data-dot')) !== null && _k !== void 0 ? _k : lineEl.getAttribute('dot')) !== null && _l !== void 0 ? _l : 'true') !== 'false',
            });
        });
        const legendElement = this.host.querySelector('bds-chart-legend');
        const showLegend = !!legendElement;
        const legendDataKey = (_19 = (_18 = legendElement === null || legendElement === void 0 ? void 0 : legendElement.getAttribute('dataKey')) !== null && _18 !== void 0 ? _18 : legendElement === null || legendElement === void 0 ? void 0 : legendElement.dataKey) !== null && _19 !== void 0 ? _19 : undefined;
        const legendAlign = ((_21 = (_20 = legendElement === null || legendElement === void 0 ? void 0 : legendElement.getAttribute('align')) !== null && _20 !== void 0 ? _20 : legendElement === null || legendElement === void 0 ? void 0 : legendElement.align) !== null && _21 !== void 0 ? _21 : 'center');
        return {
            showVerticalGrid, showHorizontalGrid, gridStrokeStyle, gridStrokeColor,
            showXLabels, showXTickLine, showXAxisLine, xDataKey, xLineColor, xLabelColor, xTickMargin, xTickFormatter,
            showYAxisLabels, showYTickLine, showYAxisLine, yDataKey, yLineColor, yLabelColor, yTickMargin, yTickFormatter, yTickCount,
            lines: lines.length > 0 ? lines : [{ dataKey: yDataKey, color: this.color, strokeWidth: this.strokeWidth, curve: this.curve, radius: this.circleRadius, dot: true }],
            showLegend, legendDataKey, legendAlign,
        };
    }
    computeMargin(config) {
        const { showXLabels, showXTickLine, xTickMargin, showYAxisLabels, showYTickLine, yTickMargin } = config;
        const bottom = showXLabels
            ? (showXTickLine ? TICK_LENGTH : 0) + xTickMargin + FONT_SIZE + FONT_BASELINE
            : 8;
        const left = showYAxisLabels
            ? 20 + (showYTickLine ? TICK_LENGTH : 0) + yTickMargin
            : 8;
        return { top: 20, right: 20, bottom, left };
    }
    handleLegendClick(label) {
        this.activeLegendItem = this.activeLegendItem === label ? null : label;
    }
    prepareLine(margin, xKey, yKey, tickCount = 5) {
        return calculateLineChartLayout(this.data, xKey, yKey, this.actualWidth, this.actualHeight, this.curve, margin, tickCount);
    }
    emitLeave() {
        this.hoveredIndex = -1;
        this.host.dispatchEvent(new CustomEvent('bdsChartLeave', { bubbles: true, composed: true }));
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
        const x = event.clientX - rect.left;
        const config = this.readAxisConfig();
        const margin = this.computeMargin(config);
        const { dots } = this.prepareLine(margin, config.xDataKey, config.yDataKey, config.yTickCount);
        if (dots.length === 0)
            return;
        // Find the closest dot by X position
        let closestIndex = 0;
        let closestDistance = Infinity;
        dots.forEach((dot, index) => {
            const distance = Math.abs(x - (margin.left + dot.x));
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
        this.hoveredIndex = closestIndex;
        const datum = dots[closestIndex].datum;
        const tooltipElement = this.host.querySelector('bds-chart-tooltip');
        if (tooltipElement) {
            const tooltipNameKey = (_a = tooltipElement === null || tooltipElement === void 0 ? void 0 : tooltipElement.getAttribute('nameKey')) !== null && _a !== void 0 ? _a : tooltipElement === null || tooltipElement === void 0 ? void 0 : tooltipElement.nameKey;
            const keys = tooltipNameKey
                ? tooltipNameKey.split(',').map((k) => k.trim())
                : config.lines.map(l => l.dataKey);
            // Build a color map: dataKey → line color
            const colorMap = new Map(config.lines.map(l => [l.dataKey, l.color]));
            const entries = keys.map((key) => {
                var _a, _b;
                return ({
                    color: (_a = colorMap.get(key)) !== null && _a !== void 0 ? _a : this.color,
                    name: key,
                    value: (_b = datum[key]) !== null && _b !== void 0 ? _b : '',
                });
            });
            tooltipElement.setTooltipState({
                visible: true,
                x: event.clientX,
                y: event.clientY,
                label: datum[config.xDataKey],
                entries,
            });
        }
    }
    render() {
        // Read all child config FIRST so margin can be derived from it
        const config = this.readAxisConfig();
        const { showVerticalGrid, showHorizontalGrid, gridStrokeStyle, gridStrokeColor, showXLabels, showXTickLine, showXAxisLine, xDataKey, xLineColor, xLabelColor, xTickMargin, xTickFormatter, showYAxisLabels, showYTickLine, showYAxisLine, yLineColor, yLabelColor, yTickMargin, yTickFormatter, yTickCount, lines, showLegend, legendDataKey, } = config;
        const margin = this.computeMargin(config);
        const categoryColorMap = (showLegend && legendDataKey)
            ? buildCategoryColorMap(this.data, legendDataKey)
            : null;
        // Prepare layout for all lines
        const lineLayouts = lines.map(line => calculateLineChartLayout(this.data, xDataKey, line.dataKey, this.actualWidth, this.actualHeight, line.curve, margin, yTickCount));
        // Use the first line's labels (X/Y labels are the same for all lines since same X-axis and Y-scale)
        const { xLabels, yLabels, yGridLines, xGridLines } = lineLayouts[0] || { xLabels: [], yLabels: [], yGridLines: [], xGridLines: [] };
        const getStrokeDasharray = (style) => {
            switch (style) {
                case 'dashed': return '4,4';
                case 'dotted': return '1,3';
                default: return '';
            }
        };
        return (h(Host, null, h("svg", { width: this.actualWidth, height: this.actualHeight, class: "chart-line", "aria-hidden": "true" }, showHorizontalGrid && (h("g", { class: "chart-line__grid-y", "stroke-dasharray": getStrokeDasharray(gridStrokeStyle) }, yGridLines.map((y, idx) => (h("line", { key: `grid-y-${idx}`, x1: margin.left, y1: margin.top + y, x2: this.actualWidth - margin.right, y2: margin.top + y, stroke: gridStrokeColor, "stroke-width": "1" }))))), showVerticalGrid && (h("g", { class: "chart-line__grid-x", "stroke-dasharray": getStrokeDasharray(gridStrokeStyle) }, xGridLines.map((gridLine, idx) => (h("line", { key: `grid-x-${idx}`, x1: margin.left + gridLine.x, y1: margin.top, x2: margin.left + gridLine.x, y2: this.actualHeight - margin.bottom, stroke: gridStrokeColor, "stroke-width": "1" }))))), h("g", { transform: `translate(${margin.left}, ${margin.top})` }, lineLayouts.map((layout, lineIdx) => {
            const lineKey = lines[lineIdx].dataKey;
            const lineOpacity = this.activeLegendItem && !legendDataKey
                ? (this.activeLegendItem === lineKey ? 1 : 0.2)
                : 1;
            return (h("g", { key: `line-group-${lineIdx}`, style: { opacity: String(lineOpacity), transition: 'opacity 0.2s ease' } }, h("path", { class: "chart-line__path", d: layout.path, fill: "none", stroke: lines[lineIdx].color, "stroke-width": lines[lineIdx].strokeWidth }), lines[lineIdx].dot && layout.dots.map((dot, pointIdx) => {
                var _a;
                const dotOpacity = this.activeLegendItem && legendDataKey
                    ? (this.activeLegendItem === String(dot.datum[legendDataKey]) ? 1 : 0.2)
                    : 1;
                return (h("circle", { class: "chart-line__point", key: `point-${lineIdx}-${pointIdx}`, cx: dot.x, cy: dot.y, r: lines[lineIdx].radius, fill: categoryColorMap && legendDataKey
                        ? ((_a = categoryColorMap.get(String(dot.datum[legendDataKey]))) !== null && _a !== void 0 ? _a : lines[lineIdx].color)
                        : lines[lineIdx].color, style: { pointerEvents: 'none', opacity: String(dotOpacity), transition: 'opacity 0.2s ease' } }));
            })));
        }), lineLayouts.length > 0 && (h("line", { key: "hover-line", class: "chart-line__hover-line", x1: this.hoveredIndex >= 0 && lineLayouts[0].dots[this.hoveredIndex] ? lineLayouts[0].dots[this.hoveredIndex].x : 0, y1: 0, x2: this.hoveredIndex >= 0 && lineLayouts[0].dots[this.hoveredIndex] ? lineLayouts[0].dots[this.hoveredIndex].x : 0, y2: this.actualHeight - margin.top - margin.bottom, style: { stroke: 'var(--chart-hover-line-color)', opacity: this.hoveredIndex >= 0 ? '1' : '0', pointerEvents: 'none' }, "stroke-width": "1", "stroke-dasharray": "4,4" })), this.hoveredIndex >= 0 && lineLayouts.map((layout, lineIdx) => {
            const dot = layout.dots[this.hoveredIndex];
            if (!dot)
                return null;
            return (h("circle", { key: `hover-dot-${lineIdx}`, cx: dot.x, cy: dot.y, r: lines[lineIdx].radius, fill: lines[lineIdx].color, style: { stroke: 'var(--chart-hover-dot-stroke)', pointerEvents: 'none' }, "stroke-width": "2" }));
        })), showXAxisLine && (h("line", { class: "chart-line__x-axis-line", x1: margin.left, y1: this.actualHeight - margin.bottom, x2: this.actualWidth - margin.right, y2: this.actualHeight - margin.bottom, stroke: xLineColor, "stroke-width": "1" })), showYAxisLine && (h("line", { class: "chart-line__y-axis-line", x1: margin.left, y1: margin.top, x2: margin.left, y2: this.actualHeight - margin.bottom, stroke: yLineColor, "stroke-width": "1" })), showXLabels && renderXAxisLabels({
            xLabels,
            margin,
            actualHeight: this.actualHeight,
            showTickLine: showXTickLine,
            tickMargin: xTickMargin,
            tickFormatter: xTickFormatter,
            lineColor: xLineColor,
            labelColor: xLabelColor,
            hoveredIndex: this.hoveredIndex,
        }), showYAxisLabels && renderYAxisLabels({
            yLabels,
            margin,
            showTickLine: showYTickLine,
            tickMargin: yTickMargin,
            tickFormatter: yTickFormatter,
            lineColor: yLineColor,
            labelColor: yLabelColor,
        }), h("rect", { key: "chart-overlay", x: 0, y: 0, width: this.actualWidth, height: this.actualHeight, fill: "transparent", style: { cursor: 'default' }, onMouseMove: (e) => this.handleCanvasMouseMove(e), onMouseLeave: () => this.emitLeave() })), h("slot", null)));
    }
    get host() { return this; }
    static get style() { return chartLineCss; }
}, [1, "bds-chart-line", {
        "data": [1],
        "color": [1],
        "strokeWidth": [2, "stroke-width"],
        "curve": [1],
        "circleRadius": [2, "circle-radius"],
        "actualWidth": [32],
        "actualHeight": [32],
        "hoveredIndex": [32],
        "activeLegendItem": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-chart-line"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-chart-line":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ChartLine);
            }
            break;
    } });
}

const BdsChartLine = ChartLine;
const defineCustomElement = defineCustomElement$1;

export { BdsChartLine, defineCustomElement };
//# sourceMappingURL=bds-chart-line.js.map

//# sourceMappingURL=bds-chart-line.js.map