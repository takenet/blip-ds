'use strict';

var index = require('./index-BuAR9UTp.js');

const tabCss = () => `.bds-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:content-box;box-sizing:content-box;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:270px;height:46px;max-height:48px;cursor:pointer;text-align:center;color:var(--color-content-disable, rgb(89, 89, 89));border-bottom:2px solid transparent}.bds-tab:not(:last-child){margin-right:32px}.bds-tab:hover{color:var(--color-content-default, rgb(40, 40, 40))}.bds-tab--selected{-webkit-animation-name:selectFade;animation-name:selectFade;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bds-tab__text{min-width:90px;max-width:270px}@-webkit-keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@media (max-width: 599px){.bds-tab{min-width:110px;text-overflow:ellipsis}}`;

const Tab = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bdsTabChange = index.createEvent(this, "bdsTabChange");
        /**
         * Prop to control externally if a tab will be active by default
         */
        this.active = false;
        /**
         * State to control if a tab is current active
         */
        this.isActive = false;
    }
    handleTabChange(event) {
        this.isActive = event.detail == this.group;
    }
    async onClick() {
        this.bdsTabChange.emit(this.group);
    }
    render() {
        const bold = this.isActive ? 'bold' : 'regular';
        return (index.h(index.Host, { key: '6d9d16b72a4d2fb2e9c98d3819968f0adb2e0243', class: {
                'bds-tab': true,
                ['bds-tab--selected']: this.isActive,
            }, onClick: this.onClick.bind(this) }, index.h("div", { key: '2323b7838db47d9ef455c0149168a4433b2cfd6c', class: "bds-tab__text" }, index.h("bds-typo", { key: 'e50bf6c166c1c4b12c25890237bc4a9fe7de4491', variant: "fs-16", bold: bold }, this.label))));
    }
};
Tab.style = tabCss();

exports.bds_tab = Tab;
