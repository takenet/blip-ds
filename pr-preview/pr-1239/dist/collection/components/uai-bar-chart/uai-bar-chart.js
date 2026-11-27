import { Host, h } from "@stencil/core";
import { warnLegacyValue } from "../../utils/deprecation";
const TAG = 'uai-bar-chart';
const FORMATS = ['number', 'currency', 'percent'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const TICK_COUNT = 5;
const GRID_VIEWBOX_WIDTH = 400;
const GRID_VIEWBOX_HEIGHT = 200;
const LOCALE_MAP = {
    pt_BR: 'pt-BR',
    en_US: 'en-US',
    es_ES: 'es-ES',
};
const TEXTS = {
    pt_BR: {
        empty: 'Sem dados para exibir',
        chartLabel: 'Gráfico de barras horizontais',
    },
    en_US: {
        empty: 'No data available',
        chartLabel: 'Horizontal bar chart',
    },
    es_ES: {
        empty: 'Sin datos para mostrar',
        chartLabel: 'Gráfico de barras horizontales',
    },
};
const parseBarItems = (input) => {
    let raw = input;
    if (typeof input === 'string') {
        const trimmed = input.trim();
        if (!trimmed)
            return [];
        try {
            raw = JSON.parse(trimmed);
        }
        catch (_a) {
            return [];
        }
    }
    if (!Array.isArray(raw))
        return [];
    return raw
        .filter((entry) => Boolean(entry) && typeof entry === 'object')
        .map((entry) => {
        var _a;
        const numeric = Number(entry.value);
        return {
            label: String((_a = entry.label) !== null && _a !== void 0 ? _a : ''),
            value: Number.isFinite(numeric) ? Math.max(0, numeric) : 0,
            formattedValue: typeof entry.formattedValue === 'string' ? entry.formattedValue : undefined,
        };
    });
};
const computeNiceDomainMax = (maxDataValue, explicitMax) => {
    var _a;
    if (typeof explicitMax === 'number' && Number.isFinite(explicitMax) && explicitMax > 0) {
        return explicitMax;
    }
    if (!Number.isFinite(maxDataValue) || maxDataValue <= 0) {
        return 100;
    }
    const intervals = TICK_COUNT - 1;
    const rawStep = maxDataValue / intervals;
    const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const normalized = rawStep / magnitude;
    const niceSteps = [1, 2, 2.5, 5, 10];
    const chosenStep = ((_a = niceSteps.find((step) => step >= normalized)) !== null && _a !== void 0 ? _a : 10) * magnitude;
    return chosenStep * intervals;
};
const extractCurrencySymbol = (locale, currency) => {
    var _a, _b;
    try {
        const parts = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
            currencyDisplay: 'symbol',
            maximumFractionDigits: 0,
        }).formatToParts(0);
        return (_b = (_a = parts.find((part) => part.type === 'currency')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : currency;
    }
    catch (_c) {
        return currency;
    }
};
const formatCompactNumber = (value, locale) => {
    const abs = Math.abs(value);
    const formatUnit = (scaled) => new Intl.NumberFormat(locale, {
        maximumFractionDigits: Number.isInteger(scaled) ? 0 : 1,
    }).format(scaled);
    if (abs >= 1000000000)
        return `${formatUnit(value / 1000000000)}B`;
    if (abs >= 1000000)
        return `${formatUnit(value / 1000000)}M`;
    if (abs >= 1000)
        return `${formatUnit(value / 1000)}k`;
    return formatUnit(value);
};
const formatTickValue = (value, format, locale, currency) => {
    if (value === 0) {
        return format === 'percent' ? '0%' : '0';
    }
    const compact = formatCompactNumber(value, locale);
    if (format === 'percent')
        return `${compact}%`;
    if (format === 'currency') {
        const symbol = extractCurrencySymbol(locale, currency);
        return `${symbol}${compact}`;
    }
    return compact;
};
const formatFullValue = (value, format, locale, currency) => {
    if (format === 'percent') {
        const formatted = new Intl.NumberFormat(locale, {
            maximumFractionDigits: Number.isInteger(value) ? 0 : 2,
        }).format(value);
        return `${formatted}%`;
    }
    if (format === 'currency') {
        try {
            return new Intl.NumberFormat(locale, {
                style: 'currency',
                currency,
                maximumFractionDigits: Number.isInteger(value) ? 0 : 2,
            }).format(value);
        }
        catch (_a) {
            return `${currency} ${value}`;
        }
    }
    return new Intl.NumberFormat(locale, {
        maximumFractionDigits: Number.isInteger(value) ? 0 : 2,
    }).format(value);
};
/**
 * Responsive horizontal bar chart for comparing ranked categories against a shared numeric domain.
 * Use inside analytics cards and panels; pair with `seriesLabel` and `format` so axis ticks and keyboard tooltips remain clear;
 * avoid overcrowding with excessive categories when a paginated table is more appropriate.
 *
 * @part chart - The outer chart container.
 * @part bars - The list container holding interactive bar items.
 * @part tooltip - The floating inspection tooltip shown on hover or keyboard focus.
 * @part legend - The bottom series legend container.
 * @part empty - The empty state message when `data` has no items.
 */
export class UaiBarChart {
    constructor() {
        this.activeIndex = null;
        /** Category items as an array of `{ label, value, formattedValue? }` or a JSON-encoded array string. */
        this.data = [];
        /** Series name displayed in the bottom legend (for example, `ROI`). */
        this.seriesLabel = '';
        /** Controls whether the bottom legend is shown when `seriesLabel` is provided. */
        this.showLegend = true;
        /** Value formatting mode applied to horizontal axis ticks and tooltips (`number`, `currency`, or `percent`). */
        this.format = 'number';
        /** ISO 4217 currency code used when `format` is `currency`. */
        this.currency = 'BRL';
        /** Locale used for number formatting and fallback copy (`pt_BR`, `en_US`, or `es_ES`). */
        this.language = 'pt_BR';
        /** Optional test identifier placed on the chart container. */
        this.dataTest = null;
        this.handleBarBlur = (event) => {
            var _a;
            const nextTarget = event.relatedTarget;
            if (nextTarget && ((_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.contains(nextTarget))) {
                return;
            }
            this.clearActiveBar();
        };
    }
    resolveFormat() {
        const match = FORMATS.find((candidate) => candidate === this.format);
        if (match)
            return match;
        warnLegacyValue(TAG, 'format', this.format, 'number');
        return 'number';
    }
    resolveLanguage() {
        if (this.language === 'es_MX')
            return 'es_ES';
        const match = LANGUAGES.find((candidate) => candidate === this.language);
        if (match)
            return match;
        warnLegacyValue(TAG, 'language', this.language, 'pt_BR');
        return 'pt_BR';
    }
    activateBar(index, item) {
        if (this.activeIndex === index)
            return;
        this.activeIndex = index;
        this.uaiBarHover.emit(item);
    }
    clearActiveBar() {
        if (this.activeIndex === null)
            return;
        this.activeIndex = null;
        this.uaiBarHover.emit(null);
    }
    handleBarKeyDown(event, index, items) {
        var _a, _b, _c, _d;
        if (event.key === 'Escape') {
            if (this.activeIndex !== null) {
                event.preventDefault();
                event.stopPropagation();
                this.clearActiveBar();
            }
            return;
        }
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.uaiBarClick.emit(items[index]);
            return;
        }
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Home' || event.key === 'End') {
            event.preventDefault();
            let nextIndex = index;
            if (event.key === 'ArrowDown')
                nextIndex = Math.min(items.length - 1, index + 1);
            else if (event.key === 'ArrowUp')
                nextIndex = Math.max(0, index - 1);
            else if (event.key === 'Home')
                nextIndex = 0;
            else if (event.key === 'End')
                nextIndex = items.length - 1;
            const bars = Array.from((_b = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.bar-chart__bar-item')) !== null && _b !== void 0 ? _b : []);
            (_d = (_c = bars[nextIndex]) === null || _c === void 0 ? void 0 : _c.focus) === null || _d === void 0 ? void 0 : _d.call(_c);
            this.activateBar(nextIndex, items[nextIndex]);
        }
    }
    render() {
        const items = parseBarItems(this.data);
        const format = this.resolveFormat();
        const language = this.resolveLanguage();
        const locale = LOCALE_MAP[language];
        const texts = TEXTS[language];
        const currencyCode = (this.currency || 'BRL').trim() || 'BRL';
        if (items.length === 0) {
            return (h(Host, null, h("div", { class: "bar-chart bar-chart--empty", part: "chart", "data-test": this.dataTest }, h("p", { class: "bar-chart__empty", part: "empty" }, (this.emptyText || '').trim() || texts.empty))));
        }
        const rawMax = Math.max(0, ...items.map((item) => item.value));
        const domainMax = computeNiceDomainMax(rawMax, this.maxValue);
        const ticks = Array.from({ length: TICK_COUNT }, (_, idx) => (domainMax * idx) / (TICK_COUNT - 1));
        const legendText = (this.seriesLabel || '').trim();
        const shouldRenderLegend = Boolean(this.showLegend && legendText);
        const formattedValues = items.map((item) => { var _a; return (_a = item.formattedValue) !== null && _a !== void 0 ? _a : formatFullValue(item.value, format, locale, currencyCode); });
        const percentages = items.map((item) => domainMax > 0 ? Math.min(100, Math.max(0, (item.value / domainMax) * 100)) : 0);
        const activeItem = this.activeIndex !== null ? items[this.activeIndex] : null;
        const activeFormatted = this.activeIndex !== null ? formattedValues[this.activeIndex] : '';
        const activePct = this.activeIndex !== null ? percentages[this.activeIndex] : 0;
        const activeRowTopPct = this.activeIndex !== null ? ((this.activeIndex + 0.5) / items.length) * 100 : 0;
        const tooltipLeftPct = Math.min(85, Math.max(15, activePct));
        return (h(Host, null, h("div", { class: "bar-chart", part: "chart", role: "region", "aria-label": legendText ? `${texts.chartLabel}: ${legendText}` : texts.chartLabel, "data-test": this.dataTest }, h("div", { class: "bar-chart__layout" }, h("div", { class: "bar-chart__categories", "aria-hidden": "true" }, items.map((item, idx) => (h("div", { key: `${item.label}-${idx}`, class: "bar-chart__category", onMouseEnter: () => this.activateBar(idx, item), onMouseLeave: () => this.clearActiveBar(), onClick: () => this.uaiBarClick.emit(item) }, item.label)))), h("div", { class: "bar-chart__plot" }, h("svg", { class: "bar-chart__grid", viewBox: `0 0 ${GRID_VIEWBOX_WIDTH} ${GRID_VIEWBOX_HEIGHT}`, preserveAspectRatio: "none", "aria-hidden": "true" }, ticks.map((_, idx) => {
            const x = (idx / (TICK_COUNT - 1)) * GRID_VIEWBOX_WIDTH;
            return (h("line", { key: `grid-${idx}`, class: "bar-chart__grid-line", x1: x, y1: 0, x2: x, y2: GRID_VIEWBOX_HEIGHT, "stroke-width": "1", "stroke-dasharray": "4 4", "vector-effect": "non-scaling-stroke" }));
        })), h("div", { class: "bar-chart__bars", role: "list", part: "bars" }, items.map((item, idx) => {
            const pct = percentages[idx];
            const formatted = formattedValues[idx];
            const isActive = this.activeIndex === idx;
            const ariaText = legendText
                ? `${item.label}, ${legendText}: ${formatted}`
                : `${item.label}: ${formatted}`;
            return (h("div", { key: `${item.label}-${idx}`, class: {
                    'bar-chart__bar-item': true,
                    'bar-chart__bar-item--active': isActive,
                }, role: "listitem", tabIndex: 0, "aria-label": ariaText, onMouseEnter: () => this.activateBar(idx, item), onMouseLeave: () => this.clearActiveBar(), onFocus: () => this.activateBar(idx, item), onBlur: this.handleBarBlur, onClick: () => this.uaiBarClick.emit(item), onKeyDown: (event) => this.handleBarKeyDown(event, idx, items) }, h("div", { class: "bar-chart__track" }, h("div", { class: "bar-chart__fill", style: { width: `${pct}%` } }))));
        })), activeItem && (h("div", { class: "bar-chart__tooltip", part: "tooltip", role: "status", "aria-live": "polite", style: {
                left: `${tooltipLeftPct}%`,
                top: `${activeRowTopPct}%`,
            } }, h("span", { class: "bar-chart__tooltip-label" }, activeItem.label), h("div", { class: "bar-chart__tooltip-row" }, h("span", { class: "bar-chart__swatch", "aria-hidden": "true" }), legendText && h("span", { class: "bar-chart__tooltip-series" }, legendText), h("span", { class: "bar-chart__tooltip-value" }, activeFormatted))))), h("div", { class: "bar-chart__corner", "aria-hidden": "true" }), h("div", { class: "bar-chart__x-axis", "aria-hidden": "true" }, ticks.map((tick, idx) => (h("span", { key: `tick-${idx}`, class: {
                'bar-chart__tick': true,
                'bar-chart__tick--start': idx === 0,
                'bar-chart__tick--end': idx === ticks.length - 1,
            }, style: { left: `${(idx / (ticks.length - 1)) * 100}%` } }, formatTickValue(tick, format, locale, currencyCode)))))), shouldRenderLegend && (h("div", { class: "bar-chart__legend", part: "legend" }, h("span", { class: "bar-chart__swatch", "aria-hidden": "true" }), h("span", { class: "bar-chart__legend-label" }, legendText))))));
    }
    static get is() { return "uai-bar-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-bar-chart.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-bar-chart.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiBarChartItem[] | string",
                    "resolved": "UaiBarChartItem[] | string",
                    "references": {
                        "UaiBarChartItem": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-bar-chart/uai-bar-chart.tsx",
                            "id": "src/components/uai-bar-chart/uai-bar-chart.tsx::UaiBarChartItem"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Category items as an array of `{ label, value, formattedValue? }` or a JSON-encoded array string."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data",
                "defaultValue": "[]"
            },
            "seriesLabel": {
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
                    "text": "Series name displayed in the bottom legend (for example, `ROI`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "series-label",
                "defaultValue": "''"
            },
            "showLegend": {
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
                    "text": "Controls whether the bottom legend is shown when `seriesLabel` is provided."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show-legend",
                "defaultValue": "true"
            },
            "format": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiBarChartFormat",
                    "resolved": "\"currency\" | \"number\" | \"percent\"",
                    "references": {
                        "UaiBarChartFormat": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-bar-chart/uai-bar-chart.tsx",
                            "id": "src/components/uai-bar-chart/uai-bar-chart.tsx::UaiBarChartFormat"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Value formatting mode applied to horizontal axis ticks and tooltips (`number`, `currency`, or `percent`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "format",
                "defaultValue": "'number'"
            },
            "currency": {
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
                    "text": "ISO 4217 currency code used when `format` is `currency`."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "currency",
                "defaultValue": "'BRL'"
            },
            "maxValue": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional explicit upper bound for the horizontal domain; computed automatically when omitted."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-value"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "UaiBarChartLanguage",
                    "resolved": "\"en_US\" | \"es_ES\" | \"pt_BR\"",
                    "references": {
                        "UaiBarChartLanguage": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-bar-chart/uai-bar-chart.tsx",
                            "id": "src/components/uai-bar-chart/uai-bar-chart.tsx::UaiBarChartLanguage"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Locale used for number formatting and fallback copy (`pt_BR`, `en_US`, or `es_ES`)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'pt_BR'"
            },
            "emptyText": {
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
                    "text": "Optional custom message displayed when `data` is empty."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "empty-text"
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
                    "text": "Optional test identifier placed on the chart container."
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
            "activeIndex": {}
        };
    }
    static get events() {
        return [{
                "method": "uaiBarHover",
                "name": "uaiBarHover",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a bar is hovered or focused, or `null` when inspection is cleared."
                },
                "complexType": {
                    "original": "UaiBarChartItem | null",
                    "resolved": "UaiBarChartItem",
                    "references": {
                        "UaiBarChartItem": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-bar-chart/uai-bar-chart.tsx",
                            "id": "src/components/uai-bar-chart/uai-bar-chart.tsx::UaiBarChartItem"
                        }
                    }
                }
            }, {
                "method": "uaiBarClick",
                "name": "uaiBarClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a bar is activated by pointer click or keyboard (`Enter` or `Space`)."
                },
                "complexType": {
                    "original": "UaiBarChartItem",
                    "resolved": "UaiBarChartItem",
                    "references": {
                        "UaiBarChartItem": {
                            "location": "local",
                            "path": "/home/runner/work/blip-ds/blip-ds/src/components/uai-bar-chart/uai-bar-chart.tsx",
                            "id": "src/components/uai-bar-chart/uai-bar-chart.tsx::UaiBarChartItem"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
}
