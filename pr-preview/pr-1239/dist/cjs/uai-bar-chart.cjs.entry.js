'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiBarChartCss = () => `:host{display:block;width:100%}.bar-chart{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-md, 1rem);width:100%;min-height:calc(var(--uai-sizing-4xl, 4rem) * 5);font-family:var(--uai-font-family-sans, Figtree);color:var(--uai-content-primary, #242729)}.bar-chart--empty{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.bar-chart__empty{margin:0;font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem);font-weight:var(--uai-font-weight-regular, 400);color:var(--uai-content-secondary, #5f676d)}.bar-chart__layout{display:grid;-ms-flex:1;flex:1;grid-template-columns:minmax(0, auto) minmax(0, 1fr);grid-template-rows:minmax(0, 1fr) auto;-webkit-column-gap:var(--uai-spacing-md, 1rem);-moz-column-gap:var(--uai-spacing-md, 1rem);column-gap:var(--uai-spacing-md, 1rem);row-gap:var(--uai-spacing-xs, 0.5rem);width:100%}.bar-chart__categories{display:grid;grid-auto-rows:1fr;-ms-flex-align:center;align-items:center;row-gap:var(--uai-spacing-sm, 0.75rem);padding-block:var(--uai-spacing-2xs, 0.25rem)}.bar-chart__category{font-size:var(--uai-caption-font-size, 0.75rem);line-height:var(--uai-caption-line-height, 1.25rem);font-weight:var(--uai-font-weight-regular, 400);letter-spacing:var(--uai-letter-spacing-normal, 0px);color:var(--uai-content-primary, #242729);text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.bar-chart__plot{position:relative;min-width:0;height:100%}.bar-chart__grid{position:absolute;inset:0;display:block;width:100%;height:100%;pointer-events:none;overflow:visible}.bar-chart__grid-line{stroke:var(--uai-border-default, #e4e6e7)}.bar-chart__bars{position:relative;display:grid;grid-auto-rows:1fr;-ms-flex-align:center;align-items:center;row-gap:var(--uai-spacing-sm, 0.75rem);width:100%;height:100%;padding-block:var(--uai-spacing-2xs, 0.25rem)}.bar-chart__bar-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;border-radius:var(--uai-radius-md, 0.5rem);cursor:pointer}.bar-chart__bar-item:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.bar-chart__track{position:relative;width:100%;height:var(--uai-sizing-lg, 1.5rem);border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--uai-surface-background, #f2f3f3);overflow:hidden}.bar-chart__fill{height:100%;border-radius:0 var(--uai-radius-md, 0.5rem) var(--uai-radius-md, 0.5rem) 0;background-color:var(--uai-fixed-blue, #1e6bf1);-webkit-transition:width var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:width var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.bar-chart__fill{-webkit-transition:none;transition:none}}.bar-chart__fill{-webkit-animation:uai-chart-grow var(--uai-duration-loop, 800ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) backwards;animation:uai-chart-grow var(--uai-duration-loop, 800ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) backwards}@media (prefers-reduced-motion: reduce){.bar-chart__fill{-webkit-animation:none;animation:none}}.bar-chart__x-axis{position:relative;width:100%;height:var(--uai-sizing-md, 1.25rem)}.bar-chart__tick{position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:var(--uai-caption-font-size, 0.75rem);line-height:var(--uai-caption-line-height, 1.25rem);font-weight:var(--uai-font-weight-regular, 400);color:var(--uai-content-primary, #242729);white-space:nowrap}.bar-chart__tick--start{-webkit-transform:translateX(0);transform:translateX(0)}.bar-chart__tick--end{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.bar-chart__legend{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-xs, 0.5rem)}.bar-chart__swatch{-ms-flex:none;flex:none;width:var(--uai-sizing-2xs, 0.5rem);height:var(--uai-sizing-2xs, 0.5rem);border-radius:var(--uai-radius-xs, 0.125rem);background-color:var(--uai-fixed-blue, #1e6bf1)}.bar-chart__legend-label{font-size:var(--uai-caption-font-size, 0.75rem);line-height:var(--uai-caption-line-height, 1.25rem);font-weight:var(--uai-font-weight-regular, 400);color:var(--uai-content-primary, #242729)}.bar-chart__tooltip{position:absolute;z-index:var(--uai-layer-content, 100);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem);max-width:var(--uai-width-tooltip, 15rem);padding:var(--uai-spacing-sm, 0.75rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--uai-surface-paper, #ffffff);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));-webkit-transform:translate(-50%, calc(-100% - var(--uai-spacing-xs, 0.5rem)));transform:translate(-50%, calc(-100% - var(--uai-spacing-xs, 0.5rem)));pointer-events:none}.bar-chart__tooltip-label{font-size:var(--uai-caption-font-size, 0.75rem);line-height:var(--uai-caption-line-height, 1.25rem);font-weight:var(--uai-font-weight-semibold, 600);color:var(--uai-content-primary, #242729);white-space:nowrap}.bar-chart__tooltip-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);font-size:var(--uai-caption-font-size, 0.75rem);line-height:var(--uai-caption-line-height, 1.25rem);color:var(--uai-content-primary, #242729)}.bar-chart__tooltip-series{color:var(--uai-content-secondary, #5f676d)}.bar-chart__tooltip-value{margin-left:auto;font-weight:var(--uai-font-weight-semibold, 600);white-space:nowrap}@-webkit-keyframes uai-chart-grow{from{width:0}}@keyframes uai-chart-grow{from{width:0}}`;

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
const UaiBarChart = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.uaiBarHover = index.createEvent(this, "uaiBarHover");
        this.uaiBarClick = index.createEvent(this, "uaiBarClick");
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
        return 'number';
    }
    resolveLanguage() {
        if (this.language === 'es_MX')
            return 'es_ES';
        const match = LANGUAGES.find((candidate) => candidate === this.language);
        if (match)
            return match;
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
            return (index.h(index.Host, null, index.h("div", { class: "bar-chart bar-chart--empty", part: "chart", "data-test": this.dataTest }, index.h("p", { class: "bar-chart__empty", part: "empty" }, (this.emptyText || '').trim() || texts.empty))));
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
        return (index.h(index.Host, null, index.h("div", { class: "bar-chart", part: "chart", role: "region", "aria-label": legendText ? `${texts.chartLabel}: ${legendText}` : texts.chartLabel, "data-test": this.dataTest }, index.h("div", { class: "bar-chart__layout" }, index.h("div", { class: "bar-chart__categories", "aria-hidden": "true" }, items.map((item, idx) => (index.h("div", { key: `${item.label}-${idx}`, class: "bar-chart__category", onMouseEnter: () => this.activateBar(idx, item), onMouseLeave: () => this.clearActiveBar(), onClick: () => this.uaiBarClick.emit(item) }, item.label)))), index.h("div", { class: "bar-chart__plot" }, index.h("svg", { class: "bar-chart__grid", viewBox: `0 0 ${GRID_VIEWBOX_WIDTH} ${GRID_VIEWBOX_HEIGHT}`, preserveAspectRatio: "none", "aria-hidden": "true" }, ticks.map((_, idx) => {
            const x = (idx / (TICK_COUNT - 1)) * GRID_VIEWBOX_WIDTH;
            return (index.h("line", { key: `grid-${idx}`, class: "bar-chart__grid-line", x1: x, y1: 0, x2: x, y2: GRID_VIEWBOX_HEIGHT, "stroke-width": "1", "stroke-dasharray": "4 4", "vector-effect": "non-scaling-stroke" }));
        })), index.h("div", { class: "bar-chart__bars", role: "list", part: "bars" }, items.map((item, idx) => {
            const pct = percentages[idx];
            const formatted = formattedValues[idx];
            const isActive = this.activeIndex === idx;
            const ariaText = legendText
                ? `${item.label}, ${legendText}: ${formatted}`
                : `${item.label}: ${formatted}`;
            return (index.h("div", { key: `${item.label}-${idx}`, class: {
                    'bar-chart__bar-item': true,
                    'bar-chart__bar-item--active': isActive,
                }, role: "listitem", tabIndex: 0, "aria-label": ariaText, onMouseEnter: () => this.activateBar(idx, item), onMouseLeave: () => this.clearActiveBar(), onFocus: () => this.activateBar(idx, item), onBlur: this.handleBarBlur, onClick: () => this.uaiBarClick.emit(item), onKeyDown: (event) => this.handleBarKeyDown(event, idx, items) }, index.h("div", { class: "bar-chart__track" }, index.h("div", { class: "bar-chart__fill", style: { width: `${pct}%` } }))));
        })), activeItem && (index.h("div", { class: "bar-chart__tooltip", part: "tooltip", role: "status", "aria-live": "polite", style: {
                left: `${tooltipLeftPct}%`,
                top: `${activeRowTopPct}%`,
            } }, index.h("span", { class: "bar-chart__tooltip-label" }, activeItem.label), index.h("div", { class: "bar-chart__tooltip-row" }, index.h("span", { class: "bar-chart__swatch", "aria-hidden": "true" }), legendText && index.h("span", { class: "bar-chart__tooltip-series" }, legendText), index.h("span", { class: "bar-chart__tooltip-value" }, activeFormatted))))), index.h("div", { class: "bar-chart__corner", "aria-hidden": "true" }), index.h("div", { class: "bar-chart__x-axis", "aria-hidden": "true" }, ticks.map((tick, idx) => (index.h("span", { key: `tick-${idx}`, class: {
                'bar-chart__tick': true,
                'bar-chart__tick--start': idx === 0,
                'bar-chart__tick--end': idx === ticks.length - 1,
            }, style: { left: `${(idx / (ticks.length - 1)) * 100}%` } }, formatTickValue(tick, format, locale, currencyCode)))))), shouldRenderLegend && (index.h("div", { class: "bar-chart__legend", part: "legend" }, index.h("span", { class: "bar-chart__swatch", "aria-hidden": "true" }), index.h("span", { class: "bar-chart__legend-label" }, legendText))))));
    }
    get el() { return index.getElement(this); }
};
UaiBarChart.style = uaiBarChartCss();

exports.uai_bar_chart = UaiBarChart;
