import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-DUwG7Zwx.js';

const uaiLineChartCss = () => `:host{display:block;width:100%}.line-chart{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-md, 1rem);width:100%;min-height:calc(var(--uai-sizing-4xl, 4rem) * 5);font-family:var(--uai-font-family-sans, Figtree);color:var(--uai-content-primary, #242729)}.line-chart--empty{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.line-chart__empty{margin:0;font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem);font-weight:var(--uai-font-weight-regular, 400);color:var(--uai-content-secondary, #5f676d)}.line-chart__layout{display:grid;-ms-flex:1;flex:1;grid-template-columns:minmax(0, auto) minmax(0, 1fr);grid-template-rows:minmax(0, 1fr) auto;-webkit-column-gap:var(--uai-spacing-sm, 0.75rem);-moz-column-gap:var(--uai-spacing-sm, 0.75rem);column-gap:var(--uai-spacing-sm, 0.75rem);row-gap:var(--uai-spacing-xs, 0.5rem);width:100%}.line-chart__y-axis{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:end;align-items:flex-end;height:100%}.line-chart__y-tick{font-size:var(--uai-body-sm-font-size, 0.75rem);line-height:var(--uai-body-sm-line-height, 1.25rem);font-weight:var(--uai-font-weight-regular, 400);letter-spacing:var(--uai-letter-spacing-normal, 0px);color:var(--uai-content-primary, #242729);white-space:nowrap}.line-chart__plot{position:relative;min-width:0;min-height:calc(var(--uai-sizing-4xl, 4rem) * 3);height:100%;border-radius:var(--uai-radius-sm, 0.25rem)}.line-chart__plot:focus-visible{outline:var(--uai-border-width-thick, 2px) solid var(--uai-border-ring, #242729);outline-offset:var(--uai-spacing-3xs, 0.125rem)}.line-chart__svg{display:block;width:100%;height:100%;overflow:visible}.line-chart__grid-line,.line-chart__guide-line{stroke:var(--uai-border-default, #e4e6e7)}.line-chart__curve{fill:none;stroke:currentColor;pointer-events:none}.line-chart__hit{cursor:crosshair}.line-chart__color--ai-start{color:var(--uai-accent-ai-start, #0099ff)}.line-chart__color--ai-middle{color:var(--uai-accent-ai-middle, #a855f7)}.line-chart__color--ai-end{color:var(--uai-accent-ai-end, #00c6d7)}.line-chart__color--blue{color:var(--uai-fixed-blue, #1e6bf1)}.line-chart__color--success{color:var(--uai-feedback-success, #3da329)}.line-chart__color--warning{color:var(--uai-feedback-warning, #ff8000)}.line-chart__color--error{color:var(--uai-feedback-error, #cf0022)}.line-chart__points{position:absolute;inset:0;pointer-events:none}.line-chart__point{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;width:var(--uai-sizing-xs, 0.75rem);height:var(--uai-sizing-xs, 0.75rem);border:var(--uai-border-width-thick, 2px) solid var(--uai-surface-paper, #ffffff);border-radius:var(--uai-radius-full, 624.9375rem);background-color:currentColor;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:-webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.line-chart__point{-webkit-transition:none;transition:none}}.line-chart__tooltip{position:absolute;top:var(--uai-spacing-xs, 0.5rem);z-index:var(--uai-layer-content, 100);display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-xs, 0.5rem);min-width:var(--uai-width-menu, 14rem);padding:var(--uai-spacing-md, 1rem);border:var(--uai-border-width-default, 1px) solid var(--uai-border-default, #e4e6e7);border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--uai-surface-paper, #ffffff);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));pointer-events:none;-webkit-transition:left var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:left var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:left var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:left var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), -webkit-transform var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.line-chart__tooltip{-webkit-transition:none;transition:none}}.line-chart__tooltip-header{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;-ms-flex-pack:justify;justify-content:space-between;gap:var(--uai-spacing-sm, 0.75rem)}.line-chart__tooltip-title{font-size:var(--uai-body-sm-font-size, 0.75rem);line-height:var(--uai-body-sm-line-height, 1.25rem);font-weight:var(--uai-font-weight-bold, 700);color:var(--uai-content-primary, #242729)}.line-chart__tooltip-period{font-size:var(--uai-caption-font-size, 0.75rem);line-height:var(--uai-caption-line-height, 1.25rem);font-weight:var(--uai-font-weight-regular, 400);color:var(--uai-content-secondary, #5f676d)}.line-chart__tooltip-rows{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-2xs, 0.25rem)}.line-chart__tooltip-row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem);font-size:var(--uai-body-sm-font-size, 0.75rem);line-height:var(--uai-body-sm-line-height, 1.25rem);color:var(--uai-content-primary, #242729)}.line-chart__dot{-ms-flex:none;flex:none;width:var(--uai-sizing-2xs, 0.5rem);height:var(--uai-sizing-2xs, 0.5rem);border-radius:var(--uai-radius-full, 624.9375rem);background-color:currentColor}.line-chart__tooltip-label{color:var(--uai-content-secondary, #5f676d)}.line-chart__tooltip-value{margin-left:auto;font-weight:var(--uai-font-weight-semibold, 600);color:var(--uai-content-primary, #242729);white-space:nowrap}.line-chart__x-axis{position:relative;width:100%;height:var(--uai-sizing-md, 1.25rem)}.line-chart__x-tick{position:absolute;top:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:var(--uai-body-sm-font-size, 0.75rem);line-height:var(--uai-body-sm-line-height, 1.25rem);font-weight:var(--uai-font-weight-regular, 400);color:var(--uai-content-primary, #242729);white-space:nowrap}.line-chart__x-tick--start{-webkit-transform:translateX(0);transform:translateX(0)}.line-chart__x-tick--end{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.line-chart__legend{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;gap:var(--uai-spacing-lg, 1.5rem)}.line-chart__legend-item{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-xs, 0.5rem)}.line-chart__legend-glyph{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:var(--uai-sizing-sm, 1rem);height:var(--uai-sizing-2xs, 0.5rem)}.line-chart__legend-line{position:absolute;inset:0;display:block;width:100%;height:100%}.line-chart__legend-label{font-size:var(--uai-body-sm-font-size, 0.75rem);line-height:var(--uai-body-sm-line-height, 1.25rem);font-weight:var(--uai-font-weight-regular, 400);color:var(--uai-content-primary, #242729)}.line-chart__series{-webkit-animation:uai-chart-reveal var(--uai-duration-loop, 800ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) backwards;animation:uai-chart-reveal var(--uai-duration-loop, 800ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) backwards}@media (prefers-reduced-motion: reduce){.line-chart__series{-webkit-animation:none;animation:none}}@-webkit-keyframes uai-chart-reveal{from{-webkit-clip-path:inset(0 100% 0 0);clip-path:inset(0 100% 0 0)}to{-webkit-clip-path:inset(0);clip-path:inset(0)}}@keyframes uai-chart-reveal{from{-webkit-clip-path:inset(0 100% 0 0);clip-path:inset(0 100% 0 0)}to{-webkit-clip-path:inset(0);clip-path:inset(0)}}`;

