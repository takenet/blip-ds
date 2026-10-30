import { r as registerInstance, h, H as Host, g as getElement } from './index-CkbvGS8Z.js';

const uaiTooltipCss = () => `:host{display:inline-block;vertical-align:middle}.tooltip__wrapper{display:inline-block;position:relative}.tooltip__trigger{display:inline-block}.tooltip__tip{--tooltip-bg:var(--uai-surface-inverse, #242729);--tooltip-arrow-size:var(--uai-sizing-2xs, 0.5rem);--tooltip-hairline:var(--uai-border-width-default, 1px);--tooltip-gap:calc(var(--tooltip-arrow-size) + var(--uai-spacing-3xs, 0.125rem));position:absolute;left:50%;-webkit-box-sizing:border-box;box-sizing:border-box;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:var(--uai-sizing-lg, 1.5rem);max-width:var(--uai-width-tooltip, 15rem);padding:var(--uai-spacing-xs, 0.5rem);border-radius:var(--uai-radius-md, 0.5rem);background:var(--tooltip-bg);-webkit-box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));box-shadow:var(--uai-elevation-2, 0px 6px 16px -4px rgba(0, 0, 0, 0.16));color:var(--uai-content-inverse, #ffffff);font-family:var(--uai-font-family-sans, Figtree), sans-serif;white-space:break-spaces;cursor:default;z-index:9000;visibility:hidden;opacity:0;pointer-events:none;-webkit-transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), visibility var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1));transition:opacity var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1)), visibility var(--uai-duration-fast, 150ms) var(--uai-easing-standard, cubic-bezier(0.25, 0.1, 0.25, 1))}@media (prefers-reduced-motion: reduce){.tooltip__tip{-webkit-transition:none;transition:none}}.tooltip__tip--visible{visibility:visible;opacity:1}.tooltip__tip::before{content:"";left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;margin-left:calc(-1 * var(--tooltip-arrow-size));border-width:var(--tooltip-arrow-size)}.tooltip__tip--top-center,.tooltip__tip--top-left,.tooltip__tip--top-right{bottom:calc(100% + var(--tooltip-gap))}.tooltip__tip--top-center::before,.tooltip__tip--top-left::before,.tooltip__tip--top-right::before{top:100%;border-top-color:var(--tooltip-bg)}.tooltip__tip--top-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--top-left::before{left:calc(15% + var(--tooltip-arrow-size))}.tooltip__tip--top-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--top-right::before{left:calc(85% - var(--tooltip-arrow-size))}.tooltip__tip--bottom-center,.tooltip__tip--top-center{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip__tip--left-center,.tooltip__tip--right-center{-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}.tooltip__tip--right-center,.tooltip__tip--right-top,.tooltip__tip--right-bottom{left:calc(100% + var(--tooltip-gap));top:50%}.tooltip__tip--right-center::before,.tooltip__tip--right-top::before,.tooltip__tip--right-bottom::before{left:calc(var(--tooltip-hairline) - var(--tooltip-arrow-size));top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-right-color:var(--tooltip-bg)}.tooltip__tip--right-top{top:0}.tooltip__tip--right-top::before{top:40%}.tooltip__tip--right-bottom{top:initial;bottom:0}.tooltip__tip--right-bottom::before{top:60%}.tooltip__tip--bottom-center,.tooltip__tip--bottom-right,.tooltip__tip--bottom-left{top:calc(100% + var(--tooltip-gap))}.tooltip__tip--bottom-center::before,.tooltip__tip--bottom-right::before,.tooltip__tip--bottom-left::before{bottom:100%;border-bottom-color:var(--tooltip-bg)}.tooltip__tip--bottom-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--bottom-right::before{left:calc(85% - var(--tooltip-arrow-size))}.tooltip__tip--bottom-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--bottom-left::before{left:calc(15% + var(--tooltip-arrow-size))}.tooltip__tip--left-center,.tooltip__tip--left-top,.tooltip__tip--left-bottom{left:auto;right:calc(100% + var(--tooltip-gap));top:50%}.tooltip__tip--left-center::before,.tooltip__tip--left-top::before,.tooltip__tip--left-bottom::before{left:auto;right:calc(var(--tooltip-hairline) - 2 * var(--tooltip-arrow-size));top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-left-color:var(--tooltip-bg)}.tooltip__tip--left-top{top:0}.tooltip__tip--left-top::before{top:40%}.tooltip__tip--left-bottom{top:initial;bottom:0}.tooltip__tip--left-bottom::before{top:60%}.tooltip__text{--uai-typo-color:currentColor;display:block;white-space:break-spaces}`;

