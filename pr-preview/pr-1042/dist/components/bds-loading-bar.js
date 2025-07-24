import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const loadingBarCss = ":host{display:block}.loading_bar{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;border-radius:32px;border:1px solid var(--color-content-disable, rgb(89, 89, 89));margin-bottom:8px}.loading_bar.size_small{height:8px}.loading_bar.size_small .bar_behind .loading{border-radius:1px}.loading_bar.size_default{height:16px}.loading_bar.size_default .bar_behind .loading{border-radius:2px}.loading_bar .bar_behind{position:absolute;inset:0.5px 1px 1px 0.5px;border-radius:16px;overflow:hidden}.loading_bar .bar_behind .loading{position:absolute;height:100%;background-color:var(--color-extended-blue, rgb(25, 104, 240));-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;overflow:hidden}.loading_bar .bar_behind .loading .loader{position:absolute;left:-16px;width:calc(100% + 16px);height:100%;background:rgb(255, 255, 255);background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(75%, rgba(255, 255, 255, 0)), color-stop(75%, rgba(0, 0, 0, 0.26)));background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 75%, rgba(0, 0, 0, 0.26) 75%);background-size:4px;-webkit-transform:skewX(-15deg);transform:skewX(-15deg);-webkit-animation-name:load;animation-name:load;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.typo_loading{padding-left:8px;padding-right:8px;color:var(--color-content-default, rgb(40, 40, 40))}@-webkit-keyframes load{from{left:-16px}to{left:0}}@keyframes load{from{left:-16px}to{left:0}}";

const BdsloadingBar = /*@__PURE__*/ proxyCustomElement(class BdsloadingBar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        /**
         * Percent, property to enter the loading bar status percentage value.
         */
        this.percent = 0;
        /**
         * Size, property to define size of component.
         */
        this.size = 'default';
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
        return (h(Host, { key: '8a86c5318f8a942d8b731fa5309a966b3ca0aa5d' }, h("div", { key: '0d856fee61837d68be3c09c8949ec681f02ada3f', class: { loading_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, h("div", { key: 'bf99e339fea96af7dbb1f3a8e481e889ca684911', class: { bar_behind: true } }, h("div", { key: '0985dc5a8733d096481d4945a5437406a65e716e', class: { loading: true }, style: styles }, h("div", { key: '9262f9c270bf6ed67a87c1d3c870d3862c5312e1', class: "loader" }))))));
    }
    static get style() { return loadingBarCss; }
}, [1, "bds-loading-bar", {
        "percent": [2],
        "size": [1],
        "text": [1],
        "dataTest": [1, "data-test"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["bds-loading-bar"];
    components.forEach(tagName => { switch (tagName) {
        case "bds-loading-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, BdsloadingBar);
            }
            break;
    } });
}

const BdsLoadingBar = BdsloadingBar;
const defineCustomElement = defineCustomElement$1;

export { BdsLoadingBar, defineCustomElement };
//# sourceMappingURL=bds-loading-bar.js.map

//# sourceMappingURL=bds-loading-bar.js.map