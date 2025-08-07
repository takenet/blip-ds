'use strict';

var index = require('./index-D_zq0Z7d.js');

const tabCss = ".bds-tab{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:content-box;box-sizing:content-box;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;max-width:270px;height:46px;max-height:48px;cursor:pointer;text-align:center;color:var(--color-content-disable, rgb(89, 89, 89));border-bottom:2px solid transparent}.bds-tab:not(:last-child){margin-right:32px}.bds-tab:hover{color:var(--color-content-default, rgb(40, 40, 40))}.bds-tab--selected{-webkit-animation-name:selectFade;animation-name:selectFade;-webkit-animation-duration:0.75s;animation-duration:0.75s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.bds-tab__text{min-width:90px;max-width:270px}@-webkit-keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@keyframes selectFade{from{border-bottom:2px solid transparent;color:var(--color-content-default, rgb(40, 40, 40))}to{border-bottom:2px solid var(--color-brand, rgb(0, 150, 250));color:var(--color-content-default, rgb(40, 40, 40))}}@media (max-width: 599px){.bds-tab{min-width:110px;text-overflow:ellipsis}}";

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
        return (index.h(index.Host, { key: 'f4db204ee53fea82e70d6c996597494189fc4fb1', class: {
                'bds-tab': true,
                ['bds-tab--selected']: this.isActive,
            }, onClick: this.onClick.bind(this) }, index.h("div", { key: '8adb9491ed811c2f5a79d40b25c8f278f4b45926', class: "bds-tab__text" }, index.h("bds-typo", { key: '4b03366759aa0364c55b73bb7fa4d6df7265f822', variant: "fs-16", bold: bold }, this.label))));
    }
};
Tab.style = tabCss;

exports.bds_tab = Tab;
//# sourceMappingURL=bds-tab.entry.cjs.js.map

//# sourceMappingURL=bds-tab.cjs.entry.js.map