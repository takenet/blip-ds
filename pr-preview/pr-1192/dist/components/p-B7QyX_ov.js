import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { l as loadAssetSvg } from './p-2NONefL6.js';

const loadingSpinnerCss = ":host{display:block}.spinner_container{display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.spinner_background{border-radius:50%;border:2px solid}.spinner_background_extra-small{border-width:2px;width:16px;height:16px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_small{border-width:4px;width:32px;height:32px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_standard{border-width:8px;width:64px;height:64px;-webkit-box-sizing:border-box;box-sizing:border-box}.spinner_background_main{border-color:var(--color-content-default, rgb(40, 40, 40));opacity:0.16}.spinner_background_light{border-color:var(--color-content-bright, rgb(255, 255, 255));opacity:0.16}.spinner_background_content{border-color:var(--color-surface-0, rgb(255, 255, 255));opacity:0.16}.spinner_background_positive{border-color:var(--color-positive, #10603b);opacity:0.16}.spinner_background_negative{border-color:var(--color-negative, #e60f0f);opacity:0.16}.spinner_loading{-webkit-animation:rotate 0.5s linear infinite;animation:rotate 0.5s linear infinite;position:absolute}.spinner_loading_extra-small{width:16px;height:16px}.spinner_loading_small{width:32px;height:32px}.spinner_loading_standard{width:64px;height:64px}.spinner_loading_main{color:var(--color-primary, rgb(30, 107, 241))}.spinner_loading_light{color:var(--color-content-bright, rgb(255, 255, 255))}.spinner_loading_content{color:var(--color-surface-0, rgb(255, 255, 255))}.spinner_loading_positive{color:var(--color-positive, #10603b)}.spinner_loading_negative{color:var(--color-negative, #e60f0f)}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";

const BdsLoadingSpinner = /*@__PURE__*/ proxyCustomElement(class BdsLoadingSpinner extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.requestVersion = 0;
        /**
         * 	Sets the color of the spinner, can be 'primary', 'secondary' or 'ghost'
         */
        this.variant = 'primary';
        /**
         * Size, Entered as one of the size. Can be one of:
         * 'small', 'standard', 'large'.
         */
        this.size = 'standard';
        /**
         * Color, Entered as one of the color. Can be one of:
         * 'default', 'white'.
         */
        this.color = 'main';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
        /**Function to transform the svg in a div element. */
        this.formatSvg = (svgContent) => {
            const div = document.createElement('div');
            div.innerHTML = svgContent;
            const svgElm = div.firstElementChild;
            svgElm.removeAttribute('width');
            svgElm.removeAttribute('height');
            return div.innerHTML;
        };
    }
    componentWillLoad() {
        this.setSvgContent();
    }
    async setSvgContent() {
        const version = ++this.requestVersion;
        try {
            const svg = await loadAssetSvg(`asset-component-loading-spinner-${this.size}`);
            if (version === this.requestVersion)
                this.svgContent = this.formatSvg(svg);
        }
        catch (_a) {
            if (version === this.requestVersion)
                this.svgContent = undefined;
        }
    }
    render() {
        return (h(Host, { key: 'df0db60c7f6c8b924aed85e3d8799da9bbb922c9' }, h("div", { key: '675a8d2cb30efbc3d2d7bcbb3da1ad67586921f8', class: {
                spinner_container: true,
                [`spinner_background_${this.size}`]: true,
            }, "data-test": this.dataTest }, h("div", { key: 'd53ff0a9fae8da75e3b8e56e9712f4b251aeef23', class: {
                spinner_background: true,
                [`spinner_background_${this.size}`]: true,
                [`spinner_background_${this.color}`]: true,
            } }), h("div", { key: 'cf636da92299f13b5d60b29347536aa4f00b3c5e', class: {
                spinner_loading: true,
                [`spinner_loading_${this.size}`]: true,
                [`spinner_loading_${this.color}`]: true,
            }, innerHTML: this.svgContent }))));
    }
    static get watchers() { return {
        "size": ["setSvgContent"]
    }; }
    static get style() { return loadingSpinnerCss; }
}, [1, "bds-loading-spinner", {
        "variant": [1],
        "size": [1],
        "color": [1],
        "dataTest": [1, "data-test"],
        "svgContent": [32]
    }, undefined, {
        "size": ["setSvgContent"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-loading-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-loading-spinner":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsLoadingSpinner);
            }
            break;
    } });
}

export { BdsLoadingSpinner as B, defineCustomElement as d };
//# sourceMappingURL=p-B7QyX_ov.js.map

//# sourceMappingURL=p-B7QyX_ov.js.map