'use strict';

var index = require('./index-ljSeaagN.js');

const loadingBarCss = ":host{display:block}.loading_bar{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;border-radius:32px;border:1px solid var(--color-content-disable, rgb(89, 89, 89));margin-bottom:8px}.loading_bar.size_small{height:8px}.loading_bar.size_small .bar_behind .loading{border-radius:1px}.loading_bar.size_default{height:16px}.loading_bar.size_default .bar_behind .loading{border-radius:2px}.loading_bar .bar_behind{position:absolute;inset:0.5px 1px 1px 0.5px;border-radius:16px;overflow:hidden}.loading_bar .bar_behind .loading{position:absolute;height:100%;background-color:var(--color-extended-blue, rgb(25, 104, 240));-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:0.3s;transition-duration:0.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;overflow:hidden}.loading_bar .bar_behind .loading .loader{position:absolute;left:-16px;width:calc(100% + 16px);height:100%;background:rgb(255, 255, 255);background:-webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(75%, rgba(255, 255, 255, 0)), color-stop(75%, rgba(0, 0, 0, 0.26)));background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 75%, rgba(0, 0, 0, 0.26) 75%);background-size:4px;-webkit-transform:skewX(-15deg);transform:skewX(-15deg);-webkit-animation-name:load;animation-name:load;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.typo_loading{padding-left:8px;padding-right:8px;color:var(--color-content-default, rgb(40, 40, 40))}@-webkit-keyframes load{from{left:-16px}to{left:0}}@keyframes load{from{left:-16px}to{left:0}}";

const BdsloadingBar = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'ab13fc090bf94745c71f3d56e6320a257ba10c1f' }, index.h("div", { key: '095d285f30264f774df03300ddf48f6ca0058f82', class: { loading_bar: true, [`size_${this.size}`]: true }, "data-test": this.dataTest }, index.h("div", { key: '4eab84a057402bd546602c38d951a4985884a23a', class: { bar_behind: true } }, index.h("div", { key: '710b82f465f6194c3b3952ede57de1f4d176ce72', class: { loading: true }, style: styles }, index.h("div", { key: '0675600ee02ca4efe2f7a1a460efb07f622a988c', class: "loader" }))))));
    }
};
BdsloadingBar.style = loadingBarCss;

exports.bds_loading_bar = BdsloadingBar;
//# sourceMappingURL=bds-loading-bar.entry.cjs.js.map

//# sourceMappingURL=bds-loading-bar.cjs.entry.js.map