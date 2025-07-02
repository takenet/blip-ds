import { p as proxyCustomElement, H, h, a as Host } from './index.js';
import { d as defineCustomElement$2 } from './p-BTwF0c-l.js';

const progressBarCss = ":host{display:block}.progress_bar{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;border-radius:32px;border:1px solid var(--color-content-disable, rgb(89, 89, 89));margin-bottom:4px}.progress_bar.size_small{height:8px}.progress_bar.size_small .bar_behind .progress{border-radius:1px}.progress_bar.size_default{height:16px}.progress_bar.size_default .bar_behind .progress{border-radius:2px}.progress_bar .bar_behind{position:absolute;inset:0.5px 1px 1px 0.5px;border-radius:16px;overflow:hidden}.progress_bar .bar_behind .progress{position:absolute;height:100%;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;overflow:hidden}.progress_bar .bar_behind .progress.color_default{background-color:var(--color-extended-blue, rgb(25, 104, 240))}.progress_bar .bar_behind .progress.color_positive{background-color:var(--color-extended-green, rgb(53, 222, 144))}.progress_bar .bar_behind .progress.color_information{background-color:var(--color-extended-yellow, rgb(251, 207, 35))}.progress_bar .bar_behind .progress.color_warning{background-color:var(--color-extended-red, rgb(230, 15, 15))}.progress_bar .bar_behind .progress .loading{position:absolute;left:-16px;width:calc(100% + 16px);height:100%;background:rgb(255, 255, 255);background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(75%, rgba(255, 255, 255, 0)), color-stop(75%, rgba(0, 0, 0, 0.26)));background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 75%, rgba(0, 0, 0, 0.26) 75%);background-size:4px;-webkit-transform:skewX(-15deg);transform:skewX(-15deg);-webkit-animation-name:load;animation-name:load;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.typo_progress{color:var(--color-content-default, rgb(40, 40, 40))}@-webkit-keyframes load{from{left:-16px}to{left:0}}@keyframes load{from{left:-16px}to{left:0}}";

const BdsProgressBar$1 = /*@__PURE__*/ proxyCustomElement(class BdsProgressBar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Percent, property to enter the progress bar status percentage value.
         */
        this.percent = 0;
        /**
         * Size, property to define size of component.
         */
        this.size = 'default';
        /**
         * Text, property to define status of component.
         */
        this.color = 'default';
        /**
         * Text, property to enable the bar info text.
         */
        this.text = '';
        /**
         * Data test is the prop to specifically test the component action object.
         */
        this.dataTest = null;
    }
    render() {
        const styles = { width: `${this.percent ? (this.percent > 100 ? 100 : this.percent) : 0}%` };
        return (h(Host, { key: 'e9b0c2808b8d5e3e417f228f90cf8b8f88d7f28a' }, h("div", { key: 'a22838e950ada1be2ab18c0671bb04dd72c67167', class: { progress_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { key: 'fbf4eaf26ccdb84513cf881ddb2ab5ba45068301', class: { bar_behind: true } }, h("div", { key: '172fc6bc7c23a90a3b0787e1b1ac84294352c2a5', class: { progress: true, [`color_${this.color}`]: true }, style: styles }))), this.text && (h("div", { key: '1b15492bcd477f83e0626f27f8568572564c317d', class: { typo_progress: true } }, h("bds-typo", { key: '74abf932552e1c254e9f0f7e78d302b248f2cfbc', variant: "fs-14" }, this.text)))));
    }
    static get style() { return progressBarCss; }
}, [1, "bds-progress-bar", {
        "percent": [2],
        "size": [1],
        "color": [1],
        "text": [1],
        "dataTest": [1, "data-test"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-progress-bar", "bds-typo"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-progress-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsProgressBar$1);
            }
            break;
        case "bds-typo":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const BdsProgressBar = BdsProgressBar$1;
const defineCustomElement = defineCustomElement$1;

export { BdsProgressBar, defineCustomElement };
//# sourceMappingURL=bds-progress-bar.js.map

//# sourceMappingURL=bds-progress-bar.js.map