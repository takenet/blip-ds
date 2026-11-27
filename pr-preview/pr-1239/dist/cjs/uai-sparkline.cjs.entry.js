'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiSparklineCss = () => `:host{display:block;width:100%}.sparkline{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:var(--uai-sizing-4xl, 4rem);color:var(--uai-content-disabled, #848e94)}.sparkline--positive{color:var(--uai-feedback-success, #3da329)}.sparkline--negative{color:var(--uai-feedback-error, #cf0022)}.sparkline__svg{-webkit-animation:uai-chart-reveal var(--uai-duration-loop, 800ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) backwards;animation:uai-chart-reveal var(--uai-duration-loop, 800ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) backwards}@media (prefers-reduced-motion: reduce){.sparkline__svg{-webkit-animation:none;animation:none}}.sparkline__svg{display:block;width:100%;height:100%;overflow:visible}.sparkline__area{opacity:var(--uai-opacity-focus-ring, 0.3);fill-opacity:var(--uai-opacity-disabled, 0.5)}.sparkline__line{fill:none;stroke:currentColor}@-webkit-keyframes uai-chart-reveal{from{-webkit-clip-path:inset(0 100% 0 0);clip-path:inset(0 100% 0 0)}to{-webkit-clip-path:inset(0);clip-path:inset(0)}}@keyframes uai-chart-reveal{from{-webkit-clip-path:inset(0 100% 0 0);clip-path:inset(0 100% 0 0)}to{-webkit-clip-path:inset(0);clip-path:inset(0)}}`;

