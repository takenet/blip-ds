import { Host, h } from "@stencil/core";
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
/**
 * Horizontal progress indicator with safe bounds and accessible `progressbar` semantics.
 * Single visual defined by the UAI Figma: `sizing/2xs` track on `surface/background` with an `accent/ai-start` fill.
 * Use to communicate completion percentages or quota usage; pair with `text` or `aria-label` so screen readers announce what is progressing;
 * avoid using it to communicate critical status without accompanying text.
 *
 * @part track - The background track of the progress bar.
 * @part fill - The filled portion representing current progress.
 */
export class UaiProgressBar {
    constructor() {
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
    static get is() { return "uai-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["uai-progress-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["uai-progress-bar.css"]
        };
    }
    static get properties() {
        return {
            "percent": {
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
                    "text": "Completion percentage clamped safely between 0 and 100 (`NaN` is treated as 0)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "percent",
                "defaultValue": "0"
            },
            "text": {
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
                    "text": "Optional descriptive label rendered alongside the progress bar."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "text",
                "defaultValue": "''"
            },
            "ariaLabel": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible name forwarded to the `progressbar` element when no visible `text` is used."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-label",
                "defaultValue": "null"
            },
            "ariaLabelledby": {
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
                    "text": "ID reference forwarded to the `progressbar` element when labelled externally."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "aria-labelledby",
                "defaultValue": "null"
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
                    "text": "Selector attribute applied to the `progressbar` element for automated tests."
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
            "isRegression": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "percent",
                "methodName": "handlePercentChange"
            }];
    }
}
