import { r as registerInstance, h, H as Host, g as getElement } from './index-DUwG7Zwx.js';

const uaiProgressBarCss = () => `:host{display:block;width:100%}.progress{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:var(--uai-spacing-xs, 0.5rem);width:100%}.progress__track{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:var(--uai-sizing-2xs, 0.5rem);border-radius:var(--uai-radius-2xl, 1.5rem);background-color:var(--uai-surface-background, #f2f3f3);overflow:hidden}.progress__fill{height:100%;border-radius:var(--uai-radius-2xl, 1.5rem);background-color:var(--uai-accent-ai-start, #0099ff);-webkit-transition:width var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:width var(--uai-duration-moderate, 200ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.progress__fill{-webkit-transition:none;transition:none}}.progress__fill{-webkit-animation:uai-chart-grow var(--uai-duration-loop, 800ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) backwards;animation:uai-chart-grow var(--uai-duration-loop, 800ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)) backwards}@media (prefers-reduced-motion: reduce){.progress__fill{-webkit-animation:none;animation:none}}.progress__fill--instant{-webkit-transition:none;transition:none}.progress__text{margin:0;font-family:var(--uai-font-family-sans, Figtree);font-size:var(--uai-body-base-font-size, 0.875rem);line-height:var(--uai-body-base-line-height, 1.375rem);font-weight:var(--uai-font-weight-regular, 400);letter-spacing:var(--uai-letter-spacing-normal, 0px);color:var(--uai-content-primary, #242729)}@-webkit-keyframes uai-chart-grow{from{width:0}}@keyframes uai-chart-grow{from{width:0}}`;

let progressBarIds = 0;
const clampPercent = (value) => {
    if (value === null || value === undefined || value === '')
        return 0;
    const numeric = typeof value === 'number' ? value : Number(value);
    if (Number.isNaN(numeric))
        return 0;
    if (numeric <= 0)
        return 0;
    if (numeric >= 100)
        return 100;
    return numeric;
};
const UaiProgressBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isRegression = false;
        this.textId = `uai-progress-bar-text-${++progressBarIds}`;
        /**
         * Completion percentage clamped safely between 0 and 100 (`NaN` is treated as 0).
         */
        this.percent = 0;
        /**
         * Optional descriptive label rendered alongside the progress bar.
         */
        this.text = '';
        /**
         * Accessible name forwarded to the `progressbar` element when no visible `text` is used.
         */
        this.ariaLabel = null;
        /**
         * ID reference forwarded to the `progressbar` element when labelled externally.
         */
        this.ariaLabelledby = null;
        /**
         * Selector attribute applied to the `progressbar` element for automated tests.
         */
        this.dataTest = null;
    }
    handlePercentChange(newValue, oldValue) {
        const next = clampPercent(newValue);
        const previous = clampPercent(oldValue);
        this.isRegression = next < previous;
    }
    render() {
        const clamped = clampPercent(this.percent);
        const hasText = Boolean(this.text && this.text.trim().length > 0);
        const ariaLabel = (this.ariaLabel || this.el.getAttribute('aria-label') || '').trim();
        const ariaLabelledby = (this.ariaLabelledby || this.el.getAttribute('aria-labelledby') || '').trim();
        const resolvedLabelledby = ariaLabelledby || (!ariaLabel && hasText ? this.textId : '');
        return (h(Host, { key: '57b8cda3137f03d66ba50734fd3cb3a87563b897' }, h("div", { key: '5f3cedff23e1f151cf5f5f370ca4094105baa110', class: "progress", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(clamped), "aria-label": ariaLabel || undefined, "aria-labelledby": resolvedLabelledby || undefined, "data-test": this.dataTest }, h("div", { key: 'a704832bbc10dcfe74c28a6cbb58eb8c2ad19bb3', class: "progress__track", part: "track" }, h("div", { key: 'c3713f7034c0b58547d0613bd8a4a0917f5092d5', class: {
                progress__fill: true,
                'progress__fill--instant': this.isRegression,
            }, part: "fill", style: { width: `${clamped}%` } })), hasText && (h("p", { key: 'af05036d42fa942ee6cf8840909ce6b17c9b6d7d', id: this.textId, class: "progress__text" }, this.text)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "percent": [{
                "handlePercentChange": 0
            }]
    }; }
};
UaiProgressBar.style = uaiProgressBarCss();

export { UaiProgressBar as uai_progress_bar };