const DEFAULT_PALETTE = ['ai-start', 'ai-middle', 'ai-end', 'blue'];
const SERIES_COLORS = [
    'ai-start',
    'ai-middle',
    'ai-end',
    'blue',
    'success',
    'warning',
    'error',
];
const FORMATS = ['number', 'currency', 'percent'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const VIEWBOX_WIDTH = 720;
const VIEWBOX_HEIGHT = 220;
const PAD_X = 8;
const PAD_Y = 8;
const TICK_COUNT = 5;
const LOCALE_MAP = {
    pt_BR: 'pt-BR',
    en_US: 'en-US',
    es_ES: 'es-ES',
};
const TEXTS = {
    pt_BR: {
        empty: 'Sem dados para exibir',
        chartLabel: 'Gráfico de linhas',
    },
    en_US: {
        empty: 'No data available',
        chartLabel: 'Line chart',
    },
    es_ES: {
        empty: 'Sin datos para mostrar',
        chartLabel: 'Gráfico de líneas',
    },
};
const roundCoord = (value) => Math.round(value * 100) / 100;
const parseJsonArray = (input) => {
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
    return Array.isArray(raw) ? raw : [];
};
const computeNiceDomainMax = (maxDataValue) => {
    var _a;
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
const formatAxisTick = (value, format, locale, currency) => {
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
const formatTooltipValue = (value, format, locale, currency) => {
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
const buildSmoothCurve = (points) => {
    const n = points.length;
    if (n === 0)
        return '';
    if (n === 1) {
        return `M ${roundCoord(PAD_X)} ${roundCoord(points[0].y)} L ${roundCoord(VIEWBOX_WIDTH - PAD_X)} ${roundCoord(points[0].y)}`;
    }
    if (n === 2) {
        return `M ${roundCoord(points[0].x)} ${roundCoord(points[0].y)} L ${roundCoord(points[1].x)} ${roundCoord(points[1].y)}`;
    }
    const dx = [];
    const slopes = [];
    for (let i = 0; i < n - 1; i++) {
        const deltaX = points[i + 1].x - points[i].x;
        const deltaY = points[i + 1].y - points[i].y;
        dx.push(deltaX);
        slopes.push(deltaX === 0 ? 0 : deltaY / deltaX);
    }
    const tangents = [slopes[0]];
    for (let i = 1; i < n - 1; i++) {
        if (slopes[i - 1] * slopes[i] <= 0) {
            tangents.push(0);
        }
        else {
            tangents.push((slopes[i - 1] + slopes[i]) / 2);
        }
    }
    tangents.push(slopes[n - 2]);
    for (let i = 0; i < n - 1; i++) {
        if (slopes[i] === 0) {
            tangents[i] = 0;
            tangents[i + 1] = 0;
        }
        else {
            const alpha = tangents[i] / slopes[i];
            const beta = tangents[i + 1] / slopes[i];
            const hypot = Math.hypot(alpha, beta);
            if (hypot > 3) {
                const scale = 3 / hypot;
                tangents[i] = scale * alpha * slopes[i];
                tangents[i + 1] = scale * beta * slopes[i];
            }
        }
    }
    let path = `M ${roundCoord(points[0].x)} ${roundCoord(points[0].y)}`;
    for (let i = 0; i < n - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const seg = dx[i] / 3;
        const cp1x = p0.x + seg;
        const cp1y = p0.y + tangents[i] * seg;
        const cp2x = p1.x - seg;
        const cp2y = p1.y - tangents[i + 1] * seg;
        path += ` C ${roundCoord(cp1x)} ${roundCoord(cp1y)}, ${roundCoord(cp2x)} ${roundCoord(cp2y)}, ${roundCoord(p1.x)} ${roundCoord(p1.y)}`;
    }
    return path;
};
const resolveXLabel = (datum, preferredKey, fallbackIndex) => {
    const candidates = [preferredKey, 'key', 'label', 'name'];
    for (const key of candidates) {
        if (key && datum[key] !== undefined && datum[key] !== null && String(datum[key]).trim() !== '') {
            return String(datum[key]);
        }
    }
    return String(fallbackIndex + 1);
};
const UaiLineChart = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uaiPointHover = createEvent(this, "uaiPointHover");
        this.activeIndex = null;
        this.revision = 0;
        /** Series definitions (`{ key, label, color? }`) as an array or a JSON-encoded array string. */
        this.series = [];
        /** Data points (`Record<string, string | number>`) as an array or a JSON-encoded array string. */
        this.data = [];
        /** Property name in each datum used for horizontal axis labels (automatically falls back to `key`, `label`, or `name`). */
        this.xKey = 'key';
        /** Optional title displayed at the top of the inspection tooltip card. */
        this.tooltipTitle = '';
        /** Value formatting mode applied to vertical axis ticks and tooltip rows (`number`, `currency`, or `percent`). */
        this.format = 'number';
        /** ISO 4217 currency code used when `format` is `currency`. */
        this.currency = 'BRL';
        /** Locale used for number formatting and fallback copy (`pt_BR`, `en_US`, or `es_ES`). */
        this.language = 'pt_BR';
        /** Controls whether the bottom series legend is rendered. */
        this.showLegend = true;
        /** Optional test identifier placed on the chart container. */
        this.dataTest = null;
        this.clearActivePoint = () => {
            if (this.activeIndex === null)
                return;
            this.activeIndex = null;
            this.uaiPointHover.emit(null);
        };
    }
    handleDataChange() {
        this.revision += 1;
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
    resolveSeriesColor(color, index) {
        if (color) {
            const valid = SERIES_COLORS.find((candidate) => candidate === color);
            if (valid)
                return valid;
        }
        return DEFAULT_PALETTE[index % DEFAULT_PALETTE.length];
    }
    setActivePoint(index, data) {
        if (index < 0 || index >= data.length)
            return;
        if (this.activeIndex === index)
            return;
        this.activeIndex = index;
        this.uaiPointHover.emit({ index, datum: data[index] });
    }
    handlePlotKeyDown(event, data) {
        if (!data.length)
            return;
        if (event.key === 'Escape') {
            if (this.activeIndex !== null) {
                event.preventDefault();
                event.stopPropagation();
                this.clearActivePoint();
            }
            return;
        }
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            const next = this.activeIndex === null ? 0 : Math.min(data.length - 1, this.activeIndex + 1);
            this.setActivePoint(next, data);
            return;
        }
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            const next = this.activeIndex === null ? data.length - 1 : Math.max(0, this.activeIndex - 1);
            this.setActivePoint(next, data);
            return;
        }
        if (event.key === 'Home') {
            event.preventDefault();
            this.setActivePoint(0, data);
            return;
        }
        if (event.key === 'End') {
            event.preventDefault();
            this.setActivePoint(data.length - 1, data);
        }
    }
    render() {
        const rawSeries = parseJsonArray(this.series).filter((item) => Boolean(item) && typeof item === 'object' && Boolean(item.key));
        const data = parseJsonArray(this.data).filter((item) => Boolean(item) && typeof item === 'object');
        const format = this.resolveFormat();
        const language = this.resolveLanguage();
        const locale = LOCALE_MAP[language];
        const texts = TEXTS[language];
        const currencyCode = (this.currency || 'BRL').trim() || 'BRL';
        if (data.length === 0 || rawSeries.length === 0) {
            return (h(Host, null, h("div", { class: "line-chart line-chart--empty", part: "chart", "data-test": this.dataTest }, h("p", { class: "line-chart__empty", part: "empty" }, (this.emptyText || '').trim() || texts.empty))));
        }
        const resolvedSeries = rawSeries.map((item, idx) => {
            var _a;
            return ({
                key: String(item.key),
                label: String((_a = item.label) !== null && _a !== void 0 ? _a : item.key),
                color: this.resolveSeriesColor(item.color, idx),
            });
        });
        let maxVal = 0;
        for (const datum of data) {
            for (const s of resolvedSeries) {
                const numeric = Number(datum[s.key]);
                if (Number.isFinite(numeric) && numeric > maxVal) {
                    maxVal = numeric;
                }
            }
        }
        const domainMax = computeNiceDomainMax(maxVal);
        const yTicks = Array.from({ length: TICK_COUNT }, (_, idx) => (domainMax * (TICK_COUNT - 1 - idx)) / (TICK_COUNT - 1));
        const usableWidth = VIEWBOX_WIDTH - PAD_X * 2;
        const usableHeight = VIEWBOX_HEIGHT - PAD_Y * 2;
        const getX = (index) => data.length === 1 ? VIEWBOX_WIDTH / 2 : PAD_X + (index / (data.length - 1)) * usableWidth;
        const getY = (value) => {
            const clamped = Math.max(0, Math.min(domainMax, Number.isFinite(value) ? value : 0));
            return PAD_Y + (1 - clamped / domainMax) * usableHeight;
        };
        const seriesGeometry = resolvedSeries.map((s) => {
            const points = data.map((datum, idx) => {
                const raw = Number(datum[s.key]);
                const val = Number.isFinite(raw) ? Math.max(0, raw) : 0;
                return {
                    x: getX(idx),
                    y: getY(val),
                    value: val,
                };
            });
            return Object.assign(Object.assign({}, s), { points, path: buildSmoothCurve(points) });
        });
        const preferredXKey = (this.xKey || 'key').trim() || 'key';
        const xLabels = data.map((datum, idx) => resolveXLabel(datum, preferredXKey, idx));
        const validActiveIndex = this.activeIndex !== null && this.activeIndex >= 0 && this.activeIndex < data.length ? this.activeIndex : null;
        const activeX = validActiveIndex !== null ? getX(validActiveIndex) : 0;
        const activeXPct = validActiveIndex !== null ? (activeX / VIEWBOX_WIDTH) * 100 : 0;
        const activeXLabel = validActiveIndex !== null ? xLabels[validActiveIndex] : '';
        const headerTitle = (this.tooltipTitle || '').trim() || activeXLabel;
        const showPeriodBadge = Boolean((this.tooltipTitle || '').trim() && activeXLabel);
        const accessibleTitle = (this.tooltipTitle || '').trim()
            ? `${texts.chartLabel}: ${(this.tooltipTitle || '').trim()}`
            : texts.chartLabel;
        return (h(Host, null, h("div", { class: "line-chart", part: "chart", "data-test": this.dataTest }, h("div", { class: "line-chart__layout" }, h("div", { class: "line-chart__y-axis", "aria-hidden": "true" }, yTicks.map((tick, idx) => (h("span", { key: `ytick-${idx}`, class: "line-chart__y-tick" }, formatAxisTick(tick, format, locale, currencyCode))))), h("div", { class: "line-chart__plot", part: "plot", tabIndex: 0, role: "group", "aria-label": accessibleTitle, onMouseLeave: this.clearActivePoint, onBlur: this.clearActivePoint, onKeyDown: (event) => this.handlePlotKeyDown(event, data) }, h("svg", { class: "line-chart__svg", viewBox: `0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`, preserveAspectRatio: "none", "aria-hidden": "true" }, yTicks.map((_, idx) => {
            const y = PAD_Y + (idx / (TICK_COUNT - 1)) * usableHeight;
            return (h("line", { key: `hgrid-${idx}`, class: "line-chart__grid-line", x1: 0, y1: roundCoord(y), x2: VIEWBOX_WIDTH, y2: roundCoord(y), "stroke-width": "1", "vector-effect": "non-scaling-stroke" }));
        }), validActiveIndex !== null && (h("line", { class: "line-chart__guide-line", x1: roundCoord(activeX), y1: PAD_Y, x2: roundCoord(activeX), y2: VIEWBOX_HEIGHT - PAD_Y, "stroke-width": "1", "stroke-dasharray": "4 4", "vector-effect": "non-scaling-stroke" })), h("g", { key: `series-${this.revision}`, class: "line-chart__series" }, seriesGeometry.map((s) => (h("path", { key: `curve-${s.key}`, class: `line-chart__curve line-chart__color--${s.color}`, d: s.path, fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "vector-effect": "non-scaling-stroke" })))), data.map((_, idx) => {
            const prevX = idx === 0 ? 0 : (getX(idx - 1) + getX(idx)) / 2;
            const nextX = idx === data.length - 1 ? VIEWBOX_WIDTH : (getX(idx) + getX(idx + 1)) / 2;
            return (h("rect", { key: `hit-${idx}`, class: "line-chart__hit", "data-index": String(idx), x: roundCoord(prevX), y: 0, width: roundCoord(Math.max(1, nextX - prevX)), height: VIEWBOX_HEIGHT, fill: "transparent", onMouseEnter: () => this.setActivePoint(idx, data) }));
        })), validActiveIndex !== null && (h("div", { class: "line-chart__points", "aria-hidden": "true" }, seriesGeometry.map((s) => {
            const pt = s.points[validActiveIndex];
            const leftPct = (pt.x / VIEWBOX_WIDTH) * 100;
            const topPct = (pt.y / VIEWBOX_HEIGHT) * 100;
            return (h("span", { key: `pt-${s.key}`, class: `line-chart__point line-chart__color--${s.color}`, style: {
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                } }));
        }))), validActiveIndex !== null && (h("div", { class: "line-chart__tooltip", part: "tooltip", role: "status", "aria-live": "polite", style: {
                left: `${activeXPct}%`,
                transform: `translateX(-${roundCoord(activeXPct)}%)`,
            } }, h("div", { class: "line-chart__tooltip-header" }, h("span", { class: "line-chart__tooltip-title" }, headerTitle), showPeriodBadge && h("span", { class: "line-chart__tooltip-period" }, activeXLabel)), h("div", { class: "line-chart__tooltip-rows" }, seriesGeometry.map((s) => {
            const pt = s.points[validActiveIndex];
            return (h("div", { key: `trow-${s.key}`, class: "line-chart__tooltip-row" }, h("span", { class: `line-chart__dot line-chart__color--${s.color}`, "aria-hidden": "true" }), h("span", { class: "line-chart__tooltip-label" }, s.label), h("span", { class: "line-chart__tooltip-value" }, formatTooltipValue(pt.value, format, locale, currencyCode))));
        }))))), h("div", { class: "line-chart__corner", "aria-hidden": "true" }), h("div", { class: "line-chart__x-axis", "aria-hidden": "true" }, xLabels.map((label, idx) => {
            const xPct = (getX(idx) / VIEWBOX_WIDTH) * 100;
            return (h("span", { key: `xtick-${idx}`, class: {
                    'line-chart__x-tick': true,
                    'line-chart__x-tick--start': idx === 0 && data.length > 1,
                    'line-chart__x-tick--end': idx === xLabels.length - 1 && data.length > 1,
                }, style: { left: `${xPct}%` } }, label));
        }))), this.showLegend !== false && (h("div", { class: "line-chart__legend", part: "legend" }, resolvedSeries.map((s) => (h("div", { key: `legend-${s.key}`, class: "line-chart__legend-item" }, h("span", { class: `line-chart__legend-glyph line-chart__color--${s.color}`, "aria-hidden": "true" }, h("svg", { class: "line-chart__legend-line", viewBox: "0 0 16 8", preserveAspectRatio: "none" }, h("line", { x1: "0", y1: "4", x2: "16", y2: "4", stroke: "currentColor", "stroke-width": "2", "vector-effect": "non-scaling-stroke" })), h("span", { class: "line-chart__dot" })), h("span", { class: "line-chart__legend-label" }, s.label)))))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "data": [{
                "handleDataChange": 0
            }],
        "series": [{
                "handleDataChange": 0
            }]
    }; }
};
UaiLineChart.style = uaiLineChartCss();

export { UaiLineChart as uai_line_chart };
