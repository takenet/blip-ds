import { p as proxyCustomElement, H, h } from './index.js';
import { d as defineCustomElement$1 } from './p-BTwF0c-l.js';

const tooltipCss = ".tooltip__wrapper{display:inline-block;position:relative}.tooltip__tip{position:absolute;left:50%;border-radius:8px;padding:8px;background:var(--color-content-default, rgb(40, 40, 40));z-index:90000;white-space:normal;width:-webkit-max-content;width:-moz-max-content;width:max-content;min-width:32px;max-width:320px;-webkit-box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));box-shadow:0px 6px 16px -4px var(--color-shadow-1, rgba(0, 0, 0, 0.16));visibility:hidden;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:default}.tooltip__tip--visible{visibility:visible}.tooltip__tip::before{content:\"\";left:50%;border:solid transparent;height:0;width:0;position:absolute;pointer-events:none;margin-left:-6px;border-width:6px}.tooltip__tip--top-center,.tooltip__tip--top-left,.tooltip__tip--top-right{bottom:calc(100% + 10px)}.tooltip__tip--top-center::before,.tooltip__tip--top-left::before,.tooltip__tip--top-right::before{top:100%;border-top-color:var(--color-content-default, rgb(40, 40, 40))}.tooltip__tip--top-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--top-left::before{left:calc(15% + 6px)}.tooltip__tip--top-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--top-right::before{left:calc(85% - 6px)}.tooltip__tip--bottom-center,.tooltip__tip--top-center{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.tooltip__tip--left-center,.tooltip__tip--right-center{-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%)}.tooltip__tip--right-center,.tooltip__tip--right-top,.tooltip__tip--right-bottom{left:calc(100% + 10px);top:50%}.tooltip__tip--right-center::before,.tooltip__tip--right-top::before,.tooltip__tip--right-bottom::before{left:-5px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-right-color:var(--color-content-default, rgb(40, 40, 40))}.tooltip__tip--right-top{top:0}.tooltip__tip--right-top::before{top:40%}.tooltip__tip--right-bottom{top:initial;bottom:0}.tooltip__tip--right-bottom::before{top:60%}.tooltip__tip--bottom-center,.tooltip__tip--bottom-right,.tooltip__tip--bottom-left{top:calc(100% + 10px)}.tooltip__tip--bottom-center::before,.tooltip__tip--bottom-right::before,.tooltip__tip--bottom-left::before{bottom:100%;border-bottom-color:var(--color-content-default, rgb(40, 40, 40))}.tooltip__tip--bottom-right{left:initial;right:0;-webkit-transform:translateX(15%);transform:translateX(15%)}.tooltip__tip--bottom-right::before{left:calc(85% - 6px)}.tooltip__tip--bottom-left{left:0;-webkit-transform:translateX(-15%);transform:translateX(-15%)}.tooltip__tip--bottom-left::before{left:calc(15% + 6px)}.tooltip__tip--left-center,.tooltip__tip--left-top,.tooltip__tip--left-bottom{left:auto;right:calc(100% + 10px);top:50%}.tooltip__tip--left-center::before,.tooltip__tip--left-top::before,.tooltip__tip--left-bottom::before{left:auto;right:-11px;top:50%;-webkit-transform:translateX(0) translateY(-50%);transform:translateX(0) translateY(-50%);border-left-color:var(--color-content-default, rgb(40, 40, 40))}.tooltip__tip--left-top{top:0}.tooltip__tip--left-top::before{top:40%}.tooltip__tip--left-bottom{top:initial;bottom:0}.tooltip__tip--left-bottom::before{top:60%}.tooltip__tip__text pre{margin:0;display:-ms-flexbox;display:flex;font-family:inherit;white-space:break-spaces}.tooltip__tip__text .text{color:var(--color-surface-1, rgb(246, 246, 246))}";

const Tooltip = /*@__PURE__*/ proxyCustomElement(class Tooltip extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Used to set tooltip visibility
         */
        this.isMouseOver = false;
        /**
         * Used to set tooltip text
         */
        this.tooltipText = 'Tooltip';
        /**
         * Used to disable tooltip when the button are avalible
         */
        this.disabled = false;
        /**
         * Used to set tooltip position
         */
        this.position = 'left-center';
        /**
         * Used to set tooltip max width
         */
        this.maxWidth = '320px';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    /**
     * Method for change the visibility of tooltip.
     */
    async visible() {
        this.isMouseOver = true;
    }
    /**
     * Method for change the visibility of tooltip.
     */
    async invisible() {
        this.isMouseOver = false;
    }
    setVisibility(value) {
        if (this.disabled) {
            this.isMouseOver = false;
            return;
        }
        this.isMouseOver = value;
    }
    componentWillLoad() {
        this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
        this.maxWidtTooltip = this.maxWidth;
    }
    tooltipTextChanged() {
        this.textVerify = this.tooltipText ? this.tooltipText.replace(/<br>/gi, '\r\n') : '';
    }
    maxWidthChanged() {
        this.maxWidtTooltip = this.maxWidth;
    }
    render() {
        const styleTooltip = {
            maxWidth: this.maxWidtTooltip,
        };
        return (h("div", { key: '6da2ea779f9807677a19729e15ccd61aca97b0ca', class: "tooltip__wrapper" }, h("div", { key: 'c37849f8004ccf25a43af153e2f5a7261fb138ef', onMouseEnter: () => this.setVisibility(true), onMouseLeave: () => this.setVisibility(false), "data-test": this.dataTest }, h("slot", { key: '653e81c1c01d88500dc16a82396bba779e8b9273' })), h("div", { key: '4a4a53fabfdcb86e3ee0071da326b467010fb6d6', class: {
                tooltip__tip: true,
                [`tooltip__tip--${this.position}`]: true,
                'tooltip__tip--visible': this.isMouseOver,
            }, style: styleTooltip }, h("div", { key: '6b2efdb0caa33e685195c0f6180c6dbc707e5571', class: { tooltip__tip__text: true } }, h("pre", { key: '6de01456532d086f8558bcaa0a9546081778b7d4' }, h("bds-typo", { key: '93c3a9e4c145c1daf59514eb50229f0571377df4', class: "text", "no-wrap": "false", variant: "fs-12" }, this.textVerify))))));
    }
    static get watchers() { return {
        "tooltipText": ["tooltipTextChanged"],
        "maxWidth": ["maxWidthChanged"]
    }; }
    static get style() { return tooltipCss; }
}, [1, "bds-tooltip", {
        "tooltipText": [1025, "tooltip-text"],
        "disabled": [516],
        "position": [1],
        "maxWidth": [1, "max-width"],
        "dataTest": [1, "data-test"],
        "isMouseOver": [32],
        "textVerify": [32],
        "maxWidtTooltip": [32],
        "visible": [64],
        "invisible": [64]
    }, undefined, {
        "tooltipText": ["tooltipTextChanged"],
        "maxWidth": ["maxWidthChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-tooltip", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-tooltip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Tooltip);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { Tooltip as T, defineCustomElement as d };
//# sourceMappingURL=p-Y8FmSKY0.js.map

//# sourceMappingURL=p-Y8FmSKY0.js.map