import { Host, h } from "@stencil/core";
import { calculateBarChartLayout, formatTick, buildCategoryColorMap } from "../utils/chart-math";
import { renderXAxisLabels, renderYAxisLabels } from "../utils/chart-axis-render";
const TICK_LENGTH = 6;
const FONT_SIZE = 12;
const FONT_BASELINE = 4;
export class ChartBar {
    constructor() {
        this.data = [];
        this.color = 'var(--color-extended-green, #05b96c)';
        this.barRadius = 6;
        this.vertical = false;
        this.align = 'left';
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
        const { series, showLegend, legendDataKey, legendAlign } = config;
        if (!showLegend)
            return;
        const categoryColorMap = legendDataKey
            ? buildCategoryColorMap(this.data, legendDataKey)
            : null;
        const items = categoryColorMap
            ? Array.from(categoryColorMap.entries()).map(([label, color]) => ({ label, color }))
            : series.map(s => ({ label: s.dataKey, color: s.color }));
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
        const barElements = Array.from(this.host.querySelectorAll('bds-bar'));
        const series = barElements.length > 0
            ? barElements.map(el => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                return ({
                    dataKey: (_c = (_b = (_a = el.getAttribute('data-data-key')) !== null && _a !== void 0 ? _a : el.getAttribute('dataKey')) !== null && _b !== void 0 ? _b : el.dataKey) !== null && _c !== void 0 ? _c : yDataKey,
                    color: (_f = (_e = (_d = el.getAttribute('data-color')) !== null && _d !== void 0 ? _d : el.getAttribute('color')) !== null && _e !== void 0 ? _e : el.color) !== null && _f !== void 0 ? _f : this.color,
                    radius: Number((_j = (_h = (_g = el.getAttribute('data-radius')) !== null && _g !== void 0 ? _g : el.getAttribute('radius')) !== null && _h !== void 0 ? _h : el.radius) !== null && _j !== void 0 ? _j : this.barRadius),
                    stackId: (_m = (_l = (_k = el.getAttribute('data-stack-id')) !== null && _k !== void 0 ? _k : el.getAttribute('stackId')) !== null && _l !== void 0 ? _l : el.stackId) !== null && _m !== void 0 ? _m : undefined,
                });
            })
            : [{ dataKey: yDataKey, color: this.color, radius: this.barRadius, stackId: undefined }];
        const legendElement = this.host.querySelector('bds-chart-legend');
        const showLegend = !!legendElement;
        const legendDataKey = (_19 = (_18 = legendElement === null || legendElement === void 0 ? void 0 : legendElement.getAttribute('dataKey')) !== null && _18 !== void 0 ? _18 : legendElement === null || legendElement === void 0 ? void 0 : legendElement.dataKey) !== null && _19 !== void 0 ? _19 : undefined;
        const legendAlign = ((_21 = (_20 = legendElement === null || legendElement === void 0 ? void 0 : legendElement.getAttribute('align')) !== null && _20 !== void 0 ? _20 : legendElement === null || legendElement === void 0 ? void 0 : legendElement.align) !== null && _21 !== void 0 ? _21 : 'center');
        return {
            showVerticalGrid, showHorizontalGrid, gridStrokeStyle, gridStrokeColor,
            showXLabels, showXTickLine, showXAxisLine, xDataKey, xLineColor, xLabelColor, xTickMargin, xTickFormatter,
            showYAxisLabels, showYTickLine, showYAxisLine, yDataKey, yLineColor, yLabelColor, yTickMargin, yTickFormatter, yTickCount,
            series,
            showLegend, legendDataKey, legendAlign,
        };
    }
    computeMargin(config) {
        const { showXLabels, showXTickLine, xTickMargin, showYAxisLabels, showYTickLine, yTickMargin } = config;
        if (this.vertical) {
            // Horizontal bar chart: category labels on left, value ticks at bottom
            const left = showXLabels ? 80 : 8;
            const bottom = showYAxisLabels
                ? (showYTickLine ? TICK_LENGTH : 0) + yTickMargin + FONT_SIZE + FONT_BASELINE
                : 8;
            return { top: 20, right: 20, bottom, left };
        }
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
    prepareBars(series, margin, xKey, tickCount = 5) {
        return calculateBarChartLayout(this.data, xKey, series, this.actualWidth, this.actualHeight, margin, tickCount, this.vertical, this.align);
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
        const svg = event.currentTarget;
        if (!svg)
            return;
        const rect = svg.getBoundingClientRect();
        const config = this.readAxisConfig();
        const margin = this.computeMargin(config);
        const { groups } = this.prepareBars(config.series, margin, config.xDataKey, config.yTickCount);
        if (groups.length === 0)
            return;
        let closestIndex = 0;
        let closestDistance = Infinity;
        if (this.vertical) {
            const y = event.clientY - rect.top;
            groups.forEach((group, index) => {
                const distance = Math.abs(y - (margin.top + group.centerY));
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
        }
        else {
            const x = event.clientX - rect.left;
            groups.forEach((group, index) => {
                const distance = Math.abs(x - (margin.left + group.centerX));
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
        }
        this.hoveredIndex = closestIndex;
        const datum = groups[closestIndex].datum;
        const tooltipElement = this.host.querySelector('bds-chart-tooltip');
        if (tooltipElement) {
            const entries = config.series.map(s => {
                var _a;
                return ({
                    color: s.color,
                    name: s.dataKey,
                    value: (_a = datum[s.dataKey]) !== null && _a !== void 0 ? _a : '',
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
        const config = this.readAxisConfig();
        const { showVerticalGrid, showHorizontalGrid, gridStrokeStyle, gridStrokeColor, showXLabels, showXTickLine, showXAxisLine, xDataKey, xLineColor, xLabelColor, xTickMargin, xTickFormatter, showYAxisLabels, showYTickLine, showYAxisLine, yLineColor, yLabelColor, yTickMargin, yTickFormatter, yTickCount, series, showLegend, legendDataKey, } = config;
        const margin = this.computeMargin(config);
        const { bars, groups: _groups, xLabels, yLabels, yGridLines, xGridLines } = this.prepareBars(series, margin, xDataKey, yTickCount);
        const seriesMap = new Map(series.map(s => [s.dataKey, s]));
        const categoryColorMap = (showLegend && legendDataKey)
            ? buildCategoryColorMap(this.data, legendDataKey)
            : null;
        const getStrokeDasharray = (style) => {
            switch (style) {
                case 'dashed': return '4,4';
                case 'dotted': return '1,3';
                default: return '';
            }
        };
        return (h(Host, null, h("svg", { width: this.actualWidth, height: this.actualHeight, class: "chart-bar", "aria-hidden": "true" }, this.vertical && showVerticalGrid && (h("g", { class: "chart-bar__grid-x", "stroke-dasharray": getStrokeDasharray(gridStrokeStyle) }, xLabels.map((label, idx) => (h("line", { key: `grid-cat-${idx}`, x1: margin.left, y1: margin.top + label.x, x2: this.actualWidth - margin.right, y2: margin.top + label.x, stroke: gridStrokeColor, "stroke-width": "1" }))))), this.vertical && showHorizontalGrid && (h("g", { class: "chart-bar__grid-y", "stroke-dasharray": getStrokeDasharray(gridStrokeStyle) }, yLabels.map((label, idx) => (h("line", { key: `grid-val-${idx}`, x1: margin.left + label.y, y1: margin.top, x2: margin.left + label.y, y2: this.actualHeight - margin.bottom, stroke: gridStrokeColor, "stroke-width": "1" }))))), !this.vertical && showHorizontalGrid && (h("g", { class: "chart-bar__grid-y", "stroke-dasharray": getStrokeDasharray(gridStrokeStyle) }, yGridLines.map((y, idx) => (h("line", { key: `grid-y-${idx}`, x1: margin.left, y1: margin.top + y, x2: this.actualWidth - margin.right, y2: margin.top + y, stroke: gridStrokeColor, "stroke-width": "1" }))))), !this.vertical && showVerticalGrid && (h("g", { class: "chart-bar__grid-x", "stroke-dasharray": getStrokeDasharray(gridStrokeStyle) }, xGridLines.map((gridLine, idx) => (h("line", { key: `grid-x-${idx}`, x1: margin.left + gridLine.x, y1: margin.top, x2: margin.left + gridLine.x, y2: this.actualHeight - margin.bottom, stroke: gridStrokeColor, "stroke-width": "1" }))))), h("g", { transform: `translate(${margin.left}, ${margin.top})` }, h("g", { class: "chart-bar__bars" }, bars.map((bar, index) => {
            var _a, _b;
            const sc = (_a = seriesMap.get(bar.dataKey)) !== null && _a !== void 0 ? _a : series[0];
            const barOpacity = this.activeLegendItem
                ? (legendDataKey
                    ? (this.activeLegendItem === String(bar.datum[legendDataKey]) ? 1 : 0.2)
                    : (this.activeLegendItem === bar.dataKey ? 1 : 0.2))
                : 1;
            return (h("rect", { key: `bar-${index}`, class: "chart-bar__rect", x: bar.x, y: bar.y, width: Math.max(bar.width, 0), height: Math.max(bar.height, 0), rx: sc.radius, fill: categoryColorMap && legendDataKey
                    ? ((_b = categoryColorMap.get(String(bar.datum[legendDataKey]))) !== null && _b !== void 0 ? _b : sc.color)
                    : sc.color, style: { pointerEvents: 'none', opacity: String(barOpacity), transition: 'opacity 0.2s ease' } }));
        })), this.hoveredIndex >= 0 && bars
            .filter(b => b.groupIndex === this.hoveredIndex)
            .map((b, hi) => {
            var _a;
            const sc = (_a = seriesMap.get(b.dataKey)) !== null && _a !== void 0 ? _a : series[0];
            return (h("rect", { key: `hover-bg-${hi}`, class: "chart-bar__hover-bg", x: b.x, y: b.y, width: Math.max(b.width, 0), height: Math.max(b.height, 0), rx: sc.radius, style: { fill: 'var(--chart-hover-highlight-color)', pointerEvents: 'none' } }));
        })), showXAxisLine && (h("line", { class: "chart-bar__x-axis-line", x1: margin.left, y1: this.vertical ? margin.top : this.actualHeight - margin.bottom, x2: this.vertical ? margin.left : this.actualWidth - margin.right, y2: this.actualHeight - margin.bottom, stroke: xLineColor, "stroke-width": "1" })), showYAxisLine && (h("line", { class: "chart-bar__y-axis-line", x1: margin.left, y1: this.vertical ? this.actualHeight - margin.bottom : margin.top, x2: this.vertical ? this.actualWidth - margin.right : margin.left, y2: this.actualHeight - margin.bottom, stroke: yLineColor, "stroke-width": "1" })), showXLabels && (this.vertical ? (
        // Vertical mode: category labels on left — unique layout, rendered inline
        h("g", { class: "chart-bar__x-axis", style: { pointerEvents: 'none' } }, xLabels.map((label, idx) => (h("text", { key: `x-axis-${idx}`, "text-anchor": "end", fill: xLabelColor, "font-weight": idx === this.hoveredIndex ? 'bold' : 'normal', x: margin.left - 8, y: margin.top + label.x + 4, class: "chart__x-label" }, formatTick(label.label, xTickFormatter)))))) : renderXAxisLabels({
            xLabels,
            margin,
            actualHeight: this.actualHeight,
            showTickLine: showXTickLine,
            tickMargin: xTickMargin,
            tickFormatter: xTickFormatter,
            lineColor: xLineColor,
            labelColor: xLabelColor,
            hoveredIndex: this.hoveredIndex,
        })), showYAxisLabels && (this.vertical ? (
        // Vertical mode: value ticks at bottom — unique layout, rendered inline
        h("g", { class: "chart-bar__y-axis", style: { pointerEvents: 'none' } }, yLabels.map((label, idx) => (h("g", { key: `y-axis-${idx}` }, showYTickLine && (h("line", { x1: margin.left + label.y, y1: this.actualHeight - margin.bottom, x2: margin.left + label.y, y2: this.actualHeight - margin.bottom + 6, stroke: yLineColor, "stroke-width": "1" })), h("text", { "text-anchor": "middle", fill: yLabelColor, x: margin.left + label.y, y: this.actualHeight - margin.bottom + 6 + yTickMargin, class: "chart__y-label" }, formatTick(label.label, yTickFormatter))))))) : renderYAxisLabels({
            yLabels,
            margin,
            showTickLine: showYTickLine,
            tickMargin: yTickMargin,
            tickFormatter: yTickFormatter,
            lineColor: yLineColor,
            labelColor: yLabelColor,
        })), h("rect", { key: "chart-overlay", x: 0, y: 0, width: this.actualWidth, height: this.actualHeight, fill: "transparent", style: { cursor: 'default' }, onMouseMove: (e) => this.handleCanvasMouseMove(e), onMouseLeave: () => this.emitLeave() })), h("slot", null)));
    }
    static get is() { return "bds-chart-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["chart-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["chart-bar.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "string",
                "attribute": "data",
                "mutable": false,
                "complexType": {
                    "original": "ChartDatum[] | string",
                    "resolved": "ChartDatum[] | string",
                    "references": {
                        "ChartDatum": {
                            "location": "import",
                            "path": "../utils/chart.types",
                            "id": "src/components/chart/utils/chart.types.ts::ChartDatum"
                        }
                    }
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
                "defaultValue": "[]"
            },
            "color": {
                "type": "string",
                "attribute": "color",
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'var(--color-extended-green, #05b96c)'"
            },
            "barRadius": {
                "type": "number",
                "attribute": "bar-radius",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "6"
            },
            "vertical": {
                "type": "boolean",
                "attribute": "vertical",
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
            "align": {
                "type": "string",
                "attribute": "align",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'center' | 'right'",
                    "resolved": "\"center\" | \"left\" | \"right\"",
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
                "defaultValue": "'left'"
            }
        };
    }
    static get states() {
        return {
            "actualWidth": {},
            "actualHeight": {},
            "hoveredIndex": {},
            "activeLegendItem": {}
        };
    }
    static get elementRef() { return "host"; }
}
//# sourceMappingURL=chart-bar.js.map
