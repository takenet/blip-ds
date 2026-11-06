'use strict';

var index = require('./index-BuAR9UTp.js');

const uaiChipTagCss = () => `:host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.chip{--chip-bg:var(--uai-action-primary-default, #242729);--chip-border:var(--uai-action-primary-default, #242729);--chip-fg:var(--uai-action-primary-foreground, #ffffff);display:-ms-inline-flexbox;display:inline-flex;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;gap:var(--uai-spacing-2xs, 0.25rem);min-width:0;padding:var(--uai-spacing-3xs, 0.125rem) var(--uai-spacing-xs, 0.5rem);border:var(--uai-border-width-default, 1px) solid var(--chip-border);border-radius:var(--uai-radius-md, 0.5rem);background-color:var(--chip-bg);color:var(--chip-fg)}.chip--outline{--chip-bg:transparent;--chip-border:var(--uai-border-input, #adb4b8);--chip-fg:var(--uai-content-primary, #242729)}.chip--info,.chip--success,.chip--warning,.chip--danger{--chip-fg:var(--uai-content-primary, #242729)}.chip--info{--chip-bg:var(--uai-feedback-info-subtle, #eff6ff);--chip-border:color-mix(in srgb, var(--uai-feedback-info, #0073e5) 30%, transparent)}.chip--success{--chip-bg:var(--uai-feedback-success-subtle, #ecfdf5);--chip-border:color-mix(in srgb, var(--uai-feedback-success, #3da329) 30%, transparent)}.chip--warning{--chip-bg:var(--uai-feedback-warning-subtle, #fff7ed);--chip-border:color-mix(in srgb, var(--uai-feedback-warning, #ff8000) 30%, transparent)}.chip--danger{--chip-bg:var(--uai-feedback-error-subtle, #fef2f2);--chip-border:color-mix(in srgb, var(--uai-feedback-error, #cf0022) 30%, transparent)}.chip--disabled{--chip-bg:var(--uai-action-outline-pressed, #e4e6e7);--chip-border:var(--uai-border-input, #adb4b8);--chip-fg:var(--uai-content-disabled, #848e94)}@media (forced-colors: active){.chip{border-color:CanvasText}}.chip__icon{-ms-flex:none;flex:none}.chip__text{--uai-typo-color:currentColor;min-width:0;white-space:nowrap}`;

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
        return (index.h(index.Host, { key: '8aea77b7c477600b7c42591c7002c7b8b28ec321' }, index.h("div", { key: '6a1e8ca40a633773577650c616cbee3be5b227a1', class: { chip: true, [`chip--${color}`]: true }, part: "chip", "data-test": this.dataTest }, this.icon && index.h("uai-icon", { key: '06d7b5f8f913a56495fed7acb10bbc9fe24c172f', class: "chip__icon", size: "x-small", name: this.icon }), index.h("uai-typo", { key: '285a26dbfc72926544f5ebb082efdac91b964129', class: "chip__text", tag: "span", variant: "caption", margin: false }, index.h("slot", { key: 'e1b442132202d7dcb7448ae93a37c65c9db7ae06' })))));
    }
};
UaiChipTag.style = uaiChipTagCss();

exports.uai_chip_tag = UaiChipTag;