const POSITIONS = [
    'top-center',
    'top-left',
    'top-right',
    'left-center',
    'left-top',
    'left-bottom',
    'bottom-center',
    'bottom-right',
    'bottom-left',
    'right-center',
    'right-top',
    'right-bottom',
];
let tooltipIds = 0;
const formatText = (text) => (text ? text.replace(/<br>/gi, '\r\n') : '');
const UaiTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isVisible = false;
        this.tipId = `uai-tooltip-${++tooltipIds}`;
        /** Tooltip text; <br> breaks the line. Use short hints; pair with the wrapped element; avoid essential information. */
        this.tooltipText = 'Tooltip';
        /** Prevents the tooltip from showing. Use when the wrapped element is unavailable; pair with explanatory text elsewhere. */
        this.disabled = false;
        /** Placement relative to the wrapped element. Use the side with free space; avoid covering related content. */
        this.position = 'left-center';
        /** Maximum tooltip width as a CSS length. Defaults to the width/tooltip token; use for long text; avoid widths narrower than the content needs. */
        this.maxWidth = null;
        /** Test selector on the trigger wrapper. Use for automation; pair with semantic queries. Avoid styling by it. */
        this.dataTest = null;
        this.onKeyDown = (event) => {
            if (event.key === 'Escape' && this.isVisible)
                this.isVisible = false;
        };
    }
    /** Shows the tooltip. Use for imperative control; pair with invisible. Avoid calling it while disabled. */
    async visible() {
        this.isVisible = true;
    }
    /** Hides the tooltip. Use for imperative control; pair with visible. Avoid leaving it open after the task ends. */
    async invisible() {
        this.isVisible = false;
    }
    tooltipTextChanged() {
        this.textVerify = formatText(this.tooltipText);
    }
    maxWidthChanged() {
        this.maxWidthTooltip = this.maxWidth;
    }
    disabledChanged() {
        if (this.disabled)
            this.isVisible = false;
    }
    componentWillLoad() {
        this.textVerify = formatText(this.tooltipText);
        this.maxWidthTooltip = this.maxWidth;
    }
    setVisibility(value) {
        this.isVisible = this.disabled ? false : value;
    }
    render() {
        const position = POSITIONS.find((candidate) => candidate === this.position) || 'left-center';
        return (h(Host, { key: '18ca987ea97f82902c3d1eb80a3f3f7cd491c151' }, h("div", { key: 'cfab7f622afb9492619f0b20996e235e8c35d667', class: "tooltip__wrapper" }, h("div", { key: 'c6d699c5dbb3c42f93068c1d201ea66c8fc20376', class: "tooltip__trigger", onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), onFocusin: () => this.setVisibility(true), onFocusout: () => this.setVisibility(false), onKeyDown: this.onKeyDown, "data-test": this.dataTest, "aria-describedby": this.tipId }, h("slot", { key: '4d6ead9beba421c220e004bb81a703ee7388b8c3' })), h("div", { key: '3f0c270f8ad1fe70df46b3acc2b48f875466547b', id: this.tipId, part: "tip", role: "tooltip", class: {
                tooltip__tip: true,
                [`tooltip__tip--${position}`]: true,
                'tooltip__tip--visible': this.isVisible,
            }, style: { maxWidth: this.maxWidthTooltip } }, h("uai-typo", { key: 'bd2a4a0989a4672610a6739c6ee88c9d38f8e806', class: "tooltip__text", tag: "span", variant: "caption", margin: false }, this.textVerify)))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "tooltipText": [{
                "tooltipTextChanged": 0
            }],
        "maxWidth": [{
                "maxWidthChanged": 0
            }],
        "disabled": [{
                "disabledChanged": 0
            }]
    }; }
};
UaiTooltip.style = uaiTooltipCss();

export { UaiTooltip as uai_tooltip };
