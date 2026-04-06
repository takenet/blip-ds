import { h } from './index-BALoTlPi.js';
import { f as formatTick } from './chart-math-CLjGJy6L.js';

const TICK_LENGTH = 6;
/**
 * Renders standard bottom X-axis (category labels).
 * Uses `.chart__x-label` CSS class — styled by chart-x-axis.scss.
 */
function renderXAxisLabels(params) {
    const { xLabels, margin, actualHeight, showTickLine, tickMargin, tickFormatter, lineColor, labelColor, hoveredIndex = -1 } = params;
    return (h("g", { class: "chart__x-axis", style: { pointerEvents: 'none' } }, xLabels.map((label, idx) => (h("g", { key: `x-axis-${idx}` },
        showTickLine && (h("line", { x1: margin.left + label.x, y1: actualHeight - margin.bottom, x2: margin.left + label.x, y2: actualHeight - margin.bottom + TICK_LENGTH, stroke: lineColor, "stroke-width": "1" })),
        h("text", { "text-anchor": "middle", fill: labelColor, "font-weight": idx === hoveredIndex ? 'bold' : 'normal', x: margin.left + label.x, y: actualHeight - margin.bottom + TICK_LENGTH + tickMargin, class: "chart__x-label" }, formatTick(label.label, tickFormatter)))))));
}
/**
 * Renders standard left Y-axis (value or category labels).
 * Uses `.chart__y-label` CSS class — styled by chart-y-axis.scss.
 */
function renderYAxisLabels(params) {
    const { yLabels, margin, showTickLine, tickMargin, tickFormatter, lineColor, labelColor } = params;
    return (h("g", { class: "chart__y-axis", style: { pointerEvents: 'none' } }, yLabels.map((label, idx) => (h("g", { key: `y-axis-${idx}` },
        showTickLine && (h("line", { x1: margin.left - TICK_LENGTH, y1: margin.top + label.y, x2: margin.left, y2: margin.top + label.y, stroke: lineColor, "stroke-width": "1" })),
        h("text", { "text-anchor": "end", fill: labelColor, x: margin.left - (showTickLine ? TICK_LENGTH : 0) - tickMargin, y: margin.top + label.y + 4, class: "chart__y-label" }, formatTick(label.label, tickFormatter)))))));
}

export { TICK_LENGTH as T, renderYAxisLabels as a, renderXAxisLabels as r };
//# sourceMappingURL=chart-axis-render-CnW93DNm.js.map

//# sourceMappingURL=chart-axis-render-CnW93DNm.js.map