const VARIANTS = ['neutral', 'positive', 'negative'];
const LANGUAGES = ['pt_BR', 'en_US', 'es_ES'];
const VIEWBOX_WIDTH = 310;
const VIEWBOX_HEIGHT = 68;
const PADDING_Y = 6;
let instanceCounter = 0;
const TEXTS = {
    pt_BR: {
        empty: 'Gráfico de tendência sem dados',
        neutral: 'Gráfico de tendência neutra',
        positive: 'Gráfico de tendência positiva',
        negative: 'Gráfico de tendência negativa',
    },
    en_US: {
        empty: 'Trend sparkline with no data',
        neutral: 'Neutral trend sparkline',
        positive: 'Positive trend sparkline',
        negative: 'Negative trend sparkline',
    },
    es_ES: {
        empty: 'Gráfico de tendencia sin datos',
        neutral: 'Gráfico de tendencia neutra',
        positive: 'Gráfico de tendencia positiva',
        negative: 'Gráfico de tendencia negativa',
    },
};
const roundCoord = (value) => Math.round(value * 100) / 100;
const parseNumericData = (input) => {
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
        .filter((item) => item !== null && item !== '' && typeof item !== 'boolean')
        .map((item) => Number(item))
        .filter((num) => Number.isFinite(num));
};
const buildLinearPath = (points) => {
    if (!points.length)
        return '';
    return points
        .map((pt, idx) => `${idx === 0 ? 'M' : 'L'} ${roundCoord(pt.x)} ${roundCoord(pt.y)}`)
        .join(' ');
};
const buildMonotoneSmoothPath = (points) => {
    const n = points.length;
    if (n === 0)
        return '';
    if (n === 1)
        return `M ${roundCoord(points[0].x)} ${roundCoord(points[0].y)}`;
    if (n === 2)
        return buildLinearPath(points);
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
    let d = `M ${roundCoord(points[0].x)} ${roundCoord(points[0].y)}`;
    for (let i = 0; i < n - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const seg = dx[i] / 3;
        const cp1x = p0.x + seg;
        const cp1y = p0.y + tangents[i] * seg;
        const cp2x = p1.x - seg;
        const cp2y = p1.y - tangents[i + 1] * seg;
        d += ` C ${roundCoord(cp1x)} ${roundCoord(cp1y)}, ${roundCoord(cp2x)} ${roundCoord(cp2y)}, ${roundCoord(p1.x)} ${roundCoord(p1.y)}`;
    }
    return d;
};
const UaiSparkline = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.revision = 0;
        this.gradientId = `uai-sparkline-grad-${++instanceCounter}`;
        /** Numeric series as an array of numbers or a JSON-encoded array string. */
        this.data = [];
        /** Semantic color variant (`neutral`, `positive`, or `negative`). Legacy aliases `green` and `red` map to `positive` and `negative`. */
        this.variant = 'neutral';
        /** Renders a monotone smooth cubic curve when `true`, or straight segments when `false`. */
        this.smooth = true;
        /** Displays the subtle vertical gradient area under the curve for every variant, including flat `neutral` trends. */
        this.showArea = true;
        /** Accessible description announced for the sparkline. Falls back to a localized summary when omitted. */
        this.label = '';
        /** Locale used for fallback accessible announcements (`pt_BR`, `en_US`, or `es_ES`). */
        this.language = 'pt_BR';
        /** Optional test identifier placed on the chart container. */
        this.dataTest = null;
    }
    handleDataChange() {
        this.revision += 1;
    }
    resolveVariant() {
        var _a;
        const raw = String((_a = this.variant) !== null && _a !== void 0 ? _a : 'neutral').toLowerCase();
        if (raw === 'green')
            return 'positive';
        if (raw === 'red')
            return 'negative';
        const match = VARIANTS.find((candidate) => candidate === raw);
        if (match)
            return match;
        return 'neutral';
    }
    resolveLanguage() {
        if (this.language === 'es_MX')
            return 'es_ES';
        const match = LANGUAGES.find((candidate) => candidate === this.language);
        if (match)
            return match;
        return 'pt_BR';
    }
    render() {
        const variant = this.resolveVariant();
        const language = this.resolveLanguage();
        const values = parseNumericData(this.data);
        const texts = TEXTS[language];
        const customLabel = (this.label || '').trim();
        const accessibleLabel = customLabel || (values.length === 0 ? texts.empty : texts[variant]);
        let linePath = '';
        let areaPath = '';
        let isConstant = true;
        const closeArea = (path) => `${path} L ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT} L 0 ${VIEWBOX_HEIGHT} Z`;
        if (values.length === 1) {
            const centerY = VIEWBOX_HEIGHT / 2;
            linePath = `M 0 ${roundCoord(centerY)} L ${VIEWBOX_WIDTH} ${roundCoord(centerY)}`;
            areaPath = closeArea(linePath);
        }
        else if (values.length > 1) {
            const min = Math.min(...values);
            const max = Math.max(...values);
            const range = max - min;
            isConstant = range === 0;
            if (isConstant) {
                const centerY = VIEWBOX_HEIGHT / 2;
                linePath = `M 0 ${roundCoord(centerY)} L ${VIEWBOX_WIDTH} ${roundCoord(centerY)}`;
                areaPath = closeArea(linePath);
            }
            else {
                const usableHeight = VIEWBOX_HEIGHT - PADDING_Y * 2;
                const points = values.map((val, idx) => ({
                    x: (idx / (values.length - 1)) * VIEWBOX_WIDTH,
                    y: PADDING_Y + (1 - (val - min) / range) * usableHeight,
                }));
                linePath = this.smooth !== false ? buildMonotoneSmoothPath(points) : buildLinearPath(points);
                areaPath = closeArea(linePath);
            }
        }
        const renderArea = Boolean(this.showArea && areaPath);
        return (index.h(index.Host, { key: '98e3c0e228d8fcac3746cfd524715ffdec9222ae' }, index.h("div", { key: '377c94be6cc80e84cc97bb10d879c5f4e4214eb9', class: {
                sparkline: true,
                [`sparkline--${variant}`]: true,
            }, role: "img", "aria-label": accessibleLabel, part: "chart", "data-test": this.dataTest }, index.h("svg", { key: `sparkline-${this.revision}`, class: "sparkline__svg", viewBox: `0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`, preserveAspectRatio: "none", "aria-hidden": "true" }, renderArea && (index.h("defs", { key: '403848077bc4df1df343385c35ce614f57417ecb' }, index.h("linearGradient", { key: '042a2ad6d3a8b4356b1d5dae88afad05a5092812', id: this.gradientId, x1: "0", y1: "0", x2: "0", y2: "1" }, index.h("stop", { key: '068c847847c60ab1daa4d6e3bd1254f65e4781d5', offset: "0%", "stop-color": "currentColor", "stop-opacity": "1" }), index.h("stop", { key: '3fabfcb50c9570fe6ed406655d12455c81184828', offset: "100%", "stop-color": "currentColor", "stop-opacity": "0" })))), renderArea && index.h("path", { key: '74db6e1f3e92b98fbe444fdeeeddfa8908466195', class: "sparkline__area", d: areaPath, fill: `url(#${this.gradientId})` }), linePath && (index.h("path", { key: '360a291abe3affae0f84d381489341807d62a674', class: "sparkline__line", d: linePath, fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", "vector-effect": "non-scaling-stroke" }))))));
    }
    static get watchers() { return {
        "data": [{
                "handleDataChange": 0
            }]
    }; }
};
UaiSparkline.style = uaiSparklineCss();

exports.uai_sparkline = UaiSparkline;
