'use strict';

var index = require('./index-JW9Yq-qX.js');

const uaiChipTagCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;max-width:100%;vertical-align:middle}.chip{--chip-bg:var(--uai-action-primary-default, #242729);--chip-border:var(--uai-action-primary-default, #242729);--chip-fg:var(--uai-action-primary-foreground, #ffffff);display:-ms-inline-flexbox;display:inline-flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-2xs, 0.25rem);min-width:0;max-width:100%;padding:var(--uai-spacing-3xs, 0.125rem) var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--chip-border);border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--chip-bg);color:var(--chip-fg)}.chip--outline{--chip-bg:transparent;--chip-border:var(--uai-border-input, #adb4b8);--chip-fg:var(--uai-content-primary, #242729)}.chip--info,.chip--success,.chip--warning,.chip--danger{--chip-fg:var(--uai-content-primary, #242729)}.chip--info{--chip-bg:var(--uai-feedback-info-subtle, #eff6ff);--chip-border:color-mix(in srgb, var(--uai-feedback-info, #0073e5) 30%, transparent)}.chip--success{--chip-bg:var(--uai-feedback-success-subtle, #ecfdf5);--chip-border:color-mix(in srgb, var(--uai-feedback-success, #3da329) 30%, transparent)}.chip--warning{--chip-bg:var(--uai-feedback-warning-subtle, #fff7ed);--chip-border:color-mix(in srgb, var(--uai-feedback-warning, #ff8000) 30%, transparent)}.chip--danger{--chip-bg:var(--uai-feedback-error-subtle, #fef2f2);--chip-border:color-mix(in srgb, var(--uai-feedback-error, #cf0022) 30%, transparent)}.chip--disabled{--chip-bg:var(--uai-action-outline-pressed, #e4e6e7);--chip-border:var(--uai-border-input, #adb4b8);--chip-fg:var(--uai-content-disabled, #848e94)}@media (forced-colors: active){.chip{border-color:CanvasText}}.chip__icon{-ms-flex:none;flex:none}.chip__text{--uai-typo-color:currentColor;min-width:0;white-space:nowrap}`;

const COLORS = ['system', 'outline', 'info', 'success', 'warning', 'danger', 'disabled'];
const UaiChipTag = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Semantic color: system, outline, info, success, warning, danger or disabled. Use for status; pair with the text; avoid arbitrary colors. The legacy default value maps to system. */
        this.color = 'system';
        /** Test selector on the chip. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
    }
    resolveColor() {
        if (this.color === 'default')
            return 'system';
        const known = COLORS.find((candidate) => candidate === this.color);
        if (known)
            return known;
        return 'system';
    }
    render() {
        const color = this.resolveColor();
        return (index.h(index.Host, { key: '50b6f4d002cebcb1507b23d17271a8ad77bca11b' }, index.h("div", { key: 'c2dd0c8d020a3332f4aea9d95e981b2dc54c7121', class: { chip: true, [`chip--${color}`]: true }, part: "chip", "data-test": this.dataTest }, this.icon && index.h("uai-icon", { key: '107c91752a790cd90ab4438a933d2948c363e1de', class: "chip__icon", size: "x-small", name: this.icon }), index.h("uai-typo", { key: 'd54601ac1c1366f32a092fb952beb7d25ab01ab0', class: "chip__text", tag: "span", variant: "caption", margin: false, noWrap: true }, index.h("slot", { key: '3fc34e13a167e4980923f277f2e7dfcf28f70c7e' })))));
    }
};
UaiChipTag.style = uaiChipTagCss();

exports.uai_chip_tag = UaiChipTag;